import { ConnectService } from "../../../services/connectService"
import { useEffect, useState } from "react"

type SqlOptionsType ={
    id: string
    isOpen: boolean;
    onClose: () => void;
}
export function SqlOptions({id, isOpen, onClose}: SqlOptionsType){
    const [query, setQuery] = useState('');

    const connect = new ConnectService()

    useEffect(() => {
        connect.getQuerySql(id)
            .then(data => setQuery(data))
    }, [id])

    if (!isOpen) return null
    return(
        <section>
            <div
            data-dialog-backdrop="web-3-modal"
            data-dialog-backdrop-close="true"
            className=" fixed inset-0 z-[999] grid h-screen w-screen place-items-center  bg-opacity-60  backdrop-blur-sm transition-opacity duration-300"
            >
                <div
                    className="relative m-4 w-1/4 rounded-lg bg-white shadow-sm"
                    data-dialog="web-3-modal"
                >
                    <div className="flex items-start justify-between p-4">
                        <div>
                            <h5 className="text-xl font-medium text-slate-800">
                            Connect Web 3.0 Wallet
                            </h5>
                            <p className="text-slate-500 text-sm font-light">
                            Choose which card you want to connect
                            </p>
                        </div>
                        <button
                            data-ripple-dark="true"
                            data-dialog-close="true"
                            className="relative border-2 rounded-lg border-gray-200 h-8 max-h-[32px] w-8 max-w-[32px] cursor-pointer select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={onClose}
                        >
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    className="h-5 w-5"
                                >
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}