import { connect } from "mongoose";


const url ="mongodb://localhost:27017/TailorDB";

const DbConfig = async () => {
    try {
        await connect(url).then(() => {
            console.log("database connection established 🚀🚀🤣")
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message)
        } else {
            console.error("An unknown error occurred")
        }
    }
}
export default DbConfig