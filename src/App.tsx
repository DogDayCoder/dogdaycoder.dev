import '@mantine/core/styles.css';
import './App.css';
import Home from './pages/Home.tsx';

import { MantineProvider } from '@mantine/core';

export const App = () => {
    return (
        <MantineProvider>
            <Home />
        </MantineProvider>
    );
};
