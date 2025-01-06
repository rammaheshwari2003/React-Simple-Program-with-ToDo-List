import { configureStore } from "@reduxjs/toolkit";
import Reducer1 from "./components/counterSlice";
import Reducer2 from "./components/colorSlice";
import Reducer3 from "./components/todoSlice";
const store=configureStore({
    reducer:{
        counter:Reducer1,
        mycolor:Reducer2,
        todo:Reducer3

    }

})
export default store;