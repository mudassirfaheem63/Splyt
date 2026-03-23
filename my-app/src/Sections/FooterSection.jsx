import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";


const FooterSection = () => {

    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    })

    return (
        <section className="footer-section" id="contact">
            <img src="../../public/images/footer-dip.png" className='w-full object-cover -translate-y-1' alt=""
            />

            <div className="2xl h-[10vh] relative md:pt-[20vh] pt-[10vh]">
                <div className="overflow-hidden z-10">
                    <h1 className="general-title text-center text-milk py-5">
                        #CHUGRESPONSIBLY
                    </h1>
                </div>

                {isMobile ? (
                    <img src="../../public/images/footer-drink.png"
                        alt=""
                        className='absolute top-0 object-contain ' />
                ) : (
                    <video src="../../public/videos/splash.mp4"
                        className='absolute top-0 object-contain mix-blend-lighten'
                        autoPlay
                        muted
                        playsInline></video>
                )}


                <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
                    <div className="social-btn">
                        <img src="../../public/images/yt.svg" alt="" />
                    </div>
                    <div className="social-btn">
                        <img src="../../public/images/insta.svg" alt="" />
                    </div>
                    <div className="social-btn">
                        <img src="../../public/images/tiktok.svg" alt="" />
                    </div>
                </div>

                <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
                    <div className="flex items-center md:gap-16 gap-5">
                        <div>
                            <p>
                                SPYLT Flavors
                            </p>
                        </div>
                        <div>
                            <p>Chug Club</p>
                            <p>Student Marketing</p>
                            <p>Dairy Dealers</p>
                        </div>
                        <div>
                            <p>Company</p>
                            <p>Contacts</p>
                            <p>Tasty Talk</p>
                        </div>
                    </div>

                    <div className="md:max-w-lg">
                        <p>
                            Get Exclusive Early Access and Stay Informed About Product Updates, Events, and More!
                        </p>
                        <div className="flex justify-between items-center border-b border-[#d9d9d9] py-5 md:mt-10">
                            <input type="email"
                                placeholder='Enter your email'
                                className='w-full placeholder:font-sans placeholder:text-[#999999 ]' />
                            <img src="../../public/images/arrow.svg" alt="arrow" />
                        </div>
                    </div>
                </div>

                <div className="copyrigth-box">
                    <p>Copyright © 2025 Spylt - All Rights Reserved</p>
                    <div className='flex items-center gap-7'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterSection
