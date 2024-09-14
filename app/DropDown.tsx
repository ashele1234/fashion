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
          <span>Edit</span>
          <span className="ml-auto">⌘ E</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Duplicate</span>
          <span className="ml-auto">⌘ D</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Archive</span>
          <span className="ml-auto">⌘ N</span>
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Menu</DropdownMenuSubTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Move to project…</DropdownMenuItem>
            <DropdownMenuItem>Move to folder…</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Advanced options…</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuSub>

        <DropdownMenuSeparator />
        <DropdownMenuItem>Share</DropdownMenuItem>
        <DropdownMenuItem>Add to favorites</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Delete</span>
          <span className="ml-auto">⌘ ⌫</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default DropDown
