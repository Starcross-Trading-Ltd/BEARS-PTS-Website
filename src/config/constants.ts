
export const CONTACT_INFO = {
  phone: "+44 123 456 7890",
  email: "info@bearsambulance.com",
  address: {
    line1: "BEARS Patient Transport Service",
    line2: "Healthcare House",
    line3: "London, UK"
  }
} as const

export const COMPANY_INFO = {
  name: "BEARS Patient Transport Service",
  established: 2009,
  tagline: "Safety, Comfort and Care"
} as const

export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
  careers: "/careers",
  news: "/news",
  compliments: "/compliments",
  team: "/team",
  cubs: "/cubs",
  fleet: "/fleet"
} as const
