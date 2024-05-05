import React from 'react'
import ProductsProvider from '../../context/UsersProvider'
import UsersTable from '../../components/UsersTable'
import List from '../../components/List'

type Props = {}

const SearchPage = (props: Props) => {
  return (
    <>
      <ProductsProvider>
        <UsersTable/>
        <List/>
      </ProductsProvider>
    </>
  )
}

export default SearchPage