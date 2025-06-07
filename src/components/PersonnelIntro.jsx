import React, { useEffect, useState } from "react";
import { FiZap } from "react-icons/fi";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FiStar } from "react-icons/fi";
import { Highlight } from "prism-react-renderer";

export const PersonnelIntro = () => {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-200">
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        <section className="relative z-20 py-20 md:py-36">
          <span className="block p-3 mx-auto mb-3 text-3xl rounded shadow-md w-fit bg-gradient-to-br from-slate-800 to-slate-950 shadow-indigo-900">
            <FiZap />
          </span>
          <h2 className="mb-3 text-3xl font-semibold leading-tight text-center sm:text-4xl">
            I don't just write code, I craft solutions.
          </h2>
          <p className="mb-6 text-base leading-snug text-center text-slate-400 sm:text-lg sm:leading-snug md:text-xl md:leading-snug">
           Clean logic. Real impact. Here's what sets me apart.
          </p>
          <CodeCard />
        </section>
      </div>
      <BGGrid />
    </div>
  );
};

const BGGrid = () => {
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 27 75 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
      className="absolute top-0 bottom-0 left-0 right-0"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/0 to-slate-950/80" />
      <Beams />
    </div>
  );
};

const Beams = () => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,
      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      top: GRID_BOX_SIZE * 12,
      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 10,
        delay: 4,
      },
    },
    {
      top: GRID_BOX_SIZE * 3,
      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },
    {
      top: GRID_BOX_SIZE * 9,
      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
      transition: {
        duration: 2,
        repeatDelay: 7.5,
        delay: 3.5,
      },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
      transition: {
        duration: 3,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      top: GRID_BOX_SIZE * 2,
      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
      transition: {
        duration: 5,
        repeatDelay: 5,
        delay: 5,
      },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

const Beam = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: 32 * 8,
      }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1.5,
        ...transition,
      }}
      style={{
        top,
        left,
      }}
      className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-indigo-500/0 to-indigo-500"
    />
  );
};

const CodeCard = () => {
  const [selected, setSelected] = useState("js");

  return (
    <Card className="max-w-3xl pt-3 mx-auto">
      <div className="flex items-center justify-between px-6 pb-3 mb-6 -mx-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <ToggleChip
            onClick={() => setSelected("js")}
            selected={selected === "js"}
          >
            React JS
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("py")}
            selected={selected === "py"}
          >
            React Native
          </ToggleChip>
        </div>
        <button
          className={`
              relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md 
              bg-gradient-to-br from-slate-800 to-slate-950 px-3 py-1.5
             text-xs font-medium text-slate-50
             transition-all duration-300
              
              before:absolute before:inset-0
              before:-z-10 before:translate-y-[200%]
              before:scale-[2.5]
              before:rounded-[100%] before:bg-slate-100
              before:transition-transform before:duration-500
              before:content-[""]
      
              hover:scale-105 hover:text-slate-900
              hover:before:translate-y-[0%]
              active:scale-100`}
        >
          <SiGithub />
          <FiStar className="hidden sm:inline" />
          <span className="hidden sm:inline">1,234</span>
        </button>
      </div>
      <div className="px-6 -mx-6 overflow-x-auto">
        <Markup code={selected === "js" ? javascriptCode : pythonCode} />
      </div>
      <span className="absolute left-0 top-1/2 h-48 w-[1px] -translate-y-1/2 animate-pulse bg-gradient-to-b from-indigo-500/0 via-indigo-800 to-indigo-500/0" />
    </Card>
  );
};

const ToggleChip = ({ children, selected, onClick }) => {
  return (
    <button onClick={onClick}
      className={`rounded px-1.5 py-0.5 text-sm font-medium transition-colors ${selected ? "bg-indigo-600 text-slate-50" : "bg-slate-900 text-slate-50 hover:bg-slate-700"}`}
    >
      {children}
    </button>
  );
};

const Card = ({ className, children }) => {
  return (
    <motion.div
      initial={{
        filter: "blur(4px)",
      }}
      whileInView={{
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.25,
      }}
      className={`relative h-full w-full overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950/50 to-slate-900/80 p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const Markup = ({ code }) => {
  return (
    <Highlight theme={theme} code={code} language="javascript">
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span className="inline-block w-[40px] select-none text-slate-400">
                {i + 1}
              </span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const GRID_BOX_SIZE = 32;
const BEAM_WIDTH_OFFSET = 1;

const theme = {
  plain: {
    color: "#e2e8f0",
    backgroundColor: "transparent",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "#94a3b8)",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "inserted"],
      style: {
        color: "rgb(195, 232, 141)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)",
      },
    },
    {
      types: ["punctuation", "selector"],
      style: {
        color: "rgb(199, 146, 234)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(191, 199, 213)",
      },
    },
    {
      types: ["class-name", "attr-name"],
      style: {
        color: "rgb(255, 203, 107)",
      },
    },
    {
      types: ["tag", "deleted"],
      style: {
        color: "rgb(255, 85, 114)",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(137, 221, 255)",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["keyword"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
    {
      types: ["url"],
      style: {
        color: "rgb(221, 221, 221)",
      },
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "#c792e9",
        fontStyle: "normal",
      },
    },
  ],
};

const javascriptCode = `import { HardWorker, ProblemSolver, TeamPlayer } from "in-tech";
    
 
const williamHortone = () => {
  let motivation = 100;
  let excited = true;
  let keepWorking = true;
  const project = "challenging";

  if (project === "challenging") {
    motivation += 50;
    excited = true;

    while (project !== "successful") {
      keepWorking = true;
    }
  }

  return (
    <>
      <SoftwareEngineer
        name="William Hortone"
        stack={["JavaScript", "React", "Tailwind CSS", "Node.js"]}
        mindset="growth"
        values={["resilience", "curiosity", "clean code"]}
      />
    </>
  );
};

export default williamHortone;`;

const pythonCode = `import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const WilliamHortone = () => {
  const [status, setStatus] = useState("booting");

  useEffect(() => {
    const challenge = "complex";
    if (challenge) {
      setTimeout(() => setStatus("thriving"), 2000);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>William Hortone</Text>
      <Text style={styles.role}>Software Engineer</Text>
      <Text style={styles.meta}>Status: {status}</Text>
      <Text style={styles.stack}>Stack: JS  | React Native | Node.js</Text>
      <Text style={styles.traits}>Traits: Persistent | Precise | Creative</Text>
    </View>
  );
};

export default WilliamHortone;
`;

// export default PersonnelIntro