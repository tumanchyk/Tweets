import axios from "axios";

axios.defaults.baseURL ="https://645422f3e9ac46cedf383d70.mockapi.io"


export async function getAllUsers() {
    try{
        const {data} = await axios.get('/users')
        return data
    } catch(error){
        console.log(error);
    }
}
