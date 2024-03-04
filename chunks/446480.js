function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("482402"),
        s = n("42203"),
        r = n("349778"),
        a = n("688169"),
        o = new class e {
            constructor() {
                this.filterTagIds = null, this.sortOrder = null, this.layout = null, this.setFilterTagIds = e => {
                    this.filterTagIds = e
                }, this.setSortOrder = e => {
                    this.sortOrder = e
                }, this.setLayout = e => {
                    this.layout = e
                }, this.getFilterTagIdsAnalytics = () => null != this.filterTagIds ? Array.from(this.filterTagIds) : [], this.getSortOrderAnalytics = e => {
                    var t, n;
                    return null !== (n = this.sortOrder) && void 0 !== n ? n : null === (t = s.default.getChannel(e)) || void 0 === t ? void 0 : t.getDefaultSortOrder()
                }, this.getLayoutAnalytics = e => {
                    var t;
                    let n = s.default.getChannel(e),
                        o = null !== (t = this.layout) && void 0 !== t ? t : null == n ? void 0 : n.getDefaultLayout(),
                        l = (0, r.isForumActivityExperimentEnabled)(null == n ? void 0 : n.guild_id),
                        u = l && o === i.ForumLayout.LIST ? a.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : o;
                    return u
                }
            }
        }
}