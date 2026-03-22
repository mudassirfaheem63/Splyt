import FlavourTitle from '../components/FlavourTitle';
import FlavourSlider from '../components/FlavourSlider';

const FlavourSection = () => {
    return (
        <section className="flavour-section" id="flavours">
            <div className="h-full flex lg:flex-row flex-col items-center relative">
                <div className='lg:w-[57%] flex-none h-80 lg:h-full xl:mt-0 md:mt-20'>
                    <FlavourTitle />
                </div>
                <div className="h-full">
                    <FlavourSlider />
                </div>
            </div>
        </section>
    );
};

export default FlavourSection
