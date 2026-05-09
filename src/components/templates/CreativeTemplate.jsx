export default function CreativeTemplate({ data }) {
  const { personalInfo, objective, education, experience, skills, projects, achievements } = data;

  return (
    <div className="bg-orange-50 text-orange-950 font-sans w-full h-full flex flex-col">
      {/* Header */}
      <header className="p-8 pb-4 flex items-end justify-between border-b-4 border-orange-500 mx-8">
        <div>
          <h1 className="text-5xl font-black text-orange-600 tracking-tighter mb-1">{personalInfo.fullName}</h1>
          <div className="font-medium text-orange-800 text-sm">{personalInfo.objective ? "Professional" : ""}</div>
        </div>
        <div className="text-right text-xs space-y-1 font-medium text-orange-900/80">
          <div>{personalInfo.email}</div>
          <div>{personalInfo.phone}</div>
          <div>{personalInfo.location}</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-8 pt-6 columns-2 gap-8">
        
        {objective && (
          <section className="mb-6 break-inside-avoid">
            <h2 className="text-2xl font-black text-orange-600 mb-2 uppercase tracking-wide">About Me</h2>
            <p className="text-sm font-medium leading-relaxed">{objective}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mb-6 break-inside-avoid">
            <h2 className="text-2xl font-black text-orange-600 mb-4 uppercase tracking-wide">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2 border-orange-300">
                  <div className="absolute w-2 h-2 bg-orange-500 rounded-full -left-[5px] top-1.5"></div>
                  <h3 className="font-bold text-lg">{exp.position}</h3>
                  <div className="text-sm text-orange-700 font-bold mb-1">{exp.company} <span className="text-orange-500">|</span> {exp.startDate} - {exp.endDate}</div>
                  <p className="text-sm text-orange-900/80">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {projects && projects.length > 0 && (
          <section className="mb-6 break-inside-avoid">
            <h2 className="text-2xl font-black text-orange-600 mb-4 uppercase tracking-wide">Projects</h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-orange-100 p-4 rounded-xl">
                  <h3 className="font-bold text-lg text-orange-800">{proj.title}</h3>
                  <div className="text-xs text-orange-600 mb-2 font-medium">{proj.link}</div>
                  <p className="text-sm">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section className="mb-6 break-inside-avoid">
            <h2 className="text-2xl font-black text-orange-600 mb-4 uppercase tracking-wide">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h3 className="font-bold text-lg">{edu.degree}</h3>
                  <div className="text-sm text-orange-700 font-bold">{edu.institution}</div>
                  <div className="text-xs text-orange-500 mb-1">{edu.startDate} - {edu.endDate}</div>
                  <p className="text-sm text-orange-900/80">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section className="mb-6 break-inside-avoid">
            <h2 className="text-2xl font-black text-orange-600 mb-4 uppercase tracking-wide">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span key={idx} className="bg-orange-500 text-white text-xs px-3 py-1 rounded-md font-bold">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {achievements && achievements.length > 0 && (
          <section className="mb-6 break-inside-avoid">
            <h2 className="text-2xl font-black text-orange-600 mb-4 uppercase tracking-wide">Achievements</h2>
            <ul className="space-y-2 text-sm font-medium">
              {achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5">★</span> {ach}
                </li>
              ))}
            </ul>
          </section>
        )}

      </div>
    </div>
  );
}
