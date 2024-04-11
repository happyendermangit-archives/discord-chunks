function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return L
        },
        useCollectibleRewardModal: function() {
            return v
        }
    }), n("773603"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("911765"),
        a = n("979554"),
        o = n("442837"),
        l = n("481060"),
        u = n("809206"),
        d = n("607070"),
        _ = n("100527"),
        c = n("204418"),
        E = n("1585"),
        I = n("583434"),
        T = n("530618"),
        f = n("164946"),
        S = n("166625"),
        A = n("25990"),
        h = n("594174"),
        m = n("810090"),
        N = n("272008"),
        O = n("497505"),
        p = n("918701"),
        R = n("675654"),
        C = n("689938"),
        g = n("174415");

    function L(e) {
        let {
            transitionState: t,
            onClose: n,
            quest: a,
            location: u,
            reward: _,
            decoration: c,
            onUseNow: E
        } = e, I = r.useRef(null), [f, S] = r.useState(null), A = r.useRef(new s.Environment), m = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), C = (0, o.useStateFromStores)([h.default], () => h.default.getCurrentUser()), L = (0, p.getHeroAssetUrl)(a), [v, M] = r.useState(!1);
        r.useEffect(() => {
            var e;
            (null === (e = a.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && (0, N.claimQuestReward)(a.id, O.QuestRewardCodePlatforms.CROSS_PLATFORM, u)
        }, [a, u]);
        r.useEffect(() => () => M(!1), []);
        let y = null == C;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(s.ConfettiCanvas, {
                ref: S,
                className: g.confettiCanvas,
                environment: A.current
            }), (0, i.jsx)("div", {
                ref: I,
                children: (0, i.jsx)(l.ModalRoot, {
                    transitionState: t,
                    size: l.ModalSize.DYNAMIC,
                    className: g.rootContainer,
                    hideShadow: !0,
                    children: y ? (0, i.jsx)(l.Spinner, {
                        className: g.spinner,
                        type: l.Spinner.Type.SPINNING_CIRCLE
                    }) : (0, i.jsx)(D, {
                        user: C,
                        primaryColor: a.config.colors.primary,
                        secondaryColor: a.config.colors.secondary,
                        decoration: c,
                        decorationName: _.messages.name,
                        backgroundUrl: L,
                        isSaving: v,
                        onClose: n,
                        onConfirm: () => {
                            M(!0), E().finally(n)
                        }
                    })
                })
            }), !m && !y && (0, i.jsx)(T.default, {
                confettiTarget: I.current,
                confettiCanvas: f,
                sprites: R.COMMON_CONFETTI_SPRITES,
                colors: R.COMMON_CONFETTI_COLORS
            })]
        })
    }

    function D(e) {
        let {
            user: t,
            decoration: n,
            decorationName: r,
            primaryColor: s,
            secondaryColor: a,
            backgroundUrl: o,
            isSaving: u,
            onClose: d,
            onConfirm: _
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: g.headerContainer,
                children: [(0, i.jsx)(m.default, {
                    className: g.headerBackground,
                    autoPlay: !1,
                    loop: !1,
                    muted: !0,
                    playsInline: !0,
                    controls: !1,
                    poster: o
                }), (0, i.jsxs)("div", {
                    className: g.headerForeground,
                    children: [(0, i.jsx)("div", {
                        className: g.previewContainer,
                        children: (0, i.jsx)(c.default, {
                            user: t,
                            guildId: null,
                            avatarDecorationOverride: n
                        })
                    }), (0, i.jsx)(l.ModalCloseButton, {
                        className: g.close,
                        withCircleBackground: !0,
                        onClick: d
                    })]
                })]
            }), (0, i.jsx)(l.ModalFooter, {
                className: g.footerContainer,
                separator: !1,
                children: (0, i.jsxs)("div", {
                    className: g.gradient,
                    style: {
                        backgroundImage: "linear-gradient(180deg, ".concat(s, ", ").concat(a, ")")
                    },
                    children: [(0, i.jsx)(l.Heading, {
                        variant: "heading-lg/bold",
                        color: "always-white",
                        className: g.heading,
                        children: C.default.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER
                    }), (0, i.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: g.text,
                        children: C.default.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY.format({
                            decorationName: r
                        })
                    }), (0, i.jsx)(l.Button, {
                        submitting: u,
                        onClick: _,
                        children: C.default.Messages.COLLECTIBLES_USE_NOW
                    })]
                })
            })]
        })
    }

    function v(e, t) {
        var s;
        let o = r.useMemo(() => {
                var t;
                return null !== (t = null == e ? void 0 : e.config.rewardsConfig.rewards.find(p.isCollectibleReward)) && void 0 !== t ? t : null
            }, [e]),
            [d, c] = function(e) {
                let {
                    product: t,
                    isFetching: n
                } = (0, I.useFetchCollectiblesProduct)(e), {} = (0, S.default)({}), i = r.useMemo(() => {
                    if (null == t || n) return null;
                    let e = t.items.find(e => e.type === a.CollectiblesItemType.AVATAR_DECORATION);
                    return null == e ? null : e
                }, [t, n]);
                return [i, () => {
                    if (null == i) return Promise.reject();
                    (0, u.setPendingAvatarDecoration)(i);
                    let e = A.default.getAllPending(),
                        t = (0, f.getAccountUpdateForUpdateRequest)(e);
                    return (0, u.saveAccountChanges)(t).finally(u.resetPendingAccountChanges)
                }]
            }(null !== (s = null == o ? void 0 : o.skuId) && void 0 !== s ? s : null);
        return () => {
            var r;
            return null == e || null == o || null == d ? null : ((null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null ? (0, E.openAvatarDecorationModal)({
                initialSelectedDecoration: d,
                analyticsLocations: [_.default.USER_SETTINGS_GIFT_INVENTORY]
            }) : (0, l.openModalLazy)(async () => {
                let {
                    default: r
                } = await Promise.resolve().then(n.bind(n, "920916"));
                return n => (0, i.jsx)(r, {
                    ...n,
                    quest: e,
                    location: t,
                    reward: o,
                    decoration: d,
                    onUseNow: c
                })
            }), null)
        }
    }
}