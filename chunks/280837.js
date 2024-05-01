function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        stopLurking: function() {
            return d
        },
        stopLurkingAll: function() {
            return u
        }
    }), n("47120");
    var i = n("544891"),
        r = n("570140"),
        a = n("19780"),
        s = n("823379"),
        o = n("41776"),
        l = n("981631");
    async function u(e) {
        let t = o.default.lurkingGuildIds().filter(t => !e.includes(t));
        0 !== t.length && (r.default.dispatch({
            type: "GUILD_STOP_LURKING",
            ignoredGuildIds: e
        }), await Promise.all(t.map(async e => {
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
                r.default.dispatch({
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
        if (0 === t.length || !(null == e || !t.includes(e))) return;
        let n = [e, a.default.getGuildId()].filter(s.isNotNullish);
        await u(n)
    }
}