/**
 * Auth Layout
 * Layout for authentication pages (login, open-account)
 */

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Authentication",
    description: "Fidelity authentication pages",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main style={{ minHeight: 'calc(100vh - 200px)' }}>{children}</main>
            <Footer />
        </>
    );
}
