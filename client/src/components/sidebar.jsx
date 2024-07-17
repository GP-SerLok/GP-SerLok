import { Link } from "react-router-dom";

export default function Sidebar() {
    

    return (
        <>
            <div className="drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu rounded-box w-56 mb-96">
                        <li><a>Maps</a></li>
                        <li className="mb-36">
                            <details open>
                                <summary>Friend List</summary>
                                <ul>
                                    <div className="avatar online mt-3">
                                        <div className="w-10 rounded-xl">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div><br />
                                </ul>
                            </details>
                        </li>
                    </ul>
                    <ul className="menu rounded-box flex-col-reverse">
                        <li><Link to={'/login'} onClick={() => localStorage.clear()}>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}