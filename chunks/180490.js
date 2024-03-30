function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OrderBy: function() {
            return r
        },
        UNUSUAL_DM_COMPARISON_DELTA: function() {
            return i
        },
        createMemberSearchCursor: function() {
            return a
        }
    });
    var r, o, i = 2 * n("388990").default.Millis.DAY;

    function a(e) {
        var t = e.joinedAt,
            n = e.userId;
        return null == t ? null : {
            guild_joined_at: new Date(t).getTime(),
            user_id: n
        }
    }(o = r || (r = {}))[o.ORDER_BY_UNSPECIFIED = 0] = "ORDER_BY_UNSPECIFIED", o[o.ORDER_BY_GUILD_JOINED_AT_DESC = 1] = "ORDER_BY_GUILD_JOINED_AT_DESC", o[o.ORDER_BY_GUILD_JOINED_AT_ASC = 2] = "ORDER_BY_GUILD_JOINED_AT_ASC", o[o.ORDER_BY_USER_ID_DESC = 3] = "ORDER_BY_USER_ID_DESC", o[o.ORDER_BY_USER_ID_ASC = 4] = "ORDER_BY_USER_ID_ASC"
}