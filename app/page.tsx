import Accordian from "@/components/Accordian";
import CardX from "@/components/CardX";
import { DialogDemo } from "@/components/DialogBox";
import { accordianData } from "@/data/accordianData";
import { HoverCardDemo } from "@/components/Hover-card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SonnerTypes } from "@/components/SonnerExample";
import { LoginForm } from "@/components/LoginForm";
import { CarouselDemo } from "@/components/Carousel";
import { DatePickerDemo } from "@/components/DatePicker";
import DrawerDemo from "@/components/Drawer";
import { DrawerScrollableContent } from "@/components/RightDrawer";




export default function Page() {


  return <>
  <div className="container mx-auto flex flex-col justify-center items-center py-10 gap-4">
    {/* Card shown as an example */}
    <CardX />

    {/* Accordion shown as an example */}
    <div className="w-full sm:w-4/10 flex flex-col gap-4">
      {
        accordianData.map((item, index) => (
          <Accordian item={item} key={index} />
        ))
      }
    </div>

    <div className="flex justify-center gap-5">
        
    {/* Dialog shown as an example */}
    <DialogDemo />


    {/* Hover Card shown as an example */}
    <HoverCardDemo />

    </div>
    
    {/* Sonner Toast Example buttons */}
    <SonnerTypes />

    <div className="w-full flex justify-center mt-5">
        <LoginForm />
    </div>

    
    {/* Carousel shown as an example */}
    <h1 className="text-2xl font-bold text-center mt-2">Carousel Example</h1>
    <CarouselDemo />

    {/* Date Picker as an example */}
    <h1 className="text-2xl font-bold text-center mt-2">Date Picker Example</h1>
      <DatePickerDemo />

    
    {/* Drawer as an example */}
    <h1 className="text-2xl font-bold text-center mt-2">Drawer Example</h1>
      <DrawerDemo />


    {/* Sider Drawer as an example */}
    <h1 className="text-2xl font-bold text-center mt-2">Sider Drawer Example</h1>
      <DrawerScrollableContent />


  </div>
  </>;
};

