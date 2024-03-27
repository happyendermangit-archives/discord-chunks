function(e, t, n) {
    "use strict";
    var r = n("531478").codes.ERR_STREAM_PREMATURE_CLOSE;

    function i() {}
    e.exports = function e(t, n, a) {
        if ("function" == typeof n) return e(t, null, n);
        !n && (n = {}), o = a || i, s = !1, a = function() {
            if (!s) {
                s = !0;
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                o.apply(this, t)
            }
        };
        var o, s, u, c = n.readable || !1 !== n.readable && t.readable,
            l = n.writable || !1 !== n.writable && t.writable,
            d = function() {
                !t.writable && p()
            },
            f = t._writableState && t._writableState.finished,
            p = function() {
                l = !1, f = !0, !c && a.call(t)
            },
            h = t._readableState && t._readableState.endEmitted,
            m = function() {
                c = !1, h = !0, !l && a.call(t)
            },
            g = function(e) {
                a.call(t, e)
            },
            _ = function() {
                var e;
                return c && !h ? ((!t._readableState || !t._readableState.ended) && (e = new r), a.call(t, e)) : l && !f ? ((!t._writableState || !t._writableState.ended) && (e = new r), a.call(t, e)) : void 0
            },
            b = function() {
                t.req.on("finish", p)
            };
        if ((u = t).setHeader && "function" == typeof u.abort) t.on("complete", p), t.on("abort", _), t.req ? b() : t.on("request", b);
        else l && !t._writableState && (t.on("end", d), t.on("close", d));
        return t.on("end", m), t.on("finish", p), !1 !== n.error && t.on("error", g), t.on("close", _),
            function() {
                t.removeListener("complete", p), t.removeListener("abort", _), t.removeListener("request", b), t.req && t.req.removeListener("finish", p), t.removeListener("end", d), t.removeListener("close", d), t.removeListener("finish", p), t.removeListener("end", m), t.removeListener("error", g), t.removeListener("close", _)
            }
    }
}