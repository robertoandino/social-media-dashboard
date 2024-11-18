import React, { useState } from 'react';
import Sidebar from './Sidebar';

function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className="flex h-screen overflow-hidden bg-gray-900">
            <div
                className={`
                    transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    transition-transform duration-300 ease-in-out bg-gray-800 w-64
                    h-full text-white fixed top-0 left-0 z-10
                `}
            >
                <Sidebar />
            </div>

            <div 
                className={`
                    flex-1 flex flex-col overflow-y-auto transition-all 
                    duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}
                `}
            > 
                <button
                    onClick={toggleSidebar}
                    className={`
                        fixed left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black
                        text-white rounded-full z-20 transition-all duration-300
                        ${isSidebarOpen ? "w-12 h-12" : "w-8 h-8"}
                    `}
                >
                    <div className="flex items-center justify-center w-full h-full">
                        {isSidebarOpen ? ">" : "<"}
                    </div>
                </button>

                <main className="flex-1 p-6 bg-gray-800 text-white overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;