function objectToString (obj) {
    var str = '';
    var i=0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if(typeof obj[key] == 'object') {
                if(obj[key] instanceof Array) {
                    str+= key + ' : [ ';
                    for(var j=0;j<obj[key].length;j++) {
                        if(typeof obj[key][j]=='object') {
                            str += '{' + objectToString(obj[key][j]) + (j > 0 ? ',' : '') + '}';
                        }
                        else {
                            str += '\'' + obj[key][j] + '\'' + (j > 0 ? ',' : ''); //non objects would be represented as strings
                        }
                    }
                    str+= ']' + (i > 0 ? ',' : '')
                }
                else {
                    str += key + ' : { ' + objectToString(obj[key]) + '} ' + (i > 0 ? ',' : '');
                }
            }
            else {
                str +=key + ':\'' + obj[key] + '\'' + (i > 0 ? ',' : '');
            }
            i++;
        }
    }
    return str;
}


function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}



function isIncluded(arr,obj) {
    return (arr.indexOf(obj) != -1);
}

