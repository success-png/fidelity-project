/**
 * What We Offer Page
 * Products and services overview
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "What We Offer - Fidelity Investments",
    description: "Explore our comprehensive range of investment products and financial services.",
};

export default function WhatWeOfferPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        '--hero-bg': 'linear-gradient(135deg, #1a5c8c 0%, #0d3d5c 100%)',
                    } as React.CSSProperties}
                >
                    <Container>
                        <div className="hero-card">
                            <Heading level="h1" weight="bold" style={{ color: '#ffffff' }}>
                                What We Offer
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px', maxWidth: '700px' }}>
                                A comprehensive range of investment products and financial services.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Investing */}
                <section className="investing" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Investing
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {[
                                { name: 'Stocks & ETFs', desc: 'Trade thousands of stocks and ETFs' },
                                { name: 'Mutual Funds', desc: 'Access 10,000+ mutual funds' },
                                { name: 'Bonds', desc: 'Fixed income investments' },
                                { name: 'Options', desc: 'Options trading strategies' },
                                { name: 'Fractional Shares', desc: 'Invest in partial shares' },
                                { name: 'IPOs', desc: 'Access to new offerings' },
                            ].map((item) => (
                                <Card key={item.name} withShadow hoverable>
                                    <CardBody style={{ padding: '24px' }}>
                                        <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                            {item.name}
                                        </Heading>
                                        <Text color="muted" size="sm">
                                            {item.desc}
                                        </Text>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Retirement */}
                <section className="retirement" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Retirement
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {[
                                { name: '401(k) Rollovers', desc: 'Move your old 401(k) to Fidelity' },
                                { name: 'Traditional IRA', desc: 'Tax-deferred retirement savings' },
                                { name: 'Roth IRA', desc: 'Tax-free retirement growth' },
                                { name: 'Fidelity Go', desc: 'Robo-advisory service' },
                                { name: 'Planning Services', desc: 'Professional retirement advice' },
                                { name: '年金', desc: 'Fixed income for retirement' },
                            ].map((item) => (
                                <Card key={item.name} withShadow hoverable>
                                    <CardBody style={{ padding: '24px' }}>
                                        <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                            {item.name}
                                        </Heading>
                                        <Text color="muted" size="sm">
                                            {item.desc}
                                        </Text>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Banking & Cash */}
                <section className="banking" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Banking & Cash Management
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {[
                                { name: 'Fidelity Cash Management', desc: 'Banking services for investors' },
                                { name: 'Money Market Funds', desc: 'Liquid investment options' },
                                { name: '高收益储蓄', desc: 'Competitive savings rates' },
                                { name: 'CD Ladders', desc: 'Fixed-rate savings strategy' },
                            ].map((item) => (
                                <Card key={item.name} withShadow hoverable>
                                    <CardBody style={{ padding: '24px' }}>
                                        <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                            {item.name}
                                        </Heading>
                                        <Text color="muted" size="sm">
                                            {item.desc}
                                        </Text>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* CTA */}
                <section className="cta" style={{ padding: '80px 0', backgroundColor: '#0d6e4e' }}>
                    <Container>
                        <div style={{ textAlign: 'center', color: '#ffffff' }}>
                            <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                Ready to Start Investing?
                            </Heading>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Open an Account
                            </Button>
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
