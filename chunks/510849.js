function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return S
        }
    }), r("781738"), r("222007");
    var s = r("446674"),
        n = r("713349"),
        l = r("913144"),
        i = r("240292"),
        a = r("49111"),
        o = r("782340");
    let u = {
            MP4: "mp4",
            TINYMP4: "tinymp4",
            NANOMP4: "nanomp4",
            WEBM: "webm",
            TINYWEBM: "tinywebm",
            NANOWEBM: "nanowebm"
        },
        c = {
            FIXED_HEIGHT_MP4: "fixed_height.mp4",
            FIXED_HEIGHT_SMALL_MP4: "fixed_height_small.mp4",
            FIXED_WIDTH_MP4: "fixed_width.mp4",
            FIXED_WIDTH_SMALL_MP4: "fixed_width_small.mp4",
            DOWNSIZED_SMALL_MP4: "downsized_small.mp4",
            ORIGINAL_MP4: "original.mp4"
        },
        d = u.MP4,
        h = null,
        f = "",
        m = "",
        p = [],
        I = [],
        g = [],
        _ = [];

    function E(e) {
        return e.replace(/^https?:/, "")
    }
    class R extends s.default.Store {
        getAnalyticsID() {
            return h
        }
        getQuery() {
            return f
        }
        getResultQuery() {
            return m
        }
        getResultItems() {
            return p
        }
        getTrendingCategories() {
            return I
        }
        getSelectedFormat() {
            return d
        }
        getSuggestions() {
            return g
        }
        getTrendingSearchTerms() {
            return _
        }
    }
    R.displayName = "GIFPickerViewStore";
    var S = new R(l.default, {
        GIF_PICKER_INITIALIZE: function(e) {
            h = e.analyticsID
        },
        GIF_PICKER_QUERY: function(e) {
            "" === (f = e.query) && (m = "", p = [], g = [])
        },
        GIF_PICKER_QUERY_SUCCESS: function(e) {
            if (null != e.query && f === m) return !1;
            null != e.query && (m = e.query), p = e.items.map(e => {
                let {
                    width: t,
                    height: r,
                    src: s,
                    gif_src: l,
                    url: i,
                    id: a
                } = e;
                return {
                    width: t,
                    height: r,
                    src: E(s),
                    gifSrc: E(l),
                    url: i,
                    id: a,
                    format: ! function(e) {
                        switch (e) {
                            case c.FIXED_HEIGHT_MP4:
                            case c.FIXED_HEIGHT_SMALL_MP4:
                            case c.FIXED_WIDTH_MP4:
                            case c.FIXED_WIDTH_SMALL_MP4:
                            case c.DOWNSIZED_SMALL_MP4:
                            case c.ORIGINAL_MP4:
                            case u.MP4:
                            case u.TINYMP4:
                            case u.NANOMP4:
                            case u.WEBM:
                            case u.TINYWEBM:
                            case u.NANOWEBM:
                                return !0;
                            default:
                                return !1
                        }
                    }(d) ? n.GIFType.IMAGE : n.GIFType.VIDEO
                }
            })
        },
        GIF_PICKER_QUERY_FAILURE: function(e) {
            let {
                query: t
            } = e;
            if (null == t) return !1;
            m = t, p = []
        },
        GIF_PICKER_TRENDING_FETCH_SUCCESS: function(e) {
            let t = e.trendingCategories,
                r = null != e.trendingGIFPreview ? [{
                    type: a.GIFPickerResultTypes.TRENDING_GIFS,
                    icon: i.default,
                    name: o.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                    src: E(e.trendingGIFPreview.src),
                    format: n.GIFType.IMAGE
                }] : [];
            I = [...r, ...t.map(e => ({
                ...e,
                src: E(e.src),
                type: a.GIFPickerResultTypes.TRENDING_CATEGORY,
                format: n.GIFType.VIDEO
            }))]
        },
        GIF_PICKER_SUGGESTIONS_SUCCESS: function(e) {
            let {
                items: t
            } = e;
            g = t
        },
        GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function(e) {
            let {
                items: t
            } = e;
            _ = t
        }
    })
}