function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("865654"),
        u = n("243547");

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

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                l(e, t, n[t])
            })
        }
        return e
    }

    function d(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = {},
        p = null;

    function m(e, t) {
        var n, r = null !== (n = E[e]) && void 0 !== n ? n : {
            code: e,
            state: u.GuildTemplateStates.RESOLVING
        };
        t(r = f({}, r)), E = d(f({}, E), l({}, e, r))
    }

    function y(e) {
        I(e.guildTemplate)
    }

    function I(e) {
        return m(e.code, function(t) {
            var n = (0, a.default)(e);
            for (var r in n) t[r] = n[r]
        })
    }

    function h(e) {
        return m(e.code, function(e) {
            e.state = u.GuildTemplateStates.EXPIRED
        })
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
            }), t && _(e, t)
        }(l, e);
        var t, n, r, o, i, a = (t = l, n = function() {
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

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), a.apply(this, arguments)
        }
        return r = l, o = [{
            key: "getGuildTemplate",
            value: function(e) {
                return null != e ? E[e] : null
            }
        }, {
            key: "getGuildTemplates",
            value: function() {
                return E
            }
        }, {
            key: "getForGuild",
            value: function(e) {
                for (var t in E) {
                    var n = E[t];
                    if ("sourceGuildId" in n && n.sourceGuildId === e && n.state !== u.GuildTemplateStates.EXPIRED) return n
                }
            }
        }, {
            key: "getDisplayedGuildTemplateCode",
            value: function() {
                return p
            }
        }], s(r.prototype, o), i && s(r, i), l
    }(o.default.Store);
    l(O, "displayName", "GuildTemplateStore"), t.default = new O(i.default, {
        GUILD_TEMPLATE_RESOLVE: function(e) {
            var t = e.code;
            E = d(f({}, E), l({}, t, {
                code: t,
                state: u.GuildTemplateStates.RESOLVING
            }))
        },
        GUILD_TEMPLATE_CREATE_SUCCESS: y,
        GUILD_TEMPLATE_SYNC_SUCCESS: y,
        GUILD_TEMPLATE_RESOLVE_SUCCESS: y,
        GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function(e) {
            e.guildTemplates.forEach(function(e) {
                return I(e)
            })
        },
        GUILD_TEMPLATE_RESOLVE_FAILURE: h,
        GUILD_TEMPLATE_DELETE_SUCCESS: h,
        GUILD_TEMPLATE_ACCEPT: function(e) {
            return m(e.code, function(e) {
                e.state = u.GuildTemplateStates.ACCEPTING
            })
        },
        GUILD_TEMPLATE_ACCEPT_SUCCESS: function(e) {
            return m(e.code, function(e) {
                var t;
                e.state = u.GuildTemplateStates.ACCEPTED, e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1
            })
        },
        GUILD_TEMPLATE_ACCEPT_FAILURE: function(e) {
            return m(e.code, function(e) {
                e.state = u.GuildTemplateStates.RESOLVED
            })
        },
        GUILD_TEMPLATE_MODAL_SHOW: function(e) {
            p = e.code
        },
        GUILD_TEMPLATE_MODAL_HIDE: function(e) {
            p = null
        }
    })
}