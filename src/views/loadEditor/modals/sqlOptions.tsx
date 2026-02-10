import { useEffect, useState } from "react"
import type { SqlOptionsType } from "../../../types/sqlOptionsType";
import { AddSql } from "./addSql";
import { QueryService } from "../../../services/queryService";
import { FiPlus } from "react-icons/fi";

export function SqlOptions({id, isOpen, onClose, onSelectSql}: SqlOptionsType){
    const [query, setQuery] = useState<SqlOptionsType[]>([]);
    const [modalSql, setModalSql] = useState(false)
    const [idCompany, setIdCompany] = useState('');

    useEffect(() => {
        const connect = new QueryService()
        connect.getQuerySql(id)
            .then(data => setQuery(data))
    }, [id])
    
    if (!isOpen) return null

    const handleClick = (id: string, sql: string) =>{
        onSelectSql(id, sql)
        onClose()  
    }

    const handleClickAddSql = () =>{
        setIdCompany(id)
        setModalSql(true)
    }

    return(
        <section>
            <div
            data-dialog-backdrop="web-3-modal"
            data-dialog-backdrop-close="true"
            className=" fixed inset-0 z-[999] grid h-screen w-screen place-items-center  bg-opacity-60  backdrop-blur-sm transition-opacity duration-300"
            >
                <div className="relative m-4 w-1/4 rounded-lg bg-white shadow-sm" data-dialog="web-3-modal">
                    <div className="flex justify-between">
                        <button
                            data-ripple-dark="true"
                            data-dialog-close="true"
                            className="m-3 relative border-2 rounded-lg border-gray-200 h-8 max-h-[32px] w-8 max-w-[32px] cursor-pointer select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            onClick={onClose}>
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
                        
                        <button onClick={() => handleClickAddSql()} title="Adicionar SQL" className="flex items-center justify-center m-2 cursor-pointer font-bold  rounded-sm h-8 max-h-[32px] w-8 max-w-[32px] text-lg bg-gray-500 text-white  hover:bg-gray-600 transition-colors duration-200 ease-in-out" >
                            <FiPlus size={18} />
                        </button>
                        
                    </div>
                    <div className="flex flex-col items-start justify-between p-4">
                        <div className="flex flex-col items-center w-full">
                            <h5 className="text-lg font-medium text-slate-800 mb-3">
                                Selecione:
                            </h5>
                            {query.map(data => (
                            <button key={data.id} onClick={() => handleClick(data.id, data.sql!)} className="cursor-pointer rounded-sm w-full p-2 m-1  text-sm font-medium bg-gray-500 text-white hover:border-gray-200 hover:border-2 hover:text-slate-800 hover:bg-white transition-colors duration-200 ease-in-out" >
                                {data.name}
                            </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <AddSql isOpen={modalSql} id={idCompany} onClose={() => setModalSql(false)} />
        </section>
    )
}