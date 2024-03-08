function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("446674"),
        l = n("913144");
    let a = [],
        s = null;
    class r extends i.default.Store {
        getLastFetchTimeMs() {
            return s
        }
        getCategories() {
            return a
        }
    }
    r.displayName = "ApplicationDirectoryCategoriesStore";
    var o = new r(l.default, {
        APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function(e) {
            let {
                categories: t
            } = e;
            a = t, s = Date.now()
        }
    })
}