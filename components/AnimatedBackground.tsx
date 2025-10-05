'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Star class
    class Star {
      x: number
      y: number
      size: number
      opacity: number
      twinkleSpeed: number
      twinklePhase: number
      brightness: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2.5 + 0.5
        this.brightness = Math.random()
        this.opacity = Math.random() * 0.6 + 0.6
        this.twinkleSpeed = Math.random() * 0.03 + 0.01
        this.twinklePhase = Math.random() * Math.PI * 2
      }

      update() {
        this.twinklePhase += this.twinkleSpeed
      }

      draw() {
        if (!ctx) return
        
        const twinkle = Math.sin(this.twinklePhase) * 0.3 + 0.7
        const currentOpacity = this.opacity * twinkle

        // Draw star
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        
        // White or blue-white stars
        const color = this.brightness > 0.7 ? '200, 220, 255' : '255, 255, 255'
        ctx.fillStyle = `rgba(${color}, ${currentOpacity})`
        ctx.fill()

        // Add glow for brighter stars
        if (this.brightness > 0.8) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${color}, ${currentOpacity * 0.2})`
          ctx.fill()
        }
      }
    }

    // Shooting Star class
    class ShootingStar {
      x: number
      y: number
      length: number
      speed: number
      angle: number
      opacity: number
      life: number
      maxLife: number

      constructor() {
        // Start from random position at top or sides
        const side = Math.random()
        if (side < 0.5) {
          this.x = Math.random() * canvas.width
          this.y = -50
        } else {
          this.x = canvas.width + 50
          this.y = Math.random() * canvas.height * 0.5
        }
        
        this.length = Math.random() * 120 + 80
        this.speed = Math.random() * 4 + 3
        this.angle = Math.random() * Math.PI / 6 + Math.PI / 4 // 45-75 degrees
        this.opacity = 1
        this.life = 0
        this.maxLife = Math.random() * 120 + 100
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed
        this.life++

        // Fade out near end of life
        if (this.life > this.maxLife * 0.7) {
          this.opacity = 1 - (this.life - this.maxLife * 0.7) / (this.maxLife * 0.3)
        }
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)

        // Draw shooting star trail
        const gradient = ctx.createLinearGradient(0, 0, -this.length, 0)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`)
        gradient.addColorStop(0.5, `rgba(200, 220, 255, ${this.opacity * 0.5})`)
        gradient.addColorStop(1, 'rgba(200, 220, 255, 0)')

        ctx.strokeStyle = gradient
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(-this.length, 0)
        ctx.stroke()

        // Draw bright head with glow
        const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 8)
        glowGradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`)
        glowGradient.addColorStop(0.5, `rgba(200, 220, 255, ${this.opacity * 0.5})`)
        glowGradient.addColorStop(1, 'rgba(200, 220, 255, 0)')
        
        ctx.beginPath()
        ctx.arc(0, 0, 8, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // Bright core
        ctx.beginPath()
        ctx.arc(0, 0, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.fill()

        ctx.restore()
      }

      isDead() {
        return this.life >= this.maxLife || this.x > canvas.width + 100 || this.y > canvas.height + 100
      }
    }

    // Constellation class (connects nearby stars)
    class Constellation {
      stars: Star[]

      constructor(stars: Star[]) {
        this.stars = stars
      }

      draw() {
        if (!ctx) return

        for (let i = 0; i < this.stars.length; i++) {
          for (let j = i + 1; j < this.stars.length; j++) {
            const dx = this.stars[i].x - this.stars[j].x
            const dy = this.stars[i].y - this.stars[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            // Connect nearby stars more visibly
            if (distance < 150) {
              const opacity = 0.15 * (1 - distance / 150)
              if (opacity > 0.02) {
                ctx.beginPath()
                ctx.strokeStyle = `rgba(78, 150, 255, ${opacity})`
                ctx.lineWidth = 0.5
                ctx.moveTo(this.stars[i].x, this.stars[i].y)
                ctx.lineTo(this.stars[j].x, this.stars[j].y)
                ctx.stroke()
              }
            }
          }
        }
      }
    }

    // Create stars - much more visible!
    const starCount = Math.min(Math.floor((canvas.width * canvas.height) / 3000), 400)
    const stars: Star[] = []
    
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star())
    }

    const constellation = new Constellation(stars)

    // Shooting stars array
    const shootingStars: ShootingStar[] = []
    let shootingStarTimer = 0

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw constellation lines (subtle)
      constellation.draw()

      // Update and draw stars
      stars.forEach(star => {
        star.update()
        star.draw()
      })

      // Spawn shooting stars more frequently
      shootingStarTimer++
      if (shootingStarTimer > 80 && Math.random() > 0.95) {
        shootingStars.push(new ShootingStar())
        shootingStarTimer = 0
      }

      // Update and draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        shootingStars[i].update()
        shootingStars[i].draw()
        
        if (shootingStars[i].isDead()) {
          shootingStars.splice(i, 1)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  )
}

