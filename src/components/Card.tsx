import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import Image from "next/image"

type Props = {
  id: number
  title: string
  imageSrc: string
  onClick: (id: number) => void
  disabled?: boolean
  active?: boolean
}

export const Card = ({ 
  id, title, imageSrc, onClick, disabled, active 
}: Props) => {
  return(
    <div 
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]",
        disabled && "pointer-events-none opacity-50",
        active && "border-sky-500 bg-sky-50 text-sky hover:bg-sky-100"
      )}
    >
      <div className="min-h-[24px] w-full flex items-center justify-end">
        { active && (
          <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
            <Check 
              className="text-white stroke-[4] h-4 w-4"
            />
          </div>
        )}
      </div>

      <Image 
        src={imageSrc}
        alt={title}
        width={70}
        height={93.33}
        className="rounded-lg drop-shadow-md border object-cover" />

      <p className="text-neutral-700 text-center font-bold mt-3">
        {title}
      </p>
    </div>
  )
}

