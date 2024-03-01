function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        search: function() {
            return U
        },
        default: function() {
            return z
        },
        useSearchStoreOpenState: function() {
            return X
        },
        useDiscoveryState: function() {
            return Q
        },
        useQueryState: function() {
            return ee
        }
    }), n("222007"), n("424973"), n("506083");
    var i = n("884691"),
        l = n("483366"),
        a = n.n(l),
        o = n("693566"),
        r = n.n(o),
        s = n("446674"),
        u = n("872717"),
        d = n("913144"),
        c = n("798609"),
        p = n("763898"),
        f = n("938767"),
        m = n("38654"),
        _ = n("252063"),
        I = n("140596"),
        C = n("685841"),
        T = n("872173"),
        A = n("374363"),
        E = n("42203"),
        N = n("923959"),
        g = n("957255"),
        h = n("18494"),
        S = n("599110"),
        O = n("718517"),
        M = n("589777"),
        v = n("369010"),
        y = n("342564"),
        D = n("524768"),
        R = n("389153"),
        L = n("317041"),
        P = n("49111");

    function U(e, t, n) {
        var i;
        let l;
        if ((null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted)) return Promise.resolve(null);
        let a = {
            type: t.type,
            role_ids: null === (i = t.roleIds) || void 0 === i ? void 0 : i.join(",")
        };
        "applicationId" in t && null != t.applicationId ? (a.application_id = t.applicationId, l = "application") : "query" in t ? (a.query = t.query, a.limit = t.limit, a.cursor = t.cursor, l = "query") : "cursor" in t ? (a.limit = t.limit, a.cursor = t.cursor, null != t.commandIds && t.commandIds.length > 0 && (a.command_ids = t.commandIds.join(",")), l = "discovery") : l = "unknown", "includeApplications" in t && (a.include_applications = t.includeApplications), "checkPermissions" in t && (a.check_permissions = t.checkPermissions);
        let o = async i => {
            var l;
            return await new Promise(e => {
                setTimeout(e, i)
            }), U(e, {
                ...t,
                retries: (null !== (l = t.retries) && void 0 !== l ? l : 0) + 1
            }, n)
        };
        (null == t.retries || 0 === t.retries) && (t.start = performance.now());
        let r = e => {
            var i, o, r;
            if (null == t.start) return;
            let s = performance.now() - t.start;
            S.default.track(P.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
                duration_ms: s,
                aborted: null !== (i = null == n ? void 0 : n.signal.aborted) && void 0 !== i && i,
                error: e,
                kind: l,
                command_type: t.type,
                include_applications: null !== (o = a.include_applications) && void 0 !== o && o,
                retries: null !== (r = t.retries) && void 0 !== r ? r : 0
            })
        };
        return u.default.get({
            url: P.Endpoints.APPLICATION_COMMANDS_SEARCH(e),
            query: a,
            signal: (null == n ? void 0 : n.abortable) ? n.signal : void 0
        }).then(e => {
            var t, n, i;
            return 202 === e.status ? o(5e3) : (r(!1), {
                applicationCommands: e.body.application_commands,
                applications: e.body.applications,
                nextCursor: null === (t = e.body.cursor) || void 0 === t ? void 0 : t.next,
                prevCursor: null === (n = e.body.cursor) || void 0 === n ? void 0 : n.previous,
                repaired: null === (i = e.body.cursor) || void 0 === i ? void 0 : i.repaired
            })
        }, e => (null == n ? void 0 : n.abortable) && (null == n ? void 0 : n.signal.aborted) ? (r(!0), null) : 429 === e.status ? o(e.body.retry_after * O.default.Millis.SECOND) : (r(!0), null))
    }
    let F = (e, t, n) => {
        let {
            channel: i,
            guild: l
        } = e;
        return null != i ? (0, M.getBuiltInCommands)(t, !0, n).filter(e => null == e.predicate || e.predicate({
            channel: i,
            guild: l
        })) : []
    };

    function b(e, t) {
        if (0 === t.length) return e;
        let n = [...e],
            i = (0, R.buildApplicationCommands)(t).filter(e => {
                let t = n.findIndex(t => t.id === e.id);
                return !(t >= 0) || (n[t] = e, !1)
            });
        return [...n, ...i]
    }

    function H(e) {
        let t = e.map(R.getApplicationCommandSection);
        return t.concat(M.BUILT_IN_SECTIONS[L.BuiltInSectionId.BUILT_IN])
    }
    let x = (e, t) => ({
            type: t,
            inputType: D.ApplicationCommandInputType.PLACEHOLDER,
            id: "placeholder-".concat(e),
            name: "",
            displayName: "",
            description: "",
            displayDescription: "",
            applicationId: ""
        }),
        B = [M.BUILT_IN_SECTIONS[L.BuiltInSectionId.BUILT_IN]];
    class w extends s.default.Store {
        initialize() {
            this.waitFor(A.default), this.syncWith([g.default], () => {
                this.shouldResetAll = !0
            }), this.syncWith([A.default], W)
        }
        getChannelState(e, t) {
            var n;
            return null === (n = q.channelStates.get(e)) || void 0 === n ? void 0 : n[t]
        }
        getOrInsertChannelState(e, t) {
            let n = q.channelStates,
                i = n.has(e);
            if (S.default.track(P.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: !i,
                    size: n.length
                }), !i) {
                let t = () => ({
                        discoveryInitialized: !1,
                        topCursor: null,
                        scrollDownCursor: null,
                        applicationSections: null,
                        applicationCommands: null,
                        filteredSectionId: null,
                        pendingQueries: new Map,
                        queries: new Map,
                        queriedApplicationId: null,
                        sawFrecencySection: !1
                    }),
                    i = {
                        [c.ApplicationCommandType.CHAT]: t(),
                        [c.ApplicationCommandType.MESSAGE]: t(),
                        [c.ApplicationCommandType.USER]: t(),
                        [c.ApplicationCommandType.PRIMARY_ENTRY_POINT]: t()
                    };
                n.set(e, i)
            }
            return n.get(e)[t]
        }
        getApplicationSections(e, t) {
            var n, i;
            return null !== (i = null === (n = this.getChannelState(e, t)) || void 0 === n ? void 0 : n.applicationSections) && void 0 !== i ? i : B
        }
        getQueryCommands(e, t, n) {
            var i, l, a;
            let o = this.getChannelState(e, t);
            return null !== (a = null == o ? void 0 : null === (i = o.queries.get(n)) || void 0 === i ? void 0 : i.commands) && void 0 !== a ? a : null == o ? void 0 : null === (l = o.pendingQueries.get(n)) || void 0 === l ? void 0 : l.commands
        }
        hasQueryResults(e, t, n) {
            var i, l;
            return null !== (l = null === (i = this.getChannelState(e, t)) || void 0 === i ? void 0 : i.queries.has(n)) && void 0 !== l && l
        }
        constructor(...e) {
            super(...e), this.channelStates = new r({
                max: 5
            }), this.componentIsOpen = !1, this.shouldResetAll = !1, this.shouldResetGuild = null, this.shouldResetDMs = !1
        }
    }

    function G(e) {
        var t;
        let {
            guildId: n
        } = e, i = h.default.getChannelId();
        return null != i && (null === (t = E.default.getChannel(i)) || void 0 === t ? void 0 : t.guild_id) !== n ? k(n) : q.componentIsOpen ? (q.shouldResetGuild = n, !1) : k(n)
    }

    function k(e) {
        let t = N.default.getChannels(e),
            n = t[0, N.GUILD_SELECTABLE_CHANNELS_KEY].concat(t[N.GUILD_VOCAL_CHANNELS_KEY]),
            i = q.channelStates.length;
        for (let e of n) q.channelStates.del(e.channel.id);
        return q.channelStates.length !== i
    }

    function Y() {
        let e = q.channelStates.length;
        return q.channelStates.keys().forEach(e => {
            var t;
            (null === (t = E.default.getChannel(e)) || void 0 === t ? void 0 : t.isPrivate()) && q.channelStates.del(e)
        }), q.channelStates.length !== e
    }

    function W() {
        var e, t, n;
        let i = null !== (n = null === (t = A.default.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.viewNsfwCommands) || void 0 === e ? void 0 : e.value) && void 0 !== n && n,
            l = i !== q.viewNsfwCommands;
        if (l) {
            if (q.viewNsfwCommands = i, !q.componentIsOpen) return Y();
            q.shouldResetDMs = !0
        }
        return !1
    }

    function V(e) {
        return !!q.channelStates.has(e) && (q.channelStates.del(e), !0)
    }

    function j() {
        q.shouldResetAll = !1, q.shouldResetGuild = null, q.shouldResetDMs = !1, q.componentIsOpen = !1, q.channelStates.reset()
    }
    w.displayName = "ApplicationCommandSearchStore";
    let q = new w(d.default, {
        LOGOUT: j,
        CONNECTION_OPEN: j,
        APPLICATION_COMMAND_SEARCH_STORE_UPDATE: e => {
            let {
                channelId: t,
                commandType: n,
                state: i
            } = e, l = q.channelStates.get(t);
            if (null == l) return;
            let a = l[n],
                o = {
                    ...a,
                    ...i
                };
            l[n] = o, null == a.applicationCommands && null != o.applicationCommands && o.pendingQueries.forEach((e, t) => {
                let {
                    context: n,
                    commandType: i,
                    limit: l
                } = e;
                Z({
                    context: n,
                    commandType: i,
                    query: t,
                    limit: l,
                    canOnlyUseTextCommands: !1
                })
            })
        },
        APPLICATION_COMMAND_SEARCH_STORE_QUERY(e) {
            let {
                context: t,
                commandType: n,
                query: i,
                limit: l,
                applicationId: a
            } = e, o = null != C.default.getPendingReply(t.channel.id), r = Z({
                context: t,
                commandType: n,
                query: i,
                limit: l,
                canOnlyUseTextCommands: o,
                applicationId: a
            });
            !r && !o && J({
                context: t,
                commandType: n,
                query: i,
                limit: l,
                applicationId: a
            })
        },
        CHANNEL_UPDATES(e) {
            let {
                channels: t
            } = e;
            for (let e of t)
                if (null != e.guild_id && G({
                        guildId: e.guild_id
                    })) return !0;
            return !1
        },
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: G,
        IMPERSONATE_UPDATE: G,
        IMPERSONATE_STOP: G,
        APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE(e) {
            let {
                isOpen: t
            } = e;
            if (q.componentIsOpen = t, q.shouldResetAll) {
                j();
                return
            }
            let n = !1;
            return null != q.shouldResetGuild && (n = k(q.shouldResetGuild), q.shouldResetGuild = null), q.shouldResetDMs && (n = Y() || n, q.shouldResetDMs = !1), n
        },
        PRIVATE_CHANNEL_INTEGRATION_CREATE(e) {
            let {
                integration: t
            } = e;
            return V(t.channel_id)
        },
        PRIVATE_CHANNEL_INTEGRATION_UPDATE(e) {
            let {
                integration: t
            } = e;
            return V(t.channel_id)
        },
        PRIVATE_CHANNEL_INTEGRATION_DELETE(e) {
            let {
                channelId: t
            } = e;
            return V(t)
        },
        FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS(e) {
            let {
                channelId: t
            } = e;
            return V(t)
        }
    });
    var z = q;
    let K = e => {
        if (null == e) return;
        let t = m.default.getViewingRoles(e);
        if (null == t) return;
        let n = Object.keys(t);
        return 0 === n.length && n.push(e), n
    };

    function X() {
        i.useEffect(() => (d.default.dispatch({
            type: "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE",
            isOpen: !0
        }), () => {
            d.default.dispatch({
                type: "APPLICATION_COMMAND_SEARCH_STORE_UI_UPDATE",
                isOpen: !1
            })
        }), [])
    }

    function Q(e, t, n, l) {
        let {
            canOnlyUseTextCommands: a,
            canUseFrecency: o
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, {
            discoveryInitialized: r,
            topCursor: u,
            scrollDownCursor: c,
            applicationSections: m,
            applicationCommands: C,
            filteredSectionId: T,
            sawFrecencySection: A
        } = (0, s.useStateFromStores)([q], () => q.getOrInsertChannelState(e.id, t), [e.id, t]), E = i.useCallback(n => {
            d.default.dispatch({
                type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                channelId: e.id,
                commandType: t,
                state: n
            })
        }, [e.id, t]);
        (0, _.usePrivateChannelIntegrationState)({
            channelId: e.id
        });
        let N = i.useRef(!1),
            h = (0, p.default)(),
            S = i.useCallback(function(n, i) {
                let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                if (N.current) return;
                N.current = !0;
                let a = K(e.guild_id);
                U(e.id, {
                    type: t,
                    roleIds: a,
                    ...n
                }, {
                    abortable: l,
                    signal: h
                }).then(e => {
                    N.current = !1, i(e)
                })
            }, [e.id, e.guild_id, t, h]),
            O = (0, f.useCommandContext)(e),
            D = (0, v.useTopCommands)(O),
            P = (0, v.useTopRealCommands)(O),
            B = (0, s.useStateFromStores)([g.default, I.default], () => (0, R.canUseApplicationCommands)(g.default, I.default, null != a && a, e), [a, e]);
        i.useEffect(() => {
            if (r) return;
            if (E({
                    discoveryInitialized: !0
                }), !B || null != C && C.length > 0) return;
            let t = e.isPrivate() ? {} : {
                limit: l,
                commandIds: r ? void 0 : P,
                cursor: null != u ? u : void 0
            };
            S({
                ...t,
                includeApplications: null == m
            }, e => {
                if (null == e) return;
                let t = b([], e.applicationCommands),
                    n = {
                        applicationCommands: t,
                        topCursor: e.prevCursor,
                        scrollDownCursor: e.nextCursor
                    };
                if (null != e.applications) {
                    var i;
                    n.applicationSections = H(null !== (i = e.applications) && void 0 !== i ? i : [])
                }
                E(n)
            }, !1)
        }, [C, e, l, B, m, r, u, S, P, E]);
        let w = i.useCallback(() => {
                null != c && S({
                    limit: l,
                    cursor: c
                }, e => {
                    if (null == e) return;
                    let t = !1 === e.repaired ? b([], e.applicationCommands) : b(null != C ? C : [], e.applicationCommands);
                    E({
                        applicationCommands: t,
                        scrollDownCursor: e.nextCursor
                    })
                })
            }, [l, S, c, C, E]),
            G = i.useCallback(t => {
                if (!N.current && t !== T) {
                    if (null == t) {
                        e.isPrivate() ? E({
                            filteredSectionId: null,
                            discoveryInitialized: !0
                        }) : E({
                            filteredSectionId: null,
                            applicationCommands: null,
                            discoveryInitialized: !1
                        });
                        return
                    }!(t in M.BUILT_IN_SECTIONS || e.isPrivate()) && S({
                        applicationId: t
                    }, e => {
                        null != e && E({
                            applicationCommands: b([], e.applicationCommands)
                        })
                    }), E({
                        filteredSectionId: t,
                        scrollDownCursor: null
                    })
                }
            }, [e, S, E, T]);
        X(), i.useEffect(() => () => {
            var n;
            (null === (n = q.channelStates.get(e.id)) || void 0 === n ? void 0 : n[t].filteredSectionId) != null && G(null)
        }, []);
        let k = i.useMemo(() => F(O, t, a), [O, t, a]),
            Y = i.useMemo(() => {
                if (!o) return [];
                let e = (B && null != C ? C : []).concat(k);
                return e.filter(e => D.includes(e.id)).sort((e, t) => {
                    let n = y.default.getScoreWithoutLoadingLatest(O, e),
                        i = y.default.getScoreWithoutLoadingLatest(O, t);
                    return i - n
                }).slice(0, L.DISCOVERY_COMMANDS_FRECENCY_LIMIT)
            }, [o, D, B, C, k, O]);
        i.useEffect(() => {
            !A && Y.length > 0 && E({
                sawFrecencySection: !0
            })
        }, [E, Y, A]);
        let W = i.useMemo(() => {
                var e;
                let t = [];
                return (Y.length > 0 || A) && (t = t.concat(M.BUILT_IN_SECTIONS[L.BuiltInSectionId.FRECENCY])), B && null != m && (t = t.concat(m)), (null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.id) !== L.BuiltInSectionId.BUILT_IN && (t = t.concat(M.BUILT_IN_SECTIONS[L.BuiltInSectionId.BUILT_IN])), t
            }, [B, m, Y, A]),
            V = B && (!r || N.current || null != c),
            j = i.useMemo(() => {
                if (!V) return [];
                let e = [];
                for (let i = 0; i < n; i++) e.push(x(i, t));
                return e
            }, [V, n, t]),
            {
                activeSections: z,
                commandsByActiveSection: Q
            } = i.useMemo(() => {
                let e = [],
                    t = [];
                return W.forEach(n => {
                    let i;
                    (null == T || n.id === T) && ((i = n.id === L.BuiltInSectionId.BUILT_IN ? V ? [] : [...k] : n.id === L.BuiltInSectionId.FRECENCY ? [...Y] : (null != C ? C : []).filter(e => e.applicationId === n.id)).length > 0 || n.id === T) && (e.push(n), t.push({
                        section: n,
                        data: i
                    }))
                }), t.length > 0 && j.length > 0 && t[t.length - 1].data.push(...j), {
                    activeSections: e,
                    commandsByActiveSection: t
                }
            }, [W, Y, C, k, j, V, T]),
            Z = i.useMemo(() => {
                let e = [];
                return e = e.concat(Y), B && null != C && (e = e.concat(C)), e = e.concat(k)
            }, [B, Y, C, k]);
        return {
            filterSection: G,
            scrollDown: w,
            loading: N,
            filteredSectionId: T,
            hasMoreAfter: V,
            commands: Z,
            sectionDescriptors: W,
            activeSections: z,
            commandsByActiveSection: Q,
            placeholders: j
        }
    }

    function Z(e) {
        let t, {
                context: n,
                commandType: i,
                query: l,
                limit: a,
                canOnlyUseTextCommands: o,
                applicationCommands: r,
                scrollDownCursor: s,
                applications: u,
                applicationId: d = null
            } = e,
            c = q.getOrInsertChannelState(n.channel.id, i);
        if (c.queriedApplicationId !== d) c.queries.clear(), c.pendingQueries.clear(), c.queriedApplicationId = d;
        else if (c.queries.has(l)) return !0;
        if (null != u && (c.applicationSections = H(u)), o) t = [];
        else {
            var p;
            t = n.channel.isPrivate() ? null !== (p = c.applicationCommands) && void 0 !== p ? p : [] : b([], null != r ? r : [])
        }
        let f = F(n, i, o),
            m = (0, R.canUseApplicationCommands)(g.default, I.default, o, n.channel) && (n.channel.isPrivate() ? null == c.applicationCommands : null == r),
            _ = [],
            C = !1;
        if (m)
            for (let e = l.length - 1; e > 0; e -= 1) {
                let n = l.slice(0, e),
                    i = c.queries.get(n);
                if (null != i) {
                    C = i.done, i.commands.forEach(e => {
                        null == t.find(t => t.id === e.id) && null == f.find(t => t.id === e.id) && _.push(e)
                    });
                    break
                }
            }
        C && (m = !1);
        let A = [],
            E = l.split(" ");
        if ([...t, ..._, ...f].forEach(e => {
                var t;
                let n = null === (t = c.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
                    i = et(l, E, e, n);
                i > 0 && A.push({
                    ...e,
                    score: i
                })
            }), T.FrecencyUserSettingsActionCreators.loadIfNecessary(), A.sort((e, t) => {
                if (e.score !== t.score) return t.score - e.score;
                let i = y.default.getScoreWithoutLoadingLatest(n, e),
                    l = y.default.getScoreWithoutLoadingLatest(n, t);
                return i !== l ? l - i : e.displayName.localeCompare(t.displayName)
            }), m || null != s)
            for (let e = 0; e < 4; e += 1) A.push({
                ...x(e, i),
                score: 0
            });
        return m ? (c.pendingQueries.set(l, {
            context: n,
            commandType: i,
            limit: a,
            commands: A
        }), c.queries.delete(l)) : (c.pendingQueries.delete(l), c.queries.set(l, {
            commands: A,
            done: C || null == s,
            scrollDownCursor: s
        })), C
    }
    let J = a(e => {
            var t;
            let {
                context: n,
                commandType: i,
                query: l,
                limit: a,
                applicationId: o
            } = e;
            if (!(0, R.canUseApplicationCommands)(g.default, I.default, !1, n.channel)) return;
            let r = q.getOrInsertChannelState(n.channel.id, i);
            if (n.channel.isPrivate()) {
                !r.discoveryInitialized && null == r.applicationCommands && U(n.channel.id, {
                    type: i,
                    includeApplications: null == r.applicationSections
                }).then(e => {
                    var t;
                    if (null == e) return;
                    let l = {
                        applicationCommands: b([], null !== (t = e.applicationCommands) && void 0 !== t ? t : [])
                    };
                    null != e.applications && (l.applicationSections = H(e.applications)), d.default.dispatch({
                        type: "APPLICATION_COMMAND_SEARCH_STORE_UPDATE",
                        channelId: n.channel.id,
                        commandType: i,
                        state: l
                    })
                });
                return
            }(null === (t = r.queries.get(l)) || void 0 === t ? void 0 : t.scrollDownCursor) == null && U(n.channel.id, {
                type: i,
                roleIds: K(n.channel.guild_id),
                query: l,
                limit: a,
                applicationId: o,
                includeApplications: !r.discoveryInitialized && null == r.applicationSections
            }).then(e => {
                if (null != e) q.channelStates.has(n.channel.id) && (Z({
                    context: n,
                    commandType: i,
                    query: l,
                    limit: a,
                    canOnlyUseTextCommands: !1,
                    applicationCommands: e.applicationCommands,
                    scrollDownCursor: e.nextCursor,
                    applications: e.applications,
                    applicationId: o
                }), q.emitChange())
            })
        }, 250, {
            leading: !0,
            trailing: !0,
            maxWait: 750
        }),
        $ = async (e, t) => {
            var n;
            let {
                context: i,
                commandType: l,
                query: a,
                limit: o
            } = e;
            if (!(0, R.canUseApplicationCommands)(g.default, I.default, !1, i.channel) || i.channel.isPrivate()) return;
            let r = q.getOrInsertChannelState(i.channel.id, l),
                s = null === (n = r.queries.get(a)) || void 0 === n ? void 0 : n.scrollDownCursor;
            null != s && await U(i.channel.id, {
                type: l,
                roleIds: K(i.channel.guild_id),
                query: a,
                limit: o,
                cursor: s,
                includeApplications: !r.discoveryInitialized && null == r.applicationSections
            }, {
                abortable: !0,
                signal: t
            }).then(e => {
                var t, n;
                if (null == e || !q.channelStates.has(i.channel.id)) return;
                let o = null !== (n = null === (t = r.queries.get(a)) || void 0 === t ? void 0 : t.commands.filter(e => e.inputType !== D.ApplicationCommandInputType.PLACEHOLDER)) && void 0 !== n ? n : [],
                    s = b([], e.applicationCommands),
                    u = [],
                    d = a.split(" ");
                s.forEach(e => {
                    var t;
                    if (null != o.find(t => t.id === e.id)) return;
                    let n = null === (t = r.applicationSections) || void 0 === t ? void 0 : t.find(t => t.id === e.applicationId),
                        i = et(a, d, e, n);
                    i > 0 && u.push({
                        ...e,
                        score: i
                    })
                }), T.FrecencyUserSettingsActionCreators.loadIfNecessary(), u.sort((e, t) => {
                    if (e.score !== t.score) return t.score - e.score;
                    let n = y.default.getScoreWithoutLoadingLatest(i, e),
                        l = y.default.getScoreWithoutLoadingLatest(i, t);
                    return n !== l ? l - n : e.displayName.localeCompare(t.displayName)
                });
                let c = e.nextCursor;
                if (null != c)
                    for (let e = 0; e < 4; e += 1) u.push({
                        ...x(e, l),
                        score: 0
                    });
                r.queries.set(a, {
                    commands: e.repaired ? u : [...o, ...u],
                    done: !0,
                    scrollDownCursor: c
                }), q.emitChange()
            })
        };

    function ee(e, t, n, l) {
        X();
        let a = (0, p.default)(),
            {
                commands: o,
                applicationSections: r
            } = (0, s.useStateFromStoresObject)([q], () => {
                var i, l, a;
                let {
                    queries: o,
                    pendingQueries: r,
                    applicationSections: s
                } = q.getOrInsertChannelState(e.id, t);
                return {
                    applicationSections: s,
                    commands: null !== (a = null === (i = o.get(n)) || void 0 === i ? void 0 : i.commands) && void 0 !== a ? a : null === (l = r.get(n)) || void 0 === l ? void 0 : l.commands
                }
            }, [e.id, t, n]);
        i.useEffect(() => {
            d.default.dispatch({
                type: "APPLICATION_COMMAND_SEARCH_STORE_QUERY",
                context: (0, f.getCommandContext)(e),
                query: n,
                limit: l,
                commandType: t
            })
        }, [e, t, n, l]);
        let u = i.useRef(!1),
            c = i.useCallback(() => {
                !u.current && (u.current = !0, $({
                    commandType: t,
                    context: {
                        channel: e
                    },
                    query: n,
                    limit: l
                }, a).finally(() => {
                    u.current = !1
                }))
            }, [t, e, n, a, l]);
        return {
            commands: o,
            sections: null != r ? r : B,
            scrollDown: c
        }
    }

    function et(e, t, n, i) {
        var l;
        let a = n.name,
            o = n.displayName;
        if (a.startsWith(e) || o.startsWith(e)) return 6;
        if (a.startsWith(t[0])) {
            let e = a.split(" ").slice(1).join(" ");
            if (e.startsWith(t.slice(1).join(" "))) return 5
        }
        if (o.startsWith(t[0])) {
            let e = o.split(" ").slice(1).join(" ");
            if (e.startsWith(t.slice(1).join(" "))) return 5
        }
        if (a.includes(e) || (null == o ? void 0 : o.includes(e))) return 4;
        let r = !1;
        for (let {
                name: t,
                serverLocalizedName: i
            }
            of null !== (l = n.options) && void 0 !== l ? l : []) {
            if (t.startsWith(e) || "".concat(a, " ").concat(t).startsWith(e)) return 3;
            if (null != o && "".concat(o, " ").concat(t).startsWith(e)) return 2;
            if (null != i && (i.startsWith(e) || "".concat(a, " ").concat(i).startsWith(e) || null != o && "".concat(o, " ").concat(i).startsWith(e))) return 3;
            (t.includes(e) || (null == i ? void 0 : i.includes(e))) && (r = !0)
        }
        return r ? 2 : (null == i ? void 0 : i.name.toLocaleLowerCase().startsWith(e)) ? 1 : 0
    }
}