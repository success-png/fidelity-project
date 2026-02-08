/**
 * Trade Page
 * Trading interface for buying and selling securities
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody, CardHeader } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";

export const metadata: Metadata = {
    title: "Trade - Fidelity Investments",
    description: "Buy and sell stocks, ETFs, mutual funds, and more",
};

export default function TradePage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header" style={{ padding: '40px 0', backgroundColor: '#f5f5f5' }}>
                <Container>
                    <Heading level="h1" weight="bold">
                        Trade
                    </Heading>
                    <Text color="muted" style={{ marginTop: '8px' }}>
                        Buy and sell stocks, ETFs, options, and more
                    </Text>
                </Container>
            </section>

            {/* Trading Interface */}
            <section style={{ padding: '40px 0' }}>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
                        {/* Buy Form */}
                        <Card withShadow>
                            <CardHeader>
                                <Heading level="h3" weight="semibold">
                                    Buy
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <div style={{ marginBottom: '20px' }}>
                                    <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                        Symbol or Name
                                    </Text>
                                    <Input
                                        placeholder="Search stocks, ETFs, mutual funds..."
                                        style={{ width: '100%' }}
                                    />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                        Order Type
                                    </Text>
                                    <select style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}>
                                        <option>Market Order</option>
                                        <option>Limit Order</option>
                                        <option>Stop Order</option>
                                        <option>Stop Limit Order</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                        Quantity
                                    </Text>
                                    <Input
                                        type="number"
                                        placeholder="Enter quantity"
                                        style={{ width: '100%' }}
                                    />
                                </div>

                                <div style={{ marginBottom: '24px' }}>
                                    <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                        Market Price
                                    </Text>
                                    <Text size="lg" weight="semibold">$178.45</Text>
                                </div>

                                <div style={{ padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '20px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <Text size="sm" color="muted">Estimated Cost</Text>
                                        <Text weight="semibold">$8,922.50</Text>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Text size="sm" color="muted">Available Cash</Text>
                                        <Text weight="semibold">$12,500.00</Text>
                                    </div>
                                </div>

                                <Button variant="primary" size="lg" style={{ width: '100%' }}>
                                    Review Order
                                </Button>
                            </CardBody>
                        </Card>

                        {/* Sell Form */}
                        <Card withShadow>
                            <CardHeader>
                                <Heading level="h3" weight="semibold">
                                    Sell
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <div style={{ marginBottom: '20px' }}>
                                    <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                        Select Position
                                    </Text>
                                    <select style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}>
                                        <option>AAPL - Apple Inc. (50 shares)</option>
                                        <option>VTI - Vanguard Total Stock Market ETF (150 shares)</option>
                                        <option>MSFT - Microsoft Corporation (35 shares)</option>
                                        <option>BND - Vanguard Total Bond Market ETF (200 shares)</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                        Order Type
                                    </Text>
                                    <select style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px' }}>
                                        <option>Market Order</option>
                                        <option>Limit Order</option>
                                        <option>Stop Order</option>
                                        <option>Stop Limit Order</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                        Quantity
                                    </Text>
                                    <Input
                                        type="number"
                                        placeholder="Enter quantity"
                                        style={{ width: '100%' }}
                                    />
                                </div>

                                <div style={{ marginBottom: '24px' }}>
                                    <Text size="sm" weight="medium" style={{ marginBottom: '8px', display: 'block' }}>
                                        Market Price
                                    </Text>
                                    <Text size="lg" weight="semibold">$178.45</Text>
                                </div>

                                <div style={{ padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '20px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                        <Text size="sm" color="muted">Estimated Proceeds</Text>
                                        <Text weight="semibold">$8,922.50</Text>
                                    </div>
                                </div>

                                <Button variant="outline" size="lg" style={{ width: '100%', borderColor: '#c41e3a', color: '#c41e3a' }}>
                                    Review Order
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* Recent Orders */}
            <section style={{ padding: '0 0 60px' }}>
                <Container>
                    <Card withShadow>
                        <CardHeader>
                            <Heading level="h3" weight="semibold">
                                Recent Orders
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
                                                <Text weight="semibold" size="sm">Symbol</Text>
                                            </th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Qty</Text>
                                            </th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Price</Text>
                                            </th>
                                            <th style={{ textAlign: 'left', padding: '12px 16px' }}>
                                                <Text weight="semibold" size="sm">Status</Text>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm">Feb 6, 2025</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm" style={{ color: '#0d6e4e' }}>Bought</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm" weight="semibold">NVDA</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text size="sm">10</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text size="sm">$850.00</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <span style={{ padding: '4px 12px', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '12px', fontSize: '12px' }}>
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm">Feb 5, 2025</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm" style={{ color: '#c41e3a' }}>Sold</Text>
                                            </td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Text size="sm" weight="semibold">TSLA</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text size="sm">15</Text>
                                            </td>
                                            <td style={{ textAlign: 'right', padding: '12px 16px' }}>
                                                <Text size="sm">$210.00</Text>
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
        </>
    );
}
