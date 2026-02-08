/**
 * Customer Service Page
 * Support and customer service information
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Customer Service - Fidelity Investments",
    description: "Get help with your accounts, find answers to common questions, and connect with Fidelity customer service representatives.",
};

export default function CustomerServicePage() {
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
                                Customer Service
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                We&apos;re here to help you 24/7. Find answers, get support, and connect with our team.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Contact Options */}
                <section className="contact-options" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                How Can We Help You?
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {/* Phone Support */}
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
                                        📞
                                    </div>
                                    <Heading level="h3" weight="semibold">
                                        Call Us
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        24/7 customer service support
                                    </Text>
                                    <Text weight="semibold" style={{ fontSize: '20px', marginBottom: '16px' }}>
                                        1-800-343-3548
                                    </Text>
                                    <Button variant="primary" size="md">
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

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
                                        Chat with a representative
                                    </Text>
                                    <Text color="muted">
                                        Available 24/7
                                    </Text>
                                    <div style={{ marginTop: '16px' }}>
                                        <Button variant="primary" size="md">
                                            Start Chat
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>

                            {/* Virtual Assistant */}
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
                                        AI-powered virtual assistant
                                    </Text>
                                    <Text color="muted">
                                        Get instant answers
                                    </Text>
                                    <div style={{ marginTop: '16px' }}>
                                        <Button variant="primary" size="md">
                                            Try It Now
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Common Questions */}
                <section className="common-questions" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Common Questions
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        How do I open an account?
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Opening an account is easy. Click &quot;Open an Account&quot; at the top of the page and follow the simple steps.
                                    </Text>
                                    <a href="/auth/open-account" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500, display: 'inline-block', marginTop: '12px' }}>
                                        Open an Account →
                                    </a>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        How do I reset my password?
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Click &quot;Log In&quot; and select &quot;Forgot Username or Password&quot; to reset your credentials.
                                    </Text>
                                    <a href="/auth/login" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500, display: 'inline-block', marginTop: '12px' }}>
                                        Reset Password →
                                    </a>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        How do I transfer money?
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        You can transfer funds electronically or by mail. Visit the Transfers page for detailed instructions.
                                    </Text>
                                    <a href="/accounts/transfers" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500, display: 'inline-block', marginTop: '12px' }}>
                                        Transfers →
                                    </a>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Where can I view my statements?
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Log in and navigate to Documents to view and download your account statements.
                                    </Text>
                                    <a href="/accounts/documents" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500, display: 'inline-block', marginTop: '12px' }}>
                                        View Documents →
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Additional Resources */}
                <section className="resources" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Additional Resources
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Help Center
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Browse our comprehensive help articles and guides.
                                    </Text>
                                    <a href="/support/help-center" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        Visit Help Center →
                                    </a>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Contact Us
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Find the right contact information for your needs.
                                    </Text>
                                    <a href="/support/contact" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        Get Contact Info →
                                    </a>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Branch Locations
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Visit a Fidelity branch near you for in-person support.
                                    </Text>
                                    <a href="/company/locations" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        Find Locations →
                                    </a>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Privacy & Security
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Learn about our security practices and privacy policy.
                                    </Text>
                                    <a href="/support/security" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        Security Info →
                                    </a>
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
                                Need Immediate Assistance?
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Our customer service representatives are available 24 hours a day, 7 days a week.
                            </Text>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Call 1-800-343-3548
                            </Button>
                        </div>
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
