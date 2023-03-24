export default function Paginate({ paginate }) {
    const totalPage = Array(paginate?.tolalPages).fill(null);
    const currentPage = paginate?.current;
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing
                        <span className="font-medium mx-1">
                            {paginate?.totalItems < 10
                                ? paginate?.totalItems
                                : paginate?.itemsPerPage}
                        </span>
                        item in
                        <span className="font-medium mx-1">
                            {paginate?.totalItems} result
                        </span>
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        {totalPage.map((val, index) => {
                            let Compre = "button";
                            let Compnext = "button";
                            if (currentPage > 1) {
                                Compre = "a";
                            }
                            if (currentPage < totalPage.length) {
                                Compnext = "a";
                            }
                            return (
                                <div
                                    key={index + 1}
                                    className="flex items-center"
                                >
                                    {index === 0 ? (
                                        <Compre
                                            href={
                                                currentPage > 1
                                                    ? `?page=${index + 1}`
                                                    : ""
                                            }
                                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                                        >
                                            <span className="sr-only">
                                                Previous
                                            </span>
                                            <svg
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Compre>
                                    ) : (
                                        <></>
                                    )}
                                    <a
                                        href={`?page=${index + 1}`}
                                        className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  ring-1 ring-inset ring-gray-300 cursor-pointer
                            ${
                                currentPage === index + 1 &&
                                "bg-indigo-600  text-white"
                            }`}
                                    >
                                        {index + 1}
                                    </a>

                                    {index + 1 === totalPage.length ? (
                                        <Compnext
                                            href={
                                                currentPage < totalPage.length
                                                    ? `?page=${index + 1}`
                                                    : ""
                                            }
                                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                                        >
                                            <span className="sr-only">
                                                Next
                                            </span>
                                            <svg
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Compnext>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
}
