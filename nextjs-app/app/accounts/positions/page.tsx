/**
 * Positions Page
 * View all account positions and holdings
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody, CardHeader } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";

export const metadata: Metadata = {
    title: "Account Positions - Fidelity Investments",
    description: "View your account positions and holdings",
};

export default function PositionsPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ padding: '40px 0', backgroundColor: '#f5f5f5' }}>
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                            <Heading level="h1" weight="bold">
                                Account Positions
                            </Heading>
                            <Text color="muted" style={{ marginTop: '8px' }}>
                                Individual Brokerage Account • ****1234
                            </Text>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <Button variant="outline">
                                Filter
                            </Button>
                            <Button variant="outline">
                                Export
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Positions Table */}
            <section style={{ padding: '40px 0' }}>
                <Container>
                    <Card withShadow>
                        <CardHeader>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Heading level="h3" weight="semibold">
                                    Holdings
                                </Heading>
                                <Text size="sm" color="muted">
                                    Showing 8 positions
                                </Text>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                                            <th style={{ textAlign: 'left', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Symbol</Text>
                                            </th>
                                            <th style={{ textAlign: 'left', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Description</Text>
                                            </th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Quantity</Text>
                                            </th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Last Price</Text>
                                            </th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Cost Basis</Text>
                                            </th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Current Value</Text>
                                            </th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Gain/Loss</Text>
                                            </th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">% Change</Text>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { symbol: 'VTI', desc: 'Vanguard Total Stock Market ETF', qty: '150', price: '$245.32', cost: '$220.00', value: '$36,798.00', gain: '+$3,798.00', change: '+11.53%', positive: true },
                                            { symbol: 'AAPL', desc: 'Apple Inc.', qty: '50', price: '$178.45', cost: '$150.00', value: '$8,922.50', gain: '+$1,422.50', change: '+18.97%', positive: true },
                                            { symbol: 'MSFT', desc: 'Microsoft Corporation', qty: '35', price: '$378.91', cost: '$400.00', value: '$13,261.85', gain: '-$738.15', change: '-5.27%', positive: false },
                                            { symbol: 'BND', desc: 'Vanguard Total Bond Market ETF', qty: '200', price: '$72.18', cost: '$75.00', value: '$14,436.00', gain: '-$564.00', change: '-3.76%', positive: false },
                                            { symbol: 'GOOGL', desc: 'Alphabet Inc.', qty: '25', price: '$141.80', cost: '$130.00', value: '$3,545.00', gain: '+$295.00', change: '+9.08%', positive: true },
                                            { symbol: 'AMZN', desc: 'Amazon.com Inc.', qty: '40', price: '$178.25', cost: '$160.00', value: '$7,130.00', gain: '+$730.00', change: '+11.41%', positive: true },
                                            { symbol: 'NVDA', desc: 'NVIDIA Corporation', qty: '20', price: '$875.50', cost: '$500.00', value: '$17,510.00', gain: '+$7,510.00', change: '+75.10%', positive: true },
                                            { symbol: 'JPM', desc: 'JPMorgan Chase & Co.', qty: '60', price: '$198.75', cost: '$180.00', value: '$11,925.00', gain: '+$1,125.00', change: '+10.42%', positive: true },
                                        ].map((position, index) => (
                                            <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px 16px' }}>
                                                    <Text weight="semibold" style={{ color: '#0d6e4e' }}>{position.symbol}</Text>
                                                </td>
                                                <td style={{ padding: '12px 16px' }}>
                                                    <Text size="sm">{position.desc}</Text>
                                                </td>
                                                <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                    <Text size="sm">{position.qty}</Text>
                                                </td>
                                                <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                    <Text size="sm">{position.price}</Text>
                                                </td>
                                                <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                    <Text size="sm">{position.cost}</Text>
                                                </td>
                                                <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                    <Text weight="semibold">{position.value}</Text>
                                                </td>
                                                <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                    <Text size="sm" style={{ color: position.positive ? '#0d6e4e' : '#c41e3a' }}>{position.gain}</Text>
                                                </td>
                                                <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                    <Text size="sm" style={{ color: position.positive ? '#0d6e4e' : '#c41e3a' }}>{position.change}</Text>
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

            {/* Account Summary */}
            <section style={{ padding: '0 0 60px' }}>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                        <Card withShadow>
                            <CardBody>
                                <Text size="sm" color="muted">Total Cost Basis</Text>
                                <Heading level="h3" weight="bold" style={{ marginTop: '8px' }}>
                                    $95,250.00
                                </Heading>
                            </CardBody>
                        </Card>
                        <Card withShadow>
                            <CardBody>
                                <Text size="sm" color="muted">Total Current Value</Text>
                                <Heading level="h3" weight="bold" style={{ marginTop: '8px' }}>
                                    $113,528.35
                                </Heading>
                            </CardBody>
                        </Card>
                        <Card withShadow>
                            <CardBody>
                                <Text size="sm" color="muted">Total Gain/Loss</Text>
                                <Heading level="h3" weight="bold" style={{ marginTop: '8px', color: '#0d6e4e' }}>
                                    +$18,278.35
                                </Heading>
                            </CardBody>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    );
}
