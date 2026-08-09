// ESLint 9 flat config — `next lint` and .eslintrc.json were both removed in Next 16.
// eslint-config-next v16 ships flat config natively, so no FlatCompat is needed.
import coreWebVitals from 'eslint-config-next/core-web-vitals'

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] },
  ...(Array.isArray(coreWebVitals) ? coreWebVitals : [coreWebVitals]),
]

export default config
