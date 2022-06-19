export const fetchICPPrice = async () => {
    let result = await fetch("https://api.diadata.org/v1/quotation/ICP");
    let response = await result.json();
    return response.Price;
}

export const fetchstICPPrice = async () => {
    // ToDo: right now is hardcoded. Implement dummy token price with periodic price increment
    return 5;
}
