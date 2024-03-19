import React from 'react'

const MycustomButtonComp = ({children,className,disabled,onClick, ...rest}) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick} {...rest}>{children}</button>
  )
}

export default MycustomButtonComp
