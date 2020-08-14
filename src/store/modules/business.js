import {getUserDetail} from "@/api/business";

const mutations = {}

const actions = {

  getUserDetail({commit},param){
    return new Promise((resolve,reject)=>{
      getUserDetail().then(response=>{
        console.log(response)
        resolve(response)
      })

    })
  }


}

export default {
  namespaced: true,
  mutations,
  actions
}

