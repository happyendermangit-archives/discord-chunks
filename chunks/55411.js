function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return U
        }
    }), i("222007");
    var s = i("917351"),
        n = i.n(s),
        l = i("866227"),
        a = i.n(l),
        r = i("446674"),
        u = i("862337"),
        d = i("913144"),
        o = i("569272"),
        c = i("560208"),
        E = i("671484"),
        _ = i("659632"),
        f = i("49111");
    let C = {},
        h = {},
        S = [],
        m = [],
        p = [],
        I = new Set,
        g = {},
        R = {},
        T = new Set;

    function A(e) {
        let t = E.default.createFromServer(e),
            i = t.code;
        if (null != h[i]) h[i] = h[i].merge(t);
        else if (h[i] = t, null != t.expiresAt) {
            let e = new u.Timeout;
            C[i] = e,
                function e(t) {
                    let i = h[t];
                    if (null == i || null == i.expiresAt) return;
                    let s = i.expiresAt.valueOf() - a().valueOf();
                    if (s <= 0) delete h[t], delete C[t], x.emitChange();
                    else {
                        let i = C[t];
                        if (null == i) return;
                        i.start(Math.min(2147483647, s), () => e(t))
                    }
                }(i)
        }
    }

    function O(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t && !T.has(e.channel_id)) return !1;
        let i = (0, _.isGiftCodeEmbed)(e) ? (0, _.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, _.findGiftCodes)(e.content);
        return 0 !== i.length && (i.forEach(e => {
            !S.includes(e) && !p.includes(e) && (v({
                code: e
            }), d.default.wait(() => o.default.resolveGiftCode(e, !1, !0).catch(f.NOOP_NULL)))
        }), !1)
    }

    function v(e) {
        let {
            code: t
        } = e;
        !S.includes(t) && (S = [...S, t])
    }

    function N(e) {
        let {
            message: t
        } = e;
        return O(t, !0)
    }

    function L(e) {
        let {
            channelId: t,
            messages: i
        } = e;
        T.add(t), i.forEach(e => O(e, !0))
    }

    function D(e) {
        let {
            firstMessages: t
        } = e;
        if (null == t) return !1;
        null == t || t.forEach(e => O(e))
    }
    class b extends r.default.Store {
        get(e) {
            let t = h[e];
            return null == t || t.isExpired() ? null : t
        }
        getError(e) {
            return null != e ? R[e] : null
        }
        getForGifterSKUAndPlan(e, t, i) {
            return n.values(h).filter(s => s.userId === e && s.skuId === t && (null == i || s.subscriptionPlanId === i) && !s.isExpired())
        }
        getIsResolving(e) {
            return S.includes(e)
        }
        getIsResolved(e) {
            return p.includes(e)
        }
        getIsAccepting(e) {
            return m.includes(e)
        }
        getUserGiftCodesFetchingForSKUAndPlan(e, t) {
            return I.has((0, _.makeComboId)(e, t))
        }
        getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
            return g[(0, _.makeComboId)(e, t)]
        }
        getResolvingCodes() {
            return S
        }
        getResolvedCodes() {
            return p
        }
        getAcceptingCodes() {
            return m
        }
    }
    b.displayName = "GiftCodeStore";
    let x = new b(d.default, {
        CONNECTION_OPEN: function() {
            return T.clear(), !1
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            return null != t && T.add(t), !1
        },
        GIFT_CODE_RESOLVE: v,
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            return S = S.filter(e => e !== t.code), !p.includes(t.code) && (p = [...p, t.code]), A(t)
        },
        GIFT_CODE_RESOLVE_FAILURE: function(e) {
            let {
                code: t
            } = e;
            S = S.filter(e => e !== t), !p.includes(t) && (p = [...p, t])
        },
        GIFT_CODE_REDEEM: function(e) {
            let {
                code: t
            } = e;
            !m.includes(t) && (m = [...m, t])
        },
        GIFT_CODE_REDEEM_SUCCESS: function(e) {
            let {
                code: t
            } = e;
            m = m.filter(e => e !== t);
            let i = h[t];
            null != i && (h[t] = i.merge({
                redeemed: !0,
                uses: i.uses + 1
            }))
        },
        GIFT_CODE_REDEEM_FAILURE: function(e) {
            let {
                code: t,
                error: i
            } = e;
            m = m.filter(e => e !== t);
            let s = h[t];
            if (R[t] = i, null != s) switch (i.code) {
                case f.AbortCodes.UNKNOWN_GIFT_CODE:
                    h[t] = s.set("revoked", !0);
                    break;
                case f.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    h[t] = s.set("uses", s.maxUses)
            }
        },
        GIFT_CODE_REVOKE_SUCCESS: function(e) {
            let {
                code: t
            } = e;
            delete h[t];
            let i = C[t];
            null != i && (i.stop(), delete C[t]), !p.includes(t) && (p = [...p, t])
        },
        GIFT_CODE_CREATE_SUCCESS: function(e) {
            let {
                giftCode: t
            } = e;
            A(t)
        },
        GIFT_CODES_FETCH: function(e) {
            let {
                skuId: t,
                subscriptionPlanId: i
            } = e;
            I.add((0, _.makeComboId)(t, i))
        },
        GIFT_CODES_FETCH_SUCCESS: function(e) {
            let {
                giftCodes: t,
                skuId: i,
                subscriptionPlanId: s
            } = e;
            t.forEach(A);
            let n = (0, _.makeComboId)(i, s);
            g[n] = Date.now(), I.delete(n)
        },
        GIFT_CODES_FETCH_FAILURE: function(e) {
            let {
                skuId: t,
                subscriptionPlanId: i
            } = e;
            I.delete((0, _.makeComboId)(t, i))
        },
        MESSAGE_CREATE: N,
        MESSAGE_UPDATE: N,
        LOCAL_MESSAGES_LOADED: L,
        LOAD_MESSAGES_SUCCESS: L,
        LOAD_MESSAGES_AROUND_SUCCESS: L,
        LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => O(e))
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => O(e))
        },
        SEARCH_FINISH: function(e) {
            e.messages.forEach(e => {
                e.forEach(e => O(e))
            })
        },
        GIFT_CODE_UPDATE: function(e) {
            let {
                uses: t,
                code: i
            } = e, s = h[i];
            null != s && (h[i] = s.set("uses", Math.max(s.uses, t)))
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e;
            (0, c.getMessagesFromGuildFeedFetch)(t).forEach(e => O(e))
        },
        LOAD_THREADS_SUCCESS: D,
        LOAD_ARCHIVED_THREADS_SUCCESS: D,
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            Object.values(t).map(e => {
                let {
                    first_message: t
                } = e;
                return null != t && O(t)
            })
        }
    });
    var U = x
}