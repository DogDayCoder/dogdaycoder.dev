import { ActionIcon, Container, Group } from '@mantine/core';
import { IconBrandYoutube } from '@tabler/icons-react';
import classes from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                {/*<Text c="dimmed" size="sm">*/}
                <div>© 2024 dogdaycoder.dev. All rights reserved.</div>
                {/*</Text>*/}
                <Group
                    gap={0}
                    className={classes.links}
                    justify="flex-end"
                    wrap="nowrap"
                >
                    <ActionIcon
                        size="lg"
                        color="gray"
                        variant="subtle"
                        onClick={() =>
                            window.open(
                                'https://www.youtube.com/@DogDayCoder',
                                '_blank',
                            )
                        }
                    >
                        <IconBrandYoutube size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
};
