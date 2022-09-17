import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Root=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 70px;
    width: 500px;
    background-color: #161626;
    margin-bottom: 20px;
  border-radius: 20px;
  padding: 0px 20px;


   input{
    background-color: #161626;
    border-radius: 5px;
    border: 0;
    color: white;

   }
   button{
       border: 0;
    height: 40px;
    width: 150px;
    border-radius: 20px;
    background-color: blue;

   }
`

const SearchComponent = ({data,setData}) => {
    const [search,setSearch]=useState('')
    const getUser=()=>{
        axios.get(`https://api.github.com/users/${search}`)
        .then(res=>{setData(res.data)})
        .catch(err=>{console.log(err)})
    }
  return (
    <Root>
        <input type='text' placeholder='Search Github name...' value={search} onChange={(e)=>setSearch(e.target.value)}>

        </input>
        <button onClick={getUser}>Search</button>

    </Root>
  )
}

export default SearchComponent