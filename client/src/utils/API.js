import axios from "axios";

export default {
    getDisplay: function(){
        console.log("hello api");
        return axios.get("/items/all");
    }
};