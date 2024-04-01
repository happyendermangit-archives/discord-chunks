function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useContextIndexState: function() {
            return X
        },
        useDiscoveryState: function() {
            return J
        },
        useGuildIndexState: function() {
            return Q
        },
        useUserIndexState: function() {
            return q
        }
    }), n("47120"), n("653041"), n("390547");
    var i, r, s, a = n("470079"),
        o = n("512722"),
        l = n.n(o),
        u = n("259443"),
        d = n("442837"),
        _ = n("570140"),
        c = n("749210");
    n("911969");
    var E = n("822245"),
        I = n("399860"),
        T = n("706454"),
        f = n("675478"),
        S = n("592125"),
        A = n("430824"),
        h = n("594174"),
        m = n("626135"),
        N = n("254711"),
        O = n("700089"),
        p = n("654455"),
        R = n("963456"),
        C = n("367790"),
        g = n("895924"),
        L = n("581364"),
        D = n("807169"),
        v = n("104793"),
        M = n("689079"),
        y = n("981631");

    function P(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let U = new u.Logger("ApplicationCommandIndexStore"),
        b = Symbol("currentUser"),
        G = Symbol("stale"),
        w = Symbol("current"),
        B = Object.freeze({
            descriptors: [],
            commands: [],
            sectionedCommands: [],
            loading: !0
        }),
        k = Object.freeze({
            serverVersion: w,
            fetchState: {
                fetching: !1
            },
            result: {
                sections: {},
                sectionIdsByBotId: {},
                version: w
            }
        }),
        V = Object.freeze({
            serverVersion: G,
            fetchState: {
                fetching: !1
            }
        }),
        F = {
            sensitivity: "accent",
            numeric: !0
        };

    function x(e) {
        switch (e.type) {
            case "guild":
                return e.guildId;
            case "channel":
                return e.channelId;
            case "user":
                return b
        }
    }

    function H(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = x(e),
            r = z.indices[i];
        return null != r ? ("fetchState" in t && r.fetchState.fetching && r.fetchState.abort.abort(), z.indices[i] = {
            ...r,
            ...t
        }) : n && (z.indices[i] = {
            serverVersion: G,
            fetchState: {
                fetching: !1
            },
            ...t
        }), r
    }

    function Y(e) {
        let t = x(e),
            n = z.indices[t];
        (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete z.indices[t]
    }

    function j() {
        for (let e of Object.values(z.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
        z.indices = {}
    }

    function W() {
        H({
            type: "user"
        }, {
            serverVersion: G
        })
    }
    class K extends(i = d.default.Store) {
        initialize() {
            this.waitFor(T.default), this.syncWith([T.default], () => {
                ! function() {
                    let e = T.default.locale;
                    e !== z.oldLocale && (j(), z.collator = new Intl.Collator(e, {
                        sensitivity: "accent",
                        numeric: !0
                    }), z.oldLocale = e)
                }()
            })
        }
        getContextState(e) {
            var t, n;
            return null != e && et(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : V : k
        }
        getUserState() {
            var e;
            return (0, L.isUserInUserAppExperiment)({
                location: "getUserState"
            }, {
                autoTrackExposure: !1
            }) ? null !== (e = this.indices[b]) && void 0 !== e ? e : V : k
        }
        query(e, t, n) {
            if (null == h.default.getCurrentUser()) return B;
            let i = this.getContextState(e),
                r = this.getUserState(),
                s = (0, D.buildPermissionContext)(e, t.commandType),
                a = !1 !== t.applicationCommands && s.hasBaseAccessPermissions,
                o = !1;
            n.allowFetch && (a && et(e) && (m.default.track(y.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                miss: null == i.result,
                size: Object.keys(z.indices).length
            }), en(i) && (null != e.guild_id ? (0, R.requestApplicationCommandIndex)({
                type: "guild",
                guildId: e.guild_id
            }) : (0, R.requestApplicationCommandIndex)({
                type: "channel",
                channelId: e.id
            }), o = !0)), (0, L.isUserInUserAppExperiment)({
                location: "query"
            }) && en(r) && ((0, R.requestApplicationCommandIndex)({
                type: "user"
            }), o = !0));
            let l = $({
                permissionContext: s,
                text: t.text,
                allowApplicationCommands: a,
                builtIns: t.builtIns,
                scoreMethod: n.scoreMethod,
                allowEmptySections: n.allowEmptySections,
                contextState: i,
                userState: r
            });
            return l.loading = l.loading || o, l
        }
        constructor(...e) {
            super(...e), P(this, "indices", {}), P(this, "oldLocale", T.default.locale), P(this, "collator", new Intl.Collator(T.default.locale, F))
        }
    }
    P(K, "displayName", "ApplicationCommandIndexStore");
    let z = new K(_.default, {
        LOGOUT: j,
        CONNECTION_OPEN: function() {
            for (let e of Object.values(z.indices)) e.serverVersion = G
        },
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
            var t;
            let {
                target: n,
                start: i
            } = e;
            if (en(null !== (t = z.indices[x(n)]) && void 0 !== t ? t : V)) {
                let e = new AbortController;
                H(n, {
                    fetchState: {
                        fetching: !0,
                        abort: e
                    }
                }, !0), (0, R.fetchApplicationCommandIndex)(n, i, e)
            }
        },
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
            var t, n;
            let {
                target: i,
                index: r
            } = e, s = null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            if (null == s) return !1;
            let a = {},
                o = {},
                l = new Set;
            for (let e of r.applications) {
                if (null == e.bot && null != e.bot_id) {
                    o[e.bot_id] = e.id;
                    let t = h.default.getUser(e.bot_id);
                    null != t ? e.bot = t : l.add(e.bot_id)
                } else null != e.bot && (o[e.bot.id] = e.id);
                let t = {
                    descriptor: {
                        ...(0, L.getApplicationCommandSection)(function(e) {
                            return {
                                description: e.description,
                                icon: e.icon,
                                id: e.id,
                                name: e.name,
                                bot: e.bot
                            }
                        }(e)),
                        permissions: null != e.permissions ? (0, I.keyPermissions)(es(e.permissions, s)) : void 0,
                        botId: e.bot_id
                    },
                    commands: {}
                };
                a[e.id] = t
            }
            for (let e of ("guild" === i.type && l.size > 0 && c.default.requestMembersById(i.guildId, [...l]), (0, L.buildApplicationCommands)(r.application_commands.map(e => (function(e, t) {
                    var n, i, r, s, a;
                    let o = {
                        ...e,
                        description: null !== (r = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== r ? r : "",
                        dm_permission: e.dm_permission,
                        name: null !== (s = e.name_default) && void 0 !== s ? s : e.name,
                        options: null !== (a = null === (n = e.options) || void 0 === n ? void 0 : n.map(ei)) && void 0 !== a ? a : [],
                        permissions: null != e.permissions ? es(e.permissions, t) : void 0
                    };
                    return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o
                })(e, s)), !0))) {
                let t = a[e.applicationId];
                if (null == t) {
                    U.error("Command has no matching application");
                    continue
                }
                t.commands[e.id] = e
            }
            let u = null !== (n = r.version) && void 0 !== n ? n : w;
            H(i, {
                serverVersion: u,
                result: {
                    sections: a,
                    sectionIdsByBotId: o,
                    version: u
                },
                fetchState: {
                    fetching: !1
                }
            })
        },
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
            let {
                target: t
            } = e;
            H(t, {
                fetchState: {
                    fetching: !1,
                    retryAfter: Date.now() + 5e3
                }
            })
        },
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function(e) {
            let t, {
                channelId: n,
                guildId: i
            } = e;
            H(t = null != i ? {
                type: "guild",
                guildId: i
            } : {
                type: "channel",
                channelId: n
            }, {
                serverVersion: G
            })
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            Y({
                type: "channel",
                channelId: t.id
            })
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            Y({
                type: "guild",
                guildId: t.id
            })
        },
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
            var t;
            let {
                guildId: n,
                version: i
            } = e, r = H({
                type: "guild",
                guildId: n
            }, {
                serverVersion: null != i ? i : G
            }), s = null == r ? void 0 : null === (t = r.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
            if (null != s)
                for (let e in s) {
                    let t = S.default.getDMFromUserId(e);
                    null != t && H({
                        type: "channel",
                        channelId: t
                    }, {
                        serverVersion: G
                    })
                }
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            let {
                guildId: t,
                members: n
            } = e;
            return function(e, t) {
                var n;
                let i = x({
                        type: "guild",
                        guildId: e
                    }),
                    r = null === (n = z.indices[i]) || void 0 === n ? void 0 : n.result;
                if (null == r) return !1;
                let s = !1;
                return t.forEach(e => {
                    let {
                        user: t
                    } = e;
                    if (!t.bot) return;
                    let n = r.sectionIdsByBotId[t.id];
                    if (null == n) return;
                    let i = r.sections[n];
                    l()(null != i, "Bot has no matching index section"), l()(null != i.descriptor.application, "Bot's index section has no application info");
                    let a = (0, L.getApplicationCommandSection)({
                        ...i.descriptor.application,
                        bot: t
                    });
                    i.descriptor = {
                        ...i.descriptor,
                        ...a
                    }, s = !0
                }), s
            }(t, n)
        },
        USER_APPLICATION_UPDATE: W,
        USER_APPLICATION_REMOVE: W
    });

    function X(e, t, n) {
        let [i, r] = a.useState(!0), s = (0, d.useStateFromStoresObject)([z], () => z.getContextState(e));
        return a.useEffect(() => {
            i && null != e && (n && t && et(e) && (m.default.track(y.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                miss: null == s.result,
                size: Object.keys(z.indices).length
            }), en(s) && (null != e.guild_id ? (0, R.requestApplicationCommandIndex)({
                type: "guild",
                guildId: e.guild_id
            }) : (0, R.requestApplicationCommandIndex)({
                type: "channel",
                channelId: e.id
            }))), r(!1))
        }, [s, n, e, t, i]), s
    }

    function Q(e, t) {
        let [n, i] = a.useState(!0), r = (0, d.useStateFromStoresObject)([z], () => {
            var t;
            return null !== (t = z.indices[e]) && void 0 !== t ? t : V
        });
        return a.useEffect(() => {
            n && null != e && (t && (m.default.track(y.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                miss: null == r.result,
                size: Object.keys(z.indices).length
            }), en(r) && (0, R.requestApplicationCommandIndex)({
                type: "guild",
                guildId: e
            })), i(!1))
        }, [r, t, e, n]), r
    }

    function q(e, t) {
        let [n, i] = a.useState(!0), r = (0, d.useStateFromStoresObject)([z], () => z.getUserState()), s = (0, L.useIsUserInUserAppExperiment)({
            location: "useUserIndexState"
        });
        return a.useEffect(() => {
            n && (t && en(r) && e && s && (0, R.requestApplicationCommandIndex)({
                type: "user"
            }), i(!1))
        }, [r, t, e, s, n]), r
    }

    function J(e, t, n, i) {
        let {
            descriptors: r,
            commands: s,
            sectionedCommands: o,
            loading: l
        } = function(e, t, n) {
            let i = (0, D.usePermissionContext)(e, t.commandType),
                r = !1 !== t.applicationCommands && i.hasBaseAccessPermissions,
                s = X(e, r, n.allowFetch),
                o = q(r, n.allowFetch);
            return a.useMemo(() => $({
                permissionContext: i,
                text: t.text,
                allowApplicationCommands: r,
                builtIns: t.builtIns,
                scoreMethod: n.scoreMethod,
                allowEmptySections: n.allowEmptySections,
                contextState: s,
                userState: o,
                sortOptions: n.sortOptions
            }), [i, t.text, t.builtIns, r, n.scoreMethod, n.allowEmptySections, n.sortOptions, s, o])
        }(e, n, i), u = (0, O.useTopCommands)({
            channel: e,
            guild: t
        });
        return a.useMemo(() => {
            if (!i.includeFrecency || 0 === u.length) return {
                descriptors: r,
                commands: s,
                sectionedCommands: o,
                loading: l
            };
            let n = {
                    channel: e,
                    guild: t
                },
                a = s.filter(e => u.includes(e.id)).sort((e, t) => {
                    let i = p.default.getScoreWithoutLoadingLatest(n, e);
                    return p.default.getScoreWithoutLoadingLatest(n, t) - i
                }).splice(0, M.DISCOVERY_COMMANDS_FRECENCY_LIMIT);
            return 0 === a.length ? {
                descriptors: r,
                commands: s,
                sectionedCommands: o,
                loading: l
            } : {
                descriptors: [N.BUILT_IN_SECTIONS[M.BuiltInSectionId.FRECENCY], ...r],
                commands: a.concat(s),
                sectionedCommands: [{
                    section: N.BUILT_IN_SECTIONS[M.BuiltInSectionId.FRECENCY],
                    data: a
                }, ...o],
                loading: l
            }
        }, [l, i.includeFrecency, u, e, t, s, r, o])
    }
    t.default = z;
    let Z = Object.freeze({
        applications: {
            useFrecency: !1,
            useScore: !1
        },
        commands: {
            useFrecency: !0,
            useScore: !0
        }
    });

    function $(e) {
        let {
            permissionContext: t,
            contextState: n,
            userState: i,
            text: r,
            builtIns: s = C.BuiltInCommandFilter.ALLOW,
            allowApplicationCommands: a = !0,
            allowEmptySections: o = !1,
            scoreMethod: u = C.ScoreMethod.NONE,
            sortOptions: d = Z
        } = e, {
            commandType: _
        } = t, c = null == r ? void 0 : r.toLowerCase(), I = null == c ? void 0 : c.split(" "), T = s === C.BuiltInCommandFilter.ONLY_TEXT, S = s !== C.BuiltInCommandFilter.DENY ? (0, N.getBuiltInCommands)(_, !0, T) : [], h = [], m = {
            permissionContext: t,
            query: c,
            splitQuery: I,
            allowEmptySections: o,
            scoreMethod: u
        };
        if (a) {
            var O, R, g, L;
            let e = null !== (g = null === (O = n.result) || void 0 === O ? void 0 : O.sections) && void 0 !== g ? g : {},
                t = null !== (L = null === (R = i.result) || void 0 === R ? void 0 : R.sections) && void 0 !== L ? L : {};
            for (let n of [...Object.keys(e), ...Object.keys(t).filter(t => !(t in e))]) {
                let i, r;
                let s = e[n],
                    a = t[n];
                if (null != s && null != a) {
                    for (let e in i = a.descriptor, r = [], a.commands) {
                        let t = a.commands[e];
                        r.push(t)
                    }
                    for (let e in s.commands)
                        if (!(e in a.commands)) {
                            let t = s.commands[e];
                            r.push(t)
                        }
                } else null != s ? (i = s.descriptor, r = Object.values(s.commands)) : null != a && (i = a.descriptor, r = Object.values(a.commands));
                l()(null != i, "Failed to select application descriptor"), l()(null != r, "Failed to select list of application commands");
                let o = ee(i, r, m);
                null != o && h.push(o)
            }
            d.applications.useFrecency && f.FrecencyUserSettingsActionCreators.loadIfNecessary(), h.sort((e, t) => {
                if (d.applications.useScore && u === C.ScoreMethod.APPLICATION_ONLY) {
                    var n, i, r, s;
                    let a = null !== (r = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== r ? r : Number.MAX_VALUE,
                        o = null !== (s = null === (i = t.data[0]) || void 0 === i ? void 0 : i.score) && void 0 !== s ? s : Number.MAX_VALUE;
                    if (a !== o) return a - o
                }
                if (d.applications.useFrecency) {
                    let n = E.default.getScoreWithoutLoadingLatest(e.section.id),
                        i = E.default.getScoreWithoutLoadingLatest(t.section.id);
                    if (n !== i) return i - n
                }
                return ea(e.section.name, t.section.name)
            })
        }
        if (S.length > 0 || !0 === o) {
            let e = ee(N.BUILT_IN_SECTIONS[M.BuiltInSectionId.BUILT_IN], S, m);
            null != e && h.push(e)
        }
        let D = h.flatMap(e => e.data.map(t => ({
            ...t,
            section: e.section
        })));
        if (u === C.ScoreMethod.COMMAND_ONLY || u === C.ScoreMethod.COMMAND_OR_APPLICATION) {
            let e = t.context,
                n = A.default.getGuild(t.context.guild_id);
            d.commands.useFrecency && f.FrecencyUserSettingsActionCreators.loadIfNecessary(), D.sort((t, i) => {
                if (d.commands.useScore) {
                    var r, s;
                    let e = null !== (r = t.score) && void 0 !== r ? r : 0,
                        n = null !== (s = i.score) && void 0 !== s ? s : 0;
                    if (e !== n) return e - n
                }
                if (d.commands.useFrecency) {
                    let r = p.default.getScoreWithoutLoadingLatest({
                            channel: e,
                            guild: n
                        }, t),
                        s = p.default.getScoreWithoutLoadingLatest({
                            channel: e,
                            guild: n
                        }, i);
                    if (r !== s) return s - r
                }
                return ea(t.displayName, i.displayName)
            })
        }
        return {
            commands: D,
            descriptors: h.map(e => e.section),
            sectionedCommands: h,
            loading: (null == n ? void 0 : n.fetchState.fetching) === !0 || (null == i ? void 0 : i.fetchState.fetching) === !0
        }
    }

    function ee(e, t, n) {
        let i, {
                query: r,
                splitQuery: s,
                allowEmptySections: a,
                scoreMethod: o,
                permissionContext: l
            } = n,
            {
                context: u,
                userId: d,
                roleIds: _,
                isImpersonating: c
            } = l,
            E = null != u.guild_id ? v.computeAllowedForUser(e.permissions, u.guild_id, d, _, c) : null,
            I = null != u.guild_id ? v.computeAllowedForChannel(e.permissions, u, u.guild_id) : null,
            T = [];
        for (let n of t) v.hasAccess(n, l, E, I, e.botId) === v.HasAccessResult.ALLOWED && T.push(n);
        return 0 !== (i = o !== C.ScoreMethod.NONE && null != r && null != s ? function(e, t, n, i, r) {
            let s;
            let a = [];
            if (r === C.ScoreMethod.APPLICATION_ONLY || r === C.ScoreMethod.COMMAND_OR_APPLICATION) {
                let t = i.name.toLocaleLowerCase();
                t.startsWith(e) ? s = 5 : t.includes(e) && (s = 6)
            }
            let o = t[0],
                l = t.slice(1).join(" ");
            for (let t of n) {
                let n;
                if (r === C.ScoreMethod.COMMAND_ONLY || r === C.ScoreMethod.COMMAND_OR_APPLICATION) {
                    var u;
                    n = null !== (u = function(e, t, n, i) {
                        var r;
                        let s = e.name,
                            a = e.displayName;
                        if (s.startsWith(t) || a.startsWith(t)) return 0;
                        if (s.startsWith(n) && s.split(" ").slice(1).join(" ").startsWith(i) || a.startsWith(n) && a.split(" ").slice(1).join(" ").startsWith(i)) return 1;
                        if (s.includes(t) || (null == a ? void 0 : a.includes(t))) return 2;
                        let o = !1;
                        for (let {
                                name: n,
                                serverLocalizedName: i
                            }
                            of null !== (r = e.options) && void 0 !== r ? r : []) {
                            if (n.startsWith(t) || "".concat(s, " ").concat(n).startsWith(t) || null != a && "".concat(a, " ").concat(n).startsWith(t) || null != i && (i.startsWith(t) || "".concat(s, " ").concat(i).startsWith(t) || null != a && "".concat(a, " ").concat(i).startsWith(t))) return 3;
                            (n.includes(t) || (null == i ? void 0 : i.includes(t))) && (o = !0)
                        }
                        if (o) return 4
                    }(t, e, o, l)) && void 0 !== u ? u : s
                } else n = s;
                void 0 !== n && a.push({
                    ...t,
                    score: n
                })
            }
            return a
        }(r, s, T, e, o) : T).length || a ? ((o === C.ScoreMethod.NONE || o === C.ScoreMethod.APPLICATION_ONLY) && i.sort((e, t) => ea(e.displayName, t.displayName)), {
            section: e,
            data: i
        }) : null
    }

    function et(e) {
        var t;
        return null != e.guild_id || e.type === y.ChannelTypes.DM && (null === (t = h.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
    }

    function en(e) {
        return !! function(e) {
            var t;
            return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
        }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    }

    function ei(e) {
        var t, n, i, r;
        let s = {
            ...e,
            choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(er),
            description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
            name: null !== (r = e.name_default) && void 0 !== r ? r : e.name,
            options: null === (n = e.options) || void 0 === n ? void 0 : n.map(ei)
        };
        return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s
    }

    function er(e) {
        var t;
        let n = {
            ...e,
            name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
        };
        return e.name !== e.name_default && (n.name_localized = e.name), n
    }

    function es(e, t) {
        let n = [];
        if (null != e.user && n.push({
                type: g.ApplicationCommandPermissionType.USER,
                id: t,
                permission: e.user
            }), null != e.channels)
            for (let [t, i] of Object.entries(e.channels)) n.push({
                type: g.ApplicationCommandPermissionType.CHANNEL,
                id: t,
                permission: i
            });
        if (null != e.roles)
            for (let [t, i] of Object.entries(e.roles)) n.push({
                type: g.ApplicationCommandPermissionType.ROLE,
                id: t,
                permission: i
            });
        return n
    }(s = r || (r = {}))[s.COMMAND_NAME_STARTS_WITH = 0] = "COMMAND_NAME_STARTS_WITH", s[s.STARTS_WITH_COMMAND_NAME = 1] = "STARTS_WITH_COMMAND_NAME", s[s.COMMAND_NAME_CONTAINS = 2] = "COMMAND_NAME_CONTAINS", s[s.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3] = "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", s[s.OPTION_NAME_CONTAINS = 4] = "OPTION_NAME_CONTAINS", s[s.SECTION_NAME_STARTS_WITH = 5] = "SECTION_NAME_STARTS_WITH", s[s.SECTION_NAME_CONTAINS = 6] = "SECTION_NAME_CONTAINS";

    function ea(e, t) {
        return z.collator.compare(e, t)
    }
}