function(e, t, l) {
    "use strict";
    l.r(t), l("47120");
    var n, a, i, s, r = l("392711"),
        d = l.n(r),
        o = l("913527"),
        u = l.n(o),
        c = l("442837"),
        _ = l("846519"),
        E = l("570140"),
        f = l("533307"),
        C = l("900489"),
        S = l("590783"),
        m = l("669079"),
        h = l("981631");
    let p = {},
        I = {},
        T = [],
        R = [],
        A = [],
        g = new Set,
        v = {},
        O = {},
        N = new Set;

    function y(e) {
        let t = S.default.createFromServer(e),
            l = t.code;
        if (null != I[l]) I[l] = I[l].merge(t);
        else if (I[l] = t, null != t.expiresAt) {
            let e = new _.Timeout;
            p[l] = e,
                function e(t) {
                    let l = I[t];
                    if (null == l || null == l.expiresAt) return;
                    let n = l.expiresAt.valueOf() - u()().valueOf();
                    if (n <= 0) delete I[t], delete p[t], G.emitChange();
                    else {
                        let l = p[t];
                        if (null == l) return;
                        l.start(Math.min(2147483647, n), () => e(t))
                    }
                }(l)
        }
    }

    function L(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !N.has(e.channel_id)) return !1;
        let l = (0, m.isGiftCodeEmbed)(e) ? (0, m.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, m.findGiftCodes)(e.content);
        return 0 !== l.length && (l.forEach(e => {
            !T.includes(e) && !A.includes(e) && (D({
                code: e
            }), E.default.wait(() => f.default.resolveGiftCode(e, !1, !0).catch(h.NOOP_NULL)))
        }), !1)
    }

    function D(e) {
        let {
            code: t
        } = e;
        !T.includes(t) && (T = [...T, t])
    }

    function b(e) {
        let {
            message: t
        } = e;
        return L(t, !0)
    }

    function U(e) {
        let {
            channelId: t,
            messages: l
        } = e;
        N.add(t), l.forEach(e => L(e, !0))
    }

    function w(e) {
        let {
            firstMessages: t
        } = e;
        if (null == t) return !1;
        null == t || t.forEach(e => L(e))
    }
    class F extends(n = c.default.Store) {
        get(e) {
            let t = I[e];
            return null == t || t.isExpired() ? null : t
        }
        getError(e) {
            return null != e ? O[e] : null
        }
        getForGifterSKUAndPlan(e, t, l) {
            return d().values(I).filter(n => n.userId === e && n.skuId === t && (null == l || n.subscriptionPlanId === l) && !n.isExpired())
        }
        getIsResolving(e) {
            return T.includes(e)
        }
        getIsResolved(e) {
            return A.includes(e)
        }
        getIsAccepting(e) {
            return R.includes(e)
        }
        getUserGiftCodesFetchingForSKUAndPlan(e, t) {
            return g.has((0, m.makeComboId)(e, t))
        }
        getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
            return v[(0, m.makeComboId)(e, t)]
        }
        getResolvingCodes() {
            return T
        }
        getResolvedCodes() {
            return A
        }
        getAcceptingCodes() {
            return R
        }
    }
    s = "GiftCodeStore", (i = "displayName") in(a = F) ? Object.defineProperty(a, i, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[i] = s;
    let G = new F(E.default, {
        CONNECTION_OPEN: function() {
            return N.clear(), !1
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return null != t && N.add(t), !1
        },
        GIFT_CODE_RESOLVE: D,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            return T = T.filter(e => e !== t.code), !A.includes(t.code) && (A = [...A, t.code]), y(t)
        },
        GIFT_CODE_RESOLVE_FAILURE: function(e) {
            let {
                code: t
            } = e;
            T = T.filter(e => e !== t), !A.includes(t) && (A = [...A, t])
        },
        GIFT_CODE_REDEEM: function(e) {
            let {
                code: t
            } = e;
            !R.includes(t) && (R = [...R, t])
        },
        GIFT_CODE_REDEEM_SUCCESS: function(e) {
            let {
                code: t
            } = e;
            R = R.filter(e => e !== t);
            let l = I[t];
            null != l && (I[t] = l.merge({
                redeemed: !0,
                uses: l.uses + 1
            }))
        },
        GIFT_CODE_REDEEM_FAILURE: function(e) {
            let {
                code: t,
                error: l
            } = e;
            R = R.filter(e => e !== t);
            let n = I[t];
            if (O[t] = l, null != n) switch (l.code) {
                case h.AbortCodes.UNKNOWN_GIFT_CODE:
                    I[t] = n.set("revoked", !0);
                    break;
                case h.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    I[t] = n.set("uses", n.maxUses)
            }
        },
        GIFT_CODE_REVOKE_SUCCESS: function(e) {
            let {
                code: t
            } = e;
            delete I[t];
            let l = p[t];
            null != l && (l.stop(), delete p[t]), !A.includes(t) && (A = [...A, t])
        },
        GIFT_CODE_CREATE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            y(t)
        },
        GIFT_CODES_FETCH: function(e) {
            let {
                skuId: t,
                subscriptionPlanId: l
            } = e;
            g.add((0, m.makeComboId)(t, l))
        },
        GIFT_CODES_FETCH_SUCCESS: function(e) {
            let {
                giftCodes: t,
                skuId: l,
                subscriptionPlanId: n
            } = e;
            t.forEach(y);
            let a = (0, m.makeComboId)(l, n);
            v[a] = Date.now(), g.delete(a)
        },
        GIFT_CODES_FETCH_FAILURE: function(e) {
            let {
                skuId: t,
                subscriptionPlanId: l
            } = e;
            g.delete((0, m.makeComboId)(t, l))
        },
        MESSAGE_CREATE: b,
        MESSAGE_UPDATE: b,
        LOCAL_MESSAGES_LOADED: U,
        LOAD_MESSAGES_SUCCESS: U,
        LOAD_MESSAGES_AROUND_SUCCESS: U,
        LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => L(e))
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => L(e))
        },
        SEARCH_FINISH: function(e) {
            e.messages.forEach(e => {
                e.forEach(e => L(e))
            })
        },
        GIFT_CODE_UPDATE: function(e) {
            let {
                uses: t,
                code: l
            } = e, n = I[l];
            null != n && (I[l] = n.set("uses", Math.max(n.uses, t)))
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e;
            (0, C.getMessagesFromGuildFeedFetch)(t).forEach(e => L(e))
        },
        LOAD_THREADS_SUCCESS: w,
        LOAD_ARCHIVED_THREADS_SUCCESS: w,
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            Object.values(t).map(e => {
                let {
                    first_message: t
                } = e;
                return null != t && L(t)
            })
        }
    });
    t.default = G
}