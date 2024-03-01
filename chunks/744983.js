function(e, t, n) {
    "use strict";
    let s;
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("843762");
    var i = n("917351"),
        r = n.n(i),
        a = n("446674"),
        o = n("95410"),
        d = n("913144"),
        u = n("390933"),
        l = n("25932"),
        f = n("42203"),
        _ = n("305961"),
        c = n("49111");
    let g = {},
        m = !1;

    function h(e) {
        return null == g[e] && (g[e] = {
            searchId: e,
            searchType: v(e),
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
        }), g[e]
    }

    function v(e) {
        return e === c.SearchTypes.DMS ? c.SearchTypes.DMS : e === c.FAVORITES ? c.SearchTypes.FAVORITES : null != _.default.getGuild(e) ? c.SearchTypes.GUILD : null != f.default.getChannel(e) ? c.SearchTypes.CHANNEL : null
    }

    function E(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (null == e) return n;
        let s = g[e];
        return null == s ? n : t(s)
    }
    let p = "SearchStore",
        y = !1,
        T = {},
        C = null;

    function I(e) {
        var t;
        let {
            searchId: n,
            query: s
        } = e;
        if ("string" != typeof s || "" === (s = s.trim())) return;
        let i = T[n] = null !== (t = T[n]) && void 0 !== t ? t : [],
            r = i.indexOf(s); - 1 !== r ? (i.splice(r, 1), i.unshift(s)) : null != i[0] && "" !== i[0] && s.startsWith(i[0]) ? i[0] = s : r < 0 && i.unshift(s), i.length > 5 && i.splice(5, i.length), o.default.set(p, {
            history: T
        })
    }

    function S(e) {
        let {
            searchId: t
        } = e, n = g[t];
        if (null == n) return !1;
        null != n.searchFetcher && n.searchFetcher.cancel(), delete g[t]
    }

    function A(e) {
        if (e === C) return !1;
        null != e && null == g[e] && h(e), C = e
    }
    class D extends a.default.Store {
        initialize() {
            this.waitFor(_.default, f.default);
            let e = o.default.get(p);
            if ((null == e ? void 0 : e.history) != null) {
                var t;
                Object.keys(t = e.history).forEach(e => {
                    Array.isArray(t[e]) && (t[e] = t[e].filter(e => "string" == typeof e && e.trim())), (!Array.isArray(t[e]) || 0 === t[e].length) && delete t[e]
                }), T = t
            }
            y = !!o.default.get("tokenized")
        }
        isOpen() {
            return m
        }
        getCurrentSearchModalType() {
            return s
        }
        getCurrentSearchId() {
            return C
        }
        isActive() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C;
            return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
        }
        isTokenized() {
            return y
        }
        getSearchType(e) {
            return E(null != e ? e : C, e => e.searchType)
        }
        getRawResults(e) {
            return E(e, e => e.rawResults)
        }
        hasResults(e) {
            return null != E(e, e => e.rawResults)
        }
        isIndexing(e) {
            return E(e, e => e.isIndexing) || !1
        }
        isHistoricalIndexing(e) {
            return E(e, e => e.isHistoricalIndexing) || !1
        }
        isSearching(e) {
            return E(e, e => e.isSearching) || !1
        }
        getAnalyticsId(e) {
            return E(e, e => e.analyticsId)
        }
        getResultsBlocked(e) {
            return E(e, e => e.resultsBlocked)
        }
        getDocumentsIndexedCount(e) {
            return E(e, e => e.documentsIndexed)
        }
        getSearchFetcher(e) {
            return E(e, e => e.searchFetcher)
        }
        getTotalResults(e) {
            var t;
            return null !== (t = E(e, e => e.totalResults)) && void 0 !== t ? t : 0
        }
        getEditorState(e) {
            return E(e, e => e.editorState)
        }
        getHistory(e) {
            return T[e]
        }
        getOffset(e) {
            var t;
            return null !== (t = E(e, e => e.offset)) && void 0 !== t ? t : 0
        }
        getQuery(e) {
            return E(e, e => e.query)
        }
        hasError(e) {
            var t;
            return null !== (t = E(e, e => e.hasError)) && void 0 !== t && t
        }
        shouldShowBlockedResults(e) {
            var t;
            return null !== (t = E(e, e => e.showBlockedResults, !1)) && void 0 !== t && t
        }
        shouldShowNoResultsAlt(e) {
            var t;
            return null !== (t = E(e, e => e.showNoResultsAlt, !1)) && void 0 !== t && t
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
    D.displayName = "SearchStore";
    var N = new D(d.default, {
        SEARCH_START: function(e) {
            var t, n;
            let {
                queryString: s,
                searchId: i,
                query: a
            } = e, o = h(i);
            null != o.searchFetcher && (o.searchFetcher.cancel(), o.searchFetcher = null);
            let _ = o.searchType,
                g = new u.default(i, _, a);
            o.searchFetcher = g, o.isSearching = !0, o.rawResults = null, o.analyticsId = null, o.query = r.omit(a, "type"), o.offset = null !== (n = a.offset) && void 0 !== n ? n : 0, o.showBlockedResults = !1, I({
                type: "SEARCH_ADD_HISTORY",
                searchId: i,
                query: s
            });
            let m = i === c.FAVORITES ? null === (t = f.default.getChannel(i)) || void 0 === t ? void 0 : t.guild_id : _ === c.SearchTypes.GUILD ? i : null;
            g.fetch(e => {
                var t, n;
                d.default.dispatch({
                    type: "SEARCH_FINISH",
                    searchId: i,
                    guildId: m,
                    analyticsId: e.body.analytics_id,
                    totalResults: e.body.total_results,
                    messages: e.body.messages,
                    threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                    members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map(e => (0, l.default)(e)),
                    hasError: !1,
                    doingHistoricalIndex: e.body.doing_deep_historical_index,
                    documentsIndexed: e.body.documents_indexed
                })
            }, () => {
                d.default.dispatch({
                    type: "SEARCH_INDEXING",
                    searchId: i
                })
            }, () => {
                d.default.dispatch({
                    type: "SEARCH_FINISH",
                    searchId: i,
                    guildId: m,
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
            } = e, n = h(t);
            n.isIndexing = !0, n.isHistoricalIndexing = !0, n.isSearching = !1
        },
        SEARCH_FINISH: function(e) {
            let {
                searchId: t
            } = e, n = h(t);
            n.isSearching = !1, n.isIndexing = !1, n.isHistoricalIndexing = e.doingHistoricalIndex || !1, n.searchFetcher = null, n.totalResults = e.totalResults, n.hasError = e.hasError, n.analyticsId = e.analyticsId, n.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0, n.showNoResultsAlt = .05 > Math.random(), n.rawResults = e.messages;
            let s = n.query;
            null == s && (n.hasError = !0)
        },
        SEARCH_EDITOR_STATE_CLEAR: S,
        SEARCH_ENSURE_SEARCH_STATE: function(e) {
            let {
                searchId: t
            } = e;
            null != t && h(t)
        },
        SEARCH_EDITOR_STATE_CHANGE: function(e) {
            let {
                searchId: t,
                editorState: n
            } = e;
            h(t).editorState = n
        },
        SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
            let {
                searchId: t,
                showBlocked: n
            } = e, s = h(t);
            s.showBlockedResults = n
        },
        SEARCH_SCREEN_OPEN: function(e) {
            let {
                searchId: t
            } = e;
            A(t)
        },
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            A(null != t ? t : n)
        },
        CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
            return null != C && S({
                searchId: C
            })
        },
        SEARCH_CLEAR_HISTORY: function(e) {
            let {
                searchId: t
            } = e;
            null == t ? (o.default.remove(p), T = {}) : (delete T[t], o.default.set(p, {
                history: T
            }))
        },
        SEARCH_REMOVE_HISTORY: function(e) {
            let {
                searchId: t,
                query: n
            } = e;
            null != T[t] && (T[t] = T[t].filter(e => e !== n), o.default.set(p, {
                history: T
            }))
        },
        SEARCH_ADD_HISTORY: I,
        LOGOUT: function() {
            o.default.remove(p), T = {}
        },
        CONNECTION_OPEN: function() {
            Object.keys(g).forEach(e => {
                null != g[e] && (g[e].searchType = v(e))
            })
        },
        SEARCH_MODAL_OPEN: function(e) {
            let {
                searchId: t,
                searchType: n
            } = e;
            null != t && (C = t), m = !0, s = n
        },
        SEARCH_MODAL_CLOSE: function() {
            m = !1, s = void 0
        }
    })
}