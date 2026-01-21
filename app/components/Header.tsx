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
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white">
        {/* ================= TOP BAR ================= */}
        <div className="bg-primary text-white text-xs md:text-sm">
          <div className="mx-auto max-w-7xl px-4 flex justify-between py-1">
            <span>Email: care@dotinkart.com</span>
            <span className="cursor-pointer">English ▾</span>
          </div>
        </div>

        {/* ================= MAIN HEADER ================= */}
        <div className="border-b border-gray-300 shadow-sm bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-3">
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
        focus:outline-none focus:ring-2 focus:ring-brand.primary
      "
                />

                <button
                  aria-label="Search"
                  className="
        absolute right-2 top-1/2 -translate-y-1/2
        text-[color:var(--primary)]
        hover:text-[color:var(--secondary)]
        transition-colors
      "
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>

            {/* RIGHT: ICONS + MOBILE CONTROLS */}
            <div className="flex items-center gap-4 text-lg">
              {/* MOBILE: Search + Hamburger (FIXED) */}
              <div className="flex items-center gap-3 md:hidden">
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className="hover:text-brand.secondary focus-visible:ring-2 focus-visible:ring-brand.primary rounded"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <button
                  onClick={() => setMenuOpen(true)}
                  aria-label="Toggle menu"
                  className="text-xl focus-visible:ring-2 focus-visible:ring-brand.primary rounded"
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>

              {/* DESKTOP ICONS */}
              <div className="hidden md:flex items-center gap-4">
                <button
                  aria-label="Wishlist"
                  className="text-[color:var(--primary)] hover:text-[color:var(--secondary)] transition-colors"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>

                <button
                  aria-label="Cart"
                  className="text-[color:var(--primary)] hover:text-[color:var(--secondary)] transition-colors"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>

                <button
                  aria-label="Account"
                  className="text-[color:var(--primary)] hover:text-[color:var(--secondary)] transition-colors"
                >
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= NAVIGATION (DESKTOP + MOBILE COLLAPSE) ================= */}
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
                  className={`hover:text-brand.primary ${
                    pathname === "/" ? "text-brand.primary font-semibold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className={`hover:text-brand.primary ${
                    pathname === "/products"
                      ? "text-brand.primary font-semibold"
                      : ""
                  }`}
                >
                  Shop2
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-brand.primary">
                  Categories ▾
                </Link>
              </li>

              <li>
                <a href="#combos" className="hover:text-brand.primary">
                  Combos
                </a>
              </li>

              <li>
                <span className="cursor-pointer hover:text-brand.primary">
                  More ▾
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE SEARCH POPUP ================= */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          searchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-black/40 md:hidden`}
        onClick={() => setSearchOpen(false)}
      >
        <div
          className={`bg-white w-full shadow-lg transform transition-transform duration-300 ease-out ${
            searchOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-3">
            <input
              autoFocus={searchOpen}
              aria-label="Search products"
              placeholder="Search products…"
              className="flex-1 border rounded-md px-4 py-2 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand.primary"
            />
            <button
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
              className="text-xl"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE SIDE MENU ================= */}
      <div
        className={`fixed inset-0 z-50 transition lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 backdrop-blur-sm transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-[75%] max-w-xs bg-white shadow-xl transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between border-b">
            <span className="font-semibold">Menu</span>
            <button onClick={() => setMenuOpen(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <nav className="p-4 space-y-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`block ${
                pathname === "/" ? "text-brand.primary font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className={`block ${
                pathname === "/products"
                  ? "text-brand.primary font-semibold"
                  : ""
              }`}
            >
              Shop
            </Link>
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Categories
            </Link>
            <a
              href="#combos"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Combos
            </a>
            <span className="block cursor-pointer">More</span>
          </nav>
        </aside>
      </div>

      {/* ================= MOBILE BOTTOM NAV (NOW SHOWS!) ================= */}
      <nav
        className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t z-40 flex justify-around py-2 shadow-lg"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {[
          { href: "/", icon: faHome, label: "Home", active: pathname === "/" },
          {
            href: "/categories",
            icon: faList,
            label: "Categories",
            active: pathname === "/categories",
          },
          {
            href: "/messages",
            icon: faMessage,
            label: "Messages",
            active: pathname === "/messages",
          },
          {
            href: "/cart",
            icon: faShoppingCart,
            label: "Cart",
            badge: 3,
            active: pathname === "/cart",
          },
          {
            href: "/account",
            icon: faUser,
            label: "Account",
            active: pathname === "/account",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={haptic}
            className={`relative flex flex-col items-center text-xs transition-colors ${
              item.active
                ? "text-brand.primary"
                : "text-gray-500 hover:text-brand.primary"
            }`}
          >
            <FontAwesomeIcon icon={item.icon} className="text-lg mb-1" />
            {item.badge && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                {item.badge}
              </span>
            )}
            <span className="text-[11px]">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
