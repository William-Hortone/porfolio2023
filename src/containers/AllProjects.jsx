import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { allProjects } from "../constants/data";


const CURSOR_WIDTH = 32;
const HOVER_PADDING = 24;
const AllProjects = () => {
    const cursorRef = useRef(null);

    const handleMouseMove = (e) => {
        const el = e.target;
        const cursorEl = cursorRef.current;

        const isCardHover = el.classList.contains("outline-card");

        if (isCardHover) {
            const { width, height, top, left } = el.getBoundingClientRect();

            cursorEl.style.transition = "0.25s all";

            cursorEl.style.width = `${width + HOVER_PADDING}px`;
            cursorEl.style.height = `${height + HOVER_PADDING}px`;
            cursorEl.style.borderRadius = `${HOVER_PADDING / 2}px`;
            cursorEl.style.top = `${top + window.scrollY + height / 2}px`;
            cursorEl.style.left = `${left + width / 2}px`;
        } else {
            cursorEl.style.transition = "0s all";

            cursorEl.style.width = `${CURSOR_WIDTH}px`;
            cursorEl.style.height = `${CURSOR_WIDTH}px`;
            cursorEl.style.borderRadius = `${CURSOR_WIDTH}px`;
            cursorEl.style.top = `${e.clientY + window.scrollY}px`;
            cursorEl.style.left = `${e.clientX}px`;
        }
    };
    return (
        <>
            <section
                onMouseMove={handleMouseMove}
                className="h-auto px-8 py-24 overflow-hidden "
            >
                <div className="grid w-full max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
                    {allProjects.map((project, index) => (
                        <Card key={index} project={project} />
                    ))}
                </div>

                <Cursor cursorRef={cursorRef} />
            </section>
        </>
    )
}

export default AllProjects



const Card = ({ project }) => {
    return (
        <a
            href={project.link}
            target="blank"
            style={{
                backgroundImage: `url(${project.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="outline-card  h-[300px]  flex aspect-square w-full flex-col justify-end overflow-hidden rounded-lg bg-neutral-400 bg-[size:100%] shadow-xl shadow-neutral-900/30 transition-[background-size] duration-500 hover:bg-[size:110%]"
        >
            <div className="flex items-center justify-between p-6 pt-8 text-xl font-medium pointer-events-none text-neutral-700 bg-gradient-to-t from-white to-black/0 md:text-2xl">
                <h3 className="font-fontBase ">{project.title}</h3>
                <FiArrowRight />
            </div>
        </a>
    );
};

const Cursor = ({ cursorRef }) => {
    return (
        <div
            ref={cursorRef}
            style={{
                width: 0,
                height: 0,
                borderRadius: CURSOR_WIDTH,
                top: 0,
                left: 0,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 border pointer-events-none hover-cursor border-neutral-50"
        />
    );
};
