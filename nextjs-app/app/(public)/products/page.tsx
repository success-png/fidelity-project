/**
 * Products Page
 * Overview of all financial products offered by Fidelity
 */

import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Products & Services - Fidelity Investments",
    description: "Explore our comprehensive range of financial products and services including retirement accounts, investing options, banking solutions, and more.",
};

export default function ProductsPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        '--hero-bg': 'linear-gradient(135deg, #2c5530 0%, #1a3d22 100%)',
                    } as React.CSSProperties}
                >
                    <Container>
                        <div className="hero-card">
                            <Heading level="h1" weight="bold" style={{ color: '#ffffff' }}>
                                Financial Products for Every Goal
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                From retirement planning to everyday banking, we have the products to help you succeed.
                            </Text>
                            <div className="hero-buttons" style={{ marginTop: '24px' }}>
                                <Button variant="primary" size="lg">
                                    Explore Products
                                </Button>
                                <Button variant="secondary" size="lg" style={{ marginLeft: '12px' }}>
                                    Find What Fits You
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Investment Products Section */}
                <section className="investment-products-section" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Investment Products
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Build your portfolio with our wide range of investment options.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {/* Stocks */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Stocks
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Invest in individual companies and share in their growth.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Bonds */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Bonds & Fixed Income
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Steady income with government and corporate bonds.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* ETFs */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        ETFs
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Diversified exposure through exchange-traded funds.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Mutual Funds */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Mutual Funds
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Professionally managed portfolios for every investor.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Options */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Options
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Advanced strategies for experienced investors.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Cryptocurrency */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Cryptocurrency
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Digital asset investments for your portfolio.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Retirement & Savings Section */}
                <section className="retirement-section" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Retirement & Savings
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Plan for your future with tax-advantaged retirement accounts.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            {/* IRAs */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        IRAs
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Traditional and Roth IRAs for tax-advantaged retirement savings.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Traditional IRA</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Roth IRA</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Rollover IRA</Text>
                                        </li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        Explore IRAs
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* 401(k) */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        401(k) Plans
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Employer-sponsored retirement plans with potential company match.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Traditional 401(k)</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Roth 401(k)</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Solo 401(k)</Text>
                                        </li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        Explore 401(k)
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* College Savings */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        529 Plans
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Tax-advantaged savings for education expenses.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">College Savings Plan</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Prepaid Tuition Plan</Text>
                                        </li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        Explore 529 Plans
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Insurance & Protection Section */}
                <section className="insurance-section" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Insurance & Protection
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Protect your financial future with our insurance products.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {/* Annuities */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Annuities
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Guaranteed income solutions for retirement.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Life Insurance */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Life Insurance
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Protect your family&apos;s financial future.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Long-Term Care */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Long-Term Care
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Coverage for extended care expenses.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Health Savings Accounts */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Health Savings Accounts
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Triple tax advantage for medical expenses.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Banking Section */}
                <section className="banking-section" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Banking & Cash Management
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Manage your everyday finances with our banking solutions.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            {/* Checking */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Fidelity Checking
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        FDIC-insured checking account with no monthly fees.
                                    </Text>
                                </CardBody>
                            </Card>

                            {/* Savings */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Fidelity Savings
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        High-yield savings for your short-term goals.
                                    </Text>
                                </CardBody>
                            </Card>

                            {/* Money Market */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Money Market
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        FDIC-insured money market investments.
                                    </Text>
                                </CardBody>
                            </Card>

                            {/* CDs */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Certificates of Deposit
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Fixed-rate, FDIC-insured term investments.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Managed Services Section */}
                <section className="managed-section" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Managed Services
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Let our professionals manage your investments.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {/* Go Envision */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Go Envision
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Goals-based advisory service for personalized portfolios.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Fidelity Personal & Workplace */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Fidelity Personal & Workplace
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Personalized advice from Fidelity advisors.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Fidelity Wealth Services */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Fidelity Wealth Services
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Comprehensive wealth management solutions.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Private Wealth Management */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h3" weight="semibold">
                                        Private Wealth Management
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Elite management for high net worth investors.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="cta-section" style={{ padding: '80px 0', backgroundColor: '#0d6e4e' }}>
                    <Container>
                        <div style={{ textAlign: 'center', color: '#ffffff' }}>
                            <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                Ready to Get Started?
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Find the right products for your financial goals and start building your future today.
                            </Text>
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
                            <a
                                href="https://brokercheck.finra.org/firm/summary/7784"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#333', textDecoration: 'none', fontSize: '14px' }}
                            >
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
