import { useState } from "react";
import { SqlEditor } from "../../components/sqlEditor";
import { Connect } from "./connect/connect";
import { EditorService } from "../../services/editorService";
import { toast } from "react-toastify";
import { Loader } from "../../components/loader";
import { useNavigate } from "react-router-dom";
//import { exportToExcel } from "../../utils/converteExcel";

export function LoadEditor(){
    const [sql, setSql] = useState('SELECT * FROM')
    const [id, SetId] = useState('')
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const connect = new EditorService()

    const handleClick = ( id: string, sql: string) => {
        SetId(id)
        setSql(sql)
    }

    const handleClickOnRun = async  (sql: string) => {
        setLoading(true)
        const response = await connect.executor(id, sql)
        setLoading(false)
        navigate("/choosetable")
        toast.success(response.message ?? "Dados Salvo Com Sucesso!")
        //exportToExcel(response.data, "meus_dados.xlsx")
    }

    return(
        <main className="flex w-screen h-screen overflow-hidden">
            <SqlEditor sql={sql} onRun= {handleClickOnRun} className=""/>
            {loading && (<Loader/>)}
            <Connect onSelectCompany={handleClick}/>
        </main>
    )
}