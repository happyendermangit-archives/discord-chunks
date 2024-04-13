function(e, t, i) {
    "use strict";
    i.r(t), i("47120");
    var s, n, l, r, a = i("392711"),
        o = i.n(a),
        d = i("913527"),
        u = i.n(d),
        c = i("442837"),
        _ = i("846519"),
        E = i("570140"),
        f = i("533307"),
        p = i("900489"),
        h = i("590783"),
        m = i("669079"),
        S = i("981631");
    let C = {},
        I = {},
        g = [],
        v = [],
        T = [],
        A = new Set,
        R = {},
        b = {},
        O = new Set;

    function N(e) {
        let t = h.default.createFromServer(e),
            i = t.code;
        if (null != I[i]) I[i] = I[i].merge(t);
        else if (I[i] = t, null != t.expiresAt) {
            let e = new _.Timeout;
            C[i] = e,
                function e(t) {
                    let i = I[t];
                    if (null == i || null == i.expiresAt) return;
                    let s = i.expiresAt.valueOf() - u()().valueOf();
                    if (s <= 0) delete I[t], delete C[t], w.emitChange();
                    else {
                        let i = C[t];
                        if (null == i) return;
                        i.start(Math.min(2147483647, s), () => e(t))
                    }
                }(i)
        }
    }

    function y(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !O.has(e.channel_id)) return !1;
        let i = (0, m.isGiftCodeEmbed)(e) ? (0, m.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, m.findGiftCodes)(e.content);
        return 0 !== i.length && (i.forEach(e => {
            !g.includes(e) && !T.includes(e) && (L({
                code: e
            }), E.default.wait(() => f.default.resolveGiftCode(e, !1, !0).catch(S.NOOP_NULL)))
        }), !1)
    }

    function L(e) {
        let {
            code: t
        } = e;
        !g.includes(t) && (g = [...g, t])
    }

    function D(e) {
        let {
            message: t
        } = e;
        return y(t, !0)
    }

    function U(e) {
        let {
            channelId: t,
            messages: i
        } = e;
        O.add(t), i.forEach(e => y(e, !0))
    }

    function x(e) {
        let {
            firstMessages: t
        } = e;
        if (null == t) return !1;
        null == t || t.forEach(e => y(e))
    }
    class F extends(s = c.default.Store) {
        get(e) {
            let t = I[e];
            return null == t || t.isExpired() ? null : t
        }
        getError(e) {
            return null != e ? b[e] : null
        }
        getForGifterSKUAndPlan(e, t, i) {
            return o().values(I).filter(s => s.userId === e && s.skuId === t && (null == i || s.subscriptionPlanId === i) && !s.isExpired())
        }
        getIsResolving(e) {
            return g.includes(e)
        }
        getIsResolved(e) {
            return T.includes(e)
        }
        getIsAccepting(e) {
            return v.includes(e)
        }
        getUserGiftCodesFetchingForSKUAndPlan(e, t) {
            return A.has((0, m.makeComboId)(e, t))
        }
        getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
            return R[(0, m.makeComboId)(e, t)]
        }
        getResolvingCodes() {
            return g
        }
        getResolvedCodes() {
            return T
        }
        getAcceptingCodes() {
            return v
        }
    }
    r = "GiftCodeStore", (l = "displayName") in(n = F) ? Object.defineProperty(n, l, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[l] = r;
    let w = new F(E.default, {
        CONNECTION_OPEN: function() {
            return O.clear(), !1
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return null != t && O.add(t), !1
        },
        GIFT_CODE_RESOLVE: L,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            return g = g.filter(e => e !== t.code), !T.includes(t.code) && (T = [...T, t.code]), N(t)
        },
        GIFT_CODE_RESOLVE_FAILURE: function(e) {
            let {
                code: t
            } = e;
            g = g.filter(e => e !== t), !T.includes(t) && (T = [...T, t])
        },
        GIFT_CODE_REDEEM: function(e) {
            let {
                code: t
            } = e;
            !v.includes(t) && (v = [...v, t])
        },
        GIFT_CODE_REDEEM_SUCCESS: function(e) {
            let {
                code: t
            } = e;
            v = v.filter(e => e !== t);
            let i = I[t];
            null != i && (I[t] = i.merge({
                redeemed: !0,
                uses: i.uses + 1
            }))
        },
        GIFT_CODE_REDEEM_FAILURE: function(e) {
            let {
                code: t,
                error: i
            } = e;
            v = v.filter(e => e !== t);
            let s = I[t];
            if (b[t] = i, null != s) switch (i.code) {
                case S.AbortCodes.UNKNOWN_GIFT_CODE:
                    I[t] = s.set("revoked", !0);
                    break;
                case S.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    I[t] = s.set("uses", s.maxUses)
            }
        },
        GIFT_CODE_REVOKE_SUCCESS: function(e) {
            let {
                code: t
            } = e;
            delete I[t];
            let i = C[t];
            null != i && (i.stop(), delete C[t]), !T.includes(t) && (T = [...T, t])
        },
        GIFT_CODE_CREATE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            N(t)
        },
        GIFT_CODES_FETCH: function(e) {
            let {
                skuId: t,
                subscriptionPlanId: i
            } = e;
            A.add((0, m.makeComboId)(t, i))
        },
        GIFT_CODES_FETCH_SUCCESS: function(e) {
            let {
                giftCodes: t,
                skuId: i,
                subscriptionPlanId: s
            } = e;
            t.forEach(N);
            let n = (0, m.makeComboId)(i, s);
            R[n] = Date.now(), A.delete(n)
        },
        GIFT_CODES_FETCH_FAILURE: function(e) {
            let {
                skuId: t,
                subscriptionPlanId: i
            } = e;
            A.delete((0, m.makeComboId)(t, i))
        },
        MESSAGE_CREATE: D,
        MESSAGE_UPDATE: D,
        LOCAL_MESSAGES_LOADED: U,
        LOAD_MESSAGES_SUCCESS: U,
        LOAD_MESSAGES_AROUND_SUCCESS: U,
        LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => y(e))
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => y(e))
        },
        SEARCH_FINISH: function(e) {
            e.messages.forEach(e => {
                e.forEach(e => y(e))
            })
        },
        GIFT_CODE_UPDATE: function(e) {
            let {
                uses: t,
                code: i
            } = e, s = I[i];
            null != s && (I[i] = s.set("uses", Math.max(s.uses, t)))
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e;
            (0, p.getMessagesFromGuildFeedFetch)(t).forEach(e => y(e))
        },
        LOAD_THREADS_SUCCESS: x,
        LOAD_ARCHIVED_THREADS_SUCCESS: x,
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            Object.values(t).map(e => {
                let {
                    first_message: t
                } = e;
                return null != t && y(t)
            })
        }
    });
    t.default = w
}