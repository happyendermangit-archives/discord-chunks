function(e, t, n) {
    "use strict";
    n.r(t), n("757143"), n("47120");
    var i, r, a, s, o = n("442837"),
        l = n("377108"),
        u = n("570140"),
        d = n("187500"),
        _ = n("981631"),
        c = n("689938");
    let E = {
            MP4: "mp4",
            TINYMP4: "tinymp4",
            NANOMP4: "nanomp4",
            WEBM: "webm",
            TINYWEBM: "tinywebm",
            NANOWEBM: "nanowebm"
        },
        I = {
            FIXED_HEIGHT_MP4: "fixed_height.mp4",
            FIXED_HEIGHT_SMALL_MP4: "fixed_height_small.mp4",
            FIXED_WIDTH_MP4: "fixed_width.mp4",
            FIXED_WIDTH_SMALL_MP4: "fixed_width_small.mp4",
            DOWNSIZED_SMALL_MP4: "downsized_small.mp4",
            ORIGINAL_MP4: "original.mp4"
        },
        T = E.MP4,
        f = null,
        S = "",
        h = "",
        A = [],
        m = [],
        N = [],
        p = [];

    function O(e) {
        return e.replace(/^https?:/, "")
    }
    class R extends(i = o.default.Store) {
        getAnalyticsID() {
            return f
        }
        getQuery() {
            return S
        }
        getResultQuery() {
            return h
        }
        getResultItems() {
            return A
        }
        getTrendingCategories() {
            return m
        }
        getSelectedFormat() {
            return T
        }
        getSuggestions() {
            return N
        }
        getTrendingSearchTerms() {
            return p
        }
    }
    s = "GIFPickerViewStore", (a = "displayName") in(r = R) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new R(u.default, {
        GIF_PICKER_INITIALIZE: function(e) {
            f = e.analyticsID
        },
        GIF_PICKER_QUERY: function(e) {
            "" === (S = e.query) && (h = "", A = [], N = [])
        },
        GIF_PICKER_QUERY_SUCCESS: function(e) {
            if (null != e.query && S === h) return !1;
            null != e.query && (h = e.query), A = e.items.map(e => {
                let {
                    width: t,
                    height: n,
                    src: i,
                    gif_src: r,
                    url: a,
                    id: s
                } = e;
                return {
                    width: t,
                    height: n,
                    src: O(i),
                    gifSrc: O(r),
                    url: a,
                    id: s,
                    format: ! function(e) {
                        switch (e) {
                            case I.FIXED_HEIGHT_MP4:
                            case I.FIXED_HEIGHT_SMALL_MP4:
                            case I.FIXED_WIDTH_MP4:
                            case I.FIXED_WIDTH_SMALL_MP4:
                            case I.DOWNSIZED_SMALL_MP4:
                            case I.ORIGINAL_MP4:
                            case E.MP4:
                            case E.TINYMP4:
                            case E.NANOMP4:
                            case E.WEBM:
                            case E.TINYWEBM:
                            case E.NANOWEBM:
                                return !0;
                            default:
                                return !1
                        }
                    }(T) ? l.GIFType.IMAGE : l.GIFType.VIDEO
                }
            })
        },
        GIF_PICKER_QUERY_FAILURE: function(e) {
            let {
                query: t
            } = e;
            if (null == t) return !1;
            h = t, A = []
        },
        GIF_PICKER_TRENDING_FETCH_SUCCESS: function(e) {
            let t = e.trendingCategories;
            m = [...null != e.trendingGIFPreview ? [{
                type: _.GIFPickerResultTypes.TRENDING_GIFS,
                icon: d.default,
                name: c.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                src: O(e.trendingGIFPreview.src),
                format: l.GIFType.IMAGE
            }] : [], ...t.map(e => ({
                ...e,
                src: O(e.src),
                type: _.GIFPickerResultTypes.TRENDING_CATEGORY,
                format: l.GIFType.VIDEO
            }))]
        },
        GIF_PICKER_SUGGESTIONS_SUCCESS: function(e) {
            let {
                items: t
            } = e;
            N = t
        },
        GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function(e) {
            let {
                items: t
            } = e;
            p = t
        }
    })
}