import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dices, RefreshCw, Trophy, CheckCircle, ArrowRight, RotateCcw, Volume2, VolumeX, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuickPlayGameProps {
  onOpenBooking: () => void;
}

export const QuickPlayGame: React.FC<QuickPlayGameProps> = ({ onOpenBooking }) => {
  // Game Selector Mode: 'slider' or 'stacker'
  const [activeGameMode, setActiveGameMode] = useState<'slider' | 'stacker'>('slider');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Sound Synthesizer (Realistic wooden clacks & drops via Web Audio API)
  const playWoodSound = (type: 'clack' | 'drop' | 'win' | 'thud') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (type === 'clack') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.35, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.06);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.06);
      } else if (type === 'drop') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(160, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(45, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'win') {
        const now = ctx.currentTime;
        [261.6, 329.6, 392.0, 523.2].forEach((freq, i) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'triangle';
          o.frequency.setValueAtTime(freq, now + i * 0.08);
          g.gain.setValueAtTime(0.2, now + i * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
          o.connect(g);
          g.connect(ctx.destination);
          o.start(now + i * 0.08);
          o.stop(now + i * 0.08 + 0.25);
        });
      } else {
        // Thud
        osc.type = 'square';
        osc.frequency.setValueAtTime(80, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(20, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      }
    } catch {
      // AudioContext fallback
    }
  };

  // -------------------------------------------------------------
  // GAME 1: SLIDING TEAKWOOD PUZZLE (3x3)
  // -------------------------------------------------------------
  const solvedTiles = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  const [sliderTiles, setSliderTiles] = useState<number[]>([1, 2, 3, 4, 0, 5, 7, 8, 6]);
  const [sliderMoves, setSliderMoves] = useState<number>(0);
  const [sliderSolved, setSliderSolved] = useState<boolean>(false);
  const [sliderTimer, setSliderTimer] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isTimerRunning && !sliderSolved) {
      interval = setInterval(() => setSliderTimer((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, sliderSolved]);

  const shuffleSlider = () => {
    let current = [...solvedTiles];
    let emptyIdx = 8;
    // Perform 28 random valid moves to guarantee solvability
    for (let i = 0; i < 28; i++) {
      const validMoves: number[] = [];
      const row = Math.floor(emptyIdx / 3);
      const col = emptyIdx % 3;
      if (row > 0) validMoves.push(emptyIdx - 3);
      if (row < 2) validMoves.push(emptyIdx + 3);
      if (col > 0) validMoves.push(emptyIdx - 1);
      if (col < 2) validMoves.push(emptyIdx + 1);

      const chosen = validMoves[Math.floor(Math.random() * validMoves.length)];
      [current[emptyIdx], current[chosen]] = [current[chosen], current[emptyIdx]];
      emptyIdx = chosen;
    }
    setSliderTiles(current);
    setSliderMoves(0);
    setSliderSolved(false);
    setSliderTimer(0);
    setIsTimerRunning(false);
    playWoodSound('clack');
  };

  const handleTileClick = (index: number) => {
    if (sliderSolved) return;
    const emptyIndex = sliderTiles.indexOf(0);
    const row = Math.floor(index / 3);
    const col = index % 3;
    const emptyRow = Math.floor(emptyIndex / 3);
    const emptyCol = emptyIndex % 3;

    const isAdjacent =
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow);

    if (isAdjacent) {
      const newTiles = [...sliderTiles];
      [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
      setSliderTiles(newTiles);
      setSliderMoves((m) => m + 1);
      if (!isTimerRunning) setIsTimerRunning(true);
      playWoodSound('clack');

      // Check win
      const isWin = newTiles.every((val, i) => val === solvedTiles[i]);
      if (isWin) {
        setSliderSolved(true);
        setIsTimerRunning(false);
        playWoodSound('win');
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF7417', '#FFB58A', '#38251C', '#FFF8EF']
        });
      }
    }
  };

  // -------------------------------------------------------------
  // GAME 2: HARDWOOD CANOPY TOWER STACKER
  // -------------------------------------------------------------
  interface TowerBlock {
    width: number;
    left: number; // percentage (0 - 100)
    color: string;
  }

  const [towerStack, setTowerStack] = useState<TowerBlock[]>([
    { width: 70, left: 15, color: '#8C5229' }
  ]);
  const [currentBlockWidth, setCurrentBlockWidth] = useState<number>(70);
  const [currentBlockPos, setCurrentBlockPos] = useState<number>(10);
  const [blockDirection, setBlockDirection] = useState<'right' | 'left'>('right');
  const [isStackingActive, setIsStackingActive] = useState<boolean>(true);
  const [stackerScore, setStackerScore] = useState<number>(1);
  const [stackerBest, setStackerBest] = useState<number>(1);
  const [stackerGameOver, setStackerGameOver] = useState<boolean>(false);
  const [streakFeedback, setStreakFeedback] = useState<string>('');

  const blockColors = ['#D48B55', '#C17A43', '#B06428', '#8C5229', '#E0A06B'];

  // Animate moving block
  useEffect(() => {
    let animFrame: number;
    if (activeGameMode === 'stacker' && isStackingActive && !stackerGameOver) {
      const speed = Math.min(1.2 + stackerScore * 0.08, 2.8);
      const updateMotion = () => {
        setCurrentBlockPos((prev) => {
          if (blockDirection === 'right') {
            if (prev + currentBlockWidth >= 96) {
              setBlockDirection('left');
              return 96 - currentBlockWidth;
            }
            return prev + speed;
          } else {
            if (prev <= 4) {
              setBlockDirection('right');
              return 4;
            }
            return prev - speed;
          }
        });
        animFrame = requestAnimationFrame(updateMotion);
      };
      animFrame = requestAnimationFrame(updateMotion);
    }
    return () => cancelAnimationFrame(animFrame);
  }, [activeGameMode, isStackingActive, stackerGameOver, blockDirection, currentBlockWidth, stackerScore]);

  const handleDropBlock = () => {
    if (!isStackingActive || stackerGameOver) return;

    const topBlock = towerStack[towerStack.length - 1];
    const prevLeft = topBlock.left;
    const prevRight = topBlock.left + topBlock.width;
    const curLeft = currentBlockPos;
    const curRight = currentBlockPos + currentBlockWidth;

    // Overlap calculation
    const overlapLeft = Math.max(prevLeft, curLeft);
    const overlapRight = Math.min(prevRight, curRight);
    const overlapWidth = overlapRight - overlapLeft;

    if (overlapWidth <= 3) {
      // Complete miss - Tower topples!
      setStackerGameOver(true);
      setIsStackingActive(false);
      setStreakFeedback('Tower Toppled!');
      playWoodSound('thud');
    } else {
      // Successful stack!
      const newWidth = overlapWidth;
      const isPerfect = Math.abs(curLeft - prevLeft) < 2.5;

      if (isPerfect) {
        setStreakFeedback('PERFECT BALANCE! ✦');
        playWoodSound('win');
      } else {
        setStreakFeedback('Solid Placement!');
        playWoodSound('drop');
      }

      const nextBlockColor = blockColors[stackerScore % blockColors.length];
      const newStack = [
        ...towerStack,
        { width: newWidth, left: overlapLeft, color: nextBlockColor }
      ];

      setTowerStack(newStack);
      setCurrentBlockWidth(newWidth);
      setCurrentBlockPos(blockDirection === 'right' ? 5 : 95 - newWidth);
      setStackerScore((s) => {
        const nextScore = s + 1;
        if (nextScore > stackerBest) setStackerBest(nextScore);
        return nextScore;
      });

      if (newStack.length >= 10 && newStack.length % 5 === 0) {
        confetti({
          particleCount: 25,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#FF7417', '#FFB58A', '#38251C']
        });
      }
    }
  };

  const resetStacker = () => {
    setTowerStack([{ width: 70, left: 15, color: '#8C5229' }]);
    setCurrentBlockWidth(70);
    setCurrentBlockPos(15);
    setBlockDirection('right');
    setIsStackingActive(true);
    setStackerGameOver(false);
    setStackerScore(1);
    setStreakFeedback('');
    playWoodSound('drop');
  };

  // -------------------------------------------------------------
  // RIGHT CARD: TEAM CHALLENGE PROMPTS
  // -------------------------------------------------------------
  const challenges = [
    {
      title: "The 3-Word Tactile Pitch",
      category: "Creative Storytelling",
      prompt: "Pick any wooden block in your mind. Pitch a revolutionary product made from only that shape using exactly 3 words.",
      bonus: "+10 Creative Spark"
    },
    {
      title: "Silent Alignment Protocol",
      category: "Teamwork & Synergy",
      prompt: "Without speaking or using hand gestures, synchronize with your partner to nod at the exact same millisecond.",
      bonus: "+15 Non-Verbal Empathy"
    },
    {
      title: "The Reverse Tower Paradox",
      category: "Strategy & Logic",
      prompt: "If a wooden tower must support 100x its weight, would you widen the foundation or distribute the center of mass?",
      bonus: "+20 Structural Logic"
    },
    {
      title: "Memory Flash Sequence",
      category: "Memory & Focus",
      prompt: "Remember this sequence: Orange Dice -> Teak Cube -> Beech Arc -> Brass Pin. Recite backward!",
      bonus: "+25 Working Memory"
    }
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [xpScore, setXpScore] = useState(30);

  const handleNextChallenge = () => {
    const nextIdx = (activeCardIndex + 1) % challenges.length;
    setActiveCardIndex(nextIdx);
    setXpScore((prev) => prev + 15);
    playWoodSound('clack');
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#FF7417', '#FFB58A', '#38251C']
    });
  };

  return (
    <section id="game-lab" className="py-20 md:py-28 bg-[#FFF2E2] border-t-2 border-b-2 border-rasphera-dark/15 relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rasphera-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-hand text-2xl sm:text-3xl text-rasphera-orange font-bold transform -rotate-2 inline-block">
            Hands-on Tactile Simulation
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-rasphera-dark font-black tracking-tight mt-1">
            QUICK PLAY <span className="text-rasphera-orange">LAB</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-rasphera-brown font-medium mt-3">
            Experience Rasphera's tactile problem-solving firsthand. Play our interactive teak sliding puzzle or test your timing with the canopy balance tower!
          </p>
        </div>

        {/* Dual Interactive Simulator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Playable Wooden Game (lg: col-span-7) */}
          <div className="lg:col-span-7 bg-white border-3 border-rasphera-dark rounded-2xl p-5 sm:p-7 shadow-solid-lg flex flex-col justify-between">
            
            <div>
              {/* Header: Mode Switcher Tabs & Sound Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b-2 border-rasphera-dark/15">
                
                {/* Game Mode Tabs */}
                <div className="flex items-center gap-1.5 p-1 bg-rasphera-cream border-2 border-rasphera-dark rounded-xl shadow-sm">
                  <button
                    onClick={() => setActiveGameMode('slider')}
                    className={`px-3 py-1.5 rounded-lg font-display text-xs sm:text-sm tracking-wider uppercase font-bold transition-all ${
                      activeGameMode === 'slider'
                        ? 'bg-rasphera-orange text-white shadow-sm'
                        : 'text-rasphera-dark hover:text-rasphera-orange'
                    }`}
                  >
                    🪵 Teak Slider
                  </button>
                  <button
                    onClick={() => setActiveGameMode('stacker')}
                    className={`px-3 py-1.5 rounded-lg font-display text-xs sm:text-sm tracking-wider uppercase font-bold transition-all ${
                      activeGameMode === 'stacker'
                        ? 'bg-rasphera-orange text-white shadow-sm'
                        : 'text-rasphera-dark hover:text-rasphera-orange'
                    }`}
                  >
                    🏗️ Tower Stacker
                  </button>
                </div>

                {/* Sound FX Toggle & Reset */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-1.5 rounded-lg border border-rasphera-dark/30 hover:bg-rasphera-cream text-rasphera-dark transition-colors"
                    title={soundEnabled ? 'Mute Wooden Audio' : 'Unmute Wooden Audio'}
                  >
                    {soundEnabled ? <Volume2 className="w-4 h-4 text-rasphera-orange" /> : <VolumeX className="w-4 h-4 text-rasphera-dark/40" />}
                  </button>

                  <button
                    onClick={activeGameMode === 'slider' ? shuffleSlider : resetStacker}
                    className="p-1.5 rounded-lg border border-rasphera-dark/30 hover:bg-rasphera-cream text-rasphera-brown text-xs font-semibold flex items-center gap-1 transition-colors"
                    title="Shuffle / Restart Game"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* GAME VIEWPORT CONTAINER */}
              {activeGameMode === 'slider' ? (
                /* =========================================================================
                   GAME 1: SLIDING TEAKWOOD PUZZLE
                   ========================================================================= */
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-rasphera-brown mb-3">
                    <span className="flex items-center gap-1">
                      <span>Moves:</span>
                      <strong className="text-rasphera-orange text-sm font-display">{sliderMoves}</strong>
                    </span>
                    <span>
                      Goal: Arrange numbers 1 to 8!
                    </span>
                    <span className="flex items-center gap-1">
                      <span>Timer:</span>
                      <strong className="text-rasphera-dark font-mono">{sliderTimer}s</strong>
                    </span>
                  </div>

                  {/* 3x3 Hardwood Carved Frame */}
                  <div className="p-3 sm:p-4 bg-gradient-to-br from-[#8C5229] to-[#5A3D30] rounded-2xl border-3 border-rasphera-dark shadow-solid max-w-[320px] mx-auto select-none">
                    
                    {/* Inner Timber Board Bed */}
                    <div className="bg-[#422B1E] p-2 rounded-xl grid grid-cols-3 gap-2 border border-white/20 shadow-inner">
                      {sliderTiles.map((val, index) => {
                        const isEmpty = val === 0;

                        return (
                          <div
                            key={index}
                            onClick={() => handleTileClick(index)}
                            className={`aspect-square rounded-xl transition-all duration-150 flex flex-col items-center justify-center font-display text-2xl sm:text-3xl font-black relative ${
                              isEmpty
                                ? 'bg-[#2A1B13] border-2 border-dashed border-white/10 cursor-default'
                                : 'bg-gradient-to-b from-[#E0A06B] via-[#C17A43] to-[#A8632E] text-white border-2 border-rasphera-dark shadow-[2px_3px_0px_#171412] cursor-pointer hover:brightness-105 active:scale-95'
                            }`}
                          >
                            {!isEmpty && (
                              <>
                                {/* Subtle Wood Grain Bevel Lines */}
                                <div className="absolute inset-x-2 top-1 h-[1px] bg-white/40 rounded-full pointer-events-none" />
                                <span className="drop-shadow-sm font-display">{val}</span>
                                <span className="text-[8px] font-mono tracking-tighter text-white/60 -mt-1 uppercase">
                                  TEAK
                                </span>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>

                  </div>

                  {/* Slider Control Actions */}
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <button
                      onClick={shuffleSlider}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rasphera-cream border-2 border-rasphera-dark rounded-lg font-display uppercase tracking-wider text-xs font-bold hover:bg-rasphera-peach transition-colors shadow-sm"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-rasphera-orange" />
                      <span>Shuffle Tiles</span>
                    </button>

                    {sliderSolved ? (
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 border border-green-600 rounded-full text-green-800 text-xs font-bold animate-bounce">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Puzzle Solved in {sliderMoves} Moves!</span>
                      </div>
                    ) : (
                      <span className="text-xs font-hand text-rasphera-brown font-bold">
                        Click any block next to empty space!
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                /* =========================================================================
                   GAME 2: HARDWOOD CANOPY TOWER STACKER
                   ========================================================================= */
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-rasphera-brown mb-2">
                    <span>
                      Tower Height: <strong className="text-rasphera-orange text-base font-display">{stackerScore}</strong> Blocks
                    </span>
                    <span className="text-xs font-display text-rasphera-orange">
                      Best: {stackerBest}
                    </span>
                  </div>

                  {/* Stacker Visual Canvas */}
                  <div 
                    onClick={handleDropBlock}
                    className="relative h-60 bg-gradient-to-b from-[#FFFDF9] to-[#F7EBDC] rounded-2xl border-3 border-rasphera-dark shadow-inner overflow-hidden cursor-pointer select-none"
                  >
                    {/* Floating Guide / Tap Hint */}
                    <div className="absolute top-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-rasphera-dark/60 font-bold z-10 pointer-events-none">
                      <span>Tap anywhere to drop!</span>
                      {streakFeedback && (
                        <span className="text-rasphera-orange font-display tracking-wider animate-pulse font-bold text-xs">
                          {streakFeedback}
                        </span>
                      )}
                    </div>

                    {/* Top Sliding / Moving Block */}
                    {!stackerGameOver && isStackingActive && (
                      <div
                        style={{
                          width: `${currentBlockWidth}%`,
                          left: `${currentBlockPos}%`
                        }}
                        className="absolute top-8 h-7 bg-gradient-to-r from-rasphera-orange via-[#FF8A3D] to-rasphera-orange rounded-md border-2 border-rasphera-dark shadow-solid transition-none"
                      >
                        <div className="w-full h-full flex items-center justify-center text-[10px] font-display text-white font-bold tracking-wider">
                          🪵 DROP
                        </div>
                      </div>
                    )}

                    {/* Stacked Wooden Blocks from bottom up */}
                    <div className="absolute bottom-2 left-0 right-0 flex flex-col-reverse items-center gap-1 px-4">
                      {towerStack.slice(-6).map((block, i) => (
                        <div
                          key={i}
                          style={{
                            width: `${block.width}%`,
                            backgroundColor: block.color
                          }}
                          className="h-6 rounded-md border-2 border-rasphera-dark shadow-sm flex items-center justify-center text-[9px] font-mono text-white/80 font-bold"
                        >
                          Level {towerStack.length - i}
                        </div>
                      ))}
                    </div>

                    {/* Game Over Overlay */}
                    {stackerGameOver && (
                      <div className="absolute inset-0 bg-rasphera-dark/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center z-20">
                        <span className="text-3xl mb-1">🪵💥</span>
                        <h4 className="font-display text-2xl text-white font-bold mb-1">
                          TOWER TOPPLED!
                        </h4>
                        <p className="text-xs text-white/80 mb-4 font-mono">
                          You balanced a {stackerScore} block hardwood tower!
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            resetStacker();
                          }}
                          className="px-5 py-2 bg-rasphera-orange text-white font-display uppercase tracking-wider text-xs rounded-xl border-2 border-white shadow-md font-bold hover:bg-rasphera-orange-hover"
                        >
                          Stack Again
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Drop Trigger Button */}
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={handleDropBlock}
                      disabled={stackerGameOver}
                      className="w-full py-2.5 bg-rasphera-orange hover:bg-rasphera-orange-hover disabled:opacity-50 text-white font-display uppercase tracking-wider text-sm rounded-xl border-2 border-rasphera-dark box-solid-shadow font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>DROP & BALANCE BLOCK</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status / Teaser */}
            <div className="mt-5 pt-3 border-t border-rasphera-dark/15 flex items-center justify-between text-xs text-rasphera-brown font-medium">
              <span className="font-mono text-[11px]">
                {activeGameMode === 'slider' ? 'Strategy & Spatial Logic' : 'Timing & Fine Motor Synergy'}
              </span>
              <span className="font-hand text-sm text-rasphera-orange font-bold">
                100% Tactile Wooden Experience
              </span>
            </div>

          </div>

          {/* Right Column: Creative Icebreaker Challenge Prompts (lg: col-span-5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-rasphera-peach/50 via-white to-white border-3 border-rasphera-dark rounded-2xl p-6 sm:p-8 shadow-solid-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-rasphera-dark text-white rounded">
                    Challenge {activeCardIndex + 1} of 4
                  </span>
                  <span className="text-xs font-semibold text-rasphera-orange">
                    {challenges[activeCardIndex].category}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-display text-rasphera-brown">
                  <Trophy className="w-4 h-4 text-rasphera-orange" />
                  <span className="font-bold">{xpScore} XP</span>
                </div>
              </div>

              {/* Card Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCardIndex}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border-2 border-rasphera-dark rounded-xl p-5 shadow-sm"
                >
                  <h4 className="font-display text-2xl text-rasphera-dark font-bold mb-2">
                    {challenges[activeCardIndex].title}
                  </h4>
                  <p className="font-body text-sm sm:text-base text-rasphera-brown font-medium leading-relaxed mb-4">
                    "{challenges[activeCardIndex].prompt}"
                  </p>
                  <div className="inline-block bg-rasphera-cream px-2.5 py-1 rounded border border-rasphera-peach text-[11px] font-mono font-bold text-rasphera-orange">
                    {challenges[activeCardIndex].bonus}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-rasphera-dark/15 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleNextChallenge}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-rasphera-dark hover:bg-rasphera-brown text-white font-display uppercase tracking-wider text-sm py-2.5 px-4 rounded-xl border-2 border-rasphera-dark shadow-sm transition-all font-bold"
              >
                <Dices className="w-4 h-4 text-rasphera-peach" />
                <span>Draw Next Card</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-rasphera-orange hover:bg-rasphera-orange-hover text-white font-display uppercase tracking-wider text-sm py-2.5 px-4 rounded-xl border-2 border-rasphera-dark box-solid-shadow transition-all font-bold"
              >
                <span>Book Live Lab</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
