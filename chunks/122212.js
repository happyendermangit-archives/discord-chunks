function(t, e, r) {
    r("70102");
    for (var o = {
            glog: function(t) {
                if (t < 1) throw Error("glog(" + t + ")");
                return o.LOG_TABLE[t]
            },
            gexp: function(t) {
                for (; t < 0;) t += 255;
                for (; t >= 256;) t -= 255;
                return o.EXP_TABLE[t]
            },
            EXP_TABLE: Array(256),
            LOG_TABLE: Array(256)
        }, n = 0; n < 8; n++) o.EXP_TABLE[n] = 1 << n;
    for (var n = 8; n < 256; n++) o.EXP_TABLE[n] = o.EXP_TABLE[n - 4] ^ o.EXP_TABLE[n - 5] ^ o.EXP_TABLE[n - 6] ^ o.EXP_TABLE[n - 8];
    for (var n = 0; n < 255; n++) o.LOG_TABLE[o.EXP_TABLE[n]] = n;
    t.exports = o
}