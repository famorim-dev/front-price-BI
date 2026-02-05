import { API } from "../utils/api"

export class EditorService{


    async executor(id: string, sql: string){
        const response = await API.post(`/executor/${id}`, {query: sql})
        console.log(response)
        return response
    }
}