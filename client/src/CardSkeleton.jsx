import React from 'react'
import "./cardSkeleton.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = ({cards}) => {
  return (
    Array(cards).fill(0).map((item, index) =>
        <div className='cardSkeleton' key={index}>
        <div className="leftColumn">
            <Skeleton circle width={40} height={40} />
        </div>
        <div className="rightColumn">
            <Skeleton count={6} style={{fontSize: "1.5rem", marginBottom: ".6rem"}} />
        </div>
    
    </div>
        )
    
  )
}

export default CardSkeleton