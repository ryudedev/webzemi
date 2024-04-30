import { SideBarProps, InputProps } from "@/types"

export default function Button({
    role,
    onClick
}: {
    role: 'edit' | 'delete' | 'add',
    onClick: (page: SideBarProps, status: string) => void
}) {
    const button = role === 'edit' ? (
        <button className="w-[150px] h-[40px] border-input bg-white rounded justify-center items-center font-bold hover:bg-[#f0f0f0]" type="submit" onClick={() => onClick(SideBarProps.AddNote, "edit",)}>Edit</button>
    ) : role === 'delete' ? (
        <button className="w-[150px] h-[40px] border-input bg-show-code rounded justify-center items-center text-white font-bold hover:bg-[#101927]" type="submit">Delete</button>
    ) : role === 'add' && <button className="w-[150px] h-[40px] border-input bg-show-code rounded justify-center items-center text-white font-bold hover:bg-[#101927]" type="submit">Add</button>
    return button
}