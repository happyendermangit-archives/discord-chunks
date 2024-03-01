function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        fetchActiveChannels: function() {
            return i
        }
    });
    var t = E("872717"),
        o = E("913144"),
        n = E("599417"),
        r = E("49111");
    async function i(e) {
        let _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        o.default.dispatch({
            type: "ACTIVE_CHANNELS_FETCH_START",
            guildId: e
        });
        try {
            var E, i;
            let n = await t.default.get({
                    url: r.Endpoints.ACTIVE_CHANNELS(e),
                    query: {
                        channel_limit: _
                    }
                }),
                a = null !== (i = null === (E = n.body) || void 0 === E ? void 0 : E.channels) && void 0 !== i ? i : [];
            return o.default.dispatch({
                type: "ACTIVE_CHANNELS_FETCH_SUCCESS",
                guildId: e,
                channels: a
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