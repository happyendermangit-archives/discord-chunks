function(e, t, n) {
    "use strict";

    function r(e, t) {
        void 0 === t && (t = 0);
        var n = e % 19,
            r = Math.floor(e / 100),
            i = e % 100,
            a = Math.floor(r / 4),
            o = Math.floor((r + 8) / 25),
            s = Math.floor((r - o + 1) / 3),
            u = Math.floor(19 * n + r - a - s + 15) % 30,
            c = Math.floor(i / 4),
            l = Math.floor(32 + r % 4 * 2 + 2 * c - u - i % 4) % 7,
            d = Math.floor((n + 11 * u + 22 * l) / 451),
            f = Math.floor((u + l - 7 * d + 114) / 31);
        return [Math.ceil((Date.UTC(e, f - 1, (u + l - 7 * d + 114) % 31 + 1 + t) - Date.UTC(e, 0, 1)) / 864e5)]
    }
    n.r(t), n.d(t, {
        easter: function() {
            return r
        }
    })
}