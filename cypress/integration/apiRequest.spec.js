///<reference types='cypress'/>
import apiMethods from './pom/apiMethods'
const getJson=require('../fixtures/getUser.json')
const postJson=require('../fixtures/createUser.json')
const putJson=require('../fixtures/updateUser.json')

describe('GET API User Tests',()=>{
    it('Get Method : Users',()=>{
       apiMethods.getUsers(getJson.data[0].first_name,getJson.data[0].email)
    })
    it('POST Method : Create User',()=>{
        apiMethods.postUsers(postJson)
    })
    it('PUT Method : Update User',()=>{
        apiMethods.updateUser(putJson)
    })
    it('Delete Method : Delete user record',()=>{
        apiMethods.deleteUser()
    })
})