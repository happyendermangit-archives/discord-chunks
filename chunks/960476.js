function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        trackSearchStart: function() {
            return S
        },
        trackSearchResultViewed: function() {
            return F
        },
        search: function() {
            return C
        },
        fetchSuggestions: function() {
            return G
        },
        resetSearch: function() {
            return A
        },
        trackSelectGIF: function() {
            return x
        },
        initializeSearch: function() {
            return N
        },
        fetchTrending: function() {
            return P
        },
        fetchTrendingGIFs: function() {
            return M
        },
        addFavoriteGIF: function() {
            return O
        },
        removeFavoriteGIF: function() {
            return D
        }
    }), s("781738");
    var r = s("917351"),
        n = s.n(r),
        l = s("748820"),
        i = s("872717"),
        a = s("713349"),
        o = s("913144"),
        u = s("716241"),
        c = s("787336"),
        d = s("915639"),
        h = s("872173"),
        f = s("510849"),
        p = s("599110"),
        m = s("564703"),
        I = s("253981"),
        g = s("404118"),
        _ = s("49111"),
        E = s("397336"),
        R = s("782340");
    let y = /-/g;

    function S(e) {
        let t = null != e ? {
            [e]: 1
        } : {};
        u.default.trackWithMetadata(_.AnalyticEvents.SEARCH_STARTED, {
            search_type: _.SearchTypes.GIF,
            load_id: f.default.getAnalyticsID(),
            num_modifiers: Object.keys(t).length,
            modifiers: t
        })
    }

    function F(e, t) {
        let {
            startTime: s,
            ...r
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = {
            offset: 0,
            limit: null,
            totalResults: e.length
        }, l = (0, m.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
            ...n,
            ...r,
            results: e
        }), i = null == s ? {} : {
            load_duration_ms: Date.now() - s
        };
        u.default.trackWithMetadata(_.AnalyticEvents.SEARCH_RESULT_VIEWED, {
            ...l,
            ...i
        })
    }

    function v(e, t, s) {
        let r = Date.now();
        S(t), i.default.get({
            url: _.Endpoints.GIFS_SEARCH,
            query: {
                q: e,
                media_format: f.default.getSelectedFormat(),
                provider: "tenor",
                locale: d.default.locale,
                limit: s
            },
            oldFormErrors: !0
        }).then(n => {
            let l = n.body;
            F(l, t, {
                startTime: r,
                limit: s
            }), o.default.dispatch({
                type: "GIF_PICKER_QUERY_SUCCESS",
                query: e,
                items: l
            })
        }, () => o.default.dispatch({
            type: "GIF_PICKER_QUERY_FAILURE",
            query: e
        }))
    }
    let T = n.debounce(v, 250);

    function C(e, t) {
        let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0;
        "" === e ? A() : (o.default.dispatch({
            type: "GIF_PICKER_QUERY",
            query: e
        }), s ? v(e, t, r) : T(e, t, r))
    }

    function G(e) {
        "" !== e && null != e && i.default.get({
            url: _.Endpoints.GIFS_SUGGEST,
            query: {
                q: e,
                provider: "tenor",
                limit: 5,
                locale: d.default.locale
            },
            oldFormErrors: !0
        }).then(t => {
            let s = t.body;
            o.default.dispatch({
                type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
                query: e,
                items: s
            })
        })
    }

    function A() {
        o.default.dispatch({
            type: "GIF_PICKER_QUERY",
            query: ""
        })
    }

    function x(e) {
        let {
            type: t,
            index: s,
            offset: r,
            limit: n,
            results: l,
            totalResults: a,
            query: o,
            gifId: c
        } = e, d = (0, m.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
            offset: r,
            limit: n,
            results: l,
            totalResults: a
        });
        u.default.trackWithMetadata(_.AnalyticEvents.SEARCH_RESULT_SELECTED, {
            ...d,
            index_num: s,
            source_object: "GIF Picker",
            query: o
        }), null != c && i.default.post({
            url: _.Endpoints.GIFS_SELECT,
            body: {
                id: c,
                q: o
            },
            oldFormErrors: !0
        })
    }

    function N() {
        let e = (0, l.v4)().replace(y, "");
        u.default.trackWithMetadata(_.AnalyticEvents.SEARCH_OPENED, {
            search_type: _.SearchTypes.GIF,
            load_id: e
        }), o.default.wait(() => {
            o.default.dispatch({
                type: "GIF_PICKER_INITIALIZE",
                analyticsID: e
            })
        })
    }

    function P() {
        i.default.get({
            url: _.Endpoints.GIFS_TRENDING,
            query: {
                provider: "tenor",
                locale: d.default.locale,
                media_format: f.default.getSelectedFormat()
            },
            oldFormErrors: !0
        }).then(e => {
            let {
                body: t
            } = e, {
                categories: s,
                gifs: r
            } = t;
            o.default.dispatch({
                type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                trendingCategories: s,
                trendingGIFPreview: r[0]
            })
        })
    }

    function M(e) {
        let t = Date.now();
        S(_.GIFPickerResultTypes.TRENDING_GIFS), i.default.get({
            url: _.Endpoints.GIFS_TRENDING_GIFS,
            query: {
                media_format: f.default.getSelectedFormat(),
                provider: "tenor",
                locale: d.default.locale,
                limit: e
            },
            oldFormErrors: !0
        }).then(s => {
            let {
                body: r
            } = s;
            F(r, _.GIFPickerResultTypes.TRENDING_GIFS, {
                startTime: t,
                limit: e
            }), o.default.dispatch({
                type: "GIF_PICKER_QUERY_SUCCESS",
                items: r
            })
        }, () => {
            o.default.dispatch({
                type: "GIF_PICKER_QUERY_FAILURE"
            })
        })
    }

    function w(e) {
        let t = I.default.toURLSafe(e);
        return null == t ? e : (0, c.isAttachmentUrl)(t) ? (0, c.removeSignedUrlParameters)(t).toString() : e
    }

    function O(e) {
        h.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
            var s;
            let r = null !== (s = n.max(Object.values(t.gifs).map(e => e.order))) && void 0 !== s ? s : 0;
            t.gifs[w(e.url)] = {
                ...e,
                order: r + 1
            };
            let l = a.FavoriteGIFs.toBinary(t).length;
            if (l > E.MAX_FAVORITE_GIFS_SIZE) return g.default.show({
                title: R.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                body: R.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
            }), !1;
            n.size(t.gifs) > 2 && (t.hideTooltip = !0)
        }, E.UserSettingsDelay.INFREQUENT_USER_ACTION), p.default.track(_.AnalyticEvents.GIF_FAVORITED)
    }

    function D(e) {
        h.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[w(e)]
        }, E.UserSettingsDelay.INFREQUENT_USER_ACTION), p.default.track(_.AnalyticEvents.GIF_UNFAVORITED)
    }
}