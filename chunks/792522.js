function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("898511"),
        a = n("629815"),
        u = n("992478");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
        var t, n, o, i, a, l = (t = d, n = function() {
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
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function d() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, d), l.apply(this, arguments)
        }
        return o = d, i = [{
            key: "initialize",
            value: function(e) {
                var t;
                r = null !== (t = null == e ? void 0 : e.animationType) && void 0 !== t ? t : u.VoiceChannelEffectAnimationType.PREMIUM
            }
        }, {
            key: "getState",
            value: function() {
                return {
                    animationType: r
                }
            }
        }], s(o.prototype, i), a && s(o, a), d
    }(i.default.PersistedStore);
    l(d, "displayName", "VoiceChannelEffectsPersistedStore"), l(d, "persistKey", "VoiceChannelEffectsPersistedStore"), t.default = new d(a.default, {
        VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: function() {
            r = r === u.VoiceChannelEffectAnimationType.BASIC ? u.VoiceChannelEffectAnimationType.PREMIUM : u.VoiceChannelEffectAnimationType.BASIC
        }
    })
}