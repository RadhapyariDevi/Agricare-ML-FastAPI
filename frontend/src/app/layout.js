import "./globals.css";
import { AuthProvider } from "../context/AuthContext.jsx";
import AppShell from "../components/layout/AppShell.jsx";

export const metadata = {
  title: "AgriCare",
  description: "Plant disease diagnosis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}