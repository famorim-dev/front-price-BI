import { useState } from "react";
import { SqlEditor } from "../../components/sqlEditor";
import { Connect } from "./connect/connect";
import { EditorService } from "../../services/editorService";
import { toast } from "react-toastify";
//import { exportToExcel } from "../../utils/converteExcel";

export function LoadEditor(){
    const [sql, setSql] = useState('SELECT * FROM')
    const [id, SetId] = useState('')

    const connect = new EditorService()

    const handleClick = ( id: string, sql: string) => {
        SetId(id)
        setSql(sql)
    }

    const handleClickOnRun = async  (sql: string) => {
        const response = await connect.executor(id, sql)
        toast.success(response.data.message)
        //exportToExcel(response.data, "meus_dados.xlsx")
    }

    return(
        <main className="flex w-screen h-screen overflow-hidden">
            <SqlEditor sql={sql} onRun= {handleClickOnRun} className=""/>
            <Connect onSelectCompany={handleClick}/>
        </main>
    )
}