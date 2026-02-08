/**
 * Life Events Page
 * Financial planning guidance for major life transitions
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Life Events Planning - Fidelity Investments",
    description: "Navigate major life transitions with confidence using our comprehensive financial planning guides.",
};

export default function LifeEventsPage() {
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
                                Navigate Life&apos;s Milestones
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Expert guidance for the financial challenges and opportunities that come with major life events.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Major Life Events */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Planning for Life&apos;s Big Moments
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Major life events often bring significant financial decisions. We&apos;re here to help you navigate them.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Getting Married
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Combining finances, updating beneficiaries, and planning for your shared future.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Having a Child
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Planning for education expenses, updating insurance, and growing your family budget.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Buying a Home
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Mortgage planning, budgeting for homeownership, and protecting your investment.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Career Changes
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Managing 401(k) rollovers, evaluating benefits, and negotiating compensation.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Divorce
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Protecting assets, updating legal documents, and rebuilding your financial life.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Retirement
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Transitioning from saving to generating income and planning your legacy.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Family Planning */}
                <section style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Family Financial Planning
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Resources for growing and multi-generational families.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        College Savings
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        529 plans and strategies for funding education.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Saving for a Child
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        UGMA/UTMA accounts and investment strategies.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Caring for Aging Parents
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Planning for long-term care and family finances.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Estate Planning
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Protecting your family&apos;s legacy and wishes.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Unexpected Events */}
                <section style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Handling Unexpected Events
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                Be prepared for the unexpected with our emergency planning resources.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Emergency Fund
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Building 3-6 months of expenses in accessible savings.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Job Loss
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Managing finances during unemployment.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Health Crisis
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Navigating medical expenses and insurance.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Natural Disasters
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Protecting assets and recovering financially.
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
                                Need Personalized Guidance?
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Connect with a Fidelity advisor to create a plan tailored to your unique life situation.
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
