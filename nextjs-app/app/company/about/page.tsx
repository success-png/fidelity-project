/**
 * About Fidelity Page
 * Company information and history
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "About Fidelity - Fidelity Investments",
    description: "Learn about Fidelity Investments, our history, mission, and commitment to helping people achieve their financial goals.",
};

export default function AboutPage() {
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
                                About Fidelity
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px', maxWidth: '700px' }}>
                                Helping people achieve their financial goals for over 75 years.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Our Story */}
                <section className="story" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px', alignItems: 'center' }}>
                            <div>
                                <Heading level="h2" weight="bold" style={{ marginBottom: '16px' }}>
                                    Our Story
                                </Heading>
                                <Text color="muted" style={{ marginBottom: '16px' }}>
                                    Founded in 1946, Fidelity Investments has grown from a single office managing a single fund to one of the world&apos;s largest financial services companies.
                                </Text>
                                <Text color="muted">
                                    Today, we serve millions of customers, managing over $4.9 trillion in total assets.
                                </Text>
                            </div>
                            <Card withShadow>
                                <CardBody style={{ padding: '32px', backgroundColor: '#f5f5f5' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                                        <div style={{ textAlign: 'center' }}>
                                            <Text weight="bold" style={{ fontSize: '36px', color: '#0d6e4e' }}>$4.9T</Text>
                                            <Text size="sm" color="muted">Total Assets</Text>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <Text weight="bold" style={{ fontSize: '36px', color: '#0d6e4e' }}>30M</Text>
                                            <Text size="sm" color="muted">Customer Relationships</Text>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <Text weight="bold" style={{ fontSize: '36px', color: '#0d6e4e' }}>200+</Text>
                                            <Text size="sm" color="muted">Investor Centers</Text>
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <Text weight="bold" style={{ fontSize: '36px', color: '#0d6e4e' }}>75+</Text>
                                            <Text size="sm" color="muted">Years of Service</Text>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Mission & Values */}
                <section className="mission" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Our Mission & Values
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                            {[
                                { title: 'Integrity', desc: 'We do the right thing for our customers.' },
                                { title: 'Objectivity', desc: 'Unbiased advice in customers\' best interests.' },
                                { title: 'Excellence', desc: 'Superior performance in everything we do.' },
                                { title: 'Teamwork', desc: 'Working together to serve our customers.' },
                            ].map((value) => (
                                <Card key={value.title} withShadow>
                                    <CardBody style={{ padding: '32px', textAlign: 'center' }}>
                                        <Heading level="h3" weight="semibold" style={{ marginBottom: '16px' }}>
                                            {value.title}
                                        </Heading>
                                        <Text color="muted">
                                            {value.desc}
                                        </Text>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* CTA */}
                <section className="cta" style={{ padding: '80px 0', backgroundColor: '#0d6e4e' }}>
                    <Container>
                        <div style={{ textAlign: 'center', color: '#ffffff' }}>
                            <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                Ready to Invest?
                            </Heading>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Open an Account
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
