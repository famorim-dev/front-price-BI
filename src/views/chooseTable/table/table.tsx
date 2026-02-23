import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";
import { TableService } from "../../../services/tableService";
import type { ColDef, IDatasource } from "ag-grid-community"

import "ag-grid-community/styles/ag-theme-alpine.css"

import { Loader } from "../../../components/loader";
import { useParams } from "react-router-dom";
import { CustomHeader } from "../components/customHeader";

export function Table(){

    const [loading, setLoading] = useState(false)

    const [columnDefs, setColumnDefs] = useState<ColDef[]>([])

    const param = useParams()
    const table = param.tableName


    useEffect(() => {
        const connect = new TableService()
        setLoading(true)
        connect.getTable(table!, { page: 1, pageSize: 50,}).then(data => {
            setColumnDefs(data.columns.map((col: string) => ({   field: col, filter: typeof data.rows[0][col] === 'number' ? 'agNumberColumnFilter' : 'agTextColumnFilter',  headerComponent: CustomHeader, headerComponentParams: { onRemoveColumn: (colId: string) => { setColumnDefs(prev => prev.filter(c => c.field !== colId)); },}, sortable: true, floatingFilter: true,})))})
            .finally(() => {
            setLoading(false)
        });
    }, [table])
    
    const datasource: IDatasource = useMemo(() => ({
        getRows: async params => {
        const { startRow, endRow, filterModel, sortModel } = params
        const pageSize = endRow - startRow || 50
        const page = Math.floor(startRow / pageSize) + 1

        const filters: Record<string, string> = {};
        for (const col in filterModel) {
            const f = filterModel[col];
            if (f?.filter) {
                filters[col] = String(f.filter);
            }
        }

        const service = new TableService();
        const response = await service.getTable(table!, { page, pageSize, filters, sort: sortModel})
        params.successCallback(response.rows, response.total)
        },
    }), [table])

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
                    columnDefs={columnDefs}
                    cacheBlockSize={50}
                    rowModelType="infinite"
                    datasource={datasource}
                    defaultColDef={{ flex: 1, minWidth: 100, filter: true, floatingFilter: true, sortable: true }}
                    paginationPageSize={50}
                />
            </div>

        </main>
    )
}