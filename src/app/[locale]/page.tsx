import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Home() {
    const t = useTranslations("Index");

    return (
        <main className="bg-[url('/assets/images/wire-circles.png')] bg-cover bg-center">
            <div className="flex min-h-screen flex-row items-center gap-56 container ">
            <div className="basis-2/5">
                <h1 className="uppercase mb-4">Cut the cord</h1>
                <p className="mb-7 max-w-lg font-bold">
                    Introducing our game-changing wireless charging device,
                    designed to liberate you from the hassle of tangled cables and limited charging ports.
                    Say goodbye to the frustration of constantly searching for the right charging cable.
                </p>
                <a href="/" className="bg-chargeMeYellow py-4 px-5 w-max block uppercase font-bold rounded-md">Cut it now</a>
            </div>
            <img src="/assets/images/charger-device.png" width={560} height={525} className="object-cover" />
            </div>
 
        </main>
    );
}
