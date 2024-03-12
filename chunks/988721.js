function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return z
        },
        useContextIndexState: function() {
            return q
        },
        useGuildIndexState: function() {
            return X
        },
        useUserIndexState: function() {
            return Q
        },
        useDiscoveryState: function() {
            return Z
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
        A = n("162771"),
        E = n("697218"),
        C = n("599110"),
        N = n("589777"),
        g = n("369010"),
        M = n("342564"),
        O = n("9566"),
        S = n("972620"),
        h = n("524768"),
        y = n("389153"),
        v = n("123373"),
        D = n("217946"),
        R = n("317041"),
        L = n("49111");
    let P = new r.default("ApplicationCommandIndexStore"),
        U = Symbol("currentUser"),
        b = Symbol("stale"),
        B = Symbol("current"),
        x = Object.freeze({
            descriptors: [],
            commands: [],
            sectionedCommands: [],
            loading: !0
        }),
        F = Object.freeze({
            serverVersion: B,
            fetchState: {
                fetching: !1
            },
            result: {
                sections: {},
                sectionIdsByBotId: {},
                version: B
            }
        }),
        H = Object.freeze({
            serverVersion: b,
            fetchState: {
                fetching: !1
            }
        }),
        w = {
            sensitivity: "accent",
            numeric: !0
        };

    function G(e) {
        switch (e.type) {
            case "guild":
                return e.guildId;
            case "channel":
                return e.channelId;
            case "user":
                return U
        }
    }

    function k(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = G(e),
            l = K.indices[i];
        return null != l ? ("fetchState" in t && l.fetchState.fetching && l.fetchState.abort.abort(), K.indices[i] = {
            ...l,
            ...t
        }) : n && (K.indices[i] = {
            serverVersion: b,
            fetchState: {
                fetching: !1
            },
            ...t
        }), l
    }

    function Y(e) {
        let t = G(e),
            n = K.indices[t];
        (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete K.indices[t]
    }

    function W() {
        for (let e of Object.values(K.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
        K.indices = {}
    }

    function V() {
        k({
            type: "user"
        }, {
            serverVersion: b
        })
    }
    class j extends u.default.Store {
        initialize() {
            this.waitFor(m.default), this.syncWith([m.default], () => {
                ! function() {
                    let e = m.default.locale;
                    e !== K.oldLocale && (W(), K.collator = new Intl.Collator(e, {
                        sensitivity: "accent",
                        numeric: !0
                    }), K.oldLocale = e)
                }()
            })
        }
        getContextState(e) {
            var t, n;
            return null != e && et(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : H : F
        }
        getUserState() {
            var e;
            let t = A.default.getGuildId();
            return (0, y.isInUserAppExperiment)(t, {
                location: "getUserState"
            }, {
                autoTrackExposure: !1
            }) ? null !== (e = this.indices[U]) && void 0 !== e ? e : H : F
        }
        query(e, t, n) {
            let i = E.default.getCurrentUser();
            if (null == i) return x;
            let l = this.getContextState(e),
                a = this.getUserState(),
                o = (0, v.buildPermissionContext)(e, t.commandType),
                s = !1 !== t.applicationCommands && o.hasBaseAccessPermissions,
                r = !1;
            if (n.allowFetch) {
                let t = s && et(e);
                t && (C.default.track(L.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == l.result,
                    size: Object.keys(K.indices).length
                }), en(l) && (null != e.guild_id ? (0, O.requestApplicationCommandIndex)({
                    type: "guild",
                    guildId: e.guild_id
                }) : (0, O.requestApplicationCommandIndex)({
                    type: "channel",
                    channelId: e.id
                }), r = !0)), (0, y.isInUserAppExperiment)(e.guild_id, {
                    location: "query"
                }) && en(a) && ((0, O.requestApplicationCommandIndex)({
                    type: "user"
                }), r = !0)
            }
            let u = $({
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
            super(...e), this.indices = {}, this.oldLocale = m.default.locale, this.collator = new Intl.Collator(m.default.locale, w)
        }
    }
    j.displayName = "ApplicationCommandIndexStore";
    let K = new j(d.default, {
        LOGOUT: W,
        CONNECTION_OPEN: function() {
            for (let e of Object.values(K.indices)) e.serverVersion = b
        },
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
            var t;
            let {
                target: n,
                start: i
            } = e;
            if (en(null !== (t = K.indices[G(n)]) && void 0 !== t ? t : H)) {
                let e = new AbortController;
                k(n, {
                    fetchState: {
                        fetching: !0,
                        abort: e
                    }
                }, !0), (0, O.fetchApplicationCommandIndex)(n, i, e)
            }
        },
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
            var t, n;
            let {
                target: i,
                index: l
            } = e, a = null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
            if (null == a) return !1;
            let o = {},
                s = {},
                r = new Set;
            for (let e of l.applications) {
                if (null == e.bot && null != e.bot_id) {
                    s[e.bot_id] = e.id;
                    let t = E.default.getUser(e.bot_id);
                    null != t ? e.bot = t : r.add(e.bot_id)
                } else null != e.bot && (s[e.bot.id] = e.id);
                let t = {
                    descriptor: {
                        ...(0, y.getApplicationCommandSection)(function(e) {
                            return {
                                description: e.description,
                                icon: e.icon,
                                id: e.id,
                                name: e.name,
                                bot: e.bot
                            }
                        }(e)),
                        permissions: null != e.permissions ? (0, f.keyPermissions)(ea(e.permissions, a)) : void 0,
                        botId: e.bot_id
                    },
                    commands: {}
                };
                o[e.id] = t
            }
            for (let e of ("guild" === i.type && r.size > 0 && c.default.requestMembersById(i.guildId, [...r]), (0, y.buildApplicationCommands)(l.application_commands.map(e => (function(e, t) {
                    var n, i, l, a, o;
                    let s = {
                        ...e,
                        description: null !== (l = null !== (i = e.description_default) && void 0 !== i ? i : e.description) && void 0 !== l ? l : "",
                        dm_permission: void 0,
                        name: null !== (a = e.name_default) && void 0 !== a ? a : e.name,
                        options: null !== (o = null === (n = e.options) || void 0 === n ? void 0 : n.map(ei)) && void 0 !== o ? o : [],
                        permissions: null != e.permissions ? ea(e.permissions, t) : void 0
                    };
                    return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s
                })(e, a)), !0))) {
                let t = o[e.applicationId];
                if (null == t) {
                    P.error("Command has no matching application");
                    continue
                }
                t.commands[e.id] = e
            }
            let u = null !== (n = l.version) && void 0 !== n ? n : B;
            k(i, {
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
            k(t, {
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
            k(t = null != i ? {
                type: "guild",
                guildId: i
            } : {
                type: "channel",
                channelId: n
            }, {
                serverVersion: b
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
            } = e, l = k({
                type: "guild",
                guildId: n
            }, {
                serverVersion: null != i ? i : b
            }), a = null == l ? void 0 : null === (t = l.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
            if (null != a)
                for (let e in a) {
                    let t = I.default.getDMFromUserId(e);
                    null != t && k({
                        type: "channel",
                        channelId: t
                    }, {
                        serverVersion: b
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
                let i = G({
                        type: "guild",
                        guildId: e
                    }),
                    l = null === (n = K.indices[i]) || void 0 === n ? void 0 : n.result;
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
                    let o = (0, y.getApplicationCommandSection)({
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
        USER_APPLICATION_UPDATE: V,
        USER_APPLICATION_REMOVE: V
    });
    var z = K;

    function q(e, t, n) {
        let [i, l] = a.useState(!0), o = (0, u.useStateFromStoresObject)([K], () => K.getContextState(e));
        return a.useEffect(() => {
            if (i && null != e) {
                if (n) {
                    let n = t && et(e);
                    n && (C.default.track(L.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                        miss: null == o.result,
                        size: Object.keys(K.indices).length
                    }), en(o) && (null != e.guild_id ? (0, O.requestApplicationCommandIndex)({
                        type: "guild",
                        guildId: e.guild_id
                    }) : (0, O.requestApplicationCommandIndex)({
                        type: "channel",
                        channelId: e.id
                    })))
                }
                l(!1)
            }
        }, [o, n, e, t, i]), o
    }

    function X(e, t) {
        let [n, i] = a.useState(!0), l = (0, u.useStateFromStoresObject)([K], () => {
            var t;
            return null !== (t = K.indices[e]) && void 0 !== t ? t : H
        });
        return a.useEffect(() => {
            n && null != e && (t && (C.default.track(L.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                miss: null == l.result,
                size: Object.keys(K.indices).length
            }), en(l) && (0, O.requestApplicationCommandIndex)({
                type: "guild",
                guildId: e
            })), i(!1))
        }, [l, t, e, n]), l
    }

    function Q(e, t) {
        let [n, i] = a.useState(!0), l = (0, u.useStateFromStoresObject)([K], () => K.getUserState()), o = (0, u.useStateFromStores)([A.default], A.default.getGuildId), s = (0, y.useIsInUserAppExperiment)(o, {
            location: "useUserIndexState"
        });
        return a.useEffect(() => {
            n && (t && en(l) && e && s && (0, O.requestApplicationCommandIndex)({
                type: "user"
            }), i(!1))
        }, [l, t, e, s, n]), l
    }

    function Z(e, t, n, i) {
        let {
            descriptors: l,
            commands: o,
            sectionedCommands: s,
            loading: r
        } = function(e, t, n) {
            let i = (0, v.usePermissionContext)(e, t.commandType),
                l = !1 !== t.applicationCommands && i.hasBaseAccessPermissions,
                o = q(e, l, n.allowFetch),
                s = Q(l, n.allowFetch);
            return a.useMemo(() => $({
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
        }(e, n, i), u = (0, g.useTopCommands)({
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
                    let i = M.default.getScoreWithoutLoadingLatest(n, e),
                        l = M.default.getScoreWithoutLoadingLatest(n, t);
                    return l - i
                }).splice(0, R.DISCOVERY_COMMANDS_FRECENCY_LIMIT);
            return 0 === a.length ? {
                descriptors: l,
                commands: o,
                sectionedCommands: s,
                loading: r
            } : {
                descriptors: [N.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY], ...l],
                commands: a.concat(o),
                sectionedCommands: [{
                    section: N.BUILT_IN_SECTIONS[R.BuiltInSectionId.FRECENCY],
                    data: a
                }, ...s],
                loading: r
            }
        }, [r, i.includeFrecency, u, e, t, o, l, s])
    }
    let J = Object.freeze({
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
            text: l,
            builtIns: a = S.BuiltInCommandFilter.ALLOW,
            allowApplicationCommands: o = !0,
            allowEmptySections: r = !1,
            scoreMethod: u = S.ScoreMethod.NONE,
            sortOptions: d = J
        } = e, {
            commandType: c
        } = t, f = null == l ? void 0 : l.toLowerCase(), m = null == f ? void 0 : f.split(" "), I = a === S.BuiltInCommandFilter.ONLY_TEXT, A = a !== S.BuiltInCommandFilter.DENY ? (0, N.getBuiltInCommands)(c, !0, I) : [], E = [], C = {
            permissionContext: t,
            query: f,
            splitQuery: m,
            allowEmptySections: r,
            scoreMethod: u
        };
        if (o) {
            var g, O, h, y;
            let e = null !== (h = null === (g = n.result) || void 0 === g ? void 0 : g.sections) && void 0 !== h ? h : {},
                t = null !== (y = null === (O = i.result) || void 0 === O ? void 0 : O.sections) && void 0 !== y ? y : {},
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
                let r = ee(i, l, C);
                null != r && E.push(r)
            }
            d.applications.useFrecency && _.FrecencyUserSettingsActionCreators.loadIfNecessary(), E.sort((e, t) => {
                if (d.applications.useScore && u === S.ScoreMethod.APPLICATION_ONLY) {
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
                return eo(e.section.name, t.section.name)
            })
        }
        if (A.length > 0 || !0 === r) {
            let e = ee(N.BUILT_IN_SECTIONS[R.BuiltInSectionId.BUILT_IN], A, C);
            null != e && E.push(e)
        }
        let v = E.flatMap(e => e.data.map(t => ({
            ...t,
            section: e.section
        })));
        if (u === S.ScoreMethod.COMMAND_ONLY || u === S.ScoreMethod.COMMAND_OR_APPLICATION) {
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
                    let l = M.default.getScoreWithoutLoadingLatest({
                            channel: e,
                            guild: n
                        }, t),
                        a = M.default.getScoreWithoutLoadingLatest({
                            channel: e,
                            guild: n
                        }, i);
                    if (l !== a) return a - l
                }
                return eo(t.displayName, i.displayName)
            })
        }
        return {
            commands: v,
            descriptors: E.map(e => e.section),
            sectionedCommands: E,
            loading: (null == n ? void 0 : n.fetchState.fetching) === !0 || (null == i ? void 0 : i.fetchState.fetching) === !0
        }
    }

    function ee(e, t, n) {
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
            f = null != u.guild_id ? D.computeAllowedForUser(e.permissions, u.guild_id, d, c, p) : null,
            m = null != u.guild_id ? D.computeAllowedForChannel(e.permissions, u, u.guild_id) : null,
            _ = [];
        for (let n of t) {
            let t = D.hasAccess(n, r, f, m, e.botId);
            t === D.HasAccessResult.ALLOWED && _.push(n)
        }
        return 0 !== (i = s !== S.ScoreMethod.NONE && null != l && null != a ? function(e, t, n, i, l) {
            let a;
            let o = [];
            if (l === S.ScoreMethod.APPLICATION_ONLY || l === S.ScoreMethod.COMMAND_OR_APPLICATION) {
                let t = i.name.toLocaleLowerCase();
                t.startsWith(e) ? a = 5 : t.includes(e) && (a = 6)
            }
            let s = t[0],
                r = t.slice(1).join(" ");
            for (let t of n) {
                let n;
                if (l === S.ScoreMethod.COMMAND_ONLY || l === S.ScoreMethod.COMMAND_OR_APPLICATION) {
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
        }(l, a, _, e, s) : _).length || o ? ((s === S.ScoreMethod.NONE || s === S.ScoreMethod.APPLICATION_ONLY) && i.sort((e, t) => eo(e.displayName, t.displayName)), {
            section: e,
            data: i
        }) : null
    }

    function et(e) {
        var t;
        return null != e.guild_id || e.type === L.ChannelTypes.DM && (null === (t = E.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
    }

    function en(e) {
        return !! function(e) {
            var t;
            return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
        }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    }

    function ei(e) {
        var t, n, i, l;
        let a = {
            ...e,
            choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(el),
            description: null !== (i = e.description_default) && void 0 !== i ? i : e.description,
            name: null !== (l = e.name_default) && void 0 !== l ? l : e.name,
            options: null === (n = e.options) || void 0 === n ? void 0 : n.map(ei)
        };
        return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
    }

    function el(e) {
        var t;
        let n = {
            ...e,
            name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
        };
        return e.name !== e.name_default && (n.name_localized = e.name), n
    }

    function ea(e, t) {
        let n = [];
        if (null != e.user && n.push({
                type: h.ApplicationCommandPermissionType.USER,
                id: t,
                permission: e.user
            }), null != e.channels)
            for (let [t, i] of Object.entries(e.channels)) n.push({
                type: h.ApplicationCommandPermissionType.CHANNEL,
                id: t,
                permission: i
            });
        if (null != e.roles)
            for (let [t, i] of Object.entries(e.roles)) n.push({
                type: h.ApplicationCommandPermissionType.ROLE,
                id: t,
                permission: i
            });
        return n
    }(l = i || (i = {}))[l.COMMAND_NAME_STARTS_WITH = 0] = "COMMAND_NAME_STARTS_WITH", l[l.STARTS_WITH_COMMAND_NAME = 1] = "STARTS_WITH_COMMAND_NAME", l[l.COMMAND_NAME_CONTAINS = 2] = "COMMAND_NAME_CONTAINS", l[l.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3] = "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", l[l.OPTION_NAME_CONTAINS = 4] = "OPTION_NAME_CONTAINS", l[l.SECTION_NAME_STARTS_WITH = 5] = "SECTION_NAME_STARTS_WITH", l[l.SECTION_NAME_CONTAINS = 6] = "SECTION_NAME_CONTAINS";

    function eo(e, t) {
        return K.collator.compare(e, t)
    }
}