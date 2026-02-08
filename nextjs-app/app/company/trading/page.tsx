/**
 * Trading Page
 * Trading platforms, tools, and features for active traders
 */

import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Trading - Fidelity Investments",
    description: "Powerful trading platforms and tools to help you execute your investment strategy with precision and speed.",
};

export default function TradingPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        '--hero-bg': 'linear-gradient(135deg, #1a3a5c 0%, #0d2840 100%)',
                    } as React.CSSProperties}
                >
                    <Container>
                        <div className="hero-card">
                            <Heading level="h1" weight="bold" style={{ color: '#ffffff' }}>
                                Trading Tools for Every Investor
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                From beginner investors to active traders, we have the platforms and tools you need.
                            </Text>
                            <div className="hero-buttons" style={{ marginTop: '24px' }}>
                                <Button variant="primary" size="lg">
                                    Open a Trading Account
                                </Button>
                                <Button variant="secondary" size="lg" style={{ marginLeft: '12px' }}>
                                    Compare Platforms
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Trading Platforms Section */}
                <section className="platforms-section" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Trading Platforms
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Choose the trading platform that best fits your trading style and experience level.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                            {/* Fidelity Trader® */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Fidelity Trader®
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Our classic trading platform with essential tools for everyday investing.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Real-time streaming quotes</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Advanced charting tools</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Research and screening</Text>
                                        </li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Fidelity Trader PLUS® */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Fidelity Trader PLUS®
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '                    Enhanced platform8px' }}>
                                        for active traders with advanced features.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Level II quotes and market data</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Extended hours trading</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Options trading tools</Text>
                                        </li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Active Trader Pro® */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Active Trader Pro®
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Professional-grade desktop platform for serious traders.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Fully customizable interface</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Advanced charting and analysis</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Real-time market scanning</Text>
                                        </li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Trading Features Section */}
                <section className="features-section" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Trading Features
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Take advantage of powerful features to enhance your trading experience.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {/* Extended Hours */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Extended Hours Trading
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Trade before and after regular market hours for more flexibility.
                                    </Text>
                                </CardBody>
                            </Card>

                            {/* Fractional Shares */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Fractional Shares
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Invest in expensive stocks with as little as $1.
                                    </Text>
                                </CardBody>
                            </Card>

                            {/* Options Trading */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Options Trading
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Execute options strategies with powerful tools and research.
                                    </Text>
                                </CardBody>
                            </Card>

                            {/* IPO Access */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        IPO Access
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Get access to initial public offerings before they hit the market.
                                    </Text>
                                </CardBody>
                            </Card>

                            {/* Mobile Trading */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Mobile Trading
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Trade on the go with our award-winning mobile app.
                                    </Text>
                                </CardBody>
                            </Card>

                            {/* Research Tools */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Research & Analysis
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Access comprehensive research and market analysis tools.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Why Trade Section */}
                <section className="why-trade-section" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                            <div style={{ position: 'relative', height: '400px' }}>
                                <Image
                                    src="/im3.avif"
                                    alt="Trading at Fidelity"
                                    fill
                                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                                />
                            </div>
                            <div>
                                <Heading level="h2" weight="bold" style={{ marginBottom: '24px' }}>
                                    Why Trade with Fidelity?
                                </Heading>
                                <Text size="lg" color="muted" style={{ marginBottom: '24px' }}>
                                    Experience the difference of trading with a trusted leader in the financial industry.
                                </Text>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ color: '#0d6e4e', fontSize: '20px' }}>✓</span>
                                        <div>
                                            <Text weight="semibold">$0 Commission</Text>
                                            <Text color="muted" size="sm" style={{ marginTop: '4px' }}>
                                                $0 commission on online stock, ETF, and options trades.
                                            </Text>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ color: '#0d6e4e', fontSize: '20px' }}>✓</span>
                                        <div>
                                            <Text weight="semibold">Industry-Leading Research</Text>
                                            <Text color="muted" size="sm" style={{ marginTop: '4px' }}>
                                                Independent research from top analysts.
                                            </Text>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ color: '#0d6e4e', fontSize: '20px' }}>✓</span>
                                        <div>
                                            <Text weight="semibold">Secure Trading</Text>
                                            <Text color="muted" size="sm" style={{ marginTop: '4px' }}>
                                                Advanced security to protect your accounts and trades.
                                            </Text>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Get Started Section */}
                <section className="get-started-section" style={{ padding: '80px 0', backgroundColor: '#0d6e4e' }}>
                    <Container>
                        <div style={{ textAlign: 'center', color: '#ffffff' }}>
                            <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                Ready to Start Trading?
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Open an account today and start trading with confidence.
                            </Text>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                                <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                    Open an Account
                                </Button>
                                <Button variant="outline" size="lg" style={{ borderColor: '#ffffff', color: '#ffffff' }}>
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
