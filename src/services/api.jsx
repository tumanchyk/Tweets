import axios from "axios";

axios.defaults.baseURL ="https://645422f3e9ac46cedf383d70.mockapi.io"


export async function getAllUsers(page=1) {
    try{
        const {data} = await axios.get(`/users?page=${page}&limit=3`)
        return data
    } catch(error){
        console.log(error);
    }
}

export async function changeUserFollowers(item){
    try{
        const {data} = await axios.put(`/users/${item.id}`, {...item})
        return data
    } catch(error){
        console.log(error);
    }
}