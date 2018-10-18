/**
 * 根据经纬度求距离
 */
const getFlatternDistance = (lat1,lng1,lat2,lng2) => {

    const EARTH_RADIUS = 6378137.0;
    const getRad = (d) => {
        return d * Math.PI / 180.0;
    }

    lat1 = Number(lat1)
    lng1 = Number(lng1)
    lat2 = Number(lat2)
    lng2 = Number(lng2)

    const f = getRad((lat1 + lat2) / 2);
    const g = getRad((lat1 - lat2) / 2);
    const l = getRad((lng1 - lng2) / 2);
    const fl = 1 / 298.257;

    let sg = Math.sin(g);
    let sl = Math.sin(l);
    let sf = Math.sin(f);
    let s, c, w, r, d, h1, h2;
    
    sg = sg * sg;
    sl = sl * sl;
    sf = sf * sf;
    
    s = sg * (1-sl) + (1-sf) * sl;
    c = (1-sg)*(1-sl) + sf*sl;
    w = Math.atan(Math.sqrt(s/c));
    r = Math.sqrt(s*c)/w;
    d = 2 * w * EARTH_RADIUS;

    h1 = (3 * r - 1) / 2 / c;
    h2 = (3 * r + 1) / 2 / s;
    return d*(1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
}

const xnFullLength = (number = 0, length = 1) => {
    let _tempLength;
    if (!isNaN(number)) {
        _tempLength = number.toString().length;
    } else {
        _tempLength = number.length;
    }
    const _tempArray = [];
    length = length || _tempLength;
    const arrayLength = length - _tempLength;

    if (arrayLength > 0) {
        _tempArray.length = arrayLength;
    }

    return _tempArray.fill(0).join('') + number;
}


const formatTime = (time) => {
    time = new Date(time) || new Date();
    let _timeStr;
    try {
        _timeStr = `${time.getFullYear()}-${xnFullLength(time.getMonth() + 1, 2)}-${xnFullLength(time.getDate(), 2)}  ${xnFullLength(time.getHours(), 2)}:${xnFullLength(time.getMinutes(), 2)}:${xnFullLength(time.getSeconds(), 2)}`;
    } catch (e) {
        console.log('xianTime Error', e);
        return time;
    }
    return _timeStr;
}

export {
    getFlatternDistance,
    formatTime
}