/**
 * Planning Advice Page
 * Professional financial advice and guidance services
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Planning & Advice - Fidelity Investments",
    description: "Get professional financial guidance and advice tailored to your unique goals and situation.",
};

export default function AdvicePage() {
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
                                Expert Financial Guidance
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Professional advice to help you make informed decisions and achieve your financial goals.
                            </Text>
                            <div className="hero-buttons" style={{ marginTop: '24px' }}>
                                <Button variant="primary" size="lg">
                                    Get Started
                                </Button>
                                <Button variant="secondary" size="lg" style={{ marginLeft: '12px' }}>
                                    Explore Services
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Advice Services */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Advice and Guidance Options
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Choose the level of guidance that fits your needs and preferences.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Fidelity Go
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Robo-advising service that creates and manages a diversified portfolio for you based on your goals and risk tolerance.
                                    </Text>
                                    <ul style={{ marginTop: '16px', paddingLeft: '20px' }}>
                                        <li style={{ marginBottom: '8px' }}><Text size="sm">Professional portfolio management</Text></li>
                                        <li style={{ marginBottom: '8px' }}><Text size="sm">Low minimum investment</Text></li>
                                        <li style={{ marginBottom: '8px' }}><Text size="sm">Automatic rebalancing</Text></li>
                                    </ul>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Fidelity Personalized Planning & Advice
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Access to dedicated financial planners who can help create a personalized plan for your unique situation.
                                    </Text>
                                    <ul style={{ marginTop: '16px', paddingLeft: '20px' }}>
                                        <li style={{ marginBottom: '8px' }}><Text size="sm">One-on-one consultations</Text></li>
                                        <li style={{ marginBottom: '8px' }}><Text size="sm">Personalized financial plan</Text></li>
                                        <li style={{ marginBottom: '8px' }}><Text size="sm">Ongoing support and guidance</Text></li>
                                    </ul>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Wealth Management
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Comprehensive wealth management for high-net-worth individuals and families with complex financial needs.
                                    </Text>
                                    <ul style={{ marginTop: '16px', paddingLeft: '20px' }}>
                                        <li style={{ marginBottom: '8px' }}><Text size="sm">Dedicated wealth advisor</Text></li>
                                        <li style={{ marginBottom: '8px' }}><Text size="sm">Integrated financial planning</Text></li>
                                        <li style={{ marginBottom: '8px' }}><Text size="sm">Estate and tax planning</Text></li>
                                    </ul>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Why Choose Fidelity */}
                <section style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Why Choose Fidelity for Advice
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Our commitment to your financial success.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h4" weight="semibold">
                                        Fiduciary Standard
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        We always act in your best interest.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h4" weight="semibold">
                                        Depth of Expertise
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Access to research and insights from decades of experience.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h4" weight="semibold">
                                        Technology-Driven
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Advanced tools to complement personalized advice.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h4" weight="semibold">
                                        Holistic Approach
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Integrated planning for all aspects of your financial life.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Planning Topics */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Areas of Focus
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Comprehensive planning across all areas of your financial life.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold">
                                        Retirement
                                    </Heading>
                                    <Text color="muted" size="sm" style={{ marginTop: '8px' }}>
                                        Plan for a secure retirement.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold">
                                        Investing
                                    </Heading>
                                    <Text color="muted" size="sm" style={{ marginTop: '8px' }}>
                                        Build and grow your portfolio.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold">
                                        Taxes
                                    </Heading>
                                    <Text color="muted" size="sm" style={{ marginTop: '8px' }}>
                                        Optimize your tax strategy.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold">
                                        Estate
                                    </Heading>
                                    <Text color="muted" size="sm" style={{ marginTop: '8px' }}>
                                        Preserve your legacy.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold">
                                        Education
                                    </Heading>
                                    <Text color="muted" size="sm" style={{ marginTop: '8px' }}>
                                        Fund education goals.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold">
                                        Insurance
                                    </Heading>
                                    <Text color="muted" size="sm" style={{ marginTop: '8px' }}>
                                        Protect what matters most.
                                    </Text>
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
                                Ready to Get Started?
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Speak with a Fidelity advisor to find the right guidance for your financial journey.
                            </Text>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Find an Advisor
                            </Button>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
