import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Trova" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-slate-400 mb-6">
              The sales command center for cannabis brands
            </p>
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Trova. All rights reserved.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="https://terratrack-66zj.vercel.app" className="hover:text-white transition-colors">Login</Link></li>
              <li><Link href="https://terratrack-66zj.vercel.app" className="hover:text-white transition-colors">Sign Up</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="mailto:hello@trova.cc" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-slate-500">
          Built in Seattle 🌲 by people who know the industry
        </div>
      </div>
    </footer>
  );
}
