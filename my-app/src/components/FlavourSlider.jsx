import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { flavourlists  } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const FlavourSlider = () => {
    const sliderRef = useRef();

    useGSAP(() => {
        ScrollTrigger.matchMedia({
            '(min-width:1025px)': () => {
                const scrollAmount  =
                    sliderRef.current.scrollWidth - window.innerWidth;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.flavour-section',
                        start: ' 2% top',
                        end: `+=${scrollAmount + 1500}px`,
                        scrub: true,
                        pin: true
                    },
                });

                tl.to('.flavour-section', {
                    x: `-${scrollAmount - 1500}px`,
                    ease: 'power1.inOut',
                });

            },
            '(max-width: 1024px)': () => {
                gsap.set('.flavour-section', { clearProps: "all" });
            },
        });

        const titleT1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.flavour-section',
                start: ' top top',
                end: 'bottom 80%',
                scrub: true, 
            },
        });
        titleT1.to('.first-text-split', {
            xPercent: -30,
            ease: 'power1.inOut',
        })

            .to('.flavour-text-scroll', {
                xPercent: -22,
                ease: 'power1.inOut',
            },
                '<'
            )
            .to('.second-text-split', {
                xPercent: -10,
                ease: 'power1.inOut',
            },
                '<'
            )
    });

    return(
        <div ref={sliderRef} className="slider-wrapper">
         <div className="flavours">
            {flavourlists.map((flavour) =>(
                <div key={flavour.name}
                className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] h-80 flex-none ${flavour.rotation}`}
                >
                 <img src={`public/images/${flavour.color}-bg.svg`} 
                 alt="" 
                 className="absolute bottom 0"/>

                 <img src={`public/images/${flavour.color}-drink.webp`} 
                 alt="" 
                 className="drinks"/>

                 <img src={`public/images/${flavour.color}-element.webp`} 
                 alt="" 
                 className="elements"/>

                 <h1>{flavour.name}</h1>
                </div>
            ))}
         </div>
        </div>
    )
}

export default FlavourSlider
