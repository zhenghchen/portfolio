'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { workExperience, education } from '@/data/mockData'

type TabType = 'work' | 'education'

export function Experience() {
  const [activeTab, setActiveTab] = useState<TabType>('work')

  return (
    <section id="experience" className="section-padding bg-primary-backgroundLighter">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto"></div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-primary-backgroundLighter border border-borders-default rounded-xl p-1 flex mb-12 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('work')}
            className={`flex-1 px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'work'
                ? 'bg-primary-accent text-white shadow-lg'
                : 'text-text-muted hover:text-white'
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`flex-1 px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === 'education'
                ? 'bg-primary-accent text-white shadow-lg'
                : 'text-text-muted hover:text-white'
            }`}
          >
            Education
          </button>
        </div>

        {/* Content */}
        <div className="animate-fade-in">
          {activeTab === 'work' ? (
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <Card key={job.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent>
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-primary-surface overflow-hidden flex items-center justify-center">
                          {job.companyLogo ? (
                            <Image
                              src={job.companyLogo}
                              alt={`${job.company} logo`}
                              width={64}
                              height={64}
                              className="object-contain"
                            />
                          ) : (
                            <div className="text-2xl font-bold text-primary-accent">
                              {job.company.charAt(0)}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Job Details */}
                      <div className="flex-grow">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-1">
                              {job.title}
                            </h3>
                            <p className="text-text-secondary font-medium">
                              {job.company} • {job.location}
                            </p>
                          </div>
                          <div className="text-text-muted text-sm mt-2 lg:mt-0">
                            {job.duration}
                          </div>
                        </div>

                        <p className="text-text-secondary mb-4 leading-relaxed">
                          {job.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {job.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-text-secondary text-sm flex items-start">
                                <span className="text-primary-accent mr-2 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-white font-medium mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, idx) => (
                              <Tag key={idx}>{tech}</Tag>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={edu.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent>
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Institution Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-primary-surface overflow-hidden flex items-center justify-center">
                          {edu.institutionLogo ? (
                            <Image
                              src={edu.institutionLogo}
                              alt={`${edu.institution} logo`}
                              width={64}
                              height={64}
                              className="object-contain"
                            />
                          ) : (
                            <div className="text-2xl font-bold text-primary-accent">
                              {edu.institution.charAt(0)}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Education Details */}
                      <div className="flex-grow">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-text-secondary font-medium">
                              {edu.institution} • {edu.location}
                            </p>
                          </div>
                          <div className="text-text-muted text-sm mt-2 lg:mt-0">
                            {edu.duration}
                          </div>
                        </div>

                        {/* GPA and Honors */}
                        {(edu.gpa || edu.honors) && (
                          <div className="mb-4 space-y-2">
                            {edu.gpa && (
                              <p className="text-text-secondary">
                                <span className="font-medium">GPA:</span> {edu.gpa}
                              </p>
                            )}
                            {edu.honors && (
                              <div>
                                <span className="text-white font-medium">Honors: </span>
                                {edu.honors.map((honor, idx) => (
                                  <Tag key={idx} variant="highlight" className="ml-1">
                                    {honor}
                                  </Tag>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        {/* Relevant Courses */}
                        <div>
                          <h4 className="text-white font-medium mb-2">Relevant Courses:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevantCourses.map((course, idx) => (
                              <Tag key={idx}>{course}</Tag>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
