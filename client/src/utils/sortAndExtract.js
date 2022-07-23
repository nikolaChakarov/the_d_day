const sortAndExtract = (data = []) => {
    const res = data
        .map((el) => el?.collectionName)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .reduce((acc, curr) => {
            if (acc.includes(curr)) {
                return acc;
            }
            acc.push(curr);
            return acc;
        }, [])
        .splice(0, 5);

    return res;
};

export default sortAndExtract;
