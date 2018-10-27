/**
 * Access a value supplied by user function safely.
 * @param {function} accessor - Supplied function resolves to value <T>
 * @param {T} defaultValue
 * @return {T} Value from accessor function or defaultvalue if function throws an error
 */
export function safeget<T>(accessor: () => T, defaultValue?: T): T | undefined {
    try {
        return accessor();
    } catch (err) {
        return defaultValue;
    }
}
