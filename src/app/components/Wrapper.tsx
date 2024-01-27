import React, { PropsWithChildren } from 'react'

function Wrapper({ className, children }: PropsWithChildren<{ className?: string }>) {
    return (
        <div className={`
         max-w-[1440px]
         min-h-screen
         w-full
         py-6 px-4
         items-center mx-auto ${className}`}>{children}</div>
    )
}

export default Wrapper