function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DraftType: function() {
            return o
        }
    });
    var r, o, i, a = n("392711"),
        u = n.n(a),
        s = n("898511"),
        l = n("629815"),
        c = n("162677"),
        f = n("523018"),
        d = n("217014"),
        _ = n("935741"),
        E = n("489763"),
        p = n("281767");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function T(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return m(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var S = p.MAX_MESSAGE_LENGTH_PREMIUM + 500;
    (r = o || (o = {}))[r.ChannelMessage = 0] = "ChannelMessage", r[r.ThreadSettings = 1] = "ThreadSettings", r[r.FirstThreadMessage = 2] = "FirstThreadMessage", r[r.ApplicationLauncherCommand = 3] = "ApplicationLauncherCommand", r[r.Poll = 4] = "Poll", r[r.SlashCommand = 5] = "SlashCommand";
    var v = {};

    function g(e) {
        var t = v[e];
        return null == t && (t = v[e] = {}), t
    }

    function A(e) {
        var t = e.type,
            n = e.channelId,
            r = e.draft,
            o = e.draftType,
            i = _.default.getChannel(n);
        r === (null == i ? void 0 : i.template) && (r = "");
        var a = d.default.getId();
        if (null != a && null != r && "" !== r) {
            var u, s, l = g(a),
                c = l[n];
            if (null == c && (c = l[n] = {}), (u = r).length > S && (u = u.substr(0, S)), (r = u) === (null === (s = c[o]) || void 0 === s ? void 0 : s.draft)) return !1;
            c[o] = {
                timestamp: Date.now(),
                draft: r
            }
        } else b(n, o);
        return "DRAFT_SAVE" === t
    }

    function b(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.default.getId();
        if (null == n) return !1;
        var r = g(n),
            o = r[e];
        if (null == o) return !1;
        delete o[t], u().isEmpty(o) && delete r[e]
    }

    function N() {
        var e = d.default.getId();
        if (null != e && !(E.default.totalUnavailableGuilds > 0)) {
            var t = g(e);
            for (var n in t) null == _.default.getChannel(n) && delete t[n]
        }
    }

    function R(e) {
        var t = e.channel.id,
            n = d.default.getId();
        if (null == n) return !1;
        var r = g(n);
        return delete r[t], !1
    }
    var C = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(s, e);
        var t, n, r, o, i, a = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
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
            }(this, s), a.apply(this, arguments)
        }
        return r = s, o = [{
            key: "initialize",
            value: function(e) {
                v = null != e ? e : {}, ! function() {
                    var e = !0,
                        t = !1,
                        n = void 0;
                    try {
                        for (var r, o = f.default.entries(v)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                            var i = T(r.value, 2),
                                a = i[0],
                                u = i[1],
                                s = !0,
                                l = !1,
                                c = void 0;
                            try {
                                for (var d, _ = f.default.entries(u)[Symbol.iterator](); !(s = (d = _.next()).done); s = !0) {
                                    var E = T(d.value, 2),
                                        p = E[0],
                                        m = E[1][0];
                                    null != m && ("" === m.draft || "" === m.draft.trim()) && b(p, 0, a)
                                }
                            } catch (e) {
                                l = !0, c = e
                            } finally {
                                try {
                                    !s && null != _.return && _.return()
                                } finally {
                                    if (l) throw c
                                }
                            }
                        }
                    } catch (e) {
                        t = !0, n = e
                    } finally {
                        try {
                            !e && null != o.return && o.return()
                        } finally {
                            if (t) throw n
                        }
                    }
                }(), this.waitFor(d.default, _.default, E.default)
            }
        }, {
            key: "getState",
            value: function() {
                return v
            }
        }, {
            key: "getThreadDraftWithParentMessageId",
            value: function(e) {
                var t = this,
                    n = d.default.getId();
                if (null != n) {
                    var r = g(n),
                        o = f.default.keys(r).find(function(n) {
                            var r = t.getThreadSettings(n);
                            return (null == r ? void 0 : r.parentMessageId) === e
                        });
                    return null != o ? this.getThreadSettings(o) : void 0
                }
            }
        }, {
            key: "getRecentlyEditedDrafts",
            value: function(e) {
                var t = d.default.getId();
                if (null == t) return [];
                var n = g(t);
                return u()(n).mapValues(function(t) {
                    return null == t ? void 0 : t[e]
                }).pickBy(c.isNotNullish).toPairs().map(function(e) {
                    var t = T(e, 2),
                        n = t[0],
                        r = t[1];
                    return {
                        channelId: n,
                        timestamp: r.timestamp,
                        draft: r.draft
                    }
                }).sortBy(function(e) {
                    return -e.timestamp
                }).value()
            }
        }, {
            key: "getDraft",
            value: function(e, t) {
                var n = d.default.getId();
                if (null == n) return "";
                var r = g(n)[e];
                if (null != r) {
                    var o = r[t];
                    if (null != o) return o.draft
                }
                return ""
            }
        }, {
            key: "getThreadSettings",
            value: function(e) {
                var t = d.default.getId();
                if (null == t) return null;
                var n = g(t)[e];
                return null == n ? null : n[1]
            }
        }], y(r.prototype, o), i && y(r, i), s
    }(s.default.PersistedStore);
    I(C, "displayName", "DraftStore"), I(C, "persistKey", "DraftStore"), I(C, "migrations", [function(e) {
        if (null == e) return {};
        for (var t in e) "timestamp" in e[t] && (e[t] = I({}, 0, e[t]));
        return e
    }, function(e) {
        var t = d.default.getId();
        if (null == e || null == t) return {};
        var n = {},
            r = n[t] = {};
        for (var o in e) r[o] = e[o];
        return n
    }]), t.default = new C(l.default, {
        CONNECTION_OPEN: function() {
            var e = d.default.getId();
            return !(e in v) && (v[e] = {}), N(), !1
        },
        LOGOUT: function(e) {
            !e.isSwitchingAccount && (v = {})
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
            e.userId in v && delete v[e.userId]
        },
        GUILD_DELETE: function() {
            return N(), !1
        },
        CHANNEL_DELETE: R,
        THREAD_DELETE: R,
        THREAD_CREATE: function(e) {
            var t = e.channel,
                n = d.default.getId();
            if (null == n || t.ownerId === n) return !1;
            var r = g(n),
                o = r[t.parent_id];
            if (null == o) return !1;
            var i = o[1];
            if (null == i) return !1;
            if (i.parentMessageId !== f.default.castChannelIdAsMessageId(t.id)) return !1;
            var a, u, s = r[t.parent_id];
            if (null == s) return !1;
            var l = null !== (u = null === (a = s[2]) || void 0 === a ? void 0 : a.draft) && void 0 !== u ? u : "";
            "" !== l && (r[t.id] = I({}, 0, {
                timestamp: Date.now(),
                draft: l
            })), b(t.parent_id, 1), b(t.parent_id, 2)
        },
        DRAFT_SAVE: A,
        DRAFT_CHANGE: A,
        DRAFT_CLEAR: function(e) {
            return b(e.channelId, e.draftType)
        },
        THREAD_SETTINGS_DRAFT_CHANGE: function(e) {
            var t = e.channelId,
                n = e.draft,
                r = d.default.getId();
            if (null != r) {
                var o, i, a = g(r),
                    u = a[t];
                null == u && (u = a[t] = {}), u[1] = (o = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            I(e, t, n[t])
                        })
                    }
                    return e
                }({
                    timestamp: Date.now()
                }, u[1], n), i = (i = {
                    parentChannelId: t
                }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(i)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
                }), o)
            }
        }
    })
}