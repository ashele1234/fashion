import { connect } from "mongoose";


const url ="mongodb://localhost:27017/TailorDB";

const DbConfig=async()=>{
try {
    await connect(url).then(()=>{
        console.log("database connection established 🚀🚀🤣")
    })
} catch (error:any) {
    console.error(error.message)
}
}
export default DbConfig