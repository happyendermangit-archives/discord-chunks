function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140");
    let u = {
            enabled: !1
        },
        d = {},
        _ = {},
        c = !1;
    class E extends(a = o.default.DeviceSettingsStore) {
        initialize() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
            c = e.enabled
        }
        getWaitingHighFive(e, t) {
            var n;
            return null === (n = d[e]) || void 0 === n ? void 0 : n[t]
        }
        getCompletedHighFive(e, t) {
            var n;
            return null === (n = _[e]) || void 0 === n ? void 0 : n[t]
        }
        getEnabled() {
            return c
        }
        getUserAgnosticState() {
            return {
                enabled: c
            }
        }
    }
    s = "HighFiveStore", (r = "persistKey") in(i = E) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new E(l.default, {
        HIGH_FIVE_QUEUE: function(e) {
            let {
                userId: t,
                channelId: n,
                emoji: i
            } = e;
            d[n] = {
                ...d[n],
                [t]: i
            }
        },
        HIGH_FIVE_REMOVE: function(e) {
            let {
                userId: t,
                channelId: n
            } = e, i = d[n];
            if (null == i) return !1;
            delete i[t]
        },
        HIGH_FIVE_SET_ENABLED: function(e) {
            let {
                enabled: t
            } = e;
            c = t
        },
        HIGH_FIVE_COMPLETE: function(e) {
            var t;
            let {
                completingEmoji: n,
                completingUserId: i,
                waitingUserId: r,
                channelId: s
            } = e, a = null !== (t = d[s]) && void 0 !== t ? t : {}, o = a[r];
            if (delete a[r], null == o) return !1;
            _[s] = {
                ..._[s],
                [r]: [o, n],
                [i]: [n, o]
            }
        },
        HIGH_FIVE_COMPLETE_CLEAR: function(e) {
            var t;
            let {
                firstUserId: n,
                secondUserId: i,
                channelId: r
            } = e, s = null !== (t = _[r]) && void 0 !== t ? t : {};
            delete s[n], delete s[i]
        }
    })
}