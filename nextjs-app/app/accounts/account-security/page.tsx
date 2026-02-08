/**
 * Security Settings Page
 * Manage account security and authentication settings
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody, CardHeader } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Badge } from "@/components/ui/Badge/Badge";

export const metadata: Metadata = {
    title: "Security Settings - Fidelity Investments",
    description: "Manage your account security and authentication settings",
};

export default function AccountSecurityPage() {
    return (
        <>
            <section className="page-header" style={{ padding: '40px 0', backgroundColor: '#f5f5f5' }}>
                <Container>
                    <Heading level="h1" weight="bold">Security Settings</Heading>
                    <Text color="muted" style={{ marginTop: '8px' }}>Protect your account with these security features</Text>
                </Container>
            </section>

            <section style={{ padding: '40px 0' }}>
                <Container>
                    <div style={{ display: 'grid', gap: '24px' }}>
                        <Card withShadow>
                            <CardHeader>
                                <Heading level="h3" weight="semibold">Password</Heading>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <Text weight="semibold">Change Password</Text>
                                        <Text size="sm" color="muted" style={{ marginTop: '4px' }}>Last changed 30 days ago</Text>
                                    </div>
                                    <Button variant="primary">Change Password</Button>
                                </div>
                            </CardBody>
                        </Card>

                        <Card withShadow>
                            <CardHeader>
                                <Heading level="h3" weight="semibold">Two-Factor Authentication</Heading>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <Text weight="semibold">Authenticator App</Text>
                                            <Badge variant="success">Enabled</Badge>
                                        </div>
                                        <Text size="sm" color="muted" style={{ marginTop: '4px' }}>Use an authenticator app for additional security</Text>
                                    </div>
                                    <Button variant="outline">Configure</Button>
                                </div>
                            </CardBody>
                        </Card>

                        <Card withShadow>
                            <CardHeader>
                                <Heading level="h3" weight="semibold">Login History</Heading>
                            </CardHeader>
                            <CardBody>
                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                        <thead>
                                            <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                                                <th style={{ textAlign: 'left', padding: '12px 16px' }}><Text weight="semibold" size="sm">Date</Text></th>
                                                <th style={{ textAlign: 'left', padding: '12px 16px' }}><Text weight="semibold" size="sm">Device</Text></th>
                                                <th style={{ textAlign: 'left', padding: '12px 16px' }}><Text weight="semibold" size="sm">Location</Text></th>
                                                <th style={{ textAlign: 'left', padding: '12px 16px' }}><Text weight="semibold" size="sm">Status</Text></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px 16px' }}><Text size="sm">Feb 6, 2025 2:30 PM</Text></td>
                                                <td style={{ padding: '12px 16px' }}><Text size="sm">Chrome on Windows</Text></td>
                                                <td style={{ padding: '12px 16px' }}><Text size="sm">Boston, MA</Text></td>
                                                <td style={{ padding: '12px 16px' }}><Badge variant="success">Success</Badge></td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px 16px' }}><Text size="sm">Feb 5, 2025 9:15 AM</Text></td>
                                                <td style={{ padding: '12px 16px' }}><Text size="sm">Safari on iPhone</Text></td>
                                                <td style={{ padding: '12px 16px' }}><Text size="sm">Boston, MA</Text></td>
                                                <td style={{ padding: '12px 16px' }}><Badge variant="success">Success</Badge></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardBody>
                        </Card>

                        <Card withShadow>
                            <CardHeader>
                                <Heading level="h3" weight="semibold">Trusted Devices</Heading>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'grid', gap: '16px' }}>
                                    {[
                                        { device: 'Chrome on Windows', location: 'Boston, MA', date: 'Feb 6, 2025' },
                                        { device: 'Safari on iPhone', location: 'Boston, MA', date: 'Feb 5, 2025' },
                                    ].map((item, index) => (
                                        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                                            <div>
                                                <Text weight="semibold">{item.device}</Text>
                                                <Text size="sm" color="muted" style={{ marginTop: '4px' }}>{item.location} - Added {item.date}</Text>
                                            </div>
                                            <Button variant="outline" size="sm">Remove</Button>
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    );
}
