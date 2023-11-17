import Cover from "../../Components/Cover/Cover";
import { FaPhoneVolume } from 'react-icons/fa';
import SectionTitle from "../../Components/SectionTital/SectionTitle";
import img from '../../assets/contact/banner.jpg';

const ContactUs = () => {
    return (
        <div>
            <Cover
                img={img}
                headerText={'CONTACT US'}
                paragraph={'Would you like to try a dish?'}
            />
            <div className="my-10">
                <SectionTitle
                    heading={'OUR LOCATION'}
                    subHeading={'---Visit Us---'}
                />
                <div className="flex gap-5">
                    <div>
                        <div className="w-52 bg-[#D1A054] p-3 flex justify-center items-center">
                            <FaPhoneVolume
                                className="text-white"
                            />
                        </div>
                        <div>
                            <div className="w-52 h-48 border border-zinc-950 flex justify-center items-center">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 bg-[#D1A054] p-3 flex justify-center items-center">
                            <FaPhoneVolume
                                className="text-white"
                            />
                        </div>
                        <div>
                            <div className="w-52 h-48 border border-zinc-950 flex justify-center items-center">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-52 bg-[#D1A054] p-3 flex justify-center items-center">
                            <FaPhoneVolume
                                className="text-white"
                            />
                        </div>
                        <div>
                            <div className="w-52 h-48 border border-zinc-950 flex justify-center items-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;