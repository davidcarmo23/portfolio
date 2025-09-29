import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 60, category: "frontend" },
  { name: "MUI", level: 60, category: "frontend" },

  { name: "PHP", level: 80, category: "backend" },
  { name: "Django", level: 75, category: "backend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "Java", level: 65, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "Express", level: 60, category: "backend" },
  { name: "Firebase", level: 60, category: "backend" },

  { name: "VSCode", level: 95, category: "tools" },
  { name: "Git/Github", level: 80, category: "tools" },
  { name: "Postman", level: 70, category: "tools" },
  { name: "DBeaver", level: 70, category: "tools" },
  { name: "PyCharm", level: 65, category: "tools" },
  { name: "Trello", level: 55, category: "tools" },
  { name: "Docker", level: 50, category: "tools" },
]

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSection = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center mb-12">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              onClick={() => setActiveCategory(category)}
              key={key}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory == category
                  ? "bg-primary text-primary-foreground"
                  : "bg-seconday/70 text-foreground hover:bg-secondary"
              )}
            >
              {t(category)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols 2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-secondary-icon h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}