

const TooltipBox = ({ msg, active }: { msg: string, active: boolean }) => {
    return (
        <div className={`absolute z-50 justify-center w-200 h-100 -top-[150%] left-[50%] -translate-x-1/2 duration-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
            <span>
                {msg}
            </span>
        </div>
    );
}

export default TooltipBox