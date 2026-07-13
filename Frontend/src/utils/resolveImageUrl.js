const BACKEND_ORIGIN = 'http://localhost:3000'

export function resolveImageUrl(value) {
	if (!value) return value
	if (value.startsWith('http://') || value.startsWith('https://')) return value
	if (value.startsWith('/src/assets/upload/')) {
		return `${BACKEND_ORIGIN}${value}`
	}
	return value
}