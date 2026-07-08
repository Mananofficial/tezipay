const styles = {
    error: 'bg-red-50 text-red-700 ring-red-200',
    success: 'bg-green-50 text-green-700 ring-green-200',
}

const FormAlert = ({ type = 'error', message }) => {
    if (!message) return null

    return (
        <div className={`mb-6 rounded-md px-4 py-3 text-sm ring-1 ${styles[type]}`}>
            {message}
        </div>
    )
}

export default FormAlert