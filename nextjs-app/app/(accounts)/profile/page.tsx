/**
 * Profile Page
 * User profile and account information
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody, CardHeader } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";

export const metadata: Metadata = {
    title: "Profile - Fidelity Investments",
    description: "Manage your profile and account information",
};

export default function ProfilePage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ padding: '40px 0', backgroundColor: '#f5f5f5' }}>
                <Container>
                    <Heading level="h1" weight="bold">
                        Profile
                    </Heading>
                    <Text color="muted" style={{ marginTop: '8px' }}>
                        Manage your personal information and preferences
                    </Text>
                </Container>
            </section>

            {/* Profile Information */}
            <section style={{ padding: '40px 0' }}>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                        <Card withShadow>
                            <CardHeader>
                                <Heading level="h3" weight="semibold">
                                    Personal Information
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'grid', gap: '16px' }}>
                                    <div>
                                        <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                            Full Name
                                        </Text>
                                        <Input defaultValue="John Doe" style={{ width: '100%' }} />
                                    </div>
                                    <div>
                                        <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                            Email Address
                                        </Text>
                                        <Input defaultValue="john.doe@email.com" style={{ width: '100%' }} />
                                    </div>
                                    <div>
                                        <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                            Phone Number
                                        </Text>
                                        <Input defaultValue="(555) 123-4567" style={{ width: '100%' }} />
                                    </div>
                                    <div>
                                        <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                            Date of Birth
                                        </Text>
                                        <Input defaultValue="January 15, 1985" style={{ width: '100%' }} />
                                    </div>
                                    <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                                        <Button variant="primary">
                                            Save Changes
                                        </Button>
                                        <Button variant="outline">
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card withShadow>
                            <CardHeader>
                                <Heading level="h3" weight="semibold">
                                    Address
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'grid', gap: '16px' }}>
                                    <div>
                                        <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                            Street Address
                                        </Text>
                                        <Input defaultValue="123 Main Street" style={{ width: '100%' }} />
                                    </div>
                                    <div>
                                        <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                            City
                                        </Text>
                                        <Input defaultValue="Boston" style={{ width: '100%' }} />
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                        <div>
                                            <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                                State
                                            </Text>
                                            <Input defaultValue="MA" style={{ width: '100%' }} />
                                        </div>
                                        <div>
                                            <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                                ZIP Code
                                            </Text>
                                            <Input defaultValue="02101" style={{ width: '100%' }} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                                        <Button variant="primary">
                                            Update Address
                                        </Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* Account Summary */}
            <section style={{ padding: '0 0 60px' }}>
                <Container>
                    <Card withShadow>
                        <CardHeader>
                            <Heading level="h3" weight="semibold">
                                Account Summary
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                                <div>
                                    <Text size="sm" color="muted">Customer Since</Text>
                                    <Text weight="semibold" style={{ marginTop: '4px' }}>January 2018</Text>
                                </div>
                                <div>
                                    <Text size="sm" color="muted">Account Type</Text>
                                    <Text weight="semibold" style={{ marginTop: '4px' }}>Individual</Text>
                                </div>
                                <div>
                                    <Text size="sm" color="muted">Investment Profile</Text>
                                    <Text weight="semibold" style={{ marginTop: '4px' }}>Growth</Text>
                                </div>
                                <div>
                                    <Text size="sm" color="muted">Risk Tolerance</Text>
                                    <Text weight="semibold" style={{ marginTop: '4px' }}>Moderate</Text>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </section>

            {/* Communication Preferences */}
            <section style={{ padding: '0 0 60px' }}>
                <Container>
                    <Card withShadow>
                        <CardHeader>
                            <Heading level="h3" weight="semibold">
                                Communication Preferences
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <div style={{ display: 'grid', gap: '16px' }}>
                                {[
                                    { label: 'Email Notifications', desc: 'Receive account updates and market news via email', checked: true },
                                    { label: 'SMS Alerts', desc: 'Get text messages for important account activity', checked: true },
                                    { label: 'Paperless Statements', desc: 'Receive statements electronically instead of by mail', checked: true },
                                    { label: 'Marketing Communications', desc: 'Receive information about products and services', checked: false },
                                ].map((pref, index) => (
                                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                                        <div>
                                            <Text weight="semibold">{pref.label}</Text>
                                            <Text size="sm" color="muted" style={{ marginTop: '4px' }}>{pref.desc}</Text>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            {pref.checked ? 'Enabled' : 'Disabled'}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </section>
        </>
    );
}
