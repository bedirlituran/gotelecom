import "./globals.css";

export const metadata = {
  title: "GO TELECOM",
  description: "GGO TELECOM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
