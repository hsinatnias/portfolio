const experiences = [
  {
    title: 'PHP System Engineer / Full Stack Developer',
    company: 'Eastgate Infotech Pvt Ltd',
    location: 'Kochi, Kerala, India',
    period: 'June 2022 – Present',
    current: true,
    highlights: [
      'Built and maintained enterprise SaaS platforms serving 10,000+ monthly active users across Japan',
      'Implemented passkey authentication with WebAuthn, SAML SSO, OAuth with Google, and Microsoft Azure AD integration',
      'Built bilingual AI RAG chatbot in Python and FastAPI with Qdrant vector database and Ollama LLM',
      'Led CodeIgniter 3 to 4 migration on a live multi-tenant SaaS platform',
      'Automated scheduled operations across 300 client websites using PowerShell scripts',
      'Deployed and managed AWS EC2 and S3 infrastructure',
    ],
  },
  {
    title: 'Process Engineer – VBA & Automation Developer',
    company: 'Sutherland Global Services (Argo Group)',
    location: 'Kochi, Kerala, India',
    period: 'May 2018 – April 2019',
    current: false,
    highlights: [
      'Developed and maintained Excel VBA-enabled insurance rating sheets for Argo Group\'s underwriting process — automating complex risk calculations previously done manually',
      'Built process automation tools for insurance underwriting backend workflows — reducing assessment time by 40%',
      'Developed custom Chrome extensions for automated data collection from multiple web portals — cutting manual research time by 60%',
      'Led a 3-member team coordinating requirements with North American stakeholders via Jira',
      'Integrated Chrome extension output with Excel/Word reports with automated validations — improving data accuracy by 30%',
    ],
  },
  {
    title: 'AT&T Technical Support Specialist',
    company: 'Sutherland Global Services',
    location: 'Kochi, Kerala, India',
    period: 'June 2015 – April 2018',
    current: false,
    highlights: [
      'Delivered 95% first-call resolution for AT&T home network issues',
      'Mentored new team members contributing to 30% improvement in team performance metrics',
    ],
  },
  {
    title: 'Co-founder & Technical Lead',
    company: 'WBwiz (Web & App Development Startup)',
    location: 'Kottayam, Kerala, India',
    period: 'July 2012 – March 2015',
    current: false,
    highlights: [
      'Co-founded a web and app development startup handling technical planning and software development',
      'Managed client outreach and delivered web projects end to end',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900">Experience</h2>
          <p className="text-sm text-gray-400 mt-1">My professional journey</p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-200 transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-medium text-gray-900">{exp.title}</h3>
                    {exp.current && (
                      <span className="text-xs px-2.5 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{exp.company}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-gray-400">{exp.period}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{exp.location}</p>
                </div>
              </div>

              <ul className="flex flex-col gap-2">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-gray-300 mt-1 flex-shrink-0">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}