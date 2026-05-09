export default function ElegantTemplate({ data }) {
  const { personalInfo, objective, education, experience, skills, projects, achievements } = data;

  return (
    <div className="bg-stone-50 text-stone-800 font-serif w-full h-full p-10 flex flex-col border-8 border-double border-stone-300">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-normal tracking-widest text-stone-900 mb-4">{personalInfo.fullName}</h1>
        <div className="flex items-center justify-center gap-4 text-sm font-sans tracking-wide text-stone-500">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 space-y-8">
        
        {objective && (
          <section className="text-center px-12">
            <p className="text-base leading-relaxed italic text-stone-600">"{objective}"</p>
          </section>
        )}

        <div className="w-16 h-px bg-stone-300 mx-auto my-8"></div>

        {experience.length > 0 && (
          <section>
            <h2 className="text-center text-xl tracking-widest uppercase text-stone-900 mb-6">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="flex justify-between items-end mb-1">
                    <h3 className="text-lg font-bold text-stone-800">{exp.position}</h3>
                    <span className="text-sm font-sans text-stone-500">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="text-base italic text-stone-600 mb-2">{exp.company}</div>
                  <p className="text-sm leading-relaxed font-sans text-stone-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="w-16 h-px bg-stone-300 mx-auto my-8"></div>

        <div className="grid grid-cols-2 gap-12">
          {education.length > 0 && (
            <section>
              <h2 className="text-center text-xl tracking-widest uppercase text-stone-900 mb-6">Education</h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="text-center">
                    <h3 className="text-lg font-bold text-stone-800 mb-1">{edu.degree}</h3>
                    <div className="text-base italic text-stone-600 mb-1">{edu.institution}</div>
                    <div className="text-sm font-sans text-stone-500 mb-2">{edu.startDate} - {edu.endDate}</div>
                    <p className="text-sm font-sans text-stone-700">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div>
            {skills.length > 0 && (
              <section className="mb-8">
                <h2 className="text-center text-xl tracking-widest uppercase text-stone-900 mb-6">Expertise</h2>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans text-sm text-stone-700">
                  {skills.map((skill, idx) => (
                    <span key={idx} className="uppercase tracking-wide">{skill}</span>
                  ))}
                </div>
              </section>
            )}

            {projects && projects.length > 0 && (
              <section>
                <h2 className="text-center text-xl tracking-widest uppercase text-stone-900 mb-6">Selected Works</h2>
                <div className="space-y-4">
                  {projects.map((proj) => (
                    <div key={proj.id} className="text-center">
                      <h3 className="text-base font-bold text-stone-800">{proj.title}</h3>
                      <p className="text-sm font-sans text-stone-700 mt-1">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
