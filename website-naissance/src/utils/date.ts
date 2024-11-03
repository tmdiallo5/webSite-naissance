const dayOfWeek = ["Lun.", "Mar.", "Mer.", "Jeu.", "Sam.", "Dim"];
const MonthOfYear = ["Jan.", "Fev.", "Mars.", "Avril.", "Mai.", "Jui.", "Juil.", "Aout.", "Sept.", "Oct.", "Nov.", "Dec"];
const formatDay = (day: number) => {
    return `0${day}`.slice(-2)
}

const formatDate = (value: string) => {
    const date = new Date(value.split(" ")[0]);
    return `${formatDay(date.getDay())} ${MonthOfYear[date.getMonth()]} ${date.getFullYear()}`
}

export {formatDate};