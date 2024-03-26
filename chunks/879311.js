function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
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
        p = n("305961"),
        m = n("957255"),
        h = n("800762"),
        x = n("879364"),
        E = n("588025"),
        y = n("227231"),
        g = n("385416"),
        S = n("235627"),
        C = n("49111"),
        _ = n("782340"),
        T = n("418630");
    let I = "16px",
        v = "12px",
        N = "11px";

    function A(e) {
        return null != e
    }
    var R = function(e) {
        var t, A, R;
        let {
            quest: O,
            applicationStream: M,
            onMouseEnter: k,
            onMouseLeave: L,
            position: P
        } = e, b = (0, g.useHandleClaimQuestsReward)({
            quest: O,
            location: E.QuestContent.MEMBERS_LIST
        }), j = (0, x.useIsQuestExpired)(O), U = (null == O ? void 0 : null === (t = O.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, D = (null == O ? void 0 : null === (A = O.userStatus) || void 0 === A ? void 0 : A.enrolledAt) != null, w = (null == O ? void 0 : null === (R = O.userStatus) || void 0 === R ? void 0 : R.completedAt) != null;
        if (null == O || j || U && !(null != M)) return null;
        let F = () => {
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("970143").then(n.bind(n, "970143"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        questContent: E.QuestContent.MEMBERS_LIST,
                        questConfig: O.config
                    })
                })
            },
            G = () => {
                u.default.open(C.UserSettingsSections.INVENTORY)
            },
            H = e => {
                e.stopPropagation(), F()
            },
            B = () => {
                if (null != M) {
                    let e = f.default.getChannel(M.channelId);
                    if (null != e && (0, c.canWatchStream)(e, h.default, p.default, m.default, d.default)[0]) {
                        r.default.selectVoiceChannel(e.id), (0, o.watchStreamAndTransitionToStream)(M);
                        return
                    }
                }
                G()
            },
            V = (() => null != M ? {
                headerText: _.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: _.default.Messages.QUESTS_MEMBERS_LIST_STREAM_CTA,
                tileAssetUrl: (0, y.getGameTileAssetUrl)(O.id),
                handleClickCta: B
            } : w && !U ? {
                headerText: _.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD,
                ctaText: _.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD_CTA,
                tileAssetUrl: (0, y.getRewardAssetUrl)(O.id),
                handleClickCta: b
            } : D ? {
                headerText: _.default.Messages.QUESTS_MEMBERS_LIST_FINISH,
                ctaText: _.default.Messages.QUESTS_MEMBERS_LIST_FINISH_CTA,
                tileAssetUrl: (0, y.getRewardAssetUrl)(O.id),
                handleClickCta: G
            } : {
                headerText: _.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE,
                ctaText: _.default.Messages.QUESTS_MEMBERS_LIST_START_CTA,
                tileAssetUrl: (0, y.getGameTileAssetUrl)(O.id),
                handleClickCta: G
            })();
        return (0, i.jsx)("div", {
            style: "bottom" === P ? {
                paddingTop: "8px"
            } : {
                paddingBottom: "8px"
            },
            onMouseEnter: k,
            onMouseLeave: L,
            children: (0, i.jsxs)(s.Clickable, {
                className: T.container,
                onClick: () => {
                    L(), V.handleClickCta()
                },
                children: [(0, i.jsxs)("div", {
                    className: T.left,
                    children: [(0, i.jsxs)("div", {
                        className: T.top,
                        children: [(0, i.jsx)(S.QuestsIconWithGradient, {
                            height: I,
                            width: I
                        }), (0, i.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            children: V.headerText
                        })]
                    }), (0, i.jsxs)("div", {
                        className: T.middle,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: V.ctaText
                        }), (0, i.jsx)(l.ArrowLargeRightIcon, {
                            width: v,
                            height: v
                        })]
                    }), (0, i.jsxs)(s.Clickable, {
                        className: T.bottom,
                        onClick: e => {
                            L(), H(e)
                        },
                        children: [(0, i.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: _.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                                gamePublisher: O.config.messages.gamePublisher
                            })
                        }), (0, i.jsx)(a.CircleQuestionIcon, {
                            width: N,
                            height: N,
                            color: s.tokens.colors.INTERACTIVE_MUTED
                        })]
                    })]
                }), (0, i.jsx)("div", {
                    className: T.right,
                    children: (0, i.jsxs)("div", {
                        className: T.imgWrapper,
                        children: [(0, i.jsx)("div", {
                            className: T.imgUnderlay
                        }), (0, i.jsx)("img", {
                            alt: _.default.Messages.QUESTS_MEMBERS_LIST_GAME_TILE_ALT.format({
                                gameTitle: O.config.messages.gameTitle,
                                gamePublisher: O.config.messages.gamePublisher
                            }),
                            src: V.tileAssetUrl
                        })]
                    })
                })]
            })
        })
    }
}