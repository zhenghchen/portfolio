'use client'

import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
import { blogPosts } from '@/data/mockData'

export function Blog() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleReadMore = (postId: string) => {
    // In a real app, this would navigate to the blog post
    console.log('Navigate to blog post:', postId)
  }

  return (
    <section id="blog" className="section-padding bg-primary-backgroundLighter">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Recent Blog Posts
            </h2>
            <div className="w-24 h-1 bg-primary-accent mb-6"></div>
            <p className="text-text-secondary text-lg max-w-2xl">
              Thoughts, tutorials, and insights about web development, 
              technology trends, and my learning journey.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <Button variant="secondary">
              View All Posts
            </Button>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleReadMore(post.id)}
            >
              <div className="border-b border-borders-default pb-8 transition-all duration-300 hover:bg-primary-surface/20 hover:rounded-2xl hover:px-8 hover:py-8 hover:border-b-0">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-grow space-y-4">
                    {/* Post Meta */}
                    <div className="flex items-center space-x-4 text-text-muted text-sm">
                      <time dateTime={post.publishDate}>
                        {formatDate(post.publishDate)}
                      </time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      {post.featured && (
                        <>
                          <span>•</span>
                          <Tag variant="highlight" size="sm">Featured</Tag>
                        </>
                      )}
                    </div>

                    {/* Post Title */}
                    <h3 className="text-2xl font-semibold text-white group-hover:text-primary-accent transition-colors duration-200">
                      {post.title}
                    </h3>

                    {/* Post Excerpt */}
                    <p className="text-text-secondary leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <Tag key={idx}>{tag}</Tag>
                      ))}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleReadMore(post.id)
                      }}
                      className="flex items-center space-x-2 group-hover:border-primary-accent group-hover:text-primary-accent"
                    >
                      <span>Read More</span>
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-primary-surface border border-borders-default rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-text-secondary mb-6">
              Subscribe to get notified about new blog posts and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-primary-backgroundLighter border border-borders-default rounded-lg text-white placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
              />
              <Button className="sm:w-auto">
                Subscribe
              </Button>
            </div>
            <p className="text-text-muted text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
