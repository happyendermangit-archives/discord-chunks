function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        default: function() {
            return u
        }
    });
    var n = l("872717"),
        r = l("913144"),
        d = l("599110"),
        o = l("82339"),
        a = l("49111"),
        u = {
            resolveGuildTemplate: function e(t) {
                return r.default.isDispatching() ? Promise.resolve().then(() => e(t)) : (r.default.dispatch({
                    type: "GUILD_TEMPLATE_RESOLVE",
                    code: t
                }), n.default.get({
                    url: a.Endpoints.UNRESOLVED_GUILD_TEMPLATE(t),
                    oldFormErrors: !0
                }).then(e => {
                    let l = e.body;
                    return d.default.track(a.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
                        resolved: !0,
                        guild_template_code: t,
                        guild_template_name: l.name,
                        guild_template_description: l.description,
                        guild_template_guild_id: l.source_guild_id
                    }), r.default.dispatch({
                        type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
                        guildTemplate: l,
                        code: t
                    }), {
                        guildTemplate: (0, o.default)(l),
                        code: t
                    }
                }, () => (d.default.track(a.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
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
            loadTemplatesForGuild: e => n.default.get({
                url: a.Endpoints.GUILD_TEMPLATES(e),
                oldFormErrors: !0
            }).then(e => (r.default.dispatch({
                type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
                guildTemplates: e.body
            }), e)),
            createGuildTemplate: (e, t, l) => n.default.post({
                url: a.Endpoints.GUILD_TEMPLATES(e),
                body: {
                    name: t,
                    description: l
                },
                oldFormErrors: !0
            }).then(e => {
                r.default.dispatch({
                    type: "GUILD_TEMPLATE_CREATE_SUCCESS",
                    guildTemplate: e.body,
                    code: e.body.code
                })
            }),
            syncGuildTemplate: (e, t) => n.default.put({
                url: a.Endpoints.GUILD_TEMPLATE(e, t),
                oldFormErrors: !0
            }).then(e => {
                r.default.dispatch({
                    type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                    guildTemplate: e.body,
                    code: t
                })
            }),
            updateGuildTemplate: (e, t, l, d) => n.default.patch({
                url: a.Endpoints.GUILD_TEMPLATE(e, t),
                body: {
                    name: l,
                    description: d
                },
                oldFormErrors: !0
            }).then(e => {
                r.default.dispatch({
                    type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                    guildTemplate: e.body,
                    code: t
                })
            }),
            deleteGuildTemplate: (e, t) => n.default.delete({
                url: a.Endpoints.GUILD_TEMPLATE(e, t),
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