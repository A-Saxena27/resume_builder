export default function ClassicTemplate({ data }) {
  const { personalInfo, objective, education, experience, skills, projects, achievements } = data;

  return (
    <div className="bg-white text-black p-8 font-serif w-full h-full">
      {/* Header */}
      <header className="text-center border-b-2 border-black pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{personalInfo.fullName}</h1>
        <div className="text-sm flex flex-wrap justify-center gap-4">
          <span>{personalInfo.email}</span>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.location}</span>
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.portfolio && <span>{personalInfo.portfolio}</span>}
        </div>
      </header>

      {/* Objective */}
      {objective && (
        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Objective</h2>
          <p className="text-sm leading-relaxed">{objective}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Professional Experience</h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between font-bold text-base">
                  <h3>{exp.position}</h3>
                  <span>{exp.startDate} - {exp.endDate}</span>
                </div>
                <div className="italic text-sm mb-1">{exp.company}</div>
                <p className="text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Education</h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between font-bold text-base">
                  <h3>{edu.degree}</h3>
                  <span>{edu.startDate} - {edu.endDate}</span>
                </div>
                <div className="italic text-sm mb-1">{edu.institution}</div>
                <p className="text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Projects</h2>
          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="font-bold flex justify-between text-sm">
                  <span>{proj.title}</span>
                  <span className="font-normal text-blue-600">{proj.link}</span>
                </div>
                <p className="text-sm">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Skills</h2>
          <p className="text-sm">{skills.join(", ")}</p>
        </section>
      )}

      {/* Achievements */}
      {achievements && achievements.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold uppercase border-b border-gray-300 mb-3">Achievements</h2>
          <ul className="list-disc list-inside text-sm">
            {achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
