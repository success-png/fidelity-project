/**
 * Portfolio Page
 * Overview of user's investment portfolio
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody, CardHeader } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";

export const metadata: Metadata = {
    title: "Portfolio - Fidelity Investments",
    description: "View and manage your investment portfolio",
};

export default function PortfolioPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ padding: '40px 0', backgroundColor: '#f5f5f5' }}>
                <Container>
                    <Heading level="h1" weight="bold">
                        Portfolio
                    </Heading>
                    <Text color="muted" style={{ marginTop: '8px' }}>
                        Welcome back! Here&apos;s an overview of your investment accounts.
                    </Text>
                </Container>
            </section>

            {/* Account Summary */}
            <section style={{ padding: '40px 0' }}>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        <Card withShadow>
                            <CardBody>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div>
                                        <Text size="sm" color="muted">Total Portfolio Value</Text>
                                        <Heading level="h2" weight="bold" style={{ marginTop: '8px' }}>
                                            $125,432.89
                                        </Heading>
                                        <Text size="sm" style={{ color: '#0d6e4e', marginTop: '4px' }}>
                                            +$1,234.56 (+0.99%) today
                                        </Text>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Account Summary
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>

                        <Card withShadow>
                            <CardBody>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div>
                                        <Text size="sm" color="muted">Day&apos;s Gain/Loss</Text>
                                        <Heading level="h2" weight="bold" style={{ marginTop: '8px' }}>
                                            +$1,234.56
                                        </Heading>
                                        <Text size="sm" color="muted" style={{ marginTop: '4px' }}>
                                            As of market close
                                        </Text>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Performance
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>

                        <Card withShadow>
                            <CardBody>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div>
                                        <Text size="sm" color="muted">Buying Power</Text>
                                        <Heading level="h2" weight="bold" style={{ marginTop: '8px' }}>
                                            $12,500.00
                                        </Heading>
                                        <Text size="sm" color="muted" style={{ marginTop: '4px' }}>
                                            Cash available to trade
                                        </Text>
                                    </div>
                                    <Button variant="primary" size="sm">
                                        Trade
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* Positions Overview */}
            <section style={{ padding: '0 0 60px' }}>
                <Container>
                    <Card withShadow>
                        <CardHeader>
                            <Heading level="h3" weight="semibold">
                                Your Positions
                            </Heading>
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
                                                <Text weight="semibold" size="sm">Price</Text>
                                            </th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Value</Text>
                                            </th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Change</Text>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text weight="semibold" style={{ color: '#0d6e4e' }}>VTI</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text>Vanguard Total Stock Market ETF</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text>150</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text>$245.32</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold">$36,798.00</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text style={{ color: '#0d6e4e' }}>+1.23%</Text>
                                            </td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text weight="semibold" style={{ color: '#0d6e4e' }}>AAPL</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text>Apple Inc.</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text>50</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text>$178.45</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold">$8,922.50</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text style={{ color: '#0d6e4e' }}>+0.87%</Text>
                                            </td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text weight="semibold" style={{ color: '#0d6e4e' }}>MSFT</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text>Microsoft Corporation</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text>35</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text>$378.91</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold">$13,261.85</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text style={{ color: '#0d6e4e' }}>+1.45%</Text>
                                            </td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text weight="semibold" style={{ color: '#0d6e4e' }}>BND</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text>Vanguard Total Bond Market ETF</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text>200</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text>$72.18</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold">$14,436.00</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text style={{ color: '#0d6e4e' }}>+0.15%</Text>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div style={{ marginTop: '24px', textAlign: 'center' }}>
                                <Button variant="primary">
                                    View All Positions
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </section>

            {/* Quick Actions */}
            <section style={{ padding: '0 0 60px' }}>
                <Container>
                    <Heading level="h3" weight="semibold" style={{ marginBottom: '24px' }}>
                        Quick Actions
                    </Heading>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                        <Card withShadow hoverable>
                            <CardBody style={{ textAlign: 'center' }}>
                                <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                    Buy Shares
                                </Heading>
                                <Text color="muted" size="sm" style={{ marginBottom: '16px' }}>
                                    Purchase stocks, ETFs, or mutual funds
                                </Text>
                                <Button variant="primary" size="sm">
                                    Get Started
                                </Button>
                            </CardBody>
                        </Card>

                        <Card withShadow hoverable>
                            <CardBody style={{ textAlign: 'center' }}>
                                <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                    Transfer Money
                                </Heading>
                                <Text color="muted" size="sm" style={{ marginBottom: '16px' }}>
                                    Move funds between accounts
                                </Text>
                                <Button variant="primary" size="sm">
                                    Transfer
                                </Button>
                            </CardBody>
                        </Card>

                        <Card withShadow hoverable>
                            <CardBody style={{ textAlign: 'center' }}>
                                <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                    View Statements
                                </Heading>
                                <Text color="muted" size="sm" style={{ marginBottom: '16px' }}>
                                    Access account documents
                                </Text>
                                <Button variant="primary" size="sm">
                                    View Documents
                                </Button>
                            </CardBody>
                        </Card>

                        <Card withShadow hoverable>
                            <CardBody style={{ textAlign: 'center' }}>
                                <Heading level="h4" weight="semibold" style={{ marginBottom: '8px' }}>
                                    Research
                                </Heading>
                                <Text color="muted" size="sm" style={{ marginBottom: '16px' }}>
                                    Explore investment ideas
                                </Text>
                                <Button variant="primary" size="sm">
                                    Research
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    );
}
