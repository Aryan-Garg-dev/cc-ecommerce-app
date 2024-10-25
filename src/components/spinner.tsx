import { LoaderCircle } from "lucide-react"

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "text-muted-foreground, animate-spin",
  {
    variants: {
      size: {
        default: "w-4 h-4",
        small: "w-2 h-2",
        lg: "w-6 h-6",
        icon: "w-10 h-10",
      }
    },
    defaultVariants: {
      size: "default",
    }
  }
);

type SpinnerProps = VariantProps<typeof spinnerVariants>

export const Spinner = ({
  size
}: SpinnerProps)=>{
  return (
    <LoaderCircle className={cn(spinnerVariants({size}))} />
  )
}


