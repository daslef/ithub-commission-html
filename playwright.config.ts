import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    projects: [
        {
            name: 'Mobile Safari',
            use: {
                ...devices['iPhone 16'],
                viewport: { width: 393, height: 852 },
            },
            outputDir: './test/results'
        },
    ],
});
