function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        calculateAnalyticsMetadata: function() {
            return n
        }
    });
    var s = r("49111");

    function n(e, t, r) {
        let n = null != t ? {
                [t]: 1
            } : {},
            {
                offset: l,
                limit: i,
                results: a,
                totalResults: o
            } = null != r ? r : {};
        return {
            search_type: s.SearchTypes.GIF,
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