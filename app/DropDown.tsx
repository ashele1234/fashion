import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuSub,  } from "@radix-ui/react-dropdown-menu"
import { 
    // DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuSubTrigger
  } from "@/components/ui/dropdown-menu"
const DropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="secondary"className="border-black">
         Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
        <a href="http://localhost:3000/"><span>Home</span></a>
          <span className="ml-auto">⌘ H</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#products"><span>Designs</span></a>
          <span className="ml-auto">⌘ D</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>About</span>
          <span className="ml-auto">⌘ A</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Contact</span>
          <span className="ml-auto">⌘ C</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default DropDown
