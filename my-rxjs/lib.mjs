export const Observable = (fn) => {
    const subscribers = new Map()

    const next = (data) => subscribers.forEach(fn => subscribers.get(fn)(data))

    const subscribe = (fn) => {
        subscribers.set(fn, fn)
        return { unsubscribe: () => subscribers.delete(fn) }
    }

    fn({
        next
    })

    return {
        subscribe
    }
}