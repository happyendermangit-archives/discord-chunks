function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("392711"),
        o = n.n(r);

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var u = [],
        s = function() {
            var e, t, n;

            function r() {
                var e = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), a(this, "bytes", {}), a(this, "record", function(t) {
                    if (null != t) {
                        for (var n in t.rtp.inbound) {
                            var r = t.rtp.inbound[n],
                                o = !0,
                                i = !1,
                                a = void 0;
                            try {
                                for (var u, s = r[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                                    var l = u.value,
                                        c = "inbound-".concat(n, "-").concat(l.type);
                                    !(c in e.bytes) && (e.bytes[c] = 0), e.bytes[c] = l.bytesReceived
                                }
                            } catch (e) {
                                i = !0, a = e
                            } finally {
                                try {
                                    !o && null != s.return && s.return()
                                } finally {
                                    if (i) throw a
                                }
                            }
                        }
                        var f = !0,
                            d = !1,
                            _ = void 0;
                        try {
                            for (var E, p = t.rtp.outbound[Symbol.iterator](); !(f = (E = p.next()).done); f = !0) {
                                var m = E.value,
                                    y = "outbound-".concat(m.type);
                                !(y in e.bytes) && (e.bytes[y] = 0), e.bytes[y] = m.bytesSent
                            }
                        } catch (e) {
                            d = !0, _ = e
                        } finally {
                            try {
                                !f && null != p.return && p.return()
                            } finally {
                                if (d) throw _
                            }
                        }
                    }
                })
            }
            return e = r, t = [{
                key: "getTotalBytes",
                value: function() {
                    return o().sum(Object.values(this.bytes))
                }
            }], n = [{
                key: "create",
                value: function() {
                    var e = new r;
                    return u.push(e), e.record
                }
            }], t && i(e.prototype, t), n && i(e, n), r
        }()
}