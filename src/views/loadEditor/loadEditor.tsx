import { SqlEditor } from "../../components/sqlEditor";


export function LoadEditor(){
    const sql = (sql: string) => { console.log(sql)}
    return(
        <main className="max-w-full h-screen flex items-center justify-center p-8">
            <SqlEditor onRun={sql} className=""/>
            <div className="bg-amber-200">
                jnwocnwcwcwec
            </div>
        </main>
    )
}