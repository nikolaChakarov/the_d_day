exports.generateUrl = (queryObject) => {
    const keys = Object.keys(queryObject);

    const url = keys.reduce((acc, curr, i, arr) => {
        acc += `${curr}=${queryObject[curr]}`;

        if (i < arr.length - 1) {
            acc += "&";
            return acc;
        }

        return acc;
        // we can put this base url in .env file but...we wont :) ... for now! mr D, if you reed this... it's for fun!
    }, "https://itunes.apple.com/search?");

    return url;
};
