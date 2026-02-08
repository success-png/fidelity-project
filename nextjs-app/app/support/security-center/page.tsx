/**
 * Security Center Page
 * Security information and protection measures
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Security Center - Fidelity Investments",
    description: "Learn about Fidelity's security measures and how to protect your accounts.",
};

export default function SecurityCenterPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        '--hero-bg': 'linear-gradient(135deg, #1a5c8c 0%, #0d3d5c 100%)',
                    } as React.CSSProperties}
                >
                    <Container>
                        <div className="hero-card">
                            <Heading level="h1" weight="bold" style={{ color: '#ffffff' }}>
                                Security Center
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px', maxWidth: '700px' }}>
                                Protecting your accounts and personal information is our top priority.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Security Measures */}
                <section className="measures" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                How We Protect You
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {[
                                { icon: '🔒', title: 'Encryption', desc: '256-bit encryption protects your data' },
                                { icon: '🔑', title: 'Multi-Factor Authentication', desc: 'Additional verification steps' },
                                { icon: '🛡️', title: 'Fraud Monitoring', desc: '24/7 surveillance detects suspicious activity' },
                                { icon: '🏢', title: 'Secure Infrastructure', desc: 'Industry-leading data centers' },
                                { icon: '👤', title: 'Identity Verification', desc: 'Advanced identity tools' },
                                { icon: '📱', title: 'Mobile Security', desc: 'Biometric login and device recognition' },
                            ].map((measure) => (
                                <Card key={measure.title} withShadow>
                                    <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>{measure.icon}</div>
                                        <Heading level="h3" weight="semibold">
                                            {measure.title}
                                        </Heading>
                                        <Text color="muted" style={{ marginTop: '8px' }}>
                                            {measure.desc}
                                        </Text>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Account Protection Tips */}
                <section className="tips" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Protect Your Account
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                            {[
                                { title: 'Use Strong Passwords', desc: 'Create unique passwords with at least 12 characters', icon: '🔐' },
                                { title: 'Enable 2-Factor Authentication', desc: 'Add an extra layer of security to your account', icon: '📲' },
                                { title: 'Monitor Your Accounts', desc: 'Regularly review statements and account activity', icon: '👁️' },
                                { title: 'Watch for Phishing', desc: 'Be wary of suspicious emails and links', icon: '🎣' },
                                { title: 'Keep Software Updated', desc: 'Install security updates promptly', icon: '⬆️' },
                                { title: 'Log Out When Done', desc: 'Always log out when using shared computers', icon: '🚪' },
                            ].map((tip) => (
                                <Card key={tip.title} withShadow>
                                    <CardBody style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div style={{ fontSize: '32px' }}>{tip.icon}</div>
                                        <div>
                                            <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                                {tip.title}
                                            </Heading>
                                            <Text color="muted">
                                                {tip.desc}
                                            </Text>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Report Security Issues */}
                <section className="report" style={{ padding: '80px 0' }}>
                    <Container>
                        <Card withShadow style={{ backgroundColor: '#0d6e4e', color: '#ffffff' }}>
                            <CardBody style={{ padding: '48px', textAlign: 'center' }}>
                                <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                    Report Security Concerns
                                </Heading>
                                <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                    If you suspect unauthorized activity, contact us immediately.
                                </Text>
                                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                        Call 1-800-343-3548
                                    </Button>
                                    <Button variant="secondary" size="lg" style={{ borderColor: '#ffffff', color: '#ffffff' }}>
                                        Report Phishing
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
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
