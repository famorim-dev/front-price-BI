import { useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom"
import { AuthService } from "../../../services/authService";
import { toast } from "react-toastify";


export function TwoFactor(){
    const [code, setCode] = useState('')

    const location = useLocation();
    const { id } = location.state;

    const navigate = useNavigate()

    const handleClick= async () =>{
        const connect = new AuthService()
        try {
            await connect.twoFactor(id, code);
            toast.success("Sucesso!");
            navigate(`/`);
        } catch (err) {
            toast.error("Código inválido");
        }
    }
    
    return(
        <main className="w-full min-h-screen flex items-center">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl w-full">
                    <div className="hidden lg:block lg:w-1/2 bg-cover"
                        style={{backgroundImage: "url('https://pricemet.com.br/wp-content/uploads/2023/08/pricemet-solucoes-pesquisa-de-precos-online-mobile.jpg')"}}>
                    </div>
                    <div className="w-full p-8 lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center">PriceQlik</h2>
                        <p className="text-xl text-gray-600 text-center">Bem-vindo de volta!</p>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                            <a href="#" className="text-xs text-center text-gray-500 uppercase">Digite o Codigo enviado por Email</a>
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Code</label>
                            <input value={code} onChange={e => setCode(e.target.value)}  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                        </div>
                        <div className="mt-8">
                            <button onClick={handleClick} className="bg-gray-700 cursor-pointer text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Entrar</button>
                        </div>
                    </div>
                </div>
        </main>
    )
}