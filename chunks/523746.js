function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("544891"),
        _ = n("570140"),
        c = n("592125"),
        E = n("944486"),
        I = n("914010"),
        T = n("981631");
    let f = {},
        S = {};

    function h() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.default.getChannelId(),
            n = c.default.getChannel(t);
        if (null != n && null == n.getGuildId() && null != t && (null == f[t] || e)) {
            var i;
            return f[t] = null !== (i = f[t]) && void 0 !== i ? i : {
                channelId: t,
                ringing: []
            }, _.default.dispatch({
                type: "CALL_CONNECT",
                channelId: t
            }), !0
        }
        return !1
    }
    class A extends(a = u.default.Store) {
        initialize() {
            this.waitFor(I.default, E.default)
        }
        getCall(e) {
            return f[e]
        }
        getCalls() {
            return Object.values(f)
        }
        getMessageId(e) {
            let t = this.getCall(e);
            return null != t ? t.messageId : null
        }
        isCallActive(e, t) {
            let n = f[e];
            return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region)
        }
        isCallUnavailable(e) {
            let t = f[e];
            return null != t && t.unavailable
        }
        getInternalState() {
            return {
                calls: f,
                enqueuedRings: S
            }
        }
    }
    s = "CallStore", (r = "displayName") in(i = A) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new A(_.default, {
        CONNECTION_OPEN: function() {
            return h(!0)
        },
        CONNECTION_CLOSED: function() {
            f = {}, S = {}
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                callStoreInternalState: t
            } = e;
            f = {
                ...t.calls
            }, S = {
                ...t.enqueuedRings
            }
        },
        CONNECTION_RESUMED: function() {
            return h(!0)
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return h(!1, t)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (null != S[t.id] && delete S[t.id], null == f[t.id]) return !1;
            delete f[t.id]
        },
        CALL_CREATE: function(e) {
            let {
                channelId: t,
                messageId: n,
                region: i,
                ringing: r
            } = e;
            if (f[t] = {
                    channelId: t,
                    messageId: n,
                    region: i,
                    ringing: r,
                    unavailable: !1,
                    regionUpdated: !1
                }, null != S[t]) {
                let e = S[t];
                delete S[t], 1 !== e.indexOf("all") && (e = null), d.HTTP.post({
                    url: T.Endpoints.CALL_RING(t),
                    body: {
                        recipients: e
                    },
                    oldFormErrors: !0
                })
            }
        },
        CALL_UPDATE: function(e) {
            let {
                channelId: t,
                messageId: n,
                region: i,
                ringing: r
            } = e, s = f[t], a = null != s && (s.regionUpdated || s.region !== i);
            f[t] = {
                ...f[t],
                messageId: n,
                region: i,
                ringing: r,
                regionUpdated: a
            }
        },
        CALL_DELETE: function(e) {
            let {
                channelId: t,
                unavailable: n
            } = e, i = f[t];
            !0 === n && null != i ? f[t] = {
                ...i,
                unavailable: n
            } : f[t] = {
                channelId: t,
                ringing: [],
                messageId: null,
                region: null,
                regionUpdated: !1,
                unavailable: n
            }, null != S[t] && delete S[t]
        },
        CALL_ENQUEUE_RING: function(e) {
            var t;
            let {
                channelId: n,
                recipients: i
            } = e;
            S[n] = l().union(null !== (t = S[n]) && void 0 !== t ? t : [], null != i ? i : ["all"])
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            null == t && (S = {})
        }
    })
}