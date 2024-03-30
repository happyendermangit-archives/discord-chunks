function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("935741"),
        i = n("894288"),
        a = n("468246"),
        u = n("322019"),
        s = n("943770");

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function d(e) {
        var t = e.channelId;
        if (null == t || !(0, u.isEligibleForInappropriateConversationWarning)({
                location: "channel_select"
            }) || !(0, a.getSafetyAlertsSettingOrDefault)()) return !1;
        var n = o.default.getChannel(t);
        if (null == n || !n.isDM()) return !1;
        var r = (0, a.getInappropriateConversationTakeoverForChannel)(t);
        return null != r && ((0, s.showTakeoverModal)({
            warningId: r.id,
            warningType: r.type,
            senderId: n.getRecipientId(),
            channelId: t
        }), !0)
    }

    function _(e) {
        var t = e.channels;
        if (!(0, u.isEligibleForInappropriateConversationWarning)({
                location: "channel_updates"
            }) || !(0, a.getSafetyAlertsSettingOrDefault)()) return !1;
        var n = i.default.getCurrentlySelectedChannelId();
        if (null == n) return !1;
        var r = t.find(function(e) {
            return e.id === n
        });
        if (null == r) return !1;
        var o = (0, a.getInappropriateConversationTakeoverForChannel)(r.id);
        return !!(null != o && r.isDM()) && ((0, s.showTakeoverModal)({
            warningId: o.id,
            warningType: o.type,
            senderId: r.getRecipientId(),
            channelId: r.id
        }), !0)
    }
    var E = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
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
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : l(e)
        });

        function o() {
            var e, t, n, i;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = r.apply(this, arguments), t = l(e), n = "actions", i = {
                CHANNEL_SELECT: d,
                CHANNEL_UPDATES: _
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i, e
        }
        return o
    }(r.default);
    t.default = new E
}