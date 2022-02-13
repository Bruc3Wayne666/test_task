export const getPagesCount = (total, limit) => Math.ceil(total / limit)

export const getPages = total => {
    let result = []
    for (let i = 0; i <= total; i++){
        result.push(i + 1)
    }
    return result
}