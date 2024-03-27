function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_RANGES: function() {
            return u
        },
        MINIMUM_RANGE: function() {
            return l
        },
        default: function() {
            return _
        }
    });
    var i = n("392711"),
        r = n.n(i),
        s = n("31775"),
        a = n.n(s);

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let l = 100,
        u = [
            [0, 99]
        ];

    function d(e) {
        let t = {};
        return e.forEach((e, n) => {
            t[n] = e
        }), t
    }
    class _ {
        reset() {
            this._subscriptions = {}
        }
        get(e) {
            return d(this._get(e))
        }
        _get(e) {
            var t;
            return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new(a())({
                max: 5
            })
        }
        clear(e) {
            delete this._subscriptions[e]
        }
        subscribe(e, t, n) {
            let i = this._get(e);
            return !r().isEqual(i.get(t), n) && (i.set(t, n), this._subscriptions[e] = i, this._onChange(e, d(i)), !0)
        }
        constructor(e) {
            o(this, "_subscriptions", {}), o(this, "_onChange", void 0), this._onChange = e
        }
    }
}