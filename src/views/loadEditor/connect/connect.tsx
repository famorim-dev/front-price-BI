import { useEffect, useState } from "react";
import { ConnectService } from "../../../services/connectService";
import type { CompanieType } from "../../../types/companies";
import type { ConnectType } from "../../../types/connect.type";
import { SqlOptions } from "../modals/sqlOptions";
import { AddConnect } from "../modals/addConnect";

export function Connect({onSelectCompany} : ConnectType){

    const [companies, setCompanies] = useState<CompanieType[]>([]);
    const [loading, setLoading] = useState(false);
    const [modalCompany, setModalCompany] = useState(false);
    const [modalConnect, setModalConnect] = useState(false);

    const [id, setId] = useState('');

    useEffect(() => {
        const connect = new ConnectService()
        setLoading(true);
        connect.getConnect()
            .then(data => setCompanies(data))
            .finally(() => setLoading(false));
    }, [])
    

    if (loading) return <p>Carregando...</p>;
    if (!loading && companies.length === 0) return <p>Nenhuma empresa encontrada.</p>

    const handleClickSqlCompany = (id: string) => {
        setId(id)
        setModalCompany(true)
    }

    const handleClickAddConnect = () =>{
        setModalConnect(true)
    }

    return(
        <section className="bg-white text-gray-700 shadow h-full max-w-full w-[15%] overflow-y-auto">
            <div className="mt-6 flex items-center justify-center h-8">
                <button onClick={() => handleClickAddConnect()} className="w-[85%] cursor-pointer h-8 border bg-gray-700 rounded-md text-white  hover:border-2  hover:bg-gray-800 transition-colors duration-200 ease-in-out">
                    Adicionar Conexões
                </button>
            </div>

            <AddConnect isOpen={modalConnect} onClose={() => setModalConnect(false)}/>
            <ul>
                {companies.map(data => (
				<li className="hover:bg-gray-100" key={data.id}>   
					<button onClick={() => handleClickSqlCompany(data.id!)} className="flex items-center h-16 w-full px-4 cursor-pointer focus:text-[#2170B3]">
						<svg
                            className="h-6 w-6 flex-shrink-0 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M17 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2M7 16H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <line x1="7" y1="8" x2="17" y2="16" />
						</svg>
                            <h3 className="ml-3 text-gray-800 font-medium">{data.name}</h3>
					</button>  
				</li>
                ))}
			</ul>
            
            <SqlOptions id={id} isOpen={modalCompany} onClose={() => setModalCompany(false)} onSelectSql={onSelectCompany}/>
        </section>
    )
}