/**
 * My Goals Page
 * Goal setting and tracking for financial objectives
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody, CardHeader } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "My Goals - Fidelity Investments",
    description: "Set, track, and achieve your financial goals with Fidelity's goal planning tools.",
};

export default function GoalsPage() {
    return (
        <>
            <Header />

            <main>
                {/* Page Header */}
                <section style={{ padding: '40px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <Heading level="h1" weight="bold">
                            My Goals
                        </Heading>
                        <Text color="muted" style={{ marginTop: '8px' }}>
                            Set and track your financial goals to stay on path to success.
                        </Text>
                    </Container>
                </section>

                {/* Goal Overview */}
                <section style={{ padding: '60px 0' }}>
                    <Container>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <Text size="sm" color="muted">Active Goals</Text>
                                            <Heading level="h2" weight="bold" style={{ marginTop: '8px' }}>
                                                5
                                            </Heading>
                                        </div>
                                        <Button variant="primary" size="sm">
                                            Add New Goal
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <Text size="sm" color="muted">Completed Goals</Text>
                                            <Heading level="h2" weight="bold" style={{ marginTop: '8px' }}>
                                                12
                                            </Heading>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            View History
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <Text size="sm" color="muted">Total Saved</Text>
                                            <Heading level="h2" weight="bold" style={{ marginTop: '8px' }}>
                                                $45,230
                                            </Heading>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            Details
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Current Goals */}
                <section style={{ padding: '0 0 60px' }}>
                    <Container>
                        <Card withShadow>
                            <CardHeader>
                                <Heading level="h3" weight="semibold">
                                    Active Goals
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'grid', gap: '24px' }}>
                                    {/* Goal 1 */}
                                    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #0d6e4e' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                            <div>
                                                <Heading level="h4" weight="semibold">
                                                    Emergency Fund
                                                </Heading>
                                                <Text size="sm" color="muted">
                                                    Target: $25,000
                                                </Text>
                                            </div>
                                            <Text weight="semibold" style={{ color: '#0d6e4e' }}>
                                                72% Complete
                                            </Text>
                                        </div>
                                        <div style={{ backgroundColor: '#e0e0e0', height: '8px', borderRadius: '4px', marginBottom: '12px' }}>
                                            <div style={{ width: '72%', height: '100%', backgroundColor: '#0d6e4e', borderRadius: '4px' }}></div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text size="sm">$18,000 saved of $25,000</Text>
                                            <Button variant="outline" size="sm">
                                                Add Funds
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Goal 2 */}
                                    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #0d6e4e' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                            <div>
                                                <Heading level="h4" weight="semibold">
                                                    Retirement at 55
                                                </Heading>
                                                <Text size="sm" color="muted">
                                                    Target: $1,500,000
                                                </Text>
                                            </div>
                                            <Text weight="semibold" style={{ color: '#0d6e4e' }}>
                                                45% Complete
                                            </Text>
                                        </div>
                                        <div style={{ backgroundColor: '#e0e0e0', height: '8px', borderRadius: '4px', marginBottom: '12px' }}>
                                            <div style={{ width: '45%', height: '100%', backgroundColor: '#0d6e4e', borderRadius: '4px' }}></div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text size="sm">$675,000 saved of $1,500,000</Text>
                                            <Button variant="outline" size="sm">
                                                Adjust Plan
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Goal 3 */}
                                    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #0d6e4e' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                            <div>
                                                <Heading level="h4" weight="semibold">
                                                    Dream Home Down Payment
                                                </Heading>
                                                <Text size="sm" color="muted">
                                                    Target: $80,000
                                                </Text>
                                            </div>
                                            <Text weight="semibold" style={{ color: '#0d6e4e' }}>
                                                28% Complete
                                            </Text>
                                        </div>
                                        <div style={{ backgroundColor: '#e0e0e0', height: '8px', borderRadius: '4px', marginBottom: '12px' }}>
                                            <div style={{ width: '28%', height: '100%', backgroundColor: '#0d6e4e', borderRadius: '4px' }}></div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text size="sm">$22,400 saved of $80,000</Text>
                                            <Button variant="outline" size="sm">
                                                Add Funds
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Container>
                </section>

                {/* Goal Categories */}
                <section style={{ padding: '0 0 60px' }}>
                    <Container>
                        <Heading level="h3" weight="semibold" style={{ marginBottom: '24px' }}>
                            Browse Goal Categories
                        </Heading>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Retirement
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Plan for your future
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Emergency Fund
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Build financial security
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Home
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Buy or improve your home
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Education
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Save for tuition
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Travel
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Fund your adventures
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <CardBody style={{ textAlign: 'center' }}>
                                    <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Custom Goal
                                    </Heading>
                                    <Text color="muted" size="sm">
                                        Create your own goal
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Goal Setting Tips */}
                <section style={{ padding: '0 0 80px' }}>
                    <Container>
                        <Card withShadow>
                            <CardBody>
                                <Heading level="h4" weight="semibold" style={{ marginBottom: '16px' }}>
                                    Tips for Successful Goal Setting
                                </Heading>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                                    <div>
                                        <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                            Be Specific
                                        </Heading>
                                        <Text color="muted" size="sm">
                                            Define exact amounts and timelines for your goals.
                                        </Text>
                                    </div>
                                    <div>
                                        <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                            Break It Down
                                        </Heading>
                                        <Text color="muted" size="sm">
                                            Divide large goals into smaller milestones.
                                        </Text>
                                    </div>
                                    <div>
                                        <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                            Review Regularly
                                        </Heading>
                                        <Text color="muted" size="sm">
                                            Check your progress and adjust as needed.
                                        </Text>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
