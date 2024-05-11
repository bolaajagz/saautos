export const formatNumber = (x) => {
  if (typeof x !== 'string') {
    x = x.toString();
  }
  let bidWithoutCommas = x.replace(/,/g, "");
  if (bidWithoutCommas && /^\d+$/.test(bidWithoutCommas)) {
    let reversedBid = bidWithoutCommas.split("").reverse().join("");
    const pattern = /(\d{3})(?=\d)/g;
    let formattedBid = reversedBid.replace(pattern, "$1,");
    formattedBid = formattedBid.split("").reverse().join("");
    return formattedBid;
  }
  return x;
};
