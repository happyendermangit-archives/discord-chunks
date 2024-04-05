function(e, t, l) {
    "use strict";
    l.r(t), l("47120");
    var a, n, i, s, r = l("392711"),
        d = l.n(r),
        u = l("913527"),
        o = l.n(u),
        c = l("442837"),
        E = l("846519"),
        _ = l("570140"),
        f = l("533307"),
        C = l("900489"),
        S = l("590783"),
        h = l("669079"),
        m = l("981631");
    let I = {},
        R = {},
        p = [],
        T = [],
        A = [],
        O = new Set,
        g = {},
        v = {},
        N = new Set;

    function L(e) {
        let t = S.default.createFromServer(e),
            l = t.code;
        if (null != R[l]) R[l] = R[l].merge(t);
        else if (R[l] = t, null != t.expiresAt) {
            let e = new E.Timeout;
            I[l] = e,
                function e(t) {
                    let l = R[t];
                    if (null == l || null == l.expiresAt) return;
                    let a = l.expiresAt.valueOf() - o()().valueOf();
                    if (a <= 0) delete R[t], delete I[t], M.emitChange();
                    else {
                        let l = I[t];
                        if (null == l) return;
                        l.start(Math.min(2147483647, a), () => e(t))
                    }
                }(l)
        }
    }

    function D(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !N.has(e.channel_id)) return !1;
        let l = (0, h.isGiftCodeEmbed)(e) ? (0, h.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, h.findGiftCodes)(e.content);
        return 0 !== l.length && (l.forEach(e => {
            !p.includes(e) && !A.includes(e) && (F({
                code: e
            }), _.default.wait(() => f.default.resolveGiftCode(e, !1, !0).catch(m.NOOP_NULL)))
        }), !1)
    }

    function F(e) {
        let {
            code: t
        } = e;
        !p.includes(t) && (p = [...p, t])
    }

    function G(e) {
        let {
            message: t
        } = e;
        return D(t, !0)
    }

    function U(e) {
        let {
            channelId: t,
            messages: l
        } = e;
        N.add(t), l.forEach(e => D(e, !0))
    }

    function x(e) {
        let {
            firstMessages: t
        } = e;
        if (null == t) return !1;
        null == t || t.forEach(e => D(e))
    }
    class y extends(a = c.default.Store) {
        get(e) {
            let t = R[e];
            return null == t || t.isExpired() ? null : t
        }
        getError(e) {
            return null != e ? v[e] : null
        }
        getForGifterSKUAndPlan(e, t, l) {
            return d().values(R).filter(a => a.userId === e && a.skuId === t && (null == l || a.subscriptionPlanId === l) && !a.isExpired())
        }
        getIsResolving(e) {
            return p.includes(e)
        }
        getIsResolved(e) {
            return A.includes(e)
        }
        getIsAccepting(e) {
            return T.includes(e)
        }
        getUserGiftCodesFetchingForSKUAndPlan(e, t) {
            return O.has((0, h.makeComboId)(e, t))
        }
        getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
            return g[(0, h.makeComboId)(e, t)]
        }
        getResolvingCodes() {
            return p
        }
        getResolvedCodes() {
            return A
        }
        getAcceptingCodes() {
            return T
        }
    }
    s = "GiftCodeStore", (i = "displayName") in(n = y) ? Object.defineProperty(n, i, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[i] = s;
    let M = new y(_.default, {
        CONNECTION_OPEN: function() {
            return N.clear(), !1
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return null != t && N.add(t), !1
        },
        GIFT_CODE_RESOLVE: F,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            return p = p.filter(e => e !== t.code), !A.includes(t.code) && (A = [...A, t.code]), L(t)
        },
        GIFT_CODE_RESOLVE_FAILURE: function(e) {
            let {
                code: t
            } = e;
            p = p.filter(e => e !== t), !A.includes(t) && (A = [...A, t])
        },
        GIFT_CODE_REDEEM: function(e) {
            let {
                code: t
            } = e;
            !T.includes(t) && (T = [...T, t])
        },
        GIFT_CODE_REDEEM_SUCCESS: function(e) {
            let {
                code: t
            } = e;
            T = T.filter(e => e !== t);
            let l = R[t];
            null != l && (R[t] = l.merge({
                redeemed: !0,
                uses: l.uses + 1
            }))
        },
        GIFT_CODE_REDEEM_FAILURE: function(e) {
            let {
                code: t,
                error: l
            } = e;
            T = T.filter(e => e !== t);
            let a = R[t];
            if (v[t] = l, null != a) switch (l.code) {
                case m.AbortCodes.UNKNOWN_GIFT_CODE:
                    R[t] = a.set("revoked", !0);
                    break;
                case m.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    R[t] = a.set("uses", a.maxUses)
            }
        },
        GIFT_CODE_REVOKE_SUCCESS: function(e) {
            let {
                code: t
            } = e;
            delete R[t];
            let l = I[t];
            null != l && (l.stop(), delete I[t]), !A.includes(t) && (A = [...A, t])
        },
        GIFT_CODE_CREATE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            L(t)
        },
        GIFT_CODES_FETCH: function(e) {
            let {
                skuId: t,
                subscriptionPlanId: l
            } = e;
            O.add((0, h.makeComboId)(t, l))
        },
        GIFT_CODES_FETCH_SUCCESS: function(e) {
            let {
                giftCodes: t,
                skuId: l,
                subscriptionPlanId: a
            } = e;
            t.forEach(L);
            let n = (0, h.makeComboId)(l, a);
            g[n] = Date.now(), O.delete(n)
        },
        GIFT_CODES_FETCH_FAILURE: function(e) {
            let {
                skuId: t,
                subscriptionPlanId: l
            } = e;
            O.delete((0, h.makeComboId)(t, l))
        },
        MESSAGE_CREATE: G,
        MESSAGE_UPDATE: G,
        LOCAL_MESSAGES_LOADED: U,
        LOAD_MESSAGES_SUCCESS: U,
        LOAD_MESSAGES_AROUND_SUCCESS: U,
        LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => D(e))
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => D(e))
        },
        SEARCH_FINISH: function(e) {
            e.messages.forEach(e => {
                e.forEach(e => D(e))
            })
        },
        GIFT_CODE_UPDATE: function(e) {
            let {
                uses: t,
                code: l
            } = e, a = R[l];
            null != a && (R[l] = a.set("uses", Math.max(a.uses, t)))
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e;
            (0, C.getMessagesFromGuildFeedFetch)(t).forEach(e => D(e))
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
                return null != t && D(t)
            })
        }
    });
    t.default = M
}