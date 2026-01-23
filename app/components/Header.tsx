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

const SearchBar = ({ isMobile = false }: { isMobile?: boolean }) => (
  <div
    className={`relative w-full ${isMobile ? "md:hidden px-2 pb-3" : "hidden md:flex md:justify-end flex-1"}`}
  >
    <div className="relative w-full">
      <input
        aria-label="Search products"
        placeholder="Search through a wide range of products…"
        className={`w-full border rounded-${isMobile ? "lg" : "md"} pl-4 pr-10 py-2${isMobile ? ".5" : ""} bg-white text-black placeholder-gray-500 focus:outline-none`}
      />
      <button
        aria-label="Search"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-[color:var(--primary)]"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  </div>
);

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartBadge = 3;

  return (
    <>
      <header className="w-full bg-white sticky top-0 z-50">
        {/* ================= TOP BAR ================= */}
        <div className="bg-primary text-white text-xs md:text-sm">
          <div className="mx-auto max-w-10xl px-2 md:px-8 flex justify-between py-1">
            <span>Email: care@dotinkart.com</span>
            <span className="cursor-pointer hover:text-secondary transition-colors">
              English ▾
            </span>
          </div>
        </div>

        {/* ================= MAIN HEADER ================= */}
        <div className="border-b border-gray-300 shadow-sm bg-white">
          <div className="mx-auto max-w-10xl px-2 md:px-8 py-3 flex items-center justify-between gap-3">
            {/* LEFT: LOGO */}
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/images/inkart-logo.webp"
                  alt="Inkart logo"
                  width={120}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* CENTER: SEARCH (DESKTOP) */}
            <SearchBar />

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-4 text-lg">
              {/* MOBILE: Hamburger */}
              <div className="flex items-center gap-3 md:hidden">
                <button
                  onClick={() => setMenuOpen(true)}
                  aria-label="Toggle menu"
                  className="text-xl p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>

              {/* DESKTOP ICONS */}
              <div className="hidden md:flex items-center gap-4">
                <button className="hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100">
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="relative hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {cartBadge > 0 && (
                    <span className="absolute top-0 right-0 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                      {cartBadge}
                    </span>
                  )}
                </button>
                <button className="hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100">
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          <SearchBar isMobile />
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="border-b border-gray-300 bg-white shadow-sm overflow-x-auto scrollbar-hide">
          <div className="mx-auto max-w-10xl px-4">
            <ul className="font-medium flex items-center justify-center gap-8 py-3 w-max mx-auto md:w-full">
              <li>
                <Link
                  href="/"
                  className={`hover:text-primary transition-colors ${pathname === "/" ? "text-primary font-bold" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`hover:text-primary transition-colors ${pathname === "/products" ? "text-primary font-bold" : ""}`}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors"
                >
                  Categories ▾
                </Link>
              </li>
              <li>
                <a
                  href="#combos"
                  className="hover:text-primary transition-colors"
                >
                  Combos
                </a>
              </li>
              <li>
                <span className="cursor-pointer hover:text-primary transition-colors">
                  More ▾
                </span>
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
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer */}
          <aside className="absolute left-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl animate-slideIn">
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <span className="text-lg font-bold">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-xl p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <nav className="flex flex-col py-2">
              {[
                { label: "Home", href: "/", icon: faHome },
                { label: "Shop", href: "/products", icon: faShoppingCart },
                { label: "Categories", href: "/products", icon: faList },
                { label: "Combos", href: "#combos", icon: faHome },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 text-lg px-5 py-3 hover:bg-gray-50 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-5 text-gray-400"
                  />
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-white/80 backdrop-blur-md border-t z-40 flex justify-around py-4 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        {[
          { href: "/", icon: faHome, label: "Home" },
          { href: "/categories", icon: faList, label: "Categories" },
          { href: "/messages", icon: faMessage, label: "Messages" },
          {
            href: "/cart",
            icon: faShoppingCart,
            label: "Cart",
            badge: cartBadge,
          },
          { href: "/account", icon: faUser, label: "Account" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={haptic}
            className={`relative flex flex-col items-center text-xs transition-colors ${pathname === item.href ? "text-primary" : "text-gray-500"}`}
          >
            <div className="relative">
              <FontAwesomeIcon icon={item.icon} className="text-xl mb-1" />
              {item.badge && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
