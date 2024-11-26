import { IconBrandGithub, IconBrandYoutube } from '@tabler/icons-react';
import {
    ActionIcon,
    Button,
    Group,
    SimpleGrid,
    Textarea,
    TextInput,
    Title,
} from '@mantine/core';
// import { ContactIconsList } from './ContactIcons';
import classes from './Contact.module.css';

const social = [IconBrandGithub, IconBrandYoutube];

export const Contact = () => {
    const renderIcons = () =>
        social.map((Icon, index) => (
            <ActionIcon
                key={index}
                size={28}
                className={classes.social}
                variant="transparent"
            >
                <Icon size={22} stroke={1.5} />
            </ActionIcon>
        ));

    return (
        <div className={classes.wrapper}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                <div>
                    <Title className={classes.title}>Contact</Title>

                    {/*<ContactIconsList />*/}

                    <Group mt="xl">{renderIcons()}</Group>
                </div>
                <div className={classes.form}>
                    <TextInput
                        label="Email"
                        placeholder="your@email.com"
                        required
                        classNames={{
                            input: classes.input,
                            label: classes.inputLabel,
                        }}
                    />
                    <TextInput
                        label="Name"
                        placeholder="John Doe"
                        mt="md"
                        classNames={{
                            input: classes.input,
                            label: classes.inputLabel,
                        }}
                    />
                    <Textarea
                        required
                        label="Your message"
                        placeholder="I want to order your goods"
                        minRows={4}
                        mt="md"
                        classNames={{
                            input: classes.input,
                            label: classes.inputLabel,
                        }}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button className={classes.control}>
                            Send message
                        </Button>
                    </Group>
                </div>
            </SimpleGrid>
        </div>
    );
};
