/**
 * FDIC/SIPC Coverage Page
 * Information about investment protection and insurance coverage
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "FDIC and SIPC Coverage - Fidelity Investments",
    description: "Learn about FDIC and SIPC coverage that protects your investments and deposits with Fidelity.",
};

export default function CoveragePage() {
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
                                Your Protection Matters
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Learn about the protections that keep your investments and deposits safe.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* FDIC Coverage Section */}
                <section className="fdic-section" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px', alignItems: 'center' }}>
                            <div>
                                <Heading level="h2" weight="bold" style={{ color: '#0d6e4e', marginBottom: '16px' }}>
                                    FDIC Insurance
                                </Heading>
                                <Text size="lg" color="muted" style={{ marginBottom: '24px' }}>
                                    FDIC insurance protects deposits at FDIC-member banks. Fidelity&apos;s FDIC-insured deposit sweep program provides coverage up to $250,000 per depositor, per account ownership category.
                                </Text>
                                <Heading level="h3" weight="semibold" style={{ marginBottom: '16px' }}>
                                    Key Features:
                                </Heading>
                                <ul style={{ paddingLeft: '20px', color: '#555', marginBottom: '24px' }}>
                                    <li style={{ marginBottom: '12px' }}>Up to $250,000 per depositor, per account type</li>
                                    <li style={{ marginBottom: '12px' }}>Coverage provided by FDIC-member banks</li>
                                    <li style={{ marginBottom: '12px' }}>Automatic coverage - no action required</li>
                                    <li style={{ marginBottom: '12px' }}>Backed by the full faith and credit of the U.S. government</li>
                                </ul>
                            </div>
                            <div style={{
                                backgroundColor: '#0d6e4e',
                                borderRadius: '12px',
                                padding: '48px',
                                textAlign: 'center',
                                color: '#ffffff'
                            }}>
                                <Text size="xl" weight="bold" style={{ color: '#ffffff', marginBottom: '8px' }}>
                                    Up to
                                </Text>
                                <Text size="4xl" weight="bold" style={{ color: '#ffffff', fontSize: '56px', marginBottom: '8px' }}>
                                    $250,000
                                </Text>
                                <Text size="lg" style={{ color: '#ffffff' }}>
                                    FDIC Insurance Coverage
                                </Text>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* SIPC Coverage Section */}
                <section className="sipc-section" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px', alignItems: 'center' }}>
                            <div style={{
                                backgroundColor: '#1a5c8c',
                                borderRadius: '12px',
                                padding: '48px',
                                textAlign: 'center',
                                color: '#ffffff'
                            }}>
                                <Text size="4xl" weight="bold" style={{ color: '#ffffff', fontSize: '48px', marginBottom: '16px' }}>
                                    SIPC
                                </Text>
                                <Text size="lg" style={{ color: '#ffffff' }}>
                                    Securities Investor Protection Corporation
                                </Text>
                                <div style={{ marginTop: '32px', borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: '24px' }}>
                                    <Text size="xl" weight="bold" style={{ color: '#ffffff', marginBottom: '8px' }}>
                                        Up to
                                    </Text>
                                    <Text size="4xl" weight="bold" style={{ color: '#ffffff', fontSize: '42px' }}>
                                        $500,000
                                    </Text>
                                    <Text size="lg" style={{ color: '#ffffff', marginTop: '8px' }}>
                                        Including $250,000 for cash claims
                                    </Text>
                                </div>
                            </div>
                            <div>
                                <Heading level="h2" weight="bold" style={{ color: '#1a5c8c', marginBottom: '16px' }}>
                                    SIPC Protection
                                </Heading>
                                <Text size="lg" color="muted" style={{ marginBottom: '24px' }}>
                                    SIPC protects securities and cash in your brokerage accounts if the brokerage firm fails. This protection is separate from FDIC insurance.
                                </Text>
                                <Heading level="h3" weight="semibold" style={{ marginBottom: '16px' }}>
                                    What SIPC Protects:
                                </Heading>
                                <ul style={{ paddingLeft: '20px', color: '#555', marginBottom: '24px' }}>
                                    <li style={{ marginBottom: '12px' }}>Stocks and bonds held in your account</li>
                                    <li style={{ marginBottom: '12px' }}>Mutual funds and money market funds</li>
                                    <li style={{ marginBottom: '12px' }}>Cash held in connection with securities purchases</li>
                                    <li style={{ marginBottom: '12px' }}>Up to $500,000 in securities (including $250,000 in cash)</li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Additional Coverage */}
                <section className="additional-coverage" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Additional Protection Beyond SIPC
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '700px', margin: '16px auto 0' }}>
                                In the unlikely event of brokerage firm failure, you may have additional protection through private insurance.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody style={{ padding: '32px', textAlign: 'center' }}>
                                    <Heading level="h3" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Excess of SIPC Coverage
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Provides protection above SIPC limits for eligible securities and cash.
                                    </Text>
                                    <Text weight="semibold" style={{ color: '#0d6e4e', fontSize: '24px' }}>
                                        Up to $1.5 Billion
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ padding: '32px', textAlign: 'center' }}>
                                    <Heading level="h3" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Per-Client Coverage
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Maximum coverage per client for all accounts at the brokerage.
                                    </Text>
                                    <Text weight="semibold" style={{ color: '#0d6e4e', fontSize: '24px' }}>
                                        Up to $2 Million
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ padding: '32px', textAlign: 'center' }}>
                                    <Heading level="h3" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Cash Coverage
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Extended protection for uninvested cash balances.
                                    </Text>
                                    <Text weight="semibold" style={{ color: '#0d6e4e', fontSize: '24px' }}>
                                        Up to $2 Million
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Important Information */}
                <section className="important-info" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <Heading level="h2" weight="bold" style={{ textAlign: 'center', marginBottom: '48px' }}>
                            Important Information
                        </Heading>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Not FDIC Insured
                                    </Heading>
                                    <Text color="muted">
                                        Securities investments, including those made through Fidelity, are:
                                    </Text>
                                    <ul style={{ marginTop: '16px', paddingLeft: '20px', color: '#555' }}>
                                        <li style={{ marginBottom: '8px' }}>Not FDIC Insured</li>
                                        <li style={{ marginBottom: '8px' }}>Not Bank Guaranteed</li>
                                        <li style={{ marginBottom: '8px' }}>May Lose Value</li>
                                    </ul>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Coverage Verification
                                    </Heading>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        For questions about FDIC or SIPC coverage, or to verify your protection:
                                    </Text>
                                    <Button variant="primary" size="md">
                                        Contact Customer Service
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Regulatory Section */}
                <section className="regulatory-section" style={{ padding: '40px 0', borderTop: '1px solid #e0e0e0' }}>
                    <Container>
                        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a
                                href="https://www.fdic.gov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}
                            >
                                FDIC.gov →
                            </a>
                            <a
                                href="https://www.sipc.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}
                            >
                                SIPC.org →
                            </a>
                            <a
                                href="https://brokercheck.finra.org/firm/summary/7784"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#333', textDecoration: 'none', fontSize: '14px' }}
                            >
                                Review with FINRA&apos;s BrokerCheck
                            </a>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
