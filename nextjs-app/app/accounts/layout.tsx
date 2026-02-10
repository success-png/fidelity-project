/**
 * Accounts Layout
 * Shared layout for authenticated account pages
 */

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Account - Fidelity Investments",
    description: "Manage your Fidelity account",
};

export default function AccountsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
