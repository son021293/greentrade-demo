import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MantineProvider, Text} from '@mantine/core';
import {GreenTradeHeader} from "./components/layout/GreenTradeHeader";
import {GreenTradeFooter} from "./components/layout/GreenTradeFooter";
import {NFTCreation} from "./views/project/NFTCreation";
import {Container} from "@mantine/core";

function App() {
    return (
        <MantineProvider theme={{
            fontFamily: 'Inter',
            colorScheme: 'light',
            colors: {
                white: ["#fff", "#f7f7f7"],
                green: ["#22D6AC", "#58DBBA", "#0A8A97"],
            },
            components: {
                Header: {
                    styles: (theme) => ({
                        root: {
                            color: theme.white
                        },
                    }),
                },

            },
            // primaryColor: 'white',
            // colorScheme: 'light'
        }} withGlobalStyles withNormalizeCSS>
            <GreenTradeHeader links={[
                { link: "", label: "Home" },
                { link: "", label: "Marketplace" },
                { link: "", label: "Launchpad" },
            ]}/>

            <Container size="xl">
                <NFTCreation/>
            </Container>

            <GreenTradeFooter data={[
                {
                    title: "123",
                    links: [
                        { link: "", label: "About"},
                        { link: "", label: "Growers"},
                        { link: "", label: "Merchants"},
                        { link: "", label: "Partners"},
                        { link: "", label: "Contacts"},
                    ]
                },
                {
                    title: "123",
                    links: [
                        { link: "", label: "Facebook"},
                        { link: "", label: "Twitter"},
                        { link: "", label: "Linkedin"},
                        { link: "", label: "Instagram"},
                    ]
                },
            ]}/>
        </MantineProvider>
    );
}

export default App;
