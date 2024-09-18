'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Page = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhone] = useState('')
  const [date, setDate] = useState("")
  const [time, setTime] = useState('')
  const [serviceType, setServiceType] = useState('')
  const [notes, setNotes] = useState('')

  const FormAction = async (formdata: FormData) => {
    formdata.get("name")
    formdata.get("email")
    formdata.get("phoneNumber")
    formdata.get("date")
    formdata.get("time")
    formdata.get("service")
    formdata.get("additionalNotes")
    const url = "/Api/booking"
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, phoneNumber, date, time, serviceType, notes })
      })
      
      if (response.ok) {
       setTimeout(() => {
        router.push("http://localhost:3000/")
       }, 3000)
      } else {
        console.error("Error signing up")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Book an Appointment</h1>
      <form onSubmit={(e) => { e.preventDefault(); FormAction(new FormData(e.currentTarget as HTMLFormElement)); }} className="max-w-md mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <Input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <Input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)} 
            required
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <Select onValueChange={setTime}>
            <SelectTrigger>
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="09:00">09:00 AM</SelectItem>
              <SelectItem value="10:00">10:00 AM</SelectItem>
              <SelectItem value="11:00">11:00 AM</SelectItem>
              <SelectItem value="12:00">12:00 PM</SelectItem>
              <SelectItem value="13:00">01:00 PM</SelectItem>
              <SelectItem value="14:00">02:00 PM</SelectItem>
              <SelectItem value="15:00">03:00 PM</SelectItem>
              <SelectItem value="16:00">04:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service Type</label>
          <Select onValueChange={setServiceType}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="suit">Suit Fitting</SelectItem>
              <SelectItem value="dress">Dress Fitting</SelectItem>
              <SelectItem value="alteration">Alterations</SelectItem>
              <SelectItem value="consultation">Style Consultation</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
          <Input
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="h-24"
          />
        </div>
        <Button type="submit" className="w-full" onClick={() => alert("Appointment Booked Successfully")}>Book Appointment</Button>
      </form>
    </div>

  )
}
export default Page
