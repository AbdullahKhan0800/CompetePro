import React, { useEffect, useState, useRef } from 'react';
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const ParallaxScroll = ({
    images,
    className
}) => {
    const gridRef = useRef();
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const updateWindowSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', updateWindowSize);
        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };
    }, []);

    const { scrollYProgress } = useScroll();

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -400]);

    const third = Math.ceil(images.length / 3);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    const gridRefScroll = useRef();

    useEffect(() => {
        const scrollContainer = document.querySelector('.scroll-content');
        const slider = gridRefScroll.current;
        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
                if (mutation.type === "attributes") {
                    let mouseScrollY = mutation.target.getAttribute('style').split('translate3d(0px, ')[1].split('px,')[0]
                    const scrollY =  mouseScrollY / 2
                    slider.style.transform = `translateY(${scrollY}px)` 
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(scrollContainer, {
            attributes: true
        });
    }, []);

    return (
        <div
            className={cn(`2xl:h-[800px] xl:h-[700px] lg:h-[650px] md:h-[500px] sm:h-[550px] h-[400px] items-start w-full overflow-hidden`, className)}
            ref={gridRef}
        >
            <div
                className=" grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 items-start"
                ref={gridRefScroll}
            >
                <div className="grid">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }} // Apply the translateY motion value here
                            key={"grid-1" + idx}
                        >
                            <img
                                src={el}
                                className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="auto"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid">
                    {secondPart.map((el, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            <img
                                src={el}
                                className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="auto"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid">
                    {thirdPart.map((el, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                            <img
                                src={el}
                                className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                                height="auto"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
