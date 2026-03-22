import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ClipPathTitle from '../components/ClipPathTitle';
import VideoPinSection from '../components/VideoPinSection';
import { ScrollTrigger } from "gsap/all";



const BenefitSection = () => {
    useGSAP(() => {
        const revealT1 = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: '.benefit-section',
                start: 'top 60%',
                end: 'top top',
                scrub: 1.5,

            },
        });

        revealT1.to('.benefit-section .first-title', {
            duration: 1,
            opacity: 1,
            ease: 'circ.out',
            clipPath: 'polygon ( 0 0 , 100% 0, 100% 100%, 0 100%)',
        })

            .to('.benefit-section .second-title', {
                duration: 1,
                opacity: 1,
                ease: 'circ.out',
                clipPath: 'polygon ( 0 0 , 100% 0, 100% 100%, 0 100%)',
            })
            .to('.benefit-section .third-title', {
                duration: 1,
                opacity: 1,
                ease: 'circ.out',
                clipPath: 'polygon ( 0 0 , 100% 0, 100% 100%, 0 100%)',
            })
            .to('.benefit-section .fourth-title', {
                duration: 1,
                opacity: 1,
                ease: 'circ.out',
                clipPath: 'polygon ( 0 0 , 100% 0, 100% 100%, 0 100%)',
            })
    })

    return (
        <section className="benefit-section" id="benefits">
            <div className="container mx-auto pt-20">
                <div className="col-center">
                    <p>
                        Unlock the Advantages:<br />
                        Explore the Key Benefits of Choosing SPYLT
                    </p>

                    <div className="mt-20 col-center">
                        <ClipPathTitle
                            title={'Shelf stable'}
                            color={'#faeade'}
                            bg={'#c88e64'}
                            className={'first-title'}
                            border={'#222123'}
                        />

                        <ClipPathTitle
                            title={' Protein + Caffeine'}
                            color={'#222123'}
                            bg={'#faeade'}
                            className={'second-title'}
                            border={'#222123'}
                        />

                        <ClipPathTitle
                            title={'Infinitely Recyclable'}
                            color={'#faeade'}
                            bg={'#7f3b2d'}
                            className={'third-title'}
                            border={'#222123'}
                        />

                        <ClipPathTitle
                            title={'Lactose free'}
                            color={'#2e2d2f'}
                            bg={'#fed775'}
                            className={'third-title'}
                            border={'#222123'}
                        />
                    </div>

                    <div className="md:mt-0 mt-10">
                        <p>And much more....</p>
                    </div>
                </div>
            </div>
            <div className="relative overlay-box">
                <VideoPinSection />
            </div>
        </section>
    );
};

export default BenefitSection;
