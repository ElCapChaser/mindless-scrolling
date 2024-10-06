const extractQueryParam = (searchParam) => {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    return searchParams.get(searchParam.toString())
}

export default extractQueryParam;