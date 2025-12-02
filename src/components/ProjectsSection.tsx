import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI Learning Assistant Chatbot",
    year: "2024",
    description: [
      "Developed a chatbot using LLM APIs to answer student questions with context-aware responses",
      "Implemented document retrieval for personalized academic assistance",
      "Built using Python, Flask, and OpenAI API"
    ],
    technologies: ["Python", "Flask", "OpenAI API", "LLM", "RAG"]
  },
  {
    title: "Student Performance Prediction System",
    year: "2023",
    description: [
      "Created a machine learning model to classify student performance using scikit-learn",
      "Conducted data preprocessing, visualization, feature selection, and model evaluation",
      "Demonstrated ability to build end-to-end ML pipelines"
    ],
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib"]
  },
  {
    title: "Image Classification CNN Model",
    year: "2023",
    description: [
      "Designed and trained a convolutional neural network to classify images",
      "Utilized TensorFlow/Keras for deep learning model development",
      "Achieved high accuracy on test datasets"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning"]
  },
  {
    title: "AI Automation Scripts for Productivity",
    year: "2022–2024",
    description: [
      "Automated document summarization, report generation, and data cleaning tasks using LLM APIs",
      "Reduced time spent on repetitive tasks by 40% in test environments",
      "Built reusable automation modules"
    ],
    technologies: ["Python", "LLM APIs", "Automation", "NLP"]
  },
  {
    title: "Web + AI Integration Demo",
    year: "2024",
    description: [
      "Built a web application connected to an AI backend using FastAPI",
      "Demonstrated ability to integrate ML models into user-facing systems",
      "Created responsive frontend with real-time AI responses"
    ],
    technologies: ["FastAPI", "Python", "REST API", "ML Integration"]
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Each project demonstrates practical applications of AI and software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              year={project.year}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
