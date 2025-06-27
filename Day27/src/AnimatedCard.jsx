import { motion } from "motion/react";

export default function AnimatedCard() {
    return (
        <motion.div
        className="w-xl bg-red-700 py-8 rounded-xl flex flex-col justify-evenly gap-8"
        initial={{
            opacity: 0, y: 50
        }}
        animate={{
            opacity: 1, y: 0
        }}
        exit={{
            opacity: 0, y: 50
        }}
        transition={{
            duration: 0.5
        }}
        >
            <motion.h2 className="text-3xl font-bold"
            whileHover={{
                rotateY: 90
            }}
            transition={{
                duration: 2,
                ease: "easeInOut"
            }}
            >Animated Card</motion.h2>
            <motion.p className="text-xl"
            whileHover={{
                scale: 1.2
            }}
            transition={{
                duration: 1
            }}
            >This card fades in, slides and scales on hover.</motion.p>
        </motion.div>
    )
}