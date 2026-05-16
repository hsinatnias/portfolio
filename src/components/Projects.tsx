const projects = [
  {
    title: 'Eastgate PM',
    description: 'A full-stack, AI-powered project management platform for SaaS development teams. Features Kanban board, live time tracking, AI assistant powered by Claude API, and client report generation.',
    tech: ['React', 'TypeScript', 'Supabase', 'Claude API', 'Tailwind CSS', 'Vercel'],
    color: 'bg-blue-500',
    live: 'https://eastgate-pm.vercel.app',
    github: 'https://github.com/hsinatnias/eastgate-pm',
    badge: 'Live',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'AI RAG Chatbot',
    description: 'Bilingual AI knowledge assistant (English + Japanese) built for enterprise internal use at a Japanese SaaS company. Features automated document ingestion pipeline with duplicate detection, semantic search using vector embeddings, and multi-module isolation for department-level data separation. Currently deployed in production.',
    tech: ['Python', 'FastAPI', 'Qdrant', 'Ollama', 'Qwen LLM', 'Embeddings'],
    color: 'bg-purple-500',
    live: null,
    github: null,
    badge: 'In production',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Job Application Tracker',
    description: 'A job application tracking tool with status management, notes per application, and PDF resume generation. Built with React and Firebase authentication.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'React PDF', 'Vite'],
    color: 'bg-teal-500',
    live: 'https://job-application-tracker-chi-ten.vercel.app',
    github: 'https://github.com/hsinatnias/job-portal',
    badge: 'Live',
    badgeColor: 'bg-green-100 text-green-700',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900">Projects</h2>
          <p className="text-sm text-gray-400 mt-1">Things I have built and shipped</p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 hover:shadow-sm transition-all"
            >
              {/* Color bar */}
              <div className={`h-1 ${project.color}`} />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-medium text-gray-900">{project.title}</h3>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs px-3 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Live demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs px-3 py-1.5 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {!project.live && !project.github && (
                      <span className="text-xs text-gray-400 italic">
                        Enterprise project · available to discuss
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-xs text-gray-600 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}