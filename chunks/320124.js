function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("31775"),
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
    var u = function() {
        var e, t, n;

        function r(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), a(this, "_subscriptions", {}), a(this, "_onChange", void 0), this._onChange = e
        }
        return e = r, t = [{
            key: "reset",
            value: function() {
                this._subscriptions = {}
            }
        }, {
            key: "get",
            value: function(e) {
                return this._get(e).keys()
            }
        }, {
            key: "getSubscribedThreadIds",
            value: function() {
                var e = new Set;
                for (var t in this._subscriptions) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = this._subscriptions[t].keys()[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            e.add(u)
                        }
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                }
                return e
            }
        }, {
            key: "_get",
            value: function(e) {
                var t;
                return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new(o())({
                    max: 3,
                    updateAgeOnGet: !0
                })
            }
        }, {
            key: "clear",
            value: function(e) {
                e in this._subscriptions && (delete this._subscriptions[e], this._onChange(e, []))
            }
        }, {
            key: "subscribe",
            value: function(e, t, n) {
                var r = this._get(e);
                return r.has(t) ? (r.set(t, Date.now()), !1) : (null != n && r.has(n) && r.set(n, Date.now()), r.set(t, Date.now()), this._subscriptions[e] = r, this._onChange(e, r.keys()), !0)
            }
        }, {
            key: "unsubscribe",
            value: function(e, t) {
                if (!(e in this._subscriptions)) return !1;
                var n = this._subscriptions[e];
                return !!n.has(t) && (n.del(t), this._onChange(e, n.keys()), !0)
            }
        }], i(e.prototype, t), n && i(e, n), r
    }()
}