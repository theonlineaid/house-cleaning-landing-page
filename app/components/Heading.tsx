import React from 'react'

type Props = {
    text: string
    align: string
    size?: string
    marginBottom?: string
}

const HeadingComponent = ({text, align, size= "text-4xl", marginBottom = 'mb-10'}: Props) => {
  return (
    <h1 className={`${size} ${align} font-bold ${marginBottom}`}>{text}</h1>
  )
}

export default HeadingComponent