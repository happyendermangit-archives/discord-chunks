function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("990547"),
        r = n("544891"),
        s = n("570140"),
        a = n("37234"),
        o = n("710845"),
        l = n("655006"),
        u = n("408987"),
        d = n("962086"),
        _ = n("160404"),
        c = n("41776"),
        E = n("314897"),
        I = n("271383"),
        T = n("430824"),
        f = n("546796"),
        S = n("573261"),
        h = n("999382"),
        A = n("981631"),
        m = n("308083"),
        N = n("689938");
    let p = new o.default("GuildSettingsActionCreators"),
        O = {
            init(e, t, n, i) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_INIT",
                    guildId: e,
                    section: t,
                    subsection: i,
                    location: n
                })
            },
            async open(e, t, i, r) {
                var s;
                await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("24267"), n.e("23755"), n.e("61613"), n.e("33053"), n.e("49146"), n.e("56630"), n.e("75475"), n.e("90508"), n.e("85093"), n.e("85552"), n.e("3084"), n.e("74456"), n.e("58227"), n.e("43502"), n.e("42601"), n.e("65840"), n.e("43643"), n.e("74870"), n.e("33361"), n.e("65892"), n.e("62856"), n.e("67256")]).then(n.bind(n, "994763")), (null === (s = T.default.getGuild(e)) || void 0 === s ? void 0 : s.hasFeature(A.GuildFeatures.COMMUNITY)) && (t === A.GuildSettingsSections.GUILD_AUTOMOD && (t = A.GuildSettingsSections.SAFETY, r = A.GuildSettingsSubsections.SAFETY_AUTOMOD), t === A.GuildSettingsSections.MEMBER_VERIFICATION && (t = A.GuildSettingsSections.SAFETY, r = A.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION)), O.init(e, t, i, r), (0, a.pushLayer)(A.Layers.GUILD_SETTINGS)
            },
            close() {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_CLOSE"
                })
            },
            saveRouteStack(e) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_SAVE_ROUTE_STACK",
                    state: e
                })
            },
            setSection(e, t) {
                var n;
                let i = h.default.getGuildId();
                null != i && ((null === (n = T.default.getGuild(i)) || void 0 === n ? void 0 : n.hasFeature(A.GuildFeatures.COMMUNITY)) && (e === A.GuildSettingsSections.GUILD_AUTOMOD && (e = A.GuildSettingsSections.SAFETY, t = A.GuildSettingsSubsections.SAFETY_AUTOMOD), e === A.GuildSettingsSections.MEMBER_VERIFICATION && (e = A.GuildSettingsSections.SAFETY, t = A.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION)), s.default.dispatch({
                    type: "GUILD_SETTINGS_SET_SECTION",
                    section: e,
                    subsection: t
                }))
            },
            setSearchQuery(e) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
                    searchQuery: e
                })
            },
            selectRole: (e, t) => s.default.dispatch({
                type: "GUILD_SETTINGS_ROLE_SELECT",
                roleId: e,
                searchQuery: t
            }),
            updateEmbed(e, t, n) {
                r.HTTP.patch({
                    url: A.Endpoints.GUILD_WIDGET(e),
                    body: {
                        enabled: t,
                        channel_id: n
                    },
                    oldFormErrors: !0
                }).then(t => {
                    s.default.dispatch({
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
                return (0, f.default)(e => r.HTTP.post({
                    url: A.Endpoints.GUILD_MFA(t),
                    body: {
                        level: n,
                        ...e
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: N.default.Messages.GUILD_SECURITY_REQ_MFA_LABEL,
                        actionText: i ? N.default.Messages.GUILD_SECURITY_REQ_MFA_TURN_OFF : N.default.Messages.GUILD_SECURITY_REQ_MFA_TURN_ON
                    },
                    checkEnabled: !1
                }).then(e => s.default.dispatch({
                    type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
                    level: e.body.level
                }))
            },
            updateIcon(e, t) {
                r.HTTP.patch({
                    url: A.Endpoints.GUILD(e),
                    body: {
                        icon: t
                    },
                    oldFormErrors: !0
                }).then(() => {
                    s.default.dispatch({
                        type: "GUILD_SETTINGS_UPDATE",
                        icon: t
                    }), u.default.checkGuildTemplateDirty(e)
                }, e => s.default.dispatch({
                    type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                    errors: e.body
                }))
            },
            cancelChanges(e) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_CANCEL_CHANGES",
                    guildId: e
                })
            },
            updateGuild(e) {
                var t, n;
                let {
                    safetyAlertsChannelId: i,
                    clan: r,
                    ...a
                } = e, o = {
                    ...a
                };
                null != r && (o.clan = {
                    ...null !== (t = o.clan) && void 0 !== t ? t : {},
                    ...r
                });
                let u = h.default.getGuildId();
                null != u && (null === (n = l.RaidAlertExperiment.getCurrentConfig({
                    guildId: u,
                    location: "be0372_1"
                })) || void 0 === n ? void 0 : n.enableRaidAlerts) && null != i && (o.safetyAlertsChannelId = i), s.default.dispatch({
                    type: "GUILD_SETTINGS_UPDATE",
                    ...o
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
                    afkChannelId: _,
                    afkTimeout: c,
                    systemChannelId: E,
                    verificationLevel: I,
                    defaultMessageNotifications: T,
                    explicitContentFilter: f,
                    features: S,
                    systemChannelFlags: h,
                    preferredLocale: N,
                    rulesChannelId: O,
                    safetyAlertsChannelId: R,
                    discoverySplash: C,
                    publicUpdatesChannelId: g,
                    premiumProgressBarEnabled: L,
                    clan: D
                } = t, v = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, M = {
                    name: n,
                    description: i,
                    icon: a,
                    splash: o,
                    banner: l,
                    home_header: d,
                    features: S,
                    preferred_locale: N,
                    afk_channel_id: _,
                    afk_timeout: c,
                    system_channel_id: E,
                    verification_level: I,
                    default_message_notifications: T,
                    explicit_content_filter: f,
                    system_channel_flags: h,
                    rules_channel_id: O,
                    discovery_splash: C,
                    public_updates_channel_id: g,
                    safety_alerts_channel_id: R,
                    ...null != L ? {
                        premium_progress_bar_enabled: L
                    } : null,
                    clan: null != D ? (0, m.toServerClanData)(D) : D
                };
                return s.default.dispatch({
                    type: "GUILD_SETTINGS_SUBMIT"
                }), r.HTTP.patch({
                    url: A.Endpoints.GUILD(e),
                    query: {
                        for_discovery: v.isForDiscovery
                    },
                    body: M,
                    oldFormErrors: !0
                }).then(t => {
                    s.default.dispatch({
                        type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
                        guild: t.body
                    }), u.default.checkGuildTemplateDirty(e)
                }, e => {
                    if (s.default.dispatch({
                            type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                            errors: e.body
                        }), p.error("Failed to save guild settings", {
                            errors: e.body
                        }), v.throwErr) throw e.body
                })
            },
            updateGuildModeration: (e, t) => r.HTTP.patch({
                url: A.Endpoints.GUILD(e),
                body: {
                    verification_level: t.verificationLevel,
                    explicit_content_filter: t.explicitContentFilter
                },
                oldFormErrors: !0
            }).then(t => (u.default.checkGuildTemplateDirty(e), t)),
            transferOwnership(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return (0, f.default)(s => S.default.patch({
                    url: A.Endpoints.GUILD(e),
                    body: {
                        owner_id: t,
                        code: r,
                        ...s
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
                        title: N.default.Messages.TRANSFER_OWNERSHIP,
                        actionText: N.default.Messages.TRANSFER_OWNERSHIP
                    },
                    checkEnabled: !1
                })
            },
            sendTransferOwnershipPincode(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return S.default.put({
                    url: A.Endpoints.GUILD_PINCODE(e),
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
            deleteGuild: (e, t) => (0, f.default)(t => r.HTTP.post({
                url: A.Endpoints.GUILD_DELETE(e),
                body: t,
                oldFormErrors: !0
            }), {
                modalProps: {
                    title: N.default.Messages.DELETE_SERVER_TITLE.format({
                        name: t
                    }),
                    actionText: N.default.Messages.DELETE_SERVER,
                    disallowBackupCodes: !0
                },
                checkEnabled: !1
            }).then(() => {
                O.close()
            }),
            async leaveGuild(e) {
                await r.HTTP.del({
                    url: A.Endpoints.GUILD_LEAVE(e),
                    body: {
                        lurking: c.default.isLurking(e) || I.default.isCurrentUserGuest(e)
                    },
                    oldFormErrors: !0
                }), O.close()
            },
            async updateMemberRoles(e, t, n, i, a) {
                if (_.default.isFullServerPreview(e) && t === E.default.getId()) {
                    (0, d.updateImpersonatedRoles)(e, n);
                    return
                }
                await r.HTTP.patch({
                    url: A.Endpoints.GUILD_MEMBER(e, t),
                    body: {
                        roles: n
                    },
                    oldFormErrors: !0
                }), i.forEach(n => s.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_ADD",
                    guildId: e,
                    roleId: n,
                    userId: t
                })), a.forEach(n => s.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_REMOVE",
                    guildId: e,
                    roleId: n,
                    userId: t
                }))
            },
            bulkAddMemberRoles: (e, t, n) => r.HTTP.patch({
                url: A.Endpoints.GUILD_ROLE_MEMBERS(e, t),
                body: {
                    member_ids: n
                }
            }).then(n => {
                s.default.dispatch({
                    type: "GUILD_ROLE_MEMBER_BULK_ADD",
                    guildId: e,
                    roleId: t,
                    added: n.body
                })
            }),
            updateRolesEditSection(e) {
                s.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE",
                    section: e
                })
            },
            enableIntegration: (e, t, n) => r.HTTP.post({
                url: A.Endpoints.GUILD_INTEGRATIONS(e),
                body: {
                    type: t,
                    id: n
                },
                oldFormErrors: !0
            }),
            disableIntegration: (e, t) => r.HTTP.del({
                url: A.Endpoints.GUILD_INTEGRATION(e, t),
                oldFormErrors: !0
            }),
            updateIntegration: (e, t, n, i, s) => r.HTTP.patch({
                url: A.Endpoints.GUILD_INTEGRATION(e, t),
                body: {
                    expire_behavior: n,
                    expire_grace_period: i,
                    enable_emoticons: s
                },
                oldFormErrors: !0
            }),
            syncIntegration(e, t) {
                r.HTTP.post({
                    url: A.Endpoints.GUILD_INTEGRATION_SYNC(e, t),
                    oldFormErrors: !0
                })
            }
        };
    t.default = O
}