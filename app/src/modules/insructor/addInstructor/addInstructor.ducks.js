import {combineReducers} from 'redux'
import axios from 'axios' ;


const ADD_INSTRUCTOR = "ADD_INSTRUCTOR" 


const loading = (state=true,{type}) => {
    switch (type)  {
        case ADD_INSTRUCTOR :
            return false
        default : 
        return state
    }
}

export const addInstructor = (instructor) => async dispatsh => {
    const instructor = await axios.post(`/instructors`,instructor)
    dispatsh({
        type : ADD_INSTRUCTOR ,
        payload : instructor
    })
}