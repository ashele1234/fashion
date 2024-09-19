import { Button } from "@/components/ui/button"
import { DropdownMenu} from "@radix-ui/react-dropdown-menu"
import { 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger,
    DropdownMenuSeparator,
  } from "@/components/ui/dropdown-menu";
const DropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="border-black bg-black text-white ">
         Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-full max-sm:w-[300px] sm:w-[300px] md:w-[500px] h-[40vh] flex justify-center items-center flex-col mt-4 font-bold gap-4 transform transition:ease-in-out duration-300">
        <DropdownMenuItem>
        <a href="http://localhost:3000/"><span>Home</span></a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#products"><span>Designs</span></a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href=""><span>About</span></a>
        </DropdownMenuItem>
        <DropdownMenuItem>
         <a href=""><span>Contact</span></a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default DropDown
