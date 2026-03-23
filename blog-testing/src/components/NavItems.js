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
}