function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return D
        }
    }), r("808653"), r("424973"), r("222007");
    var i = r("446674"),
        n = r("913144"),
        s = r("271938"),
        u = r("26989"),
        a = r("305961"),
        l = r("697218"),
        d = r("299039"),
        h = r("637240"),
        o = r("490931"),
        m = r("159132"),
        _ = r("835257"),
        c = r("49111");
    let M = !1,
        S = {};

    function I(e) {
        return null == S[e] && (S[e] = new h.GuildMemberSafetyPageStore(e)), S[e]
    }

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = I(e);
        r.reset(t)
    }

    function f() {
        return !1
    }

    function g(e) {
        let t = !1,
            r = I(e.guildId);
        return "GUILD_ROLE_DELETE" === e.type && (t = r.removeRoleFromSearchState(e.roleId)), r.rebuildAllMembers() || t
    }

    function b(e) {
        let {
            guildId: t,
            userId: r
        } = e, i = I(t);
        return i.updateMembersByMemberIds([r])
    }

    function p(e) {
        let t = !1;
        return e.guilds.forEach(e => {
            let {
                id: r,
                members: i
            } = e, n = I(r);
            t = n.updateServerMembers(i) || t
        }), t
    }
    class T extends i.default.Store {
        initialize() {
            this.waitFor(s.default, u.default, l.default)
        }
        isInitialized(e) {
            let t = I(e);
            return t.isInitialized
        }
        getMembersByGuildId(e, t) {
            let r = I(e);
            return r.getMembersByIndex(t)
        }
        getMembersCountByGuildId(e, t) {
            let r = I(e);
            return r.countMembersByIndex(t)
        }
        getEstimatedMemberSearchCountByGuildId(e) {
            let t = I(e),
                r = t.searchChunkSize,
                i = t.countMembersByIndex(t.getSearchIndex()),
                n = t.getTotalResultsCount();
            return null == n || n < r ? i : n
        }
        getKnownMemberSearchCountByGuildId(e) {
            let t = I(e);
            return t.countMembersByIndex(t.getSearchIndex())
        }
        getCurrentMemberSearchResultsByGuildId(e) {
            let t = I(e);
            return t.getMembersByIndex(t.getSearchIndex())
        }
        getSearchStateByGuildId(e) {
            let t = I(e);
            return t.getSearchState()
        }
        hasDefaultSearchStateByGuildId(e) {
            let t = I(e);
            return t.hasDefaultSearchState()
        }
        getPagedMembersByGuildId(e) {
            let t = I(e);
            return t.getPaginatedMembers()
        }
        getPaginationStateByGuildId(e) {
            let t = I(e);
            return t.getPaginationState()
        }
        getElasticSearchPaginationByGuildId(e) {
            let t = I(e);
            return t.getElasticSearchPagination()
        }
        getEnhancedMember(e, t) {
            let r = I(e);
            return r.getMember(t)
        }
        getNewMemberTimestamp(e) {
            let t = I(e);
            return t.getNewMemberTimestamp()
        }
        getLastRefreshTimestamp(e) {
            let t = I(e);
            return t.lastRefreshTimestamp
        }
        getLastCursorTimestamp(e) {
            let t = I(e);
            return t.lastCursorTimestamp
        }
    }
    T.displayName = "MemberSafetyStore";
    let R = new T(n.default, {
        CONNECTION_OPEN: function(e) {
            return M ? M = !1 : ! function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                for (let t in S) E(t, e)
            }(!0), p(e)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            return p(e)
        },
        LOCAL_MESSAGES_LOADED: function(e) {
            let {
                guildId: t,
                members: r
            } = e;
            if (null == t || null == a.default.getGuild(t)) return !1;
            M = !0;
            let i = I(t),
                n = [];
            for (let e of r) {
                let t = i.getMember(e.userId);
                null == t && n.push(e)
            }
            return n.length > 0 && i.updateClientMembers(n)
        },
        CACHE_LOADED: function(e) {
            let {
                guildMembers: t
            } = e, r = !1;
            return M = !0, d.default.entries(t).forEach(e => {
                let [t, i] = e, n = I(t);
                r = n.updateClientMembers(Object.values(i)) || r
            }), r
        },
        PASSIVE_UPDATE_V1: function(e) {
            let {
                members: t,
                guildId: r
            } = e;
            if (null != t) {
                let e = I(r);
                return e.updateServerMembers(t)
            }
            return !1
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e, r = I(t.id);
            E(t.id, r.isInitialized)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t
                }
            } = e;
            E(t)
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            let {
                guildId: t,
                members: r
            } = e, i = I(t);
            return i.updateServerMembers(r)
        },
        GUILD_MEMBER_ADD: f,
        GUILD_MEMBER_UPDATE: f,
        GUILD_MEMBER_UPDATE_LOCAL: function(e) {
            let {
                guildId: t
            } = e, r = s.default.getId(), i = I(t);
            return i.updateMembersByMemberIds([r])
        },
        GUILD_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                user: r
            } = e, i = I(t);
            return i.removeMember(r.id)
        },
        GUILD_ROLE_UPDATE: g,
        GUILD_ROLE_DELETE: g,
        GUILD_MEMBER_PROFILE_UPDATE: function(e) {
            let {
                guildId: t,
                guildMember: r
            } = e, i = I(t);
            return i.updateMembersByMemberIds([r.user.id])
        },
        GUILD_ROLE_MEMBER_REMOVE: b,
        GUILD_ROLE_MEMBER_ADD: b,
        THREAD_MEMBER_LIST_UPDATE: function(e) {
            let {
                guildId: t,
                members: r
            } = e;
            if (null == r || 0 === r.length) return !1;
            let i = I(t),
                n = r.reduce((e, t) => {
                    if (null != t.member) {
                        let r = t.member.user.id;
                        e.push(r)
                    }
                    return e
                }, []);
            return i.updateMembersByMemberIds(n)
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            let {
                guildId: t,
                addedMembers: r
            } = e;
            if (null == r || 0 === r.length) return !1;
            let i = I(t),
                n = r.reduce((e, t) => {
                    let r = t.userId;
                    return e.push(r), e
                }, []);
            return i.updateMembersByMemberIds(n)
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
            let {
                guildId: t,
                members: r
            } = e;
            if (null == r || 0 === r.length) return !1;
            let i = I(t),
                n = r.reduce((e, t) => {
                    let r = t.userId;
                    return e.push(r), e
                }, []);
            return i.updateMembersByMemberIds(n)
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                guildId: t,
                threads: r
            } = e, i = Object.values(r);
            if (0 === i.length) return !1;
            let n = I(t),
                s = i.reduce((e, t) => {
                    if (null != t.owner) {
                        let r = t.owner.user.id;
                        e.push(r)
                    }
                    return e
                }, []);
            return n.updateMembersByMemberIds(s)
        },
        INITIALIZE_MEMBER_SAFETY_STORE: function(e) {
            let {
                guildId: t
            } = e, r = I(t);
            return r.initialize()
        },
        MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(e) {
            let {
                guildId: t
            } = e, r = I(t);
            return r.refreshNewMembersAndSearchResults()
        },
        MEMBER_SAFETY_PAGINATION_UPDATE: function(e) {
            let {
                guildId: t,
                pagination: r
            } = e, i = I(t), [n] = i.updatePaginationState(r);
            return n
        },
        MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
            let {
                guildId: t,
                continuationToken: r
            } = e, i = I(t);
            return i.updatePaginationToken(r)
        },
        MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
            let {
                guildId: t,
                searchState: r
            } = e, i = I(t);
            return i.updateSearchState(r)
        },
        FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
            let {
                guildId: t,
                memberSupplementals: r
            } = e, i = (0, m.syncMemberSupplemental)(t, r);
            if (i) {
                let e = I(t);
                e.updateMembersByMemberIds(r.map(e => e.userId))
            }
            return i
        },
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
            var t, r, i, n, s, u;
            let a, l;
            let {
                guildId: d,
                members: h,
                total_result_count: M
            } = e, S = I(d), {
                memberIds: E,
                memberSupplementals: f
            } = h.reduce((e, t) => {
                let {
                    member: r,
                    source_invite_code: i,
                    join_source_type: n,
                    inviter_id: s
                } = t, u = r.user;
                return e.memberIds.push(u.id), e.memberSupplementals.push({
                    userId: u.id,
                    sourceInviteCode: i,
                    joinSourceType: n,
                    inviterId: s
                }), e
            }, {
                memberIds: [],
                memberSupplementals: []
            }), g = (0, m.syncMemberSupplemental)(d, f);
            (0, _.registerFetchedSupplementals)(d, E);
            let b = S.updateSearchedMembersByMemberIds(E);
            h.length > 0 && (a = h[0], l = h[h.length - 1]);
            let [p] = S.updatePaginationState({
                totalResultsCount: M,
                elasticSearchCursor: {
                    before: (0, o.createMemberSearchCursor)({
                        joinedAt: null == a ? void 0 : null === (t = a.member) || void 0 === t ? void 0 : t.joined_at,
                        userId: null !== (s = null == a ? void 0 : null === (r = a.member) || void 0 === r ? void 0 : r.user.id) && void 0 !== s ? s : c.EMPTY_STRING_SNOWFLAKE_ID
                    }),
                    after: (0, o.createMemberSearchCursor)({
                        joinedAt: null == l ? void 0 : null === (i = l.member) || void 0 === i ? void 0 : i.joined_at,
                        userId: null !== (u = null == l ? void 0 : null === (n = l.member) || void 0 === n ? void 0 : n.user.id) && void 0 !== u ? u : c.EMPTY_STRING_SNOWFLAKE_ID
                    })
                }
            }, !1);
            return g || b || p
        },
        MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function(e) {
            let {
                guildId: t,
                userIds: r
            } = e, i = I(t);
            return i.updateMembersByMemberIds(r)
        }
    });
    var D = R
}