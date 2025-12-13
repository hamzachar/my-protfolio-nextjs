'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  labels: {
    viewDemo: string;
    viewCode: string;
    featured: string;
  };
}

export function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col group">
        {/* Project Image */}
        <div className="relative h-48 bg-muted overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <FiGithub className="w-16 h-16 text-muted-foreground/50" />
            </div>
          )}

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
              <FiStar className="w-3 h-3" />
              {labels.featured}
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map(tag => (
              <span
                key={tag}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded font-medium">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            {project.liveUrl && (
              <Button asChild size="sm" className="flex-1 w-full">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <FiExternalLink className="w-4 h-4 mr-2" />
                  {labels.viewDemo}
                </a>
              </Button>
            )}

            {project.githubUrl && project.githubUrl !== '#' && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-1 w-full"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <FiGithub className="w-4 h-4 mr-2" />
                  {labels.viewCode}
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
