function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        ACCOUNT_AGE_DATE_TOOLTIP_CONFIG: function() {
            return a
        },
        MEMBER_JOIN_DATE_TOOLTIP_CONFIG: function() {
            return l
        },
        MembersTableDateFormats: function() {
            return n
        },
        formatDateRelativeTime: function() {
            return o
        },
        getJoinedAtTimestamp: function() {
            return m
        }
    });
    var i, n, s = r("319126"),
        u = r("782340");
    let a = {
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
    (i = n || (n = {}))[i.JOINED_AT = 0] = "JOINED_AT", i[i.ACCOUNT_AGE = 1] = "ACCOUNT_AGE";
    let d = () => ({
            seconds: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_SECONDS,
            minutes: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MINUTES,
            hours: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_HOURS,
            days: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_DAYS,
            months: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_MONTH,
            years: u.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_YEAR
        }),
        h = () => ({
            hours: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_HOURS,
            days: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_DAYS,
            months: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_MONTH,
            years: u.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_YEAR
        }),
        o = (e, t) => {
            var r;
            let i = 0 === (r = t) ? d : 1 === r ? h : void 0;
            return (0, s.default)(e, i, !1)
        },
        m = e => {
            let t = null != e ? new Date(e) : new Date,
                r = t.getTime();
            return r
        }
}