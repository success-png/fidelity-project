/**
 * Help Center Page
 * Comprehensive help and support resources
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Help Center - Fidelity Investments",
    description: "Find answers to your questions, browse help articles, and get support for your Fidelity accounts.",
};

export default function HelpCenterPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        '--hero-bg': 'linear-gradient(135deg, #2d1f15 0%, #1a1210 100%)',
                    } as React.CSSProperties}
                >
                    <Container>
                        <div className="hero-card">
                            <Heading level="h1" weight="bold" style={{ color: '#ffffff' }}>
                                Help Center
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px', maxWidth: '600px' }}>
                                Find answers, browse articles, and get the support you need.
                            </Text>
                            <div style={{ marginTop: '24px', maxWidth: '500px' }}>
                                <input
                                    type="text"
                                    placeholder="Search for help..."
                                    style={{
                                        width: '100%',
                                        padding: '16px 20px',
                                        borderRadius: '8px',
                                        border: 'none',
                                        fontSize: '16px'
                                    }}
                                />
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Top Help Topics */}
                <section className="help-topics" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Top Help Topics
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {/* Account Access */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            backgroundColor: '#0d6e4e',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '24px'
                                        }}>
                                            🔐
                                        </div>
                                        <Heading level="h3" weight="semibold">
                                            Account Access
                                        </Heading>
                                    </div>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Login issues, password reset, username recovery, and security settings.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>→</span>
                                            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Forgot password</a>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>→</span>
                                            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Login problems</a>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>→</span>
                                            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Security settings</a>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>

                            {/* Account Management */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            backgroundColor: '#1a5c8c',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '24px'
                                        }}>
                                            📊
                                        </div>
                                        <Heading level="h3" weight="semibold">
                                            Account Management
                                        </Heading>
                                    </div>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Account types, beneficiaries, transfers, and account changes.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#1a5c8c' }}>→</span>
                                            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Open an account</a>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#1a5c8c' }}>→</span>
                                            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Transfer money</a>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#1a5c8c' }}>→</span>
                                            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Add beneficiaries</a>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>

                            {/* Trading & Investing */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            backgroundColor: '#6b3d8c',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '24px'
                                        }}>
                                            📈
                                        </div>
                                        <Heading level="h3" weight="semibold">
                                            Trading & Investing
                                        </Heading>
                                    </div>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Placing trades, research, analysis tools, and investment guidance.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#6b3d8c' }}>→</span>
                                            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>How to trade</a>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#6b3d8c' }}>→</span>
                                            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Research stocks</a>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#6b3d8c' }}>→</span>
                                            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Investment options</a>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>

                            {/* Statements & Taxes */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            backgroundColor: '#c45c26',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '24px'
                                        }}>
                                            📄
                                        </div>
                                        <Heading level="h3" weight="semibold">
                                            Statements & Taxes
                                        </Heading>
                                    </div>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Tax forms, account statements, document downloads, and cost basis.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#c45c26' }}>→</span>
                                            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Tax forms</a>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#c45c26' }}>→</span>
                                            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>View statements</a>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#c45c26' }}>→</span>
                                            <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Cost basis</a>
                                        </li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Browse by Category */}
                <section className="categories" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Browse by Category
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            {[
                                { name: 'Getting Started', icon: '🚀' },
                                { name: 'Account Types', icon: '💼' },
                                { name: 'Banking', icon: '🏦' },
                                { name: 'Trading', icon: '📊' },
                                { name: 'Retirement', icon: '🏖️' },
                                { name: 'Planning', icon: '📋' },
                                { name: 'Research', icon: '🔍' },
                                { name: 'Mobile App', icon: '📱' },
                                { name: 'Security', icon: '🛡️' },
                                { name: 'Fees & Pricing', icon: '💰' },
                                { name: 'Forms', icon: '📝' },
                                { name: 'Life Events', icon: '🎯' },
                            ].map((category) => (
                                <Card key={category.name} withShadow hoverable>
                                    <CardBody style={{ textAlign: 'center', padding: '24px' }}>
                                        <div style={{ fontSize: '32px', marginBottom: '8px' }}>{category.icon}</div>
                                        <Heading level="h5" weight="semibold">
                                            {category.name}
                                        </Heading>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Quick Links */}
                <section className="quick-links" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Quick Links
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                            <a href="/auth/login" style={{ textDecoration: 'none', color: '#333' }}>
                                <Card withShadow hoverable>
                                    <CardBody>
                                        <Text weight="semibold" size="lg">Log in to Your Account</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Access your portfolio and accounts</Text>
                                    </CardBody>
                                </Card>
                            </a>
                            <a href="/auth/open-account" style={{ textDecoration: 'none', color: '#333' }}>
                                <Card withShadow hoverable>
                                    <CardBody>
                                        <Text weight="semibold" size="lg">Open an Account</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Start investing today</Text>
                                    </CardBody>
                                </Card>
                            </a>
                            <a href="/planning/retirement" style={{ textDecoration: 'none', color: '#333' }}>
                                <Card withShadow hoverable>
                                    <CardBody>
                                        <Text weight="semibold" size="lg">Retirement Planning</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Plan for your financial future</Text>
                                    </CardBody>
                                </Card>
                            </a>
                            <a href="/research/learn" style={{ textDecoration: 'none', color: '#333' }}>
                                <Card withShadow hoverable>
                                    <CardBody>
                                        <Text weight="semibold" size="lg">Learning Center</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Expand your investment knowledge</Text>
                                    </CardBody>
                                </Card>
                            </a>
                        </div>
                    </Container>
                </section>

                {/* Contact CTA */}
                <section className="contact-cta" style={{ padding: '80px 0', backgroundColor: '#0d6e4e' }}>
                    <Container>
                        <div style={{ textAlign: 'center', color: '#ffffff' }}>
                            <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                Still Need Help?
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Our support team is available 24/7 to assist you with any questions.
                            </Text>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                    Call 1-800-343-3548
                                </Button>
                                <Button variant="secondary" size="lg" style={{ borderColor: '#ffffff', color: '#ffffff' }}>
                                    Contact Us
                                </Button>
                            </div>
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
