import { SqlEditor } from "../../components/sqlEditor";


export function LoadEditor(){
    const sql = (sql: string) => { console.log(sql)}
    return(
        <main className="flex w-full h-full">
            <SqlEditor onRun={sql} className=""/>

            <section className="bg-amber-200 h-full max-w-full w-[25%]">
                menu
            </section>
        </main>
    )
}