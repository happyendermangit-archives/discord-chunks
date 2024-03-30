function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildMemberSafetyPageStore: function() {
            return T
        }
    });
    var r = n("392711"),
        o = n("957808"),
        i = n("208454"),
        a = n("388990"),
        u = n("276046"),
        s = n("2561"),
        l = n("762409"),
        c = n("733454"),
        f = n("807371");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                E(e, t, n[t])
            })
        }
        return e
    }

    function m(e, t) {
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

    function y(e, t) {
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
        }(e, t) || h(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function I(e) {
        return function(e) {
            if (Array.isArray(e)) return d(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || h(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function h(e, t) {
        if (e) {
            if ("string" == typeof e) return d(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
        }
    }
    var O = 3 * a.default.Millis.SECOND,
        T = function() {
            var e, t, n;

            function a(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, a), E(this, "guildId", void 0), E(this, "lastRefreshTimestamp", 0), E(this, "lastCursorTimestamp", Date.now()), E(this, "_initialized", void 0), E(this, "_pagination", void 0), E(this, "_search", void 0), E(this, "_members", void 0), E(this, "_lastRefreshTimer", null), E(this, "_defaultSearchTotalResultsCount", void 0), this.guildId = e, this._initialized = !1, this._members = null, this._pagination = null, this._search = null
            }
            return e = a, t = [{
                key: "getSearchIndex",
                value: function() {
                    return null == this._search || this._search.hasDefaultQuery ? s.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER : s.MemberSafetySecondaryIndex.INCLUDED_IN_SEARCH_RESULTS
                }
            }, {
                key: "initialize",
                value: function() {
                    if (this._initialized) {
                        this.lastCursorTimestamp = Date.now();
                        return
                    }
                    this._initialized = !0, this._search = new c.GuildMemberSafetySearch(this.guildId), this._members = new s.GuildMemberSafetyMembers(this.guildId), this._pagination = new l.GuildMemberSafetyPagination(this.guildId, this._members.values(this.getSearchIndex()))
                }
            }, {
                key: "isInitialized",
                get: function() {
                    return this._initialized
                }
            }, {
                key: "reset",
                value: function() {
                    var e, t, n, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this._initialized && (null === (e = this._members) || void 0 === e || e.reset(), null === (t = this._pagination) || void 0 === t || t.reset(), null === (n = this._search) || void 0 === n || n.reset(), r && this.initialize())
                }
            }, {
                key: "searchChunkSize",
                get: function() {
                    return null != this._pagination && this._initialized ? (0, l.getSearchChunkLimit)(this._pagination.getPaginationState()) : 0
                }
            }, {
                key: "getMember",
                value: function(e) {
                    var t;
                    return null != this._members && this._initialized ? null !== (t = this._members.getMemberByUserId(e)) && void 0 !== t ? t : null : null
                }
            }, {
                key: "getMembersByIndex",
                value: function(e) {
                    return null != this._members && this._initialized ? [this._members.values(e), this._members.version] : [
                        [], 0
                    ]
                }
            }, {
                key: "countMembersByIndex",
                value: function(e) {
                    return null != this._members && this._initialized ? this._members.count(e) : 0
                }
            }, {
                key: "_checkUpdatesForPaginationUpdate",
                value: function(e, t) {
                    return null != t.isIncludedInSearchResults && t.isIncludedInSearchResults !== e.isIncludedInSearchResults || null != t.isCurrentGuildMemberByTimestamp && t.isCurrentGuildMemberByTimestamp !== e.isCurrentGuildMemberByTimestamp || !1
                }
            }, {
                key: "_getIsIncludedInSearch",
                value: function(e, t) {
                    if (null == this._search || this._search.hasDefaultQuery) return [!1, !1];
                    var n = p({}, e, t),
                        r = this._search.isMemberIncludedInSearchResults(n),
                        o = r !== e.isIncludedInSearchResults;
                    return [r, o]
                }
            }, {
                key: "updatePaginationChunks",
                value: function() {
                    if (null == this._pagination || null == this._members || !this._initialized) return !1;
                    var e = this._members.values(this.getSearchIndex());
                    return this._pagination.updateSortedMembers(e)
                }
            }, {
                key: "removeMember",
                value: function(e) {
                    if (null == this._members || !this._initialized || null == this._members.getMemberByUserId(e)) return !1;
                    var t = this._members.removeMember(e);
                    return t ? this.updatePaginationChunks() : t
                }
            }, {
                key: "_rawUpdateMember",
                value: function(e, t) {
                    if (null == this._members) return [!1, !1];
                    var n = !1,
                        r = this._members.getMemberByUserId(e);
                    if (null == r) {
                        n = !0;
                        var i = o.default.getTrueMember(this.guildId, e);
                        if (null == i) return [!1, !1];
                        r = this._members.enhanceNewMember(i, this.getSearchState(), t)
                    }
                    if (null == t.isIncludedInSearchResults) {
                        var a = y(this._getIsIncludedInSearch(r, t), 2),
                            u = a[0];
                        a[1] && (n = !0, t.isIncludedInSearchResults = u)
                    } else t.isIncludedInSearchResults !== r.isIncludedInSearchResults && (n = !0);
                    var s = this._members.updateMember(r, t);
                    return !n && (n = this._checkUpdatesForPaginationUpdate(r, t)), [n, s]
                }
            }, {
                key: "isMemberInIndex",
                value: function(e) {
                    return null != this._members && !!this._initialized && this._members._membersMap.has(e)
                }
            }, {
                key: "isMemberIncludedInSearchResults",
                value: function(e) {
                    if (null == this._members || null == this._search || null == this._pagination || !this._initialized) return !1;
                    if (this._search.hasDefaultQuery) return this._pagination.isMemberInAnyChunk(e);
                    var t = this._members.getMemberByUserId(e);
                    if (null == t) {
                        var n = o.default.getTrueMember(this.guildId, e);
                        if (null == n) return !1;
                        t = this._members.enhanceNewMember(n, this.getSearchState())
                    } else if (t.isIncludedInSearchResults) return !0;
                    return this._search.isMemberIncludedInSearchResults(t)
                }
            }, {
                key: "updateMember",
                value: function(e, t) {
                    if (null == this._members || !this._initialized) return !1;
                    var n = y(this._rawUpdateMember(e, t), 2),
                        r = n[0],
                        o = n[1];
                    return r ? this.updatePaginationChunks() : o
                }
            }, {
                key: "updateClientMembers",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == this._members || !this._initialized) return !1;
                    var r = !1,
                        o = !1,
                        i = !0,
                        a = !1,
                        s = void 0;
                    try {
                        for (var l, c = e[Symbol.iterator](); !(i = (l = c.next()).done); i = !0) {
                            var f = l.value;
                            if (null != f.joinedAt) {
                                var d = f;
                                if (t && (d = m(p({}, d), {
                                        isIncludedInSearchResults: !0
                                    })), n) {
                                    var _ = (0, u.getJoinedAtTimestamp)(f.joinedAt);
                                    d = m(p({}, d), {
                                        isCurrentGuildMemberByTimestamp: _ <= this._members.newMemberTimestamp,
                                        refreshTimestamp: this.lastRefreshTimestamp
                                    })
                                }
                                var E = y(this._rawUpdateMember(f.userId, d), 2),
                                    I = E[0],
                                    h = E[1];
                                r = I || r, o = h || o
                            }
                        }
                    } catch (e) {
                        a = !0, s = e
                    } finally {
                        try {
                            !i && null != c.return && c.return()
                        } finally {
                            if (a) throw s
                        }
                    }
                    return r ? this.updatePaginationChunks() : o
                }
            }, {
                key: "updateServerMembers",
                value: function(e) {
                    if (null == this._members || !this._initialized) return !1;
                    var t = !1,
                        n = !1,
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var u, s = e[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                            var l = u.value,
                                c = o.default.getTrueMember(this.guildId, l.user.id);
                            if (null != c) {
                                var f = y(this._rawUpdateMember(l.user.id, c), 2),
                                    d = f[0],
                                    _ = f[1];
                                t = d || t, n = _ || n
                            }
                        }
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !r && null != s.return && s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return t ? this.updatePaginationChunks() : n
                }
            }, {
                key: "updateMembersByMemberIds",
                value: function(e) {
                    var t = this;
                    if (null == this._members || !this._initialized) return !1;
                    var n = e.reduce(function(e, n) {
                        var r = o.default.getTrueMember(t.guildId, n);
                        return null != r && e.push(r), e
                    }, []);
                    return this.updateClientMembers(n)
                }
            }, {
                key: "updateMembersSort",
                value: function(e) {
                    var t = this;
                    return new Promise(function(n) {
                        var o = (0, r.cloneDeep)(t.getMembersByIndex(s.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)[0]),
                            i = (0, r.cloneDeep)(t.getMembersByIndex(s.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)[0]);
                        I(o).concat(I(i)).forEach(function(n) {
                            var r, o, i, a = (0, f.getSortValueForMember)(n, e),
                                u = null !== (i = null === (r = t._search) || void 0 === r ? void 0 : r.isMemberIncludedInSearchResults(n)) && void 0 !== i && i;
                            null === (o = t._members) || void 0 === o || o.updateMember(n, {
                                sort: a,
                                isIncludedInSearchResults: u
                            })
                        }), n()
                    })
                }
            }, {
                key: "sortMembersBySelectedSort",
                value: function(e) {
                    var t = this;
                    null != this._search && null != this._members && this._initialized && null != e && (this.updatePaginationState({
                        sort: e
                    }, !0), this.updateMembersSort(e).then(function() {
                        t.updatePaginationChunks()
                    }))
                }
            }, {
                key: "updateSearchedMembersByMemberIds",
                value: function(e) {
                    var t = this;
                    if (null == this._search || null == this._members || !this._initialized) return !1;
                    var n = e.reduce(function(e, n) {
                        var r = o.default.getTrueMember(t.guildId, n);
                        return null != r && e.push(r), e
                    }, []);
                    return this.updateClientMembers(n, this._search.requiresUsernameMatch, 0 !== this.lastRefreshTimestamp)
                }
            }, {
                key: "rebuildAllMembers",
                value: function() {
                    if (null == this._members || !this._initialized) return !1;
                    var e = o.default.getMembers(this.guildId);
                    return this.updateClientMembers(e)
                }
            }, {
                key: "_scheduleRefresh",
                value: function(e) {
                    var t = this;
                    this.lastRefreshTimestamp = e, this.lastCursorTimestamp = Date.now(), null != this._lastRefreshTimer && clearTimeout(this._lastRefreshTimer), this._lastRefreshTimer = setTimeout(function() {
                        t._lastRefreshTimer = null, t.lastRefreshTimestamp = 0
                    }, O)
                }
            }, {
                key: "refreshNewMembersAndSearchResults",
                value: function() {
                    if (null == this._search || null == this._members || !this._initialized) return !1;
                    var e = Number(Date.now());
                    this._scheduleRefresh(e);
                    var t = (0, r.cloneDeep)(this._members.values(s.MemberSafetySecondaryIndex.NEW_GUILD_MEMBER)),
                        n = !1,
                        o = !0,
                        a = !1,
                        u = void 0;
                    try {
                        for (var l, c = t[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) {
                            var f = l.value;
                            n = this._members.updateMember(f, {
                                isCurrentGuildMemberByTimestamp: !0,
                                refreshTimestamp: e,
                                user: i.default.getUser(f.userId)
                            }) || n
                        }
                    } catch (e) {
                        a = !0, u = e
                    } finally {
                        try {
                            !o && null != c.return && c.return()
                        } finally {
                            if (a) throw u
                        }
                    }
                    this._members.resetNewMemberTimestamp(), this.resetSearchState() && (n = !1);
                    var d = y(this.updatePaginationState({
                        currentPage: 1
                    }, !1), 2);
                    return d[0], d[1] && (n = !1), n && this.updatePaginationChunks(), !0
                }
            }, {
                key: "getNewMemberTimestamp",
                value: function() {
                    return null != this._members && this._initialized ? this._members.newMemberTimestamp : 0
                }
            }, {
                key: "updateSearchState",
                value: function(e) {
                    if (null == this._members || null == this._search || !this._initialized) return !1;
                    var t = !!this._search.hasDefaultQuery;
                    null != e.selectedSort && e.selectedSort !== this._search.getSearchState().selectedSort && this.sortMembersBySelectedSort(e.selectedSort);
                    var n = this._search.updateSearchState(e);
                    if (this._search.hasDefaultQuery && t) return this.updatePaginationChunks();
                    var o = (0, r.cloneDeep)(this._members.values(s.MemberSafetySecondaryIndex.CURRENT_GUILD_MEMBER)),
                        i = t !== this._search.hasDefaultQuery,
                        a = !0,
                        u = !1,
                        l = void 0;
                    try {
                        for (var c, f = o[Symbol.iterator](); !(a = (c = f.next()).done); a = !0) {
                            var d = c.value;
                            if (d.isCurrentGuildMemberByTimestamp) {
                                var _ = this._search.isMemberIncludedInSearchResults(d);
                                _ !== d.isIncludedInSearchResults && (i = !0, n = !0, this._members.updateMember(d, {
                                    isIncludedInSearchResults: _
                                }))
                            }
                        }
                    } catch (e) {
                        u = !0, l = e
                    } finally {
                        try {
                            !a && null != f.return && f.return()
                        } finally {
                            if (u) throw l
                        }
                    }
                    return i ? (this.updatePaginationChunks(), this.updatePaginationState({
                        currentPage: 1
                    }), !0) : n
                }
            }, {
                key: "getSearchState",
                value: function() {
                    return null != this._search && this._initialized ? this._search.getSearchState() : (0, c.getDefaultSearchState)()
                }
            }, {
                key: "hasDefaultSearchState",
                value: function() {
                    return null == this._search || !this._initialized || this._search.hasDefaultQuery
                }
            }, {
                key: "resetSearchState",
                value: function() {
                    return !!(null != this._search && this._initialized && this._search.resetSearchState()) && this.updatePaginationChunks()
                }
            }, {
                key: "getTotalResultsCount",
                value: function() {
                    return null != this._search && null != this._pagination && this._initialized ? this._search.hasDefaultQuery && null != this._defaultSearchTotalResultsCount ? this._defaultSearchTotalResultsCount : this._pagination.getPaginationState().totalResultsCount : 0
                }
            }, {
                key: "updatePaginationState",
                value: function(e) {
                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return null != this._search && null != this._pagination && this._initialized ? (t && (this.lastRefreshTimestamp = 0), this._search.hasDefaultQuery && null != e.totalResultsCount && (this._defaultSearchTotalResultsCount = e.totalResultsCount), this._pagination.updatePaginationState(e)) : [!1, !1]
                }
            }, {
                key: "clearPaginationState",
                value: function() {
                    var e;
                    null === (e = this._pagination) || void 0 === e || e.reset()
                }
            }, {
                key: "getPaginationState",
                value: function() {
                    return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, l.createDefaultMemberSafetyPaginationState)()
                }
            }, {
                key: "getPaginatedMembers",
                value: function() {
                    return null != this._pagination && this._initialized ? [this._pagination.paginatedMembers, this._pagination.version] : [{}, 0]
                }
            }, {
                key: "updatePaginationToken",
                value: function(e) {
                    return null != this._pagination && !!this._initialized && this._pagination.updatePaginationToken(e)
                }
            }, {
                key: "getElasticSearchPagination",
                value: function() {
                    return null != this._pagination && this._initialized ? this._pagination.getElasticSearchPagination() : null
                }
            }, {
                key: "removeRoleFromSearchState",
                value: function(e) {
                    var t = new Set(this.getSearchState().selectedRoleIds);
                    return t.delete(e), this.updateSearchState({
                        selectedRoleIds: t
                    })
                }
            }], _(e.prototype, t), n && _(e, n), a
        }()
}