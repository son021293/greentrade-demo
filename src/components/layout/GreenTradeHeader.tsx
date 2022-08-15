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
import GTLogo from "../../assets/logo.svg";
import { IconWorld } from '@tabler/icons';
import { useEffect } from "react";
import { hooks, metaMask } from "../../utils/connectors/metaMask";
import truncateHash from "../../utils/truncateHash";

const HEADER_HEIGHT = 80;

const {
    useChainId,
    useAccounts,
    useError,
    useIsActivating,
    useIsActive,
    useProvider,
    useENSNames
} = hooks;


const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('md')]: {
            display: 'none',
        },
    },

    languages: {
        [theme.fn.smallerThan('md')]: {
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
    opened: boolean,
    setOpened: (a:boolean) => void
}

export function GreenTradeHeader({ links, opened, setOpened }: GreenTradeHeaderProps) {
    const { classes } = useStyles();
    // const [opened, { toggle }] = useDisclosure(false);
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

    const chainId = useChainId();
    const accounts = useAccounts();
    const error = useError();
    const isActivating = useIsActivating();
    const isActive = useIsActive();

    // attempt to connect eagerly on mount
    useEffect(() => {
        metaMask?.connectEagerly();
    }, []);

    return (
        <Header height={HEADER_HEIGHT} sx={{
            borderBottom: 0,
            background: 'linear-gradient(269.27deg, #2ADBA7 13.15%, #0A8A97 95.52%)'
        }}>
            <Container size="xl" className={classes.inner}>
                <Group>
                    <Burger opened={opened} onClick={() => setOpened(!opened)} className={classes.burger} size="sm" />
                    <img src={GTLogo} alt="logo" />
                    {/*<GTLogo/>*/}
                </Group>
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <Group>
                    <Group spacing={1} className={classes.languages}>
                        <IconWorld color="white"/>
                        <Text>EN</Text>
                    </Group>

                    {isActive ? (
                        <Group>
                            {accounts ? truncateHash(accounts[0]) : null}
                            <Button color="white.0" sx={{ height: 30 }} onClick={() => metaMask.deactivate()}>
                                <Text color="green.0">Logout</Text>
                            </Button>
                        </Group>
                    ) : (
                        <Button
                            disabled={isActivating}
                            color="white.0" sx={{ height: 30 }}
                            onClick={() => {
                                if(error) {
                                    alert(error.message)
                                    return;
                                }

                                metaMask.activate();
                            }}>
                            <Text color="green.0">Login</Text>
                        </Button>
                    )}
                </Group>

            </Container>
        </Header>
    );
}
