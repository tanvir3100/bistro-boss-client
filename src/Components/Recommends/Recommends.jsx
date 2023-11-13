import { useEffect, useState } from "react";
import SectionTitle from "../SectionTital/SectionTitle";


const Recommends = () => {
    const [salad, setSalad] = useState()
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const salads = data.filter(salad => salad.category === 'salad')
                setSalad(salads)
            })
    }, [])
    return (
        <div className='my-5 lg:my-10 px-10 lg:px-24 mx-auto'>
            <SectionTitle
                subHeading={'---Should Try---'}
                heading={'CHEF RECOMMENDS'}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    salad?.map(item => <div key={item._id} className="card bg-base-100 shadow-xl rounded-none">
                        <figure><img className="w-full" src={item.image} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="font-bold text-xl">{item.name}</h2>
                            <p>{item.recipe}</p>
                            <div className="card-actions justify-center">
                                <button className="btn text-[#BB8506] border-b-4 border-[#BB8506] border-t-0 border-l-0 border-r-0 hover:bg-[#1F2937] hover:border-none">Add To Cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Recommends;