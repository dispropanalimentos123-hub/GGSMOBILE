import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"GGS Mobile",description:"A inteligência que administra seu escritório."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}