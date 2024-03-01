function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MINIMUM_RANGE: function() {
            return u
        },
        DEFAULT_RANGES: function() {
            return d
        },
        default: function() {
            return i
        }
    });
    var i, a = n("917351"),
        l = n.n(a),
        s = n("693566"),
        r = n.n(s);
    let u = 100,
        d = [
            [0, u - 1]
        ];

    function o(e) {
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
            return o(this._get(e))
        }
        _get(e) {
            var t;
            return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new r({
                max: 5
            })
        }
        clear(e) {
            delete this._subscriptions[e]
        }
        subscribe(e, t, n) {
            let i = this._get(e);
            return !l.isEqual(i.get(t), n) && (i.set(t, n), this._subscriptions[e] = i, this._onChange(e, o(i)), !0)
        }
        constructor(e) {
            this._subscriptions = {}, this._onChange = e
        }
    }
}