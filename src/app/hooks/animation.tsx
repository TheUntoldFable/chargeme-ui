import { AnimationDefinition, useAnimation } from "framer-motion"
import { useCallback } from "react"


export const useTechnologyAnimations = (isMobile: boolean) => {

    const translateXshow: AnimationDefinition = {
        x: 0,
        transition: { type: 'spring', mass: 1, delay: 1 }
    }

    const translateXhide: AnimationDefinition = {
        x: -600,
        transition: { type: 'spring', mass: 1, delay: 1 }
    }

    const opacityShow: AnimationDefinition = {
        opacity: 1,
        transition: { type: 'spring', mass: 1, delay: 1 }
    }

    const phoneHomeController = useAnimation()
    const phoneAppController = useAnimation()
    const charger1Controller = useAnimation()
    const charger2Controller = useAnimation()
    const descController = useAnimation()
    const arrowController = useAnimation()

    const startAnimations = useCallback(async () => {
        await charger1Controller.start({ ...translateXshow, opacity: 1, })
        await phoneHomeController.start({ ...translateXshow, opacity: 1 }).then(async () => {
            if(isMobile) {
                await phoneHomeController.start({...translateXhide, opacity: 0})
                await phoneAppController.start({...translateXshow, opacity: 1})

                descController.stop()
                arrowController.stop()
                charger2Controller.stop()
                phoneAppController.stop()
            }
        })
        await descController.start(opacityShow)
        await arrowController.start(opacityShow)
        await charger2Controller.start({ ...translateXshow, opacity: 1 })
        await phoneAppController.start({ ...translateXshow, opacity: 1 })
    }, [isMobile])


    return {
        startAnimations,
        refs: {
            phoneHomeController,
            phoneAppController,
            charger1Controller,
            charger2Controller,
            descController,
            arrowController
        },
        configs: {
            opacityShow,
            translateXhide,
            translateXshow
        }
    }
}