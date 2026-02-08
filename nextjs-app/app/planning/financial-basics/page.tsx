/**
 * Financial Basics Page
 * Educational resources for fundamental financial literacy
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Financial Basics - Fidelity Investments",
    description: "Learn the fundamentals of personal finance including budgeting, saving, investing, and building wealth.",
};

export default function FinancialBasicsPage() {
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
                                Financial Foundations
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Build a strong financial foundation with our comprehensive guides and resources.
                            </Text>
                            <div className="hero-buttons" style={{ marginTop: '24px' }}>
                                <Button variant="primary" size="lg">
                                    Start Learning
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Core Concepts */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Core Financial Concepts
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Master the fundamentals that will guide your financial decisions throughout your life.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Budgeting
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Learn how to create and maintain a budget that aligns with your financial goals.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Saving
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Discover strategies to build your savings and create an emergency fund.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Debt Management
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Understand different types of debt and strategies to pay them off effectively.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Credit
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Learn how credit works and how to build and maintain a strong credit score.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Insurance
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Protect yourself and your family with the right insurance coverage.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Taxes
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Understand the tax implications of your financial decisions.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Investing Basics */}
                <section style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Introduction to Investing
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Learn how to grow your wealth through investing.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        What is Investing?
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Understand the basics of investing and how it differs from saving.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Risk and Return
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Learn about the relationship between risk and potential returns.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Diversification
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Understand how spreading investments reduces risk.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Asset Allocation
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Learn how to build a balanced investment portfolio.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Lifecycle Planning */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Financial Planning by Life Stage
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Tailored advice for every stage of your financial journey.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Just Starting Out
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Building good financial habits early sets the foundation for success.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Growing Your Family
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Planning for new dependents and future education costs.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Mid-Career
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Maximizing earnings and catching up on retirement savings.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Nearing Retirement
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Transitioning from saving to generating income.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Resources */}
                <section style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Learning Resources
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Take advantage of our free educational tools and materials.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Articles & Guides
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        In-depth articles covering a wide range of financial topics.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Videos & Webinars
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Watch educational videos and live webinars from our experts.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Calculators
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Interactive tools to help with financial planning.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
