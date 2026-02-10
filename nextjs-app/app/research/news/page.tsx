/**
 * Market News Page
 * Latest financial news and market updates
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Market News - Fidelity Investments",
    description: "Stay informed with the latest financial news, market updates, and analysis from Fidelity's expert team.",
};

export default function NewsPage() {
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
                                Market News & Updates
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Stay informed with the latest financial news and market insights.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Latest News */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Latest Headlines
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Breaking news and market-moving stories.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Text size="sm" color="muted" style={{ marginBottom: '8px' }}>2 hours ago</Text>
                                    <Heading level="h4" weight="semibold">
                                        Federal Reserve Signals Potential Rate Changes
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        The Fed&apos;s latest meeting minutes suggest a shift in monetary policy approach.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Read More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Text size="sm" color="muted" style={{ marginBottom: '8px' }}>4 hours ago</Text>
                                    <Heading level="h4" weight="semibold">
                                        Tech Stocks Rally on Strong Earnings
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Major technology companies report better-than-expected quarterly results.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Read More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Text size="sm" color="muted" style={{ marginBottom: '8px' }}>6 hours ago</Text>
                                    <Heading level="h4" weight="semibold">
                                        Global Markets React to Economic Data
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        New inflation and employment figures impact international trading.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Read More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Text size="sm" color="muted" style={{ marginBottom: '8px' }}>8 hours ago</Text>
                                    <Heading level="h4" weight="semibold">
                                        Energy Sector Sees Volatility
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Oil prices fluctuate amid supply and demand concerns.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Read More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Market Summary */}
                <section style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Market Summary
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Today&apos;s market performance at a glance.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Text size="sm" color="muted">S&P 500</Text>
                                    <Heading level="h3" weight="bold" style={{ marginTop: '8px', color: '#0d6e4e' }}>
                                        +1.23%
                                    </Heading>
                                    <Text size="sm">5,234.56</Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Text size="sm" color="muted">Dow Jones</Text>
                                    <Heading level="h3" weight="bold" style={{ marginTop: '8px', color: '#0d6e4e' }}>
                                        +0.87%
                                    </Heading>
                                    <Text size="sm">39,123.45</Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Text size="sm" color="muted">NASDAQ</Text>
                                    <Heading level="h3" weight="bold" style={{ marginTop: '8px', color: '#0d6e4e' }}>
                                        +1.56%
                                    </Heading>
                                    <Text size="sm">16,456.78</Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Text size="sm" color="muted">10Y Treasury</Text>
                                    <Heading level="h3" weight="bold" style={{ marginTop: '8px' }}>
                                        4.32%
                                    </Heading>
                                    <Text size="sm">+0.05</Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* News Categories */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Browse by Category
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Explore news in specific areas of interest.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Economy
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Economic indicators and policy
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Technology
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Tech industry news
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Healthcare
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Healthcare sector updates
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        International
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Global market news
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Subscribe */}
                <section style={{ padding: '80px 0', backgroundColor: '#0d6e4e' }}>
                    <Container>
                        <div style={{ textAlign: 'center', color: '#ffffff' }}>
                            <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                Stay Informed
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Subscribe to our newsletter for daily market updates and analysis.
                            </Text>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Subscribe
                            </Button>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
