import { twMerge } from 'tailwind-merge';
export default function Separator({className}) {
  return (
    <div className={twMerge("border border-gold-500 w-10 mb-4", className)} />
  )
}
