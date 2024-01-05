import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email:",
                    type: "text",
                    placeholder: "your-email",
                },
                password: {
                    label: "password:",
                    type: "password",
                    placeholder: "your-password",
                },
            },
            async authorize(credentials) {
                const user = {id: '1', name: 'J Smith', email: 'JSmith@mail.com', password: '123456'}
                if (credentials?.email === user.email && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            },
        }),
    ],
}