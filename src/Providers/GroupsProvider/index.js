import api from './../../services/api'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const GroupsContext = createContext([])
export const GroupsProvider = ( { children } ) => {
    const token = JSON.parse(localStorage.getItem("@habit:token")) || ""
    const [ search, setSearch ] = useState(false)
    const [ params, setParams ] = useState({category: "", page: 1})
    const [ groups, setGroups ] = useState([])
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const configCategory = {
        params: {params},
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const getGroups = () => {
        if (search){
        api.get("/groups", configCategory ).then((res) => setGroups(res.data))
        }else{
        setSearch(false)
        api.get("/groups/subscriptions/", config ).then((res) => setGroups(res.data))
        }
    }
    useEffect(() => {
        getGroups()
    }, [groups])
    const subGroup = (id) => {
        api.post(`/groups/${id}/subscribe/`).then((_) => toast.success("Inscrito com sucesso!")).catch((_) => toast.error("Nao foi possivel se inscrever "))
        setGroups(api.get("/groups/subscriptions/", config))
    }
    const categoryGroup = (params) => {
        const {category, page} = params
        setSearch(true)
        setParams({category: category || "", page: page || 1})
        getGroups()
    } 
    const editGroup = (id, data) => {
        api.patch(`groups/${id}`, data, config).then((_) => toast.success("grupo modificado com sucesso")).catch((_) => toast.error("Nao foi possivel atualizar o grupo"))
        getGroups()
    }
    const addGroup = (data) => {
        api.post("/groups/", data ,config).then((_) => toast.success("Grupo criado com sucesso")).catch("Nao foi possivel criar o grupo")
        getGroups()
    }
    const searchGroup = (id) => async () => {
        const response = await api.get(`/groups/${id}`).then((res) => res.data).catch((err) => toast.error(`Nao foi possivel achar o grupo: "${err}"` ))
        return response 
    }
    return (
        <GroupsContext.Provider value = {{groups,  subGroup, categoryGroup, editGroup, addGroup, searchGroup }}>
            {children}
        </GroupsContext.Provider>
    )
}