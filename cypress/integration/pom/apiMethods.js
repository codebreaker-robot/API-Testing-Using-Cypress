class apiMethods{
    getUsers(name,email)
    {
        cy.request('GET',"/api/users?page=2")
        .then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data[0].first_name).to.eq(name)
            expect(res.body.data[0].email).to.eq(email)
        })
    }
    postUsers(user){
        cy.request('POST','/api/users',user)
        .then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq(user.name)
            expect(res.body.job).to.eq(user.job)
            expect(res.body.id).to.eq(user.id)
        })

    }
    updateUser(user1){
        cy.request('PUT','/api/users/2',user1)
        .then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.name).to.eq(user1.name)
            expect(res.body.job).to.eq(user1.job)
        })
    }

    deleteUser(){
        cy.request('DELETE','/api/users/2')
        .then((res)=>{
            expect(res.status).to.eq(204)
        })
    }
    
}
module.exports=new apiMethods()