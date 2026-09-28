import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Sliders, Sun, RotateCw, Download, Check } from 'lucide-react';

interface MaterialPreset {
  id: string;
  name: string;
  finish: string;
  metallic: number;
  roughness: number;
  color: string;
  gradient: string;
  highlight: string;
  shadow: string;
}

const MATERIALS: MaterialPreset[] = [
  {
    id: 'gold',
    name: 'Brushed Champagne Gold',
    finish: 'Ray-traced metallic sheen with anisotropic micro-scratches',
    metallic: 0.95,
    roughness: 0.15,
    color: '#eab308',
    gradient: 'from-[#fef08a] via-[#eab308] to-[#854d0e]',
    highlight: 'rgba(254, 240, 138, 0.85)',
    shadow: 'rgba(113, 63, 18, 0.6)',
  },
  {
    id: 'obsidian',
    name: 'Matte Obsidian Granite',
    finish: 'Deep non-reflective graphite texture with subtle diffuse caustics',
    metallic: 0.1,
    roughness: 0.85,
    color: '#27272a',
    gradient: 'from-[#3f3f46] via-[#18181b] to-[#09090b]',
    highlight: 'rgba(255, 255, 255, 0.25)',
    shadow: 'rgba(0, 0, 0, 0.8)',
  },
  {
    id: 'chrome',
    name: 'Liquid Polished Chrome',
    finish: 'Mirror-grade specular reflection with ambient chromatic dispersion',
    metallic: 1.0,
    roughness: 0.05,
    color: '#e2e8f0',
    gradient: 'from-[#ffffff] via-[#cbd5e1] to-[#475569]',
    highlight: 'rgba(255, 255, 255, 0.95)',
    shadow: 'rgba(51, 65, 85, 0.7)',
  },
  {
    id: 'copper',
    name: 'Rose Gold & Brushed Copper',
    finish: 'Warm reddish-gold luster crafted for luxury cosmetic packaging',
    metallic: 0.9,
    roughness: 0.2,
    color: '#fb7185',
    gradient: 'from-[#fecdd3] via-[#f43f5e] to-[#881337]',
    highlight: 'rgba(254, 205, 211, 0.9)',
    shadow: 'rgba(136, 19, 55, 0.6)',
  },
  {
    id: 'glass',
    name: 'Frosted Glass & Caustics',
    finish: 'Translucent subsurface scattering designed for high-end perfumery',
    metallic: 0.3,
    roughness: 0.4,
    color: '#38bdf8',
    gradient: 'from-[#bae6fd]/40 via-[#38bdf8]/30 to-[#0284c7]/20',
    highlight: 'rgba(224, 242, 254, 0.75)',
    shadow: 'rgba(3, 105, 161, 0.4)',
  },
];

const LIGHTING_ENVIRONMENTS = [
  { id: 'studio', name: 'Studio Key Light', desc: 'Balanced 3-point neutral lighting with soft fill' },
  { id: 'rim', name: 'Moody Rim Light', desc: 'High-contrast edge silhouette on dark background' },
  { id: 'editorial', name: 'Editorial Golden Hour', desc: 'Warm 3200K side-glance beam with deep shadows' },
  { id: 'minimal', name: 'Minimalist Clean Softbox', desc: 'Diffused overhead light eliminating harsh edges' },
];

