/**
 * Retirement Planning Page
 * Comprehensive retirement planning resources and tools
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Retirement Planning - Fidelity Investments",
    description: "Plan for your retirement with Fidelity's comprehensive resources, tools, and retirement accounts including IRAs and 401(k)s.",
};

export default function RetirementPage() {
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
                                Plan for Your Future
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Comprehensive retirement planning tools and resources to help you build the retirement you envision.
                            </Text>
                            <div className="hero-buttons" style={{ marginTop: '24px' }}>
                                <Button variant="primary" size="lg">
                                    Start Planning
                                </Button>
                                <Button variant="secondary" size="lg" style={{ marginLeft: '12px' }}>
                                    View Retirement Accounts
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Retirement Accounts */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Retirement Account Options
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Choose from a variety of retirement accounts to maximize your savings and tax benefits.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Traditional IRA
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Tax-deductible contributions with tax-deferred growth. Pay taxes when you withdraw in retirement.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Roth IRA
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        After-tax contributions with tax-free growth and qualified withdrawals. Ideal for expected higher tax brackets.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        401(k)
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Employer-sponsored retirement plan with potential company match and high contribution limits.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Roth 401(k)
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Combines higher contribution limits of 401(k) with tax-free growth of Roth accounts.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Planning Tools */}
                <section style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Retirement Planning Tools
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Make informed decisions with our comprehensive planning tools and calculators.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h4" weight="semibold">
                                        Retirement Savings Calculator
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Estimate how much you need to save to reach your retirement goals.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h4" weight="semibold">
                                        Social Security Estimator
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Project your Social Security benefits based on your earnings history.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h4" weight="semibold">
                                        Income Planning Tool
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Create a sustainable income strategy for your retirement years.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h4" weight="semibold">
                                        Asset Allocation Builder
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Design an investment mix that matches your risk tolerance and timeline.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Retirement Stages */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Planning for Every Stage
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Tailored advice and resources for where you are in your retirement journey.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                        <Text weight="bold" style={{ color: '#0d6e4e' }}>20s</Text>
                                    </div>
                                    <Heading level="h4" weight="semibold">
                                        Early Career
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Start saving early and take advantage of compound growth.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                        <Text weight="bold" style={{ color: '#0d6e4e' }}>30s</Text>
                                    </div>
                                    <Heading level="h4" weight="semibold">
                                        Building Wealth
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Maximize contributions and build a diversified portfolio.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                        <Text weight="bold" style={{ color: '#0d6e4e' }}>40s</Text>
                                    </div>
                                    <Heading level="h4" weight="semibold">
                                        Peak Earning Years
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Accelerate savings and refine your investment strategy.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                        <Text weight="bold" style={{ color: '#0d6e4e' }}>50s+</Text>
                                    </div>
                                    <Heading level="h4" weight="semibold">
                                        Approaching Retirement
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Transition strategies and retirement income planning.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section style={{ padding: '80px 0', backgroundColor: '#0d6e4e' }}>
                    <Container>
                        <div style={{ textAlign: 'center', color: '#ffffff' }}>
                            <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                Ready to Build Your Retirement Plan?
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Connect with a Fidelity representative to get personalized guidance for your retirement goals.
                            </Text>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Talk to an Advisor
                            </Button>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
