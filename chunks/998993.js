function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var c = !1,
        f = !1,
        d = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t)
            }(d, e);
            var t, n, r, o, i, u = (t = d, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = s(t);
                if (n) {
                    var a = s(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function d() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, d), u.apply(this, arguments)
            }
            return r = d, o = [{
                key: "initialize",
                value: function(e) {
                    null != e && (c = e)
                }
            }, {
                key: "isMuted",
                value: function() {
                    return c
                }
            }, {
                key: "shouldPlay",
                value: function() {
                    return f
                }
            }, {
                key: "getUserAgnosticState",
                value: function() {
                    return c
                }
            }], a(r.prototype, o), i && a(r, i), d
        }(o.default.DeviceSettingsStore);
    u(d, "displayName", "StageMusicStore"), u(d, "persistKey", "StageMusicStore"), t.default = new d(i.default, {
        STAGE_MUSIC_MUTE: function(e) {
            c = e.muted, f = !1
        },
        STAGE_MUSIC_PLAY: function(e) {
            f = e.play
        },
        VOICE_CHANNEL_SELECT: function() {
            f = !1
        }
    })
}