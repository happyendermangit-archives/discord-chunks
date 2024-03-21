function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var i = n("803182"),
        s = n("872717"),
        r = n("913144"),
        a = n("619443"),
        o = n("233069"),
        l = n("42203"),
        u = n("18494"),
        d = n("49111"),
        c = n("724210");
    let _ = {},
        f = !1;

    function E(e) {
        if (null == e || e === c.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID || (0, c.isStaticChannelRoute)(e) || null != l.default.getChannel(e)) return Promise.resolve();
        if (f || (f = !0, r.default.subscribe("CONNECTION_OPEN", () => {
                _ = {};
                let e = u.default.getChannelId(),
                    t = l.default.getChannel(e);
                null != e && null == t && E(e)
            })), !a.default.isConnected()) return Promise.resolve();
        let t = _[e];
        if (null != t) return "LOADING" === t.type ? t.promise : Promise.resolve();
        let n = (0, i.matchPath)(location.pathname, {
                path: d.Routes.CHANNEL(":guildId", ":channelId", ":messageId"),
                exact: !0
            }),
            h = s.HTTP.get(d.Endpoints.CHANNEL(e)).then(t => {
                let {
                    body: i
                } = t;
                if (_[e] = {
                        type: "LOADED"
                    }, o.THREAD_CHANNEL_TYPES.has(i.type)) {
                    var s;
                    r.default.dispatch({
                        type: "THREAD_CREATE",
                        channel: (0, o.createChannelRecordFromServer)(i),
                        messageId: null == n ? void 0 : null === (s = n.params) || void 0 === s ? void 0 : s.messageId
                    })
                }
            }).catch(() => {
                var t;
                _[e] = {
                    type: "NOT_FOUND"
                }, r.default.dispatch({
                    type: "CHANNEL_DELETE",
                    channel: {
                        id: e,
                        guild_id: null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.guildId,
                        parent_id: void 0
                    }
                })
            });
        return _[e] = {
            type: "LOADING",
            promise: h
        }, h
    }
    var h = {
        loadThread: E
    }
}