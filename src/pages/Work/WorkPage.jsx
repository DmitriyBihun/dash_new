import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

import  projects  from '../../data/projects';
import './WorkPage.css';

gsap.registerPlugin(ScrollTrigger);

const WorkPage = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const lenis = new Lenis({
            lerp: 0.07,
        });

        const updateLenis = (time) => {
            lenis.raf(time * 1000);
        };

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(updateLenis);
        gsap.ticker.lagSmoothing(0);

        // 2. Внутренний параллакс картинок (работает ВСЕГДА, на любых экранах)
        const imgContainers = gsap.utils.toArray('.img-container');

        imgContainers.forEach((container) => {
            const img = container.querySelector('img');

            gsap.fromTo(
                img,
                { yPercent: -15 },
                {
                    yPercent: 15,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );
        });

        // 3. Асимметричный параллакс колонок (только для экранов шире 768px)
        const mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            const rightColumnItems = gsap.utils.toArray(
                '.gallery-item:nth-child(5n + 3), .gallery-item:nth-child(5n + 5)'
            );

            rightColumnItems.forEach((item) => {
                gsap.fromTo(
                    item,
                    { y: 100 },
                    {
                        y: -100,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 1,
                        },
                    }
                );
            });
        });

        return () => {
            gsap.ticker.remove(updateLenis);
            mm.revert();
            lenis.destroy();
        };
    }, { scope: containerRef });

    return (
        // Вешаем ref на главный контейнер
        <div className="projects-gallery" ref={containerRef}>
            {projects.map((project) => (
                <div className="gallery-item" key={project.id}>
                    <div className="item-content">

                        <div className="item-stack">
                            {project.stack.map((tech, i) => (
                                <span key={i}>[{tech.toUpperCase()}]</span>
                            ))}
                        </div>

                        <a
                            href={project.link}
                            className="img-container"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                            />
                        </a>

                        <div className="item-details">
                            <a
                                href={project.link}
                                className="item-title"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.title}
                            </a>
                            <span className="item-description">
                                &nbsp;{project.description}
                            </span>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkPage;
