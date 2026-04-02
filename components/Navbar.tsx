import { ToggleTheme } from "@/components/ToggleTheme";


type Props = {}


const Navbar = (props: Props) => {

     const navlinks = [
          {name: 'Home', href: '/'},
          {name: 'About', href: '/about'},
          {name: 'Contact', href: '/contact'}
     ]

     return (
    <nav className="flex justify-between mt-2 container mx-auto px-10 sticky top-4 z-50">
          <span className="text-xl font-bold">LOGO</span>
          <ul className="flex gap-3 justify-center items-center">
               {navlinks.map((link) => (
                    <li key={link.name}>
                         <a href={link.href} className="bg-[--color-foreground] text-[--color-background] p-2 rounded" >{link.name}</a>
                    </li>
               ))}
               {/* Theme Toggle */}
               <ToggleTheme />
          </ul>
          
          
          
    </nav>
  )
}

export default Navbar