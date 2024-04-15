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
        A = n("918701"),
        h = n("874137"),
        m = n("667105"),
        N = n("981631"),
        O = n("689938"),
        p = n("258758");
    let R = "11px";

    function C(e) {
        return null != e
    }
    t.default = function(e) {
        var t, C, g;
        let {
            quest: L,
            applicationStream: D,
            position: v,
            onClosePopout: M,
            closePopout: y
        } = e, P = (0, m.useHandleClaimQuestsReward)({
            quest: L,
            location: S.QuestContent.MEMBERS_LIST
        }), U = (0, f.useIsQuestExpired)(L), b = (null == L ? void 0 : null === (t = L.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, G = (null == L ? void 0 : null === (C = L.userStatus) || void 0 === C ? void 0 : C.enrolledAt) != null, w = (null == L ? void 0 : null === (g = L.userStatus) || void 0 === g ? void 0 : g.completedAt) != null;
        if (null == L || U || b && !(null != D)) return null;
        let B = () => {
                (0, T.trackQuestContentClicked)({
                    questId: L.id,
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
                        questConfig: L.config
                    })
                })
            },
            k = () => {
                (0, T.trackQuestContentClicked)({
                    questId: L.id,
                    questContent: S.QuestContent.MEMBERS_LIST,
                    questContentCTA: T.QuestContentCTA.LEARN_MORE,
                    trackGuildAndChannelMetadata: !0
                }), l.default.open(N.UserSettingsSections.INVENTORY)
            },
            F = e => {
                e.stopPropagation(), B()
            },
            V = () => {
                if (null != D) {
                    let e = _.default.getChannel(D.channelId);
                    if (null != e && (0, d.canWatchStream)(e, I.default, c.default, E.default, u.default)[0]) return (0, T.trackQuestContentClicked)({
                        questId: L.id,
                        questContent: S.QuestContent.MEMBERS_LIST,
                        questContentCTA: T.QuestContentCTA.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }), a.default.selectVoiceChannel(e.id), (0, o.watchStreamAndTransitionToStream)(D)
                }
                k()
            },
            x = (() => null != D ? {
                headerText: O.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: O.default.Messages.QUESTS_MEMBERS_LIST_STREAM_CTA,
                tileAssetUrl: (0, A.getGameTileAssetUrl)(L),
                handleClickCta: V
            } : w && !b ? {
                headerText: O.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
                ctaText: O.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD_CTA,
                tileAssetUrl: (0, A.getRewardAssetUrl)(L),
                handleClickCta: P
            } : G ? {
                headerText: O.default.Messages.QUESTS_MEMBERS_LIST_FINISH,
                ctaText: O.default.Messages.QUESTS_MEMBERS_LIST_FINISH_CTA,
                tileAssetUrl: (0, A.getRewardAssetUrl)(L),
                handleClickCta: k
            } : {
                headerText: O.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: O.default.Messages.QUESTS_MEMBERS_LIST_START_CTA,
                tileAssetUrl: (0, A.getGameTileAssetUrl)(L),
                handleClickCta: k
            })();
        return (0, i.jsx)(h.QuestContentImpressionTracker, {
            questId: L.id,
            questContent: S.QuestContent.MEMBERS_LIST,
            trackGuildAndChannelMetadata: !0,
            children: e => (0, i.jsx)("div", {
                ref: t => {
                    e.current = t
                },
                className: p.wrapper,
                style: {
                    translate: "top" === v ? "0 ".concat("3px") : "0 -".concat("3px")
                },
                children: (0, i.jsxs)("div", {
                    className: p.container,
                    style: {
                        borderRadius: "top" === v ? "".concat("4px", " ").concat("4px", " 0 0") : "0 0 ".concat("4px", " ").concat("4px")
                    },
                    children: [(0, i.jsxs)("div", {
                        className: p.top,
                        children: [(0, i.jsxs)("div", {
                            className: p.left,
                            children: [(0, i.jsx)(s.Heading, {
                                variant: "heading-sm/semibold",
                                children: x.headerText
                            }), (0, i.jsxs)(s.Clickable, {
                                className: p.help,
                                onClick: e => {
                                    y(), null == M || M(), F(e)
                                },
                                children: [(0, i.jsx)(s.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: O.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                                        gamePublisher: L.config.messages.gamePublisher
                                    })
                                }), (0, i.jsx)(r.CircleQuestionIcon, {
                                    width: R,
                                    height: R,
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: p.right,
                            children: (0, i.jsxs)("div", {
                                className: p.imgWrapper,
                                children: [(0, i.jsx)("div", {
                                    className: p.imgUnderlay
                                }), (0, i.jsx)("img", {
                                    alt: O.default.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                                        gameTitle: L.config.messages.gameTitle,
                                        gamePublisher: L.config.messages.gamePublisher
                                    }),
                                    src: x.tileAssetUrl
                                })]
                            })
                        })]
                    }), (0, i.jsx)(s.Button, {
                        onClick: () => {
                            y(), null == M || M(), x.handleClickCta()
                        },
                        color: s.Button.Colors.CUSTOM,
                        hover: s.Button.Hovers.PRIMARY,
                        className: p.ctaButton,
                        children: x.ctaText
                    })]
                })
            })
        })
    }
}