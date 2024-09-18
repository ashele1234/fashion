import { timeStamp } from "console";
import { Ibook } from "../utils/interface";
import { model, models, Schema } from "mongoose";



interface Ibookdata extends Ibook,Document{}

const IbookModel=new Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String
        },
         phoneNumber:{
            type:String
        },
         date:{
            type:String
        },
        time:{
            type:String
        },
        service:{
            type:String
        },
         additionalNotes:{
            type:String
        },
    },
    {timestamps:true}
)

const Bookdata = models.books || model<Ibookdata>("Apointments",IbookModel)

export default Bookdata

