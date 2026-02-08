/**
 * Careers Page
 * Career opportunities at Fidelity Investments
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Careers at Fidelity - Fidelity Investments",
    description: "Join Fidelity Investments and build your career with a company that's dedicated to helping people achieve financial independence.",
};

export default function CareersPage() {
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
                                Careers at Fidelity
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Join a company dedicated to helping people achieve financial independence and build a meaningful career.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Why Fidelity Section */}
                <section className="why-fidelity" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Why Choose Fidelity?
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
                                        🌟
                                    </div>
                                    <Heading level="h3" weight="semibold">
                                        Industry Leader
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        One of the world&apos;s largest and most respected financial services companies.
                                    </Text>
                                </CardBody>
                            </Card>

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
                                        📈
                                    </div>
                                    <Heading level="h3" weight="semibold">
                                        Growth Opportunities
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Extensive training programs and career development resources.
                                    </Text>
                                </CardBody>
                            </Card>

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
                                        🎯
                                    </div>
                                    <Heading level="h3" weight="semibold">
                                        Meaningful Work
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Help millions of people plan for their financial futures.
                                    </Text>
                                </CardBody>
                            </Card>

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
                                        💼
                                    </div>
                                    <Heading level="h3" weight="semibold">
                                        Comprehensive Benefits
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Competitive compensation, health benefits, and retirement plans.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Our Values */}
                <section className="our-values" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px', alignItems: 'center' }}>
                            <div>
                                <Heading level="h2" weight="bold" style={{ marginBottom: '24px' }}>
                                    Our Values
                                </Heading>
                                <Text size="lg" color="muted" style={{ marginBottom: '24px' }}>
                                    At Fidelity, our values guide everything we do. We&apos;re committed to:
                                </Text>
                                <ul style={{ paddingLeft: '20px', color: '#555' }}>
                                    <li style={{ marginBottom: '16px' }}>
                                        <Text weight="semibold">Integrity</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Being honest, transparent, and ethical in all our dealings.</Text>
                                    </li>
                                    <li style={{ marginBottom: '16px' }}>
                                        <Text weight="semibold">Customer Focus</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Putting our customers&apos; needs first in everything we do.</Text>
                                    </li>
                                    <li style={{ marginBottom: '16px' }}>
                                        <Text weight="semibold">Innovation</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Constantly seeking new ways to serve our customers better.</Text>
                                    </li>
                                    <li style={{ marginBottom: '16px' }}>
                                        <Text weight="semibold">Excellence</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Striving for the highest standards in all our work.</Text>
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
                                    By the Numbers
                                </Heading>
                                <div style={{ marginBottom: '32px' }}>
                                    <Text size="4xl" weight="bold" style={{ color: '#ffffff', fontSize: '48px' }}>
                                        40+
                                    </Text>
                                    <Text style={{ color: '#ffffff', marginTop: '4px' }}>
                                        Years of service
                                    </Text>
                                </div>
                                <div style={{ marginBottom: '32px' }}>
                                    <Text size="4xl" weight="bold" style={{ color: '#ffffff', fontSize: '48px' }}>
                                        40M+
                                    </Text>
                                    <Text style={{ color: '#ffffff', marginTop: '4px' }}>
                                        Customers worldwide
                                    </Text>
                                </div>
                                <div>
                                    <Text size="4xl" weight="bold" style={{ color: '#ffffff', fontSize: '48px' }}>
                                        13K+
                                    </Text>
                                    <Text style={{ color: '#ffffff', marginTop: '4px' }}>
                                        Career opportunities
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Open Positions */}
                <section className="open-positions" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Find Your Role
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Explore our career opportunities across various fields
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Technology
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Software engineering, data science, cybersecurity, and more.
                                    </Text>
                                    <Button variant="primary" size="md">
                                        View Positions
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Financial Consulting
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Help clients achieve their financial goals.
                                    </Text>
                                    <Button variant="primary" size="md">
                                        View Positions
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Operations
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Support our core business functions.
                                    </Text>
                                    <Button variant="primary" size="md">
                                        View Positions
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Sales & Relationship Mgmt
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Build lasting relationships with clients.
                                    </Text>
                                    <Button variant="primary" size="md">
                                        View Positions
                                    </Button>
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
                                Ready to Start Your Journey?
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Join a team that&apos;s passionate about helping people achieve financial independence.
                            </Text>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Search All Jobs
                            </Button>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
