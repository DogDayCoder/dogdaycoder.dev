import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell, MantineProvider } from '@mantine/core';
import { Learn } from './pages/learn/Learn.tsx';
import { Contact } from './pages/contact/Contact.tsx';
import { Home } from './pages/home/Home.tsx';
import '@mantine/core/styles.css';
import { PageNotFound } from './PageNotFound.tsx';
import { useDisclosure } from '@mantine/hooks';
import { Header } from './shared/components/header/Header.tsx';
import { NavigationPane } from './shared/components/navigationPane/NavigationPane.tsx';
import classes from './pages/home/Home.module.css';
import { Footer } from './shared/components/footer/Footer.tsx';

export const App = () => {
    const [opened] = useDisclosure();

    return (
        <BrowserRouter>
            <MantineProvider>
                <AppShell
                    header={{ height: 60 }}
                    navbar={{
                        width: 150,
                        breakpoint: 'sm',
                        collapsed: { mobile: !opened },
                    }}
                    footer={{ height: 60 }}
                    padding="md"
                    withBorder={false}
                >
                    <AppShell.Header>
                        <Header />
                    </AppShell.Header>

                    <AppShell.Navbar>
                        <NavigationPane className={classes.navigation} />
                    </AppShell.Navbar>

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
        </BrowserRouter>
    );
};
