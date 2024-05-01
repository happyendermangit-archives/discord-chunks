function(e, t, n) {
    "use strict";
    var i, r;
    n.r(t), n.d(t, {
        OrderBy: function() {
            return i
        },
        UNUSUAL_DM_COMPARISON_DELTA: function() {
            return a
        },
        createMemberSearchCursor: function() {
            return s
        }
    });
    let a = 2 * n("70956").default.Millis.DAY;

    function s(e) {
        let {
            joinedAt: t,
            userId: n
        } = e;
        return null == t ? null : {
            guild_joined_at: new Date(t).getTime(),
            user_id: n
        }
    }(r = i || (i = {}))[r.ORDER_BY_UNSPECIFIED = 0] = "ORDER_BY_UNSPECIFIED", r[r.ORDER_BY_GUILD_JOINED_AT_DESC = 1] = "ORDER_BY_GUILD_JOINED_AT_DESC", r[r.ORDER_BY_GUILD_JOINED_AT_ASC = 2] = "ORDER_BY_GUILD_JOINED_AT_ASC", r[r.ORDER_BY_USER_ID_DESC = 3] = "ORDER_BY_USER_ID_DESC", r[r.ORDER_BY_USER_ID_ASC = 4] = "ORDER_BY_USER_ID_ASC"
}