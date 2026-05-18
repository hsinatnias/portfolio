export default function Hero() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">

      {/* Photo */}
      <div className="flex-shrink-0">
        <img
          src="/photo.jpg"
          alt="Anish Vattakunnel Mathew"
          className="w-36 h-36 rounded-full object-cover border-4 border-gray-100"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-4">
        <span className="text-sm text-green-600 font-medium">
          👋 Available for opportunities in Europe
        </span>

        <h1 className="text-4xl font-medium text-gray-900 leading-tight">
          Anish Vattakunnel<br />Mathew
        </h1>

        <p className="text-lg text-gray-500">
          Full Stack Developer · AI Integration · SaaS
        </p>

        <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
          Full stack developer with 3 years of enterprise SaaS experience and a 
          background spanning insurance underwriting automation, AI-powered RAG 
          pipelines, and secure authentication systems. Previously built Excel VBA 
          rating tools and Chrome automation extensions for Argo Group's insurance 
          underwriting process. Currently learning German and open to relocating 
          to Germany.
        </p>

        <div className="flex items-center gap-3 mt-2">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Contact me
          </a>
          <a
            href="https://github.com/hsinatnias"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mt-2">
          {['PHP', 'React', 'TypeScript', 'Python', 'FastAPI', 'RAG', 'WebAuthn', 'AWS'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}