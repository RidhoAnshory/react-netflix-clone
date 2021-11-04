import React, { createContext, useContext, useState } from "react";
import {
    Container,
    Title,
    Item,
    Inner,
    Header,
    Body,
} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }){
    return(
        <Container { ...restProps}>

            <Inner>{children}</Inner>
        </Container>
    );
}

Accordion.Title = function AccordionTitle({ children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
};

//In the item we need a state and context to change the toggle behavior
Accordion.Item = function AccordionItem({ children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
};



// The header throws a context that by default is false
Accordion.Header = function AccordionHeader({ children, ...restProps}){
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    // onClick function trigger the context (toggleShow)
    // !toggleShow works like this
    // the default value is false so when the onClick function triggers the !toggleShow invert it and the value become true
    console.log(toggleShow);
    return (
        <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)}{...restProps}>
        {children}
        {toggleShow ? (
            <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
            <img src="/images/icons/add.png" alt="Open"/>
        )}
        </Header>
    )
};

Accordion.Body = function AccordionBody({ children, ...restProps}) {
    // the context is gets from the header 
    const { toggleShow } = useContext(ToggleContext);
    // this body works when the toggle sets true it will return a body but if false it will return null;
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}