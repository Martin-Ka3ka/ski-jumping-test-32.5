const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let hillSizePoint = 0;
    let ratio = 0;
    switch (hillSize) {
        case 'normal':
            hillSizePoint = 60;
            ratio = 2;
            break;
        case 'big':
            hillSizePoint = 60;
            ratio = 1.8;
            break;
        case 'mammoth':
            hillSizePoint = 120;
            ratio = 1.2;
    }
    let basePoints = distance - kPoint;
    let points = basePoints * ratio;
    return hillSizePoint + parseFloat(points.toFixed(1));
};

module.exports = calculateDistancePoints;