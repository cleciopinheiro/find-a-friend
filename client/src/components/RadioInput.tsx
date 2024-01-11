import Arrow from "../images/Arrow";
import { useNavigate } from "react-router-dom";

export default function RadioInput({
    title,
    description,
}: { title: string, description: string }) {
    const route = title === "Organização" ? "/create/organization" : "/create/user";

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(route);
    }

    return (
        <label htmlFor={title} onClick={handleNavigation} className={`flex w-full border-2 mb-4 justify-between p-6 rounded-lg b-[#E5E7EB] cursor-pointer hover:bg-[#0d3b66] hover:bg-opacity-10 hover:border-[#0d3b66]`}>
            <div className="ml-2 text-sm">
                <h3 
                className="text-gray-900text-[16px] font-semibold leading-6">{title}</h3>
                <p id="helper-radio-text" 
                className="font-normal text-gray-600 text-[14px] leading-5">{description}</p>
            </div>
            <div className="flex items-center h-5 mt-3">
                <Arrow/>
            </div>
        </label>
    )
}