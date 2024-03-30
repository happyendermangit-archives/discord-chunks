function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("266067"),
        o = n("967888"),
        i = n("629815"),
        a = n("950879"),
        u = n("569492"),
        s = n("935741"),
        l = n("894288"),
        c = n("281767"),
        f = n("928204"),
        d = {},
        _ = !1;

    function E(e) {
        if (null == e || e === f.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID || (0, f.isStaticChannelRoute)(e) || null != s.default.getChannel(e)) return Promise.resolve();
        if (_ || (_ = !0, i.default.subscribe("CONNECTION_OPEN", function() {
                d = {};
                var e = l.default.getChannelId(),
                    t = s.default.getChannel(e);
                null != e && null == t && E(e)
            })), !a.default.isConnected()) return Promise.resolve();
        var t = d[e];
        if (null != t) return "LOADING" === t.type ? t.promise : Promise.resolve();
        var n = (0, r.matchPath)(location.pathname, {
                path: c.Routes.CHANNEL(":guildId", ":channelId", ":messageId"),
                exact: !0
            }),
            p = o.HTTP.get(c.Endpoints.CHANNEL(e)).then(function(t) {
                var r, o = t.body;
                d[e] = {
                    type: "LOADED"
                }, u.THREAD_CHANNEL_TYPES.has(o.type) && i.default.dispatch({
                    type: "THREAD_CREATE",
                    channel: (0, u.createChannelRecordFromServer)(o),
                    messageId: null == n ? void 0 : null === (r = n.params) || void 0 === r ? void 0 : r.messageId
                })
            }).catch(function() {
                var t;
                d[e] = {
                    type: "NOT_FOUND"
                }, i.default.dispatch({
                    type: "CHANNEL_DELETE",
                    channel: {
                        id: e,
                        guild_id: null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.guildId,
                        parent_id: void 0
                    }
                })
            });
        return d[e] = {
            type: "LOADING",
            promise: p
        }, p
    }
    t.default = {
        loadThread: E
    }
}