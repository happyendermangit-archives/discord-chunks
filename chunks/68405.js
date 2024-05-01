function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addFavoriteGIF: function() {
            return b
        },
        fetchSuggestions: function() {
            return L
        },
        fetchTrending: function() {
            return y
        },
        fetchTrendingGIFs: function() {
            return P
        },
        gifUrlKey: function() {
            return U
        },
        initializeSearch: function() {
            return M
        },
        removeFavoriteGIF: function() {
            return G
        },
        resetSearch: function() {
            return v
        },
        search: function() {
            return g
        },
        trackSearchResultViewed: function() {
            return O
        },
        trackSearchStart: function() {
            return p
        },
        trackSelectGIF: function() {
            return D
        }
    }), n("757143");
    var i = n("392711"),
        r = n.n(i),
        a = n("153832"),
        s = n("544891"),
        o = n("377108"),
        l = n("570140"),
        u = n("367907"),
        d = n("198620"),
        _ = n("706454"),
        c = n("675478"),
        E = n("656733"),
        I = n("626135"),
        T = n("708406"),
        f = n("591759"),
        S = n("668781"),
        h = n("981631"),
        A = n("526761"),
        m = n("689938");
    let N = /-/g;

    function p(e) {
        let t = null != e ? {
            [e]: 1
        } : {};
        u.default.trackWithMetadata(h.AnalyticEvents.SEARCH_STARTED, {
            search_type: h.SearchTypes.GIF,
            load_id: E.default.getAnalyticsID(),
            num_modifiers: Object.keys(t).length,
            modifiers: t
        })
    }

    function O(e, t) {
        let {
            startTime: n,
            ...i
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = {
            offset: 0,
            limit: null,
            totalResults: e.length
        }, a = (0, T.calculateAnalyticsMetadata)(E.default.getAnalyticsID(), t, {
            ...r,
            ...i,
            results: e
        }), s = null == n ? {} : {
            load_duration_ms: Date.now() - n
        };
        u.default.trackWithMetadata(h.AnalyticEvents.SEARCH_RESULT_VIEWED, {
            ...a,
            ...s
        })
    }

    function R(e, t, n) {
        let i = Date.now();
        p(t), s.HTTP.get({
            url: h.Endpoints.GIFS_SEARCH,
            query: {
                q: e,
                media_format: E.default.getSelectedFormat(),
                provider: "tenor",
                locale: _.default.locale,
                limit: n
            },
            oldFormErrors: !0
        }).then(r => {
            let a = r.body;
            O(a, t, {
                startTime: i,
                limit: n
            }), l.default.dispatch({
                type: "GIF_PICKER_QUERY_SUCCESS",
                query: e,
                items: a
            })
        }, () => l.default.dispatch({
            type: "GIF_PICKER_QUERY_FAILURE",
            query: e
        }))
    }
    let C = r().debounce(R, 250);

    function g(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0;
        "" === e ? v() : (l.default.dispatch({
            type: "GIF_PICKER_QUERY",
            query: e
        }), n ? R(e, t, i) : C(e, t, i))
    }

    function L(e) {
        "" !== e && null != e && s.HTTP.get({
            url: h.Endpoints.GIFS_SUGGEST,
            query: {
                q: e,
                provider: "tenor",
                limit: 5,
                locale: _.default.locale
            },
            oldFormErrors: !0
        }).then(t => {
            let n = t.body;
            l.default.dispatch({
                type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
                query: e,
                items: n
            })
        })
    }

    function v() {
        l.default.dispatch({
            type: "GIF_PICKER_QUERY",
            query: ""
        })
    }

    function D(e) {
        let {
            type: t,
            index: n,
            offset: i,
            limit: r,
            results: a,
            totalResults: o,
            query: l,
            gifId: d
        } = e, _ = (0, T.calculateAnalyticsMetadata)(E.default.getAnalyticsID(), t, {
            offset: i,
            limit: r,
            results: a,
            totalResults: o
        });
        u.default.trackWithMetadata(h.AnalyticEvents.SEARCH_RESULT_SELECTED, {
            ..._,
            index_num: n,
            source_object: "GIF Picker",
            query: l
        }), null != d && s.HTTP.post({
            url: h.Endpoints.GIFS_SELECT,
            body: {
                id: d,
                q: l
            },
            oldFormErrors: !0
        })
    }

    function M() {
        let e = (0, a.v4)().replace(N, "");
        u.default.trackWithMetadata(h.AnalyticEvents.SEARCH_OPENED, {
            search_type: h.SearchTypes.GIF,
            load_id: e
        }), l.default.wait(() => {
            l.default.dispatch({
                type: "GIF_PICKER_INITIALIZE",
                analyticsID: e
            })
        })
    }

    function y() {
        s.HTTP.get({
            url: h.Endpoints.GIFS_TRENDING,
            query: {
                provider: "tenor",
                locale: _.default.locale,
                media_format: E.default.getSelectedFormat()
            },
            oldFormErrors: !0
        }).then(e => {
            let {
                body: t
            } = e, {
                categories: n,
                gifs: i
            } = t;
            l.default.dispatch({
                type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                trendingCategories: n,
                trendingGIFPreview: i[0]
            })
        })
    }

    function P(e) {
        let t = Date.now();
        p(h.GIFPickerResultTypes.TRENDING_GIFS), s.HTTP.get({
            url: h.Endpoints.GIFS_TRENDING_GIFS,
            query: {
                media_format: E.default.getSelectedFormat(),
                provider: "tenor",
                locale: _.default.locale,
                limit: e
            },
            oldFormErrors: !0
        }).then(n => {
            let {
                body: i
            } = n;
            O(i, h.GIFPickerResultTypes.TRENDING_GIFS, {
                startTime: t,
                limit: e
            }), l.default.dispatch({
                type: "GIF_PICKER_QUERY_SUCCESS",
                items: i
            })
        }, () => {
            l.default.dispatch({
                type: "GIF_PICKER_QUERY_FAILURE"
            })
        })
    }

    function U(e) {
        let t = f.default.toURLSafe(e);
        return null == t ? e : (0, d.isAttachmentUrl)(t) ? (0, d.removeSignedUrlParameters)(t).toString() : e
    }

    function b(e) {
        c.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
            var n;
            let i = null !== (n = r().max(Object.values(t.gifs).map(e => e.order))) && void 0 !== n ? n : 0;
            if (t.gifs[U(e.url)] = {
                    ...e,
                    order: i + 1
                }, o.FavoriteGIFs.toBinary(t).length > A.MAX_FAVORITE_GIFS_SIZE) return S.default.show({
                title: m.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                body: m.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
            }), !1;
            let a = r().size(t.gifs);
            a > 2 && (t.hideTooltip = !0), I.default.track(h.AnalyticEvents.GIF_FAVORITED, {
                total_num_favorited: a
            })
        }, A.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function G(e) {
        c.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[U(e)], I.default.track(h.AnalyticEvents.GIF_UNFAVORITED, {
                total_num_favorited: r().size(t.gifs)
            })
        }, A.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }
}