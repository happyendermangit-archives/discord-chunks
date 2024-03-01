function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        getSortValueForMember: function() {
            return s
        }
    });
    var i = r("64905"),
        n = r("490931");

    function s(e, t) {
        let r = (0, i.getJoinedAtTimestamp)(e.joinedAt);
        switch (t) {
            case n.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC:
                return r;
            case n.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC:
                return -r;
            case n.OrderBy.ORDER_BY_USER_ID_ASC:
                return parseInt(e.userId);
            case n.OrderBy.ORDER_BY_USER_ID_DESC:
                return -parseInt(e.userId);
            default:
                return -r
        }
    }
}