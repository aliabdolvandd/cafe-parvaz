import React from 'react'

interface Props {
    error?: string
    children?: React.ReactNode
}

const HandleError = ({ error, children }: Props) => {
    return (
        <div className="flex flex-col gap-2 relative">
            {children}
            {error && (
                <span className="text-red-500 text-[10px] font-semibold mt-1 absolute top-full right-2">
                    {error}
                </span>
            )}
        </div>
    )
}

export default HandleError
