import Header from "@/components/Header/Header";

export const metadata = {
  title: "Fake Storefront",
  description: "A demo storefront built with Next.js and Fake Store API",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
