function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("544891"),
        r = n("147913"),
        s = n("680089"),
        a = n("592125"),
        o = n("70956"),
        l = n("981631");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = {},
        _ = 0,
        c = 15 * o.default.Millis.SECOND;

    function E() {
        d = {
            ...s.default.getCollapsedCategories()
        }
    }

    function I() {
        !__OVERLAY__ && (clearTimeout(_), _ = setTimeout(() => f({}), c))
    }
    async function T(e, t) {
        null == e || e === l.ME ? await i.HTTP.patch({
            url: l.Endpoints.USER_GUILD_SETTINGS(l.ME),
            body: t
        }) : await f(null != t ? {
            [null != e ? e : l.ME]: t
        } : {})
    }
    async function f(e) {
        clearTimeout(_);
        let t = 0 !== Object.keys(e).length,
            n = s.default.getCollapsedCategories(),
            r = function() {
                let e = {},
                    t = s.default.getCollapsedCategories();
                for (let n in t) t[n] !== d[n] && (e[n] = !0);
                for (let n in d) t[n] !== d[n] && (e[n] = !0);
                return e
            }();
        for (let i in r) {
            let r = a.default.getChannel(i);
            null != r && null != r.guild_id && (!(r.guild_id in e) && (e[r.guild_id] = {}), null == e[r.guild_id].channel_overrides && (e[r.guild_id].channel_overrides = {}), e[r.guild_id].channel_overrides[r.id] = {
                ...e[r.guild_id].channel_overrides[r.id],
                collapsed: r.id in n
            }, t = !0)
        }
        return t ? (d = {
            ...n
        }, delete e[l.FAVORITES], (await i.HTTP.patch({
            url: l.Endpoints.USER_GUILD_SETTINGS_BULK,
            body: {
                guilds: e
            }
        })).body) : []
    }

    function S() {
        d = {
            ...s.default.getCollapsedCategories()
        }
    }
    class h extends r.default {
        constructor(...e) {
            super(...e), u(this, "actions", {
                CATEGORY_COLLAPSE: I,
                CATEGORY_EXPAND: I,
                CATEGORY_COLLAPSE_ALL: I,
                CATEGORY_EXPAND_ALL: I,
                POST_CONNECTION_OPEN: E,
                USER_GUILD_SETTINGS_FULL_UPDATE: S
            }), u(this, "saveUserGuildSettings", T), u(this, "saveUserGuildSettingsBulk", f)
        }
    }
    t.default = new h
}