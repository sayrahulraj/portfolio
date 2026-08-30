// Production environment. Swapped in automatically for `ng build` (the default
// configuration) — see the fileReplacements entry in angular.json for how the
// development build gets environment.development.ts instead.
export const environment = {
  production: true,
  emailjs: {
    serviceId: 'service_gy6axd8',
    templateId: 'template_c5fq7pk',
    publicKey: '0EZF6hu9SlU-ynRgX',
  },
} as const;
