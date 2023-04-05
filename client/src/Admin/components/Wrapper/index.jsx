import { UseDarkModeContext } from "../../context/darkMode";

function Wrapper({ title, children }) {
    const { darkMode } = UseDarkModeContext();
    return (
        <div className={`${darkMode ? "dark" : "bg-white"} flex flex-col`}>
            <section className="relative pt-5 bg-blueGray-50">
                <div className="w-full mb-5 px-4">
                    <div
                        className={`${
                            darkMode ? "dark_soft" : "bg-gray-900"
                        } relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
                        text-white`}
                    >
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between items-center">
                                    <h3 className="font-semibold text-lg text-white">
                                        {title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Wrapper;
