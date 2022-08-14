import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MantineProvider, Text} from '@mantine/core';
import {GreenTradeHeader} from "./components/layout/GreenTradeHeader";
import {GreenTradeFooter} from "./components/layout/GreenTradeFooter";
import {NFTCreation} from "./views/nft-creation/NFTCreation";
import {Container} from "@mantine/core";

function App() {
    return (
        <MantineProvider theme={{
            fontFamily: 'Inter',
            colorScheme: 'light',
            colors: {
                white: ["#fff", "#f7f7f7"],
                green: ["#22D6AC", "#58DBBA", "#0A8A97", "#58dbba1a", "#58dbbacc", "#58DBBA", "#58DBBA"],
            },
            components: {
                Header: {
                    styles: (theme) => ({
                        root: {
                            color: theme.white
                        },
                    }),
                },
                Select: {
                    styles: (theme) => ({
                        input: {
                            '&:focus-within': {
                                borderWidth: 2
                            }
                        }
                    })
                },
                Radio: {
                    styles: (theme) => ({
                        // radio: {
                        //     height: 33,
                        //     width: 33
                        // },
                        inner: {
                            '& > input' : {
                                borderWidth: 2,
                                background: `${theme.white} !important`
                            }
                        },
                        label: {
                            color: '#5C5C5C',
                            fontWeight: 500,
                            // fontSize: 27
                        },
                        icon: {
                            color: theme.colors.green[6]
                        }
                    })
                }

            },
            primaryColor: 'green',
            // colorScheme: 'light'
        }} withGlobalStyles withNormalizeCSS>
            <GreenTradeHeader links={[
                { link: "", label: "Home" },
                { link: "", label: "Marketplace" },
                { link: "", label: "Launchpad" },
            ]}/>

            <Container size="xl" mt={24}>
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
                    title: "1234",
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
