import { createStyles, Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import GTLogo from "../../assets/logo.svg";
import footerBg from "../../assets/footer-bg.png"

const useStyles = createStyles((theme) => ({
    footer: {
        background: 'linear-gradient(269.27deg, #2ADBA7 13.15%, #0A8A97 95.52%)',
        color: theme.white,
        marginTop: 120,
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    logo: {
        maxWidth: 200,

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    description: {
        marginTop: 5,

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        width: 160,
    },

    link: {
        display: 'block',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.white,
        fontWeight: 600,
        fontSize: theme.fontSizes.xs,
        paddingTop: 7,
        paddingBottom: 7,

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xs / 2,
        color: theme.colorScheme === 'dark' ? theme.white : theme.white,
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        // borderTop: `1px solid ${
        //     theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        // }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    footerBg: {
        // background: `url(${footerBg})`,
        // height: '100%',
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // width: '100%',
        // left: 0,
        // z-index: -1
    },

    social: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },
    },
}));

interface FooterLinksProps {
    data: {
        title: string;
        links: { label: string; link: string }[];
    }[];
}

export function GreenTradeFooter({ data }: FooterLinksProps) {
    const { classes } = useStyles();

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                {/*<Text className={classes.title}>{group.title}</Text>*/}
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner} size="xl">
                <div className={classes.logo}>
                    <img src={GTLogo} alt="logo" />
                    {/*<Text size="xs" color="dimmed" className={classes.description}>*/}
                    {/*    Build fully functional accessible web applications faster than ever*/}
                    {/*</Text>*/}
                </div>

                <div>
                    <Text size="xl" weight={500} mb="29px">
                        Strassburger Strasse 55 <br/>
                        10405 Berlin <br/>
                        Germany
                    </Text>

                    <Text size="sm" mb="29px">
                        (434) 546-4356
                    </Text>

                    <Text<'a'>
                        size="sm"
                        component="a"
                        href="mailto:infor@greentrade.com"
                    >
                        infor@greentrade.com
                    </Text>
                </div>

                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter} size="xl">
                <Text color="dimmed" size="xs">
                    © 2020 Greentrade. All rights reserved.
                </Text>

                {/*<Group spacing={0} className={classes.social} position="right" noWrap>*/}
                {/*    <ActionIcon size="lg">*/}
                {/*        <IconBrandTwitter size={18} stroke={1.5} />*/}
                {/*    </ActionIcon>*/}
                {/*    <ActionIcon size="lg">*/}
                {/*        <IconBrandYoutube size={18} stroke={1.5} />*/}
                {/*    </ActionIcon>*/}
                {/*    <ActionIcon size="lg">*/}
                {/*        <IconBrandInstagram size={18} stroke={1.5} />*/}
                {/*    </ActionIcon>*/}
                {/*</Group>*/}
            </Container>
            <div className={classes.footerBg}/>
        </footer>
    );
}
