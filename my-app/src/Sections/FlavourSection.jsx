import FlavourTitle from '../components/FlavourTitle';
import FlavourSlider from '../components/FlavourSlider';

const FlavourSection = () => {
    return (
        <section className="flavour-section" id="flavours">
            <div className="h-full flex lg:flex-row flex-col items-start relative">
                <div className='lg:w-[57%] flex-none lg:h-full h-auto lg:sticky lg:top-0'>
                    <FlavourTitle />
                </div>
                <div className="h-full lg:flex-1">
                    <FlavourSlider />
                </div>
            </div>
        </section>
    );
};

export default FlavourSection