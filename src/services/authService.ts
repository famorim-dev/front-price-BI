import { API } from "../utils/api"

export class AuthService{


    async login(email: string, password: string){
        const response = await API.post("/login", {email: email, password: password})
        localStorage.setItem("token", response.data)
        return "Sucesso!"
    }
}