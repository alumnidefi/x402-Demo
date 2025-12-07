"use client"

import { useEffect, useState, useRef } from "react"

interface TerminalTypewriterProps {
  lines: string[]
  typingSpeed?: number
  lineDelay?: number
}

export function TerminalTypewriter({ lines, typingSpeed = 100, lineDelay = 2500 }: TerminalTypewriterProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [displayedLines, currentText])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  // Typewriter effect
  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      // Reset and start over after all lines are done
      const resetTimeout = setTimeout(() => {
        setDisplayedLines([])
        setCurrentLineIndex(0)
        setCurrentText("")
      }, lineDelay * 3)
      return () => clearTimeout(resetTimeout)
    }

    const currentLine = lines[currentLineIndex]

    if (currentText.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      // Line is complete, wait then move to next line
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentLine])
        setCurrentText("")
        setCurrentLineIndex((prev) => prev + 1)
      }, lineDelay)
      return () => clearTimeout(timeout)
    }
  }, [currentText, currentLineIndex, lines, typingSpeed, lineDelay])

  return (
    <div className="w-[400px] rounded-lg overflow-hidden">
      <div
        ref={scrollRef}
        className="p-4 pt-20 h-[500px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="font-mono text-base text-green-500 leading-relaxed space-y-.5">
          {displayedLines.map((line, index) => (
            <div key={index}>{line || <br />}</div>
          ))}
          {currentText && (
            <div>
              {currentText}
              {showCursor && <span className="inline-block w-2 h-3 bg-green-500 ml-0.5 animate-pulse" />}
            </div>
          )}
          {!currentText && currentLineIndex < lines.length && showCursor && (
            <span className="inline-block w-2 h-3 bg-green-500 animate-pulse" />
          )}
        </div>
      </div>
    </div>
  )
}
