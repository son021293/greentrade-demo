import {createStyles, Text, Group} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    steps: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px'
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
        background: theme.colors.green[2]
    }
}));

interface NFTCreationStepsProps {
    steps: {
        label: string;
        icon: any;
    }[];
}

export const NFTCreationSteps = ({steps} : NFTCreationStepsProps) => {
    const { classes, cx } = useStyles();

    return <div className={classes.steps}>
        {steps.map((step, i) => (
            <div key={i} className={cx(classes.step, { [classes.active]: i === 0  })}>
                <Group spacing={10}>
                    <img src={step.icon}/>
                    <Text size="xl">{step.label}</Text>
                </Group>
            </div>
        ))}
    </div>
}
