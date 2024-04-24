function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculateActiveTimestampDurations: function() {
            return d
        },
        calculateActiveTimestampDurationsFromStart: function() {
            return _
        },
        formatActiveTimestampFromUnits: function() {
            return E
        },
        formatEndedTimestamp: function() {
            return I
        },
        formatEntryTimestamp: function() {
            return T
        },
        getAggregateRange: function() {
            return m
        },
        getEntryDuration: function() {
            return A
        },
        getStreakCount: function() {
            return R
        },
        isEntryActive: function() {
            return f
        },
        isEntryExpired: function() {
            return h
        },
        isEntryMarathon: function() {
            return N
        },
        isEntryNew: function() {
            return S
        },
        isEntryResurrected: function() {
            return p
        },
        isEntryTopGame: function() {
            return O
        }
    });
    var i = n("913527"),
        r = n.n(i),
        s = n("884439"),
        a = n("876215"),
        o = n("70956"),
        l = n("709054"),
        u = n("689938");
    let d = (e, t) => _(l.default.extractTimestamp(e.id), t),
        _ = (e, t) => {
            let n = Math.abs((t - e) / o.default.Millis.SECOND),
                i = Math.floor(n) % o.default.Seconds.MINUTE,
                r = Math.floor(n / o.default.Seconds.MINUTE) % o.default.Seconds.MINUTE,
                s = Math.floor(n / o.default.Seconds.HOUR);
            return {
                seconds: i,
                minutes: r,
                hours: s,
                days: Math.floor(n / o.default.Seconds.DAY)
            }
        },
        c = (e, t) => {
            let {
                seconds: n,
                minutes: i,
                hours: r
            } = d(e, t);
            return E(n, i, r)
        },
        E = (e, t, n) => {
            function i(e) {
                return String(e).padStart(2, "0")
            }
            return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
                hours: n,
                minutes: n > 0 ? i(t) : t,
                seconds: i(e)
            })
        },
        I = (e, t) => {
            let n = r()(l.default.extractTimestamp(e.id)),
                i = n.isSame(r()(), "day"),
                s = r()().diff(n, "s");
            if (s < o.default.Seconds.MINUTE) return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
                count: s
            });
            if (s < o.default.Seconds.HOUR) {
                let e = Math.round(s / o.default.Seconds.MINUTE);
                return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
                    count: e
                })
            }
            if (s < 6 * o.default.Seconds.HOUR) {
                let e = Math.round(s / o.default.Seconds.HOUR);
                return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
                    count: e
                })
            } else if (s < o.default.Seconds.WEEK && i) return n.toDate().toLocaleTimeString(t, {
                hour: "numeric"
            });
            else if (s < o.default.Seconds.WEEK && !i) return n.toDate().toLocaleTimeString(t, {
                weekday: "short",
                hour: "numeric"
            });
            let a = Math.round(s / (7 * o.default.Seconds.DAY));
            return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
                count: a
            })
        },
        T = (e, t) => f(e) ? c(e, Date.now()) : I(e, t);

    function f(e) {
        let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.IS_LIVE);
        return null != t && t.is_live
    }

    function S(e) {
        let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.FIRST_TIME);
        return null != t && t.first_time
    }

    function h(e) {
        return null != e.expires_at && new Date(e.expires_at) < new Date
    }

    function A(e) {
        let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.DURATION_SECONDS);
        return null == t ? void 0 : t.duration_seconds
    }

    function m(e) {
        let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.AGGREGATE_RANGE);
        return null == t ? void 0 : t.range
    }

    function N(e) {
        let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.MARATHON);
        return null == t ? void 0 : t.marathon
    }

    function p(e) {
        let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.RESURRECTED);
        return (null == t ? void 0 : t.resurrected_last_played) != null
    }

    function O(e) {
        return e.content_type === a.ContentInventoryEntryType.TOP_GAME
    }

    function R(e) {
        let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.STREAK_DAYS);
        return null == t ? void 0 : t.streak_count_days
    }
}