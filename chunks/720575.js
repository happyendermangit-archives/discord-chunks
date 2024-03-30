function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("217014"),
        c = n("957808"),
        f = n("306912"),
        d = n("208454"),
        _ = n("523018"),
        E = n("116654"),
        p = n("180490"),
        m = n("983410"),
        y = n("714918"),
        I = n("281767");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function v(e, t) {
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
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var g = !1,
        A = {};

    function b(e) {
        return null == A[e] && (A[e] = new E.GuildMemberSafetyPageStore(e)), A[e]
    }

    function N(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        b(e).reset(t)
    }

    function R() {
        return !1
    }

    function C(e) {
        var t = !1,
            n = b(e.guildId);
        return "GUILD_ROLE_DELETE" === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t
    }

    function P(e) {
        var t = e.guildId,
            n = e.userId;
        return b(t).updateMembersByMemberIds([n])
    }

    function D(e) {
        var t = !1;
        return e.guilds.forEach(function(e) {
            var n = e.id,
                r = e.members;
            t = b(n).updateServerMembers(r) || t
        }), t
    }
    var L = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && S(e, t)
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
            var e, r, o, i = T(t);
            if (n) {
                var a = T(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(l.default, c.default, d.default)
            }
        }, {
            key: "isInitialized",
            value: function(e) {
                return b(e).isInitialized
            }
        }, {
            key: "getMembersByGuildId",
            value: function(e, t) {
                return b(e).getMembersByIndex(t)
            }
        }, {
            key: "getMembersCountByGuildId",
            value: function(e, t) {
                return b(e).countMembersByIndex(t)
            }
        }, {
            key: "getEstimatedMemberSearchCountByGuildId",
            value: function(e) {
                var t = b(e),
                    n = t.searchChunkSize,
                    r = t.countMembersByIndex(t.getSearchIndex()),
                    o = t.getTotalResultsCount();
                return null == o || o < n ? r : o
            }
        }, {
            key: "getKnownMemberSearchCountByGuildId",
            value: function(e) {
                var t = b(e);
                return t.countMembersByIndex(t.getSearchIndex())
            }
        }, {
            key: "getCurrentMemberSearchResultsByGuildId",
            value: function(e) {
                var t = b(e);
                return t.getMembersByIndex(t.getSearchIndex())
            }
        }, {
            key: "getSearchStateByGuildId",
            value: function(e) {
                return b(e).getSearchState()
            }
        }, {
            key: "hasDefaultSearchStateByGuildId",
            value: function(e) {
                return b(e).hasDefaultSearchState()
            }
        }, {
            key: "getPagedMembersByGuildId",
            value: function(e) {
                return b(e).getPaginatedMembers()
            }
        }, {
            key: "getPaginationStateByGuildId",
            value: function(e) {
                return b(e).getPaginationState()
            }
        }, {
            key: "getElasticSearchPaginationByGuildId",
            value: function(e) {
                return b(e).getElasticSearchPagination()
            }
        }, {
            key: "getEnhancedMember",
            value: function(e, t) {
                return b(e).getMember(t)
            }
        }, {
            key: "getNewMemberTimestamp",
            value: function(e) {
                return b(e).getNewMemberTimestamp()
            }
        }, {
            key: "getLastRefreshTimestamp",
            value: function(e) {
                return b(e).lastRefreshTimestamp
            }
        }, {
            key: "getLastCursorTimestamp",
            value: function(e) {
                return b(e).lastCursorTimestamp
            }
        }], O(r.prototype, o), i && O(r, i), u
    }(u.default.Store);
    i = "MemberSafetyStore", (o = "displayName") in(r = L) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i;
    var M = new L(s.default, {
        CONNECTION_OPEN: function(e) {
            return g ? g = !1 : ! function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                for (var t in A) N(t, e)
            }(!0), D(e)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            return D(e)
        },
        LOCAL_MESSAGES_LOADED: function(e) {
            var t = e.guildId,
                n = e.members;
            if (null == t || null == f.default.getGuild(t)) return !1;
            g = !0;
            var r = b(t),
                o = [],
                i = !0,
                a = !1,
                u = void 0;
            try {
                for (var s, l = n[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                    var c = s.value,
                        d = r.getMember(c.userId);
                    null == d && o.push(c)
                }
            } catch (e) {
                a = !0, u = e
            } finally {
                try {
                    !i && null != l.return && l.return()
                } finally {
                    if (a) throw u
                }
            }
            return o.length > 0 && r.updateClientMembers(o)
        },
        CACHE_LOADED: function(e) {
            var t = e.guildMembers,
                n = !1;
            return g = !0, _.default.entries(t).forEach(function(e) {
                var t = v(e, 2),
                    r = t[0],
                    o = t[1];
                n = b(r).updateClientMembers(Object.values(o)) || n
            }), n
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t = e.members,
                n = e.guildId;
            return null != t && b(n).updateServerMembers(t)
        },
        GUILD_CREATE: function(e) {
            var t = e.guild,
                n = b(t.id);
            N(t.id, n.isInitialized)
        },
        GUILD_DELETE: function(e) {
            N(e.guild.id)
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            var t = e.guildId,
                n = e.members;
            return b(t).updateServerMembers(n)
        },
        GUILD_MEMBER_ADD: R,
        GUILD_MEMBER_UPDATE: R,
        GUILD_MEMBER_UPDATE_LOCAL: function(e) {
            var t = e.guildId,
                n = l.default.getId();
            return b(t).updateMembersByMemberIds([n])
        },
        GUILD_MEMBER_REMOVE: function(e) {
            var t = e.guildId,
                n = e.user;
            return b(t).removeMember(n.id)
        },
        GUILD_ROLE_UPDATE: C,
        GUILD_ROLE_DELETE: C,
        GUILD_MEMBER_PROFILE_UPDATE: function(e) {
            var t = e.guildId,
                n = e.guildMember;
            return b(t).updateMembersByMemberIds([n.user.id])
        },
        GUILD_ROLE_MEMBER_REMOVE: P,
        GUILD_ROLE_MEMBER_ADD: P,
        THREAD_MEMBER_LIST_UPDATE: function(e) {
            var t = e.guildId,
                n = e.members;
            if (null == n || 0 === n.length) return !1;
            var r = b(t),
                o = n.reduce(function(e, t) {
                    if (null != t.member) {
                        var n = t.member.user.id;
                        e.push(n)
                    }
                    return e
                }, []);
            return r.updateMembersByMemberIds(o)
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            var t = e.guildId,
                n = e.addedMembers;
            if (null == n || 0 === n.length) return !1;
            var r = b(t),
                o = n.reduce(function(e, t) {
                    var n = t.userId;
                    return e.push(n), e
                }, []);
            return r.updateMembersByMemberIds(o)
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.members;
            if (null == n || 0 === n.length) return !1;
            var r = b(t),
                o = n.reduce(function(e, t) {
                    var n = t.userId;
                    return e.push(n), e
                }, []);
            return r.updateMembersByMemberIds(o)
        },
        LOAD_FORUM_POSTS: function(e) {
            var t = e.guildId,
                n = Object.values(e.threads);
            if (0 === n.length) return !1;
            var r = b(t),
                o = n.reduce(function(e, t) {
                    if (null != t.owner) {
                        var n = t.owner.user.id;
                        e.push(n)
                    }
                    return e
                }, []);
            return r.updateMembersByMemberIds(o)
        },
        INITIALIZE_MEMBER_SAFETY_STORE: function(e) {
            return b(e.guildId).initialize()
        },
        MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function(e) {
            return b(e.guildId).refreshNewMembersAndSearchResults()
        },
        MEMBER_SAFETY_PAGINATION_UPDATE: function(e) {
            var t = e.guildId,
                n = e.pagination;
            return v(b(t).updatePaginationState(n), 1)[0]
        },
        MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function(e) {
            var t = e.guildId,
                n = e.continuationToken;
            return b(t).updatePaginationToken(n)
        },
        MEMBER_SAFETY_SEARCH_STATE_UPDATE: function(e) {
            var t = e.guildId,
                n = e.searchState;
            return b(t).updateSearchState(n)
        },
        FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.memberSupplementals,
                r = (0, m.syncMemberSupplemental)(t, n);
            return r && b(t).updateMembersByMemberIds(n.map(function(e) {
                return e.userId
            })), r
        },
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
            var t, n, r, o, i, a, u = e.guildId,
                s = e.members,
                l = e.total_result_count,
                c = b(u),
                f = s.reduce(function(e, t) {
                    var n = t.member,
                        r = t.source_invite_code,
                        o = t.join_source_type,
                        i = t.inviter_id,
                        a = n.user;
                    return e.memberIds.push(a.id), e.memberSupplementals.push({
                        userId: a.id,
                        sourceInviteCode: r,
                        joinSourceType: o,
                        inviterId: i
                    }), e
                }, {
                    memberIds: [],
                    memberSupplementals: []
                }),
                d = f.memberIds,
                _ = f.memberSupplementals,
                E = (0, m.syncMemberSupplemental)(u, _);
            (0, y.registerFetchedSupplementals)(u, d);
            var h = c.updateSearchedMembersByMemberIds(d),
                O = void 0,
                T = void 0;
            s.length > 0 && (O = s[0], T = s[s.length - 1]);
            var S = v(c.updatePaginationState({
                totalResultsCount: l,
                elasticSearchCursor: {
                    before: (0, p.createMemberSearchCursor)({
                        joinedAt: null == O ? void 0 : null === (t = O.member) || void 0 === t ? void 0 : t.joined_at,
                        userId: null !== (i = null == O ? void 0 : null === (n = O.member) || void 0 === n ? void 0 : n.user.id) && void 0 !== i ? i : I.EMPTY_STRING_SNOWFLAKE_ID
                    }),
                    after: (0, p.createMemberSearchCursor)({
                        joinedAt: null == T ? void 0 : null === (r = T.member) || void 0 === r ? void 0 : r.joined_at,
                        userId: null !== (a = null == T ? void 0 : null === (o = T.member) || void 0 === o ? void 0 : o.user.id) && void 0 !== a ? a : I.EMPTY_STRING_SNOWFLAKE_ID
                    })
                }
            }, !1), 1)[0];
            return E || h || S
        },
        MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function(e) {
            var t = e.guildId,
                n = e.userIds;
            return b(t).updateMembersByMemberIds(n)
        }
    });
    t.default = M
}