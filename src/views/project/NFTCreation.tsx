import {Container, Text, Progress, Button} from "@mantine/core";
import {NFTCreationSteps} from "./NFTCreationSteps";
import projectIcon from "../../assets/projects/project-icon.svg";
import infoIcon from "../../assets/projects/info-icon.svg";
import impactIcon from "../../assets/projects/impact-icon.svg";
import certificateIcon from "../../assets/projects/certificate-icon.svg";
import {useMemo, useState} from "react";
import {CertificationStep} from "./components/CertificationStep";

export const NFTCreation = ({}) => {

    const [active, setActive] = useState(4)

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

    console.log(activeStep)
    return <div>
        <Text size={40} weight={500}>Create Project NFT</Text>

        <Progress value={75} label="75%" size="xl" radius="xs" color="green.0" />

        <NFTCreationSteps steps={steps} active={active}/>

        { activeStep?.component?.({}) }

        <Button
            size="lg"
            variant="gradient"
            styles={(theme) => ({
                root: {
                    background: 'linear-gradient(272.63deg, #2ADBA7 -50.38%, #0A8A97 141.6%)',
                    boxShadow: '0px 1px 12px rgba(34, 214, 172, 0.4)'
                },
            })}
        >Create Project NFT</Button>
    </div>
}
