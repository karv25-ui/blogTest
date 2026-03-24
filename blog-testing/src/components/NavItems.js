import { useState, useEffect, UseRef } from "react";

const NavItems = [
    {
        label: "Nav Menu",
        dropdown: [
    {label: "Home", desc: "Route to Home Page"},
    {label: "About", desc: "Route to About Page"},
    {label: "Contact", desc: "Route to Contact Page"},
        ],
    }
];
const styles = {/* 
    body {
    font-family: 'DM SAns', sans-serif;
    background: var(--bg);
    color: var (--text);
    min-height: 100vh;
}
    
    *NAV SHELL*
    .nav-wrap {
    postion: sitcky;
    top: 0;
    z-index:100; 
    padding: 12px 20px;
}
    .nav-inner {
    max-width: 1180px; 
    margin: 0 auto; 
    display: flex;
    align-items: center; 
    gap: 8px; 
    height: var(--nav-h);
    background: rgba(17,17,24,0.75);
    backdrop-filter: blur(20px) saturate(140%);
    border: 1px solid var(--border);
    border-radius: 20px; 
    padding: 0 20px 0 24px; 
      box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
    transition: box-shadow 0.3s;
  }
 
  .nav-inner.scrolled {
    box-shadow: 0 12px 48px rgba(0,0,0,0.6), 0 0 0 1px var(--accent-glow), inset 0 1px 0 rgba(255,255,255,0.06);
  }
    
  * ── DESKTOP LINKS ── *
   .nav-links {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
  }
 
  .nav-item {
    position: relative;
  }
 
  .nav-btn {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 14px;
    border-radius: 10px;
    border: none;
    background: transparent;
    color: var(--muted);
    font-family: 'DM Sans', sans-serif;
    font-size: 14.5px;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s, background 0.2s;
    white-space: nowrap;
    text-decoration: none;
  }
 
  .nav-btn:hover, .nav-btn.active {
    color: var(--text);
    background: rgba(255,255,255,0.05);
  }
 
  .nav-btn.active { color: var(--text); }

  * ── DROPDOWN ── *
  .dropdown {
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%) translateY(-6px);
    min-width: 280px;
    background: rgba(17,17,24,0.95);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 8px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s, transform 0.2s;
    backdrop-filter: blur(24px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04);
  }
 
  .dropdown.open {
    opacity: 1;
    pointer-events: all;
    transform: translateX(-50%) translateY(0);
  }
 
  .dropdown-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.15s;
    text-decoration: none;
  }
 
  .dropdown-item:hover { background: rgba(124,109,250,0.1); }
 
  .dd-icon {
    width: 36px;
    height: 36px;
    border-radius: 9px;
    background: var(--pill);
    display: grid;
    place-items: center;
    font-size: 16px;
    flex-shrink: 0;
    border: 1px solid rgba(124,109,250,0.15);
  }
 
  .dd-label {
    font-family: 'Syne', sans-serif;
    font-size: 13.5px;
    font-weight: 600;
    color: var(--text);
  }
 
  .dd-desc {
    font-size: 12px;
    color: var(--muted);
    margin-top: 1px;
  }

  * ── CTA AREA ── *
    .nav-cta {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;
    flex-shrink: 0;
  }
 
  .btn-ghost {
    padding: 8px 16px;
    border-radius: 10px;
    border: none;
    background: transparent;
    color: var(--muted);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s;
  }
  .btn-ghost:hover { color: var(--text); }
 
  .btn-primary {
    padding: 9px 20px;
    border-radius: 10px;
    border: none;
    background: linear-gradient(135deg, var(--accent), #a78bfa);
    color: #fff;
    font-family: 'Syne', sans-serif;
    font-size: 13.5px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 20px var(--accent-glow);
    transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
    letter-spacing: 0.2px;
  }
  .btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 28px var(--accent-glow);
  }
  .btn-primary:active { transform: translateY(0); }

  * ── MOBILE MENU ── *
  .mobile-menu {
    max-width: 1180px;
    margin: 8px auto 0;
    background: rgba(17,17,24,0.96);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 16px;
    display: none;
    flex-direction: column;
    gap: 4px;
    backdrop-filter: blur(20px);
    animation: slideDown 0.25s ease;
  }
 
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
 
  .mobile-menu.open { display: flex; }
 
  .mob-section { margin-bottom: 4px; }
 
  .mob-header {
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: var(--accent);
    padding: 10px 12px 6px;
  }
 
  .mob-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 10px;
    font-size: 14.5px;
    color: var(--text);
    cursor: pointer;
    transition: background 0.15s;
    text-decoration: none;
  }
  .mob-link:hover { background: rgba(255,255,255,0.05); }
 
  .mob-divider {
    height: 1px;
    background: var(--border);
    margin: 8px 0;
  }
 
  .mob-cta {
    display: flex;
    gap: 10px;
    padding: 8px 4px 4px;
  }
 
  .mob-cta button { flex: 1; justify-content: center; }
 

    }
    
*/}

export default function NavMenu () {
    const[activeDropdown, setActiveDropdown] = useState(null);
    const[mobileOpen, setMobileOpen] = useState(false);
    const[scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);
    const closeTimer = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
}, []);
// Close dropdown when clicking outside
useEffect (() => {
    const handler = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
            setActiveDropdown(null);
        }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
}, []);

const handleMouseEnter = (label) => {
    clearTimeout(close.Timer.current);
    setActiveDropdown(label);
};

const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
};

}
