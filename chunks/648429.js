function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815"),
        o = n("807471"),
        i = n("163291"),
        a = n("388990"),
        u = n("644378"),
        s = n("116248"),
        l = n("746110"),
        c = n("281767");

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(p, e);
        var t, n, o = (t = p, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : f(e)
        });

        function p() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, p), e = o.apply(this, arguments), d(f(e), "actions", {
                POST_CONNECTION_OPEN: function() {
                    return e.handlePostConnectionOpen()
                }
            }), d(f(e), "handlePostConnectionOpen", function() {
                ! function e() {
                    s.default.getCurrentConfig({
                        location: "8fe27d_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders && (l.default.getMessageReminders().filter(function(e) {
                        return null != e.dueAt && new Date > e.dueAt
                    }).filter(function(e) {
                        return !l.default.hasSentNotification(e.messageId)
                    }).forEach(function(e) {
                        var t, n;
                        u.default.showNotification(null, "Overdue reminder in ".concat(e.channelSummary), null !== (n = null !== (t = e.notes) && void 0 !== t ? t : e.messageSummary) && void 0 !== n ? n : "", {
                            notif_type: "OVERDUE_MESSAGE_REMINDER",
                            notif_user_id: e.authorId,
                            message_id: e.messageId,
                            channel_id: e.channelId,
                            guild_id: e.guildId
                        }, {
                            omitViewTracking: !0,
                            tag: e.messageId,
                            onClick: function() {
                                (0, i.transitionTo)(c.Routes.CHANNEL(e.guildId, e.channelId, e.messageId))
                            }
                        }), r.default.dispatch({
                            type: "MESSAGE_REMINDER_NOTIFIED",
                            messageId: e.messageId
                        })
                    }), setTimeout(function() {
                        e()
                    }, 5 * a.default.Millis.MINUTE))
                }()
            }), e
        }
        return p
    }(o.default);
    t.default = new p
}