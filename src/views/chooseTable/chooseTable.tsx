import { useEffect, useState } from "react";
import { TableService } from "../../services/tableService";
import { Loader } from "../../components/loader";
import { useNavigate } from "react-router-dom";


export function ChooseTable(){
    const [loading, setLoading] = useState(false)
    const [table, setTable] = useState<string[]>([]);
    const [search, setSearch] = useState("");

    const navigate =  useNavigate()
    
    useEffect(() => {
        const connect = new TableService()
        setLoading(true)
        connect.getAll()
            .then(data =>  setTable(data))
            .finally(() => setLoading(false))
    }, [])

    return(
        <main className="w-full h-full">
            
            {loading && (        
                <div className="absolute inset-0 flex justify-center items-center bg-gray-300 z-50">
                    <Loader />
                </div>
            )}

            <div className="h-screen w-full flex justify-center items-center bg-gray-100">
                <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                    <div className="py-8">
                        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                            <h2 className="text-2xl leading-tight">
                                Tabelas
                            </h2>
                            <div className="text-end">
                                <form className="flex w-full max-w-sm space-x-3"  onSubmit={(e) => e.preventDefault()}>
                                    <div className=" relative ">
                                        <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Pesquisar Módulo" value={search} onChange={(e) => setSearch(e.target.value)}/>
                                    </div>
                                    <button className="cursor-pointer flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-black rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                        Pesquisar
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                Nome
                                            </th>
                                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {table.filter((name) => name
                                                    .replace(/^extract_/, "")
                                                    .toLowerCase()
                                                    .includes(search.toLowerCase())).map((name, index) => 
                                        <tr key={index}>

                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <a onClick={() => navigate(`/table/${name}`)} className="cursor-pointer text-black font-medium hover:text-gray-700">
                                                        {name.replace(/^extract_/, "")}
                                                </a>
                                            </td>
                                            
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

                                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                                    </span>
                                                    <span className="relative">
                                                        Ativo
                                                    </span>
                                                </span>

                                            </td>

                                        </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}