import { useTranslations } from "next-intl";
import React from "react";

export default function Home() {
    const t = useTranslations("Index");

    return (
        <main className="bg-[url('/assets/images/wire-circles.png')] bg-cover bg-center">
            <div className="flex min-h-screen flex-col items-center !mt-8 container xl:flex-row xl:mt-0 gap-y-10 sm:max-w-full">
            <div className="basis-3/5">
                <h1 className="uppercase mb-4 text-3xl xl:text-5xl">Revolutionizing Wireless Charger</h1>
                <p className="mb-7 max-w-lg font-bold text-base xl:text-lg">
                Wireless charging device with interactive features revolutionizing the restaurant industry. By combining convenience, comfort and modern technologies, the product aims to create more favorable conditions for customer service. From food ordering, integrated split payments and feedback form in our web application we tend to grow with the establishment, which places our device. We provide valuable data with it and help your restaurant to be more frequently visited.
                </p>
                <a href="/en/technology" className="bg-chargeMeYellow py-4 px-5 w-max block font-bold rounded-md">ChargeMe</a>
            </div>
            <img src="/assets/images/charger-device.png" width={560} height={525} className="object-cover basis-2/5" />
            </div>
        </main>
    );
}
