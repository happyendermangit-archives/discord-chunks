function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("946835"),
        s = n("481060"),
        a = n("287734"),
        o = n("872810"),
        l = n("230711"),
        u = n("258609"),
        d = n("102172"),
        _ = n("592125"),
        c = n("430824"),
        E = n("496675"),
        I = n("979651"),
        T = n("617136"),
        f = n("113434"),
        S = n("497505"),
        h = n("918701"),
        A = n("874137"),
        m = n("644646"),
        N = n("667105"),
        p = n("981631"),
        O = n("689938"),
        R = n("258758");
    let C = "11px";

    function g(e) {
        return null != e
    }
    t.default = function(e) {
        var t, g, L;
        let {
            quest: D,
            applicationStream: v,
            position: M,
            onClosePopout: y,
            closePopout: P
        } = e, U = (0, N.useHandleClaimQuestsReward)({
            quest: D,
            location: S.QuestContent.MEMBERS_LIST
        }), b = (0, f.useIsQuestExpired)(D), G = (null == D ? void 0 : null === (t = D.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, w = (null == D ? void 0 : null === (g = D.userStatus) || void 0 === g ? void 0 : g.enrolledAt) != null, B = (null == D ? void 0 : null === (L = D.userStatus) || void 0 === L ? void 0 : L.completedAt) != null;
        if (null == D || b || G && !(null != v)) return null;
        let k = () => {
                (0, T.trackQuestContentClicked)({
                    questId: D.id,
                    questContent: S.QuestContent.MEMBERS_LIST,
                    questContentCTA: T.QuestContentCTA.OPEN_DISCLOSURE,
                    trackGuildAndChannelMetadata: !0
                }), (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("99387"), n.e("59286")]).then(n.bind(n, "316210"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        questContent: S.QuestContent.MEMBERS_LIST,
                        questConfig: D.config
                    })
                })
            },
            V = () => {
                (0, T.trackQuestContentClicked)({
                    questId: D.id,
                    questContent: S.QuestContent.MEMBERS_LIST,
                    questContentCTA: T.QuestContentCTA.LEARN_MORE,
                    trackGuildAndChannelMetadata: !0
                }), l.default.open(p.UserSettingsSections.INVENTORY)
            },
            F = e => {
                e.stopPropagation(), k()
            },
            x = () => {
                if (null != v) {
                    let e = _.default.getChannel(v.channelId);
                    if (null != e && (0, d.canWatchStream)(e, I.default, c.default, E.default, u.default)[0]) return (0, T.trackQuestContentClicked)({
                        questId: D.id,
                        questContent: S.QuestContent.MEMBERS_LIST,
                        questContentCTA: T.QuestContentCTA.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }), a.default.selectVoiceChannel(e.id), (0, o.watchStreamAndTransitionToStream)(v)
                }
                V()
            },
            H = (() => null != v ? {
                headerText: O.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: O.default.Messages.QUESTS_MEMBERS_LIST_STREAM_CTA,
                handleClickCta: x,
                tileAssetType: "game"
            } : B && !G ? {
                headerText: O.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
                ctaText: O.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD_CTA,
                handleClickCta: U,
                tileAssetType: "reward"
            } : w ? {
                headerText: O.default.Messages.QUESTS_MEMBERS_LIST_FINISH,
                ctaText: O.default.Messages.QUESTS_MEMBERS_LIST_FINISH_CTA,
                handleClickCta: V,
                tileAssetType: "reward"
            } : {
                headerText: O.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: O.default.Messages.QUESTS_MEMBERS_LIST_START_CTA,
                handleClickCta: V,
                tileAssetType: "game"
            })();
        return (0, i.jsx)(A.QuestContentImpressionTracker, {
            questId: D.id,
            questContent: S.QuestContent.MEMBERS_LIST,
            trackGuildAndChannelMetadata: !0,
            children: e => (0, i.jsx)("div", {
                ref: t => {
                    e.current = t
                },
                className: R.wrapper,
                style: {
                    translate: "top" === M ? "0 ".concat("3px") : "0 -".concat("3px")
                },
                children: (0, i.jsxs)("div", {
                    className: R.container,
                    style: {
                        borderRadius: "top" === M ? "".concat("4px", " ").concat("4px", " 0 0") : "0 0 ".concat("4px", " ").concat("4px")
                    },
                    children: [(0, i.jsxs)("div", {
                        className: R.top,
                        children: [(0, i.jsxs)("div", {
                            className: R.left,
                            children: [(0, i.jsx)(s.Heading, {
                                variant: "heading-sm/semibold",
                                children: H.headerText
                            }), (0, i.jsxs)(s.Clickable, {
                                className: R.help,
                                onClick: e => {
                                    P(), null == y || y(), F(e)
                                },
                                children: [(0, i.jsx)(s.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: O.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                                        gamePublisher: D.config.messages.gamePublisher
                                    })
                                }), (0, i.jsx)(r.CircleQuestionIcon, {
                                    width: C,
                                    height: C,
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: R.right,
                            children: (0, i.jsxs)("div", {
                                className: R.imgWrapper,
                                children: [(0, i.jsx)("div", {
                                    className: R.imgUnderlay
                                }), "game" === H.tileAssetType && (0, i.jsx)("img", {
                                    alt: O.default.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                                        gameTitle: D.config.messages.gameTitle,
                                        gamePublisher: D.config.messages.gamePublisher
                                    }),
                                    className: R.assetTile,
                                    src: (0, h.getGameTileAssetUrl)(D)
                                }), "reward" === H.tileAssetType && (0, i.jsx)(m.default, {
                                    className: R.assetTile,
                                    learnMoreStyle: "icon",
                                    quest: D,
                                    questContent: S.QuestContent.MEMBERS_LIST
                                })]
                            })
                        })]
                    }), (0, i.jsx)(s.Button, {
                        onClick: () => {
                            P(), null == y || y(), H.handleClickCta()
                        },
                        color: s.Button.Colors.CUSTOM,
                        hover: s.Button.Hovers.PRIMARY,
                        className: R.ctaButton,
                        children: H.ctaText
                    })]
                })
            })
        })
    }
}