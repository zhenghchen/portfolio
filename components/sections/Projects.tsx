'use client'

import { useState } from 'react'
// import Image from 'next/image' // Temporarily disabled
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
import { useModal } from '@/hooks/useModal'
import { projects } from '@/data/mockData'

export function Projects() {
  const [filter, setFilter] = useState<string>('all')
  const { isOpen, modalData, openModal, closeModal } = useModal()

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))]
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const handleProjectClick = (project: typeof projects[0]) => {
    openModal(project)
  }

  return (
    <>
      <section id="projects" className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary-accent mx-auto mb-6"></div>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills in full-stack development, 
              UI/UX design, and problem-solving.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-primary-accent text-white'
                    : 'bg-primary-surface text-text-secondary hover:text-white hover:bg-primary-surfaceHover'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="cursor-pointer animate-slide-up" 
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 rounded-xl bg-primary-surface mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <div className="text-text-muted text-sm">Project Image</div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Tag variant="highlight">Featured</Tag>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <Tag key={idx}>{tech}</Tag>
                      ))}
                      {project.technologies.length > 4 && (
                        <Tag>+{project.technologies.length - 4} more</Tag>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.demoUrl, '_blank')
                        }}
                        className="flex-1 flex items-center justify-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Demo</span>
                      </Button>
                    )}
                    {project.sourceUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.sourceUrl, '_blank')
                        }}
                        className="flex-1 flex items-center justify-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>Code</span>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button variant="secondary">
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {isOpen && modalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-primary-backgroundLighter border border-borders-default rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 text-text-secondary hover:text-white bg-primary-surface/80 rounded-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              {/* Project Images Placeholder */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {modalData.images.map((image: string, idx: number) => (
                  <div key={idx} className="relative h-64 rounded-xl bg-primary-surface flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-2">📸</div>
                      <div className="text-text-muted text-sm">Screenshot {idx + 1}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{modalData.title}</h3>
                  <p className="text-text-secondary text-lg">{modalData.longDescription}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {modalData.technologies.map((tech: string, idx: number) => (
                      <Tag key={idx} variant="highlight">{tech}</Tag>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {modalData.demoUrl && (
                    <Button onClick={() => window.open(modalData.demoUrl, '_blank')}>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </Button>
                  )}
                  {modalData.sourceUrl && (
                    <Button variant="secondary" onClick={() => window.open(modalData.sourceUrl, '_blank')}>
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Source Code
                    </Button>
                  )}
                  {modalData.uiSourceUrl && (
                    <Button variant="ghost" onClick={() => window.open(modalData.uiSourceUrl, '_blank')}>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                      UI Design
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
