import { IconSearch } from '@tabler/icons-react';
import { Autocomplete, Avatar, Group } from '@mantine/core';
import Logo from '../../../assets/logo_sm.png';
import classes from './Header.module.css';

const links = [
    { link: '/contact', label: 'Contact' },
    { link: '/learn', label: 'Learn' },
];

export const Header = () => {
    const renderItems = () =>
        links.map((link) => (
            <a key={link.label} href={link.link} className={classes.link}>
                {link.label}
            </a>
        ));

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <a href={'./'}>
                        <Avatar src={Logo} alt="DogDayCoder" radius="xl" />
                    </a>
                    (work-in-progress)
                </Group>

                <Group>
                    <Autocomplete
                        className={classes.search}
                        placeholder="Search"
                        leftSection={<IconSearch size={16} stroke={1.5} />}
                        data={[
                            'React',
                            'Angular',
                            'Vue',
                            'Next.js',
                            'Riot.js',
                            'Svelte',
                            'Blitz.js',
                        ]}
                        visibleFrom="xs"
                    />

                    <Group
                        ml={50}
                        gap={10}
                        className={classes.links}
                        visibleFrom="sm"
                    >
                        {renderItems()}
                    </Group>
                </Group>
            </div>
        </header>
    );
};
