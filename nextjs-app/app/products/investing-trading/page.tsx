/**
 * Investing Page
 * Overview of investment options and opportunities
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
    title: "Investing - Fidelity Investments",
    description: "Explore a wide range of investment options including stocks, bonds, ETFs, mutual funds, and more to help you build your portfolio.",
};

export default function InvestingPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        '--hero-bg': 'linear-gradient(135deg, #1a5c4c 0%, #0d3d32 100%)',
                    } as React.CSSProperties}
                >
                    <Container>
                        <div className="hero-card">
                            <Heading level="h1" weight="bold" style={{ color: '#ffffff' }}>
                                Smart Investing for Your Future
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Explore investment options that align with your goals and risk tolerance.
                            </Text>
                            <div className="hero-buttons" style={{ marginTop: '24px' }}>
                                <Button variant="primary" size="lg">
                                    Open an Account
                                </Button>
                                <Button variant="secondary" size="lg" style={{ marginLeft: '12px' }}>
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Investment Types Section */}
                <section className="investment-types-section" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Investment Options
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Choose from a variety of investment products to build a diversified portfolio.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {/* Stocks */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Stocks
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Buy shares in individual companies and participate in their growth and success.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Bonds */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Bonds
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Fixed-income securities that provide regular interest payments and capital preservation.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* ETFs */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        ETFs
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Exchange-traded funds that offer instant diversification across many securities.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Mutual Funds */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Mutual Funds
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Professionally managed portfolios that pool money from many investors.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Options */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Options
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Derivatives that give you the right to buy or sell assets at predetermined prices.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Crypto */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Cryptocurrency
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Digital currencies and blockchain technology investments for the modern portfolio.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Why Invest Section */}
                <section className="why-invest-section" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                            <div>
                                <Heading level="h2" weight="bold" style={{ marginBottom: '24px' }}>
                                    Why Invest with Fidelity?
                                </Heading>
                                <Text size="lg" color="muted" style={{ marginBottom: '24px' }}>
                                    We provide the tools, research, and support you need to make informed investment decisions.
                                </Text>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ color: '#0d6e4e', fontSize: '20px' }}>✓</span>
                                        <div>
                                            <Text weight="semibold">Extensive Research</Text>
                                            <Text color="muted" size="sm" style={{ marginTop: '4px' }}>
                                                Access in-depth analysis and expert insights on thousands of investments.
                                            </Text>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ color: '#0d6e4e', fontSize: '20px' }}>✓</span>
                                        <div>
                                            <Text weight="semibold">Low Costs</Text>
                                            <Text color="muted" size="sm" style={{ marginTop: '4px' }}>
                                                Competitive pricing on trades and no minimum investment requirements.
                                            </Text>
                                        </div>
                                    </li>
                                    <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <span style={{ color: '#0d6e4e', fontSize: '20px' }}>✓</span>
                                        <div>
                                            <Text weight="semibold">Powerful Tools</Text>
                                            <Text color="muted" size="sm" style={{ marginTop: '4px' }}>
                                                Advanced trading platforms and portfolio analysis tools.
                                            </Text>
                                        </div>
                                    </li>
                                </ul>
                                <div style={{ marginTop: '24px' }}>
                                    <Button variant="primary" size="lg">
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                            <div style={{ position: 'relative', height: '400px' }}>
                                <Image
                                    src="/im2.webp"
                                    alt="Investing at Fidelity"
                                    fill
                                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                                />
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Resources Section */}
                <section className="resources-section" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Investment Resources
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Take advantage of our educational resources to enhance your investing knowledge.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Investment Research
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Detailed analysis and ratings on stocks, funds, and other investments.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Educational Articles
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Learn the basics of investing and advanced strategies.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Market News
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Stay updated with the latest market trends and financial news.
                                    </Text>
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
                                Ready to Start Investing?
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Open an account today and take the first step toward building your financial future.
                            </Text>
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
