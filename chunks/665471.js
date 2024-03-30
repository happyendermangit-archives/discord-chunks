function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addFavoriteGIF: function() {
            return G
        },
        fetchSuggestions: function() {
            return P
        },
        fetchTrending: function() {
            return U
        },
        fetchTrendingGIFs: function() {
            return w
        },
        initializeSearch: function() {
            return M
        },
        removeFavoriteGIF: function() {
            return B
        },
        resetSearch: function() {
            return D
        },
        search: function() {
            return C
        },
        trackSearchResultViewed: function() {
            return b
        },
        trackSearchStart: function() {
            return A
        },
        trackSelectGIF: function() {
            return L
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("153832"),
        a = n("967888"),
        u = n("340310"),
        s = n("629815"),
        l = n("140817"),
        c = n("396242"),
        f = n("225098"),
        d = n("968574"),
        _ = n("379945"),
        E = n("870331"),
        p = n("266261"),
        m = n("822853"),
        y = n("483587"),
        I = n("281767"),
        h = n("382021"),
        O = n("941504");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function S(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                T(e, t, n[t])
            })
        }
        return e
    }

    function v(e, t) {
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
    var g = /-/g;

    function A(e) {
        var t = null != e ? T({}, e, 1) : {};
        l.default.trackWithMetadata(I.AnalyticEvents.SEARCH_STARTED, {
            search_type: I.SearchTypes.GIF,
            load_id: _.default.getAnalyticsID(),
            num_modifiers: Object.keys(t).length,
            modifiers: t
        })
    }

    function b(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = n.startTime,
            o = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(n, ["startTime"]),
            i = {
                offset: 0,
                limit: null,
                totalResults: e.length
            },
            a = (0, p.calculateAnalyticsMetadata)(_.default.getAnalyticsID(), t, v(S({}, i, o), {
                results: e
            })),
            u = null == r ? {} : {
                load_duration_ms: Date.now() - r
            };
        l.default.trackWithMetadata(I.AnalyticEvents.SEARCH_RESULT_VIEWED, S({}, a, u))
    }

    function N(e, t, n) {
        var r = Date.now();
        A(t), a.HTTP.get({
            url: I.Endpoints.GIFS_SEARCH,
            query: {
                q: e,
                media_format: _.default.getSelectedFormat(),
                provider: "tenor",
                locale: f.default.locale,
                limit: n
            },
            oldFormErrors: !0
        }).then(function(o) {
            var i = o.body;
            b(i, t, {
                startTime: r,
                limit: n
            }), s.default.dispatch({
                type: "GIF_PICKER_QUERY_SUCCESS",
                query: e,
                items: i
            })
        }, function() {
            return s.default.dispatch({
                type: "GIF_PICKER_QUERY_FAILURE",
                query: e
            })
        })
    }
    var R = o().debounce(N, 250);

    function C(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0;
        "" === e ? D() : (s.default.dispatch({
            type: "GIF_PICKER_QUERY",
            query: e
        }), n ? N(e, t, r) : R(e, t, r))
    }

    function P(e) {
        "" !== e && null != e && a.HTTP.get({
            url: I.Endpoints.GIFS_SUGGEST,
            query: {
                q: e,
                provider: "tenor",
                limit: 5,
                locale: f.default.locale
            },
            oldFormErrors: !0
        }).then(function(t) {
            var n = t.body;
            s.default.dispatch({
                type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
                query: e,
                items: n
            })
        })
    }

    function D() {
        s.default.dispatch({
            type: "GIF_PICKER_QUERY",
            query: ""
        })
    }

    function L(e) {
        var t = e.type,
            n = e.index,
            r = e.offset,
            o = e.limit,
            i = e.results,
            u = e.totalResults,
            s = e.query,
            c = e.gifId,
            f = (0, p.calculateAnalyticsMetadata)(_.default.getAnalyticsID(), t, {
                offset: r,
                limit: o,
                results: i,
                totalResults: u
            });
        l.default.trackWithMetadata(I.AnalyticEvents.SEARCH_RESULT_SELECTED, v(S({}, f), {
            index_num: n,
            source_object: "GIF Picker",
            query: s
        })), null != c && a.HTTP.post({
            url: I.Endpoints.GIFS_SELECT,
            body: {
                id: c,
                q: s
            },
            oldFormErrors: !0
        })
    }

    function M() {
        var e = (0, i.v4)().replace(g, "");
        l.default.trackWithMetadata(I.AnalyticEvents.SEARCH_OPENED, {
            search_type: I.SearchTypes.GIF,
            load_id: e
        }), s.default.wait(function() {
            s.default.dispatch({
                type: "GIF_PICKER_INITIALIZE",
                analyticsID: e
            })
        })
    }

    function U() {
        a.HTTP.get({
            url: I.Endpoints.GIFS_TRENDING,
            query: {
                provider: "tenor",
                locale: f.default.locale,
                media_format: _.default.getSelectedFormat()
            },
            oldFormErrors: !0
        }).then(function(e) {
            var t = e.body,
                n = t.categories,
                r = t.gifs;
            s.default.dispatch({
                type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                trendingCategories: n,
                trendingGIFPreview: r[0]
            })
        })
    }

    function w(e) {
        var t = Date.now();
        A(I.GIFPickerResultTypes.TRENDING_GIFS), a.HTTP.get({
            url: I.Endpoints.GIFS_TRENDING_GIFS,
            query: {
                media_format: _.default.getSelectedFormat(),
                provider: "tenor",
                locale: f.default.locale,
                limit: e
            },
            oldFormErrors: !0
        }).then(function(n) {
            var r = n.body;
            b(r, I.GIFPickerResultTypes.TRENDING_GIFS, {
                startTime: t,
                limit: e
            }), s.default.dispatch({
                type: "GIF_PICKER_QUERY_SUCCESS",
                items: r
            })
        }, function() {
            s.default.dispatch({
                type: "GIF_PICKER_QUERY_FAILURE"
            })
        })
    }

    function k(e) {
        var t = m.default.toURLSafe(e);
        return null == t ? e : (0, c.isAttachmentUrl)(t) ? (0, c.removeSignedUrlParameters)(t).toString() : e
    }

    function G(e) {
        d.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", function(t) {
            var n, r = null !== (n = o().max(Object.values(t.gifs).map(function(e) {
                return e.order
            }))) && void 0 !== n ? n : 0;
            if (t.gifs[k(e.url)] = v(S({}, e), {
                    order: r + 1
                }), u.FavoriteGIFs.toBinary(t).length > h.MAX_FAVORITE_GIFS_SIZE) return y.default.show({
                title: O.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                body: O.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
            }), !1;
            var i = o().size(t.gifs);
            i > 2 && (t.hideTooltip = !0), E.default.track(I.AnalyticEvents.GIF_FAVORITED, {
                total_num_favorited: i
            })
        }, h.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function B(e) {
        d.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", function(t) {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[k(e)], E.default.track(I.AnalyticEvents.GIF_UNFAVORITED, {
                total_num_favorited: o().size(t.gifs)
            })
        }, h.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }
}