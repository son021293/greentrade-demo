import {Container, Text, Progress} from "@mantine/core";
import {NFTCreationSteps} from "./NFTCreationSteps";
import projectIcon from "../../assets/projects/project-icon.svg";
import infoIcon from "../../assets/projects/info-icon.svg";
import impactIcon from "../../assets/projects/impact-icon.svg";
import certificateIcon from "../../assets/projects/certificate-icon.svg";

export const NFTCreation = ({}) => {

    const steps = [
        { label: "Project Data", icon: projectIcon },
        { label: "Further Information", icon: infoIcon },
        { label: "Project Impact", icon: impactIcon },
        { label: "Certification", icon: certificateIcon },
    ]

    return <div>
        <Text size={40} weight={500}>Create Project NFT</Text>

        <Progress value={75} label="75%" size="xl" radius="xs" color="green.0" />
        <NFTCreationSteps steps={steps}/>
    </div>
}
