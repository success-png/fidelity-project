/**
 * Documents Page
 * View and manage account documents
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody, CardHeader } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";

export const metadata: Metadata = {
    title: "Documents - Fidelity Investments",
    description: "View and manage your account statements and documents",
};

export default function DocumentsPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ padding: '40px 0', backgroundColor: '#f5f5f5' }}>
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                            <Heading level="h1" weight="bold">
                                Documents
                            </Heading>
                            <Text color="muted" style={{ marginTop: '8px' }}>
                                View statements, tax forms, and other account documents
                            </Text>
                        </div>
                        <Button variant="outline">
                            Download All
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Document Categories */}
            <section style={{ padding: '40px 0' }}>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
                        {['Statements', 'Tax Documents', 'Trade Confirmations', ' prospectuses'].map((category, index) => (
                            <Card withShadow hoverable key={index}>
                                <CardBody style={{ textAlign: 'center', padding: '24px' }}>
                                    <Text weight="semibold">{category}</Text>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Recent Documents */}
            <section style={{ padding: '0 0 60px' }}>
                <Container>
                    <Card withShadow>
                        <CardHeader>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Heading level="h3" weight="semibold">
                                    Recent Documents
                                </Heading>
                                <select style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #ddd' }}>
                                    <option>All Accounts</option>
                                    <option>Individual Brokerage</option>
                                    <option>Roth IRA</option>
                                    <option>401(k)</option>
                                </select>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                                            <th style={{ textAlign: 'left', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Date</Text>
                                            </th>
                                            <th style={{ textAlign: 'left', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Document</Text>
                                            </th>
                                            <th style={{ textAlign: 'left', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Account</Text>
                                            </th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Action</Text>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { date: 'Feb 1, 2025', doc: 'January 2025 Statement', account: 'Individual Brokerage' },
                                            { date: 'Jan 31, 2025', doc: 'Form 1099-DIV', account: 'Individual Brokerage' },
                                            { date: 'Jan 31, 2025', doc: 'Form 1099-B', account: 'Individual Brokerage' },
                                            { date: 'Jan 15, 2025', doc: 'Trade Confirmation - NVDA', account: 'Individual Brokerage' },
                                            { date: 'Jan 2, 2025', doc: 'December 2024 Statement', account: 'Roth IRA' },
                                        ].map((item, index) => (
                                            <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px 16px' }}>
                                                    <Text size="sm">{item.date}</Text>
                                                </td>
                                                <td style={{ padding: '12px 16px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <span style={{ fontSize: '20px' }}>📄</span>
                                                        <Text size="sm" weight="medium">{item.doc}</Text>
                                                    </div>
                                                </td>
                                                <td style={{ padding: '12px 16px' }}>
                                                    <Text size="sm" color="muted">{item.account}</Text>
                                                </td>
                                                <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                    <Button variant="outline" size="sm">
                                                        View
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </section>

            {/* Document Settings */}
            <section style={{ padding: '0 0 60px' }}>
                <Container>
                    <Card withShadow>
                        <CardHeader>
                            <Heading level="h3" weight="semibold">
                                Delivery Preferences
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <div style={{ display: 'grid', gap: '16px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                                    <div>
                                        <Text weight="semibold">Electronic Delivery</Text>
                                        <Text size="sm" color="muted">Receive statements and documents electronically</Text>
                                    </div>
                                    <Button variant="primary" size="sm">
                                        Manage
                                    </Button>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                                    <div>
                                        <Text weight="semibold">Email Notifications</Text>
                                        <Text size="sm" color="muted">Get notified when new documents are available</Text>
                                    </div>
                                    <Button variant="primary" size="sm">
                                        Configure
                                    </Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </section>
        </>
    );
}
