function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculateAnalyticsMetadata: function() {
            return o
        }
    });
    var r = n("281767");

    function o(e, t, n) {
        var o, i, a, u = null != t ? (o = {}, a = 1, (i = t) in o ? Object.defineProperty(o, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : o[i] = a, o) : {},
            s = null != n ? n : {},
            l = s.offset,
            c = s.limit,
            f = s.results,
            d = s.totalResults;
        return {
            search_type: r.SearchTypes.GIF,
            load_id: e,
            limit: c,
            offset: l,
            page: null != c && null != l ? Math.floor(l / c) + 1 : 1,
            total_results: d,
            page_results: null != f ? f.length : null,
            num_modifiers: Object.keys(u).length,
            modifiers: u
        }
    }
}