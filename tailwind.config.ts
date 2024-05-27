import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    '"Inter var", sans-serif'],
            },
            colors: {
                'black': {
                    '50': '#000000',
                    '100': '#000000',
                    '200': '#000000',
                    '300': '#000000',
                    '400': '#000000',
                    '500': '#000000',
                    '600': '#000000',
                    '700': '#000000',
                    '800': '#000000',
                    '900': '#000000',
                    '950': '#000000',
                },
                'accent': {
                    '50': '#f1f8f5',
                    '100': '#dcefe4',
                    '200': '#c1e1d1',
                    '300': '#8fc6ae',
                    '400': '#5fa88a',
                    '500': '#3e8b6f',
                    '600': '#2c6f57',
                    '700': '#235947',
                    '800': '#1e4739',
                    '900': '#1a3a31',
                    '950': '#0d211b',
                },
            },

        }
    }
}
