function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChunkIndex: function() {
            return x
        },
        getChunkNumbers: function() {
            return Y
        },
        useIsMakingRequest: function() {
            return z
        },
        useIsStillIndexing: function() {
            return X
        },
        useMembersSearchRecordStore: function() {
            return k
        }
    });
    var r, o, i, a, u = n("348327"),
        s = n.n(u),
        l = n("392711"),
        c = n("652874"),
        f = n("188129"),
        d = n("849680"),
        _ = n("807471"),
        E = n("162677"),
        p = n("523018"),
        m = n("762409"),
        y = n("282172"),
        I = n("180490"),
        h = n("997587"),
        O = n("720575");

    function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function S(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function v(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function g(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    v(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    v(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function A(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function N(e) {
        return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function R(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                b(e, t, n[t])
            })
        }
        return e
    }

    function C(e, t) {
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

    function P(e, t) {
        return (P = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function D(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return T(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function L(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var M = new f.Logger("MemberSafetySearchManager");

    function U(e) {
        return "guild_".concat(e)
    }

    function w(e) {
        return {
            requestState: e,
            abortController: null,
            lastUpdated: Date.now(),
            query: null,
            cursor: null,
            previousPagination: null,
            sort: null,
            elasticSearchCursor: null
        }
    }(r = i || (i = {}))[r.FAILED = 0] = "FAILED", r[r.UNFETCHED = 1] = "UNFETCHED", r[r.PENDING = 2] = "PENDING", r[r.SUCCEEDED = 3] = "SUCCEEDED", r[r.STILL_INDEXING = 4] = "STILL_INDEXING";
    var k = (0, c.default)(function(e) {
        return {}
    });

    function G(e, t) {
        var n = k.getState()[e];
        return null == n && (n = w(1)), n = R({}, n, t), k.setState(function(t) {
            return C(R({}, t), b({}, e, n))
        }), n
    }

    function B(e) {
        return k.getState()[e]
    }

    function j(e) {
        var t = B(e);
        return null == t && G(e, t = w(1)), t
    }

    function F(e) {
        return V.apply(this, arguments)
    }

    function V() {
        return (V = g(function(e) {
            return L(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, (0, d.sleep)(200)];
                    case 1:
                        if (t.sent(), null == B(e)) return [2];
                        return G(e, {
                            requestState: 3,
                            abortController: null,
                            lastUpdated: Date.now()
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function H(e) {
        var t;
        t = U(e), k.setState(function(e) {
            var n = R({}, e);
            return delete n[t], n
        })
    }

    function x(e, t) {
        return Math.floor(Math.max(e - 1, 0) / t)
    }

    function Y(e) {
        var t = (0, m.getSearchChunkLimit)(e),
            n = e.pageSize * (e.currentPage - 1),
            r = e.pageSize * e.currentPage,
            o = e.pageSize * (e.currentPage + 1);
        return {
            previousPageChunkNumber: x(n, t),
            currentPageChunkNumber: x(r, t),
            nextPageChunkNumber: x(o, t)
        }
    }(o = a || (a = {}))[o.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", o[o.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", o[o.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", o[o.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";

    function W(e) {
        return K.apply(this, arguments)
    }

    function K() {
        return (K = g(function(e) {
            var t, n, r, o, i, a, u, c, f, d, _, T, S;
            return L(this, function(v) {
                var g, A, b, N, P, L, w, k, V, H, x, W, K;
                switch (v.label) {
                    case 0:
                        ;
                        if (t = O.default.getSearchStateByGuildId(e), n = O.default.getPaginationStateByGuildId(e), o = j(r = U(e)), a = (i = D(function(e, t, n) {
                                var r, o, i, a, u, s, l = function(e, t) {
                                        var n, r = Y(t),
                                            o = r.currentPageChunkNumber,
                                            i = r.previousPageChunkNumber,
                                            a = r.nextPageChunkNumber,
                                            u = j(U(e)).previousPagination,
                                            s = t.currentPage,
                                            l = null !== (n = null == u ? void 0 : u.currentPage) && void 0 !== n ? n : 0,
                                            c = O.default.getElasticSearchPaginationByGuildId(e);
                                        switch (!0) {
                                            case null == c:
                                            case o === a && 0 === o:
                                                return 0;
                                            case o === a && o === i:
                                                return 1;
                                            case l < s && o < a:
                                                return 2;
                                            case l > s && o >= i:
                                                if (0 < o) return 3;
                                                return 0;
                                            default:
                                                return 1
                                        }
                                    }(e, n),
                                    c = O.default.getElasticSearchPaginationByGuildId(e),
                                    f = (0, m.getSearchChunkLimit)(n);
                                switch (l) {
                                    case 0:
                                        return [null, {
                                            limit: f
                                        }];
                                    case 1:
                                        return [null !== (r = t.cursor) && void 0 !== r ? r : null, {
                                            limit: f,
                                            after: null !== (o = t.cursor) && void 0 !== o ? o : void 0
                                        }];
                                    case 2:
                                        return [null !== (i = null == c ? void 0 : c.after) && void 0 !== i ? i : null, {
                                            limit: f,
                                            after: null !== (a = null == c ? void 0 : c.after) && void 0 !== a ? a : void 0
                                        }];
                                    case 3:
                                        return [null !== (u = null == c ? void 0 : c.before) && void 0 !== u ? u : null, {
                                            limit: f,
                                            before: null !== (s = null == c ? void 0 : c.before) && void 0 !== s ? s : void 0
                                        }];
                                    default:
                                        (0, E.assertNever)(l)
                                }
                            }(e, o, n), 2))[0], u = i[1], g = function(e) {
                                var t, n, r = {},
                                    o = {},
                                    i = e.query;
                                if (null != (t = i) && t.length > 1) {
                                    var a = D((0, y.splitQuery)(i), 2),
                                        u = a[0],
                                        s = a[1];
                                    u.length > 0 && (r.usernames = {
                                        or_query: u
                                    }), s.length > 0 && (r.user_id = {
                                        or_query: s
                                    })
                                }
                                var l = e.requireUnusualDmActivity,
                                    c = e.requireCommunicationDisabled,
                                    f = e.requireUnusualAccountActivity,
                                    d = e.requireUsernameQuarantined,
                                    _ = {};
                                l && (_.unusual_dm_activity_until = {
                                    range: {
                                        gte: Date.now() - I.UNUSUAL_DM_COMPARISON_DELTA
                                    }
                                }), c && (_.communication_disabled_until = {
                                    range: {
                                        gte: Date.now()
                                    }
                                }), f && (_.unusual_account_activity = f), d && (_.automod_quarantined_username = d), Object.keys(_).length > 0 && (o.safety_signals = _);
                                var E = e.selectedRoleIds;
                                E.size > 0 && (r.role_ids = {
                                    and_query: Array.from(E)
                                });
                                var m = e.selectedJoinDateOption;
                                null != m.afterDate && (r.guild_joined_at = {
                                    range: {
                                        gte: m.afterDate,
                                        lte: null !== (n = m.beforeDate) && void 0 !== n ? n : void 0
                                    }
                                });
                                var h = e.selectedAccountAgeOption;
                                if (null != h.afterDate) {
                                    var O = r.user_id;
                                    r.user_id = C(R({}, O), {
                                        range: {
                                            gte: p.default.fromTimestamp(h.afterDate),
                                            lte: null != h.beforeDate ? p.default.fromTimestamp(h.beforeDate) : void 0
                                        }
                                    })
                                }
                                var T = e.selectedSourceInviteCode;
                                null != T && (r.source_invite_code = {
                                    or_query: [T]
                                });
                                var S = e.selectedJoinSourceType;
                                null != S && (r.join_source_type = {
                                    or_query: [S]
                                });
                                var v = {
                                        or_query: o,
                                        and_query: r
                                    },
                                    g = e.selectedSort;
                                return null != g && (v.sort = g), v
                            }(t), c = null == (A = u) ? g : R({}, g, A), d = null !== (f = t.selectedSort) && void 0 !== f ? f : I.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC, b = r, N = c, P = j(b), s()(P.query, N) && (0, l.isEqual)(a, o.cursor)) return [2];
                        L = r, w = c, k = a, V = n, H = d, (null == (W = B(L)) ? void 0 : W.requestState) === 2 && (null === (x = W.abortController) || void 0 === x || x.abort()), _ = G(L, {
                            requestState: 2,
                            abortController: new AbortController,
                            lastUpdated: Date.now(),
                            query: w,
                            cursor: k,
                            previousPagination: V,
                            sort: H
                        }), v.label = 1;
                    case 1:
                        if (v.trys.push([1, 3, , 4]), M.info("Making member search request", {
                                query: _.query,
                                guildId: e
                            }), null == _.query) throw Error("Query is null");
                        return [4, (0, h.searchGuildMembers)(e, _.query, {
                            signal: null !== (S = null === (T = _.abortController) || void 0 === T ? void 0 : T.signal) && void 0 !== S ? S : void 0
                        })];
                    case 2:
                        return v.sent(), [3, 4];
                    case 3:
                        ;
                        if (-1 === v.sent().code) return [2];
                        return null != B(K = r) && G(K, {
                            requestState: 0,
                            abortController: null,
                            lastUpdated: Date.now()
                        }), [2];
                    case 4:
                        return [4, F(r)];
                    case 5:
                        return v.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }

    function z(e) {
        return k(function(t) {
            var n;
            return (null === (n = t[U(e)]) || void 0 === n ? void 0 : n.requestState) === 2
        })
    }

    function X(e) {
        return k(function(t) {
            var n;
            return (null === (n = t[U(e)]) || void 0 === n ? void 0 : n.requestState) === 4
        })
    }
    var q = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && P(e, t)
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
            var e, r, o, i = N(t);
            if (n) {
                var a = N(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : S(e)
        });

        function u() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), e = a.apply(this, arguments), b(S(e), "actions", {
                INITIALIZE_MEMBER_SAFETY_STORE: function(t) {
                    return e.handleInitialize(t)
                },
                GUILD_DELETE: function(t) {
                    return e.handleGuildDelete(t)
                },
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(t) {
                    return e.handleSearchStateUpdate(t)
                },
                MEMBER_SAFETY_PAGINATION_UPDATE: function(t) {
                    return e.handlePaginationUpdate(t)
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(t) {
                    return e.handleGuildMemberSearchSuccess(t)
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: function(t) {
                    return e.handleGuildMemberSearchStillIndexing(t)
                },
                MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(t) {
                    return e.handleNewMemberTimestampRefresh(t)
                }
            }), e
        }
        return r = u, o = [{
            key: "handleInitialize",
            value: function(e) {
                var t = e.guildId;
                return H(t), W(t)
            }
        }, {
            key: "handleGuildDelete",
            value: function(e) {
                return H(e.guild.id)
            }
        }, {
            key: "handleSearchStateUpdate",
            value: function(e) {
                return W(e.guildId)
            }
        }, {
            key: "handlePaginationUpdate",
            value: function(e) {
                return W(e.guildId)
            }
        }, {
            key: "handleGuildMemberSearchSuccess",
            value: function(e) {
                return F(U(e.guildId))
            }
        }, {
            key: "handleGuildMemberSearchStillIndexing",
            value: function(e) {
                G(U(e.guildId), {
                    requestState: 4,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }
        }, {
            key: "handleNewMemberTimestampRefresh",
            value: function(e) {
                return W(e.guildId)
            }
        }], A(r.prototype, o), i && A(r, i), u
    }(_.default);
    t.default = new q
}