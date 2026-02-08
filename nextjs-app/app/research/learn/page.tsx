/**
 * Learn Page
 * Educational resources and learning center for investors
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
    title: "Learn - Fidelity Investments",
    description: "Expand your financial knowledge with our educational resources, articles, guides, and tools to help you become a smarter investor.",
};

export default function LearnPage() {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        '--hero-bg': 'linear-gradient(135deg, #4a3728 0%, #2d1f15 100%)',
                    } as React.CSSProperties}
                >
                    <Container>
                        <div className="hero-card">
                            <Heading level="h1" weight="bold" style={{ color: '#ffffff' }}>
                                Learn to Invest with Confidence
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Access educational resources designed to help you make informed financial decisions.
                            </Text>
                            <div className="hero-buttons" style={{ marginTop: '24px' }}>
                                <Button variant="primary" size="lg">
                                    Start Learning
                                </Button>
                                <Button variant="secondary" size="lg" style={{ marginLeft: '12px' }}>
                                    Browse Topics
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Learning Paths Section */}
                <section className="learning-paths-section" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Learning Paths
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Follow structured learning paths designed for your experience level and goals.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            {/* Beginners */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            backgroundColor: '#0d6e4e',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#ffffff',
                                            fontSize: '24px'
                                        }}>
                                            🌱
                                        </div>
                                        <Heading level="h3" weight="semibold">
                                            Investing Basics
                                        </Heading>
                                    </div>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Perfect for beginners. Learn the fundamentals of investing and building wealth.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">What is investing?</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Types of investments</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Building your first portfolio</Text>
                                        </li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        Start Learning
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Intermediate */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            backgroundColor: '#1a5c8c',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#ffffff',
                                            fontSize: '24px'
                                        }}>
                                            📈
                                        </div>
                                        <Heading level="h3" weight="semibold">
                                            Growing Your Portfolio
                                        </Heading>
                                    </div>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Take your skills to the next level with advanced strategies and analysis.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Diversification strategies</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Understanding risk</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Tax-efficient investing</Text>
                                        </li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        Start Learning
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Advanced */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '50%',
                                            backgroundColor: '#6b3d8c',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#ffffff',
                                            fontSize: '24px'
                                        }}>
                                            🎯
                                        </div>
                                        <Heading level="h3" weight="semibold">
                                            Advanced Strategies
                                        </Heading>
                                    </div>
                                    <Text color="muted" style={{ marginBottom: '16px' }}>
                                        Master complex investment techniques and optimize your portfolio.
                                    </Text>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Options trading basics</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Market analysis techniques</Text>
                                        </li>
                                        <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span style={{ color: '#0d6e4e' }}>✓</span>
                                            <Text size="sm">Estate planning basics</Text>
                                        </li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        Start Learning
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Topics Section */}
                <section className="topics-section" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Browse by Topic
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Explore our comprehensive library of financial topics.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                            {/* Topic 1 */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Retirement Planning
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Learn how to prepare for a comfortable retirement.
                                    </Text>
                                    <a href="#" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        View Articles →
                                    </a>
                                </CardBody>
                            </Card>

                            {/* Topic 2 */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Getting Started
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Begin your investing journey with confidence.
                                    </Text>
                                    <a href="#" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        View Articles →
                                    </a>
                                </CardBody>
                            </Card>

                            {/* Topic 3 */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Building Wealth
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Strategies for long-term wealth accumulation.
                                    </Text>
                                    <a href="#" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        View Articles →
                                    </a>
                                </CardBody>
                            </Card>

                            {/* Topic 4 */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Saving for College
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Education savings strategies for your family.
                                    </Text>
                                    <a href="#" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        View Articles →
                                    </a>
                                </CardBody>
                            </Card>

                            {/* Topic 5 */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Taxes & Investing
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Tax-efficient strategies for your portfolio.
                                    </Text>
                                    <a href="#" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        View Articles →
                                    </a>
                                </CardBody>
                            </Card>

                            {/* Topic 6 */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Market Cycles
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Understanding how markets work over time.
                                    </Text>
                                    <a href="#" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        View Articles →
                                    </a>
                                </CardBody>
                            </Card>

                            {/* Topic 7 */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Types of Investments
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Explore stocks, bonds, funds, and more.
                                    </Text>
                                    <a href="#" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        View Articles →
                                    </a>
                                </CardBody>
                            </Card>

                            {/* Topic 8 */}
                            <Card withShadow hoverable>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Life Events
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px', marginBottom: '16px' }}>
                                        Financial guidance for major life milestones.
                                    </Text>
                                    <a href="#" style={{ color: '#0d6e4e', textDecoration: 'none', fontWeight: 500 }}>
                                        View Articles →
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Tools & Calculators Section */}
                <section className="tools-section" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Tools & Calculators
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Use our interactive tools to plan and track your financial goals.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            {/* Calculator 1 */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Retirement Savings Calculator
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        See if you&apos;re on track for a comfortable retirement.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Use Calculator
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Calculator 2 */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        College Savings Calculator
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Plan for your child&apos;s education expenses.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Use Calculator
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Calculator 3 */}
                            <Card withShadow>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Investment Growth Calculator
                                    </Heading>
                                    <Text color="muted" style={{ marginTop: '8px' }}>
                                        Visualize how your investments could grow over time.
                                    </Text>
                                    <Button variant="outline" size="sm" style={{ marginTop: '16px' }}>
                                        Use Calculator
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Videos & Webinars Section */}
                <section className="videos-section" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Videos & Webinars
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>
                                Watch educational videos and attend live webinars from our experts.
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            <Card withShadow hoverable>
                                <div style={{ position: 'relative', height: '180px', backgroundColor: '#ddd', borderRadius: '8px 8px 0 0' }}>
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'rgba(0,0,0,0.3)'
                                    }}>
                                        <span style={{ fontSize: '48px', color: '#ffffff' }}>▶</span>
                                    </div>
                                </div>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Introduction to Investing
                                    </Heading>
                                    <Text color="muted" size="sm" style={{ marginTop: '8px' }}>
                                        Learn the basics of building an investment portfolio.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <div style={{ position: 'relative', height: '180px', backgroundColor: '#ddd', borderRadius: '8px 8px 0 0' }}>
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'rgba(0,0,0,0.3)'
                                    }}>
                                        <span style={{ fontSize: '48px', color: '#ffffff' }}>▶</span>
                                    </div>
                                </div>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Understanding Risk
                                    </Heading>
                                    <Text color="muted" size="sm" style={{ marginTop: '8px' }}>
                                        How to balance risk and reward in your portfolio.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow hoverable>
                                <div style={{ position: 'relative', height: '180px', backgroundColor: '#ddd', borderRadius: '8px 8px 0 0' }}>
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'rgba(0,0,0,0.3)'
                                    }}>
                                        <span style={{ fontSize: '48px', color: '#ffffff' }}>▶</span>
                                    </div>
                                </div>
                                <CardBody>
                                    <Heading level="h4" weight="semibold">
                                        Retirement Planning 101
                                    </Heading>
                                    <Text color="muted" size="sm" style={{ marginTop: '8px' }}>
                                        Essential strategies for a secure retirement.
                                    </Text>
                                </CardBody>
                            </Card>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '32px' }}>
                            <Button variant="outline" size="lg">
                                View All Videos
                            </Button>
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="cta-section" style={{ padding: '80px 0', backgroundColor: '#0d6e4e' }}>
                    <Container>
                        <div style={{ textAlign: 'center', color: '#ffffff' }}>
                            <Heading level="h2" weight="bold" style={{ color: '#ffffff', marginBottom: '16px' }}>
                                Ready to Start Learning?
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Explore our comprehensive educational resources and take control of your financial future.
                            </Text>
                            <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                Browse All Resources
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
