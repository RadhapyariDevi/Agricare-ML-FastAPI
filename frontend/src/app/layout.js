import "./globals.css";
import Sidebar from "../components/layout/Sidebar.jsx";

export const metadata = {
  title: "AgriCare",
  description: "Plant disease diagnosis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-background text-foreground">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
      </body>
    </html>
  );
}