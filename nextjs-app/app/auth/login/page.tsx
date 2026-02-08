/**
 * Login Page
 * User login form page
 * Uses legacy CSS classes for exact UI replication
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Log in - Fidelity Investments",
    description: "Log in to your Fidelity account to access your investments, retirement plans, and more.",
};

export default function LoginPage() {
    return (
        <>
            <main>
                {/* Hero Section */}
                <section className="hero" style={{ backgroundImage: "url('/images/img1.PNG')" }}>
                    <div className="container">
                        <div className="hero-card">
                            <h1 className="hero-title">Moving money<br />made easy</h1>
                            <p className="hero-desc">
                                Transfer your retirement, investing, or savings account in a few simple steps.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Page Header */}
                <section className="page-header">
                    <div className="container">
                        <h1 className="page-title">Log in</h1>
                    </div>
                </section>

                {/* Login Form */}
                <section className="page-content">
                    <div className="container">
                        <div style={{ maxWidth: '500px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                            <form>
                                <div style={{ marginBottom: '20px' }}>
                                    <label htmlFor="username" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Username</label>
                                    <input 
                                        type="text" 
                                        id="username"
                                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                                        required
                                    />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Password</label>
                                    <input 
                                        type="password" 
                                        id="password"
                                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                                        required
                                    />
                                </div>

                                <div style={{ marginBottom: '24px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                        <input type="checkbox" style={{ width: '18px', height: '18px' }} />
                                        <span style={{ fontSize: '14px', color: '#333' }}>Remember my username</span>
                                    </label>
                                </div>

                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    style={{ width: '100%', borderRadius: '4px', height: '44px', fontSize: '16px' }}
                                >
                                    Log in
                                </button>

                                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                    <a href="#" style={{ color: '#2f7d2f', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
                                        Forgot username or password?
                                    </a>
                                </div>

                                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #eee', textAlign: 'center' }}>
                                    <p style={{ marginBottom: '16px', color: '#555', fontSize: '14px' }}>Don&apos;t have an account?</p>
                                    <Link href="/auth/open-account" className="btn btn-secondary" style={{ borderRadius: '4px', width: '100%' }}>
                                        Open an Account
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
