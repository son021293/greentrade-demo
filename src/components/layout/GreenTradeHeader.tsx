import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    Button,
    Burger,
    Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import GTLogo from "../assets/logo.svg";
import { IconWorld } from '@tabler/icons';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.white[0],
        fontSize: theme.fontSizes.sm,
        fontWeight: 700,

        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.white[1],
        },
    },

    linkLabel: {
        marginRight: 5,
    },
}));

interface GreenTradeHeaderProps {
    links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}

export function GreenTradeHeader({ links }: GreenTradeHeaderProps) {
    const { classes } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    return (
        <Header height={HEADER_HEIGHT} sx={{
            borderBottom: 0,
            background: 'linear-gradient(269.27deg, #2ADBA7 13.15%, #0A8A97 95.52%)'
        }}>
            <Container size="xl" className={classes.inner}>
                <Group>
                    <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                    <img src={GTLogo} alt="logo" />
                    {/*<GTLogo/>*/}
                </Group>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <Group>
                    <Group spacing={1}>
                        <IconWorld color="white"/>
                        <Text>EN</Text>
                    </Group>
                    <Button color="white.0" sx={{ height: 30 }}>
                        <Text color="green.0">Login</Text>
                    </Button>
                </Group>

            </Container>
        </Header>
    );
}
