/**
 * Insights & Tools Page
 * Investment insights, tools, and calculators
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Insights & Tools - Fidelity Investments",
    description: "Access powerful investment tools, calculators, and insights to help you make informed financial decisions.",
};

export default function InsightsPage() {
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
                                Insights & Tools
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Powerful resources to help you analyze, plan, and make informed investment decisions.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Investment Tools */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Investment Tools
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Interactive tools to help you analyze and manage your investments.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Retirement Calculator
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Estimate how much you need to save for a comfortable retirement.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Use Tool
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Compound Interest Calculator
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        See how your investments can grow over time with compound interest.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Use Tool
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        529 Savings Calculator
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Plan for education expenses with a 529 savings calculator.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Use Tool
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Social Security Calculator
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Estimate your Social Security benefits based on your earnings history.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Use Tool
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Investment Returns Calculator
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Compare different investment scenarios and time horizons.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Use Tool
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Roth IRA Calculator
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Compare Traditional and Roth IRA contributions and benefits.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Use Tool
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Analysis Tools */}
                <section style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Portfolio Analysis Tools
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Deep dive into your portfolio&apos;s performance and composition.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Portfolio X-Ray
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        See your portfolio&apos;s exposure to different sectors and asset classes.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Risk Analyzer
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Understand the risk profile of your investments.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Fee Analyzer
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        See how fees impact your long-term returns.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Tax Impact Tool
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Estimate the tax implications of your investment decisions.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Latest Insights */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Latest Insights
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Expert perspectives on current market trends.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Text size="sm" color="muted">Market Perspective</Text>
                                    <Heading level="h4" weight="semibold" style={{ marginTop: '8px' }}>
                                        Navigating Volatility
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Strategies for maintaining perspective during market fluctuations.
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
                                        Diversification in Focus
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Why diversification matters more than ever.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Read More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Text size="sm" color="muted">Retirement Planning</Text>
                                    <Heading level="h4" weight="semibold" style={{ marginTop: '8px' }}>
                                        Long-Term Thinking
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        The importance of staying invested for the long haul.
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
                                Maximize Your Financial Potential
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Use our tools and insights to make smarter financial decisions.
                            </Text>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Explore All Tools
                            </Button>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
