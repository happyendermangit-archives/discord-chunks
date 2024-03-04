function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MINIMUM_RANGE: function() {
            return l
        },
        DEFAULT_RANGES: function() {
            return u
        },
        default: function() {
            return i
        }
    });
    var i, s = n("917351"),
        r = n.n(s),
        a = n("693566"),
        o = n.n(a);
    let l = 100,
        u = [
            [0, l - 1]
        ];

    function d(e) {
        let t = {};
        return e.forEach((e, n) => {
            t[n] = e
        }), t
    }
    i = class {
        reset() {
            this._subscriptions = {}
        }
        get(e) {
            return d(this._get(e))
        }
        _get(e) {
            var t;
            return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new o({
                max: 5
            })
        }
        clear(e) {
            delete this._subscriptions[e]
        }
        subscribe(e, t, n) {
            let i = this._get(e);
            return !r.isEqual(i.get(t), n) && (i.set(t, n), this._subscriptions[e] = i, this._onChange(e, d(i)), !0)
        }
        constructor(e) {
            this._subscriptions = {}, this._onChange = e
        }
    }
}