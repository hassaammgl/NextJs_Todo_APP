import "../styles/app.scss";

export const metadata = {
  title: "Hassaam Next Todo app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
