import { IoCompassOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AgentDashboardNav = () => {

    const { logOut } = useAuth;

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="mt-12">
                <div className="px-5">
                    <h4 className="uppercase text-lg font-medium">Main</h4>

                    <ul className="mt-3 flex flex-col gap-2">
                        <li>
                            <NavLink to='/dashboard/agentprofile' className='flex items-center gap-2 font-medium px-2 py-3 rounded-lg hover:bg-black hover:text-white'>
                                <IoCompassOutline className='text-xl' />
                                Agent Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="px-5 mt-10">
                    <h4 className="uppercase text-lg font-medium">MANAGE LISTINGS</h4>

                    <ul className="mt-3 flex flex-col gap-2">
                        <li>
                            <NavLink to='/dashboard/addnew' className='flex items-center gap-2 font-medium px-2 py-3 rounded-lg hover:bg-black hover:text-white'>
                                <IoCompassOutline className='text-xl' />
                                Add Property
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/myaddedproperties' className='flex items-center gap-2 font-medium px-2 py-3 rounded-lg hover:bg-black hover:text-white'>
                                <IoCompassOutline className='text-xl' />
                                Added Properties
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/mysold' className='flex items-center gap-2 font-medium px-2 py-3 rounded-lg hover:bg-black hover:text-white'>
                                <IoCompassOutline className='text-xl' />
                                Sold properties
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/requestedproperties' className='flex items-center gap-2 font-medium px-2 py-3 rounded-lg hover:bg-black hover:text-white'>
                                <IoCompassOutline className='text-xl' />
                                Requested
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="px-5 mt-10">
                    <h4 className="uppercase text-lg font-medium">MANAGE ACCOUNT</h4>

                    <ul className="mt-3 flex flex-col gap-2">
                        <li>
                            <NavLink onClick={handleLogOut} to='/login' className='flex items-center gap-2 font-medium px-2 py-3 rounded-lg hover:bg-black hover:text-white'>
                                <IoCompassOutline className='text-xl' />
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AgentDashboardNav;