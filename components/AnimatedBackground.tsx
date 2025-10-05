'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
  brightness: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
  life: number
  maxLife: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let stars: Star[] = []
    let shootingStars: ShootingStar[] = []
    let shootingStarTimer = 0

    // Helper functions
    const createStar = (): Star => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      brightness: Math.random(),
      opacity: Math.random() * 0.6 + 0.6,
      twinkleSpeed: Math.random() * 0.03 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2
    })

    const createShootingStar = (): ShootingStar => {
      const side = Math.random()
      const x = side < 0.5 ? Math.random() * canvas.width : canvas.width + 50
      const y = side < 0.5 ? -50 : Math.random() * canvas.height * 0.5
      
      return {
        x,
        y,
        length: Math.random() * 120 + 80,
        speed: Math.random() * 4 + 3,
        angle: Math.random() * Math.PI / 6 + Math.PI / 4,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 120 + 100
      }
    }

    const updateStar = (star: Star) => {
      star.twinklePhase += star.twinkleSpeed
    }

    const drawStar = (star: Star) => {
      const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7
      const currentOpacity = star.opacity * twinkle

      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      
      const color = star.brightness > 0.7 ? '200, 220, 255' : '255, 255, 255'
      ctx.fillStyle = `rgba(${color}, ${currentOpacity})`
      ctx.fill()

      if (star.brightness > 0.8) {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${currentOpacity * 0.2})`
        ctx.fill()
      }
    }

    const updateShootingStar = (shootingStar: ShootingStar) => {
      shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed
      shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed
      shootingStar.life++

      if (shootingStar.life > shootingStar.maxLife * 0.7) {
        shootingStar.opacity = 1 - (shootingStar.life - shootingStar.maxLife * 0.7) / (shootingStar.maxLife * 0.3)
      }
    }

    const drawShootingStar = (shootingStar: ShootingStar) => {
      ctx.save()
      ctx.translate(shootingStar.x, shootingStar.y)
      ctx.rotate(shootingStar.angle)

      const gradient = ctx.createLinearGradient(0, 0, -shootingStar.length, 0)
      gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`)
      gradient.addColorStop(0.5, `rgba(200, 220, 255, ${shootingStar.opacity * 0.5})`)
      gradient.addColorStop(1, 'rgba(200, 220, 255, 0)')

      ctx.strokeStyle = gradient
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(-shootingStar.length, 0)
      ctx.stroke()

      const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 8)
      glowGradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`)
      glowGradient.addColorStop(0.5, `rgba(200, 220, 255, ${shootingStar.opacity * 0.5})`)
      glowGradient.addColorStop(1, 'rgba(200, 220, 255, 0)')
      
      ctx.beginPath()
      ctx.arc(0, 0, 8, 0, Math.PI * 2)
      ctx.fillStyle = glowGradient
      ctx.fill()

      ctx.beginPath()
      ctx.arc(0, 0, 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`
      ctx.fill()

      ctx.restore()
    }

    const isShootingStarDead = (shootingStar: ShootingStar): boolean => {
      return shootingStar.life >= shootingStar.maxLife || 
             shootingStar.x > canvas.width + 100 || 
             shootingStar.y > canvas.height + 100
    }

    const drawConstellations = () => {
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = 0.15 * (1 - distance / 150)
            if (opacity > 0.02) {
              ctx.beginPath()
              ctx.strokeStyle = `rgba(78, 150, 255, ${opacity})`
              ctx.lineWidth = 0.5
              ctx.moveTo(stars[i].x, stars[i].y)
              ctx.lineTo(stars[j].x, stars[j].y)
              ctx.stroke()
            }
          }
        }
      }
    }

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      const starCount = Math.min(Math.floor((canvas.width * canvas.height) / 3000), 400)
      stars = []
      for (let i = 0; i < starCount; i++) {
        stars.push(createStar())
      }
    }
    
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drawConstellations()

      stars.forEach(star => {
        updateStar(star)
        drawStar(star)
      })

      shootingStarTimer++
      if (shootingStarTimer > 80 && Math.random() > 0.95) {
        shootingStars.push(createShootingStar())
        shootingStarTimer = 0
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        updateShootingStar(shootingStars[i])
        drawShootingStar(shootingStars[i])
        
        if (isShootingStarDead(shootingStars[i])) {
          shootingStars.splice(i, 1)
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
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
