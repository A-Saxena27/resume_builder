export default function MinimalTemplate({ data }) {
  const { personalInfo, objective, education, experience, skills, projects, achievements } = data;

  return (
    <div className="bg-white text-gray-900 font-sans w-full h-full max-w-4xl mx-auto p-12 flex flex-col">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-light tracking-wide mb-4">{personalInfo.fullName}</h1>
        <div className="text-gray-500 text-xs flex flex-wrap gap-4 uppercase tracking-widest">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 space-y-10">
        
        {objective && (
          <section className="flex gap-8">
            <h2 className="w-1/4 text-xs font-semibold uppercase tracking-widest text-gray-400">Profile</h2>
            <p className="w-3/4 text-sm leading-relaxed font-light">{objective}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="flex gap-8">
            <h2 className="w-1/4 text-xs font-semibold uppercase tracking-widest text-gray-400">Experience</h2>
            <div className="w-3/4 space-y-8">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-medium text-base">{exp.position}</h3>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{exp.company}</div>
                  <p className="text-sm font-light leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section className="flex gap-8">
            <h2 className="w-1/4 text-xs font-semibold uppercase tracking-widest text-gray-400">Education</h2>
            <div className="w-3/4 space-y-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-medium text-base">{edu.degree}</h3>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{edu.institution}</div>
                  <p className="text-sm font-light leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects && projects.length > 0 && (
          <section className="flex gap-8">
            <h2 className="w-1/4 text-xs font-semibold uppercase tracking-widest text-gray-400">Projects</h2>
            <div className="w-3/4 space-y-6">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-medium text-base">{proj.title}</h3>
                    <span className="text-xs text-gray-400">{proj.link}</span>
                  </div>
                  <p className="text-sm font-light leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section className="flex gap-8">
            <h2 className="w-1/4 text-xs font-semibold uppercase tracking-widest text-gray-400">Skills</h2>
            <div className="w-3/4">
              <p className="text-sm font-light leading-relaxed">{skills.join(" • ")}</p>
            </div>
          </section>
        )}

        {achievements && achievements.length > 0 && (
          <section className="flex gap-8">
            <h2 className="w-1/4 text-xs font-semibold uppercase tracking-widest text-gray-400">Achievements</h2>
            <div className="w-3/4 space-y-2">
              {achievements.map((ach, idx) => (
                <p key={idx} className="text-sm font-light leading-relaxed">{ach}</p>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
