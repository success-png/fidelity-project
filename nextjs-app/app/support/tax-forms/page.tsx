/**
 * Tax Forms Page
 * Tax forms and information resources
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Tax Forms - Fidelity Investments",
    description: "Access your tax forms, learn about tax reporting, and find tax-related resources.",
};

export default function TaxFormsPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        '--hero-bg': 'linear-gradient(135deg, #c45c26 0%, #8b3d1c 100%)',
                    } as React.CSSProperties}
                >
                    <Container>
                        <div className="hero-card">
                            <Heading level="h1" weight="bold" style={{ color: '#ffffff' }}>
                                Tax Forms & Information
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px', maxWidth: '700px' }}>
                                Access your tax forms and learn about tax reporting for your Fidelity accounts.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Access Your Forms */}
                <section className="access-forms" style={{ padding: '80px 0' }}>
                    <Container>
                        <Card withShadow style={{ backgroundColor: '#0d6e4e', color: '#ffffff', marginBottom: '48px' }}>
                            <CardBody style={{ padding: '48px', textAlign: 'center' }}>
                                <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                    Access Your Tax Forms
                                </Heading>
                                <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                    Log In to View Forms
                                </Button>
                            </CardBody>
                        </Card>

                        {/* Common Tax Forms */}
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Common Tax Forms
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            {[
                                { name: 'Form 1099-DIV', desc: 'Dividends and distributions' },
                                { name: 'Form 1099-INT', desc: 'Interest income' },
                                { name: 'Form 1099-B', desc: 'Proceeds from transactions' },
                                { name: 'Form 1099-R', desc: 'Retirement plan distributions' },
                                { name: 'Form 5498', desc: 'IRA contributions' },
                                { name: 'Cost Basis', desc: 'Cost basis information' },
                            ].map((form) => (
                                <Card key={form.name} withShadow hoverable>
                                    <CardBody style={{ padding: '20px' }}>
                                        <Heading level="h5" weight="semibold" style={{ marginBottom: '8px' }}>
                                            {form.name}
                                        </Heading>
                                        <Text color="muted" size="sm">
                                            {form.desc}
                                        </Text>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Important Dates */}
                <section className="dates" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Important Tax Dates
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                            {[
                                { date: 'January 31', event: '1099 forms available' },
                                { date: 'April 15', event: 'Tax filing deadline' },
                                { date: 'October 15', event: 'Extended deadline' },
                            ].map((item) => (
                                <Card key={item.date} withShadow>
                                    <CardBody style={{ textAlign: 'center', padding: '24px' }}>
                                        <Text weight="bold" style={{ fontSize: '24px', color: '#c45c26' }}>
                                            {item.date}
                                        </Text>
                                        <Text>{item.event}</Text>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Regulatory Section */}
                <section className="regulatory-section" style={{ padding: '40px 0', borderTop: '1px solid #e0e0e0' }}>
                    <Container>
                        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://brokercheck.finra.org/firm/summary/7784" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', fontSize: '14px' }}>
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
