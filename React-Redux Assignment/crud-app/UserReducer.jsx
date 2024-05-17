import  {createSlice} from "@reduxjs/toolkit"
import {userList} from './Data'

const UserSlice = createSlice({

    name:"users",
    initialState:userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        
        updateUser: (state,action) => {
            const {id,name,email} = action.payload;
            const user_update= state.find(user => user.id == id)

            if(user_update) {
                user_update.name = name;
                user_update.email = email;
            }
        },

        deleteUser: (state,action) => {
            const {id,name,email} = action.payload;
            const user_update= state.find(user => user.id == id)

            if(user_update) {

                return state.filter(f => f.id != id)
            }
        }
                   

           
    
    }
})
export const { addUser,updateUser,deleteUser} = UserSlice.actions;
export default UserSlice.reducer;