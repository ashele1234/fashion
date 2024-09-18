
import { model, models, Schema, Document } from "mongoose";
import { IBook } from "../utils/interface";


interface IBookData extends IBook, Document {}


const BookModel = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    service: {
      type: String,
      required: true
    },
    additionalNotes: {
      type: String,
    },
  },
  { timestamps: true }
);

const Bookdata = models.Appointments || model<IBookData>("Appointments", BookModel);

export default Bookdata;
