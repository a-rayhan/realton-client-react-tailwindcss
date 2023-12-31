import { FaRegHeart } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuBath } from "react-icons/lu";
import { CiSquareMore } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const FavoriteCard = ({ wishlist, handleDeleteItem }) => {
    const { _id, title, price, location, username, photo, userphoto, advertise } = wishlist;

    return (
        <div className="bg-white rounded-xl cursor-pointer">
            <div className="rounded-t-xl h-52 w-full relative">
                <img src={photo} alt="" className="rounded-t-xl w-full h-full object-cover" />

                <div className="absolute bottom-6 left-6">
                    <p className="bg-white px-3 py-1 rounded-lg text-sm font-semibold">
                        ${price}
                    </p>
                </div>

                <div className="absolute bottom-6 right-6">
                    <p className="bg-green-800 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                        verified
                    </p>
                </div>

                <div onClick={() => handleDeleteItem(_id)} className="absolute top-6 right-6">
                    <p className="bg-white px-3 py-2 rounded-lg text-lg font-medium uppercase flex items-center gap-x-1">
                        <FaRegTrashAlt />
                    </p>
                </div>
            </div>

            <div className="p-6">
                <p className="text-lg font-semibold mb-1 hover:underline">
                    {title}
                </p>

                <p className="text-sm">
                    {location}
                </p>

                <div className="flex justify-between items-center gap-8 my-4">
                    <div>
                        <div className="flex items-center gap-x-2">
                            <IoBedOutline />
                            <p className="text-sm">
                                1
                            </p>
                        </div>
                        <p className="text-sm">
                            bed
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-x-2">
                            <LuBath />
                            <p className="text-sm">
                                1
                            </p>
                        </div>
                        <p className="text-sm">
                            bath
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-x-2">
                            <CiSquareMore />
                            <p className="text-sm">
                                1200
                            </p>
                        </div>
                        <p className="text-sm">
                            sqft
                        </p>
                    </div>
                </div>

                <hr />

                <div className="flex flex-col justify-between mt-4">
                    <div className="flex gap-4 mb-5">
                        <div className="w-10 h-10 rounded-full bg-slate-400">
                            <img src={userphoto} alt="" className="w-full h-full rounded-full object-cover" />
                        </div>

                        <div>
                            <p className="text-sm">
                                Posted by
                            </p>

                            <p className="font-semibold mb-1">
                                {username}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex gap-4 cursor-pointer">
                            <NavLink><FiExternalLink /></NavLink>
                            <NavLink><MdOutlineLibraryAdd /></NavLink>
                            <NavLink><FaRegHeart /></NavLink>
                        </div>

                        <div>
                            <NavLink to='/dashboard/addnew' className="flex items-center border border-black px-2 py-2 rounded-xl hover:border-black hover:bg-black hover:text-white text-sm">
                                Make an offer

                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteCard;