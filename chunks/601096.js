function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isAnimatedImageUrl: function() {
            return l
        },
        isImageFile: function() {
            return u
        },
        isVideoFile: function() {
            return d
        },
        isVideoUrl: function() {
            return f
        }
    });
    var r = n("374550");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var i = function(e, t) {
            if (null == e) return !1;
            var n, r, i = (n = e.split(/\?/, 1), r = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(n) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                !a && null != o.return && o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(n, r) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return o(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                    }
                }(n, r) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                a = i[0];
            return i[1], t.test(a)
        },
        a = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
        u = function(e) {
            return null != e && a.test(e)
        },
        s = /\.(webp|gif)$/i,
        l = function(e) {
            return i(e, s)
        },
        c = (0, r.isIOS)() ? /\.(mp4|mov)$/i : ((0, r.isAndroid)(), /\.(mp4|webm|mov)$/i),
        f = function(e) {
            return i(e, c)
        },
        d = function(e) {
            return null != e && c.test(e)
        }
}