"use client"

import { createSharedPathnamesNavigation } from "next-intl/navigation"
import { locales } from "@/lib/i18n/settings"

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales })
