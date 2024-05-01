import { MenuIcon } from "lucide-react"
import { Sidebar } from "./Sidebar"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-white" />
      </SheetTrigger>
      <SheetContent 
        className="p-0 z-[100]"
        side="left"
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}