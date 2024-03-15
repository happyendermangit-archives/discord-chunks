function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("82339"),
        a = n("579033");
    let o = {},
        l = null;

    function u(e, t) {
        var n;
        let i = null !== (n = o[e]) && void 0 !== n ? n : {
            code: e,
            state: a.GuildTemplateStates.RESOLVING
        };
        t(i = {
            ...i
        }), o = {
            ...o,
            [e]: i
        }
    }

    function d(e) {
        c(e.guildTemplate)
    }

    function c(e) {
        return u(e.code, t => {
            let n = (0, r.default)(e);
            for (let e in n) t[e] = n[e]
        })
    }

    function f(e) {
        return u(e.code, e => {
            e.state = a.GuildTemplateStates.EXPIRED
        })
    }
    class _ extends i.default.Store {
        getGuildTemplate(e) {
            return null != e ? o[e] : null
        }
        getGuildTemplates() {
            return o
        }
        getForGuild(e) {
            for (let t in o) {
                let n = o[t];
                if ("sourceGuildId" in n && n.sourceGuildId === e && n.state !== a.GuildTemplateStates.EXPIRED) return n
            }
        }
        getDisplayedGuildTemplateCode() {
            return l
        }
    }
    _.displayName = "GuildTemplateStore";
    var E = new _(s.default, {
        GUILD_TEMPLATE_RESOLVE: function(e) {
            let {
                code: t
            } = e;
            o = {
                ...o,
                [t]: {
                    code: t,
                    state: a.GuildTemplateStates.RESOLVING
                }
            }
        },
        GUILD_TEMPLATE_CREATE_SUCCESS: d,
        GUILD_TEMPLATE_SYNC_SUCCESS: d,
        GUILD_TEMPLATE_RESOLVE_SUCCESS: d,
        GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function(e) {
            let {
                guildTemplates: t
            } = e;
            t.forEach(e => c(e))
        },
        GUILD_TEMPLATE_RESOLVE_FAILURE: f,
        GUILD_TEMPLATE_DELETE_SUCCESS: f,
        GUILD_TEMPLATE_ACCEPT: function(e) {
            return u(e.code, e => {
                e.state = a.GuildTemplateStates.ACCEPTING
            })
        },
        GUILD_TEMPLATE_ACCEPT_SUCCESS: function(e) {
            return u(e.code, e => {
                var t;
                e.state = a.GuildTemplateStates.ACCEPTED, e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1
            })
        },
        GUILD_TEMPLATE_ACCEPT_FAILURE: function(e) {
            return u(e.code, e => {
                e.state = a.GuildTemplateStates.RESOLVED
            })
        },
        GUILD_TEMPLATE_MODAL_SHOW: function(e) {
            l = e.code
        },
        GUILD_TEMPLATE_MODAL_HIDE: function(e) {
            l = null
        }
    })
}