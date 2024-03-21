function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var i = n("759843"),
        s = n("872717"),
        r = n("913144"),
        a = n("54239"),
        o = n("605250"),
        l = n("413476"),
        u = n("81732"),
        d = n("479756"),
        c = n("38654"),
        _ = n("267567"),
        f = n("271938"),
        E = n("26989"),
        h = n("305961"),
        g = n("730622"),
        m = n("840707"),
        p = n("900938"),
        S = n("49111"),
        v = n("782340");
    let T = new o.default("GuildSettingsActionCreators"),
        I = {
            init(e, t, n, i) {
                r.default.dispatch({
                    type: "GUILD_SETTINGS_INIT",
                    guildId: e,
                    section: t,
                    subsection: i,
                    location: n
                })
            },
            async open(e, t, i, s) {
                var r;
                await n.el("725621").then(n.bind(n, "725621")), (null === (r = h.default.getGuild(e)) || void 0 === r ? void 0 : r.hasFeature(S.GuildFeatures.COMMUNITY)) && (t === S.GuildSettingsSections.GUILD_AUTOMOD && (t = S.GuildSettingsSections.SAFETY, s = S.GuildSettingsSubsections.SAFETY_AUTOMOD), t === S.GuildSettingsSections.MEMBER_VERIFICATION && (t = S.GuildSettingsSections.SAFETY, s = S.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION)), I.init(e, t, i, s), (0, a.pushLayer)(S.Layers.GUILD_SETTINGS)
            },
            close() {
                r.default.dispatch({
                    type: "GUILD_SETTINGS_CLOSE"
                })
            },
            saveRouteStack(e) {
                r.default.dispatch({
                    type: "GUILD_SETTINGS_SAVE_ROUTE_STACK",
                    state: e
                })
            },
            setSection(e, t) {
                var n;
                let i = p.default.getGuildId();
                null != i && ((null === (n = h.default.getGuild(i)) || void 0 === n ? void 0 : n.hasFeature(S.GuildFeatures.COMMUNITY)) && (e === S.GuildSettingsSections.GUILD_AUTOMOD && (e = S.GuildSettingsSections.SAFETY, t = S.GuildSettingsSubsections.SAFETY_AUTOMOD), e === S.GuildSettingsSections.MEMBER_VERIFICATION && (e = S.GuildSettingsSections.SAFETY, t = S.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION)), r.default.dispatch({
                    type: "GUILD_SETTINGS_SET_SECTION",
                    section: e,
                    subsection: t
                }))
            },
            setSearchQuery(e) {
                r.default.dispatch({
                    type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
                    searchQuery: e
                })
            },
            selectRole: (e, t) => r.default.dispatch({
                type: "GUILD_SETTINGS_ROLE_SELECT",
                roleId: e,
                searchQuery: t
            }),
            updateEmbed(e, t, n) {
                s.default.patch({
                    url: S.Endpoints.GUILD_WIDGET(e),
                    body: {
                        enabled: t,
                        channel_id: n
                    },
                    oldFormErrors: !0
                }).then(t => {
                    r.default.dispatch({
                        type: "GUILD_SETTINGS_SET_WIDGET",
                        guildId: e,
                        enabled: t.body.enabled,
                        channelId: t.body.channel_id
                    })
                })
            },
            updateMFALevel(e) {
                let {
                    guildId: t,
                    level: n,
                    isEnabled: i
                } = e;
                return (0, g.default)(e => s.default.post({
                    url: S.Endpoints.GUILD_MFA(t),
                    body: {
                        level: n,
                        ...e
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: v.default.Messages.GUILD_SECURITY_REQ_MFA_LABEL,
                        actionText: i ? v.default.Messages.GUILD_SECURITY_REQ_MFA_TURN_OFF : v.default.Messages.GUILD_SECURITY_REQ_MFA_TURN_ON
                    },
                    checkEnabled: !1
                }).then(e => r.default.dispatch({
                    type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
                    level: e.body.level
                }))
            },
            updateIcon(e, t) {
                s.default.patch({
                    url: S.Endpoints.GUILD(e),
                    body: {
                        icon: t
                    },
                    oldFormErrors: !0
                }).then(() => {
                    r.default.dispatch({
                        type: "GUILD_SETTINGS_UPDATE",
                        icon: t
                    }), u.default.checkGuildTemplateDirty(e)
                }, e => r.default.dispatch({
                    type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                    errors: e.body
                }))
            },
            cancelChanges(e) {
                r.default.dispatch({
                    type: "GUILD_SETTINGS_CANCEL_CHANGES",
                    guildId: e
                })
            },
            updateGuild(e) {
                let {
                    safetyAlertsChannelId: t,
                    ...n
                } = e, i = {
                    ...n
                }, s = p.default.getGuildId();
                if (null != s) {
                    var a;
                    let e = null === (a = l.RaidAlertExperiment.getCurrentConfig({
                        guildId: s,
                        location: "be0372_1"
                    })) || void 0 === a ? void 0 : a.enableRaidAlerts;
                    e && null != t && (i.safetyAlertsChannelId = t)
                }
                r.default.dispatch({
                    type: "GUILD_SETTINGS_UPDATE",
                    ...i
                })
            },
            saveGuild(e, t) {
                let {
                    name: n,
                    description: i,
                    icon: a,
                    splash: o,
                    banner: l,
                    homeHeader: d,
                    afkChannelId: c,
                    afkTimeout: _,
                    systemChannelId: f,
                    verificationLevel: E,
                    defaultMessageNotifications: h,
                    explicitContentFilter: g,
                    features: m,
                    systemChannelFlags: p,
                    preferredLocale: v,
                    rulesChannelId: I,
                    safetyAlertsChannelId: A,
                    discoverySplash: C,
                    publicUpdatesChannelId: y,
                    premiumProgressBarEnabled: N
                } = t, R = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, O = {
                    name: n,
                    description: i,
                    icon: a,
                    splash: o,
                    banner: l,
                    home_header: d,
                    features: m,
                    preferred_locale: v,
                    afk_channel_id: c,
                    afk_timeout: _,
                    system_channel_id: f,
                    verification_level: E,
                    default_message_notifications: h,
                    explicit_content_filter: g,
                    system_channel_flags: p,
                    rules_channel_id: I,
                    discovery_splash: C,
                    public_updates_channel_id: y,
                    safety_alerts_channel_id: A,
                    ...null != N ? {
                        premium_progress_bar_enabled: N
                    } : null
                };
                return r.default.dispatch({
                    type: "GUILD_SETTINGS_SUBMIT"
                }), s.default.patch({
                    url: S.Endpoints.GUILD(e),
                    query: {
                        for_discovery: R.isForDiscovery
                    },
                    body: O,
                    oldFormErrors: !0
                }).then(t => {
                    r.default.dispatch({
                        type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
                        guild: t.body
                    }), u.default.checkGuildTemplateDirty(e)
                }, e => {
                    if (r.default.dispatch({
                            type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                            errors: e.body
                        }), T.error("Failed to save guild settings", {
                            errors: e.body
                        }), R.throwErr) throw e.body
                })
            },
            updateGuildModeration: (e, t) => s.default.patch({
                url: S.Endpoints.GUILD(e),
                body: {
                    verification_level: t.verificationLevel,
                    explicit_content_filter: t.explicitContentFilter
                },
                oldFormErrors: !0
            }).then(t => (u.default.checkGuildTemplateDirty(e), t)),
            transferOwnership(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return (0, g.default)(r => m.default.patch({
                    url: S.Endpoints.GUILD(e),
                    body: {
                        owner_id: t,
                        code: s,
                        ...r
                    },
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: i.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                        properties: {
                            guild_id: e,
                            verification_type: n
                        }
                    }
                }), {
                    modalProps: {
                        title: v.default.Messages.TRANSFER_OWNERSHIP,
                        actionText: v.default.Messages.TRANSFER_OWNERSHIP
                    },
                    checkEnabled: !1
                })
            },
            sendTransferOwnershipPincode(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return m.default.put({
                    url: S.Endpoints.GUILD_PINCODE(e),
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: i.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                        properties: {
                            guild_id: e,
                            is_resend: t
                        }
                    }
                })
            },
            deleteGuild: (e, t) => (0, g.default)(t => s.default.post({
                url: S.Endpoints.GUILD_DELETE(e),
                body: t,
                oldFormErrors: !0
            }), {
                modalProps: {
                    title: v.default.Messages.DELETE_SERVER_TITLE.format({
                        name: t
                    }),
                    actionText: v.default.Messages.DELETE_SERVER,
                    disallowBackupCodes: !0
                },
                checkEnabled: !1
            }).then(() => {
                I.close()
            }),
            async leaveGuild(e) {
                await s.default.delete({
                    url: S.Endpoints.GUILD_LEAVE(e),
                    body: {
                        lurking: _.default.isLurking(e) || E.default.isCurrentUserGuest(e)
                    },
                    oldFormErrors: !0
                }), I.close()
            },
            async updateMemberRoles(e, t, n, i, a) {
                if (c.default.isFullServerPreview(e) && t === f.default.getId()) {
                    (0, d.updateImpersonatedRoles)(e, n);
                    return
                }
                await s.default.patch({
                    url: S.Endpoints.GUILD_MEMBER(e, t),
                    body: {
                        roles: n
                    },
                    oldFormErrors: !0
                }), i.forEach(n => r.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_ADD",
                    guildId: e,
                    roleId: n,
                    userId: t
                })), a.forEach(n => r.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_REMOVE",
                    guildId: e,
                    roleId: n,
                    userId: t
                }))
            },
            bulkAddMemberRoles: (e, t, n) => s.default.patch({
                url: S.Endpoints.GUILD_ROLE_MEMBERS(e, t),
                body: {
                    member_ids: n
                }
            }).then(n => {
                r.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_BULK_ADD",
                    guildId: e,
                    roleId: t,
                    added: n.body
                })
            }),
            updateRolesEditSection(e) {
                r.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE",
                    section: e
                })
            },
            enableIntegration: (e, t, n) => s.default.post({
                url: S.Endpoints.GUILD_INTEGRATIONS(e),
                body: {
                    type: t,
                    id: n
                },
                oldFormErrors: !0
            }),
            disableIntegration: (e, t) => s.default.delete({
                url: S.Endpoints.GUILD_INTEGRATION(e, t),
                oldFormErrors: !0
            }),
            updateIntegration: (e, t, n, i, r) => s.default.patch({
                url: S.Endpoints.GUILD_INTEGRATION(e, t),
                body: {
                    expire_behavior: n,
                    expire_grace_period: i,
                    enable_emoticons: r
                },
                oldFormErrors: !0
            }),
            syncIntegration(e, t) {
                s.default.post({
                    url: S.Endpoints.GUILD_INTEGRATION_SYNC(e, t),
                    oldFormErrors: !0
                })
            }
        };
    var A = I
}