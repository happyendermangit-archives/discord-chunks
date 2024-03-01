function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var a = n("446674"),
        l = n("913144"),
        s = n("82339"),
        i = n("579033");
    let r = {},
        u = null;

    function d(e, t) {
        var n;
        let a = null !== (n = r[e]) && void 0 !== n ? n : {
            code: e,
            state: i.GuildTemplateStates.RESOLVING
        };
        t(a = {
            ...a
        }), r = {
            ...r,
            [e]: a
        }
    }

    function o(e) {
        c(e.guildTemplate)
    }

    function c(e) {
        return d(e.code, t => {
            let n = (0, s.default)(e);
            for (let e in n) t[e] = n[e]
        })
    }

    function E(e) {
        return d(e.code, e => {
            e.state = i.GuildTemplateStates.EXPIRED
        })
    }
    class _ extends a.default.Store {
        getGuildTemplate(e) {
            return null != e ? r[e] : null
        }
        getGuildTemplates() {
            return r
        }
        getForGuild(e) {
            for (let t in r) {
                let n = r[t];
                if ("sourceGuildId" in n && n.sourceGuildId === e && n.state !== i.GuildTemplateStates.EXPIRED) return n
            }
        }
        getDisplayedGuildTemplateCode() {
            return u
        }
    }
    _.displayName = "GuildTemplateStore";
    var f = new _(l.default, {
        GUILD_TEMPLATE_RESOLVE: function(e) {
            let {
                code: t
            } = e;
            r = {
                ...r,
                [t]: {
                    code: t,
                    state: i.GuildTemplateStates.RESOLVING
                }
            }
        },
        GUILD_TEMPLATE_CREATE_SUCCESS: o,
        GUILD_TEMPLATE_SYNC_SUCCESS: o,
        GUILD_TEMPLATE_RESOLVE_SUCCESS: o,
        GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function(e) {
            let {
                guildTemplates: t
            } = e;
            t.forEach(e => c(e))
        },
        GUILD_TEMPLATE_RESOLVE_FAILURE: E,
        GUILD_TEMPLATE_DELETE_SUCCESS: E,
        GUILD_TEMPLATE_ACCEPT: function(e) {
            return d(e.code, e => {
                e.state = i.GuildTemplateStates.ACCEPTING
            })
        },
        GUILD_TEMPLATE_ACCEPT_SUCCESS: function(e) {
            return d(e.code, e => {
                var t;
                e.state = i.GuildTemplateStates.ACCEPTED, e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1
            })
        },
        GUILD_TEMPLATE_ACCEPT_FAILURE: function(e) {
            return d(e.code, e => {
                e.state = i.GuildTemplateStates.RESOLVED
            })
        },
        GUILD_TEMPLATE_MODAL_SHOW: function(e) {
            u = e.code
        },
        GUILD_TEMPLATE_MODAL_HIDE: function(e) {
            u = null
        }
    })
}