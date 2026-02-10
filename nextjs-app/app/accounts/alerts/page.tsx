/**
 * Alerts Page
 * Configure alert preferences and notification settings
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody, CardHeader } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Badge } from "@/components/ui/Badge/Badge";

export const metadata: Metadata = {
    title: "Alerts - Fidelity Investments",
    description: "Configure alerts and notification preferences",
};

export default function AlertsPage() {
    return (
        <>
            <section className="page-header" style={{ padding: '40px 0', backgroundColor: '#f5f5f5' }}>
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                            <Heading level="h1" weight="bold">Alerts</Heading>
                            <Text color="muted" style={{ marginTop: '8px' }}>Stay informed about your account activity</Text>
                        </div>
                        <Button variant="primary">Create New Alert</Button>
                    </div>
                </Container>
            </section>

            <section style={{ padding: '40px 0' }}>
                <Container>
                    <Card withShadow>
                        <CardHeader>
                            <Heading level="h3" weight="semibold">Active Alerts</Heading>
                        </CardHeader>
                        <CardBody>
                            <div style={{ display: 'grid', gap: '16px' }}>
                                {[
                                    { type: 'Price Alert', symbol: 'AAPL', target: '$200.00', status: 'Active', condition: 'Above' },
                                    { type: 'Price Alert', symbol: 'NVDA', target: '$1,000.00', status: 'Active', condition: 'Above' },
                                    { type: 'Account Alert', symbol: 'N/A', target: 'Balance below $1,000', status: 'Active', condition: 'Falls below' },
                                ].map((alert, index) => (
                                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                            <div style={{ width: '48px', height: '48px', backgroundColor: '#0d6e4e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px' }}>🔔</div>
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <Text weight="semibold">{alert.type}</Text>
                                                    {alert.symbol !== 'N/A' && <Badge variant="success">{alert.symbol}</Badge>}
                                                </div>
                                                <Text size="sm" color="muted" style={{ marginTop: '4px' }}>{alert.condition} {alert.target}</Text>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <Badge variant="success">{alert.status}</Badge>
                                            <Button variant="outline" size="sm">Edit</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </section>

            <section style={{ padding: '0 0 60px' }}>
                <Container>
                    <Card withShadow>
                        <CardHeader>
                            <Heading level="h3" weight="semibold">Notification Settings</Heading>
                        </CardHeader>
                        <CardBody>
                            <div style={{ display: 'grid', gap: '16px' }}>
                                {[
                                    { label: 'Email Notifications', desc: 'Receive alerts via email', enabled: true },
                                    { label: 'SMS Notifications', desc: 'Receive alerts via text message', enabled: true },
                                    { label: 'Push Notifications', desc: 'Receive alerts on your mobile device', enabled: false },
                                ].map((setting, index) => (
                                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                                        <div>
                                            <Text weight="semibold">{setting.label}</Text>
                                            <Text size="sm" color="muted" style={{ marginTop: '4px' }}>{setting.desc}</Text>
                                        </div>
                                        <Button variant={setting.enabled ? "primary" : "outline"} size="sm">{setting.enabled ? 'Enabled' : 'Disabled'}</Button>
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
