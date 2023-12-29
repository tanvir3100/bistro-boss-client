
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTital/SectionTitle";
// import { useForm } from 'react-hook-form'

const UpdateItem = () => {
    // const { register, handleSubmit } = useForm();

    const item = useLoaderData();
    console.log(item)

    // const onSubmit = async (data) => {
    //     console.log(data)
    // }

    return (
        <div>
            <SectionTitle
                heading={'Update Item'}
                subHeading={'update the Products'} />
            {/* <div className="w-5/3 bg-slate-200 rounded-3xl p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            {...register("Name")}
                            type="text"
                            placeholder="Recipe Name"
                            className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-5">
                        <div className="flex-1">
                            <label>
                                <div className="label">
                                    <span className="label-text">Select Category*</span>
                                </div>
                                <select defaultValue={'default'} {...register("Category")} className="select select-bordered w-full">
                                    <option disabled value={'default'}>Select A Category</option>
                                    <option value="Salad">Salad</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Soups">Soups</option>
                                    <option value="Desserts">Desserts</option>
                                    <option value="Drinks">Drinks</option>
                                </select>
                            </label>
                        </div>
                        <div className="flex-1">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input
                                    {...register("Price")}
                                    type="text"
                                    placeholder="Price"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea {...register("Recipe Details")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full mt-5 max-w-xs" />
                    <br />
                    <button className="btn btn-outline mt-5">Add Button</button>
                </form>
            </div> */}
        </div>
    );
};

export default UpdateItem;