import axios from "axios"; //used for making a req to APIS and browser in js also provide a simple way to send hppt req.

export default class UserService{ //that this class is thenmain export of this modules

    constructor(){
        this.uri="http://localhost:8980/"; // base URL for making HTTP requests to the server.
       
    }

    // Service method to register new user
    async addUser(user){//asy is a keyword that indicates that this method return a promise and handle asy operation
        return await axios.post(this.uri+"/createuser",user).then(response=>{
            return response;
        });
    }

    
    getUsers(){
        return this.users;
    }

    // Service method to authenticate user
    async validateUser(username,password){
        return await axios.get(this.uri+"/auth/"+username+"/"+password).then(res=>{
            console.log(res);
            console.log(res.data);
            return res;
        });;
    }
}