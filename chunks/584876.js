function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("629815"),
        i = n("870331"),
        a = n("865654"),
        u = n("281767");
    t.default = {
        resolveGuildTemplate: function e(t) {
            return o.default.isDispatching() ? Promise.resolve().then(function() {
                return e(t)
            }) : (o.default.dispatch({
                type: "GUILD_TEMPLATE_RESOLVE",
                code: t
            }), r.HTTP.get({
                url: u.Endpoints.UNRESOLVED_GUILD_TEMPLATE(t),
                oldFormErrors: !0
            }).then(function(e) {
                var n = e.body;
                return i.default.track(u.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
                    resolved: !0,
                    guild_template_code: t,
                    guild_template_name: n.name,
                    guild_template_description: n.description,
                    guild_template_guild_id: n.source_guild_id
                }), o.default.dispatch({
                    type: "GUILD_TEMPLATE_RESOLVE_SUCCESS",
                    guildTemplate: n,
                    code: t
                }), {
                    guildTemplate: (0, a.default)(n),
                    code: t
                }
            }, function() {
                return i.default.track(u.AnalyticEvents.GUILD_TEMPLATE_RESOLVED, {
                    resolved: !1,
                    guild_template_code: t
                }), o.default.dispatch({
                    type: "GUILD_TEMPLATE_RESOLVE_FAILURE",
                    code: t
                }), {
                    guildTemplate: null,
                    code: t
                }
            }))
        },
        loadTemplatesForGuild: function(e) {
            return r.HTTP.get({
                url: u.Endpoints.GUILD_TEMPLATES(e),
                oldFormErrors: !0
            }).then(function(e) {
                return o.default.dispatch({
                    type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS",
                    guildTemplates: e.body
                }), e
            })
        },
        createGuildTemplate: function(e, t, n) {
            return r.HTTP.post({
                url: u.Endpoints.GUILD_TEMPLATES(e),
                body: {
                    name: t,
                    description: n
                },
                oldFormErrors: !0
            }).then(function(e) {
                o.default.dispatch({
                    type: "GUILD_TEMPLATE_CREATE_SUCCESS",
                    guildTemplate: e.body,
                    code: e.body.code
                })
            })
        },
        syncGuildTemplate: function(e, t) {
            return r.HTTP.put({
                url: u.Endpoints.GUILD_TEMPLATE(e, t),
                oldFormErrors: !0
            }).then(function(e) {
                o.default.dispatch({
                    type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                    guildTemplate: e.body,
                    code: t
                })
            })
        },
        updateGuildTemplate: function(e, t, n, i) {
            return r.HTTP.patch({
                url: u.Endpoints.GUILD_TEMPLATE(e, t),
                body: {
                    name: n,
                    description: i
                },
                oldFormErrors: !0
            }).then(function(e) {
                o.default.dispatch({
                    type: "GUILD_TEMPLATE_SYNC_SUCCESS",
                    guildTemplate: e.body,
                    code: t
                })
            })
        },
        deleteGuildTemplate: function(e, t) {
            return r.HTTP.del({
                url: u.Endpoints.GUILD_TEMPLATE(e, t),
                oldFormErrors: !0
            }).then(function() {
                o.default.dispatch({
                    type: "GUILD_TEMPLATE_DELETE_SUCCESS",
                    guildId: e,
                    code: t
                })
            })
        }
    }
}