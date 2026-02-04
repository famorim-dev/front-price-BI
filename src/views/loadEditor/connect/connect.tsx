

export function Connect(){


    return(
        <section className="bg-white text-gray-700 shadow h-full max-w-full w-[25%]">
            <ul>
				<li className="hover:bg-gray-100">
					<button className="h-16 px-6 flex justify-center items-center w-full cursor-pointer focus:text-[#2170B3]">
						<svg
							className="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"								viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<polyline									points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
							    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z">				
								</path>
						</svg>
                        <h3 className="ml-2">
                            COMPANIE
                        </h3>
					</button>
				</li>
			</ul>
        </section>
    )
}