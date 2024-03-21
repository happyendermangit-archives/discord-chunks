function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getGameName: function() {
            return E
        },
        startBroadcastForStream: function() {
            return p
        },
        stopBroadcast: function() {
            return m
        },
        fetchBroadcasterBuckets: function() {
            return S
        },
        maybeFetchBroadcastChannels: function() {
            return g
        }
    });
    var a = n("872717"),
        r = n("913144"),
        s = n("161454"),
        i = n("374014"),
        l = n("766274"),
        u = n("271938"),
        o = n("42203"),
        d = n("546463"),
        c = n("9759"),
        f = n("194051"),
        h = n("49111");

    function E(e) {
        var t;
        let n = null !== (t = null == e ? void 0 : e.gameName) && void 0 !== t ? t : null == e ? void 0 : e.name;
        return null != n ? n.trim() : null
    }

    function p(e, t) {
        if (null == t) return;
        let {
            canBroadcast: n
        } = c.default.getCurrentConfig({
            location: "start_broadcast_for_stream"
        }, {
            autoTrackExposure: !1
        });
        if (!n) return;
        let a = (0, i.decodeStreamKey)(e),
            {
                ownerId: l,
                channelId: f
            } = a;
        if (null == l || null == f) return;
        let h = u.default.getId();
        if (l !== h) return;
        let p = u.default.getSessionId();
        if (null == p) return;
        let m = o.default.getChannel(f),
            C = null != m && m.isBroadcastChannel();
        if (null == m || l !== m.ownerId || !C) return;
        let S = function(e) {
            var t;
            let n = s.default.getGameForPID(e),
                a = E(n),
                r = d.default.getGameByName(a);
            return null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : "0"
        }(t);
        null != S && ! function(e) {
            let t = u.default.getId(),
                n = u.default.getSessionId();
            null != t && null != n && r.default.dispatch({
                type: "BROADCAST_START",
                broadcast: e
            })
        }({
            sessionId: p,
            userId: h,
            applicationId: S,
            channelId: m.id,
            streamKey: e
        })
    }

    function m() {
        r.default.dispatch({
            type: "BROADCAST_STOP"
        })
    }

    function C(e) {
        let t = {};
        e.forEach(e => {
            t[e] = -1
        }), r.default.dispatch({
            type: "BROADCASTER_BUCKETS_RECEIVED",
            data: t
        })
    }
    async function S() {
        let e = f.default.getUserIdsToValidate();
        try {
            let t = await a.HTTP.get({
                url: h.Endpoints.USER_BROADCASTS,
                query: {
                    user_ids: e
                }
            });
            if (t.ok && null != t.body) {
                let n = {};
                e.forEach(e => {
                    var a;
                    n[e] = null !== (a = t.body[e]) && void 0 !== a ? a : -1
                }), r.default.dispatch({
                    type: "BROADCASTER_BUCKETS_RECEIVED",
                    data: n
                })
            } else C(e)
        } catch (t) {
            C(e)
        }
    }
    async function g() {
        let e = f.default.getBroadcastsToValidateChannels(),
            t = e.filter(e => null == e.viewers).map(e => e.channelId);
        if (0 !== t.length) try {
            let e = await a.HTTP.get({
                url: h.Endpoints.BROADCAST_CHANNELS,
                query: {
                    channel_ids: t
                }
            });
            if (e.ok && null != e.body) {
                let t = e.body,
                    n = {};
                t.forEach(e => {
                    var t;
                    let a = f.default.getBroadcastByChannel(e.id).userId,
                        r = null !== (t = e.recipients) && void 0 !== t ? t : [];
                    n[a] = r.map(e => new l.default(e)).filter(e => e.id !== a)
                }), r.default.dispatch({
                    type: "BROADCAST_VIEWERS_UPDATE",
                    viewers: n
                })
            }
        } catch (e) {}
    }
}