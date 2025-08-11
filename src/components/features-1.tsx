import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import type { ReactNode } from "react";

export default function Features() {
  return (
    <section className="relative bg-gradient-to-br from-[#171c3d] via-black to-cyan-950 py-16 md:py-32 overflow-hidden">
      {/* Ambient background lighting effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-500/20 to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-cyan-500/20 to-transparent blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-radial from-purple-500/15 to-transparent blur-2xl animate-pulse [animation-delay:2s]"></div>
      </div>

      <div className="@container mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl bg-gradient-to-r from-violet-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
            Built to cover your needs
          </h2>
          <p className="mt-4 text-violet-100/80 text-lg drop-shadow-lg">
            Libero sapiente aliquam quibusdam aspernatur, praesentium iusto
            repellendus.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-8 *:text-center md:mt-16">
          <Card className="group relative bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-violet-800/40 border border-violet-500/30 shadow-2xl shadow-violet-900/50 hover:shadow-violet-500/30 hover:shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-violet-400/50 overflow-hidden">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="pb-3 relative z-10">
              <CardDecorator>
                <Zap
                  className="size-6 text-violet-300 drop-shadow-lg group-hover:text-violet-200 transition-colors duration-300"
                  aria-hidden
                />
              </CardDecorator>

              <h3 className="mt-6 font-semibold text-violet-100 drop-shadow-md">
                Customizable
              </h3>
            </CardHeader>

            <CardContent className="relative z-10">
              <p className="text-sm text-violet-200/80 drop-shadow-sm">
                Extensive customization options, allowing you to tailor every
                aspect to meet your specific needs.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative bg-gradient-to-br from-purple-900/40 via-violet-900/30 to-cyan-800/40 border border-purple-500/30 shadow-2xl shadow-purple-900/50 hover:shadow-purple-500/30 hover:shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-purple-400/50 overflow-hidden">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="pb-3 relative z-10">
              <CardDecorator>
                <Settings2
                  className="size-6 text-purple-300 drop-shadow-lg group-hover:text-purple-200 transition-colors duration-300"
                  aria-hidden
                />
              </CardDecorator>

              <h3 className="mt-6 font-semibold text-purple-100 drop-shadow-md">
                You have full control
              </h3>
            </CardHeader>

            <CardContent className="relative z-10">
              <p className="mt-3 text-sm text-purple-200/80 drop-shadow-sm">
                From design elements to functionality, you have complete control
                to create a unique and personalized experience.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative bg-gradient-to-br from-cyan-900/40 via-purple-900/30 to-cyan-800/40 border border-cyan-500/30 shadow-2xl shadow-cyan-900/50 hover:shadow-cyan-500/30 hover:shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-cyan-400/50 overflow-hidden">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="pb-3 relative z-10">
              <CardDecorator>
                <Sparkles
                  className="size-6 text-cyan-300 drop-shadow-lg group-hover:text-cyan-200 transition-colors duration-300"
                  aria-hidden
                />
              </CardDecorator>

              <h3 className="mt-6 font-semibold text-cyan-100 drop-shadow-md">
                Powered By AI
              </h3>
            </CardHeader>

            <CardContent className="relative z-10">
              <p className="mt-3 text-sm text-cyan-200/80 drop-shadow-sm">
                Elements to functionality, you have complete control to create a
                unique experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto py-5 size-[100px] duration-500 group-hover:scale-110">
    {/* Outer glow ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

    {/* Grid pattern with ambient lighting */}
    <div className="relative overflow-hidden rounded-lg">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:24px_24px] group-hover:bg-[linear-gradient(to_right,rgba(139,92,246,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.2)_1px,transparent_1px)] transition-all duration-500"
      />

      {/* Radial ambient light */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-radial from-violet-500/10 via-purple-500/5 to-transparent group-hover:from-violet-400/20 group-hover:via-purple-400/10 transition-all duration-500"
      />

      {/* Icon container with layered shadows and glows */}
      <div className="relative bg-gradient-to-br from-violet-800/60 via-purple-800/50 to-violet-900/60 border border-violet-400/30 group-hover:border-violet-300/50 group-hover:shadow-lg group-hover:shadow-violet-500/50 absolute inset-0 m-auto flex size-12 items-center justify-center backdrop-blur-sm transition-all duration-500 rounded-lg group-hover:bg-gradient-to-br group-hover:from-violet-700/70 group-hover:via-purple-700/60 group-hover:to-violet-800/70">
        {children}
      </div>
    </div>
  </div>
);
