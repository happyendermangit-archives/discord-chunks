function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("733860");
    var r, s, a, o, l = n("392711"),
        u = n.n(l),
        d = n("442837"),
        _ = n("433517"),
        c = n("570140"),
        E = n("840877"),
        I = n("952537"),
        T = n("592125"),
        f = n("430824"),
        S = n("981631");
    let h = {},
        A = !1;

    function m(e) {
        return null == h[e] && (h[e] = {
            searchId: e,
            searchType: N(e),
            isIndexing: !1,
            isHistoricalIndexing: !1,
            isSearching: !1,
            analyticsId: null,
            editorState: null,
            offset: 0,
            query: null,
            hasError: !1,
            searchFetcher: null,
            rawResults: null,
            totalResults: 0,
            documentsIndexed: 0,
            resultsBlocked: 0,
            showBlockedResults: !1,
            showNoResultsAlt: !1
        }), h[e]
    }

    function N(e) {
        return e === S.SearchTypes.DMS ? S.SearchTypes.DMS : e === S.FAVORITES ? S.SearchTypes.FAVORITES : null != f.default.getGuild(e) ? S.SearchTypes.GUILD : null != T.default.getChannel(e) ? S.SearchTypes.CHANNEL : null
    }

    function p(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (null == e) return n;
        let i = h[e];
        return null == i ? n : t(i)
    }
    let O = "SearchStore",
        R = !1,
        C = {},
        g = null;

    function L(e) {
        var t;
        let {
            searchId: n,
            query: i
        } = e;
        if ("string" != typeof i || "" === (i = i.trim())) return;
        let r = C[n] = null !== (t = C[n]) && void 0 !== t ? t : [],
            s = r.indexOf(i); - 1 !== s ? (r.splice(s, 1), r.unshift(i)) : null != r[0] && "" !== r[0] && i.startsWith(r[0]) ? r[0] = i : s < 0 && r.unshift(i), r.length > 5 && r.splice(5, r.length), _.Storage.set(O, {
            history: C
        })
    }

    function v(e) {
        let {
            searchId: t
        } = e, n = h[t];
        if (null == n) return !1;
        null != n.searchFetcher && n.searchFetcher.cancel(), delete h[t]
    }

    function D(e) {
        if (e === g) return !1;
        null != e && null == h[e] && m(e), g = e
    }
    class M extends(r = d.default.Store) {
        initialize() {
            this.waitFor(f.default, T.default);
            let e = _.Storage.get(O);
            if ((null == e ? void 0 : e.history) != null) {
                var t;
                Object.keys(t = e.history).forEach(e => {
                    Array.isArray(t[e]) && (t[e] = t[e].filter(e => "string" == typeof e && e.trim())), (!Array.isArray(t[e]) || 0 === t[e].length) && delete t[e]
                }), C = t
            }
            R = !!_.Storage.get("tokenized")
        }
        isOpen() {
            return A
        }
        getCurrentSearchModalType() {
            return i
        }
        getCurrentSearchId() {
            return g
        }
        isActive() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g;
            return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
        }
        isTokenized() {
            return R
        }
        getSearchType(e) {
            return p(null != e ? e : g, e => e.searchType)
        }
        getRawResults(e) {
            return p(e, e => e.rawResults)
        }
        hasResults(e) {
            return null != p(e, e => e.rawResults)
        }
        isIndexing(e) {
            return p(e, e => e.isIndexing) || !1
        }
        isHistoricalIndexing(e) {
            return p(e, e => e.isHistoricalIndexing) || !1
        }
        isSearching(e) {
            return p(e, e => e.isSearching) || !1
        }
        getAnalyticsId(e) {
            return p(e, e => e.analyticsId)
        }
        getResultsBlocked(e) {
            return p(e, e => e.resultsBlocked)
        }
        getDocumentsIndexedCount(e) {
            return p(e, e => e.documentsIndexed)
        }
        getSearchFetcher(e) {
            return p(e, e => e.searchFetcher)
        }
        getTotalResults(e) {
            var t;
            return null !== (t = p(e, e => e.totalResults)) && void 0 !== t ? t : 0
        }
        getEditorState(e) {
            return p(e, e => e.editorState)
        }
        getHistory(e) {
            return C[e]
        }
        getOffset(e) {
            var t;
            return null !== (t = p(e, e => e.offset)) && void 0 !== t ? t : 0
        }
        getQuery(e) {
            return p(e, e => e.query)
        }
        hasError(e) {
            var t;
            return null !== (t = p(e, e => e.hasError)) && void 0 !== t && t
        }
        shouldShowBlockedResults(e) {
            var t;
            return null !== (t = p(e, e => e.showBlockedResults, !1)) && void 0 !== t && t
        }
        shouldShowNoResultsAlt(e) {
            var t;
            return null !== (t = p(e, e => e.showNoResultsAlt, !1)) && void 0 !== t && t
        }
        getResultsState(e) {
            return {
                isSearching: this.isSearching(e),
                isIndexing: this.isIndexing(e),
                isHistoricalIndexing: this.isHistoricalIndexing(e),
                documentsIndexed: this.getDocumentsIndexedCount(e),
                offset: this.getOffset(e),
                totalResults: this.getTotalResults(e),
                hasError: this.hasError(e),
                showBlockedResults: this.shouldShowBlockedResults(e),
                showNoResultsAlt: this.shouldShowNoResultsAlt(e)
            }
        }
    }
    o = "SearchStore", (a = "displayName") in(s = M) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new M(c.default, {
        SEARCH_START: function(e) {
            var t, n;
            let {
                queryString: i,
                searchId: r,
                query: s
            } = e, a = m(r);
            null != a.searchFetcher && (a.searchFetcher.cancel(), a.searchFetcher = null);
            let o = a.searchType,
                l = new E.default(r, o, s);
            a.searchFetcher = l, a.isSearching = !0, a.rawResults = null, a.analyticsId = null, a.query = u().omit(s, "type"), a.offset = null !== (n = s.offset) && void 0 !== n ? n : 0, a.showBlockedResults = !1, L({
                type: "SEARCH_ADD_HISTORY",
                searchId: r,
                query: i
            });
            let d = r === S.FAVORITES ? null === (t = T.default.getChannel(r)) || void 0 === t ? void 0 : t.guild_id : o === S.SearchTypes.GUILD ? r : null;
            l.fetch(e => {
                var t, n;
                c.default.dispatch({
                    type: "SEARCH_FINISH",
                    searchId: r,
                    guildId: d,
                    analyticsId: e.body.analytics_id,
                    totalResults: e.body.total_results,
                    messages: e.body.messages,
                    threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                    members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map(e => (0, I.default)(e)),
                    hasError: !1,
                    doingHistoricalIndex: e.body.doing_deep_historical_index,
                    documentsIndexed: e.body.documents_indexed
                })
            }, () => {
                c.default.dispatch({
                    type: "SEARCH_INDEXING",
                    searchId: r
                })
            }, () => {
                c.default.dispatch({
                    type: "SEARCH_FINISH",
                    searchId: r,
                    guildId: d,
                    messages: [],
                    threads: [],
                    members: [],
                    totalResults: 0,
                    analyticsId: null,
                    hasError: !0,
                    doingHistoricalIndex: !1,
                    documentsIndexed: 0
                })
            })
        },
        SEARCH_INDEXING: function(e) {
            let {
                searchId: t
            } = e, n = m(t);
            n.isIndexing = !0, n.isHistoricalIndexing = !0, n.isSearching = !1
        },
        SEARCH_FINISH: function(e) {
            let {
                searchId: t
            } = e, n = m(t);
            n.isSearching = !1, n.isIndexing = !1, n.isHistoricalIndexing = e.doingHistoricalIndex || !1, n.searchFetcher = null, n.totalResults = e.totalResults, n.hasError = e.hasError, n.analyticsId = e.analyticsId, n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0, n.showNoResultsAlt = .05 > Math.random(), n.rawResults = e.messages, null == n.query && (n.hasError = !0)
        },
        SEARCH_EDITOR_STATE_CLEAR: v,
        SEARCH_ENSURE_SEARCH_STATE: function(e) {
            let {
                searchId: t
            } = e;
            null != t && m(t)
        },
        SEARCH_EDITOR_STATE_CHANGE: function(e) {
            let {
                searchId: t,
                editorState: n
            } = e;
            m(t).editorState = n
        },
        SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
            let {
                searchId: t,
                showBlocked: n
            } = e;
            m(t).showBlockedResults = n
        },
        SEARCH_SCREEN_OPEN: function(e) {
            let {
                searchId: t
            } = e;
            D(t)
        },
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            D(null != t ? t : n)
        },
        CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
            return null != g && v({
                searchId: g
            })
        },
        SEARCH_CLEAR_HISTORY: function(e) {
            let {
                searchId: t
            } = e;
            null == t ? (_.Storage.remove(O), C = {}) : (delete C[t], _.Storage.set(O, {
                history: C
            }))
        },
        SEARCH_REMOVE_HISTORY: function(e) {
            let {
                searchId: t,
                query: n
            } = e;
            null != C[t] && (C[t] = C[t].filter(e => e !== n), _.Storage.set(O, {
                history: C
            }))
        },
        SEARCH_ADD_HISTORY: L,
        LOGOUT: function() {
            _.Storage.remove(O), C = {}
        },
        CONNECTION_OPEN: function() {
            Object.keys(h).forEach(e => {
                null != h[e] && (h[e].searchType = N(e))
            })
        },
        SEARCH_MODAL_OPEN: function(e) {
            let {
                searchId: t,
                searchType: n
            } = e;
            null != t && (g = t), A = !0, i = n
        },
        SEARCH_MODAL_CLOSE: function() {
            A = !1, i = void 0
        }
    })
}