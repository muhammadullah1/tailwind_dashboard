import Sidebar from "../../components/Layouts/Common/Sidebar"
import Header from "../../components/Layouts/Header"
import SiteSetting from "../../components/Layouts/SiteSetting"

const AdminLayout = () => {
    return (
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
            <Header />
            <aside
                className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                aria-label="Sidenav"
                id="drawer-navigation"
            >
                <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
                    <Sidebar />


                    <SiteSetting />
                </div>
            </aside>

            <main className="p-4 md:ml-64 h-auto pt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div
                        className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64"
                    >
                    </div>
                    <div
                        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
                    ></div>
                    <div
                        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
                    ></div>
                    <div
                        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
                    ></div>
                </div>
                <div
                    className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
                ></div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div
                        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                    ></div>
                    <div
                        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                    ></div>
                    <div
                        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                    ></div>
                    <div
                        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                    ></div>
                </div>
                <div
                    className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
                ></div>
                <div className="grid grid-cols-2 gap-4">
                    <div
                        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                    ></div>
                    <div
                        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                    ></div>
                    <div
                        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                    ></div>
                    <div
                        className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                    ></div>
                </div>
            </main>
        </div>
    )
}

export default AdminLayout
