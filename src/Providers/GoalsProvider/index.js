import { createContext , useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { GroupsContext } from '../GroupsProvider'
import api from './../../services/api'

export const GoalsContext = createContext([])
export const GoalsProvider = ( { children } ) => {
    const [ goals, setGoals ] = useState([])
    const [ oneGoal, setOneGoal ] = useState([])
    const [ nextPage, setNextPage ] = useState(false)
    const [ previousPage, setPreviousPage ] = useState(false)
    const [ pageCount , setPageCount ] = useState(1)
    const token = JSON.parse(localStorage.getItem("@habit:token")) || ""
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const { group } = useContext(GroupsContext)
    const  id  = group.id || null

    const getOneGoal = (id) => {
        api.get(`/goals/${id}/`).then((res) => setOneGoal(res.data))
    }
    useEffect(() => {
        if(token  && id !== null ){
            setPageCount(1)
            getGroupGoals(id)
        }
    }, [group])

    useEffect(() => {
        if(token  && id !== null ){
            getGroupGoals(id)
        }
    }, [pageCount])
    const getGroupGoals = (id) => {
        const query = {
            params: {group: id, page: pageCount}
        }
        api.get("/goals/", query ).then((res) =>{
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
            setGoals(res.data.results)
            })
    }
    const createGoal = (data) => {
        api.post("/goals", data, config)
        .then((_) => toast.success("Meta criada com sucesso!"))
        .catch((err) => toast.error(`Nao foi possivel criar a meta: "${err}"`))
    }
    const modGoal = (id) => {
        api.patch(`/goals/${id}/`, config)
        .then((_) => toast.success("Meta atualizada com sucesso!"))
        .catch((err) => toast.error(`Nao foi possivel atualizar a meta: "${err}"`))
    }
    const delGoal = (id) => {
        api.delete(`goals/${id}`, config)
        .then((_) => toast.success("Meta deletada com sucesso!"))
        .catch((err) => toast.error(`Nao foi possivel apagar a meta: "${err}"`) )
    }
    const goNextPage = () => {
        if(nextPage){
        setPageCount(pageCount + 1)
        }
    }
    const goPreviousPage = () => {
        if(previousPage){
        setPageCount(pageCount - 1)
        }
    }
    console.log(goals)
    return (
        <GoalsContext.Provider value = {{
            goals,
            oneGoal,
            nextPage,
            previousPage,
            getOneGoal,
            getGroupGoals,
            createGoal,
            modGoal,
            delGoal,
            goNextPage,
            goPreviousPage,
            }}>
            {children}
        </GoalsContext.Provider>
    )
}