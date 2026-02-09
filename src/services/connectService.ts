import { API } from "../utils/api"

export class ConnectService{


    async getConnect(){
        const response = await API.get("/companie/get")
        return response.data
    }

    async getQuerySql(id: string){
        const response = await API.get(`/query/get/${id}`,)
        return response.data
    }
}