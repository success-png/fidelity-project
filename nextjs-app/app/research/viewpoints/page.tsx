/**
 * Market Viewpoints Page
 * Expert perspectives on markets and investing
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Market Viewpoints - Fidelity Investments",
    description: "Expert perspectives and analysis on financial markets, economy, and investment strategies.",
};

export default function ViewpointsPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        '--hero-bg': 'linear-gradient(135deg, #0d6e4e 0%, #1a5c4c 100%)',
                    } as React.CSSProperties}
                >
                    <Container>
                        <div className="hero-card">
                            <Heading level="h1" weight="bold" style={{ color: '#ffffff' }}>
                                Market Viewpoints
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Expert perspectives and analysis to help you navigate the markets.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Featured Viewpoints */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Featured Perspectives
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                In-depth analysis and commentary from our investment experts.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Text size="sm" color="muted">Economic Outlook</Text>
                                    <Heading level="h4" weight="semibold" style={{ marginTop: '8px' }}>
                                        The Path Forward: 2024 Economic Outlook
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Our economists share their views on inflation, interest rates, and economic growth.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Read More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Text size="sm" color="muted">Investment Strategy</Text>
                                    <Heading level="h4" weight="semibold" style={{ marginTop: '8px' }}>
                                        Building a Resilient Portfolio
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Strategies for navigating market uncertainty while staying focused on long-term goals.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Read More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Text size="sm" color="muted">Sector Analysis</Text>
                                    <Heading level="h4" weight="semibold" style={{ marginTop: '8px' }}>
                                        Technology: Beyond the Hype
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        A balanced look at technology investments and emerging opportunities.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Read More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Text size="sm" color="muted">Global Markets</Text>
                                    <Heading level="h4" weight="semibold" style={{ marginTop: '8px' }}>
                                        International Opportunities
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Exploring developed and emerging markets for diversified growth.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Read More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Topic Categories */}
                <section style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Explore by Topic
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Find perspectives on topics that matter to you.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Economy
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Macroeconomic trends
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Stocks
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Equity market insights
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Fixed Income
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Bond market analysis
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Alternatives
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Real estate and PE
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Retirement
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Planning strategies
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        ESG
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Sustainable investing
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Latest Publications */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Latest Publications
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Stay up-to-date with our latest research and analysis.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <Text size="sm" color="muted">Monthly</Text>
                                        <Text size="sm">Feb 2024</Text>
                                    </div>
                                    <Heading level="h4" weight="semibold">
                                        Investment Perspective Newsletter
                                    </Heading>
                                    <Text color="muted" size="sm" style={{ marginTop: '8px' }}>
                                        Monthly market analysis and portfolio recommendations.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <Text size="sm" color="muted">Quarterly</Text>
                                        <Text size="sm">Q4 2023</Text>
                                    </div>
                                    <Heading level="h4" weight="semibold">
                                        Global Economic Outlook
                                    </Heading>
                                    <Text color="muted" size="sm" style={{ marginTop: '8px' }}>
                                        Comprehensive analysis of global economic trends.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <Text size="sm" color="muted">Weekly</Text>
                                        <Text size="sm">Feb 5, 2024</Text>
                                    </div>
                                    <Heading level="h4" weight="semibold">
                                        Market Update
                                    </Heading>
                                    <Text color="muted" size="sm" style={{ marginTop: '8px' }}>
                                        Weekly summary of market performance and news.
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
                                Subscribe to receive our latest viewpoints and analysis.
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
