'use client'

import { useState } from 'react'
// import Image from 'next/image' // Temporarily disabled
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
import { useModal } from '@/hooks/useModal'
import { projects } from '@/data/mockData'

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const { isOpen, modalData, openModal, closeModal } = useModal()
  
  const featuredProjects = projects.filter(p => p.featured)
  const displayedProjects = projects // Always render all projects

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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => {
              const isFeatured = project.featured
              const nonFeaturedIndex = index - featuredProjects.length
              
              return (
                <Card 
                  key={project.id} 
                  className={`cursor-pointer transition-all duration-700 ease-out ${
                    isFeatured 
                      ? 'animate-slide-up' 
                      : showAll 
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  style={{ 
                    animationDelay: isFeatured 
                      ? `${index * 100}ms` 
                      : showAll 
                        ? `${nonFeaturedIndex * 150 + 300}ms`
                        : '0ms',
                    maxHeight: !isFeatured && !showAll ? '0' : '1000px',
                    overflow: !isFeatured && !showAll ? 'hidden' : 'visible',
                    marginBottom: !isFeatured && !showAll ? '0' : undefined,
                    paddingTop: !isFeatured && !showAll ? '0' : undefined,
                    paddingBottom: !isFeatured && !showAll ? '0' : undefined,
                    transitionProperty: 'opacity, transform, max-height, margin, padding'
                  }}
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
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>Code</span>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* View More/Less Toggle Button */}
          {projects.length > featuredProjects.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center space-x-2 text-text-muted hover:text-primary-accent transition-colors duration-200"
              >
                <span className="font-medium">
                  {showAll ? 'View Less' : 'View More'}
                </span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-500 ease-in-out ${showAll ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          )}
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
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-primary-surface rounded-lg flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary-surfaceHover transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              {/* Modal Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">{modalData.title}</h2>
                <p className="text-text-secondary text-lg leading-relaxed">{modalData.longDescription}</p>
              </div>

              {/* Project Images */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {modalData.images?.map((image, idx) => (
                  <div key={idx} className="relative h-64 rounded-xl bg-primary-surface flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🖼️</div>
                      <div className="text-text-muted text-sm">Project Screenshot {idx + 1}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {modalData.technologies.map((tech, idx) => (
                    <Tag key={idx} variant="highlight">{tech}</Tag>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {modalData.demoUrl && (
                  <Button 
                    variant="primary" 
                    onClick={() => window.open(modalData.demoUrl, '_blank')}
                    className="flex-1"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Demo
                  </Button>
                )}
                {modalData.sourceUrl && (
                  <Button 
                    variant="secondary" 
                    onClick={() => window.open(modalData.sourceUrl, '_blank')}
                    className="flex-1"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Source Code
                  </Button>
                )}
                {modalData.uiSourceUrl && (
                  <Button 
                    variant="ghost" 
                    onClick={() => window.open(modalData.uiSourceUrl, '_blank')}
                    className="flex-1"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                    View Design
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}