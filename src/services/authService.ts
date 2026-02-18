import { API } from "../utils/api"

export class AuthService{


    async login(email: string, password: string){
        const response = await API.post("/login", {email: email, password: password})
        return response.data
    }

    async twoFactor(id: string, code: string){
        const response = await API.post(`/login/${id}`, {code: code})
        localStorage.setItem("token", response.data)
        return "Sucesso!"
    }
}