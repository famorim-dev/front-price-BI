import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";
import { TableService } from "../../../services/tableService";
import type { ColDef } from "ag-grid-community"

import "ag-grid-community/styles/ag-theme-alpine.css"
import { Loader } from "../../../components/loader";
import { useParams } from "react-router-dom";

export function Table(){

    const [loading, setLoading] = useState(false);

    const [rowData, setRowData] = useState<any[]>([])
    const [columnDefs, setColumnDefs] = useState<ColDef[]>([])

    const param = useParams()
    const table = param.tableName


    useEffect(() => {
        const connect = new TableService()
        setLoading(true)
        connect.getTable(table!).then(data => {
            setRowData(data.rows)
            setColumnDefs(data.columns.map((col: string) => ({ field: col, filter: true, sortable: true })))
        })
        .finally(() => {
            setLoading(false)
        });
    }, [table])

    return(
        <main className="flex justify-center items-center w-full h-full">
            {loading && (        
                <div className="absolute inset-0 flex justify-center items-center bg-gray-300 z-50">
                    <Loader />
                </div>
            )}

            <div className="w-[90%] h-[90%]">
                <AgGridReact
                    className="ag-theme-alpine"
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={{ flex: 1, minWidth: 100, filter: true, floatingFilter: true }}
                    pagination
                    paginationPageSize={50}
                />
            </div>

        </main>
    )
}