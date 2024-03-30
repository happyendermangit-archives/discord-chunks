function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("945816"),
        a = n("35523"),
        u = n("388990"),
        s = n("523018");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var f = 1 * u.default.Millis.MINUTE,
        d = function() {
            var e, t, n;

            function r(e) {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), c(this, "_subscriptions", {}), c(this, "_unsubscriptions", {}), c(this, "_onChange", void 0), c(this, "_unsubscribe", new i.DelayedCall(f, function() {
                    return t.flushUnsubscriptions()
                })), this._onChange = e
            }
            return e = r, t = [{
                key: "reset",
                value: function() {
                    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe.cancel()
                }
            }, {
                key: "get",
                value: function(e) {
                    var t, n = null !== (t = this._subscriptions[e]) && void 0 !== t ? t : {};
                    return s.default.keys(n)
                }
            }, {
                key: "clear",
                value: function(e) {
                    delete this._subscriptions[e], delete this._unsubscriptions[e]
                }
            }, {
                key: "subscribe",
                value: function(e, t) {
                    var n, r, o = null !== (n = this._subscriptions[e]) && void 0 !== n ? n : {};
                    o[t] = (null !== (r = o[t]) && void 0 !== r ? r : 0) + 1, this._subscriptions[e] = o, 1 === o[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t)
                }
            }, {
                key: "isSubscribed",
                value: function(e, t) {
                    return null != this._subscriptions[e] && null != this._subscriptions[e][t]
                }
            }, {
                key: "isSubscribedToAnyMember",
                value: function(e) {
                    return this.get(e).length > 0
                }
            }, {
                key: "unsubscribe",
                value: function(e, t) {
                    if (this.isSubscribed(e, t)) {
                        var n, r, o = null !== (n = this._unsubscriptions[e]) && void 0 !== n ? n : {};
                        o[t] = (null !== (r = o[t]) && void 0 !== r ? r : 0) + 1, this._unsubscriptions[e] = o, 1 === o[t] && this._unsubscribe.delay(!1)
                    }
                }
            }, {
                key: "checkForLeaks",
                value: function(e, t) {
                    var n, r, o, i, u = (null !== (o = null === (n = this._subscriptions[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : 0) - (null !== (i = null === (r = this._unsubscriptions[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== i ? i : 0);
                    u > 5 && new a.default("GuildMemberSubscriptions").warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (".concat(u, " subscriptions)"))
                }
            }, {
                key: "flushUnsubscriptions",
                value: function() {
                    var e = this;
                    !o().isEmpty(this._unsubscriptions) && (o().forEach(this._unsubscriptions, function(t, n) {
                        var r = e._subscriptions[n];
                        o().forEach(t, function(e, t) {
                            var n;
                            r[t] = (null !== (n = r[t]) && void 0 !== n ? n : 0) - e, r[t] <= 0 && delete r[t]
                        }), o().isEmpty(r) && delete e._subscriptions[n], e._onChange(n, e.get(n))
                    }), this._unsubscriptions = {})
                }
            }], l(e.prototype, t), n && l(e, n), r
        }()
}