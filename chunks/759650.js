function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("194864"),
        o = n("935741"),
        i = n("426166"),
        a = n("576988");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = new function e() {
        var t = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }(this, e), u(this, "filterTagIds", null), u(this, "sortOrder", null), u(this, "layout", null), u(this, "setFilterTagIds", function(e) {
            t.filterTagIds = e
        }), u(this, "setSortOrder", function(e) {
            t.sortOrder = e
        }), u(this, "setLayout", function(e) {
            t.layout = e
        }), u(this, "getFilterTagIdsAnalytics", function() {
            return null != t.filterTagIds ? Array.from(t.filterTagIds) : []
        }), u(this, "getSortOrderAnalytics", function(e) {
            var n, r;
            return null !== (r = t.sortOrder) && void 0 !== r ? r : null === (n = o.default.getChannel(e)) || void 0 === n ? void 0 : n.getDefaultSortOrder()
        }), u(this, "getLayoutAnalytics", function(e) {
            var n, u = o.default.getChannel(e),
                s = null !== (n = t.layout) && void 0 !== n ? n : null == u ? void 0 : u.getDefaultLayout();
            return (0, i.isForumActivityExperimentEnabled)(null == u ? void 0 : u.guild_id) && s === r.ForumLayout.LIST ? a.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : s
        })
    }
}