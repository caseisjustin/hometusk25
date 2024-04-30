let users = {

}
let ids = 0
class DB{
    addUser(){
        ids++
        users[ids] = {
            fname: document.querySelector(".fname").textContent,
            lname: document.querySelector(".lname").textContent,
            age: document.querySelector(".age").textContent
        }
        console.log(users)
    }

    updateUser(){
        let id = document.querySelector(".id").value
        try{
            id = Number(id)
            if(id >= 1){
                users[id].fname = document.querySelector(".fname").value || users[id].fname
                users[id].lname = document.querySelector(".lname").value || users[id].lname
                users[id].age = document.querySelector(".age").value || users[id].age
            }
            else{
                console.alert("no id gotten")
            }
        }catch(err){
            alert("No such id")
        }
    }

    deleteUser(){
        let id = document.querySelector(".id").value
        let temp = {}
        try{
            id = Number(id)
            for (const i in users){
                if(i == id)
                    continue
                else
                    temp[i] = users[i]
            }
            users = temp
        }
        catch(err){
            alert("Couldn't get id")
        }
    }

    getData(){
        document.querySelector('p').innerHTML = JSON.stringify(users)
    }
}

let db = new DB