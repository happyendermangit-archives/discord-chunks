function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_RANGES: function() {
            return c
        },
        MINIMUM_RANGE: function() {
            return l
        },
        default: function() {
            return d
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("31775"),
        a = n.n(i);

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var l = 100,
        c = [
            [0, 99]
        ];

    function f(e) {
        var t = {};
        return e.forEach(function(e, n) {
            t[n] = e
        }), t
    }
    var d = function() {
        var e, t, n;

        function r(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), s(this, "_subscriptions", {}), s(this, "_onChange", void 0), this._onChange = e
        }
        return e = r, t = [{
            key: "reset",
            value: function() {
                this._subscriptions = {}
            }
        }, {
            key: "get",
            value: function(e) {
                return f(this._get(e))
            }
        }, {
            key: "_get",
            value: function(e) {
                var t;
                return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new(a())({
                    max: 5
                })
            }
        }, {
            key: "clear",
            value: function(e) {
                delete this._subscriptions[e]
            }
        }, {
            key: "subscribe",
            value: function(e, t, n) {
                var r = this._get(e);
                return !o().isEqual(r.get(t), n) && (r.set(t, n), this._subscriptions[e] = r, this._onChange(e, f(r)), !0)
            }
        }], u(e.prototype, t), n && u(e, n), r
    }()
}