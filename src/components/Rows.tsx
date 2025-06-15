import React from 'react'

interface RowsProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void
}
const Rows : React.FC<RowsProps> = ({children, className, onClick}) => {
  return (
    <div onClick={onClick} className={`flex ${className}`}>{children}</div>
  )
}

export default Rows