import { API } from "../utils/api"

export class ConnectService{


    async getConnect(){
        const response = await API.get("/companie/get")

        return response.data
    }
}