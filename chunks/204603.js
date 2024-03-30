function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("719838"),
        o = n("384433"),
        i = n("807471"),
        a = n("217014"),
        u = n("131900"),
        s = n("281767");

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
    var d = new Set;

    function _(e) {
        switch (e) {
            case o.MediaEngineContextTypes.DEFAULT:
                return r.StoredCrashInformation.VideoMediaSessionId;
            case o.MediaEngineContextTypes.STREAM:
                return r.StoredCrashInformation.StreamMediaSessionId
        }
    }

    function E(e) {
        var t;
        u.default.setCrashInformation(_(e.context), null !== (t = e.mediaSessionId) && void 0 !== t ? t : null)
    }

    function p(e) {
        var t, n = (null !== (t = e.channelId) && void 0 !== t ? t : "unknown") + e.context;
        switch (e.state) {
            case s.RTCConnectionStates.RTC_CONNECTED:
                d.add(n), u.default.setCrashInformation(r.StoredCrashInformation.HasRTCConnection, 1);
                break;
            case s.RTCConnectionStates.DISCONNECTED:
                u.default.setCrashInformation(_(e.context), null), d.delete(n), 0 === d.size && ! function() {
                    var e = [r.StoredCrashInformation.HasRTCConnection, r.StoredCrashInformation.IsSendingVideo, r.StoredCrashInformation.IsSendingStream, r.StoredCrashInformation.IsReceivingVideo, r.StoredCrashInformation.IsReceivingStream],
                        t = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                            var s = i.value;
                            u.default.setCrashInformation(s, 0)
                        }
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            !t && null != a.return && a.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                }()
        }
    }

    function m(e) {
        var t = e.userId === a.default.getId(),
            n = null != e.streamId,
            i = null;
        switch (e.context) {
            case o.MediaEngineContextTypes.DEFAULT:
                i = t ? r.StoredCrashInformation.IsSendingVideo : r.StoredCrashInformation.IsReceivingVideo;
                break;
            case o.MediaEngineContextTypes.STREAM:
                i = t ? r.StoredCrashInformation.IsSendingStream : r.StoredCrashInformation.IsReceivingStream
        }
        u.default.setCrashInformation(i, n ? 1 : 0)
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
                RTC_CONNECTION_STATE: p,
                RTC_CONNECTION_VIDEO: m,
                MEDIA_SESSION_JOINED: E
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i, e
        }
        return o
    }(i.default);
    t.default = new y
}