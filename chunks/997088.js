function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815"),
        o = n("241174"),
        i = n("374550"),
        a = n("10132"),
        u = n("203151"),
        s = n("281767");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
        }(m, e);
        var t, o, d, _, E, p = (t = m, o = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, n, r, i = c(t);
            if (o) {
                var a = c(this).constructor;
                r = Reflect.construct(i, arguments, a)
            } else r = i.apply(this, arguments);
            return e = this, (n = r) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(n) || "function" == typeof n) ? n : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function m() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), p.apply(this, arguments)
        }
        return d = m, _ = [{
            key: "isEnabled",
            value: function() {
                return (0, i.isDesktop)() && (0, i.isMac)() && !a.ProcessArgs.isDiscordTestSet()
            }
        }, {
            key: "_initialize",
            value: function() {
                this.isEnabled() && r.default.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode)
            }
        }, {
            key: "_terminate",
            value: function() {
                this.isEnabled() && r.default.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode)
            }
        }, {
            key: "handleAudioSetMode",
            value: function(e) {
                e.mode === s.InputModes.PUSH_TO_TALK && n("967385").default.requestPermission(u.NativePermissionTypes.INPUT_MONITORING)
            }
        }], l(d.prototype, _), E && l(d, E), m
    }(o.default);
    t.default = new d
}