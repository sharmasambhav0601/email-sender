import Providers from "./providers";

export const metadata = {
  title: "Email Sender",
  description: "Send emails using Gmail OAuth2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}