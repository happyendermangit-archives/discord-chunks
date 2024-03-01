function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return y
        }
    }), s("781738"), s("222007");
    var r = s("446674"),
        n = s("713349"),
        l = s("913144"),
        i = s("240292"),
        a = s("49111"),
        o = s("782340");
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
        p = "",
        m = [],
        I = [],
        g = [],
        _ = [];

    function E(e) {
        return e.replace(/^https?:/, "")
    }
    class R extends r.default.Store {
        getAnalyticsID() {
            return h
        }
        getQuery() {
            return f
        }
        getResultQuery() {
            return p
        }
        getResultItems() {
            return m
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
    var y = new R(l.default, {
        GIF_PICKER_INITIALIZE: function(e) {
            h = e.analyticsID
        },
        GIF_PICKER_QUERY: function(e) {
            "" === (f = e.query) && (p = "", m = [], g = [])
        },
        GIF_PICKER_QUERY_SUCCESS: function(e) {
            if (null != e.query && f === p) return !1;
            null != e.query && (p = e.query), m = e.items.map(e => {
                let {
                    width: t,
                    height: s,
                    src: r,
                    gif_src: l,
                    url: i,
                    id: a
                } = e;
                return {
                    width: t,
                    height: s,
                    src: E(r),
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
            p = t, m = []
        },
        GIF_PICKER_TRENDING_FETCH_SUCCESS: function(e) {
            let t = e.trendingCategories,
                s = null != e.trendingGIFPreview ? [{
                    type: a.GIFPickerResultTypes.TRENDING_GIFS,
                    icon: i.default,
                    name: o.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                    src: E(e.trendingGIFPreview.src),
                    format: n.GIFType.IMAGE
                }] : [];
            I = [...s, ...t.map(e => ({
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