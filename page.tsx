'use client'

import Image from "next/image"
import Link from "next/link"
import { Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E5F4FF] to-[#98D8C8] px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-md"
      >
        {/* Profile Section */}
        <div className="mb-12 text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full ring-4 ring-[#98D8C8] ring-offset-2 shadow-lg"
          >
            <Image
              src="https://envs.sh/rw2.jpg"
              alt="ST EAGLE TRADER Profile"
              width={160}
              height={160}
              className="h-full w-full object-cover scale-110"
              priority
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-4xl md:text-5xl font-bold text-blue-600 drop-shadow-sm"
          >
            ST EAGLE TRADER
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-xl md:text-2xl text-blue-600"
          >
            ☀️ Creative soul sharing positivity & inspiration! Join my journey! ✨
          </motion.p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {[
            {
              href: "https://t.me/steagle9",
              icon: <Image src="https://envs.sh/rwG.jpg" alt="Telegram" width={32} height={32} className="h-8 w-8 object-contain" />,
              text: "Join FREE Telegram",
              delay: 0.4
            },
            {
              href: "https://broker-qx.pro/sign-up/?lid=793558",
              icon: <Image src="https://envs.sh/rwq.jpg" alt="Quotex" width={32} height={32} className="h-8 w-8 object-contain" />,
              text: "JOIN QUOTEX",
              delay: 0.5
            },
            {
              href: "https://www.youtube.com/@STraderEagle",
              icon: <Image src="https://envs.sh/rwP.jpg" alt="YouTube" width={32} height={32} className="h-8 w-8 object-contain" />,
              text: "YouTube",
              delay: 0.6
            },
            {
              href: "https://www.instagram.com/steagleg?igsh=amM0cXB3aGNsdGQ2",
              icon: <Image src="https://envs.sh/rwv.jpg" className="h-8 w-8 text-pink-500" />,
              text: "Instagram",
              delay: 0.7
            },
            {
              href: "https://www.facebook.com/profile.php?id=61561008494684&mibextid=ZbWKwL",
              icon: <Image src="https://envs.sh/rwZ.jpg" alt="Facebook" width={32} height={32} className="h-8 w-8 object-contain" />,
              text: "FaceBook",
              delay: 0.8
            }
          ].map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: link.delay }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                className="relative flex w-full items-center px-6 py-8 hover:bg-white/95 transition-all duration-200 shadow-sm hover:shadow group bg-white rounded-xl"
                asChild
              >
                <Link href={link.href} className="flex items-center w-full">
                  <span className="group-hover:scale-110 transition-transform duration-200 absolute left-6">
                    {link.icon}
                  </span>
                  <span className="flex-1 text-center text-xl font-semibold text-blue-600">
                    {link.text}
                  </span>
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

