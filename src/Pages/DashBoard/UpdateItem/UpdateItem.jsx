
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTital/SectionTitle";
import { useForm } from 'react-hook-form'
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateItem = () => {

    const { name, category, recipe, price, _id } = useLoaderData();

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url 
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            //now send the menu item data to he server with the image url
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price),
            }
            //
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount > 0) {
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated Successful into the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data)
    };

    return (
        <div>
            <SectionTitle
                heading={'Update Item'}
                subHeading={'update the Products'} />
            <div className="w-5/3 bg-slate-200 rounded-3xl p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            {...register("Name")}
                            defaultValue={name}
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
                                <select defaultValue={category} {...register("Category")} className="select select-bordered w-full">
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
                                    defaultValue={price}
                                    placeholder="Price"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("Recipe Details")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full mt-5 max-w-xs" />
                    <br />
                    <button className="btn btn-outline mt-5">Add Button</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;