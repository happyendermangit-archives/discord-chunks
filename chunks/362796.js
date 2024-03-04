function(e, t, n) {
    "use strict";
    var r = n("129752").codes.ERR_STREAM_PREMATURE_CLOSE;

    function i() {}
    e.exports = function e(t, n, o) {
        if ("function" == typeof n) return e(t, null, n);
        !n && (n = {}), s = o || i, a = !1, o = function() {
            if (!a) {
                a = !0;
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                s.apply(this, t)
            }
        };
        var s, a, c, u = n.readable || !1 !== n.readable && t.readable,
            d = n.writable || !1 !== n.writable && t.writable,
            l = function() {
                !t.writable && p()
            },
            f = t._writableState && t._writableState.finished,
            p = function() {
                d = !1, f = !0, !u && o.call(t)
            },
            h = t._readableState && t._readableState.endEmitted,
            v = function() {
                u = !1, h = !0, !d && o.call(t)
            },
            g = function(e) {
                o.call(t, e)
            },
            b = function() {
                var e;
                return u && !h ? ((!t._readableState || !t._readableState.ended) && (e = new r), o.call(t, e)) : d && !f ? ((!t._writableState || !t._writableState.ended) && (e = new r), o.call(t, e)) : void 0
            },
            m = function() {
                t.req.on("finish", p)
            };
        if ((c = t).setHeader && "function" == typeof c.abort) t.on("complete", p), t.on("abort", b), t.req ? m() : t.on("request", m);
        else d && !t._writableState && (t.on("end", l), t.on("close", l));
        return t.on("end", v), t.on("finish", p), !1 !== n.error && t.on("error", g), t.on("close", b),
            function() {
                t.removeListener("complete", p), t.removeListener("abort", b), t.removeListener("request", m), t.req && t.req.removeListener("finish", p), t.removeListener("end", l), t.removeListener("close", l), t.removeListener("finish", p), t.removeListener("end", v), t.removeListener("error", g), t.removeListener("close", b)
            }
    }
}