function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ACCOUNT_AGE_DATE_TOOLTIP_CONFIG: function() {
            return o
        },
        MEMBER_JOIN_DATE_TOOLTIP_CONFIG: function() {
            return l
        },
        MembersTableDateFormats: function() {
            return r
        },
        formatDateRelativeTime: function() {
            return _
        },
        getJoinedAtTimestamp: function() {
            return c
        }
    });
    var i, r, s = n("814391"),
        a = n("689938");
    let o = {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        },
        l = {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        };
    (i = r || (r = {}))[i.JOINED_AT = 0] = "JOINED_AT", i[i.ACCOUNT_AGE = 1] = "ACCOUNT_AGE";
    let u = () => ({
            seconds: a.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_SECONDS,
            minutes: a.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MINUTES,
            hours: a.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_HOURS,
            days: a.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_DAYS,
            months: a.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_MONTH,
            years: a.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_YEAR
        }),
        d = () => ({
            hours: a.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_HOURS,
            days: a.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_DAYS,
            months: a.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_MONTH,
            years: a.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_YEAR
        }),
        _ = (e, t) => {
            var n;
            let i = 0 === (n = t) ? u : 1 === n ? d : void 0;
            return (0, s.default)(e, i, !1)
        },
        c = e => (null != e ? new Date(e) : new Date).getTime()
}