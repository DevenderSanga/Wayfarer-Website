import { Link } from "react-router-dom";
export default function Footer() {
  return <footer id="site-footer" className="site-footer"><Link to="/" className="brand footer-brand">wayfarer<span className="brand-dot">.</span></Link><p>Go somewhere that moves you.</p><span>© 2026 Wayfarer Travel. Demo frontend.</span></footer>;
}