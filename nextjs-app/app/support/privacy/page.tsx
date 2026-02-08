/**
 * Privacy Page
 * Privacy policy and data protection information
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy - Fidelity Investments",
    description: "Fidelity's commitment to protecting your personal information and privacy.",
};

export default function PrivacyPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        '--hero-bg': 'linear-gradient(135deg, #0d6e4e 0%, #094a35 100%)',
                    } as React.CSSProperties}
                >
                    <Container>
                        <div className="hero-card">
                            <Heading level="h1" weight="bold" style={{ color: '#ffffff' }}>
                                Privacy Policy
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px', maxWidth: '700px' }}>
                                Your privacy is important to us. Learn how we protect your personal information.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Main Content */}
                <section className="content" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                            <Card withShadow style={{ marginBottom: '32px' }}>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h2" weight="bold" style={{ marginBottom: '16px' }}>
                                        Our Commitment to Privacy
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        At Fidelity Investments, we understand that you rely on us to protect your personal and financial information. We are committed to maintaining the confidentiality, integrity, and security of your information.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow style={{ marginBottom: '32px' }}>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h2" weight="bold" style={{ marginBottom: '16px' }}>
                                        Information We Collect
                                    </Heading>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '16px' }}>
                                        <div>
                                            <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                                Information You Provide
                                            </Heading>
                                            <ul style={{ paddingLeft: '20px', color: '#666' }}>
                                                <li>Account application information</li>
                                                <li>Transaction history</li>
                                                <li>Communication preferences</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                                Information We Collect
                                            </Heading>
                                            <ul style={{ paddingLeft: '20px', color: '#666' }}>
                                                <li>Account activity and usage</li>
                                                <li>Device and browser information</li>
                                                <li>Cookies and tracking technologies</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card withShadow style={{ marginBottom: '32px' }}>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h2" weight="bold" style={{ marginBottom: '16px' }}>
                                        How We Use Your Information
                                    </Heading>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
                                        {['Account Services', 'Customer Support', 'Security', 'Personalization', 'Compliance', 'Improvement'].map((item) => (
                                            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <span style={{ color: '#0d6e4e' }}>✓</span>
                                                <Text>{item}</Text>
                                            </div>
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h2" weight="bold" style={{ marginBottom: '16px' }}>
                                        Your Privacy Choices
                                    </Heading>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
                                        {['Marketing Communications', 'Cookies', 'Data Sharing', 'Mobile Notifications'].map((choice) => (
                                            <Button key={choice} variant="outline" size="sm">
                                                {choice}
                                            </Button>
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="cta-section" style={{ padding: '80px 0', backgroundColor: '#0d6e4e' }}>
                    <Container>
                        <div style={{ textAlign: 'center', color: '#ffffff' }}>
                            <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                Have Questions About Privacy?
                            </Heading>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Contact Privacy Team
                            </Button>
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
