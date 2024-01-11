export default function Button(
    {
        onClick,
        className,
        title,
    }: {
        onClick?: (x?: any) => void
        className?: string
        title: string
    }
) {
  return (
    <button
    className={`w-full h-[72px] rounded-[20px] bg-[#0D3B66] text-[white]
    font-nunito text-[20px] not-italic font-extrabold leading-8 ${className}`}
    onClick={onClick}
  >
    {title}
  </button>
  )
}
