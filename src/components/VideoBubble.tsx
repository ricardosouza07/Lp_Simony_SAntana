'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

export const VideoBubble = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Bubble */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5, type: 'spring' }}
                className="fixed bottom-24 left-6 z-40"
            >
                <button
                    onClick={() => setIsOpen(true)}
                    className="relative w-20 h-20 rounded-full border-2 border-primary bg-background overflow-hidden shadow-2xl shadow-primary/20 group hover:scale-110 transition-transform cursor-pointer"
                >
                    {/* Placeholder for video thumbnail/preview */}
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <img
                            src="/images/simony.jpg"
                            alt="Convite Simony Santana"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                        <Play className="absolute w-6 h-6 text-white fill-current" />
                    </div>
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-30" />
                </button>

                {/* Popover label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3 }}
                    className="absolute left-24 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold py-2 px-3 rounded-lg shadow-xl whitespace-nowrap"
                >
                    Convite da Simony! ❤️
                    <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-white" />
                </motion.div>
            </motion.div>

            {/* Video Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg aspect-[9/16] bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-black rounded-full text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Actual Video Element */}
                            <div className="w-full h-full flex items-center justify-center bg-background-section">
                                <video
                                    src="/video-convite.mp4"
                                    className="w-full h-full object-cover"
                                    controls
                                    autoPlay
                                />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-xl font-bold text-white mb-2 uppercase">Convite Especial</h3>
                                <p className="text-white/70 text-sm">Simony Santana convida você para uma transformação na sua carreira.</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
