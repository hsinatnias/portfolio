const skillCategories = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['PHP', 'CodeIgniter', 'Laravel', 'MySQL', 'PostgreSQL', 'REST APIs', 'AWS EC2/S3'],
  },
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'AI & Data',
    icon: '🤖',
    skills: ['RAG Pipelines', 'Qdrant', 'FastAPI', 'Ollama', 'Claude API', 'Prompt Engineering', 'Embeddings'],
  },
  {
    title: 'Security & Auth',
    icon: '🔐',
    skills: ['WebAuthn', 'SAML SSO', 'OAuth 2.0', 'Microsoft Azure AD', 'Google IDP'],
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub Actions', 'CI/CD', 'Vercel', 'Docker', 'PowerShell', 'Jira'],
  },
  {
    title: 'Languages',
    icon: '🌍',
    skills: ['English (B2)', 'German (A1.2)', 'Malayalam (Native)', 'Hindi (B1)', 'Tamil (A1)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900">Skills</h2>
          <p className="text-sm text-gray-400 mt-1">Technologies and tools I work with</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white border border-gray-100 rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{category.icon}</span>
                <h3 className="text-sm font-medium text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-xs text-gray-600 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}