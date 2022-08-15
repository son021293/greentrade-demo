import {createStyles, Text, Group} from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
    steps: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        marginBottom: 24,

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            flexDirection: 'column',
        },
    },

    step: {
        // height: '65px',
        flex: 1,
        background: theme.colors.green[1],
        color: theme.white,
        borderRadius: '5px',
        fontWeight: 600,
        padding: '12px 24px',
        cursor: 'pointer',
        // fontSize: theme.fontSizes.xl
    },

    active: {
        background: theme.colors.green[2],
        boxShadow: '17.3812px 17.3812px 52.1435px rgba(171, 242, 220, 0.8)'
    }
}));

interface NFTCreationStepsProps {
    active: number
    steps: {
        id: number;
        label: string;
        icon: any;
    }[];
}

export const NFTCreationSteps = ({steps, active} : NFTCreationStepsProps) => {
    const { classes, cx } = useStyles();

    return <div className={classes.steps}>
        {steps.map((step, i) => (
            <div key={i} className={cx(classes.step, { [classes.active]: step.id === active  })}>
                <Group spacing={10}>
                    <img width={25} height={25} src={step.icon}/>
                    <Text size="lg">{step.label}</Text>
                </Group>
            </div>
        ))}
    </div>
}
