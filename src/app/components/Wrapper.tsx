import React, { CSSProperties, PropsWithChildren } from 'react'

function Wrapper({ className, style, children }: PropsWithChildren<{ className?: string, style?: CSSProperties }>) {
    return (
        <div className={`
         max-w-[1440px]
         min-h-screen
         w-full
         py-6 px-4
         overflow-x-hidden
         items-center mx-auto ${className}`}
         style={style}>{children}</div>
    )
}

export default Wrapper