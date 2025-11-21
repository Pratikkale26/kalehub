"use client"

import { useEffect, useState } from "react"

export default function GlitchEffect({ text, className = "" }: { text: string; className?: string }) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className={`relative inline-block ${className}`}>
      <span 
        className={`
          relative z-10
          ${isGlitching ? 'animate-pulse' : ''}
        `}
      >
        {text}
      </span>
      
      {isGlitching && (
        <>
          <span 
            className="absolute inset-0 z-0 text-cyan-400 opacity-70"
            style={{
              transform: 'translate(-2px, 2px)',
              animation: 'glitch-1 0.3s infinite'
            }}
          >
            {text}
          </span>
          <span 
            className="absolute inset-0 z-0 text-pink-400 opacity-70"
            style={{
              transform: 'translate(2px, -2px)',
              animation: 'glitch-2 0.3s infinite'
            }}
          >
            {text}
          </span>
        </>
      )}
      
      <style jsx>{`
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(0 0 0 0); }
          20% { clip-path: inset(20% 0 30% 0); }
          40% { clip-path: inset(50% 0 20% 0); }
          60% { clip-path: inset(10% 0 60% 0); }
          80% { clip-path: inset(80% 0 5% 0); }
        }
        
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(0 0 0 0); }
          20% { clip-path: inset(60% 0 10% 0); }
          40% { clip-path: inset(20% 0 50% 0); }
          60% { clip-path: inset(30% 0 40% 0); }
          80% { clip-path: inset(5% 0 80% 0); }
        }
      `}</style>
    </div>
  )
}