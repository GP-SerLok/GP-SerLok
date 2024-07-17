import { Link } from "react-router-dom";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdPeopleOutline } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

export default function Sidebar() {


    return (
        <>
            <div className="drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex flex-col h-screen">
                        <ul className="menu rounded-box w-56 flex-grow">
                            <li>
                                <a className="text-lg py-4"><HiOutlineMapPin /> Maps</a>
                            </li>
                            <li className="mb-36">
                                <details open>
                                    <summary className="text-lg py-4"><MdPeopleOutline /> Friend List</summary>
                                    <ul>
                                        <div className="avatar online mt-3">
                                            <div className="w-10 rounded-xl">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Friend" />
                                            </div>
                                        </div><br />
                                    </ul>
                                </details>
                            </li>
                        </ul>
                        <ul className="menu rounded-box">
                            <li>
                                <Link to={'/login'} onClick={() => localStorage.clear()} className="text-lg py-4"><IoLogOutOutline /> Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}