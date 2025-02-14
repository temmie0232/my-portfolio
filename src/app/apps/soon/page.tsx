'use client'
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const shakingAnimation = {
    animate: {
        x: [0, -2, 2, -2, 2, 0],
        transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "linear"
        }
    }
};

export default function Apps() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-8 left-8"
            >
                <Button
                    onClick={() => router.push('/')}
                    variant="ghost"
                    className="text-zinc-400 hover:text-white"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
            >
                <motion.h1
                    className="text-4xl font-bold"
                    variants={shakingAnimation}
                    animate="animate"
                >
                    Coming Soon
                </motion.h1>
                <motion.p
                    className="text-zinc-400"
                    variants={shakingAnimation}
                    animate="animate"
                >
                    このページは現在作成中です！
                </motion.p>
            </motion.div>
        </div>
    );
}