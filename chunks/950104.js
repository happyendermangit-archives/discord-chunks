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
    let _ = {},
        f = {};

    function E() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default.getChannelId(),
            n = l.default.getChannel(t);
        if (null != n && null == n.getGuildId() && null != t && (null == _[t] || e)) {
            var i;
            return _[t] = null !== (i = _[t]) && void 0 !== i ? i : {
                channelId: t,
                ringing: []
            }, o.default.dispatch({
                type: "CALL_CONNECT",
                channelId: t
            }), !0
        }
        return !1
    }
    class h extends r.default.Store {
        initialize() {
            this.waitFor(d.default, u.default)
        }
        getCall(e) {
            return _[e]
        }
        getCalls() {
            return Object.values(_)
        }
        getMessageId(e) {
            let t = this.getCall(e);
            return null != t ? t.messageId : null
        }
        isCallActive(e, t) {
            let n = _[e];
            return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region)
        }
        isCallUnavailable(e) {
            let t = _[e];
            return null != t && t.unavailable
        }
        getInternalState() {
            return {
                calls: _,
                enqueuedRings: f
            }
        }
    }
    h.displayName = "CallStore";
    var g = new h(o.default, {
        CONNECTION_OPEN: function() {
            return E(!0)
        },
        CONNECTION_CLOSED: function() {
            _ = {}, f = {}
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                callStoreInternalState: t
            } = e;
            _ = {
                ...t.calls
            }, f = {
                ...t.enqueuedRings
            }
        },
        CONNECTION_RESUMED: function() {
            return E(!0)
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return E(!1, t)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (null != f[t.id] && delete f[t.id], null == _[t.id]) return !1;
            delete _[t.id]
        },
        CALL_CREATE: function(e) {
            let {
                channelId: t,
                messageId: n,
                region: i,
                ringing: s
            } = e;
            if (_[t] = {
                    channelId: t,
                    messageId: n,
                    region: i,
                    ringing: s,
                    unavailable: !1,
                    regionUpdated: !1
                }, null != f[t]) {
                let e = f[t];
                delete f[t], 1 !== e.indexOf("all") && (e = null), a.default.post({
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
            } = e, r = _[t], a = null != r && (r.regionUpdated || r.region !== i);
            _[t] = {
                ..._[t],
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
            } = e, i = _[t];
            !0 === n && null != i ? _[t] = {
                ...i,
                unavailable: n
            } : _[t] = {
                channelId: t,
                ringing: [],
                messageId: null,
                region: null,
                regionUpdated: !1,
                unavailable: n
            }, null != f[t] && delete f[t]
        },
        CALL_ENQUEUE_RING: function(e) {
            var t;
            let {
                channelId: n,
                recipients: i
            } = e;
            f[n] = s.union(null !== (t = f[n]) && void 0 !== t ? t : [], null != i ? i : ["all"])
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            null == t && (f = {})
        }
    })
}