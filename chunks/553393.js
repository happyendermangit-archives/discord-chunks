function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("718017"),
        a = n("946835"),
        o = n("442837"),
        l = n("780384"),
        u = n("481060"),
        d = n("287734"),
        _ = n("872810"),
        c = n("230711"),
        E = n("393238"),
        I = n("40851"),
        T = n("607070"),
        f = n("258609"),
        S = n("102172"),
        h = n("210887"),
        A = n("592125"),
        m = n("430824"),
        N = n("496675"),
        p = n("979651"),
        O = n("617136"),
        R = n("113434"),
        C = n("497505"),
        g = n("918701"),
        L = n("874137"),
        D = n("644646"),
        v = n("667105"),
        M = n("981631"),
        y = n("231338"),
        P = n("689938"),
        U = n("258758");
    let b = "11px";

    function G(e) {
        return null != e
    }
    t.default = function(e) {
        var t, G, w;
        let {
            quest: B,
            width: k,
            applicationStream: F,
            position: V
        } = e, x = (0, v.useHandleClaimQuestsReward)({
            quest: B,
            location: C.QuestContent.MEMBERS_LIST
        }), H = (0, R.useIsQuestExpired)(B), Y = (null == B ? void 0 : null === (t = B.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, j = (null == B ? void 0 : null === (G = B.userStatus) || void 0 === G ? void 0 : G.enrolledAt) != null, W = (null == B ? void 0 : null === (w = B.userStatus) || void 0 === w ? void 0 : w.completedAt) != null, K = (0, o.useStateFromStores)([h.default], () => h.default.getState().theme), z = (0, l.isThemeDark)(K) ? y.ThemeTypes.DARK : y.ThemeTypes.LIGHT, X = (0, o.useStateFromStores)([T.default], () => T.default.useReducedMotion), {
            ref: q,
            height: Q
        } = (0, E.default)(), [Z, J] = r.useState(X), $ = (0, I.useWindowDispatch)(), ee = (0, s.useSpring)({
            from: {
                height: 0
            },
            height: null != Q ? Q : 0,
            config: {
                mass: 1,
                tension: 170,
                friction: 26,
                precision: .01,
                velocity: 0
            },
            immediate: X,
            onRest: () => J(!0)
        }), et = (0, s.useTransition)(Z, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }), en = () => {
            $.dispatch(M.ComponentActions.POPOUT_CLOSE)
        }, ei = "top" === V ? "".concat("4px", " ").concat("4px", " 0 0") : "0 0 ".concat("4px", " ").concat("4px");
        if (null == B || H || Y && !(null != F)) return null;
        let er = () => {
                (0, O.trackQuestContentClicked)({
                    questId: B.id,
                    questContent: C.QuestContent.MEMBERS_LIST,
                    questContentCTA: O.QuestContentCTA.OPEN_DISCLOSURE,
                    trackGuildAndChannelMetadata: !0
                }), (0, u.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("99387"), n.e("59286")]).then(n.bind(n, "316210"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        questContent: C.QuestContent.MEMBERS_LIST,
                        questConfig: B.config
                    })
                })
            },
            es = () => {
                (0, O.trackQuestContentClicked)({
                    questId: B.id,
                    questContent: C.QuestContent.MEMBERS_LIST,
                    questContentCTA: O.QuestContentCTA.LEARN_MORE,
                    trackGuildAndChannelMetadata: !0
                }), c.default.open(M.UserSettingsSections.INVENTORY)
            },
            ea = e => {
                e.stopPropagation(), er()
            },
            eo = () => {
                if (null != F) {
                    let e = A.default.getChannel(F.channelId);
                    if (null != e && (0, S.canWatchStream)(e, p.default, m.default, N.default, f.default)[0]) return (0, O.trackQuestContentClicked)({
                        questId: B.id,
                        questContent: C.QuestContent.MEMBERS_LIST,
                        questContentCTA: O.QuestContentCTA.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }), d.default.selectVoiceChannel(e.id), (0, _.watchStreamAndTransitionToStream)(F)
                }
                es()
            },
            el = (() => null != F ? {
                headerText: P.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: P.default.Messages.QUESTS_MEMBERS_LIST_STREAM_CTA,
                handleClickCta: eo,
                tileAssetType: "game"
            } : W && !Y ? {
                headerText: P.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
                ctaText: P.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD_CTA,
                handleClickCta: x,
                tileAssetType: "reward"
            } : j ? {
                headerText: P.default.Messages.QUESTS_MEMBERS_LIST_FINISH,
                ctaText: P.default.Messages.QUESTS_MEMBERS_LIST_FINISH_CTA,
                handleClickCta: es,
                tileAssetType: "reward"
            } : {
                headerText: P.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: P.default.Messages.QUESTS_MEMBERS_LIST_START_CTA,
                handleClickCta: es,
                tileAssetType: "game"
            })();
        return (0, i.jsx)(L.QuestContentImpressionTracker, {
            questId: B.id,
            questContent: C.QuestContent.MEMBERS_LIST,
            trackGuildAndChannelMetadata: !0,
            children: e => (0, i.jsx)(s.animated.div, {
                ref: t => {
                    e.current = t
                },
                "aria-expanded": Z,
                className: U.wrapper,
                style: {
                    width: k,
                    height: ee.height,
                    overflow: Z ? "visible" : "hidden",
                    borderRadius: ei
                },
                children: (0, i.jsxs)("div", {
                    ref: e => {
                        q.current = e
                    },
                    className: U.container,
                    style: {
                        borderRadius: ei
                    },
                    children: [(0, i.jsxs)("div", {
                        className: U.top,
                        children: [(0, i.jsxs)("div", {
                            className: U.left,
                            children: [(0, i.jsx)(u.Heading, {
                                variant: "heading-sm/semibold",
                                children: el.headerText
                            }), (0, i.jsxs)(u.Clickable, {
                                className: U.help,
                                onClick: e => {
                                    en(), ea(e)
                                },
                                children: [(0, i.jsx)(u.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: U.helpText,
                                    children: P.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                                        gamePublisher: B.config.messages.gamePublisher
                                    })
                                }), (0, i.jsx)(a.CircleQuestionIcon, {
                                    className: U.helpIcon,
                                    width: b,
                                    height: b,
                                    color: u.tokens.colors.INTERACTIVE_NORMAL
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: U.right,
                            children: (0, i.jsxs)("div", {
                                className: U.imgWrapper,
                                children: [et((e, t) => t && (0, i.jsx)(s.animated.div, {
                                    style: e,
                                    className: U.imgUnderlay
                                })), "game" === el.tileAssetType && (0, i.jsx)("img", {
                                    alt: P.default.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                                        gameTitle: B.config.messages.gameTitle,
                                        gamePublisher: B.config.messages.gamePublisher
                                    }),
                                    className: U.assetTile,
                                    src: (0, g.getGameTileAssetUrl)(B, z)
                                }), "reward" === el.tileAssetType && (0, i.jsx)(D.default, {
                                    className: U.assetTile,
                                    quest: B,
                                    questContent: C.QuestContent.MEMBERS_LIST,
                                    learnMoreStyle: "icon"
                                })]
                            })
                        })]
                    }), (0, i.jsx)(u.Button, {
                        onClick: () => {
                            en(), el.handleClickCta()
                        },
                        color: u.Button.Colors.CUSTOM,
                        hover: u.Button.Hovers.PRIMARY,
                        className: U.ctaButton,
                        children: el.ctaText
                    })]
                })
            })
        })
    }
}