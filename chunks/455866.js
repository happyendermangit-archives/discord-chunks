function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useContextIndexState: function() {
            return eo
        },
        useDiscoveryState: function() {
            return eu
        },
        useGuildIndexState: function() {
            return ei
        },
        useUserIndexState: function() {
            return ea
        }
    });
    var r, o, i, a = n("470079"),
        u = n("512722"),
        s = n.n(u),
        l = n("188129"),
        c = n("898511"),
        f = n("629815"),
        d = n("322997");
    n("29570");
    var _ = n("292222"),
        E = n("21733"),
        p = n("225098"),
        m = n("968574"),
        y = n("935741"),
        I = n("306912"),
        h = n("208454"),
        O = n("870331"),
        T = n("591439"),
        S = n("557775"),
        v = n("855286"),
        g = n("541714"),
        A = n("705737"),
        b = n("861272"),
        N = n("653754"),
        R = n("332712"),
        C = n("479424"),
        P = n("118891"),
        D = n("281767");

    function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function M(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function U(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function k(e) {
        return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function G(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                w(e, t, n[t])
            })
        }
        return e
    }

    function B(e, t) {
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

    function j(e, t) {
        return (j = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function F(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || H(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function V(e) {
        return function(e) {
            if (Array.isArray(e)) return L(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || H(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function H(e, t) {
        if (e) {
            if ("string" == typeof e) return L(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(e, t)
        }
    }
    var x = new l.Logger("ApplicationCommandIndexStore"),
        Y = Symbol("currentUser"),
        W = Symbol("stale"),
        K = Symbol("current"),
        z = Object.freeze({
            descriptors: [],
            commands: [],
            sectionedCommands: [],
            loading: !0
        }),
        X = Object.freeze({
            serverVersion: K,
            fetchState: {
                fetching: !1
            },
            result: {
                sections: {},
                sectionIdsByBotId: {},
                version: K
            }
        }),
        q = Object.freeze({
            serverVersion: W,
            fetchState: {
                fetching: !1
            }
        }),
        Q = {
            sensitivity: "accent",
            numeric: !0
        };

    function J(e) {
        switch (e.type) {
            case "guild":
                return e.guildId;
            case "channel":
                return e.channelId;
            case "user":
                return Y
        }
    }

    function Z(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = J(e),
            o = er.indices[r];
        return null != o ? ("fetchState" in t && o.fetchState.fetching && o.fetchState.abort.abort(), er.indices[r] = G({}, o, t)) : n && (er.indices[r] = G({
            serverVersion: W,
            fetchState: {
                fetching: !1
            }
        }, t)), o
    }

    function $(e) {
        var t = J(e),
            n = er.indices[t];
        (null == n ? void 0 : n.fetchState.fetching) && n.fetchState.abort.abort(), delete er.indices[t]
    }

    function ee() {
        var e = !0,
            t = !1,
            n = void 0;
        try {
            for (var r, o = Object.values(er.indices)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                var i = r.value;
                i.fetchState.fetching && i.fetchState.abort.abort()
            }
        } catch (e) {
            t = !0, n = e
        } finally {
            try {
                !e && null != o.return && o.return()
            } finally {
                if (t) throw n
            }
        }
        er.indices = {}
    }

    function et() {
        Z({
            type: "user"
        }, {
            serverVersion: W
        })
    }
    var en = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && j(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = k(t);
            if (n) {
                var a = k(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : M(e)
        });

        function u() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), e = a.apply(this, arguments), w(M(e), "indices", {}), w(M(e), "oldLocale", p.default.locale), w(M(e), "collator", new Intl.Collator(p.default.locale, Q)), e
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(p.default), this.syncWith([p.default], function() {
                    var e;
                    (e = p.default.locale) !== er.oldLocale && (ee(), er.collator = new Intl.Collator(e, {
                        sensitivity: "accent",
                        numeric: !0
                    }), er.oldLocale = e)
                })
            }
        }, {
            key: "getContextState",
            value: function(e) {
                var t, n;
                return null != e && ef(e) ? null !== (n = this.indices[null !== (t = e.guild_id) && void 0 !== t ? t : e.id]) && void 0 !== n ? n : q : X
            }
        }, {
            key: "getUserState",
            value: function() {
                var e;
                return (0, N.isUserInUserAppExperiment)({
                    location: "getUserState"
                }, {
                    autoTrackExposure: !1
                }) ? null !== (e = this.indices[Y]) && void 0 !== e ? e : q : X
            }
        }, {
            key: "query",
            value: function(e, t, n) {
                if (null == h.default.getCurrentUser()) return z;
                var r = this.getContextState(e),
                    o = this.getUserState(),
                    i = (0, R.buildPermissionContext)(e, t.commandType),
                    a = !1 !== t.applicationCommands && i.hasBaseAccessPermissions,
                    u = !1;
                n.allowFetch && (a && ef(e) && (O.default.track(D.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                    miss: null == r.result,
                    size: Object.keys(er.indices).length
                }), ed(r) && (null != e.guild_id ? (0, g.requestApplicationCommandIndex)({
                    type: "guild",
                    guildId: e.guild_id
                }) : (0, g.requestApplicationCommandIndex)({
                    type: "channel",
                    channelId: e.id
                }), u = !0)), (0, N.isUserInUserAppExperiment)({
                    location: "query"
                }) && ed(o) && ((0, g.requestApplicationCommandIndex)({
                    type: "user"
                }), u = !0));
                var s = el({
                    permissionContext: i,
                    text: t.text,
                    allowApplicationCommands: a,
                    builtIns: t.builtIns,
                    scoreMethod: n.scoreMethod,
                    allowEmptySections: n.allowEmptySections,
                    contextState: r,
                    userState: o
                });
                return s.loading = s.loading || u, s
            }
        }], U(r.prototype, o), i && U(r, i), u
    }(c.default.Store);
    w(en, "displayName", "ApplicationCommandIndexStore");
    var er = new en(f.default, {
        LOGOUT: ee,
        CONNECTION_OPEN: function() {
            var e = !0,
                t = !1,
                n = void 0;
            try {
                for (var r, o = Object.values(er.indices)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) r.value.serverVersion = W
            } catch (e) {
                t = !0, n = e
            } finally {
                try {
                    !e && null != o.return && o.return()
                } finally {
                    if (t) throw n
                }
            }
        },
        APPLICATION_COMMAND_INDEX_FETCH_REQUEST: function(e) {
            var t, n = e.target,
                r = e.start;
            if (ed(null !== (t = er.indices[J(n)]) && void 0 !== t ? t : q)) {
                var o = new AbortController;
                Z(n, {
                    fetchState: {
                        fetching: !0,
                        abort: o
                    }
                }, !0), (0, g.fetchApplicationCommandIndex)(n, r, o)
            }
        },
        APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: function(e) {
            var t, n = e.target,
                r = e.index,
                o = null === (f = h.default.getCurrentUser()) || void 0 === f ? void 0 : f.id;
            if (null == o) return !1;
            var i = {},
                a = {},
                u = new Set,
                s = !0,
                l = !1,
                c = void 0;
            try {
                for (var f, _, p = r.applications[Symbol.iterator](); !(s = (_ = p.next()).done); s = !0) {
                    var m = _.value;
                    if (null == m.bot && null != m.bot_id) {
                        a[m.bot_id] = m.id;
                        var y = h.default.getUser(m.bot_id);
                        null != y ? m.bot = y : u.add(m.bot_id)
                    } else null != m.bot && (a[m.bot.id] = m.id);
                    var I = {
                        descriptor: B(G({}, (0, N.getApplicationCommandSection)(function(e) {
                            return {
                                description: e.description,
                                icon: e.icon,
                                id: e.id,
                                name: e.name,
                                bot: e.bot
                            }
                        }(m))), {
                            permissions: null != m.permissions ? (0, E.keyPermissions)(ep(m.permissions, o)) : void 0,
                            botId: m.bot_id
                        }),
                        commands: {}
                    };
                    i[m.id] = I
                }
            } catch (e) {
                l = !0, c = e
            } finally {
                try {
                    !s && null != p.return && p.return()
                } finally {
                    if (l) throw c
                }
            }
            "guild" === n.type && u.size > 0 && d.default.requestMembersById(n.guildId, V(u));
            var O = !0,
                T = !1,
                S = void 0;
            try {
                for (var v, g = (0, N.buildApplicationCommands)(r.application_commands.map(function(e) {
                        return function(e, t) {
                            var n, r, o, i, a, u = B(G({}, e), {
                                description: null !== (o = null !== (r = e.description_default) && void 0 !== r ? r : e.description) && void 0 !== o ? o : "",
                                dm_permission: e.dm_permission,
                                name: null !== (i = e.name_default) && void 0 !== i ? i : e.name,
                                options: null !== (a = null === (n = e.options) || void 0 === n ? void 0 : n.map(e_)) && void 0 !== a ? a : [],
                                permissions: null != e.permissions ? ep(e.permissions, t) : void 0
                            });
                            return e.description !== e.description_default && (u.description_localized = e.description), e.name !== e.name_default && (u.name_localized = e.name), u
                        }(e, o)
                    }), !0)[Symbol.iterator](); !(O = (v = g.next()).done); O = !0) {
                    var A = v.value,
                        b = i[A.applicationId];
                    if (null == b) {
                        x.error("Command has no matching application");
                        continue
                    }
                    b.commands[A.id] = A
                }
            } catch (e) {
                T = !0, S = e
            } finally {
                try {
                    !O && null != g.return && g.return()
                } finally {
                    if (T) throw S
                }
            }
            var R = null !== (t = r.version) && void 0 !== t ? t : K;
            Z(n, {
                serverVersion: R,
                result: {
                    sections: i,
                    sectionIdsByBotId: a,
                    version: R
                },
                fetchState: {
                    fetching: !1
                }
            })
        },
        APPLICATION_COMMAND_INDEX_FETCH_FAILURE: function(e) {
            Z(e.target, {
                fetchState: {
                    fetching: !1,
                    retryAfter: Date.now() + 5e3
                }
            })
        },
        APPLICATION_COMMAND_EXECUTE_BAD_VERSION: function(e) {
            var t, n = e.channelId,
                r = e.guildId;
            Z(t = null != r ? {
                type: "guild",
                guildId: r
            } : {
                type: "channel",
                channelId: n
            }, {
                serverVersion: W
            })
        },
        CHANNEL_DELETE: function(e) {
            $({
                type: "channel",
                channelId: e.channel.id
            })
        },
        GUILD_DELETE: function(e) {
            $({
                type: "guild",
                guildId: e.guild.id
            })
        },
        GUILD_APPLICATION_COMMAND_INDEX_UPDATE: function(e) {
            var t, n = e.guildId,
                r = e.version,
                o = Z({
                    type: "guild",
                    guildId: n
                }, {
                    serverVersion: null != r ? r : W
                }),
                i = null == o ? void 0 : null === (t = o.result) || void 0 === t ? void 0 : t.sectionIdsByBotId;
            if (null != i)
                for (var a in i) {
                    var u = y.default.getDMFromUserId(a);
                    null != u && Z({
                        type: "channel",
                        channelId: u
                    }, {
                        serverVersion: W
                    })
                }
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            return function(e, t) {
                var n, r = J({
                        type: "guild",
                        guildId: e
                    }),
                    o = null === (n = er.indices[r]) || void 0 === n ? void 0 : n.result;
                if (null == o) return !1;
                var i = !1;
                return t.forEach(function(e) {
                    var t = e.user;
                    if (!!t.bot) {
                        var n = o.sectionIdsByBotId[t.id];
                        if (null != n) {
                            var r = o.sections[n];
                            s()(null != r, "Bot has no matching index section"), s()(null != r.descriptor.application, "Bot's index section has no application info");
                            var a = (0, N.getApplicationCommandSection)(B(G({}, r.descriptor.application), {
                                bot: t
                            }));
                            r.descriptor = G({}, r.descriptor, a), i = !0
                        }
                    }
                }), i
            }(e.guildId, e.members)
        },
        USER_APPLICATION_UPDATE: et,
        USER_APPLICATION_REMOVE: et
    });

    function eo(e, t, n) {
        var r = F(a.useState(!0), 2),
            o = r[0],
            i = r[1],
            u = (0, c.useStateFromStoresObject)([er], function() {
                return er.getContextState(e)
            });
        return a.useEffect(function() {
            o && null != e && (n && t && ef(e) && (O.default.track(D.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                miss: null == u.result,
                size: Object.keys(er.indices).length
            }), ed(u) && (null != e.guild_id ? (0, g.requestApplicationCommandIndex)({
                type: "guild",
                guildId: e.guild_id
            }) : (0, g.requestApplicationCommandIndex)({
                type: "channel",
                channelId: e.id
            }))), i(!1))
        }, [u, n, e, t, o]), u
    }

    function ei(e, t) {
        var n = F(a.useState(!0), 2),
            r = n[0],
            o = n[1],
            i = (0, c.useStateFromStoresObject)([er], function() {
                var t;
                return null !== (t = er.indices[e]) && void 0 !== t ? t : q
            });
        return a.useEffect(function() {
            r && null != e && (t && (O.default.track(D.AnalyticEvents.APPLICATION_COMMAND_CACHE_FETCH, {
                miss: null == i.result,
                size: Object.keys(er.indices).length
            }), ed(i) && (0, g.requestApplicationCommandIndex)({
                type: "guild",
                guildId: e
            })), o(!1))
        }, [i, t, e, r]), i
    }

    function ea(e, t) {
        var n = F(a.useState(!0), 2),
            r = n[0],
            o = n[1],
            i = (0, c.useStateFromStoresObject)([er], function() {
                return er.getUserState()
            }),
            u = (0, N.useIsUserInUserAppExperiment)({
                location: "useUserIndexState"
            });
        return a.useEffect(function() {
            r && (t && ed(i) && e && u && (0, g.requestApplicationCommandIndex)({
                type: "user"
            }), o(!1))
        }, [i, t, e, u, r]), i
    }

    function eu(e, t, n, r) {
        var o = function(e, t, n) {
                var r = (0, R.usePermissionContext)(e, t.commandType),
                    o = !1 !== t.applicationCommands && r.hasBaseAccessPermissions,
                    i = eo(e, o, n.allowFetch),
                    u = ea(o, n.allowFetch);
                return a.useMemo(function() {
                    return el({
                        permissionContext: r,
                        text: t.text,
                        allowApplicationCommands: o,
                        builtIns: t.builtIns,
                        scoreMethod: n.scoreMethod,
                        allowEmptySections: n.allowEmptySections,
                        contextState: i,
                        userState: u,
                        sortOptions: n.sortOptions
                    })
                }, [r, t.text, t.builtIns, o, n.scoreMethod, n.allowEmptySections, n.sortOptions, i, u])
            }(e, n, r),
            i = o.descriptors,
            u = o.commands,
            s = o.sectionedCommands,
            l = o.loading,
            c = (0, S.useTopCommands)({
                channel: e,
                guild: t
            });
        return a.useMemo(function() {
            if (!r.includeFrecency || 0 === c.length) return {
                descriptors: i,
                commands: u,
                sectionedCommands: s,
                loading: l
            };
            var n = {
                    channel: e,
                    guild: t
                },
                o = u.filter(function(e) {
                    return c.includes(e.id)
                }).sort(function(e, t) {
                    var r = v.default.getScoreWithoutLoadingLatest(n, e);
                    return v.default.getScoreWithoutLoadingLatest(n, t) - r
                }).splice(0, P.DISCOVERY_COMMANDS_FRECENCY_LIMIT);
            return 0 === o.length ? {
                descriptors: i,
                commands: u,
                sectionedCommands: s,
                loading: l
            } : {
                descriptors: [(0, T.BUILT_IN_SECTIONS)[P.BuiltInSectionId.FRECENCY]].concat(V(i)),
                commands: o.concat(u),
                sectionedCommands: [{
                    section: (0, T.BUILT_IN_SECTIONS)[P.BuiltInSectionId.FRECENCY],
                    data: o
                }].concat(V(s)),
                loading: l
            }
        }, [l, r.includeFrecency, c, e, t, u, i, s])
    }
    t.default = er;
    var es = Object.freeze({
        applications: {
            useFrecency: !1,
            useScore: !1
        },
        commands: {
            useFrecency: !0,
            useScore: !0
        }
    });

    function el(e) {
        var t = e.permissionContext,
            n = e.contextState,
            r = e.userState,
            o = e.text,
            i = e.builtIns,
            a = void 0 === i ? A.BuiltInCommandFilter.ALLOW : i,
            u = e.allowApplicationCommands,
            l = e.allowEmptySections,
            c = void 0 !== l && l,
            f = e.scoreMethod,
            d = void 0 === f ? A.ScoreMethod.NONE : f,
            E = e.sortOptions,
            p = void 0 === E ? es : E,
            y = t.commandType,
            h = null == o ? void 0 : o.toLowerCase(),
            O = null == h ? void 0 : h.split(" "),
            S = a === A.BuiltInCommandFilter.ONLY_TEXT,
            g = a !== A.BuiltInCommandFilter.DENY ? (0, T.getBuiltInCommands)(y, !0, S) : [],
            b = [],
            N = {
                permissionContext: t,
                query: h,
                splitQuery: O,
                allowEmptySections: c,
                scoreMethod: d
            };
        if (void 0 === u || u) {
            var R = null !== (j = null === (w = n.result) || void 0 === w ? void 0 : w.sections) && void 0 !== j ? j : {},
                C = null !== (F = null === (k = r.result) || void 0 === k ? void 0 : k.sections) && void 0 !== F ? F : {},
                D = V(Object.keys(R)).concat(V(Object.keys(C).filter(function(e) {
                    return !(e in R)
                }))),
                L = !0,
                M = !1,
                U = void 0;
            try {
                for (var w, k, j, F, H, x = D[Symbol.iterator](); !(L = (H = x.next()).done); L = !0) {
                    var Y = H.value,
                        W = R[Y],
                        K = C[Y],
                        z = void 0,
                        X = void 0;
                    if (null != W && null != K) {
                        for (var q in z = K.descriptor, X = [], K.commands) {
                            var Q = K.commands[q];
                            X.push(Q)
                        }
                        for (var J in W.commands)
                            if (!(J in K.commands)) {
                                var Z = W.commands[J];
                                X.push(Z)
                            }
                    } else null != W ? (z = W.descriptor, X = Object.values(W.commands)) : null != K && (z = K.descriptor, X = Object.values(K.commands));
                    s()(null != z, "Failed to select application descriptor"), s()(null != X, "Failed to select list of application commands");
                    var $ = ec(z, X, N);
                    null != $ && b.push($)
                }
            } catch (e) {
                M = !0, U = e
            } finally {
                try {
                    !L && null != x.return && x.return()
                } finally {
                    if (M) throw U
                }
            }
            p.applications.useFrecency && m.FrecencyUserSettingsActionCreators.loadIfNecessary(), b.sort(function(e, t) {
                if (p.applications.useScore && d === A.ScoreMethod.APPLICATION_ONLY) {
                    var n, r, o, i, a = null !== (o = null === (n = e.data[0]) || void 0 === n ? void 0 : n.score) && void 0 !== o ? o : Number.MAX_VALUE,
                        u = null !== (i = null === (r = t.data[0]) || void 0 === r ? void 0 : r.score) && void 0 !== i ? i : Number.MAX_VALUE;
                    if (a !== u) return a - u
                }
                if (p.applications.useFrecency) {
                    var s = _.default.getScoreWithoutLoadingLatest(e.section.id),
                        l = _.default.getScoreWithoutLoadingLatest(t.section.id);
                    if (s !== l) return l - s
                }
                return em(e.section.name, t.section.name)
            })
        }
        if (g.length > 0 || !0 === c) {
            var ee = ec(T.BUILT_IN_SECTIONS[P.BuiltInSectionId.BUILT_IN], g, N);
            null != ee && b.push(ee)
        }
        var et = b.flatMap(function(e) {
            return e.data.map(function(t) {
                return B(G({}, t), {
                    section: e.section
                })
            })
        });
        if (d === A.ScoreMethod.COMMAND_ONLY || d === A.ScoreMethod.COMMAND_OR_APPLICATION) {
            var en = t.context,
                er = I.default.getGuild(t.context.guild_id);
            p.commands.useFrecency && m.FrecencyUserSettingsActionCreators.loadIfNecessary(), et.sort(function(e, t) {
                if (p.commands.useScore) {
                    var n, r, o = null !== (n = e.score) && void 0 !== n ? n : 0,
                        i = null !== (r = t.score) && void 0 !== r ? r : 0;
                    if (o !== i) return o - i
                }
                if (p.commands.useFrecency) {
                    var a = v.default.getScoreWithoutLoadingLatest({
                            channel: en,
                            guild: er
                        }, e),
                        u = v.default.getScoreWithoutLoadingLatest({
                            channel: en,
                            guild: er
                        }, t);
                    if (a !== u) return u - a
                }
                return em(e.displayName, t.displayName)
            })
        }
        return {
            commands: et,
            descriptors: b.map(function(e) {
                return e.section
            }),
            sectionedCommands: b,
            loading: (null == n ? void 0 : n.fetchState.fetching) === !0 || (null == r ? void 0 : r.fetchState.fetching) === !0
        }
    }

    function ec(e, t, n) {
        var r, o = n.query,
            i = n.splitQuery,
            a = n.allowEmptySections,
            u = n.scoreMethod,
            s = n.permissionContext,
            l = s.context,
            c = s.userId,
            f = s.roleIds,
            d = s.isImpersonating,
            _ = null != l.guild_id ? C.computeAllowedForUser(e.permissions, l.guild_id, c, f, d) : null,
            E = null != l.guild_id ? C.computeAllowedForChannel(e.permissions, l, l.guild_id) : null,
            p = [],
            m = !0,
            y = !1,
            I = void 0;
        try {
            for (var h, O = t[Symbol.iterator](); !(m = (h = O.next()).done); m = !0) {
                var T = h.value;
                C.hasAccess(T, s, _, E, e.botId) === C.HasAccessResult.ALLOWED && p.push(T)
            }
        } catch (e) {
            y = !0, I = e
        } finally {
            try {
                !m && null != O.return && O.return()
            } finally {
                if (y) throw I
            }
        }
        return 0 !== (r = u !== A.ScoreMethod.NONE && null != o && null != i ? function(e, t, n, r, o) {
            var i = [];
            if (o === A.ScoreMethod.APPLICATION_ONLY || o === A.ScoreMethod.COMMAND_OR_APPLICATION) {
                var a = r.name.toLocaleLowerCase();
                a.startsWith(e) ? d = 5 : a.includes(e) && (d = 6)
            }
            var u = t[0],
                s = t.slice(1).join(" "),
                l = !0,
                c = !1,
                f = void 0;
            try {
                for (var d, _, E = n[Symbol.iterator](); !(l = (_ = E.next()).done); l = !0) {
                    var p, m = _.value,
                        y = void 0;
                    y = o === A.ScoreMethod.COMMAND_ONLY || o === A.ScoreMethod.COMMAND_OR_APPLICATION ? null !== (p = function(e, t, n, r) {
                        var o = e.name,
                            i = e.displayName;
                        if (o.startsWith(t) || i.startsWith(t)) return 0;
                        if (o.startsWith(n) && o.split(" ").slice(1).join(" ").startsWith(r) || i.startsWith(n) && i.split(" ").slice(1).join(" ").startsWith(r)) return 1;
                        if (o.includes(t) || (null == i ? void 0 : i.includes(t))) return 2;
                        var a = !1,
                            u = !0,
                            s = !1,
                            l = void 0;
                        try {
                            for (var c, f, d = (null !== (c = e.options) && void 0 !== c ? c : [])[Symbol.iterator](); !(u = (f = d.next()).done); u = !0) {
                                var _ = f.value,
                                    E = _.name,
                                    p = _.serverLocalizedName;
                                if (E.startsWith(t) || "".concat(o, " ").concat(E).startsWith(t) || null != i && "".concat(i, " ").concat(E).startsWith(t) || null != p && (p.startsWith(t) || "".concat(o, " ").concat(p).startsWith(t) || null != i && "".concat(i, " ").concat(p).startsWith(t))) return 3;
                                (E.includes(t) || (null == p ? void 0 : p.includes(t))) && (a = !0)
                            }
                        } catch (e) {
                            s = !0, l = e
                        } finally {
                            try {
                                !u && null != d.return && d.return()
                            } finally {
                                if (s) throw l
                            }
                        }
                        if (a) return 4
                    }(m, e, u, s)) && void 0 !== p ? p : d : d, void 0 !== y && i.push(B(G({}, m), {
                        score: y
                    }))
                }
            } catch (e) {
                c = !0, f = e
            } finally {
                try {
                    !l && null != E.return && E.return()
                } finally {
                    if (c) throw f
                }
            }
            return i
        }(o, i, p, e, u) : p).length || a ? ((u === A.ScoreMethod.NONE || u === A.ScoreMethod.APPLICATION_ONLY) && r.sort(function(e, t) {
            return em(e.displayName, t.displayName)
        }), {
            section: e,
            data: r
        }) : null
    }

    function ef(e) {
        var t;
        return null != e.guild_id || e.type === D.ChannelTypes.DM && (null === (t = h.default.getUser(e.getRecipientId())) || void 0 === t ? void 0 : t.bot) === !0
    }

    function ed(e) {
        return !! function(e) {
            var t;
            return (null === (t = e.result) || void 0 === t ? void 0 : t.version) !== e.serverVersion
        }(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
    }

    function e_(e) {
        var t, n, r, o, i = B(G({}, e), {
            choices: null === (t = e.choices) || void 0 === t ? void 0 : t.map(eE),
            description: null !== (r = e.description_default) && void 0 !== r ? r : e.description,
            name: null !== (o = e.name_default) && void 0 !== o ? o : e.name,
            options: null === (n = e.options) || void 0 === n ? void 0 : n.map(e_)
        });
        return e.description !== e.description_default && (i.description_localized = e.description), e.name !== e.name_default && (i.name_localized = e.name), i
    }

    function eE(e) {
        var t, n = B(G({}, e), {
            name: null !== (t = e.name_default) && void 0 !== t ? t : e.name
        });
        return e.name !== e.name_default && (n.name_localized = e.name), n
    }

    function ep(e, t) {
        var n = [];
        if (null != e.user && n.push({
                type: b.ApplicationCommandPermissionType.USER,
                id: t,
                permission: e.user
            }), null != e.channels) {
            var r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = Object.entries(e.channels)[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = F(a.value, 2),
                        l = s[0],
                        c = s[1];
                    n.push({
                        type: b.ApplicationCommandPermissionType.CHANNEL,
                        id: l,
                        permission: c
                    })
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && null != u.return && u.return()
                } finally {
                    if (o) throw i
                }
            }
        }
        if (null != e.roles) {
            var f = !0,
                d = !1,
                _ = void 0;
            try {
                for (var E, p = Object.entries(e.roles)[Symbol.iterator](); !(f = (E = p.next()).done); f = !0) {
                    var m = F(E.value, 2),
                        y = m[0],
                        I = m[1];
                    n.push({
                        type: b.ApplicationCommandPermissionType.ROLE,
                        id: y,
                        permission: I
                    })
                }
            } catch (e) {
                d = !0, _ = e
            } finally {
                try {
                    !f && null != p.return && p.return()
                } finally {
                    if (d) throw _
                }
            }
        }
        return n
    }(r = i || (i = {}))[r.COMMAND_NAME_STARTS_WITH = 0] = "COMMAND_NAME_STARTS_WITH", r[r.STARTS_WITH_COMMAND_NAME = 1] = "STARTS_WITH_COMMAND_NAME", r[r.COMMAND_NAME_CONTAINS = 2] = "COMMAND_NAME_CONTAINS", r[r.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = 3] = "STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME", r[r.OPTION_NAME_CONTAINS = 4] = "OPTION_NAME_CONTAINS", r[r.SECTION_NAME_STARTS_WITH = 5] = "SECTION_NAME_STARTS_WITH", r[r.SECTION_NAME_CONTAINS = 6] = "SECTION_NAME_CONTAINS";

    function em(e, t) {
        return er.collator.compare(e, t)
    }
}