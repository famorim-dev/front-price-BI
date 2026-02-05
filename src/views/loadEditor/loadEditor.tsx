import { useState } from "react";
import { SqlEditor } from "../../components/sqlEditor";
import { Connect } from "./connect/connect";
import { EditorService } from "../../services/editorService";
import { exportToExcel } from "../../utils/converteExcel";

export function LoadEditor(){
    const [sql, setSql] = useState('SELECT * FROM')
    const [id, SetId] = useState('')
    const [idQuery, SetIdQuery] = useState('')

    const connect = new EditorService()

    const handleClick = (id_company: string, id: string, sql: string) => {
        SetIdQuery(id_company)
        SetId(id)
        setSql(sql)
    }

    const handleClickOnRun = async  (sql: string) => {
        const response = await connect.executor(idQuery, sql)
        exportToExcel(response.data, "meus_dados.xlsx")
    }

    return(
        <main className="flex w-full h-full">
            <SqlEditor sql={sql} onRun= {handleClickOnRun} className=""/>
            <Connect onSelectCompany={handleClick}/>
        </main>
    )
}