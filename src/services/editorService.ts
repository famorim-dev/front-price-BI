import { API } from "../utils/api"

export class EditorService{


    async executor(id: string, sql: string){
        const response = await API.post(`/executor/${id}`, {sql: sql, name: "teste"})
        return response
    }
}