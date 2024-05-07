import { ReactNode, useState } from 'react';
import UsersContext from './UsersContext'

const UsersProvider = ({children}: {children: ReactNode}) => {
  const [UserId, setUserId] = useState(0)
  const [skip, setSkip] = useState(1)
  const [limit, setLimit] = useState(10)
   const [count, setCount] = useState(30)

  return (
    <UsersContext.Provider value={{UserId, setUserId, skip,setSkip,limit, setLimit, count, setCount}}>
        {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider;