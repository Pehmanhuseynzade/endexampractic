import axios from "axios"
import { BASE_URL } from "./baseURL"

//GET

export const getAlldatas = async()=>{
     let globalData;
     await axios.get(`${BASE_URL}`)
     .then((res)=>{
          globalData = res.data
     })
     return globalData
}

//GET ID

export const getAlldatasID = async(id)=>{
     let globalData;
     await axios.get(`${BASE_URL}/${id}`)
     .then((res)=>{
          globalData = res.data
     })
     return globalData
}

//DELETE

export const deleteDatasByID = async(id)=>{
    await axios.delete(`${BASE_URL}/${id}`)
 }

//POST

 export const postDatas = async(payload)=>{
     await axios.post(`${BASE_URL}`,payload)
 }
