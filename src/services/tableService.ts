import { API } from "../utils/api"

export class TableService{


    async getTable(table: string){
        const response = await API.get(`/table/${table}`)
        return response.data
    }

    async getAll(){
        const response = await API.get(`/table`)
        console.log(response)
        return response.data
    }
}