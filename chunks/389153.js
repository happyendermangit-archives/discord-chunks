function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildCommand: function() {
            return T
        },
        buildApplicationCommands: function() {
            return I
        },
        isSnowflake: function() {
            return A
        },
        getMatchingGroupCommands: function() {
            return C
        },
        getApplicationCommandOptionQueryOptions: function() {
            return y
        },
        allChannelsSentinel: function() {
            return N
        },
        canUseApplicationCommands: function() {
            return R
        },
        DISABLED_BY_DEFAULT_PERMISSION_FLAG: function() {
            return O
        },
        hasAccess: function() {
            return D
        },
        getCommandAttachmentDraftType: function() {
            return L
        },
        getCommandTriggerSection: function() {
            return M
        },
        getApplicationCommandSection: function() {
            return b
        },
        extractInteractionDataProps: function() {
            return U
        },
        useIsUserInUserAppExperiment: function() {
            return w
        },
        isUserInUserAppExperiment: function() {
            return k
        },
        useIsGuildInUserAppExperiment: function() {
            return V
        },
        isGuildInUserAppExperiment: function() {
            return G
        },
        trackCommandSelected: function() {
            return F
        }
    }), n("222007"), n("424973"), n("881410"), n("808653");
    var i = n("552442"),
        s = n.n(i),
        r = n("627445"),
        a = n.n(r),
        o = n("917351"),
        l = n.n(o),
        u = n("316693"),
        d = n("798609"),
        c = n("716241"),
        f = n("892692"),
        _ = n("233069"),
        E = n("474643"),
        h = n("524768"),
        g = n("970254"),
        m = n("696415"),
        p = n("317041"),
        S = n("49111"),
        v = n("843455");

    function T(e) {
        var t, n, i;
        let s, {
            rootCommand: r,
            command: a,
            applicationId: o,
            subCommandPath: l,
            useKeyedPermissions: c
        } = e;
        null != r.permissions && r.permissions.length > 0 && (c ? s = (0, f.keyPermissions)(r.permissions) : (s = {}, r.permissions.forEach(e => {
            s[e.id] = e
        })));
        let _ = (null != l ? l : []).map(e => e.name),
            E = (null != l ? l : []).map(e => e.displayName);
        return {
            version: r.version,
            guildId: r.guild_id,
            id: [r.id, ..._].join(p.SUB_COMMAND_KEY_SEPARATOR),
            name: [r.name, ..._].join(" "),
            serverLocalizedName: a.name_localized,
            applicationId: o,
            type: null !== (t = r.type) && void 0 !== t ? t : d.ApplicationCommandType.CHAT,
            inputType: h.ApplicationCommandInputType.BOT,
            description: a.description,
            options: function e(t) {
                return null == t ? void 0 : t.map(t => {
                    var n, i;
                    let s = {
                        ...t,
                        choices: function(e) {
                            return null == e ? void 0 : e.map(e => {
                                var t;
                                return {
                                    ...e,
                                    displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                                }
                            })
                        }(t.choices),
                        options: e(t.options),
                        serverLocalizedName: t.name_localized,
                        displayName: null !== (n = t.name_localized) && void 0 !== n ? n : t.name,
                        displayDescription: null !== (i = t.description_localized) && void 0 !== i ? i : t.description
                    };
                    if (t.type === d.ApplicationCommandOptionType.CHANNEL && "channel_types" in t) return {
                        ...s,
                        channelTypes: t.channel_types
                    };
                    if ((t.type === d.ApplicationCommandOptionType.NUMBER || t.type === d.ApplicationCommandOptionType.INTEGER) && ("min_value" in t || "max_value" in t)) return {
                        ...s,
                        minValue: t.min_value,
                        maxValue: t.max_value
                    };
                    if (t.type === d.ApplicationCommandOptionType.STRING && ("min_length" in t || "max_length" in t)) return {
                        ...s,
                        minLength: t.min_length,
                        maxLength: t.max_length
                    };
                    return s
                })
            }(a.options),
            rootCommand: r,
            subCommandPath: l,
            defaultMemberPermissions: null == r.default_member_permissions ? void 0 : u.default.deserialize(r.default_member_permissions),
            dmPermission: r.dm_permission,
            permissions: s,
            displayName: [null !== (n = r.name_localized) && void 0 !== n ? n : r.name, ...E].join(" "),
            displayDescription: null !== (i = a.description_localized) && void 0 !== i ? i : a.description,
            nsfw: r.nsfw,
            contexts: r.contexts,
            integration_types: r.integration_types,
            global_popularity_rank: r.global_popularity_rank
        }
    }

    function I(e, t) {
        return l.flatMap(e, e => (a(null != e.id, "Missing command id"), function e(t) {
            var n, i;
            let {
                rootCommand: s,
                command: r,
                applicationId: a,
                subCommandPath: o,
                useKeyedPermissions: l
            } = t;
            if (r.hasOwnProperty("id")) {
                if (null == r.options || 0 === r.options.length) return [T({
                    rootCommand: s,
                    command: r,
                    applicationId: a,
                    subCommandPath: o,
                    useKeyedPermissions: l
                })]
            } else if (r.type !== d.ApplicationCommandOptionType.SUB_COMMAND && r.type !== d.ApplicationCommandOptionType.SUB_COMMAND_GROUP && (null == r.options || 0 === r.options.length)) return [T({
                rootCommand: s,
                command: r,
                applicationId: a,
                subCommandPath: o,
                useKeyedPermissions: l
            })];
            let u = [];
            if (null == r.options) return u;
            let c = r.options.filter(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
            for (let t = 0; t < c.length; t++) u.push(...e({
                rootCommand: s,
                command: c[t],
                applicationId: a,
                subCommandPath: (null != o ? o : []).concat([{
                    name: c[t].name,
                    type: d.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
                    displayName: null !== (n = c[t].name_localized) && void 0 !== n ? n : c[t].name
                }]),
                useKeyedPermissions: l
            }));
            let f = r.options.filter(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND);
            for (let e = 0; e < f.length; e++) u.push(T({
                rootCommand: s,
                command: f[e],
                applicationId: a,
                subCommandPath: (null != o ? o : []).concat([{
                    name: f[e].name,
                    type: d.ApplicationCommandOptionType.SUB_COMMAND,
                    displayName: null !== (i = f[e].name_localized) && void 0 !== i ? i : f[e].name
                }]),
                useKeyedPermissions: l
            }));
            return 0 === c.length && 0 === f.length && u.push(T({
                rootCommand: s,
                command: r,
                applicationId: a,
                subCommandPath: o,
                useKeyedPermissions: l
            })), u
        }({
            rootCommand: e,
            command: e,
            applicationId: e.application_id,
            subCommandPath: void 0,
            useKeyedPermissions: t
        })))
    }

    function A(e) {
        return S.ID_REGEX.test(e.trim())
    }

    function C(e, t, n, i) {
        let s = [];
        return l(e).forEach(e => {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && s.push(e)
        }), s.slice(0, i)
    }

    function y(e) {
        let t = e.type === d.ApplicationCommandOptionType.STRING,
            n = e.type === d.ApplicationCommandOptionType.CHANNEL,
            i = e.type === d.ApplicationCommandOptionType.USER || e.type === d.ApplicationCommandOptionType.MENTIONABLE,
            s = e.type === d.ApplicationCommandOptionType.ROLE || e.type === d.ApplicationCommandOptionType.MENTIONABLE;
        return {
            canMentionEveryone: t || s,
            canMentionHere: t,
            canMentionChannels: t || n,
            canMentionUsers: t || i,
            canMentionRoles: t || s,
            canMentionAnyGuildUser: i,
            canMentionNonMentionableRoles: s
        }
    }

    function N(e) {
        return s(e).subtract(1).toString()
    }

    function R(e, t, n, i) {
        if (n) return !1;
        if (i.isMultiUserDM()) return k({
            location: "canUseApplicationCommands"
        }, {
            autoTrackExposure: !1
        }) || t.getIntegrations(i.id).length > 0;
        if (i.isDM()) return !i.isSystemDM() && (null != i.rawRecipients.find(e => e.bot) || k({
            location: "canUseApplicationCommands"
        }, {
            autoTrackExposure: !1
        }) || t.getIntegrations(i.id).length > 0);
        return i.isArchivedLockedThread() ? e.can(u.default.combine(v.Permissions.USE_APPLICATION_COMMANDS, v.Permissions.MANAGE_THREADS), i) : !!(0, _.isReadableType)(i.type) && e.can(u.default.combine(v.Permissions.USE_APPLICATION_COMMANDS, v.Permissions.SEND_MESSAGES), i)
    }
    let O = u.default.deserialize(0);

    function D(e) {
        let {
            PermissionStore: t,
            guild: n,
            selfMember: i,
            applicationLevelPermissions: s,
            commandLevelPermissions: r,
            defaultMemberPermissions: a
        } = e;
        if (n.ownerId === i.userId || t.can(v.Permissions.ADMINISTRATOR, n)) return !0;
        let o = n.id;
        if (null != r) {
            let e = P(i, o, r);
            if ("boolean" == typeof e) return e
        }
        let l = P(i, o, s);
        return ("boolean" != typeof l || !!l) && (null == a || !u.default.equals(a, O) && t.can(a, n))
    }

    function P(e, t, n) {
        let i = n[(0, f.toPermissionKey)(e.userId, h.ApplicationCommandPermissionType.USER)];
        if (null != i) return i.permission;
        let s = !1;
        for (let t of e.roles) {
            let e = n[(0, f.toPermissionKey)(t, h.ApplicationCommandPermissionType.ROLE)];
            if (null != e && (s = !0, e.permission)) return !0
        }
        if (s) return !1;
        let r = n[(0, f.toPermissionKey)(t, h.ApplicationCommandPermissionType.ROLE)];
        return null != r ? r.permission : null
    }

    function L(e) {
        switch (e) {
            case h.CommandOrigin.CHAT:
                return E.DraftType.SlashCommand;
            case h.CommandOrigin.APPLICATION_LAUNCHER:
                return E.DraftType.ApplicationLauncherCommand
        }
    }

    function M(e) {
        if (null != e) {
            if (e.id === p.BuiltInSectionId.BUILT_IN) return h.ApplicationCommandTriggerSections.BUILT_IN;
            else if (e.id === p.BuiltInSectionId.FRECENCY) return h.ApplicationCommandTriggerSections.FRECENCY;
            else return h.ApplicationCommandTriggerSections.APP
        }
    }

    function b(e) {
        var t, n;
        return {
            type: h.ApplicationCommandSectionType.APPLICATION,
            id: e.id,
            name: null !== (n = null == e ? void 0 : null === (t = e.bot) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : e.name,
            icon: e.icon,
            application: e
        }
    }

    function U(e) {
        let t = e.id,
            n = e.options,
            i = null == n ? void 0 : n.find(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
        null != i && (t += "".concat(p.SUB_COMMAND_KEY_SEPARATOR).concat(i.name), n = i.options);
        let s = null == n ? void 0 : n.find(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND);
        return null != s && (t += "".concat(p.SUB_COMMAND_KEY_SEPARATOR).concat(s.name), n = s.options), {
            commandKey: t,
            interactionOptions: n
        }
    }

    function w(e, t) {
        let n = g.default.useExperiment(e, t);
        return n.userAppsTreatment === g.UserAppsTreatment.ALLOWED
    }

    function k(e, t) {
        let n = g.default.getCurrentConfig(e, t);
        return n.userAppsTreatment === g.UserAppsTreatment.ALLOWED
    }

    function V(e, t, n) {
        let i = m.default.useExperiment({
            guildId: null != e ? e : S.EMPTY_STRING_SNOWFLAKE_ID,
            ...t
        }, n);
        return null == e || i.userAppsTreatment === g.UserAppsTreatment.ALLOWED
    }

    function G(e, t, n) {
        if (null == e) return !0;
        let i = m.default.getCurrentConfig({
            guildId: e,
            ...t
        }, n);
        return i.userAppsTreatment === g.UserAppsTreatment.ALLOWED
    }

    function F(e) {
        var t, n;
        let {
            command: i,
            location: s,
            triggerSection: r,
            queryLength: a
        } = e;
        (0, c.trackWithMetadata)(S.AnalyticEvents.APPLICATION_COMMAND_SELECTED, {
            command_id: null !== (n = null === (t = i.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : i.id,
            application_id: i.applicationId,
            location: s,
            section: r,
            query_length: a,
            command_text_length: i.displayName.length
        })
    }
}