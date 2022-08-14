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

export const CertificationStep = ({ form } : any) => {
    const { classes } = useStyles()

    return <div className={classes.wrapper}>
        <FormGroup label="Certification Status">
            <Radio.Group
                {...form.getInputProps('certificate.status')}
            >
                <Radio value="yes" label="Yes" />
                <Radio value="pending" label="Pending" />
                <Radio value="no" label="No" />
            </Radio.Group>
        </FormGroup>

        <FormGroup label="Certification">
            <Select
                {...form.getInputProps('certificate.type')}
                rightSection={<IconChevronDown size={14} />}
                placeholder="Select a certification"
                data={[
                    { value: 'CER', label: 'Certified Emission Reduction (CER)' },
                    { value: 'VCU', label: 'Verified Carbon Units (VCU) ' },
                ]}
            />
        </FormGroup>

        <FormGroup label="Certificate Issued date">
            <DatePicker
                {...form.getInputProps('certificate.issue_date')}
                placeholder="Select Certificate Issued date" required
            />
        </FormGroup>

        <FormGroup label="Token Issuer">
            <Select
                {...form.getInputProps('certificate.token_issuer')}
                rightSection={<IconChevronDown size={14} />}
                placeholder="Select a Token Issuer"
                data={[
                    { value: 'Gmbh', label: 'GreenTrade Impact GmbH' },
                ]}
            />
        </FormGroup>

        <FormGroup label="Classification">
            <Radio.Group
                {...form.getInputProps('certificate.classification')}
                required
            >
                <Radio value="avoidance" label="Avoidance" />
                <Radio value="removal" label="Removal" />
            </Radio.Group>
        </FormGroup>

        <FormGroup label="Measurement">
            <TextInput
                mb="xl"
                label="IoT Sensor"
                placeholder="IoT Sensor"
                {...form.getInputProps('certificate.measurement.sensor')}
                // error="both below the input"
                // inputWrapperOrder={['label', 'input', 'description', 'error']}
            />
            <TextInput
                mb="xl"
                label="Geosatellite"
                placeholder="Location XY..."
                {...form.getInputProps('certificate.measurement.geo_satellite')}
                // error="both below the input"
                // inputWrapperOrder={['label', 'input', 'description', 'error']}
            />
            <TextInput
                mb="xl"
                label="Drone Footage"
                placeholder="Data XY"
                {...form.getInputProps('certificate.measurement.drone_footage')}
                // error="both below the input"
                // inputWrapperOrder={['label', 'input', 'description', 'error']}
            />

            <Button>Other Measurement</Button>
        </FormGroup>
    </div>
}
