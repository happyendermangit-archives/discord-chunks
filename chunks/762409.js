function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildMemberSafetyPagination: function() {
            return m
        },
        MAX_VISIBLE_PAGES: function() {
            return _
        },
        PAGINATION_PAGE_SIZE_OPTIONS: function() {
            return d
        },
        createDefaultMemberSafetyPaginationState: function() {
            return E
        },
        getSearchChunkLimit: function() {
            return p
        }
    });
    var r, o, i = n("957808"),
        a = n("180490");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                l(e, t, n[t])
            })
        }
        return e
    }

    function f(e, t) {
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
                if ("string" == typeof e) return u(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var d = [12, 25, 50, 100],
        _ = 7;

    function E() {
        return {
            pageSize: d[0],
            currentPage: 1,
            continuationToken: null,
            sort: a.OrderBy.ORDER_BY_UNSPECIFIED,
            elasticSearchCursor: null
        }
    }

    function p(e) {
        return Math.max(5 * e.pageSize, 250)
    }(r = o || (o = {}))[r.FORWARD = 1] = "FORWARD", r[r.BACKWARD = -1] = "BACKWARD";
    var m = function() {
        var e, t, n;

        function r(e, t) {
            var n = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), l(this, "guildId", void 0), l(this, "_sortedMemberIds", void 0), l(this, "_paginationState", void 0), l(this, "_version", void 0), l(this, "_cachedPaginationChunks", void 0), l(this, "_reduceMemberIdsToPaginationChunks", function(e, t, r) {
                var o = Math.floor(r / n._paginationState.pageSize) + 1;
                return null == e[o] && (e[o] = []), e[o].push(t), e
            }), this.guildId = e, this._paginationState = E(), this._version = 0;
            var o = f(this._initPaginationFromRawMembers(t), 2),
                i = o[0],
                a = o[1];
            this._sortedMemberIds = i, this._cachedPaginationChunks = a, this._version += 1
        }
        return e = r, t = [{
            key: "reset",
            value: function() {
                this._paginationState = E(), this._sortedMemberIds = [], this._cachedPaginationChunks = {}, this._version += 1
            }
        }, {
            key: "isMemberOnCurrentPage",
            value: function(e) {
                var t;
                return (null !== (t = this._cachedPaginationChunks[this._paginationState.currentPage]) && void 0 !== t ? t : []).includes(e)
            }
        }, {
            key: "isMemberInAnyChunk",
            value: function(e) {
                return this._sortedMemberIds.includes(e)
            }
        }, {
            key: "_initPaginationFromRawMembers",
            value: function(e) {
                var t = this,
                    n = [],
                    r = e.reduce(function(e, r, o) {
                        return e = t._reduceMemberIdsToPaginationChunks(e, r.userId, o), n.push(r.userId), e
                    }, {});
                return [n, r]
            }
        }, {
            key: "_buildPaginationFromMemberIds",
            value: function(e) {
                return e.reduce(this._reduceMemberIdsToPaginationChunks, {})
            }
        }, {
            key: "_rebuildPaginationChunksFromStoredMembers",
            value: function() {
                return this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds), this._version += 1, !0
            }
        }, {
            key: "getPaginationState",
            value: function() {
                return this._paginationState
            }
        }, {
            key: "updatePaginationToken",
            value: function(e) {
                var t, n;
                if (e === this._paginationState.continuationToken) return !1;
                return this._paginationState = (t = c({}, this._paginationState), n = (n = {
                    continuationToken: e
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t), !0
            }
        }, {
            key: "_calculateNewPageFromPageSizeChange",
            value: function(e, t) {
                var n = this._paginationState,
                    r = n.currentPage,
                    o = n.pageSize;
                return e * o <= this._sortedMemberIds.length ? Math.max(Math.ceil(o / e * (null != t ? t : r)), 1) : 1
            }
        }, {
            key: "updatePaginationState",
            value: function(e) {
                var t, n = !1;
                return null != e.pageSize && e.pageSize !== this._paginationState.pageSize && (n = !0, e.currentPage = this._calculateNewPageFromPageSizeChange(null !== (t = e.pageSize) && void 0 !== t ? t : this._paginationState.pageSize, e.currentPage)), this._paginationState = c({}, this._paginationState, e), n && this._rebuildPaginationChunksFromStoredMembers(), [!0, n]
            }
        }, {
            key: "updateSortedMembers",
            value: function(e) {
                var t = f(this._initPaginationFromRawMembers(e), 2),
                    n = t[0],
                    r = t[1];
                return this._sortedMemberIds = n, this._cachedPaginationChunks = r, this._version += 1, !0
            }
        }, {
            key: "updateSortedMembersByUserIds",
            value: function(e) {
                return this._sortedMemberIds = e, this._rebuildPaginationChunksFromStoredMembers(), !0
            }
        }, {
            key: "_findMember",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                    n = e;
                n < this._sortedMemberIds.length && (n = this._sortedMemberIds.length - 1), n < 0 && (n = 0);
                for (var r = this._sortedMemberIds[e], o = i.default.getMember(this.guildId, r); null == o && !((e += t) < 0) && !(e >= this._sortedMemberIds.length);) {
                    ;
                    r = this._sortedMemberIds[e], (null == (o = i.default.getMember(this.guildId, r)) ? void 0 : o.joinedAt) == null && (o = null)
                }
                return o
            }
        }, {
            key: "getElasticSearchPagination",
            value: function() {
                return this.getPaginationState().elasticSearchCursor
            }
        }, {
            key: "paginatedMembers",
            get: function() {
                return this._cachedPaginationChunks
            }
        }, {
            key: "version",
            get: function() {
                return this._version
            }
        }], s(e.prototype, t), n && s(e, n), r
    }()
}