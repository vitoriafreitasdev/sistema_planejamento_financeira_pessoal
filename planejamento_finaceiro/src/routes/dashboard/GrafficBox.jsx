import React from 'react'

const GrafficBox = ({classN, title, pContent, classN2, component}) => {
  return (
    <div className={classN}>
        <h3>{title}</h3>
        <p>{pContent}</p>
        <div className={classN2}>
            {component}
        </div>
    </div>
  )
}

export default GrafficBox