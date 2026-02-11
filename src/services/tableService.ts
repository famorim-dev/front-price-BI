import { API } from "../utils/api"

export class TableService{


    async getTable(){
        const response = await API.get(`/table/${"extract_estrela_preco"}`)
        return response.data
    }
}