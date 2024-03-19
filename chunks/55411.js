function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        }
    }), n("222007");
    var i = n("917351"),
        l = n.n(i),
        s = n("866227"),
        r = n.n(s),
        a = n("446674"),
        u = n("862337"),
        d = n("913144"),
        o = n("569272"),
        c = n("560208"),
        E = n("671484"),
        _ = n("659632"),
        f = n("49111");
    let h = {},
        S = {},
        m = [],
        C = [],
        p = [],
        I = new Set,
        g = {},
        v = {},
        R = new Set;

    function T(e) {
        let t = E.default.createFromServer(e),
            n = t.code;
        if (null != S[n]) S[n] = S[n].merge(t);
        else if (S[n] = t, null != t.expiresAt) {
            let e = new u.Timeout;
            h[n] = e,
                function e(t) {
                    let n = S[t];
                    if (null == n || null == n.expiresAt) return;
                    let i = n.expiresAt.valueOf() - r().valueOf();
                    if (i <= 0) delete S[t], delete h[t], b.emitChange();
                    else {
                        let n = h[t];
                        if (null == n) return;
                        n.start(Math.min(2147483647, i), () => e(t))
                    }
                }(n)
        }
    }

    function A(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !R.has(e.channel_id)) return !1;
        let n = (0, _.isGiftCodeEmbed)(e) ? (0, _.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, _.findGiftCodes)(e.content);
        return 0 !== n.length && (n.forEach(e => {
            !m.includes(e) && !p.includes(e) && (O({
                code: e
            }), d.default.wait(() => o.default.resolveGiftCode(e, !1, !0).catch(f.NOOP_NULL)))
        }), !1)
    }

    function O(e) {
        let {
            code: t
        } = e;
        !m.includes(t) && (m = [...m, t])
    }

    function N(e) {
        let {
            message: t
        } = e;
        return A(t, !0)
    }

    function D(e) {
        let {
            channelId: t,
            messages: n
        } = e;
        R.add(t), n.forEach(e => A(e, !0))
    }

    function L(e) {
        let {
            firstMessages: t
        } = e;
        if (null == t) return !1;
        null == t || t.forEach(e => A(e))
    }
    class x extends a.default.Store {
        get(e) {
            let t = S[e];
            return null == t || t.isExpired() ? null : t
        }
        getError(e) {
            return null != e ? v[e] : null
        }
        getForGifterSKUAndPlan(e, t, n) {
            return l.values(S).filter(i => i.userId === e && i.skuId === t && (null == n || i.subscriptionPlanId === n) && !i.isExpired())
        }
        getIsResolving(e) {
            return m.includes(e)
        }
        getIsResolved(e) {
            return p.includes(e)
        }
        getIsAccepting(e) {
            return C.includes(e)
        }
        getUserGiftCodesFetchingForSKUAndPlan(e, t) {
            return I.has((0, _.makeComboId)(e, t))
        }
        getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
            return g[(0, _.makeComboId)(e, t)]
        }
        getResolvingCodes() {
            return m
        }
        getResolvedCodes() {
            return p
        }
        getAcceptingCodes() {
            return C
        }
    }
    x.displayName = "GiftCodeStore";
    let b = new x(d.default, {
        CONNECTION_OPEN: function() {
            return R.clear(), !1
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return null != t && R.add(t), !1
        },
        GIFT_CODE_RESOLVE: O,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            return m = m.filter(e => e !== t.code), !p.includes(t.code) && (p = [...p, t.code]), T(t)
        },
        GIFT_CODE_RESOLVE_FAILURE: function(e) {
            let {
                code: t
            } = e;
            m = m.filter(e => e !== t), !p.includes(t) && (p = [...p, t])
        },
        GIFT_CODE_REDEEM: function(e) {
            let {
                code: t
            } = e;
            !C.includes(t) && (C = [...C, t])
        },
        GIFT_CODE_REDEEM_SUCCESS: function(e) {
            let {
                code: t
            } = e;
            C = C.filter(e => e !== t);
            let n = S[t];
            null != n && (S[t] = n.merge({
                redeemed: !0,
                uses: n.uses + 1
            }))
        },
        GIFT_CODE_REDEEM_FAILURE: function(e) {
            let {
                code: t,
                error: n
            } = e;
            C = C.filter(e => e !== t);
            let i = S[t];
            if (v[t] = n, null != i) switch (n.code) {
                case f.AbortCodes.UNKNOWN_GIFT_CODE:
                    S[t] = i.set("revoked", !0);
                    break;
                case f.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    S[t] = i.set("uses", i.maxUses)
            }
        },
        GIFT_CODE_REVOKE_SUCCESS: function(e) {
            let {
                code: t
            } = e;
            delete S[t];
            let n = h[t];
            null != n && (n.stop(), delete h[t]), !p.includes(t) && (p = [...p, t])
        },
        GIFT_CODE_CREATE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            T(t)
        },
        GIFT_CODES_FETCH: function(e) {
            let {
                skuId: t,
                subscriptionPlanId: n
            } = e;
            I.add((0, _.makeComboId)(t, n))
        },
        GIFT_CODES_FETCH_SUCCESS: function(e) {
            let {
                giftCodes: t,
                skuId: n,
                subscriptionPlanId: i
            } = e;
            t.forEach(T);
            let l = (0, _.makeComboId)(n, i);
            g[l] = Date.now(), I.delete(l)
        },
        GIFT_CODES_FETCH_FAILURE: function(e) {
            let {
                skuId: t,
                subscriptionPlanId: n
            } = e;
            I.delete((0, _.makeComboId)(t, n))
        },
        MESSAGE_CREATE: N,
        MESSAGE_UPDATE: N,
        LOCAL_MESSAGES_LOADED: D,
        LOAD_MESSAGES_SUCCESS: D,
        LOAD_MESSAGES_AROUND_SUCCESS: D,
        LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => A(e))
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => A(e))
        },
        SEARCH_FINISH: function(e) {
            e.messages.forEach(e => {
                e.forEach(e => A(e))
            })
        },
        GIFT_CODE_UPDATE: function(e) {
            let {
                uses: t,
                code: n
            } = e, i = S[n];
            null != i && (S[n] = i.set("uses", Math.max(i.uses, t)))
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e;
            (0, c.getMessagesFromGuildFeedFetch)(t).forEach(e => A(e))
        },
        LOAD_THREADS_SUCCESS: L,
        LOAD_ARCHIVED_THREADS_SUCCESS: L,
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            Object.values(t).map(e => {
                let {
                    first_message: t
                } = e;
                return null != t && A(t)
            })
        }
    });
    var F = b
}