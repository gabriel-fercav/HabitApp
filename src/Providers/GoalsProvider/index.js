import { createContext , useState } from 'react'
import { toast } from 'react-toastify'
import api from './../../services/api'

export const GoalsContext = createContext([])
export const GoalsProvider = ( { children } ) => {
    const [ goals, setGoals ] = useState([])
    const [ oneGoal, setOneGoal ] = useState([])
    const [ nextPage, setNextPage ] = useState(false)
    const [ previousPage, setPreviousPage ] = useState(false)
    const token = JSON.parse(localStorage.getItem("@habit:token")) || ""
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    const getOneGoal = (id) => {
        api.get(`/goals/${id}/`).then((res) => setOneGoal(res.data))
    }
    const getGroupGoals = (params) => {
        api.get("/goals", params ).then((res) =>{
            const {previous, next} = res.data
            if(previous !== null ){
                setPreviousPage(true)
            }else{
                setPreviousPage(false)
            }
            if(next !== null){
                setNextPage(true)
            }else{
                setNextPage(false)
            }
            setGoals(res.data)
            })
    }
    const createGoal = (data) => {
        api.post("/goals", data, config).then((_) => toast.success("Meta criada com sucesso!")).catch((err) => toast.error(`Nao foi possivel criar a meta: "${err}"`))
    }
    const modGoal = (id) => {
        api.patch(`/goals/${id}/`, config).then((_) => toast.success("Meta atualizada com sucesso!")).catch((err) => toast.error(`Nao foi possivel atualizar a meta: "${err}"`))
    }
    const delGoal = (id) => {
        api.delete(`goals/${id}`, config).then((_) => toast.success("Meta deletada com sucesso!")).catch((err) => toast.error(`Nao foi possivel apagar a meta: "${err}"`) )
    }
    return (
        <GoalsContext.Provider value = {{goals, oneGoal, nextPage, previousPage, getOneGoal, getGroupGoals, createGoal, modGoal, delGoal}}>
            {children}
        </GoalsContext.Provider>
    )
}