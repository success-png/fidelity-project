/**
 * Open Account Page
 * Account registration form page
 * Uses legacy CSS classes for exact UI replication
 */

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Open an Account - Fidelity Investments",
    description: "Open a Fidelity account and start investing today. Choose from brokerage, retirement, and more.",
};

export default function OpenAccountPage() {
    return (
        <>
            <Header />

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
                        <h1 className="page-title">Open an Account</h1>
                    </div>
                </section>

                {/* Account Registration Form */}
                <section className="page-content">
                    <div className="container">
                        <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                            <div style={{ marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>
                                <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111', margin: 0 }}>Personal Information</h2>
                            </div>
                            
                            <form>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                                    <div>
                                        <label htmlFor="firstName" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>First Name</label>
                                        <input 
                                            type="text" 
                                            id="firstName"
                                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Last Name</label>
                                        <input 
                                            type="text" 
                                            id="lastName"
                                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                                            required
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                                        required
                                    />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Phone Number</label>
                                    <input 
                                        type="tel" 
                                        id="phone"
                                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                                        required
                                    />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label htmlFor="ssn" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Social Security Number</label>
                                    <input 
                                        type="text" 
                                        id="ssn"
                                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                                        required
                                    />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label htmlFor="dob" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Date of Birth</label>
                                    <input 
                                        type="date" 
                                        id="dob"
                                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                                        required
                                    />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label htmlFor="address" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Street Address</label>
                                    <input 
                                        type="text" 
                                        id="address"
                                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                                        required
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                                    <div>
                                        <label htmlFor="city" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>City</label>
                                        <input 
                                            type="text" 
                                            id="city"
                                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>State</label>
                                        <input 
                                            type="text" 
                                            id="state"
                                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="zip" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>ZIP</label>
                                        <input 
                                            type="text" 
                                            id="zip"
                                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                                            required
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '24px', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #eee' }}>
                                    <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111', margin: '0 0 16px' }}>Account Preferences</h2>
                                    
                                    <label htmlFor="accountType" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>Account Type</label>
                                    <select 
                                        id="accountType"
                                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px', background: '#fff' }}
                                    >
                                        <option value="">Select account type</option>
                                        <option value="brokerage">Individual Brokerage</option>
                                        <option value="ira">Traditional IRA</option>
                                        <option value="roth-ira">Roth IRA</option>
                                        <option value="401k">401(k) Rollover</option>
                                        <option value="529">529 College Savings</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: '32px' }}>
                                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer' }}>
                                        <input type="checkbox" style={{ width: '18px', height: '18px', marginTop: '3px' }} />
                                        <span style={{ fontSize: '14px', color: '#333', lineHeight: '1.4' }}>
                                            I agree to the terms and conditions and privacy policy. I understand that this is a binding agreement.
                                        </span>
                                    </label>
                                </div>

                                <button 
                                    type="submit" 
                                    className="btn btn-primary" 
                                    style={{ width: '100%', borderRadius: '4px', height: '44px', fontSize: '16px' }}
                                >
                                    Open Account
                                </button>

                                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                    <p style={{ color: '#666', fontSize: '13px' }}>
                                        By opening an account, you agree to our Terms of Service and Privacy Policy.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}