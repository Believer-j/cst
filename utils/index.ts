/**
 * 截取的方式保留三位小数，并去掉末尾的0
 * @param num val
 * @returns 
 */
export const utilTest = (num: string | number) => {
    // 需要将数值转换为字符串
    const numStr = ref(num).value.toString()
    const reg = /^-?\d+.?\d{1,3}/
    // str 就是截取之后的字符串
    let str = numStr.match(reg)?.[0]
    const result = Number(str)
    return result ? result : 0
}