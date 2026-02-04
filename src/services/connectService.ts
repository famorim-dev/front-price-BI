import { API } from "../utils/api"

export class ConnectService{


    async getConnect(){
        const response = await API.get("/companie/get")
        
        return response.data
    }

    async getCompanySql(id_query: string){
        const response = await API.get(`/query/get/find/${id_query}`,)
        return response.data
    }
}