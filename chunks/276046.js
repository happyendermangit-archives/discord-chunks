function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ACCOUNT_AGE_DATE_TOOLTIP_CONFIG: function() {
            return u
        },
        MEMBER_JOIN_DATE_TOOLTIP_CONFIG: function() {
            return s
        },
        MembersTableDateFormats: function() {
            return o
        },
        formatDateRelativeTime: function() {
            return f
        },
        getJoinedAtTimestamp: function() {
            return d
        }
    });
    var r, o, i = n("587751"),
        a = n("941504"),
        u = {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        },
        s = {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        };
    (r = o || (o = {}))[r.JOINED_AT = 0] = "JOINED_AT", r[r.ACCOUNT_AGE = 1] = "ACCOUNT_AGE";
    var l = function() {
            return {
                seconds: a.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_SECONDS,
                minutes: a.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MINUTES,
                hours: a.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_HOURS,
                days: a.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_DAYS,
                months: a.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_MONTH,
                years: a.default.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_YEAR
            }
        },
        c = function() {
            return {
                hours: a.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_HOURS,
                days: a.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_DAYS,
                months: a.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_MONTH,
                years: a.default.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_YEAR
            }
        },
        f = function(e, t) {
            var n, r = 0 === (n = t) ? l : 1 === n ? c : void 0;
            return (0, i.default)(e, r, !1)
        },
        d = function(e) {
            return (null != e ? new Date(e) : new Date).getTime()
        }
}