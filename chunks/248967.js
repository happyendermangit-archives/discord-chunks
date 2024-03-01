function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        stopLurkingAll: function() {
            return i
        },
        stopLurking: function() {
            return s
        }
    }), l("222007");
    var n = l("872717"),
        r = l("913144"),
        d = l("945956"),
        o = l("449008"),
        a = l("267567"),
        u = l("49111");
    async function i(e) {
        let t = a.default.lurkingGuildIds(),
            l = t.filter(t => !e.includes(t));
        0 !== l.length && (r.default.dispatch({
            type: "GUILD_STOP_LURKING",
            ignoredGuildIds: e
        }), await Promise.all(l.map(async e => {
            let t = a.default.getLurkingSource();
            try {
                await n.default.delete({
                    url: u.Endpoints.GUILD_LEAVE(e),
                    body: {
                        lurking: !0
                    },
                    oldFormErrors: !0
                })
            } catch (l) {
                r.default.dispatch({
                    type: "GUILD_STOP_LURKING_FAILURE",
                    lurkingGuildId: e,
                    lurkingSource: t
                })
            }
        })))
    }
    async function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = a.default.lurkingGuildIds();
        if (0 === t.length) return;
        let l = null == e || !t.includes(e);
        if (!l) return;
        let n = d.default.getGuildId(),
            r = [e, n].filter(o.isNotNullish);
        await i(r)
    }
}