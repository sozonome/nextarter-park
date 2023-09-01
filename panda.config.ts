// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from '@pandacss/dev';

const baseColor = '{colors.teal.500}';

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets', '@park-ui/presets'],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
  theme: {
    extend: {
      tokens: {
        colors: {
          grayPalette: {
            25: { value: '{colors.zinc.25}' },
            50: { value: '{colors.zinc.50}' },
            100: { value: '{colors.zinc.100}' },
            200: { value: '{colors.zinc.200}' },
            300: { value: '{colors.zinc.300}' },
            400: { value: '{colors.zinc.400}' },
            500: { value: '{colors.zinc.500}' },
            600: { value: '{colors.zinc.600}' },
            700: { value: '{colors.zinc.700}' },
            800: { value: '{colors.zinc.800}' },
            900: { value: '{colors.zinc.900}' },
            950: { value: '{colors.zinc.950}' },
          },
        },
      },
      semanticTokens: {
        colors: {
          accent: {
            default: {
              value: { base: baseColor, _dark: baseColor },
            },
            emphasized: {
              value: { base: '{colors.teal.600}', _dark: '{colors.teal.400}' },
            },
            fg: {
              value: {
                base: '{colors.white}',
                _dark: '{colors.gray-palette.950}',
              },
            },
          },
          border: {
            accent: {
              value: { base: baseColor, _dark: baseColor },
            },
          },
        },
        radii: {
          l1: { value: '{radii.xl}' },
          l2: { value: '{radii.2xl}' },
          l3: { value: '{radii.3xl}' },
        },
      },
    },
  },
});
