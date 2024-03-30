function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                u(e, t, n[t])
            })
        }
        return e
    }

    function c(e, t) {
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

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = {},
        _ = {},
        E = new Set,
        p = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(l, e);
            var t, n, r, o, i, u = (t = l, n = function() {
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
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function l() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, l), u.apply(this, arguments)
            }
            return r = l, o = [{
                key: "getCompletedActions",
                value: function(e) {
                    return null == e ? null : _[e]
                }
            }, {
                key: "hasCompletedActionForChannel",
                value: function(e, t) {
                    var n = this.getCompletedActions(e);
                    return null != n && null != n[t]
                }
            }, {
                key: "getState",
                value: function(e) {
                    return null == e ? {} : {
                        completedActions: _[e],
                        loading: E.has(e)
                    }
                }
            }], a(r.prototype, o), i && a(r, i), l
        }(o.default.Store);
    u(p, "displayName", "GuildOnboardingMemberActionStore"), t.default = new p(i.default, {
        GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function(e) {
            var t = e.guildId;
            E.add(t)
        },
        GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function(e) {
            var t = e.memberActions,
                n = e.guildId;
            if (null == t) {
                _[n] = d;
                return
            }
            _[n] = t, E.delete(n)
        },
        GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function(e) {
            var t = e.guildId;
            E.delete(t)
        },
        GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function(e) {
            var t = e.guildId;
            if (null == _[t]) return !1;
            delete _[t]
        },
        COMPLETE_NEW_MEMBER_ACTION: function(e) {
            var t = e.guildId,
                n = e.channelId;
            _ = c(l({}, _), u({}, t, c(l({}, _[t]), u({}, n, !0))))
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            if (null == _[t.id]) return !1;
            delete _[t.id]
        }
    })
}