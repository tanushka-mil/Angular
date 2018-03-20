export const getNeighborProperty = (object: object, property: string, direction: string): string => {
    const valueObject = Object.keys(object);
    let propertyNeighbor;

    valueObject.forEach((item, i) => {
        if (property === item) {
            propertyNeighbor = direction === 'prev' ? valueObject[i - 1] : valueObject[i + 1];
        }
    });
    return propertyNeighbor;
};
