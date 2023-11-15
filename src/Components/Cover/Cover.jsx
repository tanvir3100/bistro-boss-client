import { Parallax } from 'react-parallax';

const Cover = ({ img, headerText, paragraph }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[70vh]">
                <div className=""></div>
                <div className="hero-content flex justify-center items-center text-center text-neutral-content bg-[#15151599] w-4/6 h-3/5">
                    <div className="max-w-md text-white ">
                        <h1 className="mb-5 text-6xl uppercase">{headerText}</h1>
                        <p className="mb-5 uppercase">{paragraph}</p>
                    </div>
                </div>
            </div>
            <div />
        </Parallax>

    );
};

export default Cover;