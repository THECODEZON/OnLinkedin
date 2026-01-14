import React, { createContext } from 'react'
export const userDataContext=createContext()
function UserContext({children}) {
    let value={}
  return (
    <div>
     <userDataContext.Provider value={value}> 
     {children}
     </userDataContext.Provider> 
    </div>
  )
}

export default UserContext
