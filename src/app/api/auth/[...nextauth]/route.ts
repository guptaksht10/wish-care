import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: "/auth/login",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: any; user: any }) {
            
            if(user){
                const dbUser = await prisma.user.findUnique({
                    where: {email: user.email},
                    select: { id: true, name: true, email: true, username: true, image: true, role: true }
                })
                if(dbUser) {
                    token.id = dbUser.id;
                    token.name = dbUser.name;
                    token.email = dbUser.email;
                    token.username = dbUser.username;
                    token.image = dbUser.image;
                    token.role = dbUser.role
                } else {
                    const newUser = await prisma.user.create({
                        data: {
                            email: user.email,
                            name: user.name,
                            image: user.image,
                            role: 'user'
                        }
                    });
                    token.id = newUser.id;
                }
            }
            return token;
        },
        async session({ session, token }: { session: any; token: any }) {
            if(token){
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.username = token.username;
                session.user.image = token.image;
                session.user.role = token.role;
            }
            return session;
        },
        redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
            // Allow absolute URLs or fallback to base
            if (url.startsWith("/")) return `${baseUrl}${url}`
            if (url.startsWith(baseUrl)) return url
            return baseUrl
        }
    }
}

const handler = NextAuth(authOptions as any)

export const getAuthSession = ()=> getServerSession(authOptions as any);

export { handler as GET, handler as POST }