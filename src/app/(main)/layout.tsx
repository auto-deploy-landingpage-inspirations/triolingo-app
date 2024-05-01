import { Sidebar } from "@/components/Sidebar"
import { MobileHeader } from "@/components/MobileHeader"
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs"

type Props = {
  children: React.ReactNode
}

const MainLayout = ({children}: Props) => {
  return ( 
    <>
      <SignedIn>
        <MobileHeader />
        <Sidebar className="hidden lg:flex" />
        <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
          <div className="max-w-[1056px] mx-auto pt-6 h-full">
            {children}
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
   )
}
 
export default MainLayout