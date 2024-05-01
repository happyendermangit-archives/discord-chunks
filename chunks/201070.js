function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChunkIndex: function() {
            return M
        },
        getChunkNumbers: function() {
            return y
        },
        useIsMakingRequest: function() {
            return U
        },
        useIsStillIndexing: function() {
            return b
        },
        useMembersSearchRecordStore: function() {
            return R
        }
    }), n("47120"), n("411104");
    var i, r, a, s, o = n("348327"),
        l = n.n(o),
        u = n("392711"),
        d = n("652874"),
        _ = n("259443"),
        c = n("379649"),
        E = n("147913"),
        I = n("823379"),
        T = n("709054"),
        f = n("823596"),
        S = n("733026"),
        h = n("588215"),
        A = n("496135"),
        m = n("893966");
    let N = new _.Logger("MemberSafetySearchManager");

    function p(e) {
        return "guild_".concat(e)
    }

    function O(e) {
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
    }(a = i || (i = {}))[a.FAILED = 0] = "FAILED", a[a.UNFETCHED = 1] = "UNFETCHED", a[a.PENDING = 2] = "PENDING", a[a.SUCCEEDED = 3] = "SUCCEEDED", a[a.STILL_INDEXING = 4] = "STILL_INDEXING";
    let R = (0, d.default)(e => ({}));

    function C(e, t) {
        let n = R.getState()[e];
        return null == n && (n = O(1)), n = {
            ...n,
            ...t
        }, R.setState(t => ({
            ...t,
            [e]: n
        })), n
    }

    function g(e) {
        return R.getState()[e]
    }

    function L(e) {
        let t = g(e);
        return null == t && C(e, t = O(1)), t
    }
    async function v(e) {
        await (0, c.sleep)(200), null != g(e) && C(e, {
            requestState: 3,
            abortController: null,
            lastUpdated: Date.now()
        })
    }

    function D(e) {
        var t;
        t = p(e), R.setState(e => {
            let n = {
                ...e
            };
            return delete n[t], n
        })
    }

    function M(e, t) {
        return Math.floor(Math.max(e - 1, 0) / t)
    }

    function y(e) {
        let t = (0, f.getSearchChunkLimit)(e),
            n = e.pageSize * (e.currentPage - 1),
            i = e.pageSize * e.currentPage,
            r = e.pageSize * (e.currentPage + 1);
        return {
            previousPageChunkNumber: M(n, t),
            currentPageChunkNumber: M(i, t),
            nextPageChunkNumber: M(r, t)
        }
    }(s = r || (r = {}))[s.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", s[s.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", s[s.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", s[s.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
    async function P(e) {
        var t, n, i, r, a, s;
        let o = m.default.getSearchStateByGuildId(e),
            d = m.default.getPaginationStateByGuildId(e),
            _ = p(e),
            c = L(_),
            [E, O] = function(e, t, n) {
                var i, r, a, s, o, l;
                let u = function(e, t) {
                        var n;
                        let {
                            currentPageChunkNumber: i,
                            previousPageChunkNumber: r,
                            nextPageChunkNumber: a
                        } = y(t), {
                            previousPagination: s
                        } = L(p(e)), o = t.currentPage, l = null !== (n = null == s ? void 0 : s.currentPage) && void 0 !== n ? n : 0, u = m.default.getElasticSearchPaginationByGuildId(e);
                        switch (!0) {
                            case null == u:
                            case i === a && 0 === i:
                                return 0;
                            case i === a && i === r:
                                return 1;
                            case l < o && i < a:
                                return 2;
                            case l > o && i >= r:
                                if (0 < i) return 3;
                                return 0;
                            default:
                                return 1
                        }
                    }(e, n),
                    d = m.default.getElasticSearchPaginationByGuildId(e),
                    _ = (0, f.getSearchChunkLimit)(n);
                switch (u) {
                    case 0:
                        return [null, {
                            limit: _
                        }];
                    case 1:
                        return [null !== (i = t.cursor) && void 0 !== i ? i : null, {
                            limit: _,
                            after: null !== (r = t.cursor) && void 0 !== r ? r : void 0
                        }];
                    case 2:
                        return [null !== (a = null == d ? void 0 : d.after) && void 0 !== a ? a : null, {
                            limit: _,
                            after: null !== (s = null == d ? void 0 : d.after) && void 0 !== s ? s : void 0
                        }];
                    case 3:
                        return [null !== (o = null == d ? void 0 : d.before) && void 0 !== o ? o : null, {
                            limit: _,
                            before: null !== (l = null == d ? void 0 : d.before) && void 0 !== l ? l : void 0
                        }];
                    default:
                        (0, I.assertNever)(u)
                }
            }(e, c, d);
        let R = (r = function(e) {
                var t, n;
                let i = {},
                    r = {},
                    {
                        query: a
                    } = e;
                if (null != (t = a) && t.length > 1) {
                    let [e, t] = (0, S.splitQuery)(a);
                    e.length > 0 && (i.usernames = {
                        or_query: e
                    }), t.length > 0 && (i.user_id = {
                        or_query: t
                    })
                }
                let {
                    requireUnusualDmActivity: s,
                    requireCommunicationDisabled: o,
                    requireUnusualAccountActivity: l,
                    requireUsernameQuarantined: u
                } = e, d = {};
                s && (d.unusual_dm_activity_until = {
                    range: {
                        gte: Date.now() - h.UNUSUAL_DM_COMPARISON_DELTA
                    }
                }), o && (d.communication_disabled_until = {
                    range: {
                        gte: Date.now()
                    }
                }), l && (d.unusual_account_activity = l), u && (d.automod_quarantined_username = u), Object.keys(d).length > 0 && (r.safety_signals = d);
                let {
                    selectedRoleIds: _
                } = e;
                _.size > 0 && (i.role_ids = {
                    and_query: Array.from(_)
                });
                let {
                    selectedJoinDateOption: c
                } = e;
                if (null != c.afterDate) {
                    ;
                    i.guild_joined_at = {
                        range: {
                            gte: c.afterDate,
                            lte: null !== (n = c.beforeDate) && void 0 !== n ? n : void 0
                        }
                    }
                }
                let {
                    selectedAccountAgeOption: E
                } = e;
                if (null != E.afterDate) {
                    let e = i.user_id;
                    i.user_id = {
                        ...e,
                        range: {
                            gte: T.default.fromTimestamp(E.afterDate),
                            lte: null != E.beforeDate ? T.default.fromTimestamp(E.beforeDate) : void 0
                        }
                    }
                }
                let {
                    selectedSourceInviteCode: I
                } = e;
                null != I && (i.source_invite_code = {
                    or_query: [I]
                });
                let {
                    selectedJoinSourceType: f
                } = e;
                null != f && (i.join_source_type = {
                    or_query: [f]
                });
                let A = {
                        or_query: r,
                        and_query: i
                    },
                    {
                        selectedSort: m
                    } = e;
                return null != m && (A.sort = m), A
            }(o), null == (a = O) ? r : {
                ...r,
                ...a
            }),
            D = null !== (t = o.selectedSort) && void 0 !== t ? t : h.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC;
        if (function(e, t) {
                let n = L(e);
                return l()(n.query, t)
            }(_, R) && (0, u.isEqual)(E, c.cursor)) return;
        let M = function(e, t, n, i, r) {
            let a = g(e);
            if ((null == a ? void 0 : a.requestState) === 2) {
                var s;
                null === (s = a.abortController) || void 0 === s || s.abort()
            }
            return C(e, {
                requestState: 2,
                abortController: new AbortController,
                lastUpdated: Date.now(),
                query: t,
                cursor: n,
                previousPagination: i,
                sort: r
            })
        }(_, R, E, d, D);
        try {
            if (N.info("Making member search request", {
                    query: M.query,
                    guildId: e
                }), null == M.query) throw Error("Query is null");
            await (0, A.searchGuildMembers)(e, M.query, {
                signal: null !== (i = null === (n = M.abortController) || void 0 === n ? void 0 : n.signal) && void 0 !== i ? i : void 0
            })
        } catch (e) {
            ;
            if (-1 === e.code) return;
            null != g(s = _) && C(s, {
                requestState: 0,
                abortController: null,
                lastUpdated: Date.now()
            });
            return
        }
        await v(_)
    }

    function U(e) {
        return R(t => {
            var n;
            return (null === (n = t[p(e)]) || void 0 === n ? void 0 : n.requestState) === 2
        })
    }

    function b(e) {
        return R(t => {
            var n;
            return (null === (n = t[p(e)]) || void 0 === n ? void 0 : n.requestState) === 4
        })
    }
    class G extends E.default {
        handleInitialize(e) {
            let {
                guildId: t
            } = e;
            return D(t), P(t)
        }
        handleGuildDelete(e) {
            let {
                guild: t
            } = e;
            return D(t.id)
        }
        handleSearchStateUpdate(e) {
            let {
                guildId: t
            } = e;
            return P(t)
        }
        handlePaginationUpdate(e) {
            let {
                guildId: t
            } = e;
            return P(t)
        }
        handleGuildMemberSearchSuccess(e) {
            let {
                guildId: t
            } = e;
            return v(p(t))
        }
        handleGuildMemberSearchStillIndexing(e) {
            let {
                guildId: t
            } = e;
            C(p(t), {
                requestState: 4,
                abortController: null,
                lastUpdated: Date.now()
            })
        }
        handleNewMemberTimestampRefresh(e) {
            let {
                guildId: t
            } = e;
            return P(t)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                INITIALIZE_MEMBER_SAFETY_STORE: e => this.handleInitialize(e),
                GUILD_DELETE: e => this.handleGuildDelete(e),
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: e => this.handleSearchStateUpdate(e),
                MEMBER_SAFETY_PAGINATION_UPDATE: e => this.handlePaginationUpdate(e),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e => this.handleGuildMemberSearchSuccess(e),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: e => this.handleGuildMemberSearchStillIndexing(e),
                MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: e => this.handleNewMemberTimestampRefresh(e)
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new G
}