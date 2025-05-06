"use client"

import { useState } from "react"
import styles from "./piano-keyboard.module.css"

export default function PianoKeyboard() {
  const [activeKey, setActiveKey] = useState<string | null>(null)

  const handleKeyPress = (note: string) => {
    setActiveKey(note)
    // You could add sound playback here
    setTimeout(() => setActiveKey(null), 300)
  }

  return (
    <div className={styles.pianoContainer}>
      <div className={styles.piano}>
        <div className={styles.pianoKeys}>
          {/* White keys */}
          <div
            className={`${styles.key} ${styles.white} ${activeKey === "C" ? styles.active : ""}`}
            onClick={() => handleKeyPress("C")}
            data-note="C"
          ></div>
          <div
            className={`${styles.key} ${styles.white} ${activeKey === "D" ? styles.active : ""}`}
            onClick={() => handleKeyPress("D")}
            data-note="D"
          ></div>
          <div
            className={`${styles.key} ${styles.white} ${activeKey === "E" ? styles.active : ""}`}
            onClick={() => handleKeyPress("E")}
            data-note="E"
          ></div>
          <div
            className={`${styles.key} ${styles.white} ${activeKey === "F" ? styles.active : ""}`}
            onClick={() => handleKeyPress("F")}
            data-note="F"
          ></div>
          <div
            className={`${styles.key} ${styles.white} ${activeKey === "G" ? styles.active : ""}`}
            onClick={() => handleKeyPress("G")}
            data-note="G"
          ></div>
          <div
            className={`${styles.key} ${styles.white} ${activeKey === "A" ? styles.active : ""}`}
            onClick={() => handleKeyPress("A")}
            data-note="A"
          ></div>
          <div
            className={`${styles.key} ${styles.white} ${activeKey === "B" ? styles.active : ""}`}
            onClick={() => handleKeyPress("B")}
            data-note="B"
          ></div>

          {/* Black keys */}
          <div
            className={`${styles.key} ${styles.black} ${activeKey === "C#" ? styles.active : ""}`}
            onClick={() => handleKeyPress("C#")}
            data-note="C#"
          ></div>
          <div
            className={`${styles.key} ${styles.black} ${activeKey === "D#" ? styles.active : ""}`}
            onClick={() => handleKeyPress("D#")}
            data-note="D#"
          ></div>
          <div
            className={`${styles.key} ${styles.black} ${activeKey === "F#" ? styles.active : ""}`}
            onClick={() => handleKeyPress("F#")}
            data-note="F#"
          ></div>
          <div
            className={`${styles.key} ${styles.black} ${activeKey === "G#" ? styles.active : ""}`}
            onClick={() => handleKeyPress("G#")}
            data-note="G#"
          ></div>
          <div
            className={`${styles.key} ${styles.black} ${activeKey === "A#" ? styles.active : ""}`}
            onClick={() => handleKeyPress("A#")}
            data-note="A#"
          ></div>
        </div>
      </div>
    </div>
  )
}
