function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildCommand: function() {
            return I
        },
        buildApplicationCommands: function() {
            return C
        },
        isSnowflake: function() {
            return A
        },
        getMatchingGroupCommands: function() {
            return y
        },
        getApplicationCommandOptionQueryOptions: function() {
            return N
        },
        allChannelsSentinel: function() {
            return R
        },
        canUseApplicationCommands: function() {
            return O
        },
        DISABLED_BY_DEFAULT_PERMISSION_FLAG: function() {
            return D
        },
        hasAccess: function() {
            return P
        },
        getCommandAttachmentDraftType: function() {
            return M
        },
        getCommandTriggerSection: function() {
            return b
        },
        getApplicationCommandSection: function() {
            return U
        },
        extractInteractionDataProps: function() {
            return w
        },
        useIsInUserAppExperiment: function() {
            return k
        },
        isInUserAppExperiment: function() {
            return V
        },
        trackCommandSelected: function() {
            return G
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
        h = n("474643"),
        E = n("14090"),
        g = n("524768"),
        m = n("970254"),
        p = n("696415"),
        S = n("317041"),
        v = n("49111"),
        T = n("843455");

    function I(e) {
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
            h = (null != l ? l : []).map(e => e.displayName);
        return {
            version: r.version,
            guildId: r.guild_id,
            id: [r.id, ..._].join(S.SUB_COMMAND_KEY_SEPARATOR),
            name: [r.name, ..._].join(" "),
            serverLocalizedName: a.name_localized,
            applicationId: o,
            type: null !== (t = r.type) && void 0 !== t ? t : d.ApplicationCommandType.CHAT,
            inputType: g.ApplicationCommandInputType.BOT,
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
            displayName: [null !== (n = r.name_localized) && void 0 !== n ? n : r.name, ...h].join(" "),
            displayDescription: null !== (i = a.description_localized) && void 0 !== i ? i : a.description,
            nsfw: r.nsfw,
            contexts: r.contexts,
            integration_types: r.integration_types,
            global_popularity_rank: r.global_popularity_rank
        }
    }

    function C(e, t) {
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
                if (null == r.options || 0 === r.options.length) return [I({
                    rootCommand: s,
                    command: r,
                    applicationId: a,
                    subCommandPath: o,
                    useKeyedPermissions: l
                })]
            } else if (r.type !== d.ApplicationCommandOptionType.SUB_COMMAND && r.type !== d.ApplicationCommandOptionType.SUB_COMMAND_GROUP && (null == r.options || 0 === r.options.length)) return [I({
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
            for (let e = 0; e < f.length; e++) u.push(I({
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
            return 0 === c.length && 0 === f.length && u.push(I({
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
        return v.ID_REGEX.test(e.trim())
    }

    function y(e, t, n, i) {
        let s = [];
        return l(e).forEach(e => {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && s.push(e)
        }), s.slice(0, i)
    }

    function N(e) {
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

    function R(e) {
        return s(e).subtract(1).toString()
    }

    function O(e, t, n, i) {
        if (n) return !1;
        if (i.isMultiUserDM()) return V(i.guild_id, {
            location: "canUseApplicationCommands"
        }, {
            autoTrackExposure: !1
        }) || t.getIntegrations(i.id).length > 0;
        if (i.isDM()) return !i.isSystemDM() && (null != i.rawRecipients.find(e => e.bot) || V(i.guild_id, {
            location: "canUseApplicationCommands"
        }, {
            autoTrackExposure: !1
        }) || t.getIntegrations(i.id).length > 0);
        return i.isArchivedLockedThread() ? e.can(u.default.combine(T.Permissions.USE_APPLICATION_COMMANDS, T.Permissions.MANAGE_THREADS), i) : !!(0, _.isReadableType)(i.type) && e.can(u.default.combine(T.Permissions.USE_APPLICATION_COMMANDS, T.Permissions.SEND_MESSAGES), i)
    }
    let D = u.default.deserialize(0);

    function P(e) {
        let {
            PermissionStore: t,
            guild: n,
            selfMember: i,
            applicationLevelPermissions: s,
            commandLevelPermissions: r,
            defaultMemberPermissions: a
        } = e;
        if (n.ownerId === i.userId || t.can(T.Permissions.ADMINISTRATOR, n)) return !0;
        let o = n.id;
        if (null != r) {
            let e = L(i, o, r);
            if ("boolean" == typeof e) return e
        }
        let l = L(i, o, s);
        return ("boolean" != typeof l || !!l) && (null == a || !u.default.equals(a, D) && t.can(a, n))
    }

    function L(e, t, n) {
        let i = n[(0, f.toPermissionKey)(e.userId, g.ApplicationCommandPermissionType.USER)];
        if (null != i) return i.permission;
        let s = !1;
        for (let t of e.roles) {
            let e = n[(0, f.toPermissionKey)(t, g.ApplicationCommandPermissionType.ROLE)];
            if (null != e && (s = !0, e.permission)) return !0
        }
        if (s) return !1;
        let r = n[(0, f.toPermissionKey)(t, g.ApplicationCommandPermissionType.ROLE)];
        return null != r ? r.permission : null
    }

    function M(e) {
        switch (e) {
            case g.CommandOrigin.CHAT:
                return h.DraftType.SlashCommand;
            case g.CommandOrigin.APPLICATION_LAUNCHER:
                return h.DraftType.ApplicationLauncherCommand
        }
    }

    function b(e) {
        if (null != e) {
            if (e.id === S.BuiltInSectionId.BUILT_IN) return g.ApplicationCommandTriggerSections.BUILT_IN;
            else if (e.id === S.BuiltInSectionId.FRECENCY) return g.ApplicationCommandTriggerSections.FRECENCY;
            else return g.ApplicationCommandTriggerSections.APP
        }
    }

    function U(e) {
        var t, n;
        return {
            type: g.ApplicationCommandSectionType.APPLICATION,
            id: e.id,
            name: null !== (n = null == e ? void 0 : null === (t = e.bot) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : e.name,
            icon: e.icon,
            application: e
        }
    }

    function w(e) {
        let t = e.id,
            n = e.options,
            i = null == n ? void 0 : n.find(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
        null != i && (t += "".concat(S.SUB_COMMAND_KEY_SEPARATOR).concat(i.name), n = i.options);
        let s = null == n ? void 0 : n.find(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND);
        return null != s && (t += "".concat(S.SUB_COMMAND_KEY_SEPARATOR).concat(s.name), n = s.options), {
            commandKey: t,
            interactionOptions: n
        }
    }

    function k(e, t, n) {
        let i = m.default.useExperiment(t, n).userAppsTreatment === E.UserAppsTreatment.ALLOWED,
            s = p.default.useExperiment({
                guildId: null != e ? e : v.EMPTY_STRING_SNOWFLAKE_ID,
                ...t
            }, n).userAppsTreatment === E.UserAppsTreatment.ALLOWED;
        return i && (null == e || s)
    }

    function V(e, t, n) {
        let i = m.default.getCurrentConfig(t, n).userAppsTreatment === E.UserAppsTreatment.ALLOWED,
            s = p.default.getCurrentConfig({
                guildId: null != e ? e : v.EMPTY_STRING_SNOWFLAKE_ID,
                ...t
            }, n).userAppsTreatment === E.UserAppsTreatment.ALLOWED;
        return i && (s || null == e)
    }

    function G(e) {
        var t, n;
        let {
            command: i,
            location: s,
            triggerSection: r,
            queryLength: a
        } = e;
        (0, c.trackWithMetadata)(v.AnalyticEvents.APPLICATION_COMMAND_SELECTED, {
            command_id: null !== (n = null === (t = i.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : i.id,
            application_id: i.applicationId,
            location: s,
            section: r,
            query_length: a,
            command_text_length: i.displayName.length
        })
    }
}