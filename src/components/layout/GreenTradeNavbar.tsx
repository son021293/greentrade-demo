import {Group, UnstyledButton, Text, Navbar, MediaQuery} from "@mantine/core";
import React from "react"

interface MainLinkProps {
    icon?: React.ReactNode;
    color: string;
    label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
    return (
        <UnstyledButton
            sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                },
            })}
        >
            <Group>
                <Text size="sm">{label}</Text>
            </Group>
        </UnstyledButton>
    );
}

// function MainLinks() {
//     const links = data.map((link: MainLinkProps) => <MainLink {...link} key={link.label} />);
//     return <div>{links}</div>;
// }

interface GreenTradeNavbarProps {
    opened: boolean,
    data: any[]
}

export const GreenTradeNavbar = ({opened, data}: GreenTradeNavbarProps) => {
    return <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <Navbar
            width={{ xs: 200, sm: 200, lg: 0, xl: 0 }}
            p="md" hiddenBreakpoint="xl" hidden={!opened}>
            {data.map((link: MainLinkProps) => <MainLink {...link} key={link.label} />)}
        </Navbar>
    </MediaQuery>
}
