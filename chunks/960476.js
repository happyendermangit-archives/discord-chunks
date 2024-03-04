function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        trackSearchStart: function() {
            return y
        },
        trackSearchResultViewed: function() {
            return v
        },
        search: function() {
            return C
        },
        fetchSuggestions: function() {
            return A
        },
        resetSearch: function() {
            return G
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
            return k
        }
    }), r("781738");
    var s = r("917351"),
        n = r.n(s),
        l = r("748820"),
        i = r("872717"),
        a = r("713349"),
        o = r("913144"),
        u = r("716241"),
        c = r("787336"),
        d = r("915639"),
        h = r("872173"),
        f = r("510849"),
        m = r("599110"),
        p = r("564703"),
        I = r("253981"),
        g = r("404118"),
        _ = r("49111"),
        E = r("397336"),
        R = r("782340");
    let S = /-/g;

    function y(e) {
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

    function v(e, t) {
        let {
            startTime: r,
            ...s
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = {
            offset: 0,
            limit: null,
            totalResults: e.length
        }, l = (0, p.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
            ...n,
            ...s,
            results: e
        }), i = null == r ? {} : {
            load_duration_ms: Date.now() - r
        };
        u.default.trackWithMetadata(_.AnalyticEvents.SEARCH_RESULT_VIEWED, {
            ...l,
            ...i
        })
    }

    function F(e, t, r) {
        let s = Date.now();
        y(t), i.default.get({
            url: _.Endpoints.GIFS_SEARCH,
            query: {
                q: e,
                media_format: f.default.getSelectedFormat(),
                provider: "tenor",
                locale: d.default.locale,
                limit: r
            },
            oldFormErrors: !0
        }).then(n => {
            let l = n.body;
            v(l, t, {
                startTime: s,
                limit: r
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
    let T = n.debounce(F, 250);

    function C(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 ? arguments[3] : void 0;
        "" === e ? G() : (o.default.dispatch({
            type: "GIF_PICKER_QUERY",
            query: e
        }), r ? F(e, t, s) : T(e, t, s))
    }

    function A(e) {
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
            let r = t.body;
            o.default.dispatch({
                type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
                query: e,
                items: r
            })
        })
    }

    function G() {
        o.default.dispatch({
            type: "GIF_PICKER_QUERY",
            query: ""
        })
    }

    function x(e) {
        let {
            type: t,
            index: r,
            offset: s,
            limit: n,
            results: l,
            totalResults: a,
            query: o,
            gifId: c
        } = e, d = (0, p.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
            offset: s,
            limit: n,
            results: l,
            totalResults: a
        });
        u.default.trackWithMetadata(_.AnalyticEvents.SEARCH_RESULT_SELECTED, {
            ...d,
            index_num: r,
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
        let e = (0, l.v4)().replace(S, "");
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
                categories: r,
                gifs: s
            } = t;
            o.default.dispatch({
                type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
                trendingCategories: r,
                trendingGIFPreview: s[0]
            })
        })
    }

    function M(e) {
        let t = Date.now();
        y(_.GIFPickerResultTypes.TRENDING_GIFS), i.default.get({
            url: _.Endpoints.GIFS_TRENDING_GIFS,
            query: {
                media_format: f.default.getSelectedFormat(),
                provider: "tenor",
                locale: d.default.locale,
                limit: e
            },
            oldFormErrors: !0
        }).then(r => {
            let {
                body: s
            } = r;
            v(s, _.GIFPickerResultTypes.TRENDING_GIFS, {
                startTime: t,
                limit: e
            }), o.default.dispatch({
                type: "GIF_PICKER_QUERY_SUCCESS",
                items: s
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
        let t = 0;
        h.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", r => {
            var s;
            let l = null !== (s = n.max(Object.values(r.gifs).map(e => e.order))) && void 0 !== s ? s : 0;
            r.gifs[w(e.url)] = {
                ...e,
                order: l + 1
            };
            let i = a.FavoriteGIFs.toBinary(r).length;
            if (i > E.MAX_FAVORITE_GIFS_SIZE) return g.default.show({
                title: R.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                body: R.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
            }), !1;
            (t = n.size(r.gifs)) > 2 && (r.hideTooltip = !0)
        }, E.UserSettingsDelay.INFREQUENT_USER_ACTION), m.default.track(_.AnalyticEvents.GIF_FAVORITED, {
            total_num_favorited: t
        })
    }

    function k(e) {
        let t = 0;
        h.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", r => {
            e in r.gifs ? delete r.gifs[e] : delete r.gifs[w(e)], t = n.size(r.gifs)
        }, E.UserSettingsDelay.INFREQUENT_USER_ACTION), m.default.track(_.AnalyticEvents.GIF_UNFAVORITED, {
            total_num_favorited: t
        })
    }
}