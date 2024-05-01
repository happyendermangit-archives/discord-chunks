function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140");
    let u = [],
        d = null;
    class _ extends(a = o.default.Store) {
        getLastFetchTimeMs() {
            return d
        }
        getCategories() {
            return u
        }
    }
    s = "ApplicationDirectoryCategoriesStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new _(l.default, {
        APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function(e) {
            let {
                categories: t
            } = e;
            u = t, d = Date.now()
        }
    })
}