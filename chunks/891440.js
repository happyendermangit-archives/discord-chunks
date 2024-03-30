function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Histogram: function() {
            return i
        }
    });
    var r = n("508385");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var i = function() {
        var e, t, n;

        function i() {
            var e, t, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), e = this, t = "digest", n = new r.Digest, t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
        return e = i, t = [{
            key: "addSample",
            value: function(e) {
                this.digest.push(e)
            }
        }, {
            key: "getReport",
            value: function() {
                var e, t, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [25, 50, 75, 90, 95],
                    o = {},
                    i = !0,
                    a = !1,
                    u = void 0;
                try {
                    for (var s, l = r[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                        var c, f = s.value;
                        o[f] = null !== (c = this.digest.percentile(f / 100)) && void 0 !== c ? c : 0
                    }
                } catch (e) {
                    a = !0, u = e
                } finally {
                    try {
                        !i && null != l.return && l.return()
                    } finally {
                        if (a) throw u
                    }
                }
                return {
                    min: null !== (e = this.digest.percentile(0)) && void 0 !== e ? e : 0,
                    max: null !== (t = this.digest.percentile(1)) && void 0 !== t ? t : 0,
                    count: null !== (n = this.digest.size()) && void 0 !== n ? n : 0,
                    percentiles: o
                }
            }
        }], o(e.prototype, t), n && o(e, n), i
    }()
}