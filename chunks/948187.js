function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearCommunicationDisabledNotice: function() {
            return d
        },
        useCommunicationDisabledNoticeStore: function() {
            return f
        }
    });
    var r = n("652874"),
        o = n("143927"),
        i = n("12336"),
        a = n("242880"),
        u = n("312684");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var l = (0, i.default)(function(e, t) {
            var n, r;
            return {
                notificationDismissedInGuilds: (r = null !== (n = a.Storage.get(u.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY)) && void 0 !== n ? n : [], new Set(r)),
                dismissNotification: function(n) {
                    var r = t().notificationDismissedInGuilds;
                    r.add(n), a.Storage.set(u.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, r), e({
                        notificationDismissedInGuilds: r
                    })
                },
                resetNotification: function(n) {
                    var r = t().notificationDismissedInGuilds;
                    r.has(n) && (r.delete(n), a.Storage.set(u.DISMISSED_COMMUNICATION_DISABLED_NOTIFICATION_GUILDS_KEY, r), e({
                        notificationDismissedInGuilds: r
                    }))
                }
            }
        }),
        c = (0, r.default)(l);

    function f(e) {
        var t, n, r = (t = c(function(e) {
                return [e.notificationDismissedInGuilds, e.dismissNotification]
            }, o.default), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            i = r[0],
            a = r[1];
        return [!i.has(e), a]
    }

    function d(e) {
        return l.getState().resetNotification(e)
    }
}