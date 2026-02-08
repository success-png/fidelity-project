/**
 * Find an Advisor Page
 * Connect with a Fidelity Financial Advisor
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Find a Financial Advisor - Fidelity Investments",
    description: "Connect with a Fidelity Financial Advisor to help you achieve your financial goals. Personalized guidance for your unique situation.",
};

export default function AdvisorPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        '--hero-bg': 'linear-gradient(135deg, #0d6e4e 0%, #094a35 100%)',
                    } as React.CSSProperties}
                >
                    <Container>
                        <div className="hero-card">
                            <Heading level="h1" weight="bold" style={{ color: '#ffffff' }}>
                                Find a Financial Advisor
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Connect with a dedicated Fidelity advisor to help you build and protect your financial future.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Advisor Options */}
                <section className="advisor-options" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Choose the Right Advisor for You
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
                            {/* Online Advisor */}
                            <Card withShadow>
                                <CardBody style={{ padding: '40px' }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        backgroundColor: '#0d6e4e',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 24px',
                                        fontSize: '36px'
                                    }}>
                                        💻
                                    </div>
                                    <Heading level="h3" weight="semibold" style={{ textAlign: 'center', marginBottom: '16px' }}>
                                        Fidelity Go
                                    </Heading>
                                    <Text color="muted" style={{ textAlign: 'center', marginBottom: '24px' }}>
                                        Automated investing with optional professional guidance. Perfect for hands-off investors.
                                    </Text>
                                    <ul style={{ paddingLeft: '20px', color: '#555', marginBottom: '24px' }}>
                                        <li style={{ marginBottom: '8px' }}>Managed portfolios</li>
                                        <li style={{ marginBottom: '8px' }}>Low minimum investment</li>
                                        <li style={{ marginBottom: '8px' }}>Professional management</li>
                                        <li style={{ marginBottom: '8px' }}>Flexible contributions</li>
                                    </ul>
                                    <Button variant="primary" size="lg" style={{ width: '100%' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Personal Advisor */}
                            <Card withShadow>
                                <CardBody style={{ padding: '40px' }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        backgroundColor: '#1a5c8c',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 24px',
                                        fontSize: '36px'
                                    }}>
                                        👨‍💼
                                    </div>
                                    <Heading level="h3" weight="semibold" style={{ textAlign: 'center', marginBottom: '16px' }}>
                                        Fidelity Personalized Advice
                                    </Heading>
                                    <Text color="muted" style={{ textAlign: 'center', marginBottom: '24px' }}>
                                        One-on-one guidance combined with technology. Ideal for growing wealth.
                                    </Text>
                                    <ul style={{ paddingLeft: '20px', color: '#555', marginBottom: '24px' }}>
                                        <li style={{ marginBottom: '8px' }}>Dedicated advisor team</li>
                                        <li style={{ marginBottom: '8px' }}>Personalized strategy</li>
                                        <li style={{ marginBottom: '8px' }}>Ongoing support</li>
                                        <li style={{ marginBottom: '8px' }}>Tax-efficient investing</li>
                                    </ul>
                                    <Button variant="primary" size="lg" style={{ width: '100%' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Private Wealth */}
                            <Card withShadow>
                                <CardBody style={{ padding: '40px' }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        backgroundColor: '#6b3d8c',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 24px',
                                        fontSize: '36px'
                                    }}>
                                        💎
                                    </div>
                                    <Heading level="h3" weight="semibold" style={{ textAlign: 'center', marginBottom: '16px' }}>
                                        Fidelity Private Wealth Management
                                    </Heading>
                                    <Text color="muted" style={{ textAlign: 'center', marginBottom: '24px' }}>
                                        Comprehensive wealth management for high-net-worth individuals.
                                    </Text>
                                    <ul style={{ paddingLeft: '20px', color: '#555', marginBottom: '24px' }}>
                                        <li style={{ marginBottom: '8px' }}>Senior wealth advisor</li>
                                        <li style={{ marginBottom: '8px' }}>Estate planning</li>
                                        <li style={{ marginBottom: '8px' }}>Tax optimization</li>
                                        <li style={{ marginBottom: '8px' }}>Philanthropic planning</li>
                                    </ul>
                                    <Button variant="primary" size="lg" style={{ width: '100%' }}>
                                        Learn More
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Why Work with an Advisor */}
                <section className="why-advisor" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px', alignItems: 'center' }}>
                            <div>
                                <Heading level="h2" weight="bold" style={{ marginBottom: '24px' }}>
                                    Benefits of Working with an Advisor
                                </Heading>
                                <Text size="lg" color="muted" style={{ marginBottom: '24px' }}>
                                    A Fidelity advisor can help you navigate complex financial decisions and stay on track toward your goals.
                                </Text>
                                <ul style={{ paddingLeft: '20px', color: '#555' }}>
                                    <li style={{ marginBottom: '16px' }}>
                                        <Text weight="semibold">Stay Accountable</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Regular check-ins to keep you on track.</Text>
                                    </li>
                                    <li style={{ marginBottom: '16px' }}>
                                        <Text weight="semibold">Emotional Discipline</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Professional guidance through market volatility.</Text>
                                    </li>
                                    <li style={{ marginBottom: '16px' }}>
                                        <Text weight="semibold">Comprehensive View</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Holistic approach to your entire financial picture.</Text>
                                    </li>
                                    <li style={{ marginBottom: '16px' }}>
                                        <Text weight="semibold">Customized Solutions</Text>
                                        <Text color="muted" style={{ marginTop: '4px' }}>Strategies tailored to your unique situation.</Text>
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                backgroundColor: '#0d6e4e',
                                borderRadius: '12px',
                                padding: '48px',
                                color: '#ffffff'
                            }}>
                                <Heading level="h3" weight="bold" style={{ color: '#ffffff', marginBottom: '24px' }}>
                                    By the Numbers
                                </Heading>
                                <div style={{ marginBottom: '32px' }}>
                                    <Text size="4xl" weight="bold" style={{ color: '#ffffff', fontSize: '48px' }}>
                                        13K+
                                    </Text>
                                    <Text style={{ color: '#ffffff', marginTop: '4px' }}>
                                        Financial Advisors
                                    </Text>
                                </div>
                                <div style={{ marginBottom: '32px' }}>
                                    <Text size="4xl" weight="bold" style={{ color: '#ffffff', fontSize: '48px' }}>
                                        $1.5T+
                                    </Text>
                                    <Text style={{ color: '#ffffff', marginTop: '4px' }}>
                                        Assets Under Advisory
                                    </Text>
                                </div>
                                <div>
                                    <Text size="4xl" weight="bold" style={{ color: '#ffffff', fontSize: '48px' }}>
                                        40+
                                    </Text>
                                    <Text style={{ color: '#ffffff', marginTop: '4px' }}>
                                        Years of Experience
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Get Started */}
                <section className="get-started" style={{ padding: '80px 0' }}>
                    <Container>
                        <Card withShadow>
                            <CardBody style={{ padding: '48px', textAlign: 'center' }}>
                                <Heading level="h2" weight="bold" style={{ marginBottom: '16px' }}>
                                    Ready to Get Started?
                                </Heading>
                                <Text size="lg" color="muted" style={{ marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                    Finding the right advisor is easy. Answer a few questions and we&apos;ll help match you with a Fidelity advisor who fits your needs.
                                </Text>
                                <Button variant="primary" size="lg">
                                    Find Your Advisor
                                </Button>
                            </CardBody>
                        </Card>
                    </Container>
                </section>

                {/* FAQ Section */}
                <section className="faq-section" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Frequently Asked Questions
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody style={{ padding: '24px' }}>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '12px' }}>
                                        How much does it cost?
                                    </Heading>
                                    <Text color="muted">
                                        Advisory fees vary by service level and are typically a percentage of assets under management. Contact us for specific pricing.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ padding: '24px' }}>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '12px' }}>
                                        What&apos;s the minimum investment?
                                    </Heading>
                                    <Text color="muted">
                                        Minimum investments vary by advisory service. Fidelity Go starts at $10, while Personalized Advice requires $50,000+.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ padding: '24px' }}>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '12px' }}>
                                        Can I meet in person?
                                    </Heading>
                                    <Text color="muted">
                                        Yes! With over 190 branches nationwide, many of our advisors can meet with you in person at a location near you.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ padding: '24px' }}>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '12px' }}>
                                        Is my information secure?
                                    </Heading>
                                    <Text color="muted">
                                        Absolutely. We use industry-leading security measures to protect your personal and financial information.
                                    </Text>
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
                                Start Your Financial Journey Today
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Connect with a Fidelity advisor and get personalized guidance for your unique financial goals.
                            </Text>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Find an Advisor Now
                            </Button>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
