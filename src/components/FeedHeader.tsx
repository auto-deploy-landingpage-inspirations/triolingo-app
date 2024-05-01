import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"

type Props = {
  title: string
}

export const FeedHeader = ({
  title
}: Props) => {
  return(
    <div className="sticky top-0 backdrop-blur-sm bg-white/95 pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">

      <Link href="/courses">
        <Button
          variant="ghost" 
          size="sm"
        >
          <ArrowLeft 
          className="h-5 w-5 strike-2 text-neutral-400" />
        </Button>
      </Link>

      <h1 className="font-bold text-lg">
        {title}
      </h1>
      <div />
    </div>
  )
}