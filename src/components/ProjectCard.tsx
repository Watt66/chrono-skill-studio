import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  year: string;
  description: string[];
  technologies: string[];
  index: number;
}

const ProjectCard = ({ title, year, description, technologies, index }: ProjectCardProps) => {
  return (
    <div 
      className="glass rounded-lg p-6 hover:glow-sm transition-all duration-500 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-gradient transition-colors">
          {title}
        </h3>
        <Badge variant="outline" className="font-heading text-xs border-primary/50 text-primary">
          {year}
        </Badge>
      </div>
      
      <ul className="space-y-2 mb-5">
        {description.map((item, i) => (
          <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
            <span className="text-primary mt-1.5 text-xs">▹</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span 
            key={i} 
            className="px-2.5 py-1 text-xs font-medium bg-secondary/50 text-primary/90 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
