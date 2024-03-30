function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("217014"),
        i = n("935741"),
        a = n("141526"),
        u = n("281767");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
    var d = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(d, e);
        var t, n, r = (t = d, n = function() {
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
            }(r) || "function" == typeof r) ? r : s(e)
        });

        function d() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, d), e = r.apply(this, arguments), l(s(e), "prevConnected", !1), l(s(e), "tempMutedChannel", null), l(s(e), "handleRTCConnectionState", function(t) {
                var n = t.state,
                    r = t.channelId,
                    o = n === u.RTCConnectionStates.RTC_CONNECTED,
                    s = o && !e.prevConnected,
                    l = i.default.getChannel(r),
                    c = null == l ? void 0 : l.getGuildId(),
                    f = e.tempMutedChannel === r;
                s && null != c && (f ? e.tempMutedChannel = null : (0, a.maybePlayCustomJoinSound)(c)), e.prevConnected = o
            }), l(s(e), "handleMute", function(t) {
                var n = t.channelId;
                e.tempMutedChannel = n
            }), l(s(e), "handleVoiceStateUpdates", function(t) {
                var n = t.voiceStates,
                    r = o.default.getId(),
                    i = o.default.getSessionId();
                n.forEach(function(t) {
                    var n = t.userId,
                        o = t.channelId,
                        a = t.sessionId;
                    n === r && a !== i && null != o && (e.tempMutedChannel = o)
                })
            }), l(s(e), "actions", {
                RTC_CONNECTION_STATE: e.handleRTCConnectionState,
                SOUNDBOARD_MUTE_JOIN_SOUND: e.handleMute,
                VOICE_STATE_UPDATES: e.handleVoiceStateUpdates
            }), e
        }
        return d
    }(r.default);
    t.default = new d
}