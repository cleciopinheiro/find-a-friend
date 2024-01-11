import React from 'react';

type InputFieldProps = {
    id: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: any) => void,
    error?: string,
    label: string
};

export const InputField: React.FC<InputFieldProps> = ({ id, type, placeholder, value, onChange, error, label }) => (
    <div className="w-full mt-6">
        <label className="flex items-start text-[#0D3B66] font-nunito mb-2" htmlFor={id}>
            {label}
        </label>
        <input
            className={`w-full p-3 ${error ? "border-red-500" : "border-[#D3E2E5]"} border-[1px] rounded-[10px] bg-[#F5F8FA]`}
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
        {error && <p className="text-red-500 mt-1 text-sm flex justify-end">{error}</p>}
    </div>
);
