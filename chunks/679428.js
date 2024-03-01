function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var a = n("872717"),
        l = n("689988"),
        i = n("870691"),
        d = n("42203"),
        s = n("718517"),
        r = n("49111");
    let o = {},
        u = 0,
        f = 15 * s.default.Millis.SECOND;

    function g() {
        o = {
            ...i.default.getCollapsedCategories()
        }
    }

    function c() {
        !__OVERLAY__ && (clearTimeout(u), u = setTimeout(() => p({}), f))
    }
    async function _(e, t) {
        null == e || e === r.ME ? await a.default.patch({
            url: r.Endpoints.USER_GUILD_SETTINGS(r.ME),
            body: t
        }) : await p(null != t ? {
            [null != e ? e : r.ME]: t
        } : {})
    }
    async function p(e) {
        clearTimeout(u);
        let t = 0 !== Object.keys(e).length,
            n = i.default.getCollapsedCategories(),
            l = function() {
                let e = {},
                    t = i.default.getCollapsedCategories();
                for (let n in t) t[n] !== o[n] && (e[n] = !0);
                for (let n in o) t[n] !== o[n] && (e[n] = !0);
                return e
            }();
        for (let a in l) {
            let l = d.default.getChannel(a);
            null != l && null != l.guild_id && (!(l.guild_id in e) && (e[l.guild_id] = {}), null == e[l.guild_id].channel_overrides && (e[l.guild_id].channel_overrides = {}), e[l.guild_id].channel_overrides[l.id] = {
                ...e[l.guild_id].channel_overrides[l.id],
                collapsed: l.id in n
            }, t = !0)
        }
        return t ? (o = {
            ...n
        }, delete e[r.FAVORITES], (await a.default.patch({
            url: r.Endpoints.USER_GUILD_SETTINGS_BULK,
            body: {
                guilds: e
            }
        })).body) : []
    }

    function E() {
        o = {
            ...i.default.getCollapsedCategories()
        }
    }
    class N extends l.default {
        constructor(...e) {
            super(...e), this.actions = {
                CATEGORY_COLLAPSE: c,
                CATEGORY_EXPAND: c,
                CATEGORY_COLLAPSE_ALL: c,
                CATEGORY_EXPAND_ALL: c,
                POST_CONNECTION_OPEN: g,
                USER_GUILD_SETTINGS_FULL_UPDATE: E
            }, this.saveUserGuildSettings = _, this.saveUserGuildSettingsBulk = p
        }
    }
    var S = new N
}