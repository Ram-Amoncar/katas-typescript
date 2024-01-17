import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        exclude: [
            ...configDefaults.exclude,
            './src/*/solutions/*',
            'src/99-bottles/solutions/oop/*'
        ]
    }
})
