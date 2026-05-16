const links = [
  {
    label: 'Email',
    value: 'anish.v.mathew1986@gmail.com',
    href: 'mailto:anish.v.mathew1986@gmail.com',
    icon: '✉️',
  },
  {
    label: 'GitHub',
    value: 'github.com/hsinatnias',
    href: 'https://github.com/hsinatnias',
    icon: '📂',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/anish-vattakunnel-mathew',
    href: 'https://www.linkedin.com/in/anish-vattakunnel-mathew',
    icon: '💼',
  },
  {
    label: 'Live demo',
    value: 'eastgate-pm.vercel.app',
    href: 'https://eastgate-pm.vercel.app',
    icon: '🔗',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900">Get in touch</h2>
          <p className="text-sm text-gray-400 mt-1">
            Open to full stack developer roles in Europe — particularly Germany.
            Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left — message */}
          <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-500 leading-relaxed">
              I am a full stack developer with 3 years of enterprise SaaS experience,
              currently learning German (A1.2) and open to relocating to Germany.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              My background spans secure authentication systems, AI/RAG pipelines,
              and modern frontend development. I am particularly interested in
              teams building AI-integrated SaaS products.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Visa sponsorship not required — eligible for Germany's IT Specialist
              Visa independently upon receiving an offer.
            </p>
            <a
              href="mailto:anish.v.mathew1986@gmail.com"
              className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors w-fit"
            >
              ✉️ Send me an email
            </a>
          </div>

          {/* Right — links */}
          <div className="flex flex-col gap-3">
            {links.map((link) => (
                <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <span className="text-xl">{link.icon}</span>
                <div>
                  <p className="text-xs text-gray-400">{link.label}</p>
                  <p className="text-sm text-gray-700 font-medium">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            © 2026 Anish Vattakunnel Mathew · Built with React + TypeScript + Tailwind
          </p>
          <p className="text-xs text-gray-400">
            🇩🇪 Relocating to Germany
          </p>
        </div>

      </div>
    </section>
  );
}