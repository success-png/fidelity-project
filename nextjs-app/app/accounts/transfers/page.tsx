/**
 * Transfers Page
 * Transfer money between accounts and external institutions
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody, CardHeader } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";

export const metadata: Metadata = {
    title: "Transfers - Fidelity Investments",
    description: "Transfer money between your Fidelity accounts or from external institutions",
};

export default function TransfersPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ padding: '40px 0', backgroundColor: '#f5f5f5' }}>
                <Container>
                    <Heading level="h1" weight="bold">
                        Transfers
                    </Heading>
                    <Text color="muted" style={{ marginTop: '8px' }}>
                        Move money between your accounts or from other institutions
                    </Text>
                </Container>
            </section>

            {/* Transfer Options */}
            <section style={{ padding: '40px 0' }}>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                        <Card withShadow hoverable>
                            <CardBody style={{ textAlign: 'center', padding: '40px 24px' }}>
                                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📤</div>
                                <Heading level="h3" weight="semibold" style={{ marginBottom: '12px' }}>
                                    Wire Transfer
                                </Heading>
                                <Text color="muted" size="sm" style={{ marginBottom: '24px' }}>
                                    Send money to another financial institution
                                </Text>
                                <Button variant="primary">
                                    Start Wire Transfer
                                </Button>
                            </CardBody>
                        </Card>

                        <Card withShadow hoverable>
                            <CardBody style={{ textAlign: 'center', padding: '40px 24px' }}>
                                <div style={{ fontSize: '48px', marginBottom: '16px' }}>📥</div>
                                <Heading level="h3" weight="semibold" style={{ marginBottom: '12px' }}>
                                    Electronic Transfer
                                </Heading>
                                <Text color="muted" size="sm" style={{ marginBottom: '24px' }}>
                                    Move money electronically between accounts
                                </Text>
                                <Button variant="primary">
                                    Start Transfer
                                </Button>
                            </CardBody>
                        </Card>

                        <Card withShadow hoverable>
                            <CardBody style={{ textAlign: 'center', padding: '40px 24px' }}>
                                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏦</div>
                                <Heading level="h3" weight="semibold" style={{ marginBottom: '12px' }}>
                                    ACAT Transfer
                                </Heading>
                                <Text color="muted" size="sm" style={{ marginBottom: '24px' }}>
                                    Transfer assets from another brokerage
                                </Text>
                                <Button variant="primary">
                                    Start ACAT Transfer
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* Recent Transfers */}
            <section style={{ padding: '0 0 60px' }}>
                <Container>
                    <Card withShadow>
                        <CardHeader>
                            <Heading level="h3" weight="semibold">
                                Recent Transfers
                            </Heading>
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
                                                <Text weight="semibold" size="sm">Type</Text>
                                            </th>
                                            <th style={{ textAlign: 'left', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">From</Text>
                                            </th>
                                            <th style={{ textAlign: 'left', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">To</Text>
                                            </th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Amount</Text>
                                            </th>
                                            <th style={{ textAlign: 'left', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Status</Text>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm">Feb 5, 2025</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm">Electronic</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm">Individual Brokerage</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm">Roth IRA</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text size="sm" weight="semibold">$5,000.00</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <span style={{ padding: '4px 12px', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '12px', fontSize: '12px' }}>
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm">Jan 28, 2025</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm">Electronic</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm">Checking Account</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm">Individual Brokerage</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text size="sm" weight="semibold">$2,500.00</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <span style={{ padding: '4px 12px', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '12px', fontSize: '12px' }}>
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </section>

            {/* Account Balances */}
            <section style={{ padding: '0 0 60px' }}>
                <Container>
                    <Heading level="h3" weight="semibold" style={{ marginBottom: '24px' }}>
                        Your Accounts
                    </Heading>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                        {[
                            { name: 'Individual Brokerage', number: '****1234', balance: '$113,528.35' },
                            { name: 'Roth IRA', number: '****5678', balance: '$45,230.00' },
                            { name: '401(k)', number: '****9012', balance: '$156,780.50' },
                            { name: 'Cash Management', number: '****3456', balance: '$12,500.00' },
                        ].map((account, index) => (
                            <Card withShadow key={index}>
                                <CardBody>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <Text weight="semibold">{account.name}</Text>
                                            <Text size="sm" color="muted">{account.number}</Text>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            Transfer
                                        </Button>
                                    </div>
                                    <Heading level="h4" weight="bold" style={{ marginTop: '16px' }}>
                                        {account.balance}
                                    </Heading>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
