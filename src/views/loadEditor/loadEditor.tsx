import { SqlEditor } from "../../components/sqlEditor";
import { Connect } from "./connect/connect";


export function LoadEditor(){
    const sql = (sql: string) => { console.log(sql)}
    return(
        <main className="flex w-full h-full">
            <SqlEditor onRun={sql} className=""/>
            <Connect/>
        </main>
    )
}