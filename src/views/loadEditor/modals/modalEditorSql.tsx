import { toast } from "react-toastify";
import type { AddSqlType } from "../../../types/addSqlType";
import { QueryService } from "../../../services/queryService";
import { useState } from "react";
import { SqlEditor } from "../../../components/sqlEditor";
import { useNavigate } from "react-router-dom";


export function EditorSql({isOpen, onClose, id, name}: AddSqlType){
        const [sql, setSql] = useState('');
        const navigate = useNavigate()
        if (!isOpen) return null;
        
        const handleClick = async () =>{

            const connect = new QueryService()
            const res = await connect.createQuery(id, name!, sql)
            navigate('/fake')
            toast.success(res.message || "Modulo SQL Criado com Sucesso!")
        }
  
        return(
                <section>
                    <div
                    data-dialog-backdrop="web-3-modal"
                    data-dialog-backdrop-close="true"
                    className=" fixed inset-0 z-[999] grid h-screen w-screen place-items-center  bg-opacity-60  backdrop-blur-sm transition-opacity duration-300"
                    >
                        <div className="relative m-4 w-3/4  h-125 rounded-lg bg-white shadow-sm" data-dialog="web-3-modal">
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

                                <SqlEditor value={sql} onChange={(newValue) => setSql(newValue)} onRun= {handleClick} className="h-60 w-full"/>
                                <div className="flex justify-center">
                                    <button onClick={() => handleClick()} className="m-2 cursor-pointer rounded-sm w-[80%] p-2  text-sm font-medium bg-gray-500 text-white  hover:bg-gray-600 transition-colors duration-200 ease-in-out" >
                                        Salvar
                                    </button>
                                </div>
                        </div>
                    </div>
                </section>
            )
}