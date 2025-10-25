'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { PROJECTS } from '@/constants/data';

export function ProjectsSection() {
  const t = useTranslations('projects');
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  // Fix: Ensure we always return the correct filtered list
  const filteredProjects =
    filter === 'featured'
      ? PROJECTS.filter(p => p.featured === true)
      : PROJECTS;

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-tl from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]" />

      <Container>
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={filter === 'all' ? 'primary' : 'outline'}
            onClick={() => setFilter('all')}
          >
            {t('allProjects')} ({PROJECTS.length})
          </Button>
          <Button
            variant={filter === 'featured' ? 'primary' : 'outline'}
            onClick={() => setFilter('featured')}
          >
            {t('featured')} ({PROJECTS.filter(p => p.featured).length})
          </Button>
        </div>

        {/* Projects Grid with AnimatePresence for smooth transitions */}
        <motion.div
          key={filter} // Force re-render when filter changes
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              layout // Smooth layout animation
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                {/* Project Image or Placeholder */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <FiGithub className="w-16 h-16 text-muted-foreground/50" />
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3">
                    {/* Live Project Link */}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <FiExternalLink className="mr-2 w-4 h-4" />
                          {t('viewProject')}
                        </Button>
                      </a>
                    )}

                    {/* GitHub Link */}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="ghost" size="sm" className="w-full">
                          <FiGithub className="mr-2 w-4 h-4" />
                          {t('viewCode')}
                        </Button>
                      </a>
                    )}

                    {/* Coming Soon - No links available */}
                    {(!project.liveUrl || project.liveUrl === '#') &&
                      (!project.githubUrl || project.githubUrl === '#') && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          disabled
                        >
                          {t('comingSoon')}
                        </Button>
                      )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
