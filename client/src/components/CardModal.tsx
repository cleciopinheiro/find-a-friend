export default function CardModal({
  title,
  icon,
}: {
  title?: string;
  icon?: JSX.Element;
}) {
  return (
    <div className="bg-[#D9D9D9] bg-opacity-50 w-[135px] h-[139px] flex flex-col items-center justify-center gap-2 rounded-[15px] ">
      <div>{icon}</div>
      <div>
        <h3 className="font-extrabold text-[20px] text-[#0D3B66] font-nunito text-center leading-[34px]">
          {title}
        </h3>
      </div>
    </div>
  );
}
