"use client";

import Image from "next/image";

import chargerSrc from "@/../../public/assets/images/charger.png";
import phoneHomeSrc from "@/../../public/assets/images/phone_home.png";
import phoneAppSrc from "@/../../public/assets/images/phone_app.png";
import arrow from "@/../../public/assets/images/arrow.png";
import { motion } from "framer-motion";
import Wrapper from "../components/Wrapper";
import { useTranslations } from "next-intl";

export default function Technology() {

  const t = useTranslations('Technology')

  return (
    <Wrapper className="bg-logoBG bg-cover">
      <div className="flex flex-1 justify-center items-center">
        <h1 className="sm:max-w-full font-semibold text-center pb-12 uppercase">
          {`${t('title')}`}
          <span className="text-chargeMeYellow ml-6">{t('future')}</span>
        </h1>
      </div>
      <div className="
          flex
          min-h-96
          flex-1
          flex-col
          justify-center 
          items-center 
          space-y-20 
          lg:space-y-0 
          lg:flex-row">
        <div className="flex flex-1 w-full relative justify-center items-center">
          <motion.div className="z-10"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, decelerate: 600 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: 'spring', ease: 'easeInOut', delay: 2 }}
          >
            <Image
              src={phoneHomeSrc}
              className="w-full object-contain"
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
              className="sm:w-full w-64 z-0"
              alt="alt"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center max-w-44">
          <motion.p className="text-2xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, decelerate: 600 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', ease: 'easeInOut', delay: 3 }}>
            {t('description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, decelerate: 600 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', ease: 'easeInOut', delay: 4 }}>

            <Image src={arrow} alt="alt" />
          </motion.div>
        </div>
        <div className="flex flex-1 w-full relative justify-center items-center">
          <motion.div className="z-10"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1, decelerate: 600 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ type: 'spring', ease: 'easeInOut', delay: 7 }}
          >
            <Image
              src={phoneAppSrc}
              className="w-full"
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
              className="sm:w-full w-64 z-0"
              alt="alt"
            />
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}
