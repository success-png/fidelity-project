/**
 * Watchlist Page
 * Track and monitor securities on your watchlist
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Card, CardBody, CardHeader } from "@/components/ui/Card/Card";
import { Heading, Text } from "@/components/ui/Typography/Typography";
import { Button } from "@/components/ui/Button/Button";
import { Badge } from "@/components/ui/Badge/Badge";

export const metadata: Metadata = {
    title: "Watchlist - Fidelity Investments",
    description: "Track and monitor securities on your watchlist",
};

export default function WatchlistPage() {
    return (
        <>
            <section className="page-header" style={{ padding: '40px 0', backgroundColor: '#f5f5f5' }}>
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div>
                            <Heading level="h1" weight="bold">Watchlist</Heading>
                            <Text color="muted" style={{ marginTop: '8px' }}>Track securities you&apos;re interested in</Text>
                        </div>
                        <Button variant="primary">Add Symbol</Button>
                    </div>
                </Container>
            </section>

            <section style={{ padding: '40px 0' }}>
                <Container>
                    <Card withShadow>
                        <CardHeader>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Heading level="h3" weight="semibold">My Watchlist</Heading>
                                <Text size="sm" color="muted">12 symbols</Text>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                                            <th style={{ textAlign: 'left', padding: '12px 16px' }}><Text weight="semibold" size="sm">Symbol</Text></th>
                                            <th style={{ textAlign: 'left', padding: '12px 16px' }}><Text weight="semibold" size="sm">Name</Text></th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}><Text weight="semibold" size="sm">Price</Text></th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}><Text weight="semibold" size="sm">Change</Text></th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}><Text weight="semibold" size="sm">% Change</Text></th>
                                            <th style={{ textAlign: 'right', padding: '12px 16px' }}><Text weight="semibold" size="sm">Volume</Text></th>
                                            <th style={{ textAlign: 'center', padding: '12px 16px' }}><Text weight="semibold" size="sm">Actions</Text></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { symbol: 'AAPL', name: 'Apple Inc.', price: '$178.45', change: '+$1.23', pct: '+0.69%', volume: '52.3M', positive: true },
                                            { symbol: 'MSFT', name: 'Microsoft Corporation', price: '$378.91', change: '+$5.42', pct: '+1.45%', volume: '28.1M', positive: true },
                                            { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '$141.80', change: '-$0.95', pct: '-0.67%', volume: '22.4M', positive: false },
                                            { symbol: 'AMZN', name: 'Amazon.com Inc.', price: '$178.25', change: '+$2.15', pct: '+1.22%', volume: '45.6M', positive: true },
                                            { symbol: 'NVDA', name: 'NVIDIA Corporation', price: '$875.50', change: '+$12.30', pct: '+1.42%', volume: '38.2M', positive: true },
                                            { symbol: 'TSLA', name: 'Tesla Inc.', price: '$215.75', change: '-$4.20', pct: '-1.91%', volume: '112.5M', positive: false },
                                            { symbol: 'META', name: 'Meta Platforms Inc.', price: '$485.30', change: '+$8.75', pct: '+1.84%', volume: '18.9M', positive: true },
                                            { symbol: 'BRK.B', name: 'Berkshire Hathaway', price: '$408.92', change: '+$1.15', pct: '+0.28%', volume: '3.2M', positive: true },
                                        ].map((stock, index) => (
                                            <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
                                                <td style={{ padding: '12px 16px' }}><Text weight="semibold" style={{ color: '#0d6e4e' }}>{stock.symbol}</Text></td>
                                                <td style={{ padding: '12px 16px' }}><Text size="sm">{stock.name}</Text></td>
                                                <td style={{ textAlign: 'right', padding: '12px 16px' }}><Text weight="semibold">{stock.price}</Text></td>
                                                <td style={{ textAlign: 'right', padding: '12px 16px' }}><Text size="sm" style={{ color: stock.positive ? '#0d6e4e' : '#c41e3a' }}>{stock.change}</Text></td>
                                                <td style={{ textAlign: 'right', padding: '12px 16px' }}><Badge variant={stock.positive ? "success" : "error"}>{stock.pct}</Badge></td>
                                                <td style={{ textAlign: 'right', padding: '12px 16px' }}><Text size="sm">{stock.volume}</Text></td>
                                                <td style={{ textAlign: 'center', padding: '12px 16px' }}>
                                                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                                                        <Button variant="primary" size="sm">Buy</Button>
                                                        <Button variant="outline" size="sm">Alert</Button>
                                                    </div>
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

            <section style={{ padding: '0 0 60px' }}>
                <Container>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        <Card withShadow>
                            <CardHeader>
                                <Heading level="h4" weight="semibold">Market Overview</Heading>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'grid', gap: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Text>S&P 500</Text>
                                        <Text weight="semibold" style={{ color: '#0d6e4e' }}>5,234.18 +0.45%</Text>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Text>Dow Jones</Text>
                                        <Text weight="semibold" style={{ color: '#0d6e4e' }}>39,131.53 +0.32%</Text>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Text>NASDAQ</Text>
                                        <Text weight="semibold" style={{ color: '#0d6e4e' }}>16,239.94 +0.68%</Text>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <Card withShadow>
                            <CardHeader>
                                <Heading level="h4" weight="semibold">Watchlist Performance</Heading>
                            </CardHeader>
                            <CardBody>
                                <div style={{ display: 'grid', gap: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Text>Today&apos;s Change</Text>
                                        <Text weight="semibold" style={{ color: '#0d6e4e' }}>+$342.18</Text>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Text>Total Value</Text>
                                        <Text weight="semibold">$45,892.50</Text>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Text>Gain/Loss</Text>
                                        <Text weight="semibold" style={{ color: '#0d6e4e' }}>+$2,456.30</Text>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    );
}
