import {Container, Text, Progress, Button, Group, Code} from "@mantine/core";
import Joi from 'joi';
import { useForm, joiResolver } from '@mantine/form';
import {NFTCreationSteps} from "./NFTCreationSteps";
import {useMemo, useState} from "react";
import {CertificationStep} from "./components/CertificationStep";

import projectIcon from "../../assets/projects/project-icon.svg";
import infoIcon from "../../assets/projects/info-icon.svg";
import impactIcon from "../../assets/projects/impact-icon.svg";
import certificateIcon from "../../assets/projects/certificate-icon.svg";

const schema = Joi.object({
    certificate: {
        status: Joi.string().required().messages({"any.required": `"username" is a required.`}),
        // type: Joi.string().required().message('Type is required'),
        // issue_date: Joi.string().required().message('Issue Date is required'),
        // token_issuer: Joi.string().required().message('Token Issuer is required'),
        // classification: Joi.string().required().message('Classification is required'),
        measurement: {
            // sensor: Joi.string().required().message('Sensor is required'),
        }
    }
});

export const NFTCreation = ({}) => {

    const [active, setActive] = useState(4)

    const form = useForm({
        validate: joiResolver(schema),
        initialValues: {
            certificate: {
                status: '',
                type: '',
                issue_date: '',
                token_issuer: '',
                classification: '',
                measurement: {}
            }
        }
    })

    const steps = [
        { label: "Project Data", icon: projectIcon },
        { label: "Further Information", icon: infoIcon },
        { label: "Project Impact", icon: impactIcon },
        {
            label: "Certification",
            icon: certificateIcon,
            component: CertificationStep
        },
    ].map((step, i) => ({ id: i + 1, ...step}))

    const activeStep = useMemo(() => steps.find((step) => step.id === active), [ active ])


    return <>
        <Text mb={24} size={40} weight={500}>Create Project NFT</Text>

        <Progress value={75} label="75%" size={30} radius="xs" color="green.0" mb={24}/>

        <NFTCreationSteps steps={steps} active={active}/>

        { activeStep?.component?.({ form }) }

        <Group mt={24} position="right">
            <Button
                onClick={() => {
                    console.log(form.validate())
                }}
                size="lg"
                variant="gradient"
                styles={(theme) => ({
                    root: {
                        background: 'linear-gradient(272.63deg, #2ADBA7 -50.38%, #0A8A97 141.6%)',
                        boxShadow: '0px 1px 12px rgba(34, 214, 172, 0.4)'
                    },
                })}
            >Create Project NFT</Button>
        </Group>

        <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </>
}
