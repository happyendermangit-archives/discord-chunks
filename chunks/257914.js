function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("242880"),
        o = n("807471"),
        i = n("208454"),
        a = n("603046"),
        u = n("529358"),
        s = n("557331"),
        l = n("626007"),
        c = n("446198");

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
    var p = "lastSawPomelo",
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && E(e, t)
            }(m, e);
            var t, n, o = (t = m, n = function() {
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
                }(r) || "function" == typeof r) ? r : f(e)
            });

            function m() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, m), e = o.apply(this, arguments), d(f(e), "actions", {
                    POST_CONNECTION_OPEN: function() {
                        return e.onPostConnectionOpen()
                    }
                }), d(f(e), "onPostConnectionOpen", function() {
                    if (function() {
                            if (!a.experiment.getCurrentConfig({
                                    location: "b9eb97_1"
                                }, {
                                    autoTrackExposure: !1
                                }).enabled) return !1;
                            var e = i.default.getCurrentUser();
                            if (null == e || e.isPomelo() || !e.hasVerifiedEmailOrPhone()) return !1;
                            var t = (0, s.getForceMigration)(),
                                n = r.Storage.get(t ? "lastSawPomeloMigration" : p);
                            return !(null != n && Date.now() - n < 6048e5) && !0
                        }()) {
                        var e = l.UUOneClickExperiment.getCurrentConfig({
                            location: "uu_one_click"
                        }, {
                            autoTrackExposure: !1
                        }).enabled;
                        (0, u.openPomeloModal)(c.PomeloEntrypoints.APP_START, e, !1) && r.Storage.set(p, Date.now())
                    }
                }), e
            }
            return m
        }(o.default);
    t.default = new m
}