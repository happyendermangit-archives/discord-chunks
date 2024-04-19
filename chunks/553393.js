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
        I = n("607070"),
        T = n("258609"),
        f = n("102172"),
        S = n("210887"),
        h = n("592125"),
        A = n("430824"),
        m = n("496675"),
        N = n("979651"),
        p = n("617136"),
        O = n("113434"),
        R = n("497505"),
        C = n("918701"),
        g = n("874137"),
        L = n("644646"),
        D = n("667105"),
        v = n("981631"),
        M = n("231338"),
        y = n("689938"),
        P = n("258758");
    let U = "11px";

    function b(e) {
        return null != e
    }
    t.default = function(e) {
        var t, b, G;
        let {
            quest: w,
            width: B,
            applicationStream: k,
            position: F,
            onClosePopout: V,
            closePopout: x
        } = e, H = (0, D.useHandleClaimQuestsReward)({
            quest: w,
            location: R.QuestContent.MEMBERS_LIST
        }), Y = (0, O.useIsQuestExpired)(w), j = (null == w ? void 0 : null === (t = w.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, W = (null == w ? void 0 : null === (b = w.userStatus) || void 0 === b ? void 0 : b.enrolledAt) != null, K = (null == w ? void 0 : null === (G = w.userStatus) || void 0 === G ? void 0 : G.completedAt) != null, z = (0, o.useStateFromStores)([S.default], () => S.default.getState().theme), X = (0, l.isThemeDark)(z) ? M.ThemeTypes.DARK : M.ThemeTypes.LIGHT, q = (0, o.useStateFromStores)([I.default], () => I.default.useReducedMotion), {
            ref: Q,
            height: Z
        } = (0, E.default)(), [J, $] = r.useState(q), ee = (0, s.useSpring)({
            from: {
                height: 0
            },
            height: null != Z ? Z : 0,
            config: {
                mass: 1,
                tension: 170,
                friction: 26,
                precision: .01,
                velocity: 0
            },
            immediate: q,
            onRest: () => $(!0)
        }), et = (0, s.useTransition)(J, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            }
        }), en = "top" === F ? "".concat("4px", " ").concat("4px", " 0 0") : "0 0 ".concat("4px", " ").concat("4px");
        if (null == w || Y || j && !(null != k)) return null;
        let ei = () => {
                (0, p.trackQuestContentClicked)({
                    questId: w.id,
                    questContent: R.QuestContent.MEMBERS_LIST,
                    questContentCTA: p.QuestContentCTA.OPEN_DISCLOSURE,
                    trackGuildAndChannelMetadata: !0
                }), (0, u.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("99387"), n.e("59286")]).then(n.bind(n, "316210"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        questContent: R.QuestContent.MEMBERS_LIST,
                        questConfig: w.config
                    })
                })
            },
            er = () => {
                (0, p.trackQuestContentClicked)({
                    questId: w.id,
                    questContent: R.QuestContent.MEMBERS_LIST,
                    questContentCTA: p.QuestContentCTA.LEARN_MORE,
                    trackGuildAndChannelMetadata: !0
                }), c.default.open(v.UserSettingsSections.INVENTORY)
            },
            es = e => {
                e.stopPropagation(), ei()
            },
            ea = () => {
                if (null != k) {
                    let e = h.default.getChannel(k.channelId);
                    if (null != e && (0, f.canWatchStream)(e, N.default, A.default, m.default, T.default)[0]) return (0, p.trackQuestContentClicked)({
                        questId: w.id,
                        questContent: R.QuestContent.MEMBERS_LIST,
                        questContentCTA: p.QuestContentCTA.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }), d.default.selectVoiceChannel(e.id), (0, _.watchStreamAndTransitionToStream)(k)
                }
                er()
            },
            eo = (() => null != k ? {
                headerText: y.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: y.default.Messages.QUESTS_MEMBERS_LIST_STREAM_CTA,
                handleClickCta: ea,
                tileAssetType: "game"
            } : K && !j ? {
                headerText: y.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
                ctaText: y.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD_CTA,
                handleClickCta: H,
                tileAssetType: "reward"
            } : W ? {
                headerText: y.default.Messages.QUESTS_MEMBERS_LIST_FINISH,
                ctaText: y.default.Messages.QUESTS_MEMBERS_LIST_FINISH_CTA,
                handleClickCta: er,
                tileAssetType: "reward"
            } : {
                headerText: y.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: y.default.Messages.QUESTS_MEMBERS_LIST_START_CTA,
                handleClickCta: er,
                tileAssetType: "game"
            })();
        return (0, i.jsx)(g.QuestContentImpressionTracker, {
            questId: w.id,
            questContent: R.QuestContent.MEMBERS_LIST,
            trackGuildAndChannelMetadata: !0,
            children: e => (0, i.jsx)(s.animated.div, {
                ref: t => {
                    e.current = t
                },
                "aria-expanded": J,
                className: P.wrapper,
                style: {
                    width: B,
                    height: ee.height,
                    overflow: J ? "visible" : "hidden",
                    borderRadius: en
                },
                children: (0, i.jsxs)("div", {
                    ref: e => {
                        Q.current = e
                    },
                    className: P.container,
                    style: {
                        borderRadius: en
                    },
                    children: [(0, i.jsxs)("div", {
                        className: P.top,
                        children: [(0, i.jsxs)("div", {
                            className: P.left,
                            children: [(0, i.jsx)(u.Heading, {
                                variant: "heading-sm/semibold",
                                children: eo.headerText
                            }), (0, i.jsxs)(u.Clickable, {
                                className: P.help,
                                onClick: e => {
                                    x(), null == V || V(), es(e)
                                },
                                children: [(0, i.jsx)(u.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    className: P.helpText,
                                    children: y.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                                        gamePublisher: w.config.messages.gamePublisher
                                    })
                                }), (0, i.jsx)(a.CircleQuestionIcon, {
                                    className: P.helpIcon,
                                    width: U,
                                    height: U,
                                    color: u.tokens.colors.INTERACTIVE_NORMAL
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: P.right,
                            children: (0, i.jsxs)("div", {
                                className: P.imgWrapper,
                                children: [et((e, t) => t && (0, i.jsx)(s.animated.div, {
                                    style: e,
                                    className: P.imgUnderlay
                                })), "game" === eo.tileAssetType && (0, i.jsx)("img", {
                                    alt: y.default.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                                        gameTitle: w.config.messages.gameTitle,
                                        gamePublisher: w.config.messages.gamePublisher
                                    }),
                                    className: P.assetTile,
                                    src: (0, C.getGameTileAssetUrl)(w, X)
                                }), "reward" === eo.tileAssetType && (0, i.jsx)(L.default, {
                                    className: P.assetTile,
                                    quest: w,
                                    questContent: R.QuestContent.MEMBERS_LIST,
                                    learnMoreStyle: "icon"
                                })]
                            })
                        })]
                    }), (0, i.jsx)(u.Button, {
                        onClick: () => {
                            x(), null == V || V(), eo.handleClickCta()
                        },
                        color: u.Button.Colors.CUSTOM,
                        hover: u.Button.Hovers.PRIMARY,
                        className: P.ctaButton,
                        children: eo.ctaText
                    })]
                })
            })
        })
    }
}