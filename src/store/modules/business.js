import {getUserDetail} from "@/api/business";

const mutations = {}

const actions = {

  // getExamScoreHistory({commit},param){
  //   return new Promise((resolve, reject) => {
  //     getExamScoreHistory(param).then(response => {
  //       console.log(response)
  //       resolve(response)
  //     })
  //   })
  // },
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

