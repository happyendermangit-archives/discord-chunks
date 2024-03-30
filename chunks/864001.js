function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815"),
        o = n("807471"),
        i = n("382199"),
        a = n("523018"),
        u = n("720575");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function c(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    l(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    l(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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

    function E(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var p = {},
        m = {},
        y = null;

    function I(e, t) {
        return h.apply(this, arguments)
    }

    function h() {
        return (h = c(function(e, t) {
            return E(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (null == p[e] && (p[e] = new Set), p[e].add(t), null == m[e] && (m[e] = Date.now()), !T(e)) return [3, 2];
                        return [4, O(e)];
                    case 1:
                        n.sent(), n.label = 2;
                    case 2:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function O(e) {
        if (null != p[e]) {
            var t = Array.from(p[e]);
            p[e] = new Set, m[e] = Date.now(), requestAnimationFrame(c(function() {
                return E(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, r.default.dispatch({
                                type: "MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH",
                                guildId: e,
                                userIds: t
                            })];
                        case 1:
                            return n.sent(), [2]
                    }
                })
            }))
        }
    }

    function T(e) {
        var t, n, r, o, a = p[e];
        if (null == a) return !1;
        var u = a.size >= (t = e, (null !== (n = i.default.getMemberCount(t)) && void 0 !== n ? n : 0) >= 75e3 ? 10 : 2),
            s = m[e];
        if (u) return !0;
        if (null == s) return !1;
        var l = Date.now() - s;
        return null != s && l >= (r = e, (null !== (o = i.default.getMemberCount(r)) && void 0 !== o ? o : 0) >= 75e3 ? 5e3 : 2e3)
    }

    function S(e) {
        p[e] = new Set, m[e] = null
    }
    var v = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
        }(c, e);
        var t, n, r, o, i, l = (t = c, n = function() {
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
            }(r) || "function" == typeof r) ? r : s(e)
        });

        function c() {
            var e, t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), e = l.apply(this, arguments), t = s(e), n = "actions", r = {
                INITIALIZE_MEMBER_SAFETY_STORE: function() {
                    return e.handleInitialize()
                },
                GUILD_MEMBER_ADD: function(t) {
                    return e.handleGuildMemberUpdate(t.guildId, t.user.id)
                },
                GUILD_MEMBER_UPDATE: function(t) {
                    return e.handleGuildMemberUpdate(t.guildId, t.user.id)
                },
                GUILD_MEMBER_REMOVE: function(t) {
                    return e.handleGuildMemberRemove(t.guildId, t.user.id)
                },
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(t) {
                    return e.handleGuildMemberSearchSuccess(t)
                }
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, e
        }
        return r = c, o = [{
            key: "handleInitialize",
            value: function() {
                null == y && null == y && (y = setInterval(function() {
                    a.default.forEachKey(p, function(e) {
                        T(e) && O(e)
                    })
                }, 1e4))
            }
        }, {
            key: "handleGuildMemberUpdate",
            value: function(e, t) {
                if (u.default.isInitialized(e)) return I(e, t)
            }
        }, {
            key: "handleGuildMemberRemove",
            value: function(e, t) {
                if (u.default.isInitialized(e)) return I(e, t)
            }
        }, {
            key: "handleGuildDelete",
            value: function(e) {
                var t = e.guild.id;
                u.default.isInitialized(t) && S(t)
            }
        }, {
            key: "handleGuildMemberSearchSuccess",
            value: function(e) {
                var t = e.guildId;
                u.default.isInitialized(t) && S(t)
            }
        }], f(r.prototype, o), i && f(r, i), c
    }(o.default);
    t.default = new v
}