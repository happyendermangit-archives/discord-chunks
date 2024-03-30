function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var r = n("531822"),
        o = n("807471"),
        i = n("935741"),
        a = n("894288"),
        u = n("208454"),
        s = n("763422"),
        l = n("281767");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = !1;

    function p(e) {
        var t = u.default.getCurrentUser();
        if (null != t) {
            var n = a.default.getChannelId(),
                r = i.default.getDMFromUserId(s.SYSTEM_USER);
            if (!t.hasUrgentMessages() || r === n) return m({
                channelId: n
            });
            !E && (E = !0, e())
        }
    }

    function m(e) {
        var t = e.channelId,
            n = u.default.getCurrentUser(),
            o = t === i.default.getDMFromUserId(s.SYSTEM_USER);
        null != n && n.hasUrgentMessages() && o && (E = !1, r.setFlag(l.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !1))
    }
    var y = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = d(t);
            if (n) {
                var a = d(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : c(e)
        });

        function o(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), f(c(t = r.call(this)), "handleShowUrgentMessageAlert", void 0), f(c(t), "actions", void 0), t.handleShowUrgentMessageAlert = e, t.actions = {
                POST_CONNECTION_OPEN: function() {
                    return p(t.handleShowUrgentMessageAlert)
                },
                MESSAGE_CREATE: function() {
                    return p(t.handleShowUrgentMessageAlert)
                },
                CHANNEL_SELECT: m
            }, t
        }
        return o
    }(o.default)
}