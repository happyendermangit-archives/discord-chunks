function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("713653");

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                s(e, t, n[t])
            })
        }
        return e
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = {},
        _ = {};

    function E(e, t) {
        var n, r = c({}, null !== (n = d[e]) && void 0 !== n ? n : {});
        null == t || t.forEach(function(e) {
            _[e.channel_id] = e, r[e.channel_id] = e
        }), d[e] = r
    }

    function p(e) {
        var t = e.instance;
        E(t.guild_id, [t])
    }

    function m(e, t) {
        if (delete _[t], null != e) {
            var n, r = c({}, null !== (n = d[e]) && void 0 !== n ? n : {});
            delete r[t], d[e] = r
        }
    }
    var y = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(c, e);
        var t, n, r, o, i, s = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = l(t);
            if (n) {
                var a = l(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function c() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), s.apply(this, arguments)
        }
        return r = c, o = [{
            key: "getStageInstanceByChannel",
            value: function(e) {
                if (null != e) return _[e]
            }
        }, {
            key: "isLive",
            value: function(e) {
                return null != this.getStageInstanceByChannel(e)
            }
        }, {
            key: "isPublic",
            value: function(e) {
                var t;
                return (null === (t = this.getStageInstanceByChannel(e)) || void 0 === t ? void 0 : t.privacy_level) === a.GuildScheduledEventPrivacyLevel.PUBLIC
            }
        }, {
            key: "getStageInstancesByGuild",
            value: function(e) {
                var t;
                return null == e ? {} : null !== (t = d[e]) && void 0 !== t ? t : {}
            }
        }, {
            key: "getAllStageInstances",
            value: function() {
                return Object.values(_)
            }
        }], u(r.prototype, o), i && u(r, i), c
    }(o.default.Store);
    s(y, "displayName", "StageInstanceStore"), t.default = new y(i.default, {
        CONNECTION_OPEN: function(e) {
            var t = e.guilds;
            d = {}, _ = {}, t.forEach(function(e) {
                return E(e.id, e.stage_instances)
            })
        },
        GUILD_CREATE: function(e) {
            var t = e.guild;
            E(t.id, t.stage_instances)
        },
        GUILD_DELETE: function(e) {
            var t, n = e.guild,
                r = null !== (t = d[n.id]) && void 0 !== t ? t : {};
            delete d[n.id], Object.keys(r).forEach(function(e) {
                delete _[e]
            })
        },
        STAGE_INSTANCE_CREATE: p,
        STAGE_INSTANCE_UPDATE: p,
        STAGE_INSTANCE_DELETE: function(e) {
            var t = e.instance;
            m(t.guild_id, t.channel_id)
        },
        CHANNEL_DELETE: function(e) {
            var t = e.channel;
            m(t.guild_id, t.id)
        },
        LOGOUT: function() {
            _ = {}, d = {}
        }
    })
}