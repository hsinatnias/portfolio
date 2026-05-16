const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
          Anish VM
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="mailto:anish.v.mathew1986@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-xs font-medium rounded-lg hover:bg-gray-700 transition-colors"
        >
          Hire me
        </a>

      </div>
    </nav>
  );
}