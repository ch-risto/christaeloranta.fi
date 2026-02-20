import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    [
                        'babel-plugin-styled-components',
                        {
                            displayName: true,
                            fileName: false,
                            ssr: false,
                            pure: true,
                            minify: true,
                            transpileTemplateLiterals: true,
                        },
                    ],
                ],
            },
        }),
    ],
});
