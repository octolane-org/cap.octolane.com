const isProduction = process.env.NODE_ENV === "production";

export const configuration = {
  site: {
    name: "Captable",
    description: "Open source cap table management software",
    image: "/assets/hero.png",
    themeColor: "#ffffff",
    themeColorDark: "#0a0a0a",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Captable",
    twitterHandle: "octolane_app",
    githubHandle: "octolane-org",
  },
  isProduction,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  octolaneAPIKey: process.env.OCTOLANE_API_KEY,
  sentry: {
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
  posthog: {
    apiKey: process.env.NEXT_PUBLIC_POSTHOG_API_KEY,
    apiHost: process.env.NEXT_PUBLIC_POSTHOG_API_HOST,
  },
  auth: {
    secret: process.env.NEXTAUTH_SECRET as string,
    google: {
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  metaphoreApiKey: process.env.METAPHOR_API_KEY,
  openaiApiKey: process.env.OPENAI_API_KEY,
  youApiKey: process.env.YOU_API as string,
  paths: {
    dashbord: "/dashboard",
    signin: "/signin",
    signup: "/signup",
    equityPlans: { all: "/equity-plans", new: "/equity-plans/new" },
    shareClasses: { all: "/share-classes", new: "/share-classes/new" },
  },
};

export const FINGERPRINT_HEADER = "x-fingerprint";
export const X_CSRF_TOKEN_HEADER = "X-CSRF-Token";
