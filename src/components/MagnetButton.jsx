// import {
//     motion,
//     useMotionTemplate,
//     useMotionValue,
//     useSpring,
// } from "framer-motion";
// import { useRef } from "react";
// import { MdOutlineArrowUpward } from "react-icons/md";

// const MagnetButtonE = () => {
//     return (
//         <div className="grid min-h-[400px] place-content-center bg-violet-200 p-4">
//             <MagnetButton />
//         </div>
//     );
// };

// const MagnetButton = () => {
//     const ref = useRef(null);

//     const x = useMotionValue(0);
//     const y = useMotionValue(0);

//     const xSpring = useSpring(x, {
//         mass: 3,
//         stiffness: 400,
//         damping: 50,
//     });
//     const ySpring = useSpring(y, {
//         mass: 3,
//         stiffness: 400,
//         damping: 50,
//     });

//     const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

//     const handleMouseMove = (e) => {
//         if (!ref.current) return;

//         const { height, width, left, top } = ref.current.getBoundingClientRect();

//         x.set(e.clientX - (left + width / 2));
//         y.set(e.clientY - (top + height / 2));
//     };

//     const handleMouseLeave = () => {
//         x.set(0);
//         y.set(0);
//     };

//     return (
//         <motion.button
//             ref={ref}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             style={{ transform }}
//             transition={{ type: "spring", stiffness: 200, damping: 20 }}
//             className="group relative grid h-[220px] w-[220px] place-content-center rounded-full border-2 border-black transition-colors duration-700 ease-out"
//         >
//             <MdOutlineArrowUpward className="relative z-10 text-black transition-all duration-700 ease-out rotate-45 pointer-events-none text-7xl group-hover:rotate-90" />

//             <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out scale-0 bg-white rounded-full pointer-events-none group-hover:scale-100" />

//             <motion.svg
//                 initial={{ rotate: 0 }}
//                 animate={{ rotate: 360 }}
//                 transition={{
//                     duration: 25,
//                     repeat: Infinity,
//                     repeatType: "loop",
//                     ease: "linear",
//                 }}
//                 style={{
//                     top: "50%",
//                     left: "50%",
//                     x: "-50%",
//                     y: "-50%",
//                 }}
//                 width="200"
//                 height="200"
//                 className="absolute z-10 pointer-events-none"
//             >
//                 <path
//                     id="circlePath"
//                     d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
//                     fill="none"
//                 />
//                 <text>
//                     <textPath
//                         href="#circlePath"
//                         fill="black"
//                         className="text-xl font-light uppercase transition-opacity duration-700 ease-out opacity-0 fill-black group-hover:opacity-100"
//                     >
//                         You can write whatever text you want around this circle
//                     </textPath>
//                 </text>
//             </motion.svg>
//         </motion.button>
//     );
// };

// export default MagnetButton;