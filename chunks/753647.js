function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        normalizeColor: function() {
            return a
        }
    });
    var r = n("185833"),
        i = n("239189");

    function a(e) {
        var t;
        return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = r.hex6.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : i.colorNames && void 0 !== i.colorNames[e] ? i.colorNames[e] : (t = r.rgb.exec(e)) ? (s(t[1]) << 24 | s(t[2]) << 16 | s(t[3]) << 8 | 255) >>> 0 : (t = r.rgba.exec(e)) ? (s(t[1]) << 24 | s(t[2]) << 16 | s(t[3]) << 8 | c(t[4])) >>> 0 : (t = r.hex3.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = r.hex8.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = r.hex4.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = r.hsl.exec(e)) ? (255 | o(u(t[1]), l(t[2]), l(t[3]))) >>> 0 : (t = r.hsla.exec(e)) ? (o(u(t[1]), l(t[2]), l(t[3])) | c(t[4])) >>> 0 : null
    }

    function o(e, t, n) {
        var r, i, a, o = (1 - Math.abs(2 * n - 1)) * t,
            s = n - o / 2;
        var u = (r = e, i = o, a = o * (1 - Math.abs(e / 60 % 2 - 1)), r < 60 ? [i, a, 0] : r < 120 ? [a, i, 0] : r < 180 ? [0, i, a] : r < 240 ? [0, a, i] : r < 300 ? [a, 0, i] : [i, 0, a]);
        return Math.round((u[0] + s) * 255) << 24 | Math.round((u[1] + s) * 255) << 16 | Math.round((u[2] + s) * 255) << 8
    }

    function s(e) {
        var t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
    }

    function u(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
    }

    function c(e) {
        var t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
    }

    function l(e) {
        var t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
    }
}