/**
 * Refer a Friend Page
 * Referral program for Fidelity customers
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Refer a Friend - Fidelity Investments",
    description: "Refer friends and family to Fidelity and earn rewards.",
};

export default function ReferPage() {
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
                                Refer a Friend
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px', maxWidth: '700px' }}>
                                Share the benefits of Fidelity with friends and family.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* How It Works */}
                <section className="how-it-works" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                How It Works
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {[
                                { step: '1', title: 'Share Your Link', desc: 'Send your unique referral link to friends and family', icon: '📤' },
                                { step: '2', title: 'They Open an Account', desc: 'Your friends open a qualifying Fidelity account', icon: '📝' },
                                { step: '3', title: 'Earn Rewards', desc: 'Receive a reward when they fund their account', icon: '🎁' },
                            ].map((item) => (
                                <Card key={item.step} withShadow>
                                    <CardBody style={{ padding: '32px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: '#0d6e4e',
                                            color: '#ffffff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 16px',
                                            fontSize: '18px',
                                            fontWeight: 'bold'
                                        }}>
                                            {item.step}
                                        </div>
                                        <Heading level="h3" weight="semibold" style={{ marginBottom: '8px' }}>
                                            {item.title}
                                        </Heading>
                                        <Text color="muted">
                                            {item.desc}
                                        </Text>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Rewards */}
                <section className="rewards" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Rewards
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody style={{ padding: '32px', textAlign: 'center' }}>
                                    <Heading level="h3" weight="bold" style={{ fontSize: '48px', color: '#0d6e4e', marginBottom: '8px' }}>
                                        $100
                                    </Heading>
                                    <Text weight="semibold" style={{ marginBottom: '16px' }}>
                                        For Each Referred Friend
                                    </Text>
                                    <Text color="muted" size="sm">
                                        When they open and fund a qualifying account with $10,000+
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ padding: '32px', textAlign: 'center' }}>
                                    <Heading level="h3" weight="bold" style={{ fontSize: '48px', color: '#0d6e4e', marginBottom: '8px' }}>
                                        $500
                                    </Heading>
                                    <Text weight="semibold" style={{ marginBottom: '16px' }}>
                                        For Each Qualified Referred Client
                                    </Text>
                                    <Text color="muted" size="sm">
                                        When they open a Fidelity Wealth Management account
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ padding: '32px', textAlign: 'center' }}>
                                    <Heading level="h3" weight="bold" style={{ fontSize: '48px', color: '#0d6e4e', marginBottom: '8px' }}>
                                        50+
                                    </Heading>
                                    <Text weight="semibold" style={{ marginBottom: '16px' }}>
                                        Ways to Share
                                    </Text>
                                    <Text color="muted" size="sm">
                                        Email, social media, text, and more
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Share Your Link */}
                <section className="share" style={{ padding: '80px 0' }}>
                    <Container>
                        <Card withShadow style={{ backgroundColor: '#0d6e4e', color: '#ffffff' }}>
                            <CardBody style={{ padding: '48px', textAlign: 'center' }}>
                                <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                    Start Referring Today
                                </Heading>
                                <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                    Log in to access your unique referral link and start sharing.
                                </Text>
                                <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                    Log In to Get Your Link
                                </Button>
                            </CardBody>
                        </Card>
                    </Container>
                </section>

                {/* FAQ */}
                <section className="faq" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Frequently Asked Questions
                            </Heading>
                        </div>

                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            {[
                                { q: 'Who can I refer?', a: 'Anyone 18 years or older who is not currently a Fidelity customer.' },
                                { q: 'When do I receive my reward?', a: 'Rewards are typically issued within 8-12 weeks after your referred friend funds their account.' },
                                { q: 'Is there a limit on referrals?', a: 'There is no limit on the number of friends you can refer.' },
                                { q: 'What accounts qualify?', a: 'Most Fidelity accounts qualify, including individual brokerage accounts and IRAs.' },
                            ].map((faq, index) => (
                                <Card key={index} withShadow style={{ marginBottom: '16px' }}>
                                    <CardBody style={{ padding: '24px' }}>
                                        <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                            {faq.q}
                                        </Heading>
                                        <Text color="muted">
                                            {faq.a}
                                        </Text>
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
