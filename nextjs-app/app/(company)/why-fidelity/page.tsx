/**
 * Why Fidelity Page
 * Reasons to choose Fidelity for your investment needs
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Why Fidelity - Fidelity Investments",
    description: "Discover why millions of investors choose Fidelity for their financial needs. Learn about our commitment to value, service, and innovation.",
};

export default function WhyFidelityPage() {
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
                                Why Fidelity
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Experience the Fidelity difference and discover why millions of investors trust us with their financial futures.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Value Proposition */}
                <section className="value-proposition" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                The Fidelity Advantage
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            {/* Low Costs */}
                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        backgroundColor: '#0d6e4e',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 16px',
                                        fontSize: '28px'
                                    }}>
                                        💰
                                    </div>
                                    <Heading level="h3" weight="semibold">
                                        Low Costs
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        We offer some of the lowest expenses in the industry, helping you keep more of your returns.
                                    </Text>
                                </CardBody>
                            </Card>

                            {/* Investment Choice */}
                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        backgroundColor: '#1a5c8c',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 16px',
                                        fontSize: '28px'
                                    }}>
                                        📊
                                    </div>
                                    <Heading level="h3" weight="semibold">
                                        Investment Choice
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Access to thousands of mutual funds, ETFs, stocks, bonds, and more.
                                    </Text>
                                </CardBody>
                            </Card>

                            {/* Powerful Technology */}
                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        backgroundColor: '#6b3d8c',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 16px',
                                        fontSize: '28px'
                                    }}>
                                        💻
                                    </div>
                                    <Heading level="h3" weight="semibold">
                                        Powerful Technology
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Advanced trading platforms and tools to help you make informed decisions.
                                    </Text>
                                </CardBody>
                            </Card>

                            {/* Expert Guidance */}
                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        backgroundColor: '#c45c26',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 16px',
                                        fontSize: '28px'
                                    }}>
                                        👥
                                    </div>
                                    <Heading level="h3" weight="semibold">
                                        Expert Guidance
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Access to financial professionals and educational resources.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Stats Section */}
                <section className="stats-section" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Fidelity by the Numbers
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', textAlign: 'center' }}>
                            <div>
                                <Text size="4xl" weight="bold" style={{ color: '#0d6e4e', fontSize: '48px' }}>
                                    $4.9T
                                </Text>
                                <Text color="muted" style={{ marginTop: '8px' }}>
                                    Assets Under Management
                                </Text>
                            </div>
                            <div>
                                <Text size="4xl" weight="bold" style={{ color: '#0d6e4e', fontSize: '48px' }}>
                                    40M+
                                </Text>
                                <Text color="muted" style={{ marginTop: '8px' }}>
                                    Customer Accounts
                                </Text>
                            </div>
                            <div>
                                <Text size="4xl" weight="bold" style={{ color: '#0d6e4e', fontSize: '48px' }}>
                                    190+
                                </Text>
                                <Text color="muted" style={{ marginTop: '8px' }}>
                                    Branch Locations
                                </Text>
                            </div>
                            <div>
                                <Text size="4xl" weight="bold" style={{ color: '#0d6e4e', fontSize: '48px' }}>
                                    13K+
                                </Text>
                                <Text color="muted" style={{ marginTop: '8px' }}>
                                    Investment Professionals
                                </Text>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Commitment to Customers */}
                <section className="commitment" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px', alignItems: 'center' }}>
                            <div>
                                <Heading level="h2" weight="bold" style={{ marginBottom: '24px' }}>
                                    Our Commitment to You
                                </Heading>
                                <Text size="lg" color="muted" style={{ marginBottom: '24px' }}>
                                    At Fidelity, we&apos;re dedicated to helping you achieve your financial goals. Here&apos;s how we deliver value:
                                </Text>
                                <ul style={{ paddingLeft: '20px', color: '#555' }}>
                                    <li style={{ marginBottom: '16px' }}>
                                        <Text weight="semibold">24/7 Customer Service</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>We&apos;re available around the clock to answer your questions.</Text>
                                    </li>
                                    <li style={{ marginBottom: '16px' }}>
                                        <Text weight="semibold">No Hidden Fees</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Transparent pricing you can understand and trust.</Text>
                                    </li>
                                    <li style={{ marginBottom: '16px' }}>
                                        <Text weight="semibold">Research & Insights</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Access to in-depth research and market analysis.</Text>
                                    </li>
                                    <li style={{ marginBottom: '16px' }}>
                                        <Text weight="semibold">Security & Protection</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Industry-leading security measures to protect your assets.</Text>
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                backgroundColor: '#0d6e4e',
                                borderRadius: '12px',
                                padding: '48px',
                                color: '#ffffff'
                            }}>
                                <Heading level="h3" weight="bold" style={{ color: '#ffffff', marginBottom: '24px' }}>
                                    Awards & Recognition
                                </Heading>
                                <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                                    <Text weight="semibold" style={{ color: '#ffffff' }}>
                                        #1 Overall Broker
                                    </Text>
                                    <Text size="sm" style={{ color: '#ffffff', marginTop: '4px' }}>
                                        8 consecutive years
                                    </Text>
                                </div>
                                <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                                    <Text weight="semibold" style={{ color: '#ffffff' }}>
                                        Best Online Broker
                                    </Text>
                                    <Text size="sm" style={{ color: '#ffffff', marginTop: '4px' }}>
                                        12+ years running
                                    </Text>
                                </div>
                                <div>
                                    <Text weight="semibold" style={{ color: '#ffffff' }}>
                                        Top Rated for Customer Service
                                    </Text>
                                    <Text size="sm" style={{ color: '#ffffff', marginTop: '4px' }}>
                                        Industry leading satisfaction
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="cta-section" style={{ padding: '80px 0', backgroundColor: '#0d6e4e' }}>
                    <Container>
                        <div style={{ textAlign: 'center', color: '#ffffff' }}>
                            <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                Experience the Fidelity Difference
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Open an account today and discover why Fidelity is the choice of millions of investors.
                            </Text>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Open an Account
                            </Button>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
