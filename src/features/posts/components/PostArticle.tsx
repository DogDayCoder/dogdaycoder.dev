import { IconCopy, IconHeart } from '@tabler/icons-react';
import {
    ActionIcon,
    Badge,
    Card,
    Group,
    Image,
    Text,
    useMantineTheme,
} from '@mantine/core';
import classes from './PostArticle.module.css';
import { Post } from '../types/post.ts';

export interface PostArticleProps {
    key: string;
    article: Post;
    liked?: () => void;
    copied?: () => void;
}

export const PostArticle = (props: PostArticleProps) => {
    const { article, liked, copied } = props;
    const theme = useMantineTheme();

    return (
        <Card withBorder padding="lg" radius="md" className={classes.card}>
            <Card.Section mb="sm">
                <Image
                    src={article.featuredImage}
                    alt={article.title}
                    height={180}
                />
            </Card.Section>

            <Badge w="fit-content" variant="light">
                decorations
            </Badge>

            <Text fw={700} className={classes.title} mt="xs">
                {article.title}
            </Text>

            <Group mt="lg">
                <div>
                    <Text fz="xs" c="dimmed">
                        {article.publishedAt.toString()}
                    </Text>
                </div>
            </Group>

            <Card.Section className={classes.footer}>
                <Group justify="space-between">
                    <Text fz="xs" c="dimmed">
                        0 people liked this
                    </Text>
                    <Group gap={0}>
                        <ActionIcon
                            variant="subtle"
                            color="gray"
                            onClick={liked}
                        >
                            <IconHeart
                                size={20}
                                color={theme.colors.red[6]}
                                stroke={1.5}
                            />
                        </ActionIcon>
                        <ActionIcon
                            variant="subtle"
                            color="gray"
                            onClick={copied}
                        >
                            <IconCopy
                                size={20}
                                color={theme.colors.blue[6]}
                                stroke={1.5}
                            />
                        </ActionIcon>
                    </Group>
                </Group>
            </Card.Section>
        </Card>
    );
};
