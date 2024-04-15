function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        },
        useCollectibleRewardModal: function() {
            return y
        }
    }), n("773603"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("236471"),
        a = n("979554"),
        o = n("442837"),
        l = n("481060"),
        u = n("809206"),
        d = n("607070"),
        _ = n("235400"),
        c = n("204418"),
        E = n("583434"),
        I = n("530618"),
        T = n("164946"),
        f = n("166625"),
        S = n("25990"),
        A = n("594174"),
        h = n("810090"),
        m = n("272008"),
        N = n("497505"),
        O = n("918701"),
        p = n("114732"),
        R = n("675654"),
        C = n("689938"),
        g = n("174415");

    function L() {
        let e = S.default.getAllPending(),
            t = (0, T.getAccountUpdateForUpdateRequest)(e);
        return (0, u.saveAccountChanges)(t).finally(u.resetPendingAccountChanges)
    }

    function D(e) {
        let {
            transitionState: t,
            onClose: n,
            quest: a,
            location: u,
            reward: _,
            decoration: c,
            onUseNow: E
        } = e, T = r.useRef(null), [f, S] = r.useState(null), h = r.useRef(new s.Environment), C = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), L = (0, o.useStateFromStores)([A.default], () => A.default.getCurrentUser()), D = (0, O.getHeroAssetUrl)(a), [M, y] = r.useState("loading");
        r.useEffect(() => {
            var e;
            (null === (e = a.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && (0, m.claimQuestReward)(a.id, N.QuestRewardCodePlatforms.CROSS_PLATFORM, u).then(() => y("claimed")).catch(() => y("error"))
        }, [a, u]);
        let P = null == L || null == c || "loading" === M;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(s.ConfettiCanvas, {
                ref: S,
                className: g.confettiCanvas,
                environment: h.current
            }), (0, i.jsx)("div", {
                ref: T,
                children: (0, i.jsx)(l.ModalRoot, {
                    transitionState: t,
                    size: l.ModalSize.DYNAMIC,
                    className: g.rootContainer,
                    hideShadow: !0,
                    children: P ? (0, i.jsx)("div", {
                        className: g.spinnerContainer,
                        children: (0, i.jsx)(l.Spinner, {
                            className: g.spinner,
                            type: l.Spinner.Type.SPINNING_CIRCLE
                        })
                    }) : "error" === M ? (0, i.jsx)(p.default, {
                        onClose: n
                    }) : (0, i.jsx)(v, {
                        user: L,
                        primaryColor: a.config.colors.primary,
                        secondaryColor: a.config.colors.secondary,
                        decoration: c,
                        decorationName: _.messages.name,
                        backgroundUrl: D,
                        isSaving: "applying" === M,
                        onClose: n,
                        onConfirm: () => {
                            y("applying"), E().finally(n)
                        }
                    })
                })
            }), !C && "claimed" === M && (0, i.jsx)(I.default, {
                confettiTarget: T.current,
                confettiCanvas: f,
                sprites: R.COMMON_CONFETTI_SPRITES,
                colors: R.COMMON_CONFETTI_COLORS
            })]
        })
    }

    function v(e) {
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
        return (0, i.jsxs)("div", {
            className: g.claimedRootContainer,
            children: [(0, i.jsxs)("div", {
                className: g.headerContainer,
                children: [(0, i.jsx)(h.default, {
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

    function M(e) {
        var t;
        let {
            quest: n,
            location: s,
            reward: o,
            onClose: l,
            transitionState: d
        } = e, [c, I] = function(e) {
            let {
                product: t,
                isFetching: n
            } = (0, E.useFetchCollectiblesProduct)(e), {} = (0, f.default)({}), i = r.useMemo(() => {
                if (null == t || n) return null;
                let e = t.items.find(e => e.type === a.CollectiblesItemType.AVATAR_DECORATION);
                return null == e ? null : e
            }, [t, n]);
            return [i, () => null == i ? Promise.reject() : ((0, u.setPendingAvatarDecoration)(i), L())]
        }(o.skuId);
        return (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? (0, i.jsx)(_.default, {
            transitionState: d,
            onCloseModal: L,
            onClose: l,
            analyticsLocations: [],
            initialSelectedDecoration: c
        }) : (0, i.jsx)(D, {
            onClose: l,
            transitionState: d,
            quest: n,
            location: s,
            reward: o,
            decoration: c,
            onUseNow: I
        })
    }

    function y(e, t) {
        let s = r.useMemo(() => {
            var t;
            return null !== (t = null == e ? void 0 : e.config.rewardsConfig.rewards.find(O.isCollectibleReward)) && void 0 !== t ? t : null
        }, [e]);
        return () => null == e || null == s ? null : ((0, l.openModalLazy)(async () => {
            let {
                default: r
            } = await Promise.resolve().then(n.bind(n, "920916"));
            return n => (0, i.jsx)(r, {
                ...n,
                quest: e,
                location: t,
                reward: s
            })
        }), null)
    }
}