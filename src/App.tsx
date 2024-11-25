import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Learn } from './pages/learn/Learn.tsx';
import { Contact } from './pages/contact/Contact.tsx';
import { Home } from './pages/home/Home.tsx';
import '@mantine/core/styles.css';
import { PageNotFound } from './PageNotFound.tsx';

export const App = () => {
    return (
        <MantineProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    );
};
