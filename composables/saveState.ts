export const useSaveState = (key: string, value: any) => {

    const cookie = useCookie(key)
    cookie.value = cookie.value || value

    const state = useState(key, () => cookie.value)

    watch(() => state.value, () => cookie.value = state.value)

    return state
}