import { API } from "../utils/api"

export class TableService{


    async getTable(table: string,  options?: { page: number, pageSize: number, filters?: Record<string, any>, sort?: any[]}){
        const response = await API.get(`/table/${table}`,{params: options})
        return response.data
    }

    async getAll(){
        const response = await API.get(`/table`)
        return response.data
    }
}