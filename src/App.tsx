import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    AppShell,
    DirectionProvider,
    localStorageColorSchemeManager,
    MantineProvider,
} from '@mantine/core';
import { Learn } from './pages/learn/Learn.tsx';
import { Contact } from './pages/contact/Contact.tsx';
import { Home } from './pages/home/Home.tsx';
import '@mantine/core/styles.css';
import { PageNotFound } from './PageNotFound.tsx';
import { Header } from './shared/components/header/Header.tsx';
import { Footer } from './shared/components/footer/Footer.tsx';

export const App = () => {
    return (
        <BrowserRouter>
            <DirectionProvider initialDirection="ltr" detectDirection={false}>
                <MantineProvider
                    defaultColorScheme="auto"
                    colorSchemeManager={localStorageColorSchemeManager({
                        key: 'mantine-ui-color-scheme',
                    })}
                >
                    <AppShell
                        header={{ height: 60 }}
                        footer={{ height: 60 }}
                        padding="md"
                        withBorder={false}
                    >
                        <AppShell.Header>
                            <Header />
                        </AppShell.Header>

                        <AppShell.Main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/learn" element={<Learn />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="*" element={<PageNotFound />} />
                            </Routes>
                        </AppShell.Main>

                        <AppShell.Footer>
                            <Footer />
                        </AppShell.Footer>
                    </AppShell>
                </MantineProvider>
            </DirectionProvider>
        </BrowserRouter>
    );
};
