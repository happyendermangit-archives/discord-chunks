function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchActiveChannels: function() {
            return o
        }
    });
    var i = n("544891"),
        r = n("570140"),
        a = n("479531"),
        s = n("981631");
    async function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        r.default.dispatch({
            type: "ACTIVE_CHANNELS_FETCH_START",
            guildId: e
        });
        try {
            var n, o;
            let a = await i.HTTP.get({
                    url: s.Endpoints.ACTIVE_CHANNELS(e),
                    query: {
                        channel_limit: t
                    }
                }),
                l = null !== (o = null === (n = a.body) || void 0 === n ? void 0 : n.channels) && void 0 !== o ? o : [];
            return r.default.dispatch({
                type: "ACTIVE_CHANNELS_FETCH_SUCCESS",
                guildId: e,
                channels: l
            }), a
        } catch (t) {
            throw r.default.dispatch({
                type: "ACTIVE_CHANNELS_FETCH_FAILURE",
                guildId: e,
                error: new a.default(t)
            }), t
        }
    }
}