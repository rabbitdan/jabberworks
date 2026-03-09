export function formatEventDate(
    isoDate: string,
    locale = "en-GB",
    timeZone = "Europe/London"
): string {
    const date = new Date(`${isoDate}T00:00:00`)
    const dayMonthFormatter = new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "short",
        timeZone
    })
    const weekdayFormatter = new Intl.DateTimeFormat(locale, {
        weekday: "short",
        timeZone
    })

    return `${dayMonthFormatter.format(date)} (${weekdayFormatter.format(date)})`
}

export function todayIso(): string {
    return new Date().toISOString().slice(0, 10)
}