export const Interactive3DStudio: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState<MaterialPreset>(MATERIALS[0]);
  const [activeLight, setActiveLight] = useState(LIGHTING_ENVIRONMENTS[0]);
  const [rotation, setRotation] = useState({ x: 15, y: -25 });
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Auto-rotation loop
  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: Math.sin(Date.now() / 2500) * 12 + 10,
        y: (prev.y + 0.6) % 360,
      }));
    }, 30);
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  // Copy specifications
  const copySpec = () => {
    const text = `3D Material Specification:\n- Material: ${activeMaterial.name}\n- Metallic: ${(activeMaterial.metallic * 100).toFixed(0)}%\n- Roughness: ${(activeMaterial.roughness * 100).toFixed(0)}%\n- Lighting: ${activeLight.name}\n- Studio: Design Studio by Aarohi Jain`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="studio" className="py-20 md:py-28 bg-[#090b10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Virtual Lookdev Lab
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Interactive 3D Material &amp; Shading Studio
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-xl">
              Preview how Aarohi engineers custom 3D shader parameters, ray-traced reflections, and studio lighting setups for luxury brand marks and packaging.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoRotating(!isAutoRotating)}
              className="px-3.5 py-2 text-xs font-medium rounded-lg border border-white/10 bg-neutral-900 text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'animate-spin' : ''}`} />
              <span>{isAutoRotating ? 'Pause Rotation' : 'Auto Rotate'}</span>
            </button>

            <button
              onClick={copySpec}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-black flex items-center gap-1.5 transition-colors shadow-sm"
            >
              {isCopied ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Spec Copied!' : 'Export Spec'}</span>
            </button>
          </div>
        </div>

        {/* 3D Visualizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visualizer Stage */}
          <div
            ref={canvasRef}
            className="lg:col-span-8 rounded-2xl bg-gradient-to-b from-[#10121a] to-[#08090d] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden min-h-[460px]"
            onMouseDown={() => setIsAutoRotating(false)}
          >
            {/* Ambient lighting backdrop reflecting chosen light environment */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                activeLight.id === 'rim'
                  ? 'bg-radial from-amber-500/10 via-transparent to-transparent opacity-80'
                  : activeLight.id === 'editorial'
                  ? 'bg-radial from-orange-500/20 via-amber-600/5 to-transparent opacity-70'
                  : activeLight.id === 'cyber'
                  ? 'bg-radial from-indigo-500/20 via-purple-600/5 to-transparent opacity-70'
                  : 'bg-radial from-white/10 via-transparent to-transparent opacity-60'
              }`}
            />

            {/* Top Stage Indicators */}
            <div className="flex items-center justify-between text-xs text-neutral-400 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-neutral-300">Live Shading Engine</span>
              </div>
              <div className="font-mono text-[11px] text-neutral-400">
                Rot: {rotation.x.toFixed(0)}° / {rotation.y.toFixed(0)}°
              </div>
            </div>

            {/* Centered 3D Sculptural Geometry (Procedural 3D Emblem) */}
            <div className="my-auto py-12 flex items-center justify-center relative perspective-[1000px]">
              <div
                className="w-56 h-56 sm:w-64 sm:h-64 relative transition-transform duration-75 select-none"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
              >
                {/* 3D Layer 1: Outer Sculptural Ring */}
                <div
                  className={`absolute inset-0 rounded-3xl border-8 border-transparent bg-gradient-to-tr ${activeMaterial.gradient} shadow-2xl transition-all duration-500`}
                  style={{
                    transform: 'translateZ(40px)',
                    boxShadow: `0 25px 50px -12px ${activeMaterial.shadow}, 0 0 40px ${activeMaterial.highlight}`,
                  }}
                />

                {/* 3D Layer 2: Geometric Core Prism */}
                <div
                  className="absolute inset-8 rounded-2xl bg-neutral-900 border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-500"
                  style={{
                    transform: 'translateZ(20px)',
                  }}
                >
                  {/* Procedural light beam reflection */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 animate-pulse-glow"
                    style={{
                      mixBlendMode: 'overlay',
                    }}
                  />

                  {/* Monogram Emblem "AJ" */}
                  <div className="relative text-center z-10">
                    <span
                      className={`text-5xl sm:text-6xl font-extrabold font-display bg-gradient-to-br ${activeMaterial.gradient} bg-clip-text text-transparent drop-shadow-md`}
                    >
                      AJ
                    </span>
                    <div className="text-[10px] tracking-widest text-neutral-300 uppercase mt-1 font-semibold">
                      Design Studio
                    </div>
                  </div>
                </div>

                {/* 3D Layer 3: Back Shadow Base Plate */}
                <div
                  className="absolute inset-2 rounded-3xl bg-black/60 blur-md -z-10"
                  style={{
                    transform: 'translateZ(-40px)',
                  }}
                />
              </div>
            </div>

            {/* Bottom Controls / Manual Sliders */}
            <div className="z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-neutral-400">Finish: </span>
                  <span className="text-white font-medium">{activeMaterial.name}</span>
                </div>
                <span className="text-white/20" aria-hidden="true">·</span>
                <div>
                  <span className="text-neutral-400">Environment: </span>
                  <span className="text-amber-400 font-medium">{activeLight.name}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-neutral-400">Manual Tilt:</span>
                <input
                  type="range"
                  min="-60"
                  max="60"
                  value={rotation.x}
                  onChange={(e) => {
                    setIsAutoRotating(false);
                    setRotation((prev) => ({ ...prev, x: Number(e.target.value) }));
                  }}
                  className="w-24 accent-amber-400 cursor-pointer"
                  aria-label="Tilt rotation"
                />
              </div>
            </div>
          </div>

          {/* Right Parameter Selectors */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            {/* Material Presets Selector */}
            <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Select 3D Material Shader</span>
              </div>

              <div className="space-y-2">
                {MATERIALS.map((mat) => {
                  const isSelected = activeMaterial.id === mat.id;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => setActiveMaterial(mat)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 text-xs ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400 text-white'
                          : 'bg-neutral-900/50 border-white/5 text-neutral-300 hover:border-white/20'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full shrink-0 mt-0.5 border border-white/20 bg-gradient-to-tr ${mat.gradient}`}
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-white flex items-center justify-between">
                          <span>{mat.name}</span>
                          {isSelected && <span className="text-[10px] text-amber-400 font-mono">ACTIVE</span>}
                        </div>
                        <div className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                          {mat.finish}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Lighting Setup Selector */}
            <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Lighting Environment</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {LIGHTING_ENVIRONMENTS.map((light) => {
                  const isSelected = activeLight.id === light.id;
                  return (
                    <button
                      key={light.id}
                      onClick={() => setActiveLight(light)}
                      className={`text-left p-3 rounded-xl border transition-all text-xs flex flex-col justify-between ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400 text-white'
                          : 'bg-neutral-900/50 border-white/5 text-neutral-400 hover:border-white/20'
                      }`}
                    >
                      <span className="font-semibold text-white line-clamp-1">{light.name}</span>
                      <span className="text-[10px] text-neutral-400 mt-1 line-clamp-2">{light.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
