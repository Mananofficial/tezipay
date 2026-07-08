export function getErrorMessage(error) {
    const data = error?.response?.data
    return data?.error || data?.message || 'Something went wrong. Please try again.'
}

export function getFieldErrors(error) {
    const data = error?.response?.data
    if (!data?.errors) return {}

    const map = {}
    data.errors.forEach((err) => {
        map[err.field] = err.message
    })
    return map
}
