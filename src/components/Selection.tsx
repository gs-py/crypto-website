import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceSelection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: "base64",
      link: "/base64",
      title: "Base64",
      subtitle: "Encode & Decode",
      description:
        "Transform your data with lightning-fast Base64 encoding and decoding. Perfect for data transmission and storage.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-teal-500/10",
      glowColor: "shadow-blue-500/25",
      features: [
        "Instant Processing",
        "Bulk Operations",
        "URL Safe Encoding",
        "Copy & Download",
      ],
      comingSoon: false,
    },
    {
      id: "jwt",
      title: "JWT Token",
      link: "/jwt-token",
      subtitle: "Generate & Verify",
      description:
        "Create and validate JSON Web Tokens with HS256, RS256, and ES256 algorithms. Enterprise-grade security.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      gradient: "from-violet-500 via-purple-500 to-indigo-500",
      bgGradient: "from-violet-500/10 via-purple-500/10 to-indigo-500/10",
      glowColor: "shadow-violet-500/25",
      features: [
        "Multiple Algorithms",
        "Token Validation",
        "Custom Claims",
        "Expiry Management",
      ],
      comingSoon: false,
    },
    {
      id: "aes256",
      title: "AES-256",
      subtitle: "Encryption & Decryption",
      description:
        "Military-grade AES-256 encryption for maximum data protection. Secure your sensitive information.",
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
      gradient: "from-emerald-500 via-green-500 to-cyan-500",
      bgGradient: "from-emerald-500/10 via-green-500/10 to-cyan-500/10",
      glowColor: "shadow-emerald-500/25",
      features: [
        "256-bit Security",
        "CBC & GCM Modes",
        "Key Generation",
        "Batch Processing",
      ],
      comingSoon: true,
    },
  ];

  const navigate = useNavigate()
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-slate-900/50 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-white/80 font-medium">Choose Your Tool</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Select Your
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Cryptography Service
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Choose from our suite of professional-grade cryptography tools, each
            designed for maximum security and ease of use.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative"
              onClick={() => navigate(`${service.link}`) }
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Card container */}
              <div
                className={`
                relative h-[420px] bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 
                backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden
                transform transition-all duration-500 cursor-pointer
                ${
                  hoveredService === service.id
                    ? "scale-105 -translate-y-2"
                    : "hover:scale-[1.02]"
                }
                ${
                  hoveredService === service.id
                    ? service.glowColor
                    : "shadow-xl"
                }
                ${hoveredService === service.id ? "shadow-2xl" : ""}
              `}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Animated border */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                >
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} p-0.5`}
                  >
                    <div className="w-full h-full rounded-3xl bg-slate-900/95"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Coming soon badge */}
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl border border-amber-500/30 rounded-full px-3 py-1">
                      <span className="text-amber-400 text-xs font-medium">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`
                      inline-flex items-center justify-center w-20 h-20 rounded-2xl 
                      bg-gradient-to-br ${service.gradient} text-white shadow-xl
                      ${hoveredService === service.id ? "animate-pulse" : ""}
                      transition-all duration-300
                    `}
                    >
                      {service.icon}
                    </div>
                  </div>

                  {/* Title and subtitle */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    >
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                        ></div>
                        <span className="text-white/60 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action button */}
                  <button
                    onClick={() => navigate(service.link || "#")}
                    disabled={service.comingSoon}
                    className={`
                      w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300
                      ${
                        service.comingSoon
                          ? "bg-white/5 text-white/40 cursor-not-allowed border border-white/10"
                          : `bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0`
                      }
                      ${
                        !service.comingSoon && hoveredService === service.id
                          ? service.glowColor
                          : ""
                      }
                    `}
                  >
                    {service.comingSoon ? "Coming Soon" : "Select Tool"}
                  </button>
                </div>

                {/* Floating particles */}
                {hoveredService === service.id && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${service.gradient} rounded-full animate-float opacity-60`}
                        style={{
                          left: `${20 + i * 12}%`,
                          top: `${30 + i * 10}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: "2s",
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>

              {/* Floating decoration */}
              <div
                className={`
                absolute -top-2 -right-2 w-6 h-6 rounded-full 
                bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-60 
                transition-opacity duration-500 animate-pulse
              `}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/50 mb-6">
            Need help choosing the right tool for your project?
          </p>
          <button className="group inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300">
            <span>View Comparison Guide</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
