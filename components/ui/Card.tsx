import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, hover = true, ...props }, ref) => {
    const cardClasses = ['card', !hover && 'hover:transform-none hover:shadow-lg', className]
      .filter(Boolean)
      .join(' ')
    
    return (
      <div
        className={cardClasses}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', children, ...props }, ref) => {
    const headerClasses = ['flex flex-col space-y-1.5 pb-6', className]
      .filter(Boolean)
      .join(' ')
    
    return (
      <div
        className={headerClasses}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className = '', children, ...props }, ref) => {
    const titleClasses = ['text-xl font-semibold text-white leading-none tracking-tight', className]
      .filter(Boolean)
      .join(' ')
    
    return (
      <h3
        className={titleClasses}
        ref={ref}
        {...props}
      >
        {children}
      </h3>
    )
  }
)

CardTitle.displayName = 'CardTitle'

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className = '', children, ...props }, ref) => {
    const descClasses = ['text-text-secondary text-sm', className]
      .filter(Boolean)
      .join(' ')
    
    return (
      <p
        className={descClasses}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    )
  }
)

CardDescription.displayName = 'CardDescription'

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', children, ...props }, ref) => {
    const contentClasses = ['pt-0', className]
      .filter(Boolean)
      .join(' ')
    
    return (
      <div className={contentClasses} ref={ref} {...props}>
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardTitle, CardDescription, CardContent }
