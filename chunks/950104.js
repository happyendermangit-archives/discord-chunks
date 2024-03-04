function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("872717"),
        o = n("913144"),
        l = n("42203"),
        u = n("18494"),
        d = n("162771"),
        c = n("49111");
    let f = {},
        _ = {};

    function h() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default.getChannelId(),
            n = l.default.getChannel(t);
        if (null != n && null == n.getGuildId() && null != t && (null == f[t] || e)) {
            var i;
            return f[t] = null !== (i = f[t]) && void 0 !== i ? i : {
                channelId: t,
                ringing: []
            }, o.default.dispatch({
                type: "CALL_CONNECT",
                channelId: t
            }), !0
        }
        return !1
    }
    class E extends r.default.Store {
        initialize() {
            this.waitFor(d.default, u.default)
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
                enqueuedRings: _
            }
        }
    }
    E.displayName = "CallStore";
    var g = new E(o.default, {
        CONNECTION_OPEN: function() {
            return h(!0)
        },
        CONNECTION_CLOSED: function() {
            f = {}, _ = {}
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                callStoreInternalState: t
            } = e;
            f = {
                ...t.calls
            }, _ = {
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
            if (null != _[t.id] && delete _[t.id], null == f[t.id]) return !1;
            delete f[t.id]
        },
        CALL_CREATE: function(e) {
            let {
                channelId: t,
                messageId: n,
                region: i,
                ringing: s
            } = e;
            if (f[t] = {
                    channelId: t,
                    messageId: n,
                    region: i,
                    ringing: s,
                    unavailable: !1,
                    regionUpdated: !1
                }, null != _[t]) {
                let e = _[t];
                delete _[t], 1 !== e.indexOf("all") && (e = null), a.default.post({
                    url: c.Endpoints.CALL_RING(t),
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
                ringing: s
            } = e, r = f[t], a = null != r && (r.regionUpdated || r.region !== i);
            f[t] = {
                ...f[t],
                messageId: n,
                region: i,
                ringing: s,
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
            }, null != _[t] && delete _[t]
        },
        CALL_ENQUEUE_RING: function(e) {
            var t;
            let {
                channelId: n,
                recipients: i
            } = e;
            _[n] = s.union(null !== (t = _[n]) && void 0 !== t ? t : [], null != i ? i : ["all"])
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            null == t && (_ = {})
        }
    })
}