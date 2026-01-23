"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faUser,
  faBars,
  faXmark,
  faMagnifyingGlass,
  faHome,
  faList,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const haptic = () => {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(8);
  }
};

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white">
        {/* ================= TOP BAR ================= */}
        <div className="bg-primary text-white text-xs md:text-sm">
          <div className="mx-auto max-w-10xl px-2 md:px-8 flex justify-between py-1">
            <span>Email: care@dotinkart.com</span>
            <span className="cursor-pointer">English ▾</span>
          </div>
        </div>

        {/* ================= MAIN HEADER ================= */}
        <div className="border-b border-gray-300 shadow-sm bg-white">
          <div className="mx-auto max-w-10xl px-2 md:px-8 py-3 flex items-center justify-between gap-3">
            {/* LEFT: LOGO */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/inkart-logo.webp"
                  alt="Inkart logo"
                  width={120}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* CENTER: SEARCH (DESKTOP ONLY) */}
            <div className="hidden md:flex md:justify-end flex-1">
              <div className="relative w-full">
                <input
                  aria-label="Search products"
                  placeholder="Search through a wide range of products…"
                  className="
                    w-full border rounded-md
                    pl-4 pr-10 py-2
                    bg-white text-black placeholder-gray-500
                    focus:outline-none focus:none 
                  "
                />
                <button
                  aria-label="Search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[color:var(--primary)]"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-4 text-lg">
              {/* MOBILE: Only Hamburger */}
              <div className="flex items-center gap-3 md:hidden">
                <button
                  onClick={() => setMenuOpen(true)}
                  aria-label="Toggle menu"
                  className="text-xl"
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>

              {/* DESKTOP ICONS */}
              <div className="hidden md:flex items-center gap-4">
                <button>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
            </div>
          </div>

          {/* ================= MOBILE SEARCH (NEW INLINE) ================= */}
          <div className="md:hidden px-2 pb-3">
            <div className="relative w-full">
              <input
                placeholder="Search through a wide range of products..."
                className="
                  w-full border rounded-lg
                  pl-4 pr-10 py-2.5
                  bg-white text-black placeholder-gray-500
                  focus:outline-none focus:none
                "
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[color:var(--primary)]">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="border-b border-gray-300 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <ul
              className={`font-medium flex flex-col lg:flex-row gap-4 lg:gap-8 py-3
              lg:justify-center
              ${menuOpen ? "flex" : "hidden lg:flex"}`}
            >
              <li>
                <Link
                  href="/"
                  className={pathname === "/" ? "font-semibold" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={pathname === "/products" ? "font-semibold" : ""}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/products">Categories ▾</Link>
              </li>
              <li>
                <a href="#combos">Combos</a>
              </li>
              <li>
                <span>More ▾</span>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE SIDE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer */}
          <aside className="absolute left-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-xl animate-slideIn">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="text-xl">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col py-2">
              {[
                { label: "Home", href: "/" },
                { label: "Shop", href: "/products" },
                { label: "Categories", href: "/products" },
                { label: "Combos", href: "#combos" },
                { label: "More", href: "#" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg px-5 py-2 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t z-40 flex justify-around py-2 shadow-lg">
        {[
          { href: "/", icon: faHome, label: "Home" },
          { href: "/categories", icon: faList, label: "Categories" },
          { href: "/messages", icon: faMessage, label: "Messages" },
          {
            href: "/cart",
            icon: faShoppingCart,
            label: "Cart",
            badge: 3, // 👈 cart quantity (you can make this dynamic later)
          },
          { href: "/account", icon: faUser, label: "Account" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={haptic}
            className="relative flex flex-col items-center text-xs text-gray-500"
          >
            {/* ICON */}
            <div className="relative">
              <FontAwesomeIcon icon={item.icon} className="text-lg mb-1" />

              {/* BADGE */}
              {item.badge && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </div>

            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
