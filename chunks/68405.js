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
            return D
        },
        search: function() {
            return g
        },
        trackSearchResultViewed: function() {
            return p
        },
        trackSearchStart: function() {
            return O
        },
        trackSelectGIF: function() {
            return v
        }
    }), n("757143");
    var i = n("392711"),
        r = n.n(i),
        s = n("153832"),
        a = n("544891"),
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
        A = n("981631"),
        h = n("526761"),
        m = n("689938");
    let N = /-/g;

    function O(e) {
        let t = null != e ? {
            [e]: 1
        } : {};
        u.default.trackWithMetadata(A.AnalyticEvents.SEARCH_STARTED, {
            search_type: A.SearchTypes.GIF,
            load_id: E.default.getAnalyticsID(),
            num_modifiers: Object.keys(t).length,
            modifiers: t
        })
    }

    function p(e, t) {
        let {
            startTime: n,
            ...i
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = {
            offset: 0,
            limit: null,
            totalResults: e.length
        }, s = (0, T.calculateAnalyticsMetadata)(E.default.getAnalyticsID(), t, {
            ...r,
            ...i,
            results: e
        }), a = null == n ? {} : {
            load_duration_ms: Date.now() - n
        };
        u.default.trackWithMetadata(A.AnalyticEvents.SEARCH_RESULT_VIEWED, {
            ...s,
            ...a
        })
    }

    function R(e, t, n) {
        let i = Date.now();
        O(t), a.HTTP.get({
            url: A.Endpoints.GIFS_SEARCH,
            query: {
                q: e,
                media_format: E.default.getSelectedFormat(),
                provider: "tenor",
                locale: _.default.locale,
                limit: n
            },
            oldFormErrors: !0
        }).then(r => {
            let s = r.body;
            p(s, t, {
                startTime: i,
                limit: n
            }), l.default.dispatch({
                type: "GIF_PICKER_QUERY_SUCCESS",
                query: e,
                items: s
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
        "" === e ? D() : (l.default.dispatch({
            type: "GIF_PICKER_QUERY",
            query: e
        }), n ? R(e, t, i) : C(e, t, i))
    }

    function L(e) {
        "" !== e && null != e && a.HTTP.get({
            url: A.Endpoints.GIFS_SUGGEST,
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

    function D() {
        l.default.dispatch({
            type: "GIF_PICKER_QUERY",
            query: ""
        })
    }

    function v(e) {
        let {
            type: t,
            index: n,
            offset: i,
            limit: r,
            results: s,
            totalResults: o,
            query: l,
            gifId: d
        } = e, _ = (0, T.calculateAnalyticsMetadata)(E.default.getAnalyticsID(), t, {
            offset: i,
            limit: r,
            results: s,
            totalResults: o
        });
        u.default.trackWithMetadata(A.AnalyticEvents.SEARCH_RESULT_SELECTED, {
            ..._,
            index_num: n,
            source_object: "GIF Picker",
            query: l
        }), null != d && a.HTTP.post({
            url: A.Endpoints.GIFS_SELECT,
            body: {
                id: d,
                q: l
            },
            oldFormErrors: !0
        })
    }

    function M() {
        let e = (0, s.v4)().replace(N, "");
        u.default.trackWithMetadata(A.AnalyticEvents.SEARCH_OPENED, {
            search_type: A.SearchTypes.GIF,
            load_id: e
        }), l.default.wait(() => {
            l.default.dispatch({
                type: "GIF_PICKER_INITIALIZE",
                analyticsID: e
            })
        })
    }

    function y() {
        a.HTTP.get({
            url: A.Endpoints.GIFS_TRENDING,
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
        O(A.GIFPickerResultTypes.TRENDING_GIFS), a.HTTP.get({
            url: A.Endpoints.GIFS_TRENDING_GIFS,
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
            p(i, A.GIFPickerResultTypes.TRENDING_GIFS, {
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
                }, o.FavoriteGIFs.toBinary(t).length > h.MAX_FAVORITE_GIFS_SIZE) return S.default.show({
                title: m.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                body: m.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
            }), !1;
            let s = r().size(t.gifs);
            s > 2 && (t.hideTooltip = !0), I.default.track(A.AnalyticEvents.GIF_FAVORITED, {
                total_num_favorited: s
            })
        }, h.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function G(e) {
        c.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[U(e)], I.default.track(A.AnalyticEvents.GIF_UNFAVORITED, {
                total_num_favorited: r().size(t.gifs)
            })
        }, h.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }
}