function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        s = n("626135"),
        a = n("741847"),
        o = n("981631");
    t.default = {
        resolveGuildTemplate: function e(t) {
            return r.default.isDispatching() ? Promise.resolve().then(() => e(t)) : (r.default.dispatch({
                type: "GUILD_TEMPLATE_RESOLVE",
                code: t
            }), i.HTTP.get({
                url: o.Endpoints.UNRESOLVED_GUILD_TEMPLATE(t),
                oldFormErrors: !0
            }).then(e => {
                let n = e.body;
                return s.default.track(o.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
                    resolved: !0,
                    guild_template_code: t,
                    guild_template_name: n.name,
                    guild_template_description: n.description,
                    guild_template_guild_id: n.source_guild_id
                }), r.default.dispatch({
                    type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
                    guildTemplate: n,
                    code: t
                }), {
                    guildTemplate: (0, a.default)(n),
                    code: t
                }
            }, () => (s.default.track(o.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
                resolved: !1,
                guild_template_code: t
            }), r.default.dispatch({
                type: "GUILD_TEMPLATE_RESOLVE_FAILURE",
                code: t
            }), {
                guildTemplate: null,
                code: t
            })))
        },
        loadTemplatesForGuild: e => i.HTTP.get({
            url: o.Endpoints.GUILD_TEMPLATES(e),
            oldFormErrors: !0
        }).then(e => (r.default.dispatch({
            type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
            guildTemplates: e.body
        }), e)),
        createGuildTemplate: (e, t, n) => i.HTTP.post({
            url: o.Endpoints.GUILD_TEMPLATES(e),
            body: {
                name: t,
                description: n
            },
            oldFormErrors: !0
        }).then(e => {
            r.default.dispatch({
                type: "GUILD_TEMPLATE_CREATE_SUCCESS",
                guildTemplate: e.body,
                code: e.body.code
            })
        }),
        syncGuildTemplate: (e, t) => i.HTTP.put({
            url: o.Endpoints.GUILD_TEMPLATE(e, t),
            oldFormErrors: !0
        }).then(e => {
            r.default.dispatch({
                type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                guildTemplate: e.body,
                code: t
            })
        }),
        updateGuildTemplate: (e, t, n, s) => i.HTTP.patch({
            url: o.Endpoints.GUILD_TEMPLATE(e, t),
            body: {
                name: n,
                description: s
            },
            oldFormErrors: !0
        }).then(e => {
            r.default.dispatch({
                type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                guildTemplate: e.body,
                code: t
            })
        }),
        deleteGuildTemplate: (e, t) => i.HTTP.del({
            url: o.Endpoints.GUILD_TEMPLATE(e, t),
            oldFormErrors: !0
        }).then(() => {
            r.default.dispatch({
                type: "GUILD_TEMPLATE_DELETE_SUCCESS",
                guildId: e,
                code: t
            })
        })
    }
}