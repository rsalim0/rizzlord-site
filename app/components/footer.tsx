import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <span className="site-footer-copy">© {year} Rizzlord</span>
      <nav className="site-footer-nav" aria-label="Legal">
        <Link href="/support">Support</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </nav>
    </footer>
  );
}
