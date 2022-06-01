export const fetchNearPrice = async () => {
    let result = await fetch("https://api.diadata.org/v1/quotation/NEAR");
    let response = await result.json();
    return response.Price;
}

export const fetchStNearPrice = async () => {
    let result = await fetch("https://validators.narwallets.com/metrics_json");
    let response = await result.json();
    return response.st_near_price_usd;
}
