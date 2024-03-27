function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("66007"),
        a = n("93510"),
        s = n("77078"),
        r = n("987317"),
        o = n("990766"),
        u = n("79112"),
        d = n("76393"),
        c = n("223913"),
        f = n("42203"),
        m = n("305961"),
        p = n("957255"),
        h = n("800762"),
        x = n("815496"),
        E = n("879364"),
        y = n("588025"),
        g = n("227231"),
        S = n("534801"),
        C = n("385416"),
        T = n("235627"),
        _ = n("49111"),
        I = n("782340"),
        v = n("418630");
    let A = "16px",
        N = "12px",
        R = "11px";

    function O(e) {
        return null != e
    }
    var M = function(e) {
        var t, O, M;
        let {
            quest: k,
            applicationStream: L,
            onMouseEnter: P,
            onMouseLeave: b,
            position: j
        } = e, U = (0, C.useHandleClaimQuestsReward)({
            quest: k,
            location: y.QuestContent.MEMBERS_LIST
        }), D = (0, E.useIsQuestExpired)(k), w = (null == k ? void 0 : null === (t = k.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, F = (null == k ? void 0 : null === (O = k.userStatus) || void 0 === O ? void 0 : O.enrolledAt) != null, G = (null == k ? void 0 : null === (M = k.userStatus) || void 0 === M ? void 0 : M.completedAt) != null;
        if (null == k || D || w && !(null != L)) return null;
        let H = () => {
                (0, x.trackQuestContentClicked)({
                    questId: k.id,
                    questContent: y.QuestContent.MEMBERS_LIST,
                    questContentCTA: x.QuestContentCTA.OPEN_DISCLOSURE,
                    trackGuildAndChannelMetadata: !0
                }), (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("970143").then(n.bind(n, "970143"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        questContent: y.QuestContent.MEMBERS_LIST,
                        questConfig: k.config
                    })
                })
            },
            B = () => {
                (0, x.trackQuestContentClicked)({
                    questId: k.id,
                    questContent: y.QuestContent.MEMBERS_LIST,
                    questContentCTA: x.QuestContentCTA.LEARN_MORE,
                    trackGuildAndChannelMetadata: !0
                }), u.default.open(_.UserSettingsSections.INVENTORY)
            },
            V = e => {
                e.stopPropagation(), H()
            },
            K = () => {
                if (null != L) {
                    let e = f.default.getChannel(L.channelId);
                    if (null != e && (0, c.canWatchStream)(e, h.default, m.default, p.default, d.default)[0]) return (0, x.trackQuestContentClicked)({
                        questId: k.id,
                        questContent: y.QuestContent.MEMBERS_LIST,
                        questContentCTA: x.QuestContentCTA.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }), r.default.selectVoiceChannel(e.id), (0, o.watchStreamAndTransitionToStream)(L)
                }
                B()
            },
            W = (() => null != L ? {
                headerText: I.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: I.default.Messages.QUESTS_MEMBERS_LIST_STREAM_CTA,
                tileAssetUrl: (0, g.getGameTileAssetUrl)(k),
                handleClickCta: K
            } : G && !w ? {
                headerText: I.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
                ctaText: I.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD_CTA,
                tileAssetUrl: (0, g.getRewardAssetUrl)(k),
                handleClickCta: U
            } : F ? {
                headerText: I.default.Messages.QUESTS_MEMBERS_LIST_FINISH,
                ctaText: I.default.Messages.QUESTS_MEMBERS_LIST_FINISH_CTA,
                tileAssetUrl: (0, g.getRewardAssetUrl)(k),
                handleClickCta: B
            } : {
                headerText: I.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: I.default.Messages.QUESTS_MEMBERS_LIST_START_CTA,
                tileAssetUrl: (0, g.getGameTileAssetUrl)(k),
                handleClickCta: B
            })();
        return (0, i.jsx)(S.QuestContentImpressionTracker, {
            questId: k.id,
            questContent: y.QuestContent.MEMBERS_LIST,
            trackGuildAndChannelMetadata: !0,
            children: e => (0, i.jsx)("div", {
                ref: t => {
                    e.current = t
                },
                style: "bottom" === j ? {
                    paddingTop: "8px"
                } : {
                    paddingBottom: "8px"
                },
                onMouseEnter: P,
                onMouseLeave: b,
                children: (0, i.jsxs)(s.Clickable, {
                    className: v.container,
                    onClick: () => {
                        b(), W.handleClickCta()
                    },
                    children: [(0, i.jsxs)("div", {
                        className: v.left,
                        children: [(0, i.jsxs)("div", {
                            className: v.top,
                            children: [(0, i.jsx)(T.QuestsIconWithGradient, {
                                height: A,
                                width: A
                            }), (0, i.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: W.headerText
                            })]
                        }), (0, i.jsxs)("div", {
                            className: v.middle,
                            children: [(0, i.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: W.ctaText
                            }), (0, i.jsx)(l.ArrowLargeRightIcon, {
                                width: N,
                                height: N
                            })]
                        }), (0, i.jsxs)(s.Clickable, {
                            className: v.bottom,
                            onClick: e => {
                                b(), V(e)
                            },
                            children: [(0, i.jsx)(s.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: I.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                                    gamePublisher: k.config.messages.gamePublisher
                                })
                            }), (0, i.jsx)(a.CircleQuestionIcon, {
                                width: R,
                                height: R,
                                color: s.tokens.colors.INTERACTIVE_MUTED
                            })]
                        })]
                    }), (0, i.jsx)("div", {
                        className: v.right,
                        children: (0, i.jsxs)("div", {
                            className: v.imgWrapper,
                            children: [(0, i.jsx)("div", {
                                className: v.imgUnderlay
                            }), (0, i.jsx)("img", {
                                alt: I.default.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                                    gameTitle: k.config.messages.gameTitle,
                                    gamePublisher: k.config.messages.gamePublisher
                                }),
                                src: W.tileAssetUrl
                            })]
                        })
                    })]
                })
            })
        })
    }
}