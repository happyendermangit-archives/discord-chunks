function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("724458"), n("653041");
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("314897"),
        d = n("271383"),
        _ = n("430824"),
        c = n("594174"),
        E = n("709054"),
        I = n("752560"),
        T = n("588215"),
        f = n("44715"),
        S = n("327999"),
        h = n("981631");
    let A = !1,
        m = {};

    function N(e) {
        return null == m[e] && (m[e] = new I.GuildMemberSafetyPageStore(e)), m[e]
    }

    function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        N(e).reset(t)
    }

    function O() {
        return !1
    }

    function R(e) {
        let t = !1,
            n = N(e.guildId);
        return "GUILD_ROLE_DELETE" === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t
    }

    function C(e) {
        let {
            guildId: t,
            userId: n
        } = e;
        return N(t).updateMembersByMemberIds([n])
    }

    function g(e) {
        let t = !1;
        return e.guilds.forEach(e => {
            let {
                id: n,
                members: i
            } = e;
            t = N(n).updateServerMembers(i) || t
        }), t
    }
    class L extends(i = o.default.Store) {
        initialize() {
            this.waitFor(u.default, d.default, c.default)
        }
        isInitialized(e) {
            return N(e).isInitialized
        }
        getMembersByGuildId(e, t) {
            return N(e).getMembersByIndex(t)
        }
        getMembersCountByGuildId(e, t) {
            return N(e).countMembersByIndex(t)
        }
        getEstimatedMemberSearchCountByGuildId(e) {
            let t = N(e),
                n = t.searchChunkSize,
                i = t.countMembersByIndex(t.getSearchIndex()),
                r = t.getTotalResultsCount();
            return null == r || r < n ? i : r
        }
        getKnownMemberSearchCountByGuildId(e) {
            let t = N(e);
            return t.countMembersByIndex(t.getSearchIndex())
        }
        getCurrentMemberSearchResultsByGuildId(e) {
            let t = N(e);
            return t.getMembersByIndex(t.getSearchIndex())
        }
        getSearchStateByGuildId(e) {
            return N(e).getSearchState()
        }
        hasDefaultSearchStateByGuildId(e) {
            return N(e).hasDefaultSearchState()
        }
        getPagedMembersByGuildId(e) {
            return N(e).getPaginatedMembers()
        }
        getPaginationStateByGuildId(e) {
            return N(e).getPaginationState()
        }
        getElasticSearchPaginationByGuildId(e) {
            return N(e).getElasticSearchPagination()
        }
        getEnhancedMember(e, t) {
            return N(e).getMember(t)
        }
        getNewMemberTimestamp(e) {
            return N(e).getNewMemberTimestamp()
        }
        getLastRefreshTimestamp(e) {
            return N(e).lastRefreshTimestamp
        }
        getLastCursorTimestamp(e) {
            return N(e).lastCursorTimestamp
        }
    }
    s = "MemberSafetyStore", (a = "displayName") in(r = L) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s;
    let v = new L(l.default, {
        CONNECTION_OPEN: function(e) {
            return A ? A = !1 : ! function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                for (let t in m) p(t, e)
            }(!0), g(e)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            return g(e)
        },
        LOCAL_MESSAGES_LOADED: function(e) {
            let {
                guildId: t,
                members: n
            } = e;
            if (null == t || null == _.default.getGuild(t)) return !1;
            A = !0;
            let i = N(t),
                r = [];
            for (let e of n) null == i.getMember(e.userId) && r.push(e);
            return r.length > 0 && i.updateClientMembers(r)
        },
        CACHE_LOADED: function(e) {
            let {
                guildMembers: t
            } = e, n = !1;
            return A = !0, E.default.entries(t).forEach(e => {
                let [t, i] = e;
                n = N(t).updateClientMembers(Object.values(i)) || n
            }), n
        },
        PASSIVE_UPDATE_V1: function(e) {
            let {
                members: t,
                guildId: n
            } = e;
            return null != t && N(n).updateServerMembers(t)
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e, n = N(t.id);
            p(t.id, n.isInitialized)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t
                }
            } = e;
            p(t)
        },
        GUILD_MEMBERS_CHUNK_BATCH: function(e) {
            let {
                chunks: t
            } = e, n = !1;
            for (let e of t) n = N(e.guildId).updateServerMembers(e.members) || n;
            return n
        },
        GUILD_MEMBER_ADD: O,
        GUILD_MEMBER_UPDATE: O,
        GUILD_MEMBER_UPDATE_LOCAL: function(e) {
            let {
                guildId: t
            } = e, n = u.default.getId();
            return N(t).updateMembersByMemberIds([n])
        },
        GUILD_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            return N(t).removeMember(n.id)
        },
        GUILD_ROLE_UPDATE: R,
        GUILD_ROLE_DELETE: R,
        GUILD_MEMBER_PROFILE_UPDATE: function(e) {
            let {
                guildId: t,
                guildMember: n
            } = e;
            return N(t).updateMembersByMemberIds([n.user.id])
        },
        GUILD_ROLE_MEMBER_REMOVE: C,
        GUILD_ROLE_MEMBER_ADD: C,
        THREAD_MEMBER_LIST_UPDATE: function(e) {
            let {
                guildId: t,
                members: n
            } = e;
            if (null == n || 0 === n.length) return !1;
            let i = N(t),
                r = n.reduce((e, t) => {
                    if (null != t.member) {
                        let n = t.member.user.id;
                        e.push(n)
                    }
                    return e
                }, []);
            return i.updateMembersByMemberIds(r)
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            let {
                guildId: t,
                addedMembers: n
            } = e;
            if (null == n || 0 === n.length) return !1;
            let i = N(t),
                r = n.reduce((e, t) => {
                    let n = t.userId;
                    return e.push(n), e
                }, []);
            return i.updateMembersByMemberIds(r)
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
            let {
                guildId: t,
                members: n
            } = e;
            if (null == n || 0 === n.length) return !1;
            let i = N(t),
                r = n.reduce((e, t) => {
                    let n = t.userId;
                    return e.push(n), e
                }, []);
            return i.updateMembersByMemberIds(r)
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                guildId: t,
                threads: n
            } = e, i = Object.values(n);
            if (0 === i.length) return !1;
            let r = N(t),
                a = i.reduce((e, t) => {
                    if (null != t.owner) {
                        let n = t.owner.user.id;
                        e.push(n)
                    }
                    return e
                }, []);
            return r.updateMembersByMemberIds(a)
        },
        INITIALIZE_MEMBER_SAFETY_STORE: function(e) {
            let {
                guildId: t
            } = e;
            return N(t).initialize()
        },
        MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(e) {
            let {
                guildId: t
            } = e;
            return N(t).refreshNewMembersAndSearchResults()
        },
        MEMBER_SAFETY_PAGINATION_UPDATE: function(e) {
            let {
                guildId: t,
                pagination: n
            } = e, [i] = N(t).updatePaginationState(n);
            return i
        },
        MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
            let {
                guildId: t,
                continuationToken: n
            } = e;
            return N(t).updatePaginationToken(n)
        },
        MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
            let {
                guildId: t,
                searchState: n
            } = e;
            return N(t).updateSearchState(n)
        },
        FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
            let {
                guildId: t,
                memberSupplementals: n
            } = e, i = (0, f.syncMemberSupplemental)(t, n);
            return i && N(t).updateMembersByMemberIds(n.map(e => e.userId)), i
        },
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
            var t, n, i, r, a, s;
            let o, l;
            let {
                guildId: u,
                members: d,
                total_result_count: _
            } = e, c = N(u), {
                memberIds: E,
                memberSupplementals: I
            } = d.reduce((e, t) => {
                let {
                    member: n,
                    source_invite_code: i,
                    join_source_type: r,
                    inviter_id: a
                } = t, s = n.user;
                return e.memberIds.push(s.id), e.memberSupplementals.push({
                    userId: s.id,
                    sourceInviteCode: i,
                    joinSourceType: r,
                    inviterId: a
                }), e
            }, {
                memberIds: [],
                memberSupplementals: []
            }), A = (0, f.syncMemberSupplemental)(u, I);
            (0, S.registerFetchedSupplementals)(u, E);
            let m = c.updateSearchedMembersByMemberIds(E);
            d.length > 0 && (o = d[0], l = d[d.length - 1]);
            let [p] = c.updatePaginationState({
                totalResultsCount: _,
                elasticSearchCursor: {
                    before: (0, T.createMemberSearchCursor)({
                        joinedAt: null == o ? void 0 : null === (t = o.member) || void 0 === t ? void 0 : t.joined_at,
                        userId: null !== (a = null == o ? void 0 : null === (n = o.member) || void 0 === n ? void 0 : n.user.id) && void 0 !== a ? a : h.EMPTY_STRING_SNOWFLAKE_ID
                    }),
                    after: (0, T.createMemberSearchCursor)({
                        joinedAt: null == l ? void 0 : null === (i = l.member) || void 0 === i ? void 0 : i.joined_at,
                        userId: null !== (s = null == l ? void 0 : null === (r = l.member) || void 0 === r ? void 0 : r.user.id) && void 0 !== s ? s : h.EMPTY_STRING_SNOWFLAKE_ID
                    })
                }
            }, !1);
            return A || m || p
        },
        MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function(e) {
            let {
                guildId: t,
                userIds: n
            } = e;
            return N(t).updateMembersByMemberIds(n)
        }
    });
    t.default = v
}