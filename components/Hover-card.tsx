import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDemo() {
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover over me !!!</Button>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-64 flex-col gap-0.5">
        <div className="font-semibold">@bishalbhat2002</div>
        <div>Hello my name i Bishal bhat.</div>
        <div className="mt-1 text-xs text-muted-foreground">
          Joined facebook 2018
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
