function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchBroadcasterBuckets: function() {
            return h
        },
        getGameName: function() {
            return I
        },
        maybeFetchBroadcastChannels: function() {
            return A
        },
        startBroadcastForStream: function() {
            return T
        },
        stopBroadcast: function() {
            return f
        }
    });
    var i = n("544891"),
        r = n("570140"),
        a = n("594190"),
        s = n("569545"),
        o = n("598077"),
        l = n("314897"),
        u = n("592125"),
        d = n("77498"),
        _ = n("770471"),
        c = n("292584"),
        E = n("981631");

    function I(e) {
        var t;
        let n = null !== (t = null == e ? void 0 : e.gameName) && void 0 !== t ? t : null == e ? void 0 : e.name;
        return null != n ? n.trim() : null
    }

    function T(e, t) {
        if (null == t) return;
        let {
            canBroadcast: n
        } = _.default.getCurrentConfig({
            location: "start_broadcast_for_stream"
        }, {
            autoTrackExposure: !1
        });
        if (!n) return;
        let {
            ownerId: i,
            channelId: o
        } = (0, s.decodeStreamKey)(e);
        if (null == i || null == o) return;
        let c = l.default.getId();
        if (i !== c) return;
        let E = l.default.getSessionId();
        if (null == E) return;
        let T = u.default.getChannel(o),
            f = null != T && T.isBroadcastChannel();
        if (null == T || i !== T.ownerId || !f) return;
        let S = function(e) {
            var t;
            let n = I(a.default.getGameForPID(e)),
                i = d.default.getGameByName(n);
            return null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : "0"
        }(t);
        null != S && ! function(e) {
            let t = l.default.getId(),
                n = l.default.getSessionId();
            null != t && null != n && r.default.dispatch({
                type: "BROADCAST_START",
                broadcast: e
            })
        }({
            sessionId: E,
            userId: c,
            applicationId: S,
            channelId: T.id,
            streamKey: e
        })
    }

    function f() {
        r.default.dispatch({
            type: "BROADCAST_STOP"
        })
    }

    function S(e) {
        let t = {};
        e.forEach(e => {
            t[e] = -1
        }), r.default.dispatch({
            type: "BROADCASTER_BUCKETS_RECEIVED",
            data: t
        })
    }
    async function h() {
        let e = c.default.getUserIdsToValidate();
        try {
            let t = await i.HTTP.get({
                url: E.Endpoints.USER_BROADCASTS,
                query: {
                    user_ids: e
                }
            });
            if (t.ok && null != t.body) {
                let n = {};
                e.forEach(e => {
                    var i;
                    n[e] = null !== (i = t.body[e]) && void 0 !== i ? i : -1
                }), r.default.dispatch({
                    type: "BROADCASTER_BUCKETS_RECEIVED",
                    data: n
                })
            } else S(e)
        } catch (t) {
            S(e)
        }
    }
    async function A() {
        let e = c.default.getBroadcastsToValidateChannels().filter(e => null == e.viewers).map(e => e.channelId);
        if (0 !== e.length) try {
            let t = await i.HTTP.get({
                url: E.Endpoints.BROADCAST_CHANNELS,
                query: {
                    channel_ids: e
                }
            });
            if (t.ok && null != t.body) {
                let e = t.body,
                    n = {};
                e.forEach(e => {
                    var t;
                    let i = c.default.getBroadcastByChannel(e.id).userId,
                        r = null !== (t = e.recipients) && void 0 !== t ? t : [];
                    n[i] = r.map(e => new o.default(e)).filter(e => e.id !== i)
                }), r.default.dispatch({
                    type: "BROADCAST_VIEWERS_UPDATE",
                    viewers: n
                })
            }
        } catch (e) {}
    }
}