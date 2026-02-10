import type { AddSqlType } from "../../../types/addSqlType";
import { useState } from "react";
import { EditorSql } from "./modalEditorSql";

export function AddSql({isOpen, onClose, id}: AddSqlType){
    const [name, setName] = useState('');
    const [editorOpen, setEditorOpen] = useState(false)

    if (!isOpen) return null;

    const handleClick = async () =>{
        setEditorOpen(true)
    }

    return(
        <section>
            <div
            data-dialog-backdrop="web-3-modal"
            data-dialog-backdrop-close="true"
            className=" fixed inset-0 z-[999] grid h-screen w-screen place-items-center  bg-opacity-60  backdrop-blur-sm transition-opacity duration-300"
            >
                <div className="relative m-4 w-1/4 rounded-lg bg-white shadow-sm" data-dialog="web-3-modal">
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
                    <div className="flex flex-col items-start justify-between p-4">
                        <div className="flex flex-col items-center w-full">
                            <h5 className="text-lg font-medium text-slate-800 mb-3">
                                Novo Modulo SQL:
                            </h5>

                            <input
                                placeholder="Nome da sua conexão"
                                className="w-full px-2 py-2 m-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 shadow-sm"
                                name="nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <EditorSql id={id} name={name} isOpen={editorOpen} onClose={() => setEditorOpen(false)}/>
                            <button onClick={() => handleClick()} className="m-2 cursor-pointer rounded-sm w-full p-2  text-sm font-medium bg-gray-500 text-white  hover:bg-gray-600 transition-colors duration-200 ease-in-out" >
                                Próximo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}