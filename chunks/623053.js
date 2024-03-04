function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007");
    var i, s = n("917351"),
        r = n.n(s),
        a = n("862337"),
        o = n("605250"),
        l = n("718517"),
        u = n("299039");
    let d = 1 * l.default.Millis.MINUTE;
    i = class {
        reset() {
            this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe.cancel()
        }
        get(e) {
            var t;
            let n = null !== (t = this._subscriptions[e]) && void 0 !== t ? t : {};
            return u.default.keys(n)
        }
        clear(e) {
            delete this._subscriptions[e], delete this._unsubscriptions[e]
        }
        subscribe(e, t) {
            var n, i;
            let s = null !== (n = this._subscriptions[e]) && void 0 !== n ? n : {};
            s[t] = (null !== (i = s[t]) && void 0 !== i ? i : 0) + 1, this._subscriptions[e] = s, 1 === s[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t)
        }
        isSubscribed(e, t) {
            return null != this._subscriptions[e] && null != this._subscriptions[e][t]
        }
        isSubscribedToAnyMember(e) {
            return this.get(e).length > 0
        }
        unsubscribe(e, t) {
            var n, i;
            if (!this.isSubscribed(e, t)) return;
            let s = null !== (n = this._unsubscriptions[e]) && void 0 !== n ? n : {};
            s[t] = (null !== (i = s[t]) && void 0 !== i ? i : 0) + 1, this._unsubscriptions[e] = s, 1 === s[t] && this._unsubscribe.delay(!1)
        }
        checkForLeaks(e, t) {
            var n, i, s, r;
            let a = null !== (s = null === (n = this._subscriptions[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== s ? s : 0,
                l = null !== (r = null === (i = this._unsubscriptions[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== r ? r : 0,
                u = a - l;
            u > 5 && new(0, o.default)("GuildMemberSubscriptions").warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (".concat(u, " subscriptions)"))
        }
        flushUnsubscriptions() {
            !r.isEmpty(this._unsubscriptions) && (r.forEach(this._unsubscriptions, (e, t) => {
                let n = this._subscriptions[t];
                r.forEach(e, (e, t) => {
                    var i;
                    n[t] = (null !== (i = n[t]) && void 0 !== i ? i : 0) - e, n[t] <= 0 && delete n[t]
                }), r.isEmpty(n) && delete this._subscriptions[t], this._onChange(t, this.get(t))
            }), this._unsubscriptions = {})
        }
        constructor(e) {
            this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe = new a.DelayedCall(d, () => this.flushUnsubscriptions()), this._onChange = e
        }
    }
}