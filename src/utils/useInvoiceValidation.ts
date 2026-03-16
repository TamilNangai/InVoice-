export const validateForm = (form: HTMLFormElement | null) => {
    if (!form) return false

    if (!form.checkValidity()) {
        form.reportValidity()
        return false
    }
    return true
}
