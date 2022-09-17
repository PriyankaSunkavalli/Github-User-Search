import React from 'react';
import styled from 'styled-components';

const Root=styled.div`
    height: 400px;
    width: 500px;
    background-color: #161626;
    border-radius: 5px;
  border-radius: 20px;
  padding: 20px;
  color: white;
  display: flex;
  align-items: center;
flex-direction: column;

  p{
      color: blue;
      margin: 0;
      text-align: center;
  }
  h1{
      margin: 0;
      text-align: center;
  }
  h4{
      margin: 0;
      text-align: center;
  }

`
const Title=styled.div`
    
`

const DataCard=styled.div`
    height: 100px;
    width: 450px;
    background-color: black;
    border-radius: 10px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    p{
        color: white;
    }
`
const Footer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
p{
    color: white;
    padding: 20px;
}
    
`
const RightContainer=styled.div`
    
`
const LeftContainer=styled.div`
    
`
const Repos=styled.div`
    
`
const Followers=styled.div`
    
`
const Following=styled.div`
    
`

const CardComponent = ({data}) => {
    console.log(data)
  return (
    <Root>
        <h1>{data.name}</h1>
        <p>@{data.login}</p>
        <h4>Joined {data.created_at}</h4>
        <h3>
            wqe were retr wsa asdsaf ergrg rteyh tyhet sdsf wede qwfd rtgtrh efrrwef tghet edfe rthr dfrg
        </h3>

        <DataCard>
            <Repos>
                <p>Repos</p>
                <p>{data.public_repos}</p>

            </Repos>
            <Followers>
            <p>Followers</p>
                <p>{data.followers}</p>

            </Followers>
            <Following>
            <p>Following</p>
                <p>{data.following}</p>

            </Following>

        </DataCard>
        <Footer>
            <LeftContainer>
                <p>{data.location}</p>
                <p>https://github.com</p>
            </LeftContainer>
            <RightContainer>
                <p>Not Available</p>
                <p>@github</p>
            </RightContainer>
        </Footer>
      
    </Root>
  );
}

export default CardComponent;
