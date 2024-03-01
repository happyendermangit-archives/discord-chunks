function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        normalizeColor: function() {
            return o
        }
    });
    var r = n("194356"),
        i = n("397968");

    function o(t) {
        var e;
        return "number" == typeof t ? t >>> 0 === t && t >= 0 && t <= 4294967295 ? t : null : (e = r.hex6.exec(t)) ? parseInt(e[1] + "ff", 16) >>> 0 : i.colorNames && void 0 !== i.colorNames[t] ? i.colorNames[t] : (e = r.rgb.exec(t)) ? (u(e[1]) << 24 | u(e[2]) << 16 | u(e[3]) << 8 | 255) >>> 0 : (e = r.rgba.exec(t)) ? (u(e[1]) << 24 | u(e[2]) << 16 | u(e[3]) << 8 | c(e[4])) >>> 0 : (e = r.hex3.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + "ff", 16) >>> 0 : (e = r.hex8.exec(t)) ? parseInt(e[1], 16) >>> 0 : (e = r.hex4.exec(t)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4], 16) >>> 0 : (e = r.hsl.exec(t)) ? (255 | a(s(e[1]), l(e[2]), l(e[3]))) >>> 0 : (e = r.hsla.exec(t)) ? (a(s(e[1]), l(e[2]), l(e[3])) | c(e[4])) >>> 0 : null
    }

    function a(t, e, n) {
        var r, i, o, a = (1 - Math.abs(2 * n - 1)) * e,
            u = n - a / 2;
        var s = (r = t, i = a, o = a * (1 - Math.abs(t / 60 % 2 - 1)), r < 60 ? [i, o, 0] : r < 120 ? [o, i, 0] : r < 180 ? [0, i, o] : r < 240 ? [0, o, i] : r < 300 ? [o, 0, i] : [i, 0, o]);
        return Math.round((s[0] + u) * 255) << 24 | Math.round((s[1] + u) * 255) << 16 | Math.round((s[2] + u) * 255) << 8
    }

    function u(t) {
        var e = parseInt(t, 10);
        return e < 0 ? 0 : e > 255 ? 255 : e
    }

    function s(t) {
        return (parseFloat(t) % 360 + 360) % 360 / 360
    }

    function c(t) {
        var e = parseFloat(t);
        return e < 0 ? 0 : e > 1 ? 255 : Math.round(255 * e)
    }

    function l(t) {
        var e = parseFloat(t);
        return e < 0 ? 0 : e > 100 ? 1 : e / 100
    }
}