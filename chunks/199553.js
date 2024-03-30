function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815"),
        o = n("807471"),
        i = n("217014"),
        a = n("239546"),
        u = n("935741"),
        s = n("894288"),
        l = n("342564"),
        c = n("281767");

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
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

    function E() {
        ! function() {
            var e = s.default.getVoiceChannelId(),
                t = a.default.bitrate;
            if (null == e) return;
            var n = u.default.getChannel(e);
            if (null != n) t !== n.bitrate && r.default.dispatch({
                type: "SET_CHANNEL_BITRATE",
                bitrate: n.bitrate
            })
        }(), ! function() {
            var e, t = s.default.getVoiceChannelId(),
                n = l.default.mode;
            if (null == t) return;
            var o = u.default.getChannel(t);
            if (null != o) {
                var i = null !== (e = o.videoQualityMode) && void 0 !== e ? e : c.VideoQualityMode.AUTO;
                n !== i && r.default.dispatch({
                    type: "SET_CHANNEL_VIDEO_QUALITY_MODE",
                    mode: i
                })
            }
        }()
    }

    function p(e) {
        var t = e.channels,
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                s.default.getVoiceChannelId() === u.id && E()
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
    }

    function m(e) {
        e.voiceStates.forEach(function(e) {
            i.default.getSessionId() === e.sessionId && E()
        })
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
            }(r) || "function" == typeof r) ? r : f(e)
        });

        function o() {
            var e, t, n, i;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = r.apply(this, arguments), t = f(e), n = "actions", i = {
                CHANNEL_UPDATES: p,
                VOICE_STATE_UPDATES: m
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i, e
        }
        return o
    }(o.default);
    t.default = new y
}