function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useContextIndexState: function() {
            return q
        },
        useDiscoveryState: function() {
            return $
        },
        useGuildIndexState: function() {
            return Z
        },
        useUserIndexState: function() {
            return J
        }
    }), n("47120"), n("653041"), n("390547");
    var i, r, s, a = n("470079"),
        o = n("512722"),
        l = n.n(o),
        u = n("259443"),
        d = n("442837"),
        _ = n("570140"),
        c = n("749210"),
        E = n("911969"),
        I = n("822245"),
        T = n("399860"),
        f = n("706454"),
        S = n("675478"),
        h = n("592125"),
        A = n("430824"),
        m = n("594174"),
        N = n("626135"),
        p = n("254711"),
        O = n("700089"),
        R = n("654455"),
        C = n("963456"),
        g = n("367790"),
        L = n("895924"),
        D = n("581364"),
        v = n("807169"),
        M = n("104793"),
        y = n("689079"),
        P = n("981631"),
        U = n("674563");

    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let G = new u.Logger("ApplicationCommandIndexStore"),
        w = Symbol("currentUser"),
        B = Symbol("stale"),
        k = Symbol("current"),
        V = Object.freeze({
            descriptors: [],
            commands: [],
            sectionedCommands: [],
            loading: !0
        }),
        x = Object.freeze({
            serverVersion: k,
            fetchState: {
                fetching: !1
            },
            result: {
                sections: {},
                sectionIdsByBotId: {},
                version: k
            }
        }),
        F = Object.freeze({
            serverVersion: B,
            fetchState: {
                fetching: !1
            }
        }),
        H = {
            sensitivity: "accent",
            numeric: !0
        };

    function Y(e) {
        switch (e.type) {
            case "guild":
                return e.guildId;
            case "channel":
                return e.channelId;
            case "user":
                return w;
            case "application":
                return e.applicationId
        }
    }

    function j(e, t) {
        let n, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = Y(e),
            s = Q.indices[r];
        return null != s ? ("fetchState" in t && s.fetchState.fetching && s.fetchState.abort.abort(), n = {
            ...s,
            ...t
        }) : i && (n = {
            serverVersion: B,
            fetchState: {
                fetching: !1
            },
            ...t
        }), void 0 !== n && (Q.indices[r] = n, "application" === e.type && Q.applicationIndices.set(r, n)), s
    }

    function W(e) {
        let t = Y(e),
            n = Q.indices[t];
        (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete Q.indices[t]
    }

    function K() {
        for (let e of Object.values(Q.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
        Q.indices = {}
    }

    function z() {
        j({
            type: "user"
        }, {
            serverVersion: B
        })
    }
    class X extends(i = d.default.Store) {
        initialize() {
            this.waitFor(f.default), this.syncWith([f.default], () => {
                ! function() {
                    let e = f.default.locale;
                    e !== Q.oldLocale && (K(), Q.collator = new Intl.Collator(e, {
                        sensitivity: "accent",
                        numeric: !0
                    }), Q.oldLocale = e)
                }()
            })
        }
        getContextState(e) {
            var t, n;
            return null != e && ei(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : F : x
        }
        getUserState() {
            var e;
            return (0, D.isUserInUserAppExperiment)({
                location: "getUserState"
            }, {
                autoTrackExposure: !1
            }) ? null !== (e = this.indices[w]) && void 0 !== e ? e : F : x
        }
        getApplicationState(e) {
            var t;
            return null == e ? x : null !== (t = this.indices[e]) && void 0 !== t ? t : F
        }
        getApplicationStates() {
            return this.applicationIndices
        }
        query(e, t, n) {
            if (null == m.default.getCurrentUser()) return V;
            let i = this.getContextState(e),
                r = this.getUserState(),
                s = this.getApplicationState(n.applicationId),
                a = this.getApplicationStates(),
                o = (0, v.buildPermissionContext)(e, t.commandType),
                l = !1 !== t.applicationCommands && o.hasBaseAccessPermissions,
                u = !1;
            n.allowFetch && (l && ei(e) && (N.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                miss: null == i.result,
                size: Object.keys(Q.indices).length
            }), er(i) && (null != e.guild_id ? (0, C.requestApplicationCommandIndex)({
                type: "guild",
                guildId: e.guild_id
            }) : (0, C.requestApplicationCommandIndex)({
                type: "channel",
                channelId: e.id
            }), u = !0)), (0, D.isUserInUserAppExperiment)({
                location: "query"
            }) && er(r) && ((0, C.requestApplicationCommandIndex)({
                type: "user"
            }), u = !0), er(s) && null != n.applicationId && ((0, C.requestApplicationCommandIndex)({
                type: "application",
                applicationId: n.applicationId
            }), u = !0));
            let d = et({
                permissionContext: o,
                text: t.text,
                allowApplicationCommands: l,
                builtIns: t.builtIns,
                scoreMethod: n.scoreMethod,
                allowEmptySections: n.allowEmptySections,
                contextState: i,
                userState: r,
                applicationStates: a
            });
            return d.loading = d.loading || u, d
        }
        maybeQueryForInstallLessApps(e, t) {
            let n = h.default.getChannel(t),
                i = U.INSTALL_LESS_APP_IDS.includes(e) ? e : void 0;
            null != n && null != i && this.query(n, {
                commandType: E.ApplicationCommandType.CHAT
            }, {
                placeholderCount: 5,
                scoreMethod: g.ScoreMethod.COMMAND_ONLY,
                applicationId: i,
                allowFetch: !0
            })
        }
        constructor(...e) {
            super(...e), b(this, "indices", {}), b(this, "applicationIndices", new Map), b(this, "oldLocale", f.default.locale), b(this, "collator", new Intl.Collator(f.default.locale, H))
        }
    }
    b(X, "displayName", "ApplicationCommandIndexStore");
    let Q = new X(_.default, {
        LOGOUT: K,
        CONNECTION_OPEN: function() {
            for (let e of Object.values(Q.indices)) e.serverVersion = B
        },
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
            var t;
            let {
                target: n,
                start: i
            } = e;
            if (er(null !== (t = Q.indices[Y(n)]) && void 0 !== t ? t : F)) {
                let e = new AbortController;
                j(n, {
                    fetchState: {
                        fetching: !0,
                        abort: e
                    }
                }, !0), (0, C.fetchApplicationCommandIndex)(n, i, e)
            }
        },
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
            var t, n;
            let {
                target: i,
                index: r
            } = e, s = null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            if (null == s) return !1;
            let a = {},
                o = {},
                l = new Set;
            for (let e of r.applications) {
                if (null == e.bot && null != e.bot_id) {
                    o[e.bot_id] = e.id;
                    let t = m.default.getUser(e.bot_id);
                    null != t ? e.bot = t : l.add(e.bot_id)
                } else null != e.bot && (o[e.bot.id] = e.id);
                let t = {
                    descriptor: {
                        ...(0, D.getApplicationCommandSection)(function(e) {
                            return {
                                description: e.description,
                                icon: e.icon,
                                id: e.id,
                                name: e.name,
                                bot: e.bot
                            }
                        }(e)),
                        permissions: null != e.permissions ? (0, T.keyPermissions)(eo(e.permissions, s)) : void 0,
                        botId: e.bot_id
                    },
                    commands: {}
                };
                a[e.id] = t
            }
            for (let e of ("guild" === i.type && l.size > 0 && c.default.requestMembersById(i.guildId, [...l]), (0, D.buildApplicationCommands)(r.application_commands.map(e => (function(e, t) {
                    var n, i, r, s, a;
                    let o = {
                        ...e,
                        description: null !== (r = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== r ? r : "",
                        dm_permission: e.dm_permission,
                        name: null !== (s = e.name_default) && void 0 !== s ? s : e.name,
                        options: null !== (a = null === (n = e.options) || void 0 === n ? void 0 : n.map(es)) && void 0 !== a ? a : [],
                        permissions: null != e.permissions ? eo(e.permissions, t) : void 0
                    };
                    return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o
                })(e, s)), !0))) {
                let t = a[e.applicationId];
                if (null == t) {
                    G.error("Command has no matching application");
                    continue
                }
                t.commands[e.id] = e
            }
            let u = null !== (n = r.version) && void 0 !== n ? n : k;
            j(i, {
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
            j(t, {
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
            j(t = null != i ? {
                type: "guild",
                guildId: i
            } : {
                type: "channel",
                channelId: n
            }, {
                serverVersion: B
            })
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            W({
                type: "channel",
                channelId: t.id
            })
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            W({
                type: "guild",
                guildId: t.id
            })
        },
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
            var t;
            let {
                guildId: n,
                version: i
            } = e, r = j({
                type: "guild",
                guildId: n
            }, {
                serverVersion: null != i ? i : B
            }), s = null == r ? void 0 : null === (t = r.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
            if (null != s)
                for (let e in s) {
                    let t = h.default.getDMFromUserId(e);
                    null != t && j({
                        type: "channel",
                        channelId: t
                    }, {
                        serverVersion: B
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
                let i = Y({
                        type: "guild",
                        guildId: e
                    }),
                    r = null === (n = Q.indices[i]) || void 0 === n ? void 0 : n.result;
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
                    let a = (0, D.getApplicationCommandSection)({
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
        USER_APPLICATION_UPDATE: z,
        USER_APPLICATION_REMOVE: z
    });

    function q(e, t, n) {
        let [i, r] = a.useState(!0), s = (0, d.useStateFromStoresObject)([Q], () => Q.getContextState(e));
        return a.useEffect(() => {
            i && null != e && (n && t && ei(e) && (N.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                miss: null == s.result,
                size: Object.keys(Q.indices).length
            }), er(s) && (null != e.guild_id ? (0, C.requestApplicationCommandIndex)({
                type: "guild",
                guildId: e.guild_id
            }) : (0, C.requestApplicationCommandIndex)({
                type: "channel",
                channelId: e.id
            }))), r(!1))
        }, [s, n, e, t, i]), s
    }

    function Z(e, t) {
        let [n, i] = a.useState(!0), r = (0, d.useStateFromStoresObject)([Q], () => {
            var t;
            return null !== (t = Q.indices[e]) && void 0 !== t ? t : F
        });
        return a.useEffect(() => {
            n && null != e && (t && (N.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                miss: null == r.result,
                size: Object.keys(Q.indices).length
            }), er(r) && (0, C.requestApplicationCommandIndex)({
                type: "guild",
                guildId: e
            })), i(!1))
        }, [r, t, e, n]), r
    }

    function J(e, t) {
        let [n, i] = a.useState(!0), r = (0, d.useStateFromStoresObject)([Q], () => Q.getUserState()), s = (0, D.useIsUserInUserAppExperiment)({
            location: "useUserIndexState"
        });
        return a.useEffect(() => {
            n && (t && er(r) && e && s && (0, C.requestApplicationCommandIndex)({
                type: "user"
            }), i(!1))
        }, [r, t, e, s, n]), r
    }
    t.default = Q;

    function $(e, t, n, i) {
        let {
            descriptors: r,
            commands: s,
            sectionedCommands: o,
            loading: l
        } = function(e, t, n) {
            let i = (0, v.usePermissionContext)(e, t.commandType),
                r = !1 !== t.applicationCommands && i.hasBaseAccessPermissions,
                s = q(e, r, n.allowFetch),
                o = J(r, n.allowFetch),
                l = (0, d.useStateFromStores)([Q], () => Q.getApplicationStates());
            return a.useMemo(() => et({
                permissionContext: i,
                text: t.text,
                allowApplicationCommands: r,
                builtIns: t.builtIns,
                scoreMethod: n.scoreMethod,
                allowEmptySections: n.allowEmptySections,
                contextState: s,
                userState: o,
                applicationStates: l,
                sortOptions: n.sortOptions
            }), [i, t.text, t.builtIns, r, n.scoreMethod, n.allowEmptySections, n.sortOptions, s, o, l])
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
                    let i = R.default.getScoreWithoutLoadingLatest(n, e);
                    return R.default.getScoreWithoutLoadingLatest(n, t) - i
                }).splice(0, y.DISCOVERY_COMMANDS_FRECENCY_LIMIT);
            return 0 === a.length ? {
                descriptors: r,
                commands: s,
                sectionedCommands: o,
                loading: l
            } : {
                descriptors: [p.BUILT_IN_SECTIONS[y.BuiltInSectionId.FRECENCY], ...r],
                commands: a.concat(s),
                sectionedCommands: [{
                    section: p.BUILT_IN_SECTIONS[y.BuiltInSectionId.FRECENCY],
                    data: a
                }, ...o],
                loading: l
            }
        }, [l, i.includeFrecency, u, e, t, s, r, o])
    }
    let ee = Object.freeze({
        applications: {
            useFrecency: !1,
            useScore: !1
        },
        commands: {
            useFrecency: !0,
            useScore: !0
        }
    });

    function et(e) {
        let {
            permissionContext: t,
            contextState: n,
            userState: i,
            applicationStates: r,
            text: s,
            builtIns: a = g.BuiltInCommandFilter.ALLOW,
            allowApplicationCommands: o = !0,
            allowEmptySections: u = !1,
            scoreMethod: d = g.ScoreMethod.NONE,
            sortOptions: _ = ee
        } = e, {
            commandType: c
        } = t, E = null == s ? void 0 : s.toLowerCase(), T = null == E ? void 0 : E.split(" "), f = a === g.BuiltInCommandFilter.ONLY_TEXT, h = a !== g.BuiltInCommandFilter.DENY ? (0, p.getBuiltInCommands)(c, !0, f) : [], m = [], N = {
            permissionContext: t,
            query: E,
            splitQuery: T,
            allowEmptySections: u,
            scoreMethod: d
        };
        if (o) {
            var O, C, L, D, v;
            let e = null !== (L = null === (O = n.result) || void 0 === O ? void 0 : O.sections) && void 0 !== L ? L : {},
                t = null !== (D = null === (C = i.result) || void 0 === C ? void 0 : C.sections) && void 0 !== D ? D : {},
                s = new Set;
            for (let t in e) s.add(t);
            for (let e in t) s.add(e);
            let a = new Map;
            for (let [e, t] of r) {
                let e = null === (v = t.result) || void 0 === v ? void 0 : v.sections;
                if (null != e)
                    for (let t of Object.keys(e)) s.add(t), a.set(t, e[t])
            }
            for (let n of Array.from(s)) {
                let i, r;
                let s = e[n],
                    o = t[n],
                    u = a.get(n);
                if (null != s && null != o) {
                    for (let e in i = o.descriptor, r = [], o.commands) {
                        let t = o.commands[e];
                        r.push(t)
                    }
                    for (let e in s.commands)
                        if (!(e in o.commands)) {
                            let t = s.commands[e];
                            r.push(t)
                        }
                } else null != s ? (i = s.descriptor, r = Object.values(s.commands)) : null != o ? (i = o.descriptor, r = Object.values(o.commands)) : null != u && (i = u.descriptor, r = Object.values(u.commands));
                l()(null != i, "Failed to select application descriptor"), l()(null != r, "Failed to select list of application commands");
                let d = en(i, r, N);
                null != d && m.push(d)
            }
            _.applications.useFrecency && S.FrecencyUserSettingsActionCreators.loadIfNecessary(), m.sort((e, t) => {
                if (_.applications.useScore && d === g.ScoreMethod.APPLICATION_ONLY) {
                    var n, i, r, s;
                    let a = null !== (r = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== r ? r : Number.MAX_VALUE,
                        o = null !== (s = null === (i = t.data[0]) || void 0 === i ? void 0 : i.score) && void 0 !== s ? s : Number.MAX_VALUE;
                    if (a !== o) return a - o
                }
                if (_.applications.useFrecency) {
                    let n = I.default.getScoreWithoutLoadingLatest(e.section.id),
                        i = I.default.getScoreWithoutLoadingLatest(t.section.id);
                    if (n !== i) return i - n
                }
                return el(e.section.name, t.section.name)
            })
        }
        if (h.length > 0 || !0 === u) {
            let e = en(p.BUILT_IN_SECTIONS[y.BuiltInSectionId.BUILT_IN], h, N);
            null != e && m.push(e)
        }
        let M = m.flatMap(e => e.data.map(t => ({
            ...t,
            section: e.section
        })));
        if (d === g.ScoreMethod.COMMAND_ONLY || d === g.ScoreMethod.COMMAND_OR_APPLICATION) {
            let e = t.context,
                n = A.default.getGuild(t.context.guild_id);
            _.commands.useFrecency && S.FrecencyUserSettingsActionCreators.loadIfNecessary(), M.sort((t, i) => {
                if (_.commands.useScore) {
                    var r, s;
                    let e = null !== (r = t.score) && void 0 !== r ? r : 0,
                        n = null !== (s = i.score) && void 0 !== s ? s : 0;
                    if (e !== n) return e - n
                }
                if (_.commands.useFrecency) {
                    let r = R.default.getScoreWithoutLoadingLatest({
                            channel: e,
                            guild: n
                        }, t),
                        s = R.default.getScoreWithoutLoadingLatest({
                            channel: e,
                            guild: n
                        }, i);
                    if (r !== s) return s - r
                }
                return el(t.displayName, i.displayName)
            })
        }
        return {
            commands: M,
            descriptors: m.map(e => e.section),
            sectionedCommands: m,
            loading: (null == n ? void 0 : n.fetchState.fetching) === !0 || (null == i ? void 0 : i.fetchState.fetching) === !0
        }
    }

    function en(e, t, n) {
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
            E = null != u.guild_id ? M.computeAllowedForUser(e.permissions, u.guild_id, d, _, c) : null,
            I = null != u.guild_id ? M.computeAllowedForChannel(e.permissions, u, u.guild_id) : null,
            T = [];
        for (let n of t) M.hasAccess(n, l, E, I, e.botId) === M.HasAccessResult.ALLOWED && T.push(n);
        return 0 !== (i = o !== g.ScoreMethod.NONE && null != r && null != s ? function(e, t, n, i, r) {
            let s;
            let a = [];
            if (r === g.ScoreMethod.APPLICATION_ONLY || r === g.ScoreMethod.COMMAND_OR_APPLICATION) {
                let t = i.name.toLocaleLowerCase();
                t.startsWith(e) ? s = 5 : t.includes(e) && (s = 6)
            }
            let o = t[0],
                l = t.slice(1).join(" ");
            for (let t of n) {
                let n;
                if (r === g.ScoreMethod.COMMAND_ONLY || r === g.ScoreMethod.COMMAND_OR_APPLICATION) {
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
        }(r, s, T, e, o) : T).length || a ? ((o === g.ScoreMethod.NONE || o === g.ScoreMethod.APPLICATION_ONLY) && i.sort((e, t) => el(e.displayName, t.displayName)), {
            section: e,
            data: i
        }) : null
    }

    function ei(e) {
        var t;
        return null != e.guild_id || e.type === P.ChannelTypes.DM && (null === (t = m.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
    }

    function er(e) {
        return !! function(e) {
            var t;
            return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
        }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    }

    function es(e) {
        var t, n, i, r;
        let s = {
            ...e,
            choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(ea),
            description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
            name: null !== (r = e.name_default) && void 0 !== r ? r : e.name,
            options: null === (n = e.options) || void 0 === n ? void 0 : n.map(es)
        };
        return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s
    }

    function ea(e) {
        var t;
        let n = {
            ...e,
            name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
        };
        return e.name !== e.name_default && (n.name_localized = e.name), n
    }

    function eo(e, t) {
        let n = [];
        if (null != e.user && n.push({
                type: L.ApplicationCommandPermissionType.USER,
                id: t,
                permission: e.user
            }), null != e.channels)
            for (let [t, i] of Object.entries(e.channels)) n.push({
                type: L.ApplicationCommandPermissionType.CHANNEL,
                id: t,
                permission: i
            });
        if (null != e.roles)
            for (let [t, i] of Object.entries(e.roles)) n.push({
                type: L.ApplicationCommandPermissionType.ROLE,
                id: t,
                permission: i
            });
        return n
    }(s = r || (r = {}))[s.COMMAND_NAME_STARTS_WITH = 0] = "COMMAND_NAME_STARTS_WITH", s[s.STARTS_WITH_COMMAND_NAME = 1] = "STARTS_WITH_COMMAND_NAME", s[s.COMMAND_NAME_CONTAINS = 2] = "COMMAND_NAME_CONTAINS", s[s.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3] = "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", s[s.OPTION_NAME_CONTAINS = 4] = "OPTION_NAME_CONTAINS", s[s.SECTION_NAME_STARTS_WITH = 5] = "SECTION_NAME_STARTS_WITH", s[s.SECTION_NAME_CONTAINS = 6] = "SECTION_NAME_CONTAINS";

    function el(e, t) {
        return Q.collator.compare(e, t)
    }
}