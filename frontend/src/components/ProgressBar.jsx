import { twMerge } from 'tailwind-merge'

export function ProgressBar({className}) {
  return (
    <div className={twMerge("border-2 w-[50%] rounded-2xl border-gold-500 mb-6", className)} />
  )
}
