function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ack: function() {
            return c
        },
        ackChannel: function() {
            return f
        },
        bulkAck: function() {
            return _
        },
        localAck: function() {
            return E
        },
        enableAutomaticAck: function() {
            return A
        },
        disableAutomaticAck: function() {
            return h
        },
        ackGuildFeature: function() {
            return v
        },
        ackUserFeature: function() {
            return L
        }
    }), n("222007"), n("424973");
    var l = n("913144"),
        i = n("401690"),
        r = n("233069"),
        u = n("42203"),
        a = n("245997"),
        d = n("697218"),
        o = n("299039"),
        s = n("49111");

    function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0,
            r = arguments.length > 4 ? arguments[4] : void 0;
        l.default.dispatch({
            type: "CHANNEL_ACK",
            channelId: e,
            messageId: i,
            immediate: t,
            force: n,
            context: s.CURRENT_APP_CONTEXT,
            location: r
        })
    }

    function f(e) {
        e.isCategory() ? ! function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                l = u.default.getChannel(e);
            if (null == l || null == l.guild_id) return;
            let d = a.default.getCategories(l.guild_id);
            if (null == d[e]) return;
            let o = d[e].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return (0, r.isGuildReadableType)(t.type)
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                }),
                s = [...o];
            for (let e of (o.forEach(e => {
                    let t = i.default.getActiveJoinedThreadsForParent(l.guild_id, e);
                    for (let e in t) s.push(e)
                }), s)) c(e, t, n)
        }(e.id, !0, !0) : e.isForumLikeChannel() ? c(e.id, !0, !0, o.default.fromTimestamp(Date.now())) : c(e.id, !0, !0)
    }

    function _(e, t) {
        l.default.dispatch({
            type: "BULK_ACK",
            channels: e,
            context: s.CURRENT_APP_CONTEXT,
            onFinished: t
        })
    }

    function E(e) {
        l.default.dispatch({
            type: "CHANNEL_LOCAL_ACK",
            channelId: e
        })
    }

    function A(e, t) {
        l.default.dispatch({
            type: "ENABLE_AUTOMATIC_ACK",
            channelId: e,
            windowId: t
        })
    }

    function h(e, t) {
        l.default.dispatch({
            type: "DISABLE_AUTOMATIC_ACK",
            channelId: e,
            windowId: t
        })
    }

    function v(e, t, n) {
        l.default.dispatch({
            type: "GUILD_FEATURE_ACK",
            id: e,
            ackType: t,
            ackedId: n,
            local: !1
        })
    }

    function L(e, t) {
        var n;
        let i = null === (n = d.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
        null != i && l.default.dispatch({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e,
            ackedId: t,
            local: !1
        })
    }
}