/**
 * Investment Research Page
 * Comprehensive investment research and analysis
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Investment Research - Fidelity Investments",
    description: "Access comprehensive research, analysis, and ratings on stocks, funds, bonds, and other investments.",
};

export default function ResearchPage() {
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
                                Investment Research
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                In-depth analysis and expert insights to inform your investment decisions.
                            </Text>
                            <div className="hero-buttons" style={{ marginTop: '24px' }}>
                                <Button variant="primary" size="lg">
                                    Start Researching
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Research Categories */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Research Categories
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Explore research across different asset classes and investment types.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Stocks
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Research individual companies with comprehensive analysis, ratings, and financial data.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Research Stocks
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Mutual Funds
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Evaluate mutual funds with performance data, risk metrics, and analyst ratings.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Research Funds
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        ETFs
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Explore exchange-traded funds across various sectors and investment strategies.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Research ETFs
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Bonds & Fixed Income
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Analyze bonds, CDs, and other fixed income investments.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Research Bonds
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Options
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Understand options strategies and underlying securities.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Research Options
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        IPOs
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Access information about upcoming and recent initial public offerings.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Research IPOs
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Research Tools */}
                <section style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Research Tools
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Powerful tools to help you make informed investment decisions.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Stock Screener
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Filter stocks based on criteria like market cap, P/E ratio, and dividend yield.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Fund Analyzer
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Compare mutual funds and ETFs side-by-side with detailed metrics.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Portfolio Analyzer
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Analyze your portfolio&apos;s diversification, risk, and performance.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Charting Tools
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Interactive charts with technical indicators and drawing tools.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Featured Research */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Featured Research
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Expert analysis and market perspectives.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Text size="sm" color="muted">Weekly Outlook</Text>
                                    <Heading level="h4" weight="semibold" style={{ marginTop: '8px' }}>
                                        Market Weekly Outlook
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Our outlook on market trends and investment opportunities for the week ahead.
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
                                        Technology Sector Deep Dive
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        In-depth analysis of the technology sector&apos;s outlook and key investment themes.
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
                                        2024 Investment Strategy
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Our annual guide to navigating market opportunities and risks.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Read More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* CTA */}
                <section style={{ padding: '80px 0', backgroundColor: '#0d6e4e' }}>
                    <Container>
                        <div style={{ textAlign: 'center', color: '#ffffff' }}>
                            <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                Need Personalized Research?
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Speak with a Fidelity representative for personalized investment research.
                            </Text>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Contact Us
                            </Button>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
