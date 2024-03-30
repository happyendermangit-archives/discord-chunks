function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("383959"),
        o = n("967888"),
        i = n("629815"),
        a = n("78928"),
        u = n("35523"),
        s = n("132319"),
        l = n("741885"),
        c = n("686785"),
        f = n("717744"),
        d = n("368995"),
        _ = n("217014"),
        E = n("957808"),
        p = n("306912"),
        m = n("475743"),
        y = n("463156"),
        I = n("746105"),
        h = n("281767"),
        O = n("941504");

    function T(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function S(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    T(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    T(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function v(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function g(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var A = new u.default("GuildSettingsActionCreators"),
        b = {
            init: function(e, t, n, r) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_INIT",
                    guildId: e,
                    section: t,
                    subsection: r,
                    location: n
                })
            },
            open: function(e, t, r, o) {
                return S(function() {
                    var i;
                    return g(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("24267"), n.e("23755"), n.e("61613"), n.e("55060"), n.e("6580"), n.e("70360"), n.e("13618"), n.e("76458"), n.e("92560"), n.e("47530"), n.e("96731"), n.e("23163"), n.e("57036"), n.e("12753"), n.e("76478"), n.e("87677"), n.e("92363"), n.e("12545"), n.e("97943"), n.e("24788"), n.e("26752"), n.e("27929"), n.e("58850"), n.e("55624"), n.e("98208"), n.e("20087"), n.e("9551"), n.e("39834"), n.e("15977"), n.e("44469")]).then(n.bind(n, "964063"))];
                            case 1:
                                u.sent(), u.label = 2;
                            case 2:
                                return (null === (i = p.default.getGuild(e)) || void 0 === i ? void 0 : i.hasFeature(h.GuildFeatures.COMMUNITY)) && (t === h.GuildSettingsSections.GUILD_AUTOMOD && (t = h.GuildSettingsSections.SAFETY, o = h.GuildSettingsSubsections.SAFETY_AUTOMOD), t === h.GuildSettingsSections.MEMBER_VERIFICATION && (t = h.GuildSettingsSections.SAFETY, o = h.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION)), b.init(e, t, r, o), (0, a.pushLayer)(h.Layers.GUILD_SETTINGS), [2]
                        }
                    })
                })()
            },
            close: function() {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_CLOSE"
                })
            },
            saveRouteStack: function(e) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_SAVE_ROUTE_STACK",
                    state: e
                })
            },
            setSection: function(e, t) {
                var n, r = I.default.getGuildId();
                null != r && ((null === (n = p.default.getGuild(r)) || void 0 === n ? void 0 : n.hasFeature(h.GuildFeatures.COMMUNITY)) && (e === h.GuildSettingsSections.GUILD_AUTOMOD && (e = h.GuildSettingsSections.SAFETY, t = h.GuildSettingsSubsections.SAFETY_AUTOMOD), e === h.GuildSettingsSections.MEMBER_VERIFICATION && (e = h.GuildSettingsSections.SAFETY, t = h.GuildSettingsSubsections.SAFETY_DM_AND_SPAM_PROTECTION)), i.default.dispatch({
                    type: "GUILD_SETTINGS_SET_SECTION",
                    section: e,
                    subsection: t
                }))
            },
            setSearchQuery: function(e) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
                    searchQuery: e
                })
            },
            selectRole: function(e, t) {
                return i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLE_SELECT",
                    roleId: e,
                    searchQuery: t
                })
            },
            updateEmbed: function(e, t, n) {
                o.HTTP.patch({
                    url: h.Endpoints.GUILD_WIDGET(e),
                    body: {
                        enabled: t,
                        channel_id: n
                    },
                    oldFormErrors: !0
                }).then(function(t) {
                    i.default.dispatch({
                        type: "GUILD_SETTINGS_SET_WIDGET",
                        guildId: e,
                        enabled: t.body.enabled,
                        channelId: t.body.channel_id
                    })
                })
            },
            updateMFALevel: function(e) {
                var t = e.guildId,
                    n = e.level,
                    r = e.isEnabled;
                return (0, m.default)(function(e) {
                    return o.HTTP.post({
                        url: h.Endpoints.GUILD_MFA(t),
                        body: v({
                            level: n
                        }, e),
                        oldFormErrors: !0
                    })
                }, {
                    modalProps: {
                        title: O.default.Messages.GUILD_SECURITY_REQ_MFA_LABEL,
                        actionText: r ? O.default.Messages.GUILD_SECURITY_REQ_MFA_TURN_OFF : O.default.Messages.GUILD_SECURITY_REQ_MFA_TURN_ON
                    },
                    checkEnabled: !1
                }).then(function(e) {
                    return i.default.dispatch({
                        type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
                        level: e.body.level
                    })
                })
            },
            updateIcon: function(e, t) {
                o.HTTP.patch({
                    url: h.Endpoints.GUILD(e),
                    body: {
                        icon: t
                    },
                    oldFormErrors: !0
                }).then(function() {
                    i.default.dispatch({
                        type: "GUILD_SETTINGS_UPDATE",
                        icon: t
                    }), l.default.checkGuildTemplateDirty(e)
                }, function(e) {
                    return i.default.dispatch({
                        type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body
                    })
                })
            },
            cancelChanges: function(e) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_CANCEL_CHANGES",
                    guildId: e
                })
            },
            updateGuild: function(e) {
                var t, n = e.safetyAlertsChannelId,
                    r = v({}, function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) {
                                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                        }
                        return o
                    }(e, ["safetyAlertsChannelId"])),
                    o = I.default.getGuildId();
                if (null != o) {
                    ;
                    (null === (t = s.RaidAlertExperiment.getCurrentConfig({
                        guildId: o,
                        location: "be0372_1"
                    })) || void 0 === t ? void 0 : t.enableRaidAlerts) && null != n && (r.safetyAlertsChannelId = n)
                }
                i.default.dispatch(v({
                    type: "GUILD_SETTINGS_UPDATE"
                }, r))
            },
            saveGuild: function(e, t) {
                var n = t.name,
                    r = t.description,
                    a = t.icon,
                    u = t.splash,
                    s = t.banner,
                    c = t.homeHeader,
                    f = t.afkChannelId,
                    d = t.afkTimeout,
                    _ = t.systemChannelId,
                    E = t.verificationLevel,
                    p = t.defaultMessageNotifications,
                    m = t.explicitContentFilter,
                    y = t.features,
                    I = t.systemChannelFlags,
                    O = t.preferredLocale,
                    T = t.rulesChannelId,
                    S = t.safetyAlertsChannelId,
                    g = t.discoverySplash,
                    b = t.publicUpdatesChannelId,
                    N = t.premiumProgressBarEnabled,
                    R = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    C = v({
                        name: n,
                        description: r,
                        icon: a,
                        splash: u,
                        banner: s,
                        home_header: c,
                        features: y,
                        preferred_locale: O,
                        afk_channel_id: f,
                        afk_timeout: d,
                        system_channel_id: _,
                        verification_level: E,
                        default_message_notifications: p,
                        explicit_content_filter: m,
                        system_channel_flags: I,
                        rules_channel_id: T,
                        discovery_splash: g,
                        public_updates_channel_id: b,
                        safety_alerts_channel_id: S
                    }, null != N ? {
                        premium_progress_bar_enabled: N
                    } : null);
                return i.default.dispatch({
                    type: "GUILD_SETTINGS_SUBMIT"
                }), o.HTTP.patch({
                    url: h.Endpoints.GUILD(e),
                    query: {
                        for_discovery: R.isForDiscovery
                    },
                    body: C,
                    oldFormErrors: !0
                }).then(function(t) {
                    i.default.dispatch({
                        type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
                        guild: t.body
                    }), l.default.checkGuildTemplateDirty(e)
                }, function(e) {
                    if (i.default.dispatch({
                            type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                            errors: e.body
                        }), A.error("Failed to save guild settings", {
                            errors: e.body
                        }), R.throwErr) throw e.body
                })
            },
            updateGuildModeration: function(e, t) {
                return o.HTTP.patch({
                    url: h.Endpoints.GUILD(e),
                    body: {
                        verification_level: t.verificationLevel,
                        explicit_content_filter: t.explicitContentFilter
                    },
                    oldFormErrors: !0
                }).then(function(t) {
                    return l.default.checkGuildTemplateDirty(e), t
                })
            },
            transferOwnership: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return (0, m.default)(function(i) {
                    return y.default.patch({
                        url: h.Endpoints.GUILD(e),
                        body: v({
                            owner_id: t,
                            code: o
                        }, i),
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                            properties: {
                                guild_id: e,
                                verification_type: n
                            }
                        }
                    })
                }, {
                    modalProps: {
                        title: O.default.Messages.TRANSFER_OWNERSHIP,
                        actionText: O.default.Messages.TRANSFER_OWNERSHIP
                    },
                    checkEnabled: !1
                })
            },
            sendTransferOwnershipPincode: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return y.default.put({
                    url: h.Endpoints.GUILD_PINCODE(e),
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                        properties: {
                            guild_id: e,
                            is_resend: t
                        }
                    }
                })
            },
            deleteGuild: function(e, t) {
                return (0, m.default)(function(t) {
                    return o.HTTP.post({
                        url: h.Endpoints.GUILD_DELETE(e),
                        body: t,
                        oldFormErrors: !0
                    })
                }, {
                    modalProps: {
                        title: O.default.Messages.DELETE_SERVER_TITLE.format({
                            name: t
                        }),
                        actionText: O.default.Messages.DELETE_SERVER,
                        disallowBackupCodes: !0
                    },
                    checkEnabled: !1
                }).then(function() {
                    b.close()
                })
            },
            leaveGuild: function(e) {
                return S(function() {
                    return g(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, o.HTTP.del({
                                    url: h.Endpoints.GUILD_LEAVE(e),
                                    body: {
                                        lurking: d.default.isLurking(e) || E.default.isCurrentUserGuest(e)
                                    },
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return t.sent(), b.close(), [2]
                        }
                    })
                })()
            },
            updateMemberRoles: function(e, t, n, r, a) {
                return S(function() {
                    return g(this, function(u) {
                        switch (u.label) {
                            case 0:
                                if (f.default.isFullServerPreview(e) && t === _.default.getId()) return (0, c.updateImpersonatedRoles)(e, n), [2];
                                return [4, o.HTTP.patch({
                                    url: h.Endpoints.GUILD_MEMBER(e, t),
                                    body: {
                                        roles: n
                                    },
                                    oldFormErrors: !0
                                })];
                            case 1:
                                return u.sent(), r.forEach(function(n) {
                                    return i.default.dispatch({
                                        type: "GUILD_ROLE_MEMBER_ADD",
                                        guildId: e,
                                        roleId: n,
                                        userId: t
                                    })
                                }), a.forEach(function(n) {
                                    return i.default.dispatch({
                                        type: "GUILD_ROLE_MEMBER_REMOVE",
                                        guildId: e,
                                        roleId: n,
                                        userId: t
                                    })
                                }), [2]
                        }
                    })
                })()
            },
            bulkAddMemberRoles: function(e, t, n) {
                return o.HTTP.patch({
                    url: h.Endpoints.GUILD_ROLE_MEMBERS(e, t),
                    body: {
                        member_ids: n
                    }
                }).then(function(n) {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_BULK_ADD",
                        guildId: e,
                        roleId: t,
                        added: n.body
                    })
                })
            },
            updateRolesEditSection: function(e) {
                i.default.dispatch({
                    type: "GUILD_SETTINGS_ROLES_EDIT_SECTION_UPDATE",
                    section: e
                })
            },
            enableIntegration: function(e, t, n) {
                return o.HTTP.post({
                    url: h.Endpoints.GUILD_INTEGRATIONS(e),
                    body: {
                        type: t,
                        id: n
                    },
                    oldFormErrors: !0
                })
            },
            disableIntegration: function(e, t) {
                return o.HTTP.del({
                    url: h.Endpoints.GUILD_INTEGRATION(e, t),
                    oldFormErrors: !0
                })
            },
            updateIntegration: function(e, t, n, r, i) {
                return o.HTTP.patch({
                    url: h.Endpoints.GUILD_INTEGRATION(e, t),
                    body: {
                        expire_behavior: n,
                        expire_grace_period: r,
                        enable_emoticons: i
                    },
                    oldFormErrors: !0
                })
            },
            syncIntegration: function(e, t) {
                o.HTTP.post({
                    url: h.Endpoints.GUILD_INTEGRATION_SYNC(e, t),
                    oldFormErrors: !0
                })
            }
        };
    t.default = b
}