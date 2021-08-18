import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GroupsContext } from "../GroupsProvider";
import api from './../../services/api'

    export const ActivitiesContext = createContext([])
    export const ActivitiesProvider = ( { children } ) => {
        const token = JSON.parse(localStorage.getItem("@habit:token")) || "";
        const [ activities , setActivities ] = useState([])
        const [ activity, setActivity ] = useState([])
        const [ nextPage, setNextPage ] = useState(false)
        const [ previousPage, setPreviousPage ] = useState(false)
        const [ countPage, setCountPage ] = useState(1)

        const config = {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          };
        const { group } = useContext(GroupsContext)
        const id = group.id || null
        const getGroupActivities = (id) => {
            const query = {
                params: {group: id, page: countPage }
            }
            api.get(`/activities/`, query).then((res) => {
                const { next, previous } = res.data
                console.log(res.data)
                if(next === null){
                    setNextPage(false)
                }else{
                    setNextPage(true)
                }
                if(previous === null ){
                    setPreviousPage(false)
                }else{
                    setPreviousPage(true)
                }
                setActivities(res.data.results)
            }).catch((err) => console.log(err))
        }
        useEffect(() => {
            if(token && id !== null){
                getGroupActivities(id)
            }
        }, [countPage])
        useEffect(() => {
            if(token && id !== null){
                setCountPage(1)
                getGroupActivities(id)
            }
        },[group])


        const getActivity = (id) => {
            api.get(`/activities/${id}/`)
            .then((res) => setActivity(res.data) )
            .catch((err) => console.log(err) )
        }
        const createActivity = (data) => {
            api.post(`/activities/`, data, config)
            .then((_) => toast.success("Atividade criada com sucesso!"))
            .catch((err) => toast.error(`Nao foi possivel criar a atividade: "${err}"`))
        }
        const updateActivity = (id, data) => {
            api.patch(`/activities/${id}/`, data, config)
            .then((res) => toast.success("Atividade atualizada com sucesso!"))
            .catch((err) => console.log(err))
        }
        const deleteActivity = (id) => {
            api.delete(`/activities/${id}/`, config)
            .then((res) => toast.success("Atividade apagada com sucesso!"))
            .catch((err) => console.log(err))
        }
        const goNextPage = () => {
            if(nextPage){
            setCountPage(countPage + 1)    
            }
        }
        const goPreviousPage = () => {
            if(previousPage){
            setCountPage(countPage - 1)
            }
        }

        return (
            <ActivitiesContext.Provider value = {{
                activities,
                activity,
                nextPage,
                previousPage,
                getActivity,
                createActivity,
                updateActivity,
                deleteActivity,
                goNextPage,
                goPreviousPage,
                }}>
                {children}
            </ActivitiesContext.Provider>
        )
    }