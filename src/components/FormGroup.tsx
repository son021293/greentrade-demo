import {createStyles} from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
    formGroup: {
        // background: theme.colors.green[3]
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        paddingBottom: 5,
        marginBottom: 42,
        '&:not(:last-child)': {
            borderBottom: '1px solid #D9D9D9',
        }
    },
    label: {
        fontSize: theme.fontSizes.xl,
        fontWeight: 600,
        color: theme.colors.green[2]
    },
    content: {
        width: 500
    }
}));

interface FormGroupProps {
    label: string
    children: React.ReactNode
}

export const FormGroup = ({label, children}: FormGroupProps) => {
    const { classes } = useStyles()
    return <div className={classes.formGroup}>
        <div className={classes.label}>
            {label}
        </div>

        <div className={classes.content}>
            {children}
        </div>
    </div>
}
