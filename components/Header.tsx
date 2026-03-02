"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "MUSEUM", icon: "◈" },
  { href: "/service", label: "SERVICES", icon: "◆" },
  { href: "/works", label: "PORTFOLIO", icon: "◆" },
  { href: "/about", label: "ABOUT", icon: "◆" },
  { href: "/flow-price", label: "FLOW & PRICE", icon: "◆" },
  { href: "/faq", label: "FAQ", icon: "◆" },
  { href: "/blog", label: "BLOG", icon: "◆" },
  { href: "/contact", label: "CONTACT", icon: "◆" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop Side Rail */}
      <nav className={`side-rail ${isCollapsed ? "collapsed" : ""}`} aria-label="メインナビゲーション">
        <div className="side-rail-logo">
          <Link href="/">
            <span className="logo-icon">⬢</span>
            {!isCollapsed && <span className="logo-text">FROM<br/>CREATE</span>}
          </Link>
        </div>

        <ul className="side-rail-nav">
          {navItems.map(({ href, label, icon }) => (
            <li key={href}>
              <Link
                href={href}
                className={`side-rail-link ${pathname === href ? "active" : ""}`}
                aria-current={pathname === href ? "page" : undefined}
              >
                <span className="rail-icon">{icon}</span>
                {!isCollapsed && <span className="rail-label">{label}</span>}
              </Link>
            </li>
          ))}
        </ul>

        {!isCollapsed && (
          <div className="side-rail-footer">
            <Link href="/contact" className="rail-cta-btn">
              EXPLORE EXHIBITS
            </Link>
          </div>
        )}

        <button
          className="rail-collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "ナビを展開" : "ナビを折りたたむ"}
        >
          {isCollapsed ? "▸" : "◂"}
        </button>
      </nav>

      {/* Mobile Top Header */}
      <header className="mobile-header">
        <div className="mobile-header-inner">
          <Link href="/" className="logo">
            <span className="logo-icon">⬢</span>
            <span className="logo-text-inline">FROM CREATE</span>
          </Link>
          <button
            id="navToggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobileNav"
            aria-label="メニュー"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`mobile-nav ${isOpen ? "open" : ""}`} id="mobileNav">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
