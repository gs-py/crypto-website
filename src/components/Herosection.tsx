import  { useState, useEffect } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <header className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Dynamic floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Interactive mouse follower */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-violet-500/5 to-transparent rounded-full blur-xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20  items-start min-h-[80vh]">
          {/* Left column: Enhanced text content */}
          <div className="text-center lg:text-left space-y-12 relative">
            {/* Floating badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 text-sm font-medium text-white/80 shadow-2xl">
              <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full animate-pulse"></div>
              <span>Enterprise-Grade Security</span>
              <div
                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Main headline with enhanced typography */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
              <span className="block text-white drop-shadow-2xl">
                Unlock the
              </span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Future
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 blur-2xl -z-10"></div>
              </span>
              <span className="block text-white drop-shadow-2xl">
                of Crypto
              </span>
            </h1>

            {/* Enhanced tagline */}
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Revolutionary cryptography tools powered by
                <span className="font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}
                  cutting-edge algorithms
                </span>
              </p>

              <p className="text-lg text-white/60 max-w-xl mx-auto lg:mx-0">
                Experience lightning-fast Base64 encoding and JWT token
                generation with military-grade security protocols.
              </p>
            </div>

         

           
            {/* Trust indicators */}
            <div className="pt-8 space-y-4">
              <p className="text-white/40 text-sm font-medium">
                Trusted by developers worldwide
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                {["256-bit", "GDPR", "SOC2", "ISO27001"].map((cert, i) => (
                  <div
                    key={i}
                    className="text-white/60 font-mono text-sm bg-white/5 px-3 py-1 rounded border border-white/10"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Spectacular 3D-style visualization */}
          <div className="flex  relative">
            <div className="relative group">
              {/* Main container with advanced effects */}
              <div className="relative w-[400px] h-[300px] sm:w-[450px] sm:h-[400px] lg:w-[500px]  perspective-1000">
                {/* Floating cards stack */}
                <div className="absolute inset-0 transform-gpu">
                  {/* Base card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl transform rotate-3 group-hover:rotate-1 transition-transform duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-[2rem]"></div>
                  </div>

                  {/* Middle card */}
                  <div className="absolute inset-2 bg-gradient-to-br from-slate-800/95 via-slate-700/95 to-slate-800/95 backdrop-blur-2xl border border-white/20 rounded-[1.75rem] shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-700 delay-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-[1.75rem]"></div>
                  </div>

                  {/* Top card with content */}
                  <div className="absolute inset-4 bg-gradient-to-br from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-3xl border border-white/30 rounded-[1.5rem] shadow-2xl transform rotate-1 group-hover:-rotate-1 transition-transform duration-700 delay-200 overflow-hidden">
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 rounded-[1.5rem]"></div>

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center space-y-8">
                      {/* Animated lock icon */}
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-violet-500/25 animate-float">
                          <svg
                            className="w-12 h-12 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                      </div>

                      {/* Binary rain effect */}
                      <div className="space-y-2 font-mono text-xs text-green-400/60">
                        {[
                          "01101000 01100101 01101100",
                          "01110000 01101111 01110010",
                          "01110100 01100101 01100100",
                        ].map((binary, i) => (
                          <div
                            key={i}
                            className="animate-pulse"
                            style={{ animationDelay: `${i * 0.5}s` }}
                          >
                            {binary}
                          </div>
                        ))}
                      </div>

                      {/* Status indicator */}
                      <div className="flex items-center space-x-3 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-medium text-sm">
                          Encryption Active
                        </span>
                      </div>

                      {/* Floating particles */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                            style={{
                              left: `${20 + i * 10}%`,
                              top: `${30 + i * 8}%`,
                              animationDelay: `${i * 0.5}s`,
                              animationDuration: "3s",
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orbital rings */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 border border-violet-500/20 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-8 border border-cyan-500/20 rounded-full animate-reverse-spin"></div>
                  <div
                    className="absolute inset-16 border border-purple-500/20 rounded-full animate-spin-slow"
                    style={{ animationDelay: "2s" }}
                  ></div>
                </div>
              </div>

              {/* Floating decorations */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div className="absolute top-1/2 -right-4 w-6 h-6 bg-violet-400/60 rounded-full animate-bounce"></div>
              <div
                className="absolute top-1/4 -left-4 w-4 h-4 bg-cyan-400/60 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom wave with animation */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative w-full h-20 text-slate-900/50"
          fill="currentColor"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(139, 92, 246, 0.1)" }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "rgb(59, 130, 246, 0.1)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(6, 182, 212, 0.1)" }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="animate-wave"
          />
        </svg>
      </div>

      {/* Custom CSS animations in a style tag */}
      <style>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 25s linear infinite;
        }
        .animate-wave {
          animation: wave 8s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </header>
  );
}
