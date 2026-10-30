export function Card({title, value, description}) {
  return (
    <div className="flex flex-col justify-center items-start bg-gray-300 rounded-[12px] p-4 border border-brow-300 w-full gap-4">
      <h1 className="text-brow-200 text-[12px] leading-[16px] uppercase tracking-widest font-body">{title}</h1>
      <p className="text-brow-100 font-bold text-[24px] leading-[32px] font-display">{value}</p>
      <span className="text-brow-200 text-[12px] leading-[16px] font-body">
        {description}
      </span>
    </div>
  )
}
