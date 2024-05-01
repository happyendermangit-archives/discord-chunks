function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("313361"),
        r = n("592125"),
        s = n("901648"),
        a = n("281301");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.default = new class e {
        constructor() {
            o(this, "filterTagIds", null), o(this, "sortOrder", null), o(this, "layout", null), o(this, "setFilterTagIds", e => {
                this.filterTagIds = e
            }), o(this, "setSortOrder", e => {
                this.sortOrder = e
            }), o(this, "setLayout", e => {
                this.layout = e
            }), o(this, "getFilterTagIdsAnalytics", () => null != this.filterTagIds ? Array.from(this.filterTagIds) : []), o(this, "getSortOrderAnalytics", e => {
                var t, n;
                return null !== (n = this.sortOrder) && void 0 !== n ? n : null === (t = r.default.getChannel(e)) || void 0 === t ? void 0 : t.getDefaultSortOrder()
            }), o(this, "getLayoutAnalytics", e => {
                var t;
                let n = r.default.getChannel(e),
                    o = null !== (t = this.layout) && void 0 !== t ? t : null == n ? void 0 : n.getDefaultLayout();
                return (0, s.isForumActivityExperimentEnabled)(null == n ? void 0 : n.guild_id) && o === i.ForumLayout.LIST ? a.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : o
            })
        }
    }
}