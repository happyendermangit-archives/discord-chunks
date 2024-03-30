function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("306912"),
        i = n("388990"),
        a = n("523018"),
        u = n("106629"),
        s = n("881002"),
        l = n("133722");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
    var E = 0,
        p = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(p, e);
            var t, n, r = (t = p, n = function() {
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
                }(r) || "function" == typeof r) ? r : c(e)
            });

            function p() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, p), e = r.apply(this, arguments), f(c(e), "actions", {
                    POST_CONNECTION_OPEN: function(t) {
                        return e.handleConnectionOpen(t)
                    },
                    IDLE: function() {
                        return e.handleIdleChange()
                    }
                }), f(c(e), "handleConnectionOpen", function(t) {
                    e._attemptDeadchatPrompt(), e._triggerGamingStatsSetupExperiment()
                }), f(c(e), "handleIdleChange", function() {
                    Date.now() - E > i.default.Millis.HOUR && e._attemptDeadchatPrompt()
                }), f(c(e), "_attemptDeadchatPrompt", function() {
                    var e = o.default.getGuilds(),
                        t = a.default.keys(e).filter(function(e) {
                            return l.SimpleDeadchatPromptExperiment.getCurrentConfig({
                                guildId: e,
                                location: "manager"
                            }).triggerDeadchat
                        });
                    t.length > 0 && (E = Date.now(), (0, u.initiateChannelPrompts)(t))
                }), f(c(e), "_triggerGamingStatsSetupExperiment", function() {
                    var e = o.default.getGuilds();
                    a.default.keys(e).forEach(function(e) {
                        s.GamingStatsSetupExperiment.trackExposure({
                            guildId: e,
                            location: "manager"
                        })
                    })
                }), e
            }
            return p
        }(r.default);
    t.default = new p
}