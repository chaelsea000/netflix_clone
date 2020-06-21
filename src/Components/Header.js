import React, { Component } from 'react'
import { Link }from "react-router-dom";
import styled from "styled-components";


const Header1 = styled.header`
    
`;

const List = styled.ul`
    display:flex;
    &:hover{
        background-color:blue;
    }
`;

const Item = styled.li``;

const sLink = styled(Link)``;



export default class Header extends Component {
    render() {
        return (
            <Header1>
                <List>
                    <Item>
                        <sLink to="/">Movies</sLink>
                    </Item>
                    <Item>
                        <sLink to="/tv">TV</sLink>
                    </Item>
                    <Item>
                        <sLink to="/search">Search</sLink>
                    </Item>
                </List>
            </Header1>
        )
    }
}
