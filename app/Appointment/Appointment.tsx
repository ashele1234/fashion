// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// "
// import { format } from "date-fns"

// export default function BookAppointment() {
//   const router = useRouter()
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [phone, setPhone] = useState('')
//   const [date, setDate] = useState<Date | undefined>(undefined)
//   const [time, setTime] = useState('')
//   const [serviceType, setServiceType] = useState('')
//   const [notes, setNotes] = useState('')

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Here you would typically send the form data to your backend
//     console.log({ name, email, phone, date, time, serviceType, notes })
//     // For now, we'll just show an alert and redirect to the home page
//     alert('Appointment booked successfully!')
//     router.push('/http://localhost:3000/')
//   }

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h1 className="text-4xl font-bold mb-8 text-center">Book an Appointment</h1>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//           <Input 
//             type="text" 
//             id="name" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <Input 
//             type="email" 
//             id="email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
//           <Input 
//             type="tel" 
//             id="phone" 
//             value={phone} 
//             onChange={(e) => setPhone(e.target.value)} 
//             required 
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
//           <Calendar
//             mode="single"
//             selected={date}
//             onSelect={setDate}
//             className="rounded-md border"
//           />
//         </div>
//         <div>
//           <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
//           <Select onValueChange={setTime}>
//             <SelectTrigger>
//               <SelectValue placeholder="Select a time" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="09:00">09:00 AM</SelectItem>
//               <SelectItem value="10:00">10:00 AM</SelectItem>
//               <SelectItem value="11:00">11:00 AM</SelectItem>
//               <SelectItem value="12:00">12:00 PM</SelectItem>
//               <SelectItem value="13:00">01:00 PM</SelectItem>
//               <SelectItem value="14:00">02:00 PM</SelectItem>
//               <SelectItem value="15:00">03:00 PM</SelectItem>
//               <SelectItem value="16:00">04:00 PM</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div>
//           <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">Service Type</label>
//           <Select onValueChange={setServiceType}>
//             <SelectTrigger>
//               <SelectValue placeholder="Select a service" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="suit">Suit Fitting</SelectItem>
//               <SelectItem value="dress">Dress Fitting</SelectItem>
//               <SelectItem value="alteration">Alterations</SelectItem>
//               <SelectItem value="consultation">Style Consultation</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div>
//           <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
//           <Input 
//             id="notes" 
//             value={notes} 
//             onChange={(e) => setNotes(e.target.value)} 
//             className="h-24"
//           />
//         </div>
//         <Button type="submit" className="w-full">Book Appointment</Button>
//       </form>
//     </div>
//   )
// }