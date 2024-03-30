function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var r, o, i = n("967888"),
        a = n("864842"),
        u = n("393588"),
        s = n("299529"),
        l = n("778513"),
        c = n("281767");

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function _(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    d(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    d(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                p(e, t, n[t])
            })
        }
        return e
    }

    function h(e, t) {
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

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function T(e, t) {
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
    }(o || (o = {})).GUILD = "GUILD";
    var S = (r = _(function(e) {
            var t, n, r, o;
            return T(this, function(o) {
                switch (o.label) {
                    case 0:
                        t = null, o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, i.HTTP.get({
                            url: c.Endpoints.EMOJI_SOURCE_DATA(e),
                            oldFormErrors: !0,
                            timeout: 5e3
                        })];
                    case 2:
                        return (null == (r = o.sent()) ? void 0 : null === (n = r.body) || void 0 === n ? void 0 : n.guild) != null && (t = {
                            guild: v.createFromServer(r.body.guild),
                            type: r.body.type
                        }), [3, 4];
                    case 3:
                        return o.sent(), [3, 4];
                    case 4:
                        return [2, t]
                }
            })
        }), function(e) {
            return r.apply(this, arguments)
        }),
        v = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && O(e, t)
            }(d, e);
            var t, n, r, o, i, a = (t = d, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = m(t);
                if (n) {
                    var a = m(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : f(e)
            });

            function d(e) {
                var t;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, d), p(f(t = a.call(this)), "id", void 0), p(f(t), "name", void 0), p(f(t), "icon", void 0), p(f(t), "description", void 0), p(f(t), "features", void 0), p(f(t), "premiumTier", void 0), p(f(t), "premiumSubscriberCount", void 0), p(f(t), "presenceCount", void 0), p(f(t), "memberCount", void 0), p(f(t), "emojis", void 0), t.id = e.id, t.name = e.name, t.icon = e.icon, t.description = e.description, t.features = e.features, t.premiumTier = e.premiumTier, t.premiumSubscriberCount = e.premiumSubscriberCount, t.presenceCount = e.presenceCount, t.memberCount = e.memberCount, t.emojis = e.emojis, t
            }
            return r = d, o = [{
                key: "getIconURL",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return s.default.getGuildIconURL({
                        id: this.id,
                        size: e,
                        icon: this.icon,
                        canAnimate: t
                    })
                }
            }, {
                key: "getIconSource",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return s.default.getAnimatableSourceWithFallback(n, function(n) {
                        return s.default.getGuildIconSource({
                            id: t.id,
                            size: e,
                            icon: t.icon,
                            canAnimate: n
                        })
                    })
                }
            }, {
                key: "hasFeature",
                value: function(e) {
                    return this.features.has(e)
                }
            }, {
                key: "isDiscoverable",
                value: function() {
                    return this.hasFeature(c.GuildFeatures.DISCOVERABLE)
                }
            }, {
                key: "acronym",
                get: function() {
                    return (0, l.getAcronym)(this.name)
                }
            }], i = [{
                key: "getGuildFromEmojiId",
                value: function(e) {
                    return _(function() {
                        var t;
                        return T(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, S(e)];
                                case 1:
                                    return [2, null != (t = n.sent()) && (null == t ? void 0 : t.type) === "GUILD" ? t.guild : null]
                            }
                        })
                    })()
                }
            }, {
                key: "_mapCommon",
                value: function(e) {
                    var t;
                    return {
                        id: e.id,
                        name: e.name,
                        icon: e.icon,
                        description: e.description,
                        features: new Set(null !== (t = e.features) && void 0 !== t ? t : new Set)
                    }
                }
            }, {
                key: "createFromGuildRecord",
                value: function(e) {
                    return new d(h(I({}, d._mapCommon(e)), {
                        premiumTier: e.premiumTier,
                        premiumSubscriberCount: e.premiumSubscriberCount,
                        presenceCount: null,
                        memberCount: null,
                        emojis: null
                    }))
                }
            }, {
                key: "createFromDiscoverableGuild",
                value: function(e) {
                    return new d(h(I({}, d._mapCommon(e)), {
                        premiumTier: null,
                        premiumSubscriberCount: e.premiumSubscriptionCount,
                        presenceCount: e.presenceCount,
                        memberCount: e.memberCount,
                        emojis: e.emojis
                    }))
                }
            }, {
                key: "createFromServer",
                value: function(e) {
                    return new d(h(I({}, d._mapCommon(e)), {
                        premiumTier: e.premium_tier,
                        premiumSubscriberCount: e.premium_subscription_count,
                        presenceCount: e.approximate_presence_count,
                        memberCount: e.approximate_member_count,
                        emojis: e.emojis
                    }))
                }
            }, {
                key: "createFromGuildType",
                value: function(e) {
                    return y(e, d) ? e : y(e, u.default) ? d.createFromGuildRecord(e) : d.createFromDiscoverableGuild(e)
                }
            }], o && E(r.prototype, o), i && E(r, i), d
        }(a.default)
}