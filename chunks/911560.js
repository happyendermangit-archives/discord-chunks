function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("266067"),
        r = n("544891"),
        s = n("570140"),
        a = n("38618"),
        o = n("131704"),
        l = n("592125"),
        u = n("944486"),
        d = n("981631"),
        _ = n("176505");
    let c = {},
        E = !1;

    function I(e) {
        if (null == e || e === _.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID || (0, _.isStaticChannelRoute)(e) || null != l.default.getChannel(e)) return Promise.resolve();
        if (E || (E = !0, s.default.subscribe("CONNECTION_OPEN", () => {
                c = {};
                let e = u.default.getChannelId(),
                    t = l.default.getChannel(e);
                null != e && null == t && I(e)
            })), !a.default.isConnected()) return Promise.resolve();
        let t = c[e];
        if (null != t) return "LOADING" === t.type ? t.promise : Promise.resolve();
        let n = (0, i.matchPath)(location.pathname, {
                path: d.Routes.CHANNEL(":guildId", ":channelId", ":messageId"),
                exact: !0
            }),
            T = r.HTTP.get(d.Endpoints.CHANNEL(e)).then(t => {
                let {
                    body: i
                } = t;
                if (c[e] = {
                        type: "LOADED"
                    }, o.THREAD_CHANNEL_TYPES.has(i.type)) {
                    var r;
                    s.default.dispatch({
                        type: "THREAD_CREATE",
                        channel: (0, o.createChannelRecordFromServer)(i),
                        messageId: null == n ? void 0 : null === (r = n.params) || void 0 === r ? void 0 : r.messageId
                    })
                }
            }).catch(() => {
                var t;
                c[e] = {
                    type: "NOT_FOUND"
                }, s.default.dispatch({
                    type: "CHANNEL_DELETE",
                    channel: {
                        id: e,
                        guild_id: null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.guildId,
                        parent_id: void 0
                    }
                })
            });
        return c[e] = {
            type: "LOADING",
            promise: T
        }, T
    }
    t.default = {
        loadThread: I
    }
}