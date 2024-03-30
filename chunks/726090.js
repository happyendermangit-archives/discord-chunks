function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("729357"),
        o = n.n(r),
        i = n("807471"),
        a = n("423284");

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
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
    var c = (0, a.createSound)("vibing_wumpus", "vibing_wumpus", 0),
        f = 0,
        d = 0,
        _ = null;

    function E(e, t) {
        var n = Math.round(100 * e),
            r = Math.round(100 * d),
            i = Math.round(100 * f);
        n > 0 && i >= r || n < 0 && i <= r ? (clearInterval(_), 0 === r && null != t && t()) : (i += n, f = i / 100, c.volume = o()(f, 0, .5))
    }

    function p(e) {
        null != _ && clearInterval(_), d = 0;
        var t = h();
        _ = setInterval(function() {
            E(t, e)
        }, 100)
    }

    function m() {
        null != _ && clearInterval(_), c.loop(), d = .5;
        var e = h();
        _ = setInterval(function() {
            return E(e)
        }, 100)
    }

    function y() {
        p(c.pause.bind(c))
    }

    function I() {
        p(c.stop.bind(c))
    }

    function h() {
        return .2 * (d - f)
    }
    var O = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
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
            var e, r, o, i = s(t);
            if (n) {
                var a = s(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : u(e)
        });

        function o() {
            var e, t, n, i;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = r.apply(this, arguments), t = u(e), n = "actions", i = {
                VIBING_WUMPUS_PLAY_MUSIC: m,
                VIBING_WUMPUS_STOP_MUSIC: I,
                VIBING_WUMPUS_PAUSE_MUSIC: y
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i, e
        }
        return o
    }(i.default);
    t.default = new O
}