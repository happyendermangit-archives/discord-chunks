function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("946835"),
        s = n("442837"),
        a = n("780384"),
        o = n("481060"),
        l = n("287734"),
        u = n("872810"),
        d = n("230711"),
        _ = n("258609"),
        c = n("102172"),
        E = n("210887"),
        I = n("592125"),
        T = n("430824"),
        f = n("496675"),
        S = n("979651"),
        h = n("617136"),
        A = n("113434"),
        m = n("497505"),
        N = n("918701"),
        p = n("874137"),
        O = n("644646"),
        R = n("667105"),
        C = n("981631"),
        g = n("231338"),
        L = n("689938"),
        D = n("258758");
    let v = "11px";

    function M(e) {
        return null != e
    }
    t.default = function(e) {
        var t, M, y;
        let {
            quest: P,
            applicationStream: U,
            position: b,
            onClosePopout: G,
            closePopout: w
        } = e, B = (0, R.useHandleClaimQuestsReward)({
            quest: P,
            location: m.QuestContent.MEMBERS_LIST
        }), k = (0, A.useIsQuestExpired)(P), F = (null == P ? void 0 : null === (t = P.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, V = (null == P ? void 0 : null === (M = P.userStatus) || void 0 === M ? void 0 : M.enrolledAt) != null, x = (null == P ? void 0 : null === (y = P.userStatus) || void 0 === y ? void 0 : y.completedAt) != null, H = (0, s.useStateFromStores)([E.default], () => E.default.getState().theme), Y = (0, a.isThemeDark)(H) ? g.ThemeTypes.DARK : g.ThemeTypes.LIGHT;
        if (null == P || k || F && !(null != U)) return null;
        let j = () => {
                (0, h.trackQuestContentClicked)({
                    questId: P.id,
                    questContent: m.QuestContent.MEMBERS_LIST,
                    questContentCTA: h.QuestContentCTA.OPEN_DISCLOSURE,
                    trackGuildAndChannelMetadata: !0
                }), (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("99387"), n.e("59286")]).then(n.bind(n, "316210"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        questContent: m.QuestContent.MEMBERS_LIST,
                        questConfig: P.config
                    })
                })
            },
            W = () => {
                (0, h.trackQuestContentClicked)({
                    questId: P.id,
                    questContent: m.QuestContent.MEMBERS_LIST,
                    questContentCTA: h.QuestContentCTA.LEARN_MORE,
                    trackGuildAndChannelMetadata: !0
                }), d.default.open(C.UserSettingsSections.INVENTORY)
            },
            K = e => {
                e.stopPropagation(), j()
            },
            z = () => {
                if (null != U) {
                    let e = I.default.getChannel(U.channelId);
                    if (null != e && (0, c.canWatchStream)(e, S.default, T.default, f.default, _.default)[0]) return (0, h.trackQuestContentClicked)({
                        questId: P.id,
                        questContent: m.QuestContent.MEMBERS_LIST,
                        questContentCTA: h.QuestContentCTA.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }), l.default.selectVoiceChannel(e.id), (0, u.watchStreamAndTransitionToStream)(U)
                }
                W()
            },
            X = (() => null != U ? {
                headerText: L.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: L.default.Messages.QUESTS_MEMBERS_LIST_STREAM_CTA,
                handleClickCta: z,
                tileAssetType: "game"
            } : x && !F ? {
                headerText: L.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
                ctaText: L.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD_CTA,
                handleClickCta: B,
                tileAssetType: "reward"
            } : V ? {
                headerText: L.default.Messages.QUESTS_MEMBERS_LIST_FINISH,
                ctaText: L.default.Messages.QUESTS_MEMBERS_LIST_FINISH_CTA,
                handleClickCta: W,
                tileAssetType: "reward"
            } : {
                headerText: L.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: L.default.Messages.QUESTS_MEMBERS_LIST_START_CTA,
                handleClickCta: W,
                tileAssetType: "game"
            })();
        return (0, i.jsx)(p.QuestContentImpressionTracker, {
            questId: P.id,
            questContent: m.QuestContent.MEMBERS_LIST,
            trackGuildAndChannelMetadata: !0,
            children: e => (0, i.jsx)("div", {
                ref: t => {
                    e.current = t
                },
                className: D.wrapper,
                style: {
                    translate: "top" === b ? "0 ".concat("3px") : "0 -".concat("3px")
                },
                children: (0, i.jsxs)("div", {
                    className: D.container,
                    style: {
                        borderRadius: "top" === b ? "".concat("4px", " ").concat("4px", " 0 0") : "0 0 ".concat("4px", " ").concat("4px")
                    },
                    children: [(0, i.jsxs)("div", {
                        className: D.top,
                        children: [(0, i.jsxs)("div", {
                            className: D.left,
                            children: [(0, i.jsx)(o.Heading, {
                                variant: "heading-sm/semibold",
                                children: X.headerText
                            }), (0, i.jsxs)(o.Clickable, {
                                className: D.help,
                                onClick: e => {
                                    w(), null == G || G(), K(e)
                                },
                                children: [(0, i.jsx)(o.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: L.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                                        gamePublisher: P.config.messages.gamePublisher
                                    })
                                }), (0, i.jsx)(r.CircleQuestionIcon, {
                                    width: v,
                                    height: v,
                                    color: o.tokens.colors.INTERACTIVE_MUTED
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: D.right,
                            children: (0, i.jsxs)("div", {
                                className: D.imgWrapper,
                                children: [(0, i.jsx)("div", {
                                    className: D.imgUnderlay
                                }), "game" === X.tileAssetType && (0, i.jsx)("img", {
                                    alt: L.default.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                                        gameTitle: P.config.messages.gameTitle,
                                        gamePublisher: P.config.messages.gamePublisher
                                    }),
                                    className: D.assetTile,
                                    src: (0, N.getGameTileAssetUrl)(P, Y)
                                }), "reward" === X.tileAssetType && (0, i.jsx)(O.default, {
                                    className: D.assetTile,
                                    quest: P,
                                    questContent: m.QuestContent.MEMBERS_LIST,
                                    learnMoreStyle: "icon"
                                })]
                            })
                        })]
                    }), (0, i.jsx)(o.Button, {
                        onClick: () => {
                            w(), null == G || G(), X.handleClickCta()
                        },
                        color: o.Button.Colors.CUSTOM,
                        hover: o.Button.Hovers.PRIMARY,
                        className: D.ctaButton,
                        children: X.ctaText
                    })]
                })
            })
        })
    }
}