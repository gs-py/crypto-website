import  { useState, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Base64 character set
const base64Chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

interface Step {
  title: string;
  data: string;
  type: "binary" | "chunks" | "mapping" | "base64" | "final";
}

export default function Base64Visualizer(): JSX.Element {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [steps, setSteps] = useState<Step[]>([]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleConvert = async (): Promise<void> => {
    if (!input.trim()) return;

    setIsAnimating(true);
    setSteps([]);
    setOutput("");

    // Simulate processing delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      if (mode === "encode") {
        const binary = textToBinary(input);
        const chunks = chunkBinary(binary);
        const mapped = chunks.map((c) => base64Chars[parseInt(c, 2)] || "=");
        const encoded = btoa(input);

        setSteps([
          { title: "Convert text to binary", data: binary, type: "binary" },
          {
            title: "Split into 6-bit chunks",
            data: chunks.join(" "),
            type: "chunks",
          },
          {
            title: "Map chunks to Base64 chars",
            data: mapped.join(" "),
            type: "mapping",
          },
          { title: "Final Base64 output", data: encoded, type: "final" },
        ]);
        setOutput(encoded);
      } else {
        const decoded = atob(input);
        setSteps([
          { title: "Base64 input string", data: input, type: "base64" },
          {
            title: "Convert to binary",
            data: textToBinary(decoded),
            type: "binary",
          },
          { title: "Decode binary to text", data: decoded, type: "final" },
        ]);
        setOutput(decoded);
      }
    } catch (error) {
      setOutput("⚠️ Invalid input!");
      setSteps([]);
    }
    setIsAnimating(false);
  };

  const textToBinary = (text: string): string =>
    text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");

  const chunkBinary = (binary: string): string[] => {
    const cleaned = binary.replace(/\s+/g, "");
    const padded = cleaned.padEnd(Math.ceil(cleaned.length / 6) * 6, "0");
    const chunks = padded.match(/.{1,6}/g) || [];
    return chunks;
  };

  const getStepConfig = (type: Step["type"]) => {
    const configs = {
      binary: {
        color: "from-emerald-400 to-teal-600",
        icon: "01",
        bg: "from-emerald-500/10 to-teal-500/10",
      },
      chunks: {
        color: "from-blue-400 to-cyan-600",
        icon: "⚡",
        bg: "from-blue-500/10 to-cyan-500/10",
      },
      mapping: {
        color: "from-purple-400 to-indigo-600",
        icon: "🔗",
        bg: "from-purple-500/10 to-indigo-500/10",
      },
      base64: {
        color: "from-orange-400 to-red-600",
        icon: "📝",
        bg: "from-orange-500/10 to-red-500/10",
      },
      final: {
        color: "from-pink-400 to-rose-600",
        icon: "✨",
        bg: "from-pink-500/10 to-rose-500/10",
      },
    };
    return configs[type];
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    }),
    exit: {
      opacity: 0,
      x: 50,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5 rounded-full"
        />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", damping: 10 }}
          className="pt-12 pb-8"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="mb-6"
            >
              <h1 className="text-7xl md:text-8xl font-black mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Base64
                </span>
              </h1>
              <div className="text-3xl md:text-4xl font-bold text-slate-300">
                Visualizer
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              Experience the magic of Base64 encoding and decoding with
              beautiful, step-by-step visualizations that make complex concepts
              crystal clear.
            </motion.p>
          </div>
        </motion.header>

        {/* Main Content */}
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 pb-12"
        >
          <div className="max-w-6xl mx-auto">
            {/* Control Panel */}
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mb-8 shadow-2xl"
            >
              {/* Mode Toggle */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center mb-8"
              >
                <div className="bg-slate-800/80 p-2 rounded-2xl border border-white/20 shadow-inner">
                  {(["encode", "decode"] as const).map((modeOption) => (
                    <motion.button
                      key={modeOption}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setMode(modeOption)}
                      className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                        mode === modeOption
                          ? `bg-gradient-to-r ${
                              modeOption === "encode"
                                ? "from-blue-500 to-purple-500"
                                : "from-purple-500 to-pink-500"
                            } text-white shadow-lg`
                          : "text-slate-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {modeOption === "encode" ? "🔐 Encode" : "🔓 Decode"}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Input Section */}
              <motion.div variants={itemVariants} className="mb-8">
                <motion.label
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="block text-slate-300 text-lg font-semibold mb-4"
                >
                  {mode === "encode"
                    ? "📝 Enter text to encode:"
                    : "🔤 Enter Base64 to decode:"}
                </motion.label>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative group"
                >
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                      mode === "encode"
                        ? "Type your message here... Try 'Hello World!'"
                        : "Paste your Base64 string here... Try 'SGVsbG8gV29ybGQh'"
                    }
                    className="w-full p-6 rounded-2xl bg-slate-800/50 border-2 border-white/20 text-white placeholder-slate-400 resize-none focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500/50 transition-all duration-300 text-lg leading-relaxed"
                    rows={6}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </motion.div>

              {/* Convert Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleConvert}
                  disabled={!input.trim() || isAnimating}
                  className={`w-full py-6 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-500 relative overflow-hidden ${
                    !input.trim() || isAnimating
                      ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-purple-500/25"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isAnimating ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center space-x-3"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                        />
                        <span>Converting...</span>
                      </motion.div>
                    ) : (
                      <motion.span
                        key="convert"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        ✨ Convert & Visualize
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Steps Visualization */}
            <AnimatePresence>
              {steps.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="mb-8"
                >
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-4xl font-bold text-center text-slate-200 mb-12"
                  >
                    🔍 Step-by-Step Process
                  </motion.h2>

                  <div className="grid gap-8">
                    {steps.map((step, index) => {
                      const config = getStepConfig(step.type);
                      return (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={stepVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="relative"
                        >
                          <div
                            className={`bg-gradient-to-br ${config.bg} backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl`}
                          >
                            {/* Step header */}
                            <div className="p-6 border-b border-white/10">
                              <div className="flex items-center space-x-4">
                                <motion.div
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  transition={{
                                    delay: index * 0.3 + 0.2,
                                    type: "spring",
                                  }}
                                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${config.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                                >
                                  {config.icon}
                                </motion.div>
                                <div>
                                  <h3 className="text-2xl font-bold text-slate-200">
                                    Step {index + 1}
                                  </h3>
                                  <p className="text-slate-400 text-lg">
                                    {step.title}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Step content */}
                            <div className="p-6">
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.3 + 0.4 }}
                                className="bg-slate-900/60 rounded-2xl p-6 border border-white/10"
                              >
                                <pre className="text-slate-300 text-lg leading-relaxed font-mono overflow-x-auto whitespace-pre-wrap break-all">
                                  {step.data}
                                </pre>
                              </motion.div>
                            </div>

                            {/* Animated border */}
                            <motion.div
                              className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${config.color} opacity-20`}
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 0.1 }}
                              transition={{ delay: index * 0.3, duration: 0.8 }}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            {/* Final Output */}
            <AnimatePresence>
              {output && !isAnimating && (
                <motion.section
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -50 }}
                  transition={{
                    delay: steps.length * 0.3,
                    type: "spring",
                    damping: 10,
                  }}
                  className="relative"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <div className="p-8">
                      <motion.h3
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="text-3xl font-bold text-center text-slate-200 mb-6 flex items-center justify-center space-x-3"
                      >
                        <span className="text-4xl">🎉</span>
                        <span>Final Result</span>
                      </motion.h3>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-slate-900/60 rounded-2xl p-6 border border-emerald-500/20"
                      >
                        <div className="flex items-start space-x-4">
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6, type: "spring" }}
                            className="text-emerald-400 text-2xl"
                          >
                            ✅
                          </motion.span>
                          <pre className="text-slate-200 text-lg leading-relaxed flex-1 font-mono overflow-x-auto whitespace-pre-wrap break-all">
                            {output}
                          </pre>
                        </div>
                      </motion.div>
                    </div>

                    {/* Success animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        delay: 0.8,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </motion.main>
      </div>
    </div>
  );
}
