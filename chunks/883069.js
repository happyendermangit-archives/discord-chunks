function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("872717"),
        s = n("913144"),
        r = n("599110"),
        a = n("82339"),
        o = n("49111"),
        l = {
            resolveGuildTemplate: function e(t) {
                return s.default.isDispatching() ? Promise.resolve().then(() => e(t)) : (s.default.dispatch({
                    type: "GUILD_TEMPLATE_RESOLVE",
                    code: t
                }), i.default.get({
                    url: o.Endpoints.UNRESOLVED_GUILD_TEMPLATE(t),
                    oldFormErrors: !0
                }).then(e => {
                    let n = e.body;
                    return r.default.track(o.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
                        resolved: !0,
                        guild_template_code: t,
                        guild_template_name: n.name,
                        guild_template_description: n.description,
                        guild_template_guild_id: n.source_guild_id
                    }), s.default.dispatch({
                        type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
                        guildTemplate: n,
                        code: t
                    }), {
                        guildTemplate: (0, a.default)(n),
                        code: t
                    }
                }, () => (r.default.track(o.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
                    resolved: !1,
                    guild_template_code: t
                }), s.default.dispatch({
                    type: "GUILD_TEMPLATE_RESOLVE_FAILURE",
                    code: t
                }), {
                    guildTemplate: null,
                    code: t
                })))
            },
            loadTemplatesForGuild: e => i.default.get({
                url: o.Endpoints.GUILD_TEMPLATES(e),
                oldFormErrors: !0
            }).then(e => (s.default.dispatch({
                type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
                guildTemplates: e.body
            }), e)),
            createGuildTemplate: (e, t, n) => i.default.post({
                url: o.Endpoints.GUILD_TEMPLATES(e),
                body: {
                    name: t,
                    description: n
                },
                oldFormErrors: !0
            }).then(e => {
                s.default.dispatch({
                    type: "GUILD_TEMPLATE_CREATE_SUCCESS",
                    guildTemplate: e.body,
                    code: e.body.code
                })
            }),
            syncGuildTemplate: (e, t) => i.default.put({
                url: o.Endpoints.GUILD_TEMPLATE(e, t),
                oldFormErrors: !0
            }).then(e => {
                s.default.dispatch({
                    type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                    guildTemplate: e.body,
                    code: t
                })
            }),
            updateGuildTemplate: (e, t, n, r) => i.default.patch({
                url: o.Endpoints.GUILD_TEMPLATE(e, t),
                body: {
                    name: n,
                    description: r
                },
                oldFormErrors: !0
            }).then(e => {
                s.default.dispatch({
                    type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                    guildTemplate: e.body,
                    code: t
                })
            }),
            deleteGuildTemplate: (e, t) => i.default.delete({
                url: o.Endpoints.GUILD_TEMPLATE(e, t),
                oldFormErrors: !0
            }).then(() => {
                s.default.dispatch({
                    type: "GUILD_TEMPLATE_DELETE_SUCCESS",
                    guildId: e,
                    code: t
                })
            })
        }
}