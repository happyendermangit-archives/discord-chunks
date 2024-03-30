function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("56300"),
        i = n("898511"),
        a = n("29570"),
        u = n("622780"),
        s = n("471559"),
        l = n("453367"),
        c = n("567495"),
        f = n("348380"),
        d = n("77417"),
        _ = n("51181"),
        E = n("158201"),
        p = n("208454"),
        m = n("830721"),
        y = n("718397"),
        I = n("160463"),
        h = n("951066"),
        O = n("720876"),
        T = n("500216"),
        S = n("667039"),
        v = n("246741"),
        g = n("868615"),
        A = n("23383");

    function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function N(e) {
        var t = e.disabled,
            n = e.channel,
            o = f.default.useExperiment({
                location: "dc120b_1"
            }, {
                autoTrackExposure: !1
            }).enabled,
            i = (0, f.useIsSeasonalGiftingActive)();
        return r.useEffect(function() {
            i && f.default.trackExposure({
                location: "dc120b_2"
            })
        }, [i]), o && i ? r.createElement(T.default, {
            disabled: t,
            channel: n
        }) : r.createElement(h.default, {
            disabled: t,
            channel: n
        })
    }
    t.default = r.memo(function(e) {
        var t, n, f, h, T, R, C, P, D, L, M = e.type,
            U = e.disabled,
            w = e.channel,
            k = e.handleSubmit,
            G = e.isEmpty,
            B = (0, i.useStateFromStores)([u.default], function() {
                return u.default.isSubmitButtonEnabled
            }),
            j = (0, i.useStateFromStores)([_.default], function() {
                return _.default.getStickerPreview(w.id, M.drafts.type)
            }),
            F = null != j && j.length > 0,
            V = (0, i.useStateFromStores)([E.default], function() {
                return E.default.getUploads(w.id, M.drafts.type)
            }),
            H = (0, i.useStateFromStoresObject)([s.default], function() {
                return {
                    activeCommand: s.default.getActiveCommand(w.id),
                    activeCommandOption: s.default.getActiveOption(w.id)
                }
            }),
            x = H.activeCommand,
            Y = H.activeCommandOption,
            W = l.default.useExperiment({
                location: "dc120b_3"
            }, {
                autoTrackExposure: !1
            }).paymentsBlocked,
            K = [],
            z = d.default.getCurrentConfig({
                location: "dc120b_4"
            }, {
                autoTrackExposure: !1
            }).enabled,
            X = p.default.getCurrentUser(),
            q = null !== (R = (0, i.useStateFromStores)([c.default], function() {
                return z && m.default.isPremiumExactly(X, g.PremiumTypes.TIER_2) ? c.default.getReferralsRemaining() : 0
            })) && void 0 !== R ? R : 0,
            Q = (0, i.useStateFromStores)([c.default], function() {
                if (!w.isDM() || void 0 === w.recipients || w.recipients.length > 1 || !z) return !1;
                var e = w.recipients[0];
                return c.default.getSentUserIds().includes(e)
            });
        var J = (t = (0, i.useStateFromStoresArray)([c.default, p.default], function() {
                var e = [!1, !1];
                if (!w.isDM() || void 0 === w.recipients || w.recipients.length > 1) return e;
                var t = w.recipients[0],
                    n = p.default.getUser(t);
                if (null == n || n.bot) return e;
                var r = Q || q > 0,
                    o = c.default.getRecipientEligibility(t);
                return [z && r && o, o]
            }), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            Z = J[0],
            $ = J[1];
        return (!o.isMobile && (w.isDM() && (null === (C = M.gifts) || void 0 === C ? void 0 : C.button) != null && null == x && (m.default.isPremiumExactly(X, g.PremiumTypes.TIER_2) && $ && d.default.trackExposure({
            location: "dc120b_5"
        }), Z && K.push(r.createElement(O.default, {
            key: "referral",
            disabled: U,
            referralsRemaining: q,
            channel: w,
            isResending: Q
        }))), (null === (P = M.gifts) || void 0 === P ? void 0 : P.button) != null && null == x && !W && K.push(r.createElement(N, {
            key: "gift",
            disabled: U,
            channel: w
        })), (null === (D = M.gifs) || void 0 === D ? void 0 : D.button) != null && null == x && K.push(r.createElement(I.default, {
            key: "gif",
            disabled: U,
            type: M
        })), (null === (L = M.stickers) || void 0 === L ? void 0 : L.button) != null && null == x && K.push(r.createElement(v.default, {
            key: "sticker",
            disabled: U,
            type: M
        }))), (null === (f = M.emojis) || void 0 === f ? void 0 : f.button) != null && (null == x || null != Y && Y.type !== a.ApplicationCommandOptionType.ATTACHMENT) && K.push(r.createElement(y.default, {
            key: "emoji",
            disabled: U,
            type: M
        })), (null === (h = M.submit) || void 0 === h ? void 0 : h.button) != null && ((null === (T = M.submit) || void 0 === T ? void 0 : T.ignorePreference) || B) && K.push(r.createElement(S.default, {
            key: "submit",
            onClick: k,
            disabled: U || 0 === V.length && G && !F
        })), 0 === K.length) ? null : r.createElement("div", {
            className: A.buttons
        }, K)
    })
}