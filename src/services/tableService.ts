import { API } from "../utils/api"

export class TableService{


    async getTable(){
        const response = await API.get(`/table/${"extract_estrela_preco"}`)
        console.log(response)
        return response.data
    }
}