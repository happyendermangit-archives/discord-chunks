function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007");
    var i, a = n("693566"),
        l = n.n(a);
    i = class {
        reset() {
            this._subscriptions = {}
        }
        get(e) {
            return this._get(e).keys()
        }
        getSubscribedThreadIds() {
            let e = new Set;
            for (let t in this._subscriptions)
                for (let n of this._subscriptions[t].keys()) e.add(n);
            return e
        }
        _get(e) {
            var t;
            return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new l({
                max: 3,
                updateAgeOnGet: !0
            })
        }
        clear(e) {
            e in this._subscriptions && (delete this._subscriptions[e], this._onChange(e, []))
        }
        subscribe(e, t, n) {
            let i = this._get(e);
            return i.has(t) ? (i.set(t, Date.now()), !1) : (null != n && i.has(n) && i.set(n, Date.now()), i.set(t, Date.now()), this._subscriptions[e] = i, this._onChange(e, i.keys()), !0)
        }
        unsubscribe(e, t) {
            if (!(e in this._subscriptions)) return !1;
            let n = this._subscriptions[e];
            return !!n.has(t) && (n.del(t), this._onChange(e, n.keys()), !0)
        }
        constructor(e) {
            this._subscriptions = {}, this._onChange = e
        }
    }
}