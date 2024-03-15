function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return K
        },
        useContextIndexState: function() {
            return z
        },
        useGuildIndexState: function() {
            return q
        },
        useUserIndexState: function() {
            return X
        },
        useDiscoveryState: function() {
            return Q
        }
    }), n("222007"), n("424973"), n("881410");
    var i, l, a = n("884691"),
        o = n("627445"),
        s = n.n(o),
        r = n("811022"),
        u = n("446674"),
        d = n("913144"),
        c = n("851387");
    n("798609");
    var p = n("605393"),
        f = n("892692"),
        m = n("915639"),
        _ = n("872173"),
        I = n("42203"),
        T = n("305961"),
        A = n("697218"),
        E = n("599110"),
        C = n("589777"),
        N = n("369010"),
        g = n("342564"),
        M = n("9566"),
        O = n("972620"),
        S = n("524768"),
        h = n("389153"),
        y = n("123373"),
        v = n("217946"),
        D = n("317041"),
        R = n("49111");
    let L = new r.default("ApplicationCommandIndexStore"),
        P = Symbol("currentUser"),
        U = Symbol("stale"),
        b = Symbol("current"),
        B = Object.freeze({
            descriptors: [],
            commands: [],
            sectionedCommands: [],
            loading: !0
        }),
        x = Object.freeze({
            serverVersion: b,
            fetchState: {
                fetching: !1
            },
            result: {
                sections: {},
                sectionIdsByBotId: {},
                version: b
            }
        }),
        F = Object.freeze({
            serverVersion: U,
            fetchState: {
                fetching: !1
            }
        }),
        H = {
            sensitivity: "accent",
            numeric: !0
        };

    function w(e) {
        switch (e.type) {
            case "guild":
                return e.guildId;
            case "channel":
                return e.channelId;
            case "user":
                return P
        }
    }

    function G(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = w(e),
            l = j.indices[i];
        return null != l ? ("fetchState" in t && l.fetchState.fetching && l.fetchState.abort.abort(), j.indices[i] = {
            ...l,
            ...t
        }) : n && (j.indices[i] = {
            serverVersion: U,
            fetchState: {
                fetching: !1
            },
            ...t
        }), l
    }

    function k(e) {
        let t = w(e),
            n = j.indices[t];
        (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete j.indices[t]
    }

    function Y() {
        for (let e of Object.values(j.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
        j.indices = {}
    }

    function W() {
        G({
            type: "user"
        }, {
            serverVersion: U
        })
    }
    class V extends u.default.Store {
        initialize() {
            this.waitFor(m.default), this.syncWith([m.default], () => {
                ! function() {
                    let e = m.default.locale;
                    e !== j.oldLocale && (Y(), j.collator = new Intl.Collator(e, {
                        sensitivity: "accent",
                        numeric: !0
                    }), j.oldLocale = e)
                }()
            })
        }
        getContextState(e) {
            var t, n;
            return null != e && ee(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : F : x
        }
        getUserState() {
            var e;
            return (0, h.isUserInUserAppExperiment)({
                location: "getUserState"
            }, {
                autoTrackExposure: !1
            }) ? null !== (e = this.indices[P]) && void 0 !== e ? e : F : x
        }
        query(e, t, n) {
            let i = A.default.getCurrentUser();
            if (null == i) return B;
            let l = this.getContextState(e),
                a = this.getUserState(),
                o = (0, y.buildPermissionContext)(e, t.commandType),
                s = !1 !== t.applicationCommands && o.hasBaseAccessPermissions,
                r = !1;
            if (n.allowFetch) {
                let t = s && ee(e);
                t && (E.default.track(R.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == l.result,
                    size: Object.keys(j.indices).length
                }), et(l) && (null != e.guild_id ? (0, M.requestApplicationCommandIndex)({
                    type: "guild",
                    guildId: e.guild_id
                }) : (0, M.requestApplicationCommandIndex)({
                    type: "channel",
                    channelId: e.id
                }), r = !0)), (0, h.isUserInUserAppExperiment)({
                    location: "query"
                }) && et(a) && ((0, M.requestApplicationCommandIndex)({
                    type: "user"
                }), r = !0)
            }
            let u = J({
                permissionContext: o,
                text: t.text,
                allowApplicationCommands: s,
                builtIns: t.builtIns,
                scoreMethod: n.scoreMethod,
                allowEmptySections: n.allowEmptySections,
                contextState: l,
                userState: a
            });
            return u.loading = u.loading || r, u
        }
        constructor(...e) {
            super(...e), this.indices = {}, this.oldLocale = m.default.locale, this.collator = new Intl.Collator(m.default.locale, H)
        }
    }
    V.displayName = "ApplicationCommandIndexStore";
    let j = new V(d.default, {
        LOGOUT: Y,
        CONNECTION_OPEN: function() {
            for (let e of Object.values(j.indices)) e.serverVersion = U
        },
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
            var t;
            let {
                target: n,
                start: i
            } = e;
            if (et(null !== (t = j.indices[w(n)]) && void 0 !== t ? t : F)) {
                let e = new AbortController;
                G(n, {
                    fetchState: {
                        fetching: !0,
                        abort: e
                    }
                }, !0), (0, M.fetchApplicationCommandIndex)(n, i, e)
            }
        },
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
            var t, n;
            let {
                target: i,
                index: l
            } = e, a = null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            if (null == a) return !1;
            let o = {},
                s = {},
                r = new Set;
            for (let e of l.applications) {
                if (null == e.bot && null != e.bot_id) {
                    s[e.bot_id] = e.id;
                    let t = A.default.getUser(e.bot_id);
                    null != t ? e.bot = t : r.add(e.bot_id)
                } else null != e.bot && (s[e.bot.id] = e.id);
                let t = {
                    descriptor: {
                        ...(0, h.getApplicationCommandSection)(function(e) {
                            return {
                                description: e.description,
                                icon: e.icon,
                                id: e.id,
                                name: e.name,
                                bot: e.bot
                            }
                        }(e)),
                        permissions: null != e.permissions ? (0, f.keyPermissions)(el(e.permissions, a)) : void 0,
                        botId: e.bot_id
                    },
                    commands: {}
                };
                o[e.id] = t
            }
            for (let e of ("guild" === i.type && r.size > 0 && c.default.requestMembersById(i.guildId, [...r]), (0, h.buildApplicationCommands)(l.application_commands.map(e => (function(e, t) {
                    var n, i, l, a, o;
                    let s = {
                        ...e,
                        description: null !== (l = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== l ? l : "",
                        dm_permission: void 0,
                        name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
                        options: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.map(en)) && void 0 !== o ? o : [],
                        permissions: null != e.permissions ? el(e.permissions, t) : void 0
                    };
                    return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s
                })(e, a)), !0))) {
                let t = o[e.applicationId];
                if (null == t) {
                    L.error("Command has no matching application");
                    continue
                }
                t.commands[e.id] = e
            }
            let u = null !== (n = l.version) && void 0 !== n ? n : b;
            G(i, {
                serverVersion: u,
                result: {
                    sections: o,
                    sectionIdsByBotId: s,
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
            G(t, {
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
            G(t = null != i ? {
                type: "guild",
                guildId: i
            } : {
                type: "channel",
                channelId: n
            }, {
                serverVersion: U
            })
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            k({
                type: "channel",
                channelId: t.id
            })
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            k({
                type: "guild",
                guildId: t.id
            })
        },
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
            var t;
            let {
                guildId: n,
                version: i
            } = e, l = G({
                type: "guild",
                guildId: n
            }, {
                serverVersion: null != i ? i : U
            }), a = null == l ? void 0 : null === (t = l.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
            if (null != a)
                for (let e in a) {
                    let t = I.default.getDMFromUserId(e);
                    null != t && G({
                        type: "channel",
                        channelId: t
                    }, {
                        serverVersion: U
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
                let i = w({
                        type: "guild",
                        guildId: e
                    }),
                    l = null === (n = j.indices[i]) || void 0 === n ? void 0 : n.result;
                if (null == l) return !1;
                let a = !1;
                return t.forEach(e => {
                    let {
                        user: t
                    } = e;
                    if (!t.bot) return;
                    let n = l.sectionIdsByBotId[t.id];
                    if (null == n) return;
                    let i = l.sections[n];
                    s(null != i, "Bot has no matching index section"), s(null != i.descriptor.application, "Bot's index section has no application info");
                    let o = (0, h.getApplicationCommandSection)({
                        ...i.descriptor.application,
                        bot: t
                    });
                    i.descriptor = {
                        ...i.descriptor,
                        ...o
                    }, a = !0
                }), a
            }(t, n)
        },
        USER_APPLICATION_UPDATE: W,
        USER_APPLICATION_REMOVE: W
    });
    var K = j;

    function z(e, t, n) {
        let [i, l] = a.useState(!0), o = (0, u.useStateFromStoresObject)([j], () => j.getContextState(e));
        return a.useEffect(() => {
            if (i && null != e) {
                if (n) {
                    let n = t && ee(e);
                    n && (E.default.track(R.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == o.result,
                        size: Object.keys(j.indices).length
                    }), et(o) && (null != e.guild_id ? (0, M.requestApplicationCommandIndex)({
                        type: "guild",
                        guildId: e.guild_id
                    }) : (0, M.requestApplicationCommandIndex)({
                        type: "channel",
                        channelId: e.id
                    })))
                }
                l(!1)
            }
        }, [o, n, e, t, i]), o
    }

    function q(e, t) {
        let [n, i] = a.useState(!0), l = (0, u.useStateFromStoresObject)([j], () => {
            var t;
            return null !== (t = j.indices[e]) && void 0 !== t ? t : F
        });
        return a.useEffect(() => {
            n && null != e && (t && (E.default.track(R.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                miss: null == l.result,
                size: Object.keys(j.indices).length
            }), et(l) && (0, M.requestApplicationCommandIndex)({
                type: "guild",
                guildId: e
            })), i(!1))
        }, [l, t, e, n]), l
    }

    function X(e, t) {
        let [n, i] = a.useState(!0), l = (0, u.useStateFromStoresObject)([j], () => j.getUserState()), o = (0, h.useIsUserInUserAppExperiment)({
            location: "useUserIndexState"
        });
        return a.useEffect(() => {
            n && (t && et(l) && e && o && (0, M.requestApplicationCommandIndex)({
                type: "user"
            }), i(!1))
        }, [l, t, e, o, n]), l
    }

    function Q(e, t, n, i) {
        let {
            descriptors: l,
            commands: o,
            sectionedCommands: s,
            loading: r
        } = function(e, t, n) {
            let i = (0, y.usePermissionContext)(e, t.commandType),
                l = !1 !== t.applicationCommands && i.hasBaseAccessPermissions,
                o = z(e, l, n.allowFetch),
                s = X(l, n.allowFetch);
            return a.useMemo(() => J({
                permissionContext: i,
                text: t.text,
                allowApplicationCommands: l,
                builtIns: t.builtIns,
                scoreMethod: n.scoreMethod,
                allowEmptySections: n.allowEmptySections,
                contextState: o,
                userState: s,
                sortOptions: n.sortOptions
            }), [i, t.text, t.builtIns, l, n.scoreMethod, n.allowEmptySections, n.sortOptions, o, s])
        }(e, n, i), u = (0, N.useTopCommands)({
            channel: e,
            guild: t
        });
        return a.useMemo(() => {
            if (!i.includeFrecency || 0 === u.length) return {
                descriptors: l,
                commands: o,
                sectionedCommands: s,
                loading: r
            };
            let n = {
                    channel: e,
                    guild: t
                },
                a = o.filter(e => u.includes(e.id)).sort((e, t) => {
                    let i = g.default.getScoreWithoutLoadingLatest(n, e),
                        l = g.default.getScoreWithoutLoadingLatest(n, t);
                    return l - i
                }).splice(0, D.DISCOVERY_COMMANDS_FRECENCY_LIMIT);
            return 0 === a.length ? {
                descriptors: l,
                commands: o,
                sectionedCommands: s,
                loading: r
            } : {
                descriptors: [C.BUILT_IN_SECTIONS[D.BuiltInSectionId.FRECENCY], ...l],
                commands: a.concat(o),
                sectionedCommands: [{
                    section: C.BUILT_IN_SECTIONS[D.BuiltInSectionId.FRECENCY],
                    data: a
                }, ...s],
                loading: r
            }
        }, [r, i.includeFrecency, u, e, t, o, l, s])
    }
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

    function J(e) {
        let {
            permissionContext: t,
            contextState: n,
            userState: i,
            text: l,
            builtIns: a = O.BuiltInCommandFilter.ALLOW,
            allowApplicationCommands: o = !0,
            allowEmptySections: r = !1,
            scoreMethod: u = O.ScoreMethod.NONE,
            sortOptions: d = Z
        } = e, {
            commandType: c
        } = t, f = null == l ? void 0 : l.toLowerCase(), m = null == f ? void 0 : f.split(" "), I = a === O.BuiltInCommandFilter.ONLY_TEXT, A = a !== O.BuiltInCommandFilter.DENY ? (0, C.getBuiltInCommands)(c, !0, I) : [], E = [], N = {
            permissionContext: t,
            query: f,
            splitQuery: m,
            allowEmptySections: r,
            scoreMethod: u
        };
        if (o) {
            var M, S, h, y;
            let e = null !== (h = null === (M = n.result) || void 0 === M ? void 0 : M.sections) && void 0 !== h ? h : {},
                t = null !== (y = null === (S = i.result) || void 0 === S ? void 0 : S.sections) && void 0 !== y ? y : {},
                l = [...Object.keys(e), ...Object.keys(t).filter(t => !(t in e))];
            for (let n of l) {
                let i, l;
                let a = e[n],
                    o = t[n];
                if (null != a && null != o) {
                    for (let e in i = o.descriptor, l = [], o.commands) {
                        let t = o.commands[e];
                        l.push(t)
                    }
                    for (let e in a.commands)
                        if (!(e in o.commands)) {
                            let t = a.commands[e];
                            l.push(t)
                        }
                } else null != a ? (i = a.descriptor, l = Object.values(a.commands)) : null != o && (i = o.descriptor, l = Object.values(o.commands));
                s(null != i, "Failed to select application descriptor"), s(null != l, "Failed to select list of application commands");
                let r = $(i, l, N);
                null != r && E.push(r)
            }
            d.applications.useFrecency && _.FrecencyUserSettingsActionCreators.loadIfNecessary(), E.sort((e, t) => {
                if (d.applications.useScore && u === O.ScoreMethod.APPLICATION_ONLY) {
                    var n, i, l, a;
                    let o = null !== (l = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== l ? l : Number.MAX_VALUE,
                        s = null !== (a = null === (i = t.data[0]) || void 0 === i ? void 0 : i.score) && void 0 !== a ? a : Number.MAX_VALUE;
                    if (o !== s) return o - s
                }
                if (d.applications.useFrecency) {
                    let n = p.default.getScoreWithoutLoadingLatest(e.section.id),
                        i = p.default.getScoreWithoutLoadingLatest(t.section.id);
                    if (n !== i) return i - n
                }
                return ea(e.section.name, t.section.name)
            })
        }
        if (A.length > 0 || !0 === r) {
            let e = $(C.BUILT_IN_SECTIONS[D.BuiltInSectionId.BUILT_IN], A, N);
            null != e && E.push(e)
        }
        let v = E.flatMap(e => e.data.map(t => ({
            ...t,
            section: e.section
        })));
        if (u === O.ScoreMethod.COMMAND_ONLY || u === O.ScoreMethod.COMMAND_OR_APPLICATION) {
            let e = t.context,
                n = T.default.getGuild(t.context.guild_id);
            d.commands.useFrecency && _.FrecencyUserSettingsActionCreators.loadIfNecessary(), v.sort((t, i) => {
                if (d.commands.useScore) {
                    var l, a;
                    let e = null !== (l = t.score) && void 0 !== l ? l : 0,
                        n = null !== (a = i.score) && void 0 !== a ? a : 0;
                    if (e !== n) return e - n
                }
                if (d.commands.useFrecency) {
                    let l = g.default.getScoreWithoutLoadingLatest({
                            channel: e,
                            guild: n
                        }, t),
                        a = g.default.getScoreWithoutLoadingLatest({
                            channel: e,
                            guild: n
                        }, i);
                    if (l !== a) return a - l
                }
                return ea(t.displayName, i.displayName)
            })
        }
        return {
            commands: v,
            descriptors: E.map(e => e.section),
            sectionedCommands: E,
            loading: (null == n ? void 0 : n.fetchState.fetching) === !0 || (null == i ? void 0 : i.fetchState.fetching) === !0
        }
    }

    function $(e, t, n) {
        let i, {
                query: l,
                splitQuery: a,
                allowEmptySections: o,
                scoreMethod: s,
                permissionContext: r
            } = n,
            {
                context: u,
                userId: d,
                roleIds: c,
                isImpersonating: p
            } = r,
            f = null != u.guild_id ? v.computeAllowedForUser(e.permissions, u.guild_id, d, c, p) : null,
            m = null != u.guild_id ? v.computeAllowedForChannel(e.permissions, u, u.guild_id) : null,
            _ = [];
        for (let n of t) {
            let t = v.hasAccess(n, r, f, m, e.botId);
            t === v.HasAccessResult.ALLOWED && _.push(n)
        }
        return 0 !== (i = s !== O.ScoreMethod.NONE && null != l && null != a ? function(e, t, n, i, l) {
            let a;
            let o = [];
            if (l === O.ScoreMethod.APPLICATION_ONLY || l === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                let t = i.name.toLocaleLowerCase();
                t.startsWith(e) ? a = 5 : t.includes(e) && (a = 6)
            }
            let s = t[0],
                r = t.slice(1).join(" ");
            for (let t of n) {
                let n;
                if (l === O.ScoreMethod.COMMAND_ONLY || l === O.ScoreMethod.COMMAND_OR_APPLICATION) {
                    var u;
                    n = null !== (u = function(e, t, n, i) {
                        var l;
                        let a = e.name,
                            o = e.displayName;
                        if (a.startsWith(t) || o.startsWith(t)) return 0;
                        if (a.startsWith(n)) {
                            let e = a.split(" ").slice(1).join(" ");
                            if (e.startsWith(i)) return 1
                        }
                        if (o.startsWith(n)) {
                            let e = o.split(" ").slice(1).join(" ");
                            if (e.startsWith(i)) return 1
                        }
                        if (a.includes(t) || (null == o ? void 0 : o.includes(t))) return 2;
                        let s = !1;
                        for (let {
                                name: n,
                                serverLocalizedName: i
                            }
                            of null !== (l = e.options) && void 0 !== l ? l : []) {
                            if (n.startsWith(t) || "".concat(a, " ").concat(n).startsWith(t) || null != o && "".concat(o, " ").concat(n).startsWith(t) || null != i && (i.startsWith(t) || "".concat(a, " ").concat(i).startsWith(t) || null != o && "".concat(o, " ").concat(i).startsWith(t))) return 3;
                            (n.includes(t) || (null == i ? void 0 : i.includes(t))) && (s = !0)
                        }
                        if (s) return 4
                    }(t, e, s, r)) && void 0 !== u ? u : a
                } else n = a;
                void 0 !== n && o.push({
                    ...t,
                    score: n
                })
            }
            return o
        }(l, a, _, e, s) : _).length || o ? ((s === O.ScoreMethod.NONE || s === O.ScoreMethod.APPLICATION_ONLY) && i.sort((e, t) => ea(e.displayName, t.displayName)), {
            section: e,
            data: i
        }) : null
    }

    function ee(e) {
        var t;
        return null != e.guild_id || e.type === R.ChannelTypes.DM && (null === (t = A.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
    }

    function et(e) {
        return !! function(e) {
            var t;
            return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
        }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    }

    function en(e) {
        var t, n, i, l;
        let a = {
            ...e,
            choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(ei),
            description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
            name: null !== (l = e.name_default) && void 0 !== l ? l : e.name,
            options: null === (n = e.options) || void 0 === n ? void 0 : n.map(en)
        };
        return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
    }

    function ei(e) {
        var t;
        let n = {
            ...e,
            name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
        };
        return e.name !== e.name_default && (n.name_localized = e.name), n
    }

    function el(e, t) {
        let n = [];
        if (null != e.user && n.push({
                type: S.ApplicationCommandPermissionType.USER,
                id: t,
                permission: e.user
            }), null != e.channels)
            for (let [t, i] of Object.entries(e.channels)) n.push({
                type: S.ApplicationCommandPermissionType.CHANNEL,
                id: t,
                permission: i
            });
        if (null != e.roles)
            for (let [t, i] of Object.entries(e.roles)) n.push({
                type: S.ApplicationCommandPermissionType.ROLE,
                id: t,
                permission: i
            });
        return n
    }(l = i || (i = {}))[l.COMMAND_NAME_STARTS_WITH = 0] = "COMMAND_NAME_STARTS_WITH", l[l.STARTS_WITH_COMMAND_NAME = 1] = "STARTS_WITH_COMMAND_NAME", l[l.COMMAND_NAME_CONTAINS = 2] = "COMMAND_NAME_CONTAINS", l[l.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3] = "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", l[l.OPTION_NAME_CONTAINS = 4] = "OPTION_NAME_CONTAINS", l[l.SECTION_NAME_STARTS_WITH = 5] = "SECTION_NAME_STARTS_WITH", l[l.SECTION_NAME_CONTAINS = 6] = "SECTION_NAME_CONTAINS";

    function ea(e, t) {
        return j.collator.compare(e, t)
    }
}