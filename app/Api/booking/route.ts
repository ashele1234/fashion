import Bookdata from "@/app/models/BookingModel";
import DbConfig from "@/app/utils/DbConfig"
import { NextRequest, NextResponse } from "next/server";


 export const POST=async(req:NextRequest,res:NextResponse)=>{
 try {
    await DbConfig();
    const{name,email,phoneNumber,date,time,service,additionalNotes}= await req.json()
        const Book = await Bookdata.create({ 
            name,
            email,
            phoneNumber,
            date,
            time,
            service,
            additionalNotes,})
            return NextResponse.json({
                message:"session booked successfuly",
                status:200,
                data:Book
            })
    
 } catch (res) {
    return NextResponse.json({
        message:"session booking unsuccessfuly",
        status:400,
    })
 }
}

export const GET=async(req:NextRequest,res:NextResponse)=>{
    try {
       await DbConfig();
           const Book = await Bookdata.find()
               return NextResponse.json({
                   message:"session gotten successfuly",
                   status:200,
                   data:Book
               })
       
    } catch (res) {
       return NextResponse.json({
           message:"session getting unsuccessfuly",
           status:400,
       })
    }
   }

   export const DELETE=async(req:NextRequest,res:NextResponse)=>{
    try {
       await DbConfig();
           const Book = await Bookdata.findByIdAndDelete()
               return NextResponse.json({
                   message:"session deleted successfuly",
                   status:200,
                   data:Book
               })
       
    } catch (res) {
       return NextResponse.json({
           message:"error deleting unsuccessfuly",
           status:400,
       })
    }
   }