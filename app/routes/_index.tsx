import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
    return [
        { title: 'DogDayCoder' },
        { name: 'Blog', content: 'Bloody Blog!' },
    ];
};

export default function Index() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col">
                <header className="flex items-center">
                    <div className="scale-50">
                        <img
                            src="/fulllogo.jpg"
                            alt="Remix"
                            className="block w-full dark:hidden"
                        />
                    </div>
                </header>

                <nav className="flex flex-col items-center justify-center gap-4">
                    <p className="leading-6 text-gray-700 dark:text-gray-200">
                        Lets Code
                    </p>
                    <ul>
                        {resources.map(({ href, text, icon }) => (
                            <li key={href}>
                                <a
                                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {icon}
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

const resources = [
    {
        href: 'http://localhost:5173/',
        text: 'How I created this Blog',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
            >
                <path
                    d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        href: 'http://localhost:5173/',
        text: 'How I created this Blog',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
            >
                <path
                    d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        href: 'http://localhost:5173/',
        text: 'How I created this Blog',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
            >
                <path
                    d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
];
