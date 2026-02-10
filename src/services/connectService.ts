import { API } from "../utils/api"

export class ConnectService{


    async getConnect(){
        const response = await API.get("/companie/get")
        return response.data
    }

    async createCompany(name: string, url: string){
        const response = await API.post("/companie", {name: name, url_connect: url})
        return response.data
    }
}