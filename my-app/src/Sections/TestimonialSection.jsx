import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { cards } from '../constants';


const TestimonialSection = () => {
    const vdRef = useRef([]);

    useGSAP(() => {
        gsap.set('.testimonials-section', {
            marginTop: '-140vh',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.testimonial-section',
                start: 'top bottom',
                end: '200% top',
                scrub: true,
            },
        });

        tl.to('.testimonial-section .sec-title', {
            xPercent: 25,

        },
            '<'
        )
            .to('.testimonial-section .third-title', {
                xPercent: -50,

            },
                '<'
            )
        const pinT1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.testimonial-section',
                start: '10% top',
                end: '20% top',
                scrub: 1.5,
                pin: true
            },
        });


        pinT1.from('.vd-card', {
            yPercent: 150,
            ease: 'power1.inOut',
            stagger: 0.02,
        });
    });


    const handlePlay = (index) => {
        const video = vdRef.current[index];
        video.play();
    };

    const handlePause = (index) => {
        const video = vdRef.current[index];
        video.pause();
    };

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="absolute size-full flex flex-col items-center pt-[5vw]">
                <h1 className="first-title text-black"></h1>
                <h1 className="second-title text-light-brown"></h1>
                <h1 className="third-title tex-black"></h1>
            </div>

            <div className="pin-box">
                {cards.map((index, card) => {
                    <div key={index}
                        className={`vd-card %{card.translation} ${card.rotation}`}
                        onMouseEnter={() => handlePlay(index)}
                        onMouseLeave={() => handlePause(index)}>
                        <video ref={(el) => (vdRef.current[index] = el)} src={card.src}
                            playsInline loop muted
                            className="object-cover size-ful"></video>
                    </div>
                })}
            </div>

        </section>
    )
}

export default TestimonialSection
