function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        stopLurkingAll: function() {
            return u
        },
        stopLurking: function() {
            return d
        }
    }), n("222007");
    var i = n("872717"),
        s = n("913144"),
        r = n("945956"),
        a = n("449008"),
        o = n("267567"),
        l = n("49111");
    async function u(e) {
        let t = o.default.lurkingGuildIds(),
            n = t.filter(t => !e.includes(t));
        0 !== n.length && (s.default.dispatch({
            type: "GUILD_STOP_LURKING",
            ignoredGuildIds: e
        }), await Promise.all(n.map(async e => {
            let t = o.default.getLurkingSource();
            try {
                await i.HTTP.del({
                    url: l.Endpoints.GUILD_LEAVE(e),
                    body: {
                        lurking: !0
                    },
                    oldFormErrors: !0
                })
            } catch (n) {
                s.default.dispatch({
                    type: "GUILD_STOP_LURKING_FAILURE",
                    lurkingGuildId: e,
                    lurkingSource: t
                })
            }
        })))
    }
    async function d() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = o.default.lurkingGuildIds();
        if (0 === t.length) return;
        let n = null == e || !t.includes(e);
        if (!n) return;
        let i = r.default.getGuildId(),
            s = [e, i].filter(a.isNotNullish);
        await u(s)
    }
}