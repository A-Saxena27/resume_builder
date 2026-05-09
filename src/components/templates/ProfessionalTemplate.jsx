export default function ProfessionalTemplate({ data }) {
  const { personalInfo, objective, education, experience, skills, projects, achievements } = data;

  return (
    <div className="bg-white text-slate-800 font-sans w-full h-full p-8 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-end border-b-2 border-blue-800 pb-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold text-blue-900 tracking-tight">{personalInfo.fullName}</h1>
          <div className="text-blue-700 font-medium mt-1">Professional Resume</div>
        </div>
        <div className="text-right text-sm text-slate-600 space-y-1">
          <div>{personalInfo.email}</div>
          <div>{personalInfo.phone}</div>
          <div>{personalInfo.location}</div>
          {personalInfo.linkedin && <div>{personalInfo.linkedin}</div>}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        
        {objective && (
          <section>
            <h2 className="text-lg font-bold text-blue-900 bg-blue-50 px-3 py-1 mb-3 uppercase tracking-wide">Professional Summary</h2>
            <p className="text-sm leading-relaxed px-3">{objective}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-blue-900 bg-blue-50 px-3 py-1 mb-3 uppercase tracking-wide">Work Experience</h2>
            <div className="space-y-4 px-3">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-900 text-base">{exp.position}</h3>
                    <span className="text-sm font-medium text-slate-500">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="text-sm font-medium text-blue-700 mb-2">{exp.company}</div>
                  <p className="text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects && projects.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-blue-900 bg-blue-50 px-3 py-1 mb-3 uppercase tracking-wide">Key Projects</h2>
            <div className="space-y-4 px-3">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-slate-900 text-base">{proj.title}</h3>
                    <span className="text-xs text-blue-600">{proj.link}</span>
                  </div>
                  <p className="text-sm leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-6">
          {education.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-blue-900 bg-blue-50 px-3 py-1 mb-3 uppercase tracking-wide">Education</h2>
              <div className="space-y-4 px-3">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                    <div className="text-sm text-blue-700 font-medium">{edu.institution}</div>
                    <div className="text-xs text-slate-500 mb-1">{edu.startDate} - {edu.endDate}</div>
                    <p className="text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div>
            {skills.length > 0 && (
              <section className="mb-6">
                <h2 className="text-lg font-bold text-blue-900 bg-blue-50 px-3 py-1 mb-3 uppercase tracking-wide">Core Competencies</h2>
                <div className="px-3">
                  <ul className="list-disc list-inside text-sm grid grid-cols-2 gap-1">
                    {skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {achievements && achievements.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-blue-900 bg-blue-50 px-3 py-1 mb-3 uppercase tracking-wide">Achievements</h2>
                <div className="px-3">
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
