function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var s = n("917351"),
        i = n.n(s),
        r = n("446674"),
        a = n("872717"),
        o = n("913144"),
        d = n("42203"),
        u = n("18494"),
        l = n("162771"),
        f = n("49111");
    let _ = {},
        c = {};

    function g() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.default.getChannelId(),
            n = d.default.getChannel(t);
        if (null != n && null == n.getGuildId() && null != t && (null == _[t] || e)) {
            var s;
            return _[t] = null !== (s = _[t]) && void 0 !== s ? s : {
                channelId: t,
                ringing: []
            }, o.default.dispatch({
                type: "CALL_CONNECT",
                channelId: t
            }), !0
        }
        return !1
    }
    class m extends r.default.Store {
        initialize() {
            this.waitFor(l.default, u.default)
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
                enqueuedRings: c
            }
        }
    }
    m.displayName = "CallStore";
    var h = new m(o.default, {
        CONNECTION_OPEN: function() {
            return g(!0)
        },
        CONNECTION_CLOSED: function() {
            _ = {}, c = {}
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                callStoreInternalState: t
            } = e;
            _ = {
                ...t.calls
            }, c = {
                ...t.enqueuedRings
            }
        },
        CONNECTION_RESUMED: function() {
            return g(!0)
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return g(!1, t)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (null != c[t.id] && delete c[t.id], null == _[t.id]) return !1;
            delete _[t.id]
        },
        CALL_CREATE: function(e) {
            let {
                channelId: t,
                messageId: n,
                region: s,
                ringing: i
            } = e;
            if (_[t] = {
                    channelId: t,
                    messageId: n,
                    region: s,
                    ringing: i,
                    unavailable: !1,
                    regionUpdated: !1
                }, null != c[t]) {
                let e = c[t];
                delete c[t], 1 !== e.indexOf("all") && (e = null), a.default.post({
                    url: f.Endpoints.CALL_RING(t),
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
                region: s,
                ringing: i
            } = e, r = _[t], a = null != r && (r.regionUpdated || r.region !== s);
            _[t] = {
                ..._[t],
                messageId: n,
                region: s,
                ringing: i,
                regionUpdated: a
            }
        },
        CALL_DELETE: function(e) {
            let {
                channelId: t,
                unavailable: n
            } = e, s = _[t];
            !0 === n && null != s ? _[t] = {
                ...s,
                unavailable: n
            } : _[t] = {
                channelId: t,
                ringing: [],
                messageId: null,
                region: null,
                regionUpdated: !1,
                unavailable: n
            }, null != c[t] && delete c[t]
        },
        CALL_ENQUEUE_RING: function(e) {
            var t;
            let {
                channelId: n,
                recipients: s
            } = e;
            c[n] = i.union(null !== (t = c[n]) && void 0 !== t ? t : [], null != s ? s : ["all"])
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            null == t && (c = {})
        }
    })
}