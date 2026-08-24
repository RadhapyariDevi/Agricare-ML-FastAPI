import "./globals.css";
import Sidebar from "../components/layout/Sidebar.jsx";
import {AuthProvider} from "../context/AuthContext.jsx";


export const metadata = {
  title: "AgriCare",
  description: "Plant disease diagnosis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-background text-foreground">
        <AuthProvider>
          <Sidebar />
          <main className="flex-1 p-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}