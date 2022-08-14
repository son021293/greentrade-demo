import {createStyles, Radio, Select, TextInput, Button} from "@mantine/core";
import { DatePicker } from '@mantine/dates';
import {FormGroup} from "../../../components/FormGroup";
import { IconChevronDown } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    wrapper: {
        background: theme.colors.green[3],
        padding: '48px'
    },
    radioGroup: {
        paddingTop: 'unset'
    }
}));

export const CertificationStep = ({}) => {
    const { classes } = useStyles()

    return <div className={classes.wrapper}>
        <FormGroup label="Certification Status">
            <Radio.Group
                required
            >
                <Radio value="react" label="React" />
                <Radio value="svelte" label="Svelte" />
                <Radio value="ng" label="Angular" />
                <Radio value="vue" label="Vue" />
            </Radio.Group>
        </FormGroup>

        <FormGroup label="Certification">
            <Select
                rightSection={<IconChevronDown size={14} />}
                placeholder="Pick one"
                data={[
                    { value: 'react', label: 'React' },
                    { value: 'ng', label: 'Angular' },
                    { value: 'svelte', label: 'Svelte' },
                    { value: 'vue', label: 'Vue' },
                ]}
            />
        </FormGroup>

        <FormGroup label="Certificate Issued date">
            <DatePicker placeholder="Pick date" required />
        </FormGroup>

        <FormGroup label="Token Issuer">
            <Select
                rightSection={<IconChevronDown size={14} />}
                placeholder="Select a Token Issuer"
                data={[
                    { value: 'react', label: 'React' },
                    { value: 'ng', label: 'Angular' },
                    { value: 'svelte', label: 'Svelte' },
                    { value: 'vue', label: 'Vue' },
                ]}
            />
        </FormGroup>

        <FormGroup label="Classification">
            <Radio.Group
                required
            >
                <Radio value="react" label="Avoidance" />
                <Radio value="svelte" label="Removal" />
                {/*<Radio value="ng" label="Angular" />*/}
                {/*<Radio value="vue" label="Vue" />*/}
            </Radio.Group>
        </FormGroup>

        <FormGroup label="Classification">
            <TextInput
                mb="xl"
                label="Custom layout"
                placeholder="Custom layout"
                // error="both below the input"
                // inputWrapperOrder={['label', 'input', 'description', 'error']}
            />
            <TextInput
                mb="xl"
                label="Custom layout"
                placeholder="Custom layout"
                // error="both below the input"
                // inputWrapperOrder={['label', 'input', 'description', 'error']}
            />
            <TextInput
                mb="xl"
                label="Custom layout"
                placeholder="Custom layout"
                // error="both below the input"
                // inputWrapperOrder={['label', 'input', 'description', 'error']}
            />

            <Button>Other Measurement</Button>
        </FormGroup>
    </div>
}
