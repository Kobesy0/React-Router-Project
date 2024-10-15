import { NavLink } from "react-router-dom";

const LearnAside =() =>{
    return(
        <aside aria-label="Sidebar"
        className="fixed top-0 left-0 z-40 mt-7 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">

            <div className="h-full pb-4 overflow-y-auto">

            <nav className="space-y-2 font-medium">
                <ul className="space-y-3"> 
                    <li  className="flex items-center p-3  rounded-r-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#283541] hover:text-[#149eca] duration-300">
                        <NavLink to="/learn" end>Quick Start</NavLink>
                    </li>
                    <li  className="flex items-center p-3 rounded-r-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#283541] hover:text-[#149eca] duration-300">
                        <NavLink to="/learn/thinking-in-react">Thinking In React</NavLink>
                    </li>
                    <li  className="flex items-center p-3 rounded-r-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#283541] hover:text-[#149eca] duration-300">
                        <NavLink to="/learn/installation">Installation</NavLink>
                    </li>
                </ul>
            </nav>
            </div>
        </aside>
    )
}

export default LearnAside;