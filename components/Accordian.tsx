import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Accordian({item}:{item:{question:string, answer:string}}) {

return (
<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>{item.question}</AccordionTrigger>
    <AccordionContent>
      {item.answer}
    </AccordionContent>
  </AccordionItem>
</Accordion>

)
}