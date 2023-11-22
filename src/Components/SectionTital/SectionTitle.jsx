

const SectionTitle = ({ subHeading, heading, className }) => {
    return (
        <div className='w-7/12 lg:w-4/12 mx-auto text-center lg:space-y-3 my-10'>
            <h1 className="text-sm lg:text-xl text-[#D99904]">{subHeading}</h1>
            <h1 className={`lg:text-3xl py-2 lg:py-5 ${className ? 'text-white' : 'text-[#151515]'} border-y-4`}>{heading}</h1>
        </div>
    );
};

export default SectionTitle;