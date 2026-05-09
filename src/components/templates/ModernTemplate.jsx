export default function ModernTemplate({ data }) {
  const { personalInfo, objective, education, experience, skills, projects, achievements } = data;

  return (
    <div className="bg-white text-gray-800 font-sans w-full h-full flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white p-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">{personalInfo.fullName}</h1>
        <div className="text-slate-300 text-sm flex flex-wrap gap-x-6 gap-y-2 mt-4">
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 p-8 gap-8">
        {/* Left Column */}
        <div className="flex-1 space-y-8">
          {objective && (
            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-4 uppercase">Profile</h2>
              <p className="text-sm leading-relaxed text-gray-600">{objective}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-4 uppercase">Experience</h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <h3 className="font-bold text-slate-800">{exp.position}</h3>
                    <div className="text-sm text-slate-500 font-medium mb-2">{exp.company} | {exp.startDate} - {exp.endDate}</div>
                    <p className="text-sm text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {projects && projects.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-slate-900 border-b-2 border-slate-900 pb-1 mb-4 uppercase">Projects</h2>
              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <div className="font-bold text-slate-800 flex justify-between">
                      <span>{proj.title}</span>
                    </div>
                    <div className="text-xs text-blue-500 mb-1">{proj.link}</div>
                    <p className="text-sm text-gray-600">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="w-1/3 space-y-8 border-l pl-8 border-gray-200">
          {education.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 uppercase">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-sm text-slate-800">{edu.degree}</h3>
                    <div className="text-xs text-slate-500 mb-1">{edu.institution}</div>
                    <div className="text-xs text-slate-400 mb-1">{edu.startDate} - {edu.endDate}</div>
                    <p className="text-xs text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 uppercase">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {achievements && achievements.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-4 uppercase">Achievements</h2>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-1">
                {achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
