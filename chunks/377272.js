function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("950175"),
        o = n("807471"),
        i = n("189889");

    function a(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var l = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && s(e, t)
        }(l, e);
        var t, n, o = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = u(t);
            if (n) {
                var s = u(this).constructor;
                o = Reflect.construct(i, arguments, s)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : a(e)
        });

        function l() {
            var e, t, n, u;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), e = o.apply(this, arguments), t = a(e), n = "actions", u = {
                POST_CONNECTION_OPEN: function() {
                    i.LocalizedPricingPromoManagerExperiment.getCurrentConfig({
                        location: "cd74f0_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled && (0, r.fetchLocalizedPromo)()
                }
            }, n in t ? Object.defineProperty(t, n, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = u, e
        }
        return l
    }(o.default);
    t.default = new l
}