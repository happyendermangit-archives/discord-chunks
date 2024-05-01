function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ack: function() {
            return _
        },
        ackChannel: function() {
            return c
        },
        ackGuildFeature: function() {
            return S
        },
        ackUserFeature: function() {
            return h
        },
        bulkAck: function() {
            return E
        },
        disableAutomaticAck: function() {
            return f
        },
        enableAutomaticAck: function() {
            return T
        },
        localAck: function() {
            return I
        }
    }), n("47120"), n("653041");
    var i = n("570140"),
        r = n("601070"),
        a = n("131704"),
        s = n("592125"),
        o = n("324067"),
        l = n("594174"),
        u = n("709054"),
        d = n("981631");

    function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0;
        i.default.dispatch({
            type: "CHANNEL_ACK",
            channelId: e,
            messageId: r,
            immediate: t,
            force: n,
            context: d.CURRENT_APP_CONTEXT,
            location: a
        })
    }

    function c(e) {
        e.isCategory() ? ! function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = s.default.getChannel(e);
            if (null == i || null == i.guild_id) return;
            let l = o.default.getCategories(i.guild_id);
            if (null == l[e]) return;
            let u = l[e].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return (0, a.isGuildReadableType)(t.type)
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                }),
                d = [...u];
            for (let e of (u.forEach(e => {
                    let t = r.default.getActiveJoinedThreadsForParent(i.guild_id, e);
                    for (let e in t) d.push(e)
                }), d)) _(e, t, n)
        }(e.id, !0, !0) : e.isForumLikeChannel() ? _(e.id, !0, !0, u.default.fromTimestamp(Date.now())) : _(e.id, !0, !0)
    }

    function E(e, t) {
        i.default.dispatch({
            type: "BULK_ACK",
            channels: e,
            context: d.CURRENT_APP_CONTEXT,
            onFinished: t
        })
    }

    function I(e) {
        i.default.dispatch({
            type: "CHANNEL_LOCAL_ACK",
            channelId: e
        })
    }

    function T(e, t) {
        i.default.dispatch({
            type: "ENABLE_AUTOMATIC_ACK",
            channelId: e,
            windowId: t
        })
    }

    function f(e, t) {
        i.default.dispatch({
            type: "DISABLE_AUTOMATIC_ACK",
            channelId: e,
            windowId: t
        })
    }

    function S(e, t, n) {
        i.default.dispatch({
            type: "GUILD_FEATURE_ACK",
            id: e,
            ackType: t,
            ackedId: n,
            local: !1
        })
    }

    function h(e, t) {
        var n;
        null != (null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) && i.default.dispatch({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e,
            ackedId: t,
            local: !1
        })
    }
}