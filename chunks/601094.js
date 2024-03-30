function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("902356"),
        u = n("306912"),
        s = n("208454"),
        l = n("147746"),
        c = n("591662");

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = "production" === c.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === c.Environments.STAGING;

    function y() {
        m = (0, a.isStaffEnv)(s.default.getCurrentUser())
    }
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(c, e);
        var t, n, r, o, i, a = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : f(e)
        });

        function c() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), e = a.apply(this, arguments), _(f(e), "isDeveloper", !1), e
        }
        return r = c, o = [{
            key: "initialize",
            value: function() {
                var e = this;
                this.waitFor(s.default, u.default), Object.defineProperties(this, {
                    isDeveloper: {
                        configurable: !1,
                        get: function() {
                            return m
                        },
                        set: function() {}
                    }
                }), y(), setTimeout(function() {
                    return Object.freeze(e)
                })
            }
        }, {
            key: "getExperimentDescriptor",
            value: function() {
                return m ? {
                    type: "developer",
                    name: "discord_dev_testing",
                    revision: 1,
                    override: !0,
                    bucket: l.ExperimentBuckets.TREATMENT_1
                } : null
            }
        }], d(r.prototype, o), i && d(r, i), c
    }(o.default.Store);
    _(I, "displayName", "DeveloperExperimentStore"), t.default = new I(i.default, {
        CONNECTION_OPEN: y,
        OVERLAY_INITIALIZE: y,
        CURRENT_USER_UPDATE: y
    })
}