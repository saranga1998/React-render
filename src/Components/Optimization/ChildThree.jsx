import React from 'react'

export const ChildThree= ({name})=> {
    console.log("Child Three render");
  return (
    <div>
      Hello {name}
    </div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)