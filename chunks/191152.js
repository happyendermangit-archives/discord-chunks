function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        fetchActiveChannels: function() {
            return a
        }
    });
    var t = E("872717"),
        o = E("913144"),
        n = E("599417"),
        r = E("49111");
    async function a(e) {
        let _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        o.default.dispatch({
            type: "ACTIVE_CHANNELS_FETCH_START",
            guildId: e
        });
        try {
            var E, a;
            let n = await t.HTTP.get({
                    url: r.Endpoints.ACTIVE_CHANNELS(e),
                    query: {
                        channel_limit: _
                    }
                }),
                i = null !== (a = null === (E = n.body) || void 0 === E ? void 0 : E.channels) && void 0 !== a ? a : [];
            return o.default.dispatch({
                type: "ACTIVE_CHANNELS_FETCH_SUCCESS",
                guildId: e,
                channels: i
            }), n
        } catch (_) {
            throw o.default.dispatch({
                type: "ACTIVE_CHANNELS_FETCH_FAILURE",
                guildId: e,
                error: new n.default(_)
            }), _
        }
    }
}