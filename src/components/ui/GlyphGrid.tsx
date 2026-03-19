import { useState, useCallback, useEffect } from "react";


// Symbols shown, symbolising the path chosen
const GLYPHS = [
  "0", "1", 
  "ニ", "ティ", "ギ", "ャ", 
  "源", "変", "完", "字", "易", "私", "中", "横", "応", "表", "形", "化", "理", "原", "直", "純", "己"
];

// Each character displayed is it's own cell in the unconventional 15x15 grid.
const Cell = () => {

  //State variables
  const [isActive, setIsActive] = useState(false);  
  const [glyph, setGlyph] = useState("·");

  // Random Kanji generator useEffect
  useEffect(() => {
    const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    if(!isActive) {
      const randomDelay = randomInt(30000, 50000);
      const timeoutId = setTimeout(() => {
        setIsActive(true);
        setGlyph(GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);

        setTimeout(() => {
          setIsActive(false);
          setGlyph("·");
        }, 1000);
      }, randomDelay);

      //Cleanup function.
      return () => clearTimeout(timeoutId);
    }
  }, [isActive]);

  //Tracks mouse pointer and generates Kanji
  const handleMouseEnter = useCallback(() => {
    setIsActive(true);
    setGlyph(GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);

    // Glyph active for 1s
    setTimeout(() => {
      setIsActive(false);
      setGlyph("·");
    }, 1000);
  }, []);

  //Returning each individual cell
  return (
    <div
      onMouseEnter={handleMouseEnter}
      className={`flex items-center justify-center w-6 h-6 text-sm transition-all duration-300 select-none ${
        isActive 
          ? "text-primary [filter:var(--char-glow)]" 
          : "text-primary font-normal opacity-40"
      }`}
    >
      {glyph}
    </div>
  );
};

//Glyph grid defining the actual 15x15 grid

export default function GlyphGrid() {
  return (
    <div 
      className="w-full h-full p-4 grid gap-1 justify-items-center cursor-crosshair bg-base"
      style={{ gridTemplateColumns: "repeat(15, minmax(0, 1fr))" }}
      >
      {Array.from({ length: 225 }).map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
}