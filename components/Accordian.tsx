import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { accordianData } from "@/data/accordianData";

export default function Accordian() {

return (
<Accordion className="w-95 mx-auto " type="single" collapsible >
  {
    accordianData.map((item, index) => (
      <AccordionItem value={`item-${index + 1}`} key={index}>
        <AccordionTrigger>{item.question}</AccordionTrigger>
        <AccordionContent>
          {item.answer}
        </AccordionContent>
      </AccordionItem> 
    ))
  }

</Accordion>

)
}