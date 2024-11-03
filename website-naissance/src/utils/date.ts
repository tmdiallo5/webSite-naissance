const formatDate = (value: string) => {
    const date = new Date(value.split(" ")[0]);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
}

export {formatDate};