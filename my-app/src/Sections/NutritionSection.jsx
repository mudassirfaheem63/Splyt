import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useState, useEffect } from "react";
import { nutrientLists } from '../constants';
import { useMediaQuery } from "react-responsive";



const NutritionSection = () => {
    const isMobile = useMediaQuery({
        query: '(max-width:768px)',
    });

    const [lists, setlists] = useState(nutrientLists);

    useEffect(() => {
        if (isMobile) {
            setlists(nutrientLists.slice(0, 3));
        } else {
            setlists(nutrientLists);

        }
    }, [isMobile]);

    useGSAP(() => {
        const titleSplit = SplitText.create('.nutrition-title', {
            type: 'chars',
        });
        const paragraphSplit = SplitText.create('.nutrition-section p', {
            type: 'words,lines',
            linesClass: 'paragraph-line'
        });

        const contentT1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.nutrition-section',
                start: 'top center'
            },
        });
        contentT1.from(titleSplit.chars, {
            yPercent: 100,
            stagger: 0.02,
            ease: 'power2.out',
        })
            .from(paragraphSplit.words, {
                yPercent: 300,
                rotate: 3,
                ease: 'power1.inOut',
                duration: 1,
                stagger: 0.01,
            })

        const titleT1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.nutrition-section',
                start: 'top 80%'
            },
        });

        titleT1.to('.nutrition-text-scroll', {
            duration: 1,
            opacity: 1,
            ease: 'power1.inOut',
            clipPath: 'polygon( 100% 0 , 0 0, 0 100%, 100% 100%)',
        });
    });

    return (
        <section className="nutrition-section" id="nutrition">
            <img src="../../public/images/slider-dip.png" alt=""
                className="w-full object-cover" />
            <img src="../../public/images/big-img.png" alt=""
                className="bg-img" />
            <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
                <div className="relative inline-block md:translate-y-20">
                    <div className="general-title relative flex flex-col justfiy-center items-center gap-24">
                        <div className="overflow-hidden place-self-start">
                            <h1 className="nutrition-title">It still does</h1>
                        </div>
                        <div
                            style={{
                                clipPath: 'polygon ( 0 0 , 0 0, 0 100%, 0 100%)'
                            }}
                            className="nutrition-text-scroll place-self-start">
                            <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-3">
                                <h3 className="text-milk-yellow">Body Good</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex md:justify-center items-center translate-y-">
                    <div className="md:max-w-xs max-w-md">
                        <p className="text-lg md:text-right text-balance font-paragraph">
                            Milk contains a wide array of nutrients, including vitamins, minerals and protein , this is lactose free
                        </p>
                    </div>
                </div>
                <div className="nutrition-box">
                    <div className="list-wrappaer">
                        {lists.map((nutrient, index) => (
                            <div key={index} className="relative flex-1 col-center ">
                                <div>
                                    <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                                    <p className="font-paragraph text-sm mt-2">up to</p>
                                    <p className="text-2xl  md:text-4xl tracking-tighter font-bold">
                                        {nutrient.amount}
                                    </p>
                                </div>
                                {index !== lists.length - 1 && (
                                    <div className="space-border"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NutritionSection
