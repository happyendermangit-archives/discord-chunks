function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DISABLED_BY_DEFAULT_PERMISSION_FLAG: function() {
            return v
        },
        allChannelsSentinel: function() {
            return g
        },
        buildApplicationCommands: function() {
            return p
        },
        buildCommand: function() {
            return N
        },
        canUseApplicationCommands: function() {
            return L
        },
        extractInteractionDataProps: function() {
            return b
        },
        getApplicationCommandOptionQueryOptions: function() {
            return C
        },
        getApplicationCommandSection: function() {
            return U
        },
        getCommandAttachmentDraftType: function() {
            return y
        },
        getCommandTriggerSection: function() {
            return P
        },
        getMatchingGroupCommands: function() {
            return R
        },
        hasAccess: function() {
            return D
        },
        isGuildInUserAppExperiment: function() {
            return k
        },
        isSnowflake: function() {
            return O
        },
        isUserInUserAppExperiment: function() {
            return w
        },
        trackCommandSelected: function() {
            return V
        },
        useIsGuildInUserAppExperiment: function() {
            return B
        },
        useIsUserInUserAppExperiment: function() {
            return G
        }
    }), n("47120"), n("653041"), n("390547"), n("724458");
    var i = n("654861"),
        r = n.n(i),
        a = n("512722"),
        s = n.n(a),
        o = n("392711"),
        l = n.n(o),
        u = n("149765"),
        d = n("911969"),
        _ = n("367907"),
        c = n("399860"),
        E = n("131704"),
        I = n("703558"),
        T = n("895924"),
        f = n("420582"),
        S = n("531010"),
        h = n("689079"),
        A = n("981631"),
        m = n("231338");

    function N(e) {
        var t, n, i;
        let r, {
            rootCommand: a,
            command: s,
            applicationId: o,
            subCommandPath: l,
            useKeyedPermissions: _
        } = e;
        null != a.permissions && a.permissions.length > 0 && (_ ? r = (0, c.keyPermissions)(a.permissions) : (r = {}, a.permissions.forEach(e => {
            r[e.id] = e
        })));
        let E = (null != l ? l : []).map(e => e.name),
            I = (null != l ? l : []).map(e => e.displayName);
        return {
            version: a.version,
            guildId: a.guild_id,
            id: [a.id, ...E].join(h.SUB_COMMAND_KEY_SEPARATOR),
            name: [a.name, ...E].join(" "),
            serverLocalizedName: s.name_localized,
            applicationId: o,
            type: null !== (t = a.type) && void 0 !== t ? t : d.ApplicationCommandType.CHAT,
            inputType: T.ApplicationCommandInputType.BOT,
            description: s.description,
            options: function e(t) {
                return null == t ? void 0 : t.map(t => {
                    var n, i;
                    let r = {
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
                        ...r,
                        channelTypes: t.channel_types
                    };
                    if ((t.type === d.ApplicationCommandOptionType.NUMBER || t.type === d.ApplicationCommandOptionType.INTEGER) && ("min_value" in t || "max_value" in t)) return {
                        ...r,
                        minValue: t.min_value,
                        maxValue: t.max_value
                    };
                    if (t.type === d.ApplicationCommandOptionType.STRING && ("min_length" in t || "max_length" in t)) return {
                        ...r,
                        minLength: t.min_length,
                        maxLength: t.max_length
                    };
                    return r
                })
            }(s.options),
            rootCommand: a,
            subCommandPath: l,
            defaultMemberPermissions: null == a.default_member_permissions ? void 0 : u.deserialize(a.default_member_permissions),
            dmPermission: a.dm_permission,
            permissions: r,
            displayName: [null !== (n = a.name_localized) && void 0 !== n ? n : a.name, ...I].join(" "),
            displayDescription: null !== (i = s.description_localized) && void 0 !== i ? i : s.description,
            nsfw: a.nsfw,
            contexts: a.contexts,
            integration_types: a.integration_types,
            global_popularity_rank: a.global_popularity_rank
        }
    }

    function p(e, t) {
        return l().flatMap(e, e => (s()(null != e.id, "Missing command id"), function e(t) {
            var n, i;
            let {
                rootCommand: r,
                command: a,
                applicationId: s,
                subCommandPath: o,
                useKeyedPermissions: l
            } = t;
            if (a.hasOwnProperty("id")) {
                if (null == a.options || 0 === a.options.length) return [N({
                    rootCommand: r,
                    command: a,
                    applicationId: s,
                    subCommandPath: o,
                    useKeyedPermissions: l
                })]
            } else if (a.type !== d.ApplicationCommandOptionType.SUB_COMMAND && a.type !== d.ApplicationCommandOptionType.SUB_COMMAND_GROUP && (null == a.options || 0 === a.options.length)) return [N({
                rootCommand: r,
                command: a,
                applicationId: s,
                subCommandPath: o,
                useKeyedPermissions: l
            })];
            let u = [];
            if (null == a.options) return u;
            let _ = a.options.filter(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
            for (let t = 0; t < _.length; t++) u.push(...e({
                rootCommand: r,
                command: _[t],
                applicationId: s,
                subCommandPath: (null != o ? o : []).concat([{
                    name: _[t].name,
                    type: d.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
                    displayName: null !== (n = _[t].name_localized) && void 0 !== n ? n : _[t].name
                }]),
                useKeyedPermissions: l
            }));
            let c = a.options.filter(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND);
            for (let e = 0; e < c.length; e++) u.push(N({
                rootCommand: r,
                command: c[e],
                applicationId: s,
                subCommandPath: (null != o ? o : []).concat([{
                    name: c[e].name,
                    type: d.ApplicationCommandOptionType.SUB_COMMAND,
                    displayName: null !== (i = c[e].name_localized) && void 0 !== i ? i : c[e].name
                }]),
                useKeyedPermissions: l
            }));
            return 0 === _.length && 0 === c.length && u.push(N({
                rootCommand: r,
                command: a,
                applicationId: s,
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

    function O(e) {
        return A.ID_REGEX.test(e.trim())
    }

    function R(e, t, n, i) {
        let r = [];
        return l()(e).forEach(e => {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && r.push(e)
        }), r.slice(0, i)
    }

    function C(e) {
        let t = e.type === d.ApplicationCommandOptionType.STRING,
            n = e.type === d.ApplicationCommandOptionType.CHANNEL,
            i = e.type === d.ApplicationCommandOptionType.USER || e.type === d.ApplicationCommandOptionType.MENTIONABLE,
            r = e.type === d.ApplicationCommandOptionType.ROLE || e.type === d.ApplicationCommandOptionType.MENTIONABLE;
        return {
            canMentionEveryone: t || r,
            canMentionHere: t,
            canMentionChannels: t || n,
            canMentionUsers: t || i,
            canMentionRoles: t || r,
            canMentionAnyGuildUser: i,
            canMentionNonMentionableRoles: r
        }
    }

    function g(e) {
        return r()(e).subtract(1).toString()
    }

    function L(e, t, n, i) {
        if (n) return !1;
        if (i.isMultiUserDM()) return w({
            location: "canUseApplicationCommands"
        }, {
            autoTrackExposure: !1
        }) || t.getIntegrations(i.id).length > 0;
        if (i.isDM()) return !i.isSystemDM() && (null != i.rawRecipients.find(e => e.bot) || w({
            location: "canUseApplicationCommands"
        }, {
            autoTrackExposure: !1
        }) || t.getIntegrations(i.id).length > 0);
        return i.isArchivedLockedThread() ? e.can(u.combine(m.Permissions.USE_APPLICATION_COMMANDS, m.Permissions.MANAGE_THREADS), i) : !!(0, E.isReadableType)(i.type) && e.can(u.combine(m.Permissions.USE_APPLICATION_COMMANDS, m.Permissions.SEND_MESSAGES), i)
    }
    let v = u.deserialize(0);

    function D(e) {
        let {
            PermissionStore: t,
            guild: n,
            selfMember: i,
            applicationLevelPermissions: r,
            commandLevelPermissions: a,
            defaultMemberPermissions: s
        } = e;
        if (n.ownerId === i.userId || t.can(m.Permissions.ADMINISTRATOR, n)) return !0;
        let o = n.id;
        if (null != a) {
            let e = M(i, o, a);
            if ("boolean" == typeof e) return e
        }
        let l = M(i, o, r);
        return ("boolean" != typeof l || !!l) && (null == s || !u.equals(s, v) && t.can(s, n))
    }

    function M(e, t, n) {
        let i = n[(0, c.toPermissionKey)(e.userId, T.ApplicationCommandPermissionType.USER)];
        if (null != i) return i.permission;
        let r = !1;
        for (let t of e.roles) {
            let e = n[(0, c.toPermissionKey)(t, T.ApplicationCommandPermissionType.ROLE)];
            if (null != e && (r = !0, e.permission)) return !0
        }
        if (r) return !1;
        let a = n[(0, c.toPermissionKey)(t, T.ApplicationCommandPermissionType.ROLE)];
        return null != a ? a.permission : null
    }

    function y(e) {
        switch (e) {
            case T.CommandOrigin.CHAT:
                return I.DraftType.SlashCommand;
            case T.CommandOrigin.APPLICATION_LAUNCHER:
                return I.DraftType.ApplicationLauncherCommand
        }
    }

    function P(e) {
        if (null != e) {
            if (e.id === h.BuiltInSectionId.BUILT_IN) return T.ApplicationCommandTriggerSections.BUILT_IN;
            else if (e.id === h.BuiltInSectionId.FRECENCY) return T.ApplicationCommandTriggerSections.FRECENCY;
            else return T.ApplicationCommandTriggerSections.APP
        }
    }

    function U(e) {
        var t, n;
        return {
            type: T.ApplicationCommandSectionType.APPLICATION,
            id: e.id,
            name: null !== (n = null == e ? void 0 : null === (t = e.bot) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : e.name,
            icon: e.icon,
            application: e
        }
    }

    function b(e) {
        let t = e.id,
            n = e.options,
            i = null == n ? void 0 : n.find(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND_GROUP);
        null != i && (t += "".concat(h.SUB_COMMAND_KEY_SEPARATOR).concat(i.name), n = i.options);
        let r = null == n ? void 0 : n.find(e => e.type === d.ApplicationCommandOptionType.SUB_COMMAND);
        return null != r && (t += "".concat(h.SUB_COMMAND_KEY_SEPARATOR).concat(r.name), n = r.options), {
            commandKey: t,
            interactionOptions: n
        }
    }

    function G(e, t) {
        return f.default.useExperiment(e, t).userAppsTreatment === f.UserAppsTreatment.ALLOWED
    }

    function w(e, t) {
        return f.default.getCurrentConfig(e, t).userAppsTreatment === f.UserAppsTreatment.ALLOWED
    }

    function B(e, t, n) {
        let i = S.default.useExperiment({
            guildId: null != e ? e : A.EMPTY_STRING_SNOWFLAKE_ID,
            ...t
        }, n);
        return null == e || i.userAppsTreatment === f.UserAppsTreatment.ALLOWED
    }

    function k(e, t, n) {
        return null == e || S.default.getCurrentConfig({
            guildId: e,
            ...t
        }, n).userAppsTreatment === f.UserAppsTreatment.ALLOWED
    }

    function V(e) {
        var t, n;
        let {
            command: i,
            location: r,
            triggerSection: a,
            queryLength: s
        } = e;
        (0, _.trackWithMetadata)(A.AnalyticEvents.APPLICATION_COMMAND_SELECTED, {
            command_id: null !== (n = null === (t = i.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : i.id,
            application_id: i.applicationId,
            location: r,
            section: a,
            query_length: s,
            command_text_length: i.displayName.length
        })
    }
}