function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DISABLED_BY_DEFAULT_PERMISSION_FLAG: function() {
            return L
        },
        allChannelsSentinel: function() {
            return P
        },
        buildApplicationCommands: function() {
            return b
        },
        buildCommand: function() {
            return A
        },
        canUseApplicationCommands: function() {
            return D
        },
        extractInteractionDataProps: function() {
            return B
        },
        getApplicationCommandOptionQueryOptions: function() {
            return C
        },
        getApplicationCommandSection: function() {
            return G
        },
        getCommandAttachmentDraftType: function() {
            return w
        },
        getCommandTriggerSection: function() {
            return k
        },
        getMatchingGroupCommands: function() {
            return R
        },
        hasAccess: function() {
            return M
        },
        isGuildInUserAppExperiment: function() {
            return H
        },
        isSnowflake: function() {
            return N
        },
        isUserInUserAppExperiment: function() {
            return F
        },
        trackCommandSelected: function() {
            return x
        },
        useIsGuildInUserAppExperiment: function() {
            return V
        },
        useIsUserInUserAppExperiment: function() {
            return j
        }
    });
    var r = n("654861"),
        o = n.n(r),
        i = n("512722"),
        a = n.n(i),
        u = n("392711"),
        s = n.n(u),
        l = n("22287"),
        c = n("29570"),
        f = n("140817"),
        d = n("21733"),
        _ = n("569492"),
        E = n("309944"),
        p = n("861272"),
        m = n("415253"),
        y = n("418858"),
        I = n("118891"),
        h = n("281767"),
        O = n("563090");

    function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function S(e) {
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

    function v(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function g(e) {
        return function(e) {
            if (Array.isArray(e)) return T(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return T(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function A(e) {
        var t, n, r, o, i = e.rootCommand,
            a = e.command,
            u = e.applicationId,
            s = e.subCommandPath,
            f = e.useKeyedPermissions;
        null != i.permissions && i.permissions.length > 0 && (f ? t = (0, d.keyPermissions)(i.permissions) : (t = {}, i.permissions.forEach(function(e) {
            t[e.id] = e
        })));
        var _ = (null != s ? s : []).map(function(e) {
                return e.name
            }),
            E = (null != s ? s : []).map(function(e) {
                return e.displayName
            });
        return {
            version: i.version,
            guildId: i.guild_id,
            id: [i.id].concat(g(_)).join(I.SUB_COMMAND_KEY_SEPARATOR),
            name: [i.name].concat(g(_)).join(" "),
            serverLocalizedName: a.name_localized,
            applicationId: u,
            type: null !== (n = i.type) && void 0 !== n ? n : c.ApplicationCommandType.CHAT,
            inputType: p.ApplicationCommandInputType.BOT,
            description: a.description,
            options: function e(t) {
                return null == t ? void 0 : t.map(function(t) {
                    var n, r, o = v(S({}, t), {
                        choices: function(e) {
                            return null == e ? void 0 : e.map(function(e) {
                                var t;
                                return v(S({}, e), {
                                    displayName: null !== (t = e.name_localized) && void 0 !== t ? t : e.name
                                })
                            })
                        }(t.choices),
                        options: e(t.options),
                        serverLocalizedName: t.name_localized,
                        displayName: null !== (n = t.name_localized) && void 0 !== n ? n : t.name,
                        displayDescription: null !== (r = t.description_localized) && void 0 !== r ? r : t.description
                    });
                    if (t.type === c.ApplicationCommandOptionType.CHANNEL && "channel_types" in t) return v(S({}, o), {
                        channelTypes: t.channel_types
                    });
                    if ((t.type === c.ApplicationCommandOptionType.NUMBER || t.type === c.ApplicationCommandOptionType.INTEGER) && ("min_value" in t || "max_value" in t)) return v(S({}, o), {
                        minValue: t.min_value,
                        maxValue: t.max_value
                    });
                    if (t.type === c.ApplicationCommandOptionType.STRING && ("min_length" in t || "max_length" in t)) return v(S({}, o), {
                        minLength: t.min_length,
                        maxLength: t.max_length
                    });
                    return o
                })
            }(a.options),
            rootCommand: i,
            subCommandPath: s,
            defaultMemberPermissions: null == i.default_member_permissions ? void 0 : l.deserialize(i.default_member_permissions),
            dmPermission: i.dm_permission,
            permissions: t,
            displayName: [null !== (r = i.name_localized) && void 0 !== r ? r : i.name].concat(g(E)).join(" "),
            displayDescription: null !== (o = a.description_localized) && void 0 !== o ? o : a.description,
            nsfw: i.nsfw,
            contexts: i.contexts,
            integration_types: i.integration_types,
            global_popularity_rank: i.global_popularity_rank
        }
    }

    function b(e, t) {
        return s().flatMap(e, function(e) {
            return a()(null != e.id, "Missing command id"),
                function e(t) {
                    var n, r, o = t.rootCommand,
                        i = t.command,
                        a = t.applicationId,
                        u = t.subCommandPath,
                        s = t.useKeyedPermissions;
                    if (i.hasOwnProperty("id")) {
                        if (null == i.options || 0 === i.options.length) return [A({
                            rootCommand: o,
                            command: i,
                            applicationId: a,
                            subCommandPath: u,
                            useKeyedPermissions: s
                        })]
                    } else if (i.type !== c.ApplicationCommandOptionType.SUB_COMMAND && i.type !== c.ApplicationCommandOptionType.SUB_COMMAND_GROUP && (null == i.options || 0 === i.options.length)) return [A({
                        rootCommand: o,
                        command: i,
                        applicationId: a,
                        subCommandPath: u,
                        useKeyedPermissions: s
                    })];
                    var l = [];
                    if (null == i.options) return l;
                    for (var f = i.options.filter(function(e) {
                            return e.type === c.ApplicationCommandOptionType.SUB_COMMAND_GROUP
                        }), d = 0; d < f.length; d++) l.push.apply(l, g(e({
                        rootCommand: o,
                        command: f[d],
                        applicationId: a,
                        subCommandPath: (null != u ? u : []).concat([{
                            name: f[d].name,
                            type: c.ApplicationCommandOptionType.SUB_COMMAND_GROUP,
                            displayName: null !== (n = f[d].name_localized) && void 0 !== n ? n : f[d].name
                        }]),
                        useKeyedPermissions: s
                    })));
                    for (var _ = i.options.filter(function(e) {
                            return e.type === c.ApplicationCommandOptionType.SUB_COMMAND
                        }), E = 0; E < _.length; E++) l.push(A({
                        rootCommand: o,
                        command: _[E],
                        applicationId: a,
                        subCommandPath: (null != u ? u : []).concat([{
                            name: _[E].name,
                            type: c.ApplicationCommandOptionType.SUB_COMMAND,
                            displayName: null !== (r = _[E].name_localized) && void 0 !== r ? r : _[E].name
                        }]),
                        useKeyedPermissions: s
                    }));
                    return 0 === f.length && 0 === _.length && l.push(A({
                        rootCommand: o,
                        command: i,
                        applicationId: a,
                        subCommandPath: u,
                        useKeyedPermissions: s
                    })), l
                }({
                    rootCommand: e,
                    command: e,
                    applicationId: e.application_id,
                    subCommandPath: void 0,
                    useKeyedPermissions: t
                })
        })
    }

    function N(e) {
        return h.ID_REGEX.test(e.trim())
    }

    function R(e, t, n, r) {
        var o = [];
        return s()(e).forEach(function(e) {
            t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && o.push(e)
        }), o.slice(0, r)
    }

    function C(e) {
        var t = e.type === c.ApplicationCommandOptionType.STRING,
            n = e.type === c.ApplicationCommandOptionType.CHANNEL,
            r = e.type === c.ApplicationCommandOptionType.USER || e.type === c.ApplicationCommandOptionType.MENTIONABLE,
            o = e.type === c.ApplicationCommandOptionType.ROLE || e.type === c.ApplicationCommandOptionType.MENTIONABLE;
        return {
            canMentionEveryone: t || o,
            canMentionHere: t,
            canMentionChannels: t || n,
            canMentionUsers: t || r,
            canMentionRoles: t || o,
            canMentionAnyGuildUser: r,
            canMentionNonMentionableRoles: o
        }
    }

    function P(e) {
        return o()(e).subtract(1).toString()
    }

    function D(e, t, n, r) {
        if (n) return !1;
        if (r.isMultiUserDM()) return F({
            location: "canUseApplicationCommands"
        }, {
            autoTrackExposure: !1
        }) || t.getIntegrations(r.id).length > 0;
        if (r.isDM()) return !r.isSystemDM() && (null != r.rawRecipients.find(function(e) {
            return e.bot
        }) || F({
            location: "canUseApplicationCommands"
        }, {
            autoTrackExposure: !1
        }) || t.getIntegrations(r.id).length > 0);
        return r.isArchivedLockedThread() ? e.can(l.combine(O.Permissions.USE_APPLICATION_COMMANDS, O.Permissions.MANAGE_THREADS), r) : !!(0, _.isReadableType)(r.type) && e.can(l.combine(O.Permissions.USE_APPLICATION_COMMANDS, O.Permissions.SEND_MESSAGES), r)
    }
    var L = l.deserialize(0);

    function M(e) {
        var t = e.PermissionStore,
            n = e.guild,
            r = e.selfMember,
            o = e.applicationLevelPermissions,
            i = e.commandLevelPermissions,
            a = e.defaultMemberPermissions;
        if (n.ownerId === r.userId || t.can(O.Permissions.ADMINISTRATOR, n)) return !0;
        var u = n.id;
        if (null != i) {
            var s = U(r, u, i);
            if ("boolean" == typeof s) return s
        }
        var c = U(r, u, o);
        return ("boolean" != typeof c || !!c) && (null == a || !l.equals(a, L) && t.can(a, n))
    }

    function U(e, t, n) {
        var r = n[(0, d.toPermissionKey)(e.userId, p.ApplicationCommandPermissionType.USER)];
        if (null != r) return r.permission;
        var o = !1,
            i = !0,
            a = !1,
            u = void 0;
        try {
            for (var s, l = e.roles[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                var c = s.value,
                    f = n[(0, d.toPermissionKey)(c, p.ApplicationCommandPermissionType.ROLE)];
                if (null != f && (o = !0, f.permission)) return !0
            }
        } catch (e) {
            a = !0, u = e
        } finally {
            try {
                !i && null != l.return && l.return()
            } finally {
                if (a) throw u
            }
        }
        if (o) return !1;
        var _ = n[(0, d.toPermissionKey)(t, p.ApplicationCommandPermissionType.ROLE)];
        return null != _ ? _.permission : null
    }

    function w(e) {
        switch (e) {
            case p.CommandOrigin.CHAT:
                return E.DraftType.SlashCommand;
            case p.CommandOrigin.APPLICATION_LAUNCHER:
                return E.DraftType.ApplicationLauncherCommand
        }
    }

    function k(e) {
        if (null != e) {
            if (e.id === I.BuiltInSectionId.BUILT_IN) return p.ApplicationCommandTriggerSections.BUILT_IN;
            else if (e.id === I.BuiltInSectionId.FRECENCY) return p.ApplicationCommandTriggerSections.FRECENCY;
            else return p.ApplicationCommandTriggerSections.APP
        }
    }

    function G(e) {
        var t, n;
        return {
            type: p.ApplicationCommandSectionType.APPLICATION,
            id: e.id,
            name: null !== (n = null == e ? void 0 : null === (t = e.bot) || void 0 === t ? void 0 : t.username) && void 0 !== n ? n : e.name,
            icon: e.icon,
            application: e
        }
    }

    function B(e) {
        var t = e.id,
            n = e.options,
            r = null == n ? void 0 : n.find(function(e) {
                return e.type === c.ApplicationCommandOptionType.SUB_COMMAND_GROUP
            });
        null != r && (t += "".concat(I.SUB_COMMAND_KEY_SEPARATOR).concat(r.name), n = r.options);
        var o = null == n ? void 0 : n.find(function(e) {
            return e.type === c.ApplicationCommandOptionType.SUB_COMMAND
        });
        return null != o && (t += "".concat(I.SUB_COMMAND_KEY_SEPARATOR).concat(o.name), n = o.options), {
            commandKey: t,
            interactionOptions: n
        }
    }

    function j(e, t) {
        return m.default.useExperiment(e, t).userAppsTreatment === m.UserAppsTreatment.ALLOWED
    }

    function F(e, t) {
        return m.default.getCurrentConfig(e, t).userAppsTreatment === m.UserAppsTreatment.ALLOWED
    }

    function V(e, t, n) {
        var r = y.default.useExperiment(S({
            guildId: null != e ? e : h.EMPTY_STRING_SNOWFLAKE_ID
        }, t), n);
        return null == e || r.userAppsTreatment === m.UserAppsTreatment.ALLOWED
    }

    function H(e, t, n) {
        return null == e || y.default.getCurrentConfig(S({
            guildId: e
        }, t), n).userAppsTreatment === m.UserAppsTreatment.ALLOWED
    }

    function x(e) {
        var t, n, r = e.command,
            o = e.location,
            i = e.triggerSection,
            a = e.queryLength;
        (0, f.trackWithMetadata)(h.AnalyticEvents.APPLICATION_COMMAND_SELECTED, {
            command_id: null !== (n = null === (t = r.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : r.id,
            application_id: r.applicationId,
            location: o,
            section: i,
            query_length: a,
            command_text_length: r.displayName.length
        })
    }
}