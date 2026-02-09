import { useState } from "react";
import { SqlEditor } from "../../components/sqlEditor";
import { Connect } from "./connect/connect";
import { EditorService } from "../../services/editorService";
import { toast } from "react-toastify";
//import { exportToExcel } from "../../utils/converteExcel";

export function LoadEditor(){
    const [sql, setSql] = useState('SELECT * FROM')
    const [name, SetName] = useState('')
    const [id, SetId] = useState('')
    const [idCompany, SetIdCompany] = useState('')

    const connect = new EditorService()

    const handleClick = (id_company: string, id: string, sql: string, name: string) => {
        SetIdCompany(id_company)
        SetId(id)
        SetName(name)
        setSql(sql)
    }

    const handleClickOnRun = async  (sql: string) => {
        const response = await connect.executor(idCompany, sql)
        toast.success(response.data.message)
        //exportToExcel(response.data, "meus_dados.xlsx")
    }

    return(
        <main className="flex w-full h-full">
            
            <SqlEditor sql={sql} onRun= {handleClickOnRun} className=""/>
            <Connect onSelectCompany={handleClick}/>
        </main>
    )
}