import { useState } from 'react';
import cx from 'clsx';
import { Box } from '@mantine/core';
import classes from './NavigationPane.module.css';

const links = [
    { label: 'Home', link: '#home', order: 1 },
    { label: 'Recent', link: '#recent', order: 1 },
    { label: 'Popular', link: '#popular', order: 1 },
    { label: 'Random', link: '#random', order: 1 },
    { label: 'Contact', link: '#contact', order: 1 },
];

export const NavigationPane = () => {
    const [active, setActive] = useState(2);

    const renderItems = () =>
        links.map((item, index) => (
            <Box<'a'>
                component="a"
                href={item.link}
                onClick={(event) => {
                    event.preventDefault();
                    setActive(index);
                }}
                key={item.label}
                className={cx(classes.link, {
                    [classes.linkActive]: active === index,
                })}
                style={{
                    paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))`,
                }}
            >
                {item.label}
            </Box>
        ));

    return (
        <div className={classes.root}>
            <div className={classes.links}>
                <div
                    className={classes.indicator}
                    style={{
                        transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
                    }}
                />
                {renderItems()}
            </div>
        </div>
    );
};
