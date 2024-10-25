import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const themeSwitchHandler = ()=>{
    if (theme == "dark") setTheme("light");
    else setTheme("dark");
  }

  return (
    <Button variant="ghost" className="focus-visible:ring-0 ring-0 focus-visible:ring-neutral-300 focus-visible:dark:ring-neutral-800" size="icon" onClick={themeSwitchHandler}>
      {
        theme == "dark"
        ? <Moon className="h-[1.2rem] w-[1.2rem]" />
        : <Sun className="h-[1.2rem] w-[1.2rem]" />
      }
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
