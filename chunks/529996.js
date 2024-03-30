function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("242880"),
        f = n("629815"),
        d = n("760913"),
        _ = n("653009"),
        E = n("935741"),
        p = n("306912"),
        m = n("281767");

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = {},
        T = !1,
        S = void 0;

    function v(e) {
        return null == O[e] && (O[e] = {
            searchId: e,
            searchType: g(e),
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
        }), O[e]
    }

    function g(e) {
        return e === m.SearchTypes.DMS ? m.SearchTypes.DMS : e === m.FAVORITES ? m.SearchTypes.FAVORITES : null != p.default.getGuild(e) ? m.SearchTypes.GUILD : null != E.default.getChannel(e) ? m.SearchTypes.CHANNEL : null
    }

    function A(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (null == e) return n;
        var r = O[e];
        return null == r ? n : t(r)
    }
    var b = "SearchStore",
        N = !1,
        R = {},
        C = null;

    function P(e) {
        var t, n = e.searchId,
            r = e.query;
        if ("string" == typeof r) {
            if ("" !== (r = r.trim())) {
                var o = R[n] = null !== (t = R[n]) && void 0 !== t ? t : [],
                    i = o.indexOf(r); - 1 !== i ? (o.splice(i, 1), o.unshift(r)) : null != o[0] && "" !== o[0] && r.startsWith(o[0]) ? o[0] = r : i < 0 && o.unshift(r), o.length > 5 && o.splice(5, o.length), c.Storage.set(b, {
                    history: R
                })
            }
        }
    }

    function D(e) {
        var t = e.searchId,
            n = O[t];
        if (null == n) return !1;
        null != n.searchFetcher && n.searchFetcher.cancel(), delete O[t]
    }

    function L(e) {
        if (e === C) return !1;
        null != e && null == O[e] && v(e), C = e
    }
    var M = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
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
            var e, r, o, i = I(t);
            if (n) {
                var a = I(this).constructor;
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
                this.waitFor(p.default, E.default);
                var e, t = c.Storage.get(b);
                if ((null == t ? void 0 : t.history) != null) {
                    ;
                    Object.keys(e = t.history).forEach(function(t) {
                        Array.isArray(e[t]) && (e[t] = e[t].filter(function(e) {
                            return "string" == typeof e && e.trim()
                        })), (!Array.isArray(e[t]) || 0 === e[t].length) && delete e[t]
                    }), R = e
                }
                N = !!c.Storage.get("tokenized")
            }
        }, {
            key: "isOpen",
            value: function() {
                return T
            }
        }, {
            key: "getCurrentSearchModalType",
            value: function() {
                return S
            }
        }, {
            key: "getCurrentSearchId",
            value: function() {
                return C
            }
        }, {
            key: "isActive",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C;
                return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
            }
        }, {
            key: "isTokenized",
            value: function() {
                return N
            }
        }, {
            key: "getSearchType",
            value: function(e) {
                return A(null != e ? e : C, function(e) {
                    return e.searchType
                })
            }
        }, {
            key: "getRawResults",
            value: function(e) {
                return A(e, function(e) {
                    return e.rawResults
                })
            }
        }, {
            key: "hasResults",
            value: function(e) {
                return null != A(e, function(e) {
                    return e.rawResults
                })
            }
        }, {
            key: "isIndexing",
            value: function(e) {
                return A(e, function(e) {
                    return e.isIndexing
                }) || !1
            }
        }, {
            key: "isHistoricalIndexing",
            value: function(e) {
                return A(e, function(e) {
                    return e.isHistoricalIndexing
                }) || !1
            }
        }, {
            key: "isSearching",
            value: function(e) {
                return A(e, function(e) {
                    return e.isSearching
                }) || !1
            }
        }, {
            key: "getAnalyticsId",
            value: function(e) {
                return A(e, function(e) {
                    return e.analyticsId
                })
            }
        }, {
            key: "getResultsBlocked",
            value: function(e) {
                return A(e, function(e) {
                    return e.resultsBlocked
                })
            }
        }, {
            key: "getDocumentsIndexedCount",
            value: function(e) {
                return A(e, function(e) {
                    return e.documentsIndexed
                })
            }
        }, {
            key: "getSearchFetcher",
            value: function(e) {
                return A(e, function(e) {
                    return e.searchFetcher
                })
            }
        }, {
            key: "getTotalResults",
            value: function(e) {
                var t;
                return null !== (t = A(e, function(e) {
                    return e.totalResults
                })) && void 0 !== t ? t : 0
            }
        }, {
            key: "getEditorState",
            value: function(e) {
                return A(e, function(e) {
                    return e.editorState
                })
            }
        }, {
            key: "getHistory",
            value: function(e) {
                return R[e]
            }
        }, {
            key: "getOffset",
            value: function(e) {
                var t;
                return null !== (t = A(e, function(e) {
                    return e.offset
                })) && void 0 !== t ? t : 0
            }
        }, {
            key: "getQuery",
            value: function(e) {
                return A(e, function(e) {
                    return e.query
                })
            }
        }, {
            key: "hasError",
            value: function(e) {
                var t;
                return null !== (t = A(e, function(e) {
                    return e.hasError
                })) && void 0 !== t && t
            }
        }, {
            key: "shouldShowBlockedResults",
            value: function(e) {
                var t;
                return null !== (t = A(e, function(e) {
                    return e.showBlockedResults
                }, !1)) && void 0 !== t && t
            }
        }, {
            key: "shouldShowNoResultsAlt",
            value: function(e) {
                var t;
                return null !== (t = A(e, function(e) {
                    return e.showNoResultsAlt
                }, !1)) && void 0 !== t && t
            }
        }, {
            key: "getResultsState",
            value: function(e) {
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
        }], y(r.prototype, o), i && y(r, i), u
    }(l.default.Store);
    i = "SearchStore", (o = "displayName") in(r = M) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new M(f.default, {
        SEARCH_START: function(e) {
            var t, n, r = e.queryString,
                o = e.searchId,
                i = e.query,
                a = v(o);
            null != a.searchFetcher && (a.searchFetcher.cancel(), a.searchFetcher = null);
            var u = a.searchType,
                l = new d.default(o, u, i);
            a.searchFetcher = l, a.isSearching = !0, a.rawResults = null, a.analyticsId = null, a.query = s().omit(i, "type"), a.offset = null !== (n = i.offset) && void 0 !== n ? n : 0, a.showBlockedResults = !1, P({
                type: "SEARCH_ADD_HISTORY",
                searchId: o,
                query: r
            });
            var c = o === m.FAVORITES ? null === (t = E.default.getChannel(o)) || void 0 === t ? void 0 : t.guild_id : u === m.SearchTypes.GUILD ? o : null;
            l.fetch(function(e) {
                var t, n;
                f.default.dispatch({
                    type: "SEARCH_FINISH",
                    searchId: o,
                    guildId: c,
                    analyticsId: e.body.analytics_id,
                    totalResults: e.body.total_results,
                    messages: e.body.messages,
                    threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                    members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map(function(e) {
                        return (0, _.default)(e)
                    }),
                    hasError: !1,
                    doingHistoricalIndex: e.body.doing_deep_historical_index,
                    documentsIndexed: e.body.documents_indexed
                })
            }, function() {
                f.default.dispatch({
                    type: "SEARCH_INDEXING",
                    searchId: o
                })
            }, function() {
                f.default.dispatch({
                    type: "SEARCH_FINISH",
                    searchId: o,
                    guildId: c,
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
            var t = v(e.searchId);
            t.isIndexing = !0, t.isHistoricalIndexing = !0, t.isSearching = !1
        },
        SEARCH_FINISH: function(e) {
            var t = v(e.searchId);
            t.isSearching = !1, t.isIndexing = !1, t.isHistoricalIndexing = e.doingHistoricalIndex || !1, t.searchFetcher = null, t.totalResults = e.totalResults, t.hasError = e.hasError, t.analyticsId = e.analyticsId, t.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0, t.showNoResultsAlt = .05 > Math.random(), t.rawResults = e.messages, null == t.query && (t.hasError = !0)
        },
        SEARCH_EDITOR_STATE_CLEAR: D,
        SEARCH_ENSURE_SEARCH_STATE: function(e) {
            var t = e.searchId;
            null != t && v(t)
        },
        SEARCH_EDITOR_STATE_CHANGE: function(e) {
            var t = e.searchId,
                n = e.editorState;
            v(t).editorState = n
        },
        SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
            var t = e.searchId,
                n = e.showBlocked;
            v(t).showBlockedResults = n
        },
        SEARCH_SCREEN_OPEN: function(e) {
            L(e.searchId)
        },
        CHANNEL_SELECT: function(e) {
            var t = e.guildId,
                n = e.channelId;
            L(null != t ? t : n)
        },
        CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
            return null != C && D({
                searchId: C
            })
        },
        SEARCH_CLEAR_HISTORY: function(e) {
            var t = e.searchId;
            null == t ? (c.Storage.remove(b), R = {}) : (delete R[t], c.Storage.set(b, {
                history: R
            }))
        },
        SEARCH_REMOVE_HISTORY: function(e) {
            var t = e.searchId,
                n = e.query;
            null != R[t] && (R[t] = R[t].filter(function(e) {
                return e !== n
            }), c.Storage.set(b, {
                history: R
            }))
        },
        SEARCH_ADD_HISTORY: P,
        LOGOUT: function() {
            c.Storage.remove(b), R = {}
        },
        CONNECTION_OPEN: function() {
            Object.keys(O).forEach(function(e) {
                null != O[e] && (O[e].searchType = g(e))
            })
        },
        SEARCH_MODAL_OPEN: function(e) {
            var t = e.searchId,
                n = e.searchType;
            null != t && (C = t), T = !0, S = n
        },
        SEARCH_MODAL_CLOSE: function() {
            T = !1, S = void 0
        }
    })
}