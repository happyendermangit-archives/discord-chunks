function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildOnboardingStatus: function() {
            return u
        },
        isOnboarding: function() {
            return p
        }
    });
    var r, o, i, a, u, s, l = n("898511"),
        c = n("629815"),
        f = n("281767");

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

    function p(e) {
        return null != e && ["started", "ready"].includes(e)
    }(r = u || (u = {})).STARTED = "started", r.READY = "ready", r.COMPLETED = "completed", r.NOT_APPLICABLE = "not_applicable";
    var m = {},
        y = {},
        I = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && E(e, t)
            }(u, e);
            var t, n, r, o, i, a = (t = u, n = function() {
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

            function u() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), a.apply(this, arguments)
            }
            return r = u, o = [{
                key: "shouldShowOnboarding",
                value: function(e) {
                    return !!(e !== f.ME && e !== f.FAVORITES && p(m[e])) || !1
                }
            }, {
                key: "getOnboardingStatus",
                value: function(e) {
                    return m[e]
                }
            }, {
                key: "resetOnboardingStatus",
                value: function(e) {
                    m[e] = "started", y[e] = "cover"
                }
            }, {
                key: "getCurrentOnboardingStep",
                value: function(e) {
                    var t;
                    return null !== (t = y[e]) && void 0 !== t ? t : "cover"
                }
            }], d(r.prototype, o), i && d(r, i), u
        }(l.default.Store);
    a = "GuildOnboardingStore", (i = "displayName") in(o = I) ? Object.defineProperty(o, i, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[i] = a, t.default = new I(c.default, {
        LOGOUT: function() {
            m = {}, y = {}
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            delete m[t.id], delete y[t.id]
        },
        GUILD_ONBOARDING_START: function(e) {
            m[e.guildId] = "started"
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.enabled;
            if ("started" !== m[t]) return !1;
            n ? m[t] = "ready" : m[t] = "not_applicable"
        },
        GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function(e) {
            m[e.guildId] = "not_applicable"
        },
        GUILD_ONBOARDING_COMPLETE: function(e) {
            m[e.guildId] = "completed"
        },
        GUILD_ONBOARDING_SET_STEP: function(e) {
            var t = e.guildId,
                n = e.step;
            y[t] = n
        },
        CONNECTION_OPEN: function() {
            y = {}
        }
    })
}