function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSortValueForMember: function() {
            return i
        }
    });
    var r = n("276046"),
        o = n("180490");

    function i(e, t) {
        var n = (0, r.getJoinedAtTimestamp)(e.joinedAt);
        switch (t) {
            case o.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC:
                return n;
            case o.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC:
                return -n;
            case o.OrderBy.ORDER_BY_USER_ID_ASC:
                return parseInt(e.userId);
            case o.OrderBy.ORDER_BY_USER_ID_DESC:
                return -parseInt(e.userId);
            default:
                return -n
        }
    }
}