import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextPressure from "../components/animations/TextPressure";
import images from "../constants/images";

const ImageGridScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    return (
        <>
            <section
                ref={targetRef}
                className="h-[180vh] md:h-[350vh] pt-[10rem] md:pt-[20rem] bg-[#070105]"
            >
                <div className="sticky top-0 z-0 grid h-screen grid-cols-1 gap-4 p-4 overflow-hidden md:grid-cols-3 md:grid-rows-3">
                    <Copy scrollYProgress={scrollYProgress} />
                    <Images scrollYProgress={scrollYProgress} />
                    <Circles />
                </div>
            </section>

            <div className="flex flex-col items-center justify-center h-auto gap-24 text-white py-36 bg-slate-950">
                <TextPressure
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    size="8vw"
                >
                    About me
                </TextPressure>
            </div>
        </>
    );
};

const Copy = ({ scrollYProgress }) => {
    const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
    const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
    const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

    return (
        <motion.div
            style={{
                scale: copyScale,
                opacity: copyOpacity,
                y: copyY,
            }}
            className="absolute z-20 flex flex-col items-center justify-center w-full h-screen px-6 md:px-8"
        >
            <h1 className="max-w-xl text-3xl font-bold text-center text-white uppercase md:text-5xl font-base md:text-7xl">
                Hackathons & certificates
            </h1>
            <p className="max-w-md my-6 text-sm text-center md:max-w-xl md:text-base text-stone-200">
                I am a passionate Software Engineer driven by curiosity and the
                desire to build solutions that make a real difference. I thrive
                on working with exciting, large-scale projects that have the
                potential to create meaningful impact. Always motivated to push
                boundaries, I continually sharpen my skills and take on
                challenges that fuel both personal and professional growth.
            </p>
        </motion.div>
    );
};

const Images = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

    // Desktop transforms
    const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);
    const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
    const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);
    const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
    const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
    const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
    const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);
    const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
    const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
    const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
    const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

    return (
        <>
            {/* Mobile: show only 2 images */}
            <div className="grid block grid-cols-2 gap-4 md:hidden">
                <motion.div
                    className="w-full h-48 rounded-lg"
                    style={{
                        backgroundImage: `url(${images.junction2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]),
                        scale,
                    }}
                />
                <motion.div
                    className="w-full h-48 rounded-lg"
                    style={{
                        backgroundImage: `url(${images.junction5})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]),
                        scale,
                    }}
                />
            </div>

            {/* Desktop layout */}
            <div className="hidden md:contents">
                <motion.div
                    className="relative z-10 col-span-2"
                    style={{
                        scale,
                        x: image1Offset,
                        y: image1Offset,
                        opacity: imageOpacity,
                    }}
                >
                    <div className="grid w-full h-full grid-cols-2 gap-4">
                        <div
                            className="w-full h-full"
                            style={{
                                backgroundImage: `url(${images.junction2})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                opacity: imageOpacity,
                            }}
                        />
                        <div
                            className="w-full h-full"
                            style={{
                                backgroundImage: `url(${images.junction5})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                opacity: imageOpacity,
                            }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="relative z-10 row-span-2"
                    style={{
                        backgroundImage: `url(${images.wh})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        scale,
                        x: image2OffsetX,
                        y: image2OffsetY,
                        opacity: imageOpacity,
                    }}
                />

                <motion.div
                    className="relative z-10 row-span-2"
                    style={{
                        backgroundImage: `url(${images.neza5})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        scale,
                        x: image3OffsetX,
                        y: image3OffsetY,
                        opacity: imageOpacity,
                    }}
                />
                <motion.div
                    className="relative z-10"
                    style={{
                        backgroundImage: `url(${images.junction3})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        scale,
                        x: image4OffsetX,
                        y: image4OffsetY,
                        opacity: imageOpacity,
                    }}
                />

                <motion.div
                    className="relative z-10"
                    style={{
                        backgroundImage: `url(${images.certificate})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        scale,
                        x: image5OffsetX,
                        y: image5OffsetY,
                        opacity: imageOpacity,
                    }}
                />
                <motion.div
                    className="relative z-10"
                    style={{
                        backgroundImage: `url(${images.neza})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        scale,
                        x: image6OffsetX,
                        y: image6OffsetY,
                        opacity: imageOpacity,
                    }}
                />
            </div>
        </>
    );
};

const Circles = () => (
    <>
        <div className="hidden md:block w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
        <div className="hidden md:block w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
    </>
);

export default ImageGridScroll;
