import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "#2f8deb", // Hex color code
    logo: "https://s3.resume.io/uploads/country/logo_default/2/for-light-bg.svg", // Absolute URL to image
  },
  callbacks: {
    async session({ session, token, user }) {
      console.log(session, token, user);
      session.user.id = token.sub;
      return session;
    },
  },
});
