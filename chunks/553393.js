function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("718017"),
        a = n("91192"),
        o = n("946835"),
        l = n("442837"),
        u = n("780384"),
        d = n("481060"),
        _ = n("287734"),
        c = n("872810"),
        E = n("230711"),
        I = n("393238"),
        T = n("40851"),
        f = n("607070"),
        S = n("258609"),
        h = n("102172"),
        A = n("210887"),
        m = n("592125"),
        N = n("430824"),
        p = n("496675"),
        O = n("979651"),
        R = n("617136"),
        C = n("113434"),
        g = n("497505"),
        L = n("918701"),
        v = n("874137"),
        D = n("644646"),
        M = n("667105"),
        y = n("981631"),
        P = n("231338"),
        U = n("689938"),
        b = n("230222");
    let G = "11px";

    function w(e, t) {
        return null != e && null != t && (0, h.canWatchStream)(t, O.default, N.default, p.default, S.default)[0]
    }
    t.default = function(e) {
        var t, S, h;
        let {
            quest: N,
            width: p,
            applicationStream: O,
            position: B,
            closePopout: k
        } = e, V = (0, l.useStateFromStores)([m.default], () => {
            var e;
            return null !== (e = m.default.getChannel(null == O ? void 0 : O.channelId)) && void 0 !== e ? e : null
        }), x = (0, M.useHandleClaimQuestsReward)({
            quest: N,
            location: g.QuestContent.MEMBERS_LIST
        }), F = (0, C.useIsQuestExpired)(N), H = (null == N ? void 0 : null === (t = N.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, Y = (null == N ? void 0 : null === (S = N.userStatus) || void 0 === S ? void 0 : S.enrolledAt) != null, j = (null == N ? void 0 : null === (h = N.userStatus) || void 0 === h ? void 0 : h.completedAt) != null, W = (0, l.useStateFromStores)([A.default], () => A.default.getState().theme), K = (0, u.isThemeDark)(W) ? P.ThemeTypes.DARK : P.ThemeTypes.LIGHT, z = (0, l.useStateFromStores)([f.default], () => f.default.useReducedMotion), {
            ref: Z,
            height: X
        } = (0, I.default)(), [Q, q] = r.useState(z), J = (0, T.useWindowDispatch)(), $ = (0, a.useListContainerScrollerRef)();
        r.useEffect(() => {
            let e = $.current;
            return null == e || e.addEventListener("scroll", k), () => {
                null == e || e.removeEventListener("scroll", k)
            }
        }, [k, $]);
        let ee = (0, s.useSpring)({
                from: {
                    height: 0
                },
                height: null != X ? X : 0,
                config: {
                    tension: 450,
                    friction: 45
                },
                immediate: z,
                onRest: () => q(!0)
            }),
            et = (0, s.useTransition)(Q, {
                from: {
                    opacity: 0,
                    scale: 0
                },
                enter: {
                    opacity: 1,
                    scale: 1
                }
            }),
            en = () => {
                J.dispatch(y.ComponentActions.POPOUT_CLOSE)
            },
            ei = "top" === B ? "".concat("4px", " ").concat("4px", " 0 0") : "0 0 ".concat("4px", " ").concat("4px");
        if (null == N || F || H && !w(O, V)) return null;
        let er = () => {
                (0, R.trackQuestContentClicked)({
                    questId: N.id,
                    questContent: g.QuestContent.MEMBERS_LIST,
                    questContentCTA: R.QuestContentCTA.OPEN_DISCLOSURE,
                    trackGuildAndChannelMetadata: !0
                }), (0, d.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("99387"), n.e("59286")]).then(n.bind(n, "316210"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        questContent: g.QuestContent.MEMBERS_LIST,
                        questConfig: N.config
                    })
                })
            },
            es = () => {
                (0, R.trackQuestContentClicked)({
                    questId: N.id,
                    questContent: g.QuestContent.MEMBERS_LIST,
                    questContentCTA: R.QuestContentCTA.LEARN_MORE,
                    trackGuildAndChannelMetadata: !0
                }), E.default.open(y.UserSettingsSections.INVENTORY)
            },
            ea = e => {
                e.stopPropagation(), er()
            },
            eo = () => {
                if (w(O, V) && null != V) return (0, R.trackQuestContentClicked)({
                    questId: N.id,
                    questContent: g.QuestContent.MEMBERS_LIST,
                    questContentCTA: R.QuestContentCTA.WATCH_STREAM,
                    trackGuildAndChannelMetadata: !0
                }), _.default.selectVoiceChannel(V.id), (0, c.watchStreamAndTransitionToStream)(O);
                es()
            },
            el = j && !H ? {
                headerText: U.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
                ctaText: U.default.Messages.QUESTS_CLAIM_REWARD,
                handleClickCta: x,
                tileAssetType: "reward"
            } : Y ? {
                headerText: U.default.Messages.QUESTS_MEMBERS_LIST_FINISH,
                ctaText: U.default.Messages.QUESTS_MEMBERS_LIST_PROGRESS_CTA,
                handleClickCta: es,
                tileAssetType: "reward"
            } : w(O, V) ? {
                headerText: U.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: U.default.Messages.QUESTS_MEMBERS_LIST_WATCH_CTA,
                handleClickCta: eo,
                tileAssetType: "game"
            } : {
                headerText: U.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: U.default.Messages.QUESTS_MEMBERS_LIST_BEGIN_CTA,
                handleClickCta: es,
                tileAssetType: "game"
            };
        return (0, i.jsx)(v.QuestContentImpressionTracker, {
            questOrQuests: N,
            questContent: g.QuestContent.MEMBERS_LIST,
            trackGuildAndChannelMetadata: !0,
            children: e => (0, i.jsx)(s.animated.div, {
                ref: t => {
                    e.current = t
                },
                "aria-expanded": Q,
                className: b.wrapper,
                style: {
                    width: p,
                    height: ee.height,
                    overflow: Q ? "visible" : "hidden",
                    borderRadius: ei
                },
                children: (0, i.jsxs)("div", {
                    ref: e => {
                        Z.current = e
                    },
                    className: b.container,
                    style: {
                        borderRadius: ei
                    },
                    children: [(0, i.jsxs)("div", {
                        className: b.top,
                        children: [(0, i.jsxs)("div", {
                            className: b.left,
                            children: [(0, i.jsx)(d.Heading, {
                                variant: "heading-sm/semibold",
                                children: el.headerText
                            }), (0, i.jsxs)(d.Clickable, {
                                className: b.help,
                                onClick: e => {
                                    en(), ea(e)
                                },
                                children: [(0, i.jsx)(d.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: b.helpText,
                                    children: U.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                                        gamePublisher: N.config.messages.gamePublisher
                                    })
                                }), (0, i.jsx)(o.CircleQuestionIcon, {
                                    className: b.helpIcon,
                                    width: G,
                                    height: G,
                                    color: d.tokens.colors.INTERACTIVE_NORMAL
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: b.right,
                            children: (0, i.jsxs)("div", {
                                className: b.imgWrapper,
                                children: [et((e, t) => t && (0, i.jsx)(s.animated.div, {
                                    style: e,
                                    className: b.imgUnderlay
                                })), "game" === el.tileAssetType && (0, i.jsx)("img", {
                                    alt: U.default.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                                        gameTitle: N.config.messages.gameTitle,
                                        gamePublisher: N.config.messages.gamePublisher
                                    }),
                                    className: b.assetTile,
                                    src: (0, L.getGameTileAssetUrl)(N, K)
                                }), "reward" === el.tileAssetType && (0, i.jsx)(D.default, {
                                    className: b.assetTile,
                                    quest: N,
                                    questContent: g.QuestContent.MEMBERS_LIST,
                                    learnMoreStyle: "icon",
                                    onClick: en
                                })]
                            })
                        })]
                    }), (0, i.jsx)(d.Button, {
                        onClick: () => {
                            en(), el.handleClickCta()
                        },
                        color: d.Button.Colors.CUSTOM,
                        hover: d.Button.Hovers.PRIMARY,
                        className: b.ctaButton,
                        children: el.ctaText
                    })]
                })
            })
        })
    }
}