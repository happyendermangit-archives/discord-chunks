function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("898511"),
        l = n("629815"),
        c = n("654370"),
        f = n("950520");

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
        }(s, e);
        var t, n, r, o, i, u = (t = s, n = function() {
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
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), u.apply(this, arguments)
        }
        return r = s, o = [{
            key: "getGameForPID",
            value: function(e) {
                if (__OVERLAY__ || null == e) return null;
                var t, n = null === (t = c.default.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
                return f.default.getGameByName(n)
            }
        }, {
            key: "getGame",
            value: function() {
                return __OVERLAY__ ? a : null
            }
        }], d(r.prototype, o), i && d(r, i), s
    }(s.default.Store);
    i = "OverlayRunningGameStore", (o = "displayName") in(r = p) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new p(l.default, {
        OVERLAY_INITIALIZE: function(e) {
            a = e.currentGame
        },
        OVERLAY_SET_ASSOCIATED_GAME: function(e) {
            a = e.associatedGame
        }
    })
}