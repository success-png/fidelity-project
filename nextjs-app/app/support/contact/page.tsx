/**
 * Contact Us Page
 * Contact information and form for Fidelity customers
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Contact Us - Fidelity Investments",
    description: "Contact Fidelity Investments for all your investment and account needs. Find phone numbers, addresses, and online contact options.",
};

export default function ContactPage() {
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
                                Contact Us
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                We&apos;re here to help. Reach out to us through any of the channels below.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Phone Contact Section */}
                <section className="phone-contact" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Contact Us by Phone
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '700px', margin: '16px auto 0' }}>
                                Our customer service representatives are available 24 hours a day, 7 days a week.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                    <Heading level="h3" weight="semibold">
                                        Individual Accounts
                                    </Heading>
                                    <Text weight="semibold" style={{ fontSize: '28px', marginTop: '16px', marginBottom: '8px', color: '#0d6e4e' }}>
                                        1-800-343-3548
                                    </Text>
                                    <Text color="muted">
                                        24 hours a day, 7 days a week
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                    <Heading level="h3" weight="semibold">
                                        Professional Services
                                    </Heading>
                                    <Text weight="semibold" style={{ fontSize: '28px', marginTop: '16px', marginBottom: '8px', color: '#0d6e4e' }}>
                                        1-800-544-6666
                                    </Text>
                                    <Text color="muted">
                                        Business hours: 8 a.m. - 8 p.m. ET
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                    <Heading level="h3" weight="semibold">
                                        Fixed Income
                                    </Heading>
                                    <Text weight="semibold" style={{ fontSize: '28px', marginTop: '16px', marginBottom: '8px', color: '#0d6e4e' }}>
                                        1-800-251-7257
                                    </Text>
                                    <Text color="muted">
                                        8 a.m. - 10 p.m. ET, Mon-Fri
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                    <Heading level="h3" weight="semibold">
                                        Retirement Services
                                    </Heading>
                                    <Text weight="semibold" style={{ fontSize: '28px', marginTop: '16px', marginBottom: '8px', color: '#0d6e4e' }}>
                                        1-800-544-4774
                                    </Text>
                                    <Text color="muted">
                                        8 a.m. - 8 p.m. ET, Mon-Fri
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Other Ways to Contact */}
                <section className="other-ways" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Other Ways to Reach Us
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {/* Live Chat */}
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
                                        💬
                                    </div>
                                    <Heading level="h3" weight="semibold">
                                        Live Chat
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Chat with a customer service representative
                                    </Text>
                                    <Button variant="primary" size="md">
                                        Start Chat
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Fidelity Assistant */}
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
                                        🤖
                                    </div>
                                    <Heading level="h3" weight="semibold">
                                        Fidelity Assistant
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Get instant answers to your questions
                                    </Text>
                                    <Button variant="primary" size="md">
                                        Try It Now
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Email */}
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
                                        📧
                                    </div>
                                    <Heading level="h3" weight="semibold">
                                        Email Us
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Send us a secure message
                                    </Text>
                                    <Button variant="primary" size="md">
                                        Send Email
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Visit a Branch */}
                <section className="branch-locations" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px', alignItems: 'center' }}>
                            <div>
                                <Heading level="h2" weight="bold">
                                    Visit a Fidelity Branch
                                </Heading>
                                <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                    Experience personalized service at one of our nationwide branch locations. Our investment professionals can help you with:
                                </Text>
                                <ul style={{ marginTop: '24px', paddingLeft: '20px', color: '#555' }}>
                                    <li style={{ marginBottom: '12px' }}>Opening new accounts</li>
                                    <li style={{ marginBottom: '12px' }}>Financial planning consultations</li>
                                    <li style={{ marginBottom: '12px' }}>Investment guidance</li>
                                    <li style={{ marginBottom: '12px' }}>Account servicing</li>
                                </ul>
                                <div style={{ marginTop: '32px' }}>
                                    <Button variant="primary" size="lg">
                                        Find a Branch Near You
                                    </Button>
                                </div>
                            </div>
                            <div style={{
                                backgroundColor: '#0d6e4e',
                                borderRadius: '12px',
                                padding: '48px',
                                textAlign: 'center',
                                color: '#ffffff'
                            }}>
                                <Text size="lg" weight="semibold" style={{ color: '#ffffff', marginBottom: '8px' }}>
                                    Over 190
                                </Text>
                                <Text size="xl" style={{ color: '#ffffff' }}>
                                    Branch Locations Nationwide
                                </Text>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* TTY Section */}
                <section className="tty-section" style={{ padding: '60px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <Card withShadow>
                            <CardBody style={{ padding: '40px', textAlign: 'center' }}>
                                <Heading level="h3" weight="semibold">
                                    Telecommunications Device for the Deaf (TTY)
                                </Heading>
                                <Text size="lg" color="muted" style={{ marginTop: '16px', marginBottom: '16px' }}>
                                    We accommodate customers who are deaf, hard of hearing, or speech-impaired.
                                </Text>
                                <Text weight="semibold" style={{ fontSize: '24px', color: '#0d6e4e' }}>
                                    1-800-259-3845
                                </Text>
                                <Text color="muted" style={{ marginTop: '8px' }}>
                                    Available 24 hours a day, 7 days a week
                                </Text>
                            </CardBody>
                        </Card>
                    </Container>
                </section>

                {/* Regulatory Section */}
                <section className="regulatory-section" style={{ padding: '40px 0', borderTop: '1px solid #e0e0e0' }}>
                    <Container>
                        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a
                                href="https://brokercheck.finra.org/firm/summary/7784"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#333', textDecoration: 'none', fontSize: '14px' }}
                            >
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
