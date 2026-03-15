import { useState, useCallback, useEffect } from "react";

const GLYPHS = [
  "0", "1", "0", "1", "0", "1", 
  "ニ", "ティ", "ギ", "ャ", 
  "源", "変", "完", "字", "易", "私", "中", "横", "応", "表", "形", "化", "理", "原", "直", "純", "己"
];

// we isolate this so when you hover one dot, react ONLY re-renders this one dot, not all 100.
const Cell = () => {
  const [isActive, setIsActive] = useState(false);
  const [glyph, setGlyph] = useState("·");

  useEffect(() => {

    const randomInt = (min: number, max: number): number => 
    Math.floor(Math.random() * (max - min + 1)) + min;

    if(!isActive) {
      const randomDelay = randomInt(5000, 20000);
      const timeoutId = setTimeout(() => {
        setIsActive(true);
        const randomGlyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        setGlyph(randomGlyph);

        // fade back to a dot after 800ms
        setTimeout(() => {
          setIsActive(false);
          setGlyph("·");
        }, 800);
      }, randomDelay);

      return () => clearTimeout(timeoutId);
    }
  }, [isActive]);

  const handleMouseEnter = useCallback(() => {
    //select random glyph and set active
    setIsActive(true);
    const randomGlyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    setGlyph(randomGlyph);

    // fade back to a dot after 800ms
    setTimeout(() => {
      setIsActive(false);
      setGlyph("·");
    }, 800);
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className={`flex items-center justify-center cursor-crosshair text-sm transition-all duration-500 select-none ${
        isActive 
          ? "text-primary font-bold drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] scale-110" 
          : "text-neutral-800 font-normal scale-100"
      }`}
    >
      {glyph}
    </div>
  );
};

export default function GlyphGrid() {
  return (
    <div className="w-full h-full p-6 grid grid-cols-10 grid-rows-10 font-mono bg-base rounded-sm">
      {Array.from({ length: 100 }).map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
}