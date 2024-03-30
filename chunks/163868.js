function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NO_SETTINGS: function() {
            return f
        }
    });
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
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var f = {
            enabled: !1
        },
        d = [],
        _ = {},
        E = new Set,
        p = {};

    function m(e) {
        var t, n = null === (t = _[e]) || void 0 === t ? void 0 : t.newMemberActions;
        return null == n ? null : (p[e] = n, p[e])
    }

    function y(e) {
        var t = e.homeSettings,
            n = e.guildId;
        null != n && (null == t && (_[n] = f), _[n] = t, m(n), E.delete(n))
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
            }), t && c(e, t)
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
            key: "getSettings",
            value: function(e) {
                var t;
                return null == e ? null : null !== (t = _[e]) && void 0 !== t ? t : f
            }
        }, {
            key: "getNewMemberActions",
            value: function(e) {
                var t;
                return null == e || (null === (t = this.getSettings(e)) || void 0 === t ? void 0 : t.newMemberActions) == null ? null : null == p[e] ? m(e) : p[e]
            }
        }, {
            key: "getActionForChannel",
            value: function(e, t) {
                var n, r = this.getSettings(e);
                return null == r ? null : (null !== (n = r.newMemberActions) && void 0 !== n ? n : []).find(function(e) {
                    return e.channelId === t
                })
            }
        }, {
            key: "hasMemberAction",
            value: function(e, t) {
                return null != this.getActionForChannel(e, t)
            }
        }, {
            key: "getResourceChannels",
            value: function(e) {
                var t, n;
                return null !== (n = null === (t = _[e]) || void 0 === t ? void 0 : t.resourceChannels) && void 0 !== n ? n : d
            }
        }, {
            key: "getResourceForChannel",
            value: function(e, t) {
                if (null == e) return null;
                var n = this.getResourceChannels(e);
                return n === d ? null : n.find(function(e) {
                    return e.channelId === t
                })
            }
        }, {
            key: "getIsLoading",
            value: function(e) {
                return null != e && E.has(e)
            }
        }, {
            key: "getWelcomeMessage",
            value: function(e) {
                var t;
                if (null != e) return null === (t = _[e]) || void 0 === t ? void 0 : t.welcomeMessage
            }
        }, {
            key: "hasSettings",
            value: function(e) {
                return null != e && null != _[e]
            }
        }, {
            key: "getEnabled",
            value: function(e) {
                var t, n;
                return null != e && null !== (n = null === (t = _[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n
            }
        }, {
            key: "getNewMemberAction",
            value: function(e, t) {
                var n, r, o;
                return null == e || null == t ? null : null !== (o = null === (r = _[e]) || void 0 === r ? void 0 : null === (n = r.newMemberActions) || void 0 === n ? void 0 : n.find(function(e) {
                    return e.channelId === t
                })) && void 0 !== o ? o : null
            }
        }], a(r.prototype, o), i && a(r, i), l
    }(o.default.Store);
    u(I, "displayName", "GuildOnboardingHomeSettingsStore"), t.default = new I(i.default, {
        GUILD_HOME_SETTINGS_FETCH_START: function(e) {
            var t = e.guildId;
            E.add(t)
        },
        GUILD_HOME_SETTINGS_FETCH_SUCCESS: y,
        GUILD_HOME_SETTINGS_FETCH_FAIL: function(e) {
            var t = e.guildId;
            E.delete(t)
        },
        GUILD_HOME_SETTINGS_UPDATE_SUCCESS: y,
        GUILD_HOME_SETTINGS_TOGGLE_ENABLED: function(e) {
            var t = e.guildId,
                n = e.enabled,
                r = _[t];
            if (null == r) return !1;
            r.enabled = n
        },
        GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function(e) {
            var t, n = e.guildId,
                r = e.resourceChannel,
                o = _[n];
            if (null == o) return !1;
            o.resourceChannels = null !== (t = o.resourceChannels) && void 0 !== t ? t : [];
            var i = o.resourceChannels.findIndex(function(e) {
                return e.channelId === r.channelId
            });
            return -1 !== i && (o.resourceChannels[i] = l({}, r), !0)
        },
        GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function(e) {
            var t, n = e.guildId,
                r = e.action,
                o = _[n];
            if (null == o) return !1;
            o.newMemberActions = null !== (t = o.newMemberActions) && void 0 !== t ? t : [];
            var i = o.newMemberActions.findIndex(function(e) {
                return e.channelId === r.channelId
            });
            return -1 !== i && (o.newMemberActions[i] = l({}, r), !0)
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            if (null == _[t.id]) return !1;
            delete _[t.id], delete p[t.id]
        }
    })
}