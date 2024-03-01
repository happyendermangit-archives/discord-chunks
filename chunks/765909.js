function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        unsafeStringify: function() {
            return i
        }
    }), n("424973"), n("70102");
    let r = [];
    for (let t = 0; t < 256; ++t) r.push((t + 256).toString(16).slice(1));

    function i(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return r[t[e + 0]] + r[t[e + 1]] + r[t[e + 2]] + r[t[e + 3]] + "-" + r[t[e + 4]] + r[t[e + 5]] + "-" + r[t[e + 6]] + r[t[e + 7]] + "-" + r[t[e + 8]] + r[t[e + 9]] + "-" + r[t[e + 10]] + r[t[e + 11]] + r[t[e + 12]] + r[t[e + 13]] + r[t[e + 14]] + r[t[e + 15]]
    }
}