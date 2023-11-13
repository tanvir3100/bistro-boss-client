import SectionTitle from "../SectionTital/SectionTitle";


const Features = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/VV24y20/featured.jpg)' }}>
                <div className="hero-overlay"></div>
                <div className="p-10">
                    <SectionTitle
                        subHeading={'---Check it out---'}
                        heading={'FROM OUR MENU'}
                        className='text-white' />
                    <div className="flex justify-center items-center w-2/3 mx-auto gap-10">
                        <img className="w-6/12" src="https://i.ibb.co/VV24y20/featured.jpg" alt="" />
                        <div className="text-white">
                            <h3 className="">March 20, 2023</h3>
                            <h3 className=" uppercase">WHERE CAN I GET SOME?</h3>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="btn btn-outline text-white border-b-4 border-white border-t-0 border-l-0 border-r-0 hover:bg-white hover:border-none hover:text-black transform">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Features;