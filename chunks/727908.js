function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canDisplayPostUnreadMessageCount: function() {
            return m
        },
        getForumPostReadStates: function() {
            return d
        },
        getForumPostReadStatesById: function() {
            return _
        },
        getForumTimestampFormatter: function() {
            return p
        },
        isForumPostPinned: function() {
            return y
        }
    });
    var r = n("983396"),
        o = n("935741"),
        i = n("306912"),
        a = n("879547"),
        u = n("912717"),
        s = n("928204"),
        l = n("941504");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(e, t) {
        var n = f(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default], 1),
            r = n[0];
        return {
            isNew: !e.isArchivedThread() && r.isNewForumThread(e.id, e.parent_id, t),
            hasUnreads: !e.isArchivedThread() && r.isForumPostUnread(e.id)
        }
    }

    function _(e) {
        var t = f(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, i.default, a.default], 3),
            n = t[0],
            r = t[1],
            u = t[2],
            s = n.getChannel(e);
        if (null == s) return null;
        var l = r.getGuild(s.guild_id);
        return null == l ? null : d(s, l, [u])
    }
    var E = function() {
        return {
            minutes: l.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MINUTES,
            hours: l.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_HOURS,
            days: l.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_DAYS,
            month: l.default.Messages.FORM_POST_CREATED_AGO_TIMESTAMP_MORE_THAN_MONTH
        }
    };

    function p(e, t) {
        if (t === u.ForumTimestampFormats.POSTED_DURATION_AGO && e === r.ThreadSortOrder.CREATION_DATE) return E
    }

    function m(e, t) {
        var n = f(t, 1)[0],
            r = n.hasTrackedUnread(e),
            o = n.hasOpenedThread(e),
            i = null != n.getTrackedAckMessageId(e);
        return r && o && i
    }

    function y(e) {
        var t;
        return (null === (t = o.default.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(s.ChannelFlags.PINNED)) === !0
    }
}