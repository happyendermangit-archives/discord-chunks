function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        calculateAnalyticsMetadata: function() {
            return n
        }
    });
    var r = s("49111");

    function n(e, t, s) {
        let n = null != t ? {
                [t]: 1
            } : {},
            {
                offset: l,
                limit: i,
                results: a,
                totalResults: o
            } = null != s ? s : {};
        return {
            search_type: r.SearchTypes.GIF,
            load_id: e,
            limit: i,
            offset: l,
            page: null != i && null != l ? Math.floor(l / i) + 1 : 1,
            total_results: o,
            page_results: null != a ? a.length : null,
            num_modifiers: Object.keys(n).length,
            modifiers: n
        }
    }
}