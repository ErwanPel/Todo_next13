import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Todo List",
  description: "awesome todo list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Header />
      <body>{children}</body>
    </html>
  );
}
