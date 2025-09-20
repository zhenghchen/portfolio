import { HTMLAttributes, forwardRef } from 'react'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: 'default' | 'highlight'
  size?: 'sm' | 'md'
}

const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className = '', children, variant = 'default', size = 'sm', ...props }, ref) => {
    const variants = {
      default: 'tag',
      highlight: 'tag-highlight'
    }
    
    const sizes = {
      sm: 'text-xs px-2 py-1',
      md: 'text-sm px-3 py-1.5'
    }

    const tagClasses = [variants[variant], sizes[size], className]
      .filter(Boolean)
      .join(' ')

    return (
      <span
        className={tagClasses}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Tag.displayName = 'Tag'

export { Tag }
