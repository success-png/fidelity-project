/**
 * Fidelity Locations Page
 * Find Fidelity branch offices near you
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Fidelity Locations - Fidelity Investments",
    description: "Find a Fidelity branch near you. Visit us for personalized investment advice and account services.",
};

export default function LocationsPage() {
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
                                Find a Fidelity Branch
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginTop: '16px' }}>
                                Visit us for personalized service and investment guidance at one of our nationwide locations.
                            </Text>
                        </div>
                    </Container>
                </section>

                {/* Search Section */}
                <section className="search-section" style={{ padding: '60px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <Card withShadow>
                            <CardBody style={{ padding: '40px' }}>
                                <Heading level="h3" weight="semibold" style={{ textAlign: 'center', marginBottom: '24px' }}>
                                    Search for a Location Near You
                                </Heading>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
                                    <div>
                                        <label htmlFor="zip" style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
                                            ZIP Code or City
                                        </label>
                                        <Input
                                            id="zip"
                                            type="text"
                                            placeholder="Enter ZIP or city"
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state" style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
                                            State
                                        </label>
                                        <select
                                            id="state"
                                            style={{
                                                width: '100%',
                                                padding: '12px 16px',
                                                borderRadius: '8px',
                                                border: '1px solid #ddd',
                                                fontSize: 'var(--font-size-base)',
                                                backgroundColor: '#fff'
                                            }}
                                        >
                                            <option value="">All States</option>
                                            <option value="AL">Alabama</option>
                                            <option value="AK">Alaska</option>
                                            <option value="AZ">Arizona</option>
                                            <option value="CA">California</option>
                                            <option value="CO">Colorado</option>
                                            <option value="CT">Connecticut</option>
                                            <option value="FL">Florida</option>
                                            <option value="GA">Georgia</option>
                                            <option value="IL">Illinois</option>
                                            <option value="NY">New York</option>
                                            <option value="TX">Texas</option>
                                            {/* Add more states as needed */}
                                        </select>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <Button variant="primary" size="lg" style={{ width: '100%' }}>
                                            Search Locations
                                        </Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Container>
                </section>

                {/* Featured Locations */}
                <section className="featured-locations" style={{ padding: '80px 0' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Visit Us Across the Country
                            </Heading>
                            <Text size="lg" color="muted" style={{ marginTop: '16px' }}>
                                With over 190 locations nationwide, there&apos;s a Fidelity branch near you
                            </Text>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            {/* Northeast */}
                            <Card withShadow>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h3" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Northeast
                                    </Heading>
                                    <ul style={{ paddingLeft: '20px', color: '#555', marginBottom: '16px' }}>
                                        <li style={{ marginBottom: '8px' }}>Boston, MA</li>
                                        <li style={{ marginBottom: '8px' }}>New York, NY</li>
                                        <li style={{ marginBottom: '8px' }}>Philadelphia, PA</li>
                                        <li style={{ marginBottom: '8px' }}>Hartford, CT</li>
                                        <li style={{ marginBottom: '8px' }}>Providence, RI</li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        View All Northeast
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Southeast */}
                            <Card withShadow>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h3" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Southeast
                                    </Heading>
                                    <ul style={{ paddingLeft: '20px', color: '#555', marginBottom: '16px' }}>
                                        <li style={{ marginBottom: '8px' }}>Atlanta, GA</li>
                                        <li style={{ marginBottom: '8px' }}>Miami, FL</li>
                                        <li style={{ marginBottom: '8px' }}>Charlotte, NC</li>
                                        <li style={{ marginBottom: '8px' }}>Nashville, TN</li>
                                        <li style={{ marginBottom: '8px' }}>Tampa, FL</li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        View All Southeast
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Midwest */}
                            <Card withShadow>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h3" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Midwest
                                    </Heading>
                                    <ul style={{ paddingLeft: '20px', color: '#555', marginBottom: '16px' }}>
                                        <li style={{ marginBottom: '8px' }}>Chicago, IL</li>
                                        <li style={{ marginBottom: '8px' }}>Detroit, MI</li>
                                        <li style={{ marginBottom: '8px' }}>Minneapolis, MN</li>
                                        <li style={{ marginBottom: '8px' }}>Cleveland, OH</li>
                                        <li style={{ marginBottom: '8px' }}>St. Louis, MO</li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        View All Midwest
                                    </Button>
                                </CardBody>
                            </Card>

                            {/* Southwest */}
                            <Card withShadow>
                                <CardBody style={{ padding: '32px' }}>
                                    <Heading level="h3" weight="semibold" style={{ marginBottom: '16px' }}>
                                        Southwest
                                    </Heading>
                                    <ul style={{ paddingLeft: '20px', color: '#555', marginBottom: '16px' }}>
                                        <li style={{ marginBottom: '8px' }}>Dallas, TX</li>
                                        <li style={{ marginBottom: '8px' }}>Houston, TX</li>
                                        <li style={{ marginBottom: '8px' }}>Phoenix, AZ</li>
                                        <li style={{ marginBottom: '8px' }}>Denver, CO</li>
                                        <li style={{ marginBottom: '8px' }}>Los Angeles, CA</li>
                                    </ul>
                                    <Button variant="primary" size="md">
                                        View All Southwest
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    </Container>
                </section>

                {/* Services at Branches */}
                <section className="branch-services" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                            <Heading level="h2" weight="bold">
                                Services Available at Our Branches
                            </Heading>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                    <div style={{ fontSize: '36px', marginBottom: '16px' }}>📋</div>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Account Opening
                                    </Heading>
                                    <Text color="muted">
                                        Open new brokerage and retirement accounts in person.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                    <div style={{ fontSize: '36px', marginBottom: '16px' }}>📊</div>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Investment Guidance
                                    </Heading>
                                    <Text color="muted">
                                        Discuss your goals with an investment professional.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                    <div style={{ fontSize: '36px', marginBottom: '16px' }}>📝</div>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Account Servicing
                                    </Heading>
                                    <Text color="muted">
                                        Get help with transfers, distributions, and more.
                                    </Text>
                                </CardBody>
                            </Card>

                            <Card withShadow>
                                <CardBody style={{ textAlign: 'center', padding: '32px' }}>
                                    <div style={{ fontSize: '36px', marginBottom: '16px' }}>🎓</div>
                                    <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                        Educational Workshops
                                    </Heading>
                                    <Text color="muted">
                                        Attend seminars on investing and financial planning.
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
                                Can&apos;t Visit a Branch?
                            </Heading>
                            <Text size="lg" style={{ color: '#ffffff', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                                Connect with us online or by phone for all your investment needs.
                            </Text>
                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Button variant="primary" size="lg" style={{ backgroundColor: '#ffffff', color: '#0d6e4e' }}>
                                    Find a Location
                                </Button>
                                <Button variant="outline" size="lg" style={{ borderColor: '#ffffff', color: '#ffffff' }}>
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </>
    );
}
