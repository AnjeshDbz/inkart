import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <Image src="/images/inkart-logo.webp" alt="Inkart logo" width={140} height={40} />
        </div>

        <div>
          <h4 className="font-semibold mb-2">Information</h4>
          <ul className="space-y-1">
            <li><Link href="/about">About Us</Link></li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Customer Service</h4>
          <ul className="space-y-1">
            <li>Shipping</li>
            <li>Returns</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">My Account</h4>
          <ul className="space-y-1">
            <li>Login</li>
            <li>Orders</li>
            <li>Wishlist</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm border-t border-white/20 py-4">
        © {new Date().getFullYear()} DotInkart. All rights reserved.
      </div>
    </footer>
  );
}
