"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <>
      <Header />

      <main>
        <section className="hero" style={{ backgroundImage: "url('/images/img1.PNG')" }}>
          <div className="container">
            <div className="hero-card">
              <h1 className="hero-title">
                Moving money<br />made easy
              </h1>
              <p className="hero-desc">
                Transfer your retirement, investing, or savings account in a few simple steps.
              </p>

              <div className="hero-buttons">
                <Link href="/auth/open-account" className="btn btn-primary">
                  Open an account
                </Link>
                <Link href="/accounts/transfers" className="btn btn-secondary">
                  Start a Transfer
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="slideshow-section">
          <div className="container">
            <div className="slideshow-nav">
              <button
                className={`slideshow-btn ${activeSlide === 0 ? "active" : ""}`}
                onClick={() => handleSlideClick(0)}
              >
                <span>Start investing</span>
              </button>
              <button
                className={`slideshow-btn ${activeSlide === 1 ? "active" : ""}`}
                onClick={() => handleSlideClick(1)}
              >
                <span>Save for retirement</span>
              </button>
              <button
                className={`slideshow-btn ${activeSlide === 2 ? "active" : ""}`}
                onClick={() => handleSlideClick(2)}
              >
                <span>Save for healthcare</span>
              </button>
              <button
                className={`slideshow-btn ${activeSlide === 3 ? "active" : ""}`}
                onClick={() => handleSlideClick(3)}
              >
                <span>Invest for a child</span>
              </button>
            </div>
            <div className="slideshow-content">
              <div className={`slide ${activeSlide === 0 ? "active" : ""}`}>
                <div className="slide-image">
                  <img src="/images/img2.PNG" alt="Start investing" />
                  <Link
                    href="/auth/open-account"
                    className="slide-link-area"
                    style={{ top: "73%", left: "4%", width: "20%", height: "5%" }}
                  />
                  <Link
                    href="/support/learn-more"
                    className="slide-link-area"
                    style={{ top: "73%", left: "26%", width: "16%", height: "5%" }}
                  />
                </div>
              </div>
              <div className={`slide ${activeSlide === 1 ? "active" : ""}`}>
                <div className="slide-image">
                  <img src="/images/img3.PNG" alt="Save for retirement" />
                </div>
              </div>
              <div className={`slide ${activeSlide === 2 ? "active" : ""}`}>
                <div className="slide-image">
                  <img src="/images/img4.PNG" alt="Save for healthcare" />
                </div>
              </div>
              <div className={`slide ${activeSlide === 3 ? "active" : ""}`}>
                <div className="slide-image">
                  <img src="/images/img5.PNG" alt="Invest for a child" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="checking-section">
          <div className="checking-content">
            <div className="checking-image">
              <img src="/images/Wealth-plan-possibilities-new.jpg" alt="Fidelity advisor partner" />
            </div>
            <div className="checking-text">
              <h2 className="checking-title">
                A partner to help<br />bring your plans to life
              </h2>
              <p className="checking-description">
                Collaborate with a dedicated<br />Fidelity advisor to build a<br />
                comprehensive wealth management<br />strategy designed to help you<br />
                meet your goals and evolving needs.
              </p>
              <Link href="/company/advisor" className="checking-button">
                Explore advisor services
              </Link>
            </div>
          </div>
        </section>

        <section className="links-section">
          <div className="links-content">
            <a
              href="https://brokercheck.finra.org/firm/summary/7784"
              target="_blank"
              rel="noopener noreferrer"
              className="link-item link-item-black"
            >
              Review Fidelity Brokerage Services with FINRA&apos;s BrokerCheck
            </a>
            <a
              href="https://www.fidelity.com/bin-public/060_www_fidelity_com/documents/FBS-FPWA-CRS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-item"
            >
              Regulatory summary of Fidelity services (PDF)
            </a>
          </div>
        </section>

        <section className="cards-section">
          <div className="cards-header">
            <h2 className="cards-title">Expertise you can act on</h2>
          </div>
          <div className="cards-container">
            <div className="card-item">
              <div className="card-half card-image">
                <img src="/images/im1.avif" alt="Wealth Management" />
              </div>
              <div className="card-half card-content">
                <h3 className="card-title">Wealth Management</h3>
                <p className="card-description">
                  Get a dedicated financial advisor and comprehensive wealth planning to help you manage your investments and reach your financial goals.
                </p>
                <Link href="/planning/wealth-management" className="card-link">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="card-item">
              <div className="card-half card-image">
                <img src="/images/im2.PNG" alt="Retirement Planning" />
              </div>
              <div className="card-half card-content">
                <h3 className="card-title">Retirement Planning</h3>
                <p className="card-description">
                  Plan for your future with comprehensive retirement solutions designed to help you achieve your retirement goals.
                </p>
                <Link href="/planning/plan-retirement" className="card-link">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="card-item">
              <div className="card-half card-image">
                <img src="/images/im3.avif" alt="Investing Guidance" />
              </div>
              <div className="card-half card-content">
                <h3 className="card-title">Investing Guidance</h3>
                <p className="card-description">
                  Get expert investment advice and guidance to help you make informed decisions and build your portfolio.
                </p>
                <Link href="/products/investing-trading" className="card-link">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="investing-section">
          <div className="investing-content">
            <div className="investing-text" style={{ paddingLeft: "80px" }}>
              <h2 className="investing-title" style={{ color: "black", fontSize: "32px", fontWeight: "normal" }}>
                Why choose Fidelity?
              </h2>
              <p className="investing-description" style={{ color: "black", fontSize: "18px" }}>
                Our objective insights and disciplined approach have helped generations of customers through all kinds of markets.
              </p>
              <ul className="investing-features" style={{ color: "black", fontSize: "20px", lineHeight: "1.2" }}>
                <li style={{ marginBottom: "8px" }}>A clear, straightforward experience</li>
                <li style={{ marginBottom: "8px" }}>Guidance as life changes</li>
                <li style={{ marginBottom: "8px" }}>A wider range of integrated tools and products</li>
                <li style={{ marginBottom: "8px" }}>Value and transparency at every step</li>
              </ul>
            </div>
            <div className="investing-image">
              <img src="/images/img6.avif" alt="Why choose Fidelity" />
            </div>
          </div>
        </section>

        <section className="retirement-section" style={{ background: "#f5f5f5" }}>
          <div className="retirement-content">
            <div className="retirement-image">
              <img src="/images/img7.avif" alt="Retirement planning" />
            </div>
            <div className="retirement-text">
              <h2 className="retirement-title">Looking for something else?</h2>
              <p className="retirement-description">
                Answer a few questions about your goals<br />
                and we&apos;ll show account options that could work for you.
              </p>
              <Link href="#" className="retirement-button-transparent">
                Get started
              </Link>
            </div>
          </div>
        </section>

        <section className="quick-links-section">
          <div
            className="quick-links-content"
            style={{
              display: "flex",
              gap: "0px",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 20px",
            }}
          >
            <div
              className="quick-links-column"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "0 20px 0 0",
              }}
            >
              <Link href="/research/mutual-funds" className="quick-link" style={{ fontSize: "14px" }}>
                Mutual Funds
              </Link>
              <Link href="/products/etfs" className="quick-link" style={{ fontSize: "14px" }}>
                ETFs
              </Link>
              <Link href="/research/fixed-income" className="quick-link" style={{ fontSize: "14px" }}>
                Fixed Income
              </Link>
              <Link href="/research/fixed-income" className="quick-link" style={{ fontSize: "14px" }}>
                Bonds
              </Link>
              <Link href="/research/fixed-income" className="quick-link" style={{ fontSize: "14px" }}>
                CDs
              </Link>
              <Link href="/research/options" className="quick-link" style={{ fontSize: "14px" }}>
                Options
              </Link>
              <Link href="/products/crypto" className="quick-link" style={{ fontSize: "14px" }}>
                Crypto
              </Link>
              <Link href="/accounts/fidelity-trader-plus" className="quick-link" style={{ fontSize: "14px" }}>
                Fidelity Trader+
              </Link>
              <Link href="/company/locations" className="quick-link" style={{ fontSize: "14px" }}>
                Investor Centers
              </Link>
            </div>
            <div
              className="quick-links-column"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "0 10px",
              }}
            >
              <Link href="/research/stocks-etfs-crypto" className="quick-link" style={{ fontSize: "14px" }}>
                Stocks
              </Link>
              <Link href="/company/trading" className="quick-link" style={{ fontSize: "14px" }}>
                Online Trading
              </Link>
              <Link href="/products/direct-indexing" className="quick-link" style={{ fontSize: "14px" }}>
                Direct Indexing
              </Link>
              <Link href="/products/sustainable-investing" className="quick-link" style={{ fontSize: "14px" }}>
                Sustainable Investing
              </Link>
              <Link href="/products/life-insurance" className="quick-link" style={{ fontSize: "14px" }}>
                Annuities
              </Link>
              <Link href="/products/life-insurance" className="quick-link" style={{ fontSize: "14px" }}>
                Life Insurance
              </Link>
              <Link href="/planning/long-term-care" className="quick-link" style={{ fontSize: "14px" }}>
                Long-Term Care Planning
              </Link>
              <Link href="/products/college-savings" className="quick-link" style={{ fontSize: "14px" }}>
                529 Plans
              </Link>
              <Link href="/products/health-savings" className="quick-link" style={{ fontSize: "14px" }}>
                Health Savings Account
              </Link>
            </div>
            <div
              className="quick-links-divider"
              style={{ width: "1px", background: "#000" }}
            ></div>
            <div
              className="quick-links-column"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "0 0 0 20px",
              }}
            >
              <Link href="/products/retirement-iras" className="quick-link" style={{ fontSize: "14px" }}>
                IRAs
              </Link>
              <Link href="/planning/retirement" className="quick-link" style={{ fontSize: "14px" }}>
                Retirement Planning
              </Link>
              <Link href="/products/retirement-iras" className="quick-link" style={{ fontSize: "14px" }}>
                Small Business Retirement Plans
              </Link>
              <Link href="/planning/charitable-giving" className="quick-link" style={{ fontSize: "14px" }}>
                Charitable Giving
              </Link>
              <Link href="/research/marketplace-solutions" className="quick-link" style={{ fontSize: "14px" }}>
                Marketplace Solutions
              </Link>
              <a
                href="https://brokercheck.finra.org/firm/summary/7784"
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link"
                style={{ fontSize: "14px" }}
              >
                FINRA&apos;s BrokerCheck
              </a>
              <Link href="/company/why-fidelity" className="quick-link" style={{ fontSize: "14px" }}>
                Why Fidelity
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}