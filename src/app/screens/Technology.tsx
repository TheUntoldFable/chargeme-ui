"use client";

import Image from "next/image";

import chargerSrc from "@/../../public/assets/images/charger.png";
import phoneHomeSrc from "@/../../public/assets/images/phone_home.png";
import phoneAppSrc from "@/../../public/assets/images/phone_app.png";
import arrow from "@/../../public/assets/images/arrow.png";
import { PageProps } from "../../../.next/types/app/[locale]/technology/page";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "../components/Wrapper";

interface TechnologyProps extends PageProps {
  translations: Record<string, string>;
}

export default function Technology({ translations }: TechnologyProps) {
  return (
    <Wrapper className="bg-gray92">
      <h1 className="font-bold text-center pb-12 uppercase">
        {`${translations.title}`}
        <span className="text-chargeMeYellow ml-6">future</span>
      </h1>
      <div className="
          my-auto
          flex
          flex-1
          flex-col
          justify-center 
          items-center 
          space-y-20 
          lg:space-y-0 
          lg:flex-row">
        <AnimatePresence>
          <div className="flex flex-1 relative justify-center items-center">
            <motion.div className="z-10"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1, decelerate: 600 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: 'spring', ease: 'easeInOut', delay: 2 }}
            >
              <Image
                src={phoneHomeSrc}
                className="max-56 sm:max-w-80 object-contain"
                alt="alt"
              />
            </motion.div>
            <motion.div
              className="absolute"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1, decelerate: 600 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', ease: 'easeInOut' }}
            >

              <Image
                src={chargerSrc}
                className="max-w-40 sm:max-w-64 object-contain z-0"
                alt="alt"
              />
            </motion.div>
          </div>
        </AnimatePresence>
        <AnimatePresence>
          <div className="flex flex-col items-center max-w-44">
            <motion.p className="text-2xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, decelerate: 600 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', ease: 'easeInOut', delay: 3 }}>
              {translations.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, decelerate: 600 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', ease: 'easeInOut', delay: 4 }}>

              <Image src={arrow} alt="alt" />
            </motion.div>
          </div>
        </AnimatePresence>
        <AnimatePresence>
          <div className="flex flex-1 relative justify-center items-center">
            <motion.div className="z-10"
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1, decelerate: 600 }}
              exit={{ x: -400, opacity: 0 }}
              transition={{ type: 'spring', ease: 'easeInOut', delay: 7 }}
            >
              <Image
                src={phoneAppSrc}
                className="max-w-72 sm:max-w-[400px] object-contain"
                alt="alt"
              />
            </motion.div>
            <motion.div
              className="absolute"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1, decelerate: 600 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', ease: 'easeInOut', delay: 5 }}
            >

              <Image
                src={chargerSrc}
                className="max-w-40 sm:max-w-64 object-contain z-0"
                alt="alt"
              />
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </Wrapper>
  );
}
