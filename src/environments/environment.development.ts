// Used in place of environment.ts when running `ng serve` / building with the
// "development" configuration. Same EmailJS account as production for now —
// split this out if a separate test template ever gets set up.
export const environment = {
  production: false,
  emailjs: {
    serviceId: 'service_gy6axd8',
    templateId: 'template_c5fq7pk',
    publicKey: '0EZF6hu9SlU-ynRgX',
  },
} as const;
