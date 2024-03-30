function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildMemberSafetyPagination: function() {
            return c
        },
        MAX_VISIBLE_PAGES: function() {
            return u
        },
        PAGINATION_PAGE_SIZE_OPTIONS: function() {
            return l
        },
        createDefaultMemberSafetyPaginationState: function() {
            return d
        },
        getSearchChunkLimit: function() {
            return _
        }
    }), n("724458"), n("653041"), n("47120");
    var i, r, s = n("271383"),
        a = n("588215");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let l = [12, 25, 50, 100],
        u = 7;

    function d() {
        return {
            pageSize: l[0],
            currentPage: 1,
            continuationToken: null,
            sort: a.OrderBy.ORDER_BY_UNSPECIFIED,
            elasticSearchCursor: null
        }
    }

    function _(e) {
        return Math.max(5 * e.pageSize, 250)
    }(r = i || (i = {}))[r.FORWARD = 1] = "FORWARD", r[r.BACKWARD = -1] = "BACKWARD";
    class c {
        reset() {
            this._paginationState = d(), this._sortedMemberIds = [], this._cachedPaginationChunks = {}, this._version += 1
        }
        isMemberOnCurrentPage(e) {
            var t;
            return (null !== (t = this._cachedPaginationChunks[this._paginationState.currentPage]) && void 0 !== t ? t : []).includes(e)
        }
        isMemberInAnyChunk(e) {
            return this._sortedMemberIds.includes(e)
        }
        _initPaginationFromRawMembers(e) {
            let t = [],
                n = e.reduce((e, n, i) => (e = this._reduceMemberIdsToPaginationChunks(e, n.userId, i), t.push(n.userId), e), {});
            return [t, n]
        }
        _buildPaginationFromMemberIds(e) {
            return e.reduce(this._reduceMemberIdsToPaginationChunks, {})
        }
        _rebuildPaginationChunksFromStoredMembers() {
            return this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds), this._version += 1, !0
        }
        getPaginationState() {
            return this._paginationState
        }
        updatePaginationToken(e) {
            return e !== this._paginationState.continuationToken && (this._paginationState = {
                ...this._paginationState,
                continuationToken: e
            }, !0)
        }
        _calculateNewPageFromPageSizeChange(e, t) {
            let {
                currentPage: n,
                pageSize: i
            } = this._paginationState;
            return e * i <= this._sortedMemberIds.length ? Math.max(Math.ceil(i / e * (null != t ? t : n)), 1) : 1
        }
        updatePaginationState(e) {
            let t = !1;
            if (null != e.pageSize && e.pageSize !== this._paginationState.pageSize) {
                var n;
                t = !0, e.currentPage = this._calculateNewPageFromPageSizeChange(null !== (n = e.pageSize) && void 0 !== n ? n : this._paginationState.pageSize, e.currentPage)
            }
            return this._paginationState = {
                ...this._paginationState,
                ...e
            }, t && this._rebuildPaginationChunksFromStoredMembers(), [!0, t]
        }
        updateSortedMembers(e) {
            let [t, n] = this._initPaginationFromRawMembers(e);
            return this._sortedMemberIds = t, this._cachedPaginationChunks = n, this._version += 1, !0
        }
        updateSortedMembersByUserIds(e) {
            return this._sortedMemberIds = e, this._rebuildPaginationChunksFromStoredMembers(), !0
        }
        _findMember(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                n = e;
            n < this._sortedMemberIds.length && (n = this._sortedMemberIds.length - 1), n < 0 && (n = 0);
            let i = this._sortedMemberIds[e],
                r = s.default.getMember(this.guildId, i);
            for (; null == r && !((e += t) < 0) && !(e >= this._sortedMemberIds.length);) {
                ;
                i = this._sortedMemberIds[e], (null == (r = s.default.getMember(this.guildId, i)) ? void 0 : r.joinedAt) == null && (r = null)
            }
            return r
        }
        getElasticSearchPagination() {
            return this.getPaginationState().elasticSearchCursor
        }
        get paginatedMembers() {
            return this._cachedPaginationChunks
        }
        get version() {
            return this._version
        }
        constructor(e, t) {
            o(this, "guildId", void 0), o(this, "_sortedMemberIds", void 0), o(this, "_paginationState", void 0), o(this, "_version", void 0), o(this, "_cachedPaginationChunks", void 0), o(this, "_reduceMemberIdsToPaginationChunks", (e, t, n) => {
                let i = Math.floor(n / this._paginationState.pageSize) + 1;
                return null == e[i] && (e[i] = []), e[i].push(t), e
            }), this.guildId = e, this._paginationState = d(), this._version = 0;
            let [n, i] = this._initPaginationFromRawMembers(t);
            this._sortedMemberIds = n, this._cachedPaginationChunks = i, this._version += 1
        }
    }
}