function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("741847"),
        d = n("58346");
    let _ = {},
        c = null;

    function E(e, t) {
        var n;
        let i = null !== (n = _[e]) && void 0 !== n ? n : {
            code: e,
            state: d.GuildTemplateStates.RESOLVING
        };
        t(i = {
            ...i
        }), _ = {
            ..._,
            [e]: i
        }
    }

    function I(e) {
        T(e.guildTemplate)
    }

    function T(e) {
        return E(e.code, t => {
            let n = (0, u.default)(e);
            for (let e in n) t[e] = n[e]
        })
    }

    function f(e) {
        return E(e.code, e => {
            e.state = d.GuildTemplateStates.EXPIRED
        })
    }
    class S extends(s = o.default.Store) {
        getGuildTemplate(e) {
            return null != e ? _[e] : null
        }
        getGuildTemplates() {
            return _
        }
        getForGuild(e) {
            for (let t in _) {
                let n = _[t];
                if ("sourceGuildId" in n && n.sourceGuildId === e && n.state !== d.GuildTemplateStates.EXPIRED) return n
            }
        }
        getDisplayedGuildTemplateCode() {
            return c
        }
    }
    a = "GuildTemplateStore", (r = "displayName") in(i = S) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new S(l.default, {
        GUILD_TEMPLATE_RESOLVE: function(e) {
            let {
                code: t
            } = e;
            _ = {
                ..._,
                [t]: {
                    code: t,
                    state: d.GuildTemplateStates.RESOLVING
                }
            }
        },
        GUILD_TEMPLATE_CREATE_SUCCESS: I,
        GUILD_TEMPLATE_SYNC_SUCCESS: I,
        GUILD_TEMPLATE_RESOLVE_SUCCESS: I,
        GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function(e) {
            let {
                guildTemplates: t
            } = e;
            t.forEach(e => T(e))
        },
        GUILD_TEMPLATE_RESOLVE_FAILURE: f,
        GUILD_TEMPLATE_DELETE_SUCCESS: f,
        GUILD_TEMPLATE_ACCEPT: function(e) {
            return E(e.code, e => {
                e.state = d.GuildTemplateStates.ACCEPTING
            })
        },
        GUILD_TEMPLATE_ACCEPT_SUCCESS: function(e) {
            return E(e.code, e => {
                var t;
                e.state = d.GuildTemplateStates.ACCEPTED, e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1
            })
        },
        GUILD_TEMPLATE_ACCEPT_FAILURE: function(e) {
            return E(e.code, e => {
                e.state = d.GuildTemplateStates.RESOLVED
            })
        },
        GUILD_TEMPLATE_MODAL_SHOW: function(e) {
            c = e.code
        },
        GUILD_TEMPLATE_MODAL_HIDE: function(e) {
            c = null
        }
    })
}