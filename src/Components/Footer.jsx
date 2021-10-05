import React from 'react';

export default function Footer() {
    const className =
        {
            link: 'hover:text-gray-900 transition-colors duration-200 font-normal text-gray-500',
        }

    return (
        <footer className="border-t bg-gray-50 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20 mt-10">
            <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
                <ul className="text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
                    <li className="space-y-5 row-span-2">
                        <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">Getting started</h2>
                        <ul className="space-y-4">
                            <li><a href="#" className={className.link}>Lorem, ipsum</a></li>
                            <li><a href="#" className={className.link}>Perspiciatis, porro</a></li>
                            <li><a href="#" className={className.link}>Laboriosam, id</a></li>
                            <li><a href="#" className={className.link}>Tempore, amet</a></li>
                            <li><a href="#" className={className.link}>Sapiente, maiores</a></li>
                            <li><a href="#" className={className.link}>Laborum, minus</a></li>
                        </ul>
                    </li>
                    <li className="space-y-5 row-span-2">
                        <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">Amet Consectetur</h2>
                        <ul className="space-y-4">
                            <li><a href="#" className={className.link}>Lorem, ipsum</a></li>
                            <li><a href="#" className={className.link}>Quia, nihil</a></li>
                            <li><a href="#" className={className.link}>Nisi, magni</a></li>
                            <li><a href="#" className={className.link}>Ipsum, consequuntur</a></li>
                            <li><a href="#" className={className.link}>Facere, cupiditate</a></li>
                            <li><a href="#" className={className.link}>Quod, quasi</a></li>
                        </ul>
                    </li>
                    <li className="space-y-5 row-span-2">
                        <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">Dolor sit amet</h2>
                        <ul className="space-y-4">
                            <li><a href="#" className={className.link}>Lorem, ipsum</a></li>
                            <li><a href="#" className={className.link}>Magnam, ab</a></li>
                            <li><a href="#" className={className.link}>Natus, repellat</a></li>
                            <li><a href="#" className={className.link}>Perspiciatis, dolore</a></li>
                            <li><a href="#" className={className.link}>Numquam, quibusdam</a></li>
                            <li><a href="#" className={className.link}>Pariatur, eum</a></li>
                            <li><a href="#" className={className.link}>Alias, adipisci</a></li>
                            <li><a href="#" className={className.link}>Placeat, autem</a></li>
                            <li><a href="#" className={className.link}>Ipsa, aut</a></li>
                            <li><a href="#" className={className.link}>Eaque, dolorum</a></li>
                        </ul>
                    </li>
                    <li className="space-y-5">
                        <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">Community</h2>
                        <ul className="space-y-4">
                            <li><a className={className.link} href="#">GitHub</a></li>
                            <li><a className={className.link} href="#">Discord</a></li>
                            <li><a className={className.link} href="#">Twitter</a></li>
                            <li><a className={className.link} href="#">YouTube</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </footer>

    );
}
