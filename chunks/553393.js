function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("989600"),
        s = n("946835"),
        a = n("481060"),
        o = n("287734"),
        l = n("872810"),
        u = n("230711"),
        d = n("258609"),
        _ = n("102172"),
        c = n("592125"),
        E = n("430824"),
        I = n("496675"),
        T = n("979651"),
        f = n("617136"),
        S = n("113434"),
        h = n("497505"),
        A = n("918701"),
        m = n("874137"),
        N = n("667105"),
        O = n("268201"),
        p = n("981631"),
        R = n("689938"),
        C = n("258758");
    let g = "16px",
        L = "12px",
        D = "11px";

    function v(e) {
        return null != e
    }
    t.default = function(e) {
        var t, v, M;
        let {
            quest: y,
            applicationStream: P,
            onMouseEnter: U,
            onMouseLeave: b,
            position: G
        } = e, w = (0, N.useHandleClaimQuestsReward)({
            quest: y,
            location: h.QuestContent.MEMBERS_LIST
        }), k = (0, S.useIsQuestExpired)(y), B = (null == y ? void 0 : null === (t = y.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, V = (null == y ? void 0 : null === (v = y.userStatus) || void 0 === v ? void 0 : v.enrolledAt) != null, F = (null == y ? void 0 : null === (M = y.userStatus) || void 0 === M ? void 0 : M.completedAt) != null;
        if (null == y || k || B && !(null != P)) return null;
        let x = () => {
                (0, f.trackQuestContentClicked)({
                    questId: y.id,
                    questContent: h.QuestContent.MEMBERS_LIST,
                    questContentCTA: f.QuestContentCTA.OPEN_DISCLOSURE,
                    trackGuildAndChannelMetadata: !0
                }), (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("99387"), n.e("59286")]).then(n.bind(n, "316210"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        questContent: h.QuestContent.MEMBERS_LIST,
                        questConfig: y.config
                    })
                })
            },
            H = () => {
                (0, f.trackQuestContentClicked)({
                    questId: y.id,
                    questContent: h.QuestContent.MEMBERS_LIST,
                    questContentCTA: f.QuestContentCTA.LEARN_MORE,
                    trackGuildAndChannelMetadata: !0
                }), u.default.open(p.UserSettingsSections.INVENTORY)
            },
            Y = e => {
                e.stopPropagation(), x()
            },
            j = () => {
                if (null != P) {
                    let e = c.default.getChannel(P.channelId);
                    if (null != e && (0, _.canWatchStream)(e, T.default, E.default, I.default, d.default)[0]) return (0, f.trackQuestContentClicked)({
                        questId: y.id,
                        questContent: h.QuestContent.MEMBERS_LIST,
                        questContentCTA: f.QuestContentCTA.WATCH_STREAM,
                        trackGuildAndChannelMetadata: !0
                    }), o.default.selectVoiceChannel(e.id), (0, l.watchStreamAndTransitionToStream)(P)
                }
                H()
            },
            W = (() => null != P ? {
                headerText: R.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: R.default.Messages.QUESTS_MEMBERS_LIST_STREAM_CTA,
                tileAssetUrl: (0, A.getGameTileAssetUrl)(y),
                handleClickCta: j
            } : F && !B ? {
                headerText: R.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
                ctaText: R.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD_CTA,
                tileAssetUrl: (0, A.getRewardAssetUrl)(y),
                handleClickCta: w
            } : V ? {
                headerText: R.default.Messages.QUESTS_MEMBERS_LIST_FINISH,
                ctaText: R.default.Messages.QUESTS_MEMBERS_LIST_FINISH_CTA,
                tileAssetUrl: (0, A.getRewardAssetUrl)(y),
                handleClickCta: H
            } : {
                headerText: R.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: R.default.Messages.QUESTS_MEMBERS_LIST_START_CTA,
                tileAssetUrl: (0, A.getGameTileAssetUrl)(y),
                handleClickCta: H
            })();
        return (0, i.jsx)(m.QuestContentImpressionTracker, {
            questId: y.id,
            questContent: h.QuestContent.MEMBERS_LIST,
            trackGuildAndChannelMetadata: !0,
            children: e => (0, i.jsx)("div", {
                ref: t => {
                    e.current = t
                },
                style: "bottom" === G ? {
                    paddingTop: "8px"
                } : {
                    paddingBottom: "8px"
                },
                onMouseEnter: U,
                onMouseLeave: b,
                children: (0, i.jsxs)(a.Clickable, {
                    className: C.container,
                    onClick: () => {
                        b(), W.handleClickCta()
                    },
                    children: [(0, i.jsxs)("div", {
                        className: C.left,
                        children: [(0, i.jsxs)("div", {
                            className: C.top,
                            children: [(0, i.jsx)(O.QuestsIconWithGradient, {
                                height: g,
                                width: g
                            }), (0, i.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                children: W.headerText
                            })]
                        }), (0, i.jsxs)("div", {
                            className: C.middle,
                            children: [(0, i.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                children: W.ctaText
                            }), (0, i.jsx)(r.ArrowLargeRightIcon, {
                                width: L,
                                height: L
                            })]
                        }), (0, i.jsxs)(a.Clickable, {
                            className: C.bottom,
                            onClick: e => {
                                b(), Y(e)
                            },
                            children: [(0, i.jsx)(a.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: R.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                                    gamePublisher: y.config.messages.gamePublisher
                                })
                            }), (0, i.jsx)(s.CircleQuestionIcon, {
                                width: D,
                                height: D,
                                color: a.tokens.colors.INTERACTIVE_MUTED
                            })]
                        })]
                    }), (0, i.jsx)("div", {
                        className: C.right,
                        children: (0, i.jsxs)("div", {
                            className: C.imgWrapper,
                            children: [(0, i.jsx)("div", {
                                className: C.imgUnderlay
                            }), (0, i.jsx)("img", {
                                alt: R.default.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                                    gameTitle: y.config.messages.gameTitle,
                                    gamePublisher: y.config.messages.gamePublisher
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