function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        l = n.n(u),
        s = n("913527"),
        c = n.n(s),
        f = n("898511"),
        d = n("945816"),
        p = n("629815"),
        E = n("813452"),
        _ = n("56449"),
        m = n("927305"),
        y = n("758989"),
        v = n("281767");

    function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e, t) {
        return (g = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function O(e) {
        return function(e) {
            if (Array.isArray(e)) return b(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return b(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var I = {},
        C = {},
        R = [],
        T = [],
        A = [],
        w = new Set,
        P = {},
        k = {},
        D = new Set;

    function N(e) {
        var t = m.default.createFromServer(e),
            n = t.code;
        if (null != C[n]) C[n] = C[n].merge(t);
        else if (C[n] = t, null != t.expiresAt) {
            var r = new d.Timeout;
            I[n] = r,
                function e(t) {
                    var n = C[t];
                    if (null != n && null != n.expiresAt) {
                        var r = n.expiresAt.valueOf() - c()().valueOf();
                        if (r <= 0) delete C[t], delete I[t], x.emitChange();
                        else {
                            var o = I[t];
                            if (null == o) return;
                            o.start(Math.min(2147483647, r), function() {
                                return e(t)
                            })
                        }
                    }
                }(n)
        }
    }

    function L(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !D.has(e.channel_id)) return !1;
        var n = (0, y.isGiftCodeEmbed)(e) ? (0, y.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, y.findGiftCodes)(e.content);
        return 0 !== n.length && (n.forEach(function(e) {
            !R.includes(e) && !A.includes(e) && (U({
                code: e
            }), p.default.wait(function() {
                return E.default.resolveGiftCode(e, !1, !0).catch(v.NOOP_NULL)
            }))
        }), !1)
    }

    function U(e) {
        var t = e.code;
        !R.includes(t) && (R = O(R).concat([t]))
    }

    function j(e) {
        return L(e.message, !0)
    }

    function F(e) {
        var t = e.channelId,
            n = e.messages;
        D.add(t), n.forEach(function(e) {
            return L(e, !0)
        })
    }

    function G(e) {
        var t = e.firstMessages;
        if (null == t) return !1;
        null == t || t.forEach(function(e) {
            return L(e)
        })
    }
    var M = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && g(e, t)
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
            var e, r, o, i = S(t);
            if (n) {
                var a = S(this).constructor;
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
            key: "get",
            value: function(e) {
                var t = C[e];
                return null == t || t.isExpired() ? null : t
            }
        }, {
            key: "getError",
            value: function(e) {
                return null != e ? k[e] : null
            }
        }, {
            key: "getForGifterSKUAndPlan",
            value: function(e, t, n) {
                return l().values(C).filter(function(r) {
                    return r.userId === e && r.skuId === t && (null == n || r.subscriptionPlanId === n) && !r.isExpired()
                })
            }
        }, {
            key: "getIsResolving",
            value: function(e) {
                return R.includes(e)
            }
        }, {
            key: "getIsResolved",
            value: function(e) {
                return A.includes(e)
            }
        }, {
            key: "getIsAccepting",
            value: function(e) {
                return T.includes(e)
            }
        }, {
            key: "getUserGiftCodesFetchingForSKUAndPlan",
            value: function(e, t) {
                return w.has((0, y.makeComboId)(e, t))
            }
        }, {
            key: "getUserGiftCodesLoadedAtForSKUAndPlan",
            value: function(e, t) {
                return P[(0, y.makeComboId)(e, t)]
            }
        }, {
            key: "getResolvingCodes",
            value: function() {
                return R
            }
        }, {
            key: "getResolvedCodes",
            value: function() {
                return A
            }
        }, {
            key: "getAcceptingCodes",
            value: function() {
                return T
            }
        }], h(r.prototype, o), i && h(r, i), u
    }(f.default.Store);
    i = "GiftCodeStore", (o = "displayName") in(r = M) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i;
    var x = new M(p.default, {
        CONNECTION_OPEN: function() {
            return D.clear(), !1
        },
        CHANNEL_SELECT: function(e) {
            var t = e.channelId;
            return null != t && D.add(t), !1
        },
        GIFT_CODE_RESOLVE: U,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            var t = e.giftCode;
            return R = R.filter(function(e) {
                return e !== t.code
            }), !A.includes(t.code) && (A = O(A).concat([t.code])), N(t)
        },
        GIFT_CODE_RESOLVE_FAILURE: function(e) {
            var t = e.code;
            R = R.filter(function(e) {
                return e !== t
            }), !A.includes(t) && (A = O(A).concat([t]))
        },
        GIFT_CODE_REDEEM: function(e) {
            var t = e.code;
            !T.includes(t) && (T = O(T).concat([t]))
        },
        GIFT_CODE_REDEEM_SUCCESS: function(e) {
            var t = e.code;
            T = T.filter(function(e) {
                return e !== t
            });
            var n = C[t];
            null != n && (C[t] = n.merge({
                redeemed: !0,
                uses: n.uses + 1
            }))
        },
        GIFT_CODE_REDEEM_FAILURE: function(e) {
            var t = e.code,
                n = e.error;
            T = T.filter(function(e) {
                return e !== t
            });
            var r = C[t];
            if (k[t] = n, null != r) switch (n.code) {
                case v.AbortCodes.UNKNOWN_GIFT_CODE:
                    C[t] = r.set("revoked", !0);
                    break;
                case v.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    C[t] = r.set("uses", r.maxUses)
            }
        },
        GIFT_CODE_REVOKE_SUCCESS: function(e) {
            var t = e.code;
            delete C[t];
            var n = I[t];
            null != n && (n.stop(), delete I[t]), !A.includes(t) && (A = O(A).concat([t]))
        },
        GIFT_CODE_CREATE_SUCCESS: function(e) {
            N(e.giftCode)
        },
        GIFT_CODES_FETCH: function(e) {
            var t = e.skuId,
                n = e.subscriptionPlanId;
            w.add((0, y.makeComboId)(t, n))
        },
        GIFT_CODES_FETCH_SUCCESS: function(e) {
            var t = e.giftCodes,
                n = e.skuId,
                r = e.subscriptionPlanId;
            t.forEach(N);
            var o = (0, y.makeComboId)(n, r);
            P[o] = Date.now(), w.delete(o)
        },
        GIFT_CODES_FETCH_FAILURE: function(e) {
            var t = e.skuId,
                n = e.subscriptionPlanId;
            w.delete((0, y.makeComboId)(t, n))
        },
        MESSAGE_CREATE: j,
        MESSAGE_UPDATE: j,
        LOCAL_MESSAGES_LOADED: F,
        LOAD_MESSAGES_SUCCESS: F,
        LOAD_MESSAGES_AROUND_SUCCESS: F,
        LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
            e.messages.forEach(function(e) {
                return L(e)
            })
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
            e.messages.forEach(function(e) {
                return L(e)
            })
        },
        SEARCH_FINISH: function(e) {
            e.messages.forEach(function(e) {
                e.forEach(function(e) {
                    return L(e)
                })
            })
        },
        GIFT_CODE_UPDATE: function(e) {
            var t = e.uses,
                n = e.code,
                r = C[n];
            null != r && (C[n] = r.set("uses", Math.max(r.uses, t)))
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            var t = e.data;
            (0, _.getMessagesFromGuildFeedFetch)(t).forEach(function(e) {
                return L(e)
            })
        },
        LOAD_THREADS_SUCCESS: G,
        LOAD_ARCHIVED_THREADS_SUCCESS: G,
        LOAD_FORUM_POSTS: function(e) {
            Object.values(e.threads).map(function(e) {
                var t = e.first_message;
                return null != t && L(t)
            })
        }
    });
    t.default = x
}