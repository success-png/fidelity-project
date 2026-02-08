/**
 * Disclosures Page
 * Legal disclosures and important notices
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Disclosures - Fidelity Investments",
    description: "Important legal disclosures, terms of service, and regulatory notices for Fidelity Investments customers.",
};

export default function DisclosuresPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        '--hero-bg': 'linear-gradient(135deg, #4a3728 0%, #2d1f15 100%)',
                    } as React.CSSProperties}
                >
                    <Container>
                        <div className="hero-card">
                            <Heading level="h1" weight="bold" style={{ color: '#ffffff' }}>
                                Disclosures
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px', maxWidth: '600px' }}>
                                Important legal information, terms of service, and regulatory disclosures.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Main Content */}
                <section className="content" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                            {/* Terms of Use */}
                            <Card withShadow style={{ marginBottom: '32px' }}>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h2" weight="bold" style={{ marginBottom: '16px' }}>
                                        Terms of Use
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website.
                                    </Text>
                                    <a href="#" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        Read Full Terms of Use →
                                    </a>
                                </CardBody>
                            </Card>

                            {/* Investment Disclosures */}
                            <Card withShadow style={{ marginBottom: '32px' }}>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h2" weight="bold" style={{ marginBottom: '16px' }}>
                                        Investment Disclosures
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Investing involves risk, including the possible loss of principal. Past performance does not guarantee future results.
                                    </Text>
                                    <ul style={{ paddingLeft: '20px', color: '#666', marginBottom: '16px' }}>
                                        <li style={{ marginBottom: '8px' }}>Stocks and bonds may fluctuate in value</li>
                                        <li style={{ marginBottom: '8px' }}>International investments involve additional risks</li>
                                        <li style={{ marginBottom: '8px' }}>Sector-specific investments may be more volatile</li>
                                    </ul>
                                </CardBody>
                            </Card>

                            {/* Account Agreements */}
                            <Card withShadow style={{ marginBottom: '32px' }}>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h2" weight="bold" style={{ marginBottom: '16px' }}>
                                        Account Agreements
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        The terms and conditions governing your specific account(s) with Fidelity are contained in the account opening documents.
                                    </Text>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '16px' }}>
                                        {['Customer Agreement', 'Margin Agreement', 'Options Agreement', 'Retirement Account Agreement'].map((agreement) => (
                                            <a key={agreement} href="#" style={{ color: '#0d6e4e', textDecoration: 'none', fontSize: '14px' }}>
                                                {agreement}
                                            </a>
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>

                            {/* Regulatory Information */}
                            <Card withShadow>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h2" weight="bold" style={{ marginBottom: '16px' }}>
                                        Regulatory Information
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Fidelity Brokerage Services LLC, Member NYSE, SIPC
                                    </Text>
                                    <div style={{ marginTop: '16px' }}>
                                        <a href="https://brokercheck.finra.org/firm/summary/7784" target="_blank" rel="noopener noreferrer" style={{ color: '#0d6e4e', textDecoration: 'none' }}>
                                            Review with FINRA&apos;s BrokerCheck →
                                        </a>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Regulatory Section */}
                <section className="regulatory-section" style={{ padding: '40px 0', borderTop: '1px solid #e0e0e0' }}>
                    <Container>
                        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://brokercheck.finra.org/firm/summary/7784" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', fontSize: '14px' }}>
                                Review Fidelity Brokerage Services with FINRA&apos;s BrokerCheck
                            </a>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
