import "./globals.css";
import Headers from "@/components/ui/header";

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="tr">
      <body style = {{margin: '0', fontFamily: 'sans-serif'}}>
        <Headers />
        <main style = {{minHeight: '80vh'}}>
          {children}
        </main>
      </body>
    </html>
  );
}
