

export function truncateText(text: String, long: number) : String{
    return text.length > long ? text.substring(0, long-3) + "..." : text;
}
