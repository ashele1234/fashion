import Bookdata from "@/app/models/BookingModel";
import DbConfig from "@/app/utils/DbConfig";
import { NextRequest, NextResponse } from "next/server";

// POST Request Handler
export const POST = async (req: NextRequest) => {
  try {
    await DbConfig();
    const { name, email, phoneNumber, date, time, service, additionalNotes } = await req.json();
    
    const newBooking = await Bookdata.create({
      name,
      email,
      phoneNumber,
      date,
      time,
      service,
      additionalNotes,
    });

    return NextResponse.json({
      message: "Session booked successfully",
      status: 200,
      data: newBooking,
    });
  } catch (error) {
    console.error("Error booking session:", error);
    return NextResponse.json({
      message: "Session booking unsuccessful",
      status: 400,
    });
  }
};

// GET Request Handler
export const GET = async () => {
  try {
    await DbConfig();
    const bookings = await Bookdata.find();

    return NextResponse.json({
      message: "Sessions retrieved successfully",
      status: 200,
      data: bookings,
    });
  } catch (error) {
    console.error("Error retrieving sessions:", error);
    return NextResponse.json({
      message: "Failed to retrieve sessions",
      status: 400,
    });
  }
};
