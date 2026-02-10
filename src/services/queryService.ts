import { API } from "../utils/api"

export class QueryService{

    async getQuerySql(id: string){
        const response = await API.get(`/query/get/${id}`,)
        return response.data
    }

    async createQuery(id: string, name: string, sql: string){
        const response = await API.post(`/query/${id}`, {name: name, sql: sql})
        return response.data
    }
}