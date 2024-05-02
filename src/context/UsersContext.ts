import React from 'react'

type Context= {
    UserId: number,
    setUserId: (UserId: number) => void,
    skip: number,
    setSkip: (skip: number) => void,
    limit: number,
    setLimit: (limit: number) => void,
    count:number,
    setCount:(count:number) => void
};




const UsersContext = React.createContext<Context>({
    UserId: 0,
    setUserId: () => {},
    skip: 0,
    setSkip: () => {},
    limit: 0,
    setLimit: () => {},
    count: 0,
    setCount: () => {}
});





export default UsersContext;