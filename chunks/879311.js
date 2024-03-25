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
        A = "11px";

    function N(e) {
        return null != e
    }
    var R = function(e) {
        var t, R, O;
        let {
            quest: M,
            applicationStream: k,
            onMouseEnter: L,
            onMouseLeave: P,
            position: b
        } = e, j = (0, g.useHandleClaimQuestsReward)({
            quest: M,
            location: E.QuestContent.MEMBERS_LIST
        }), U = (0, x.useIsQuestExpired)(M), D = (null == M ? void 0 : null === (t = M.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, w = (null == M ? void 0 : null === (R = M.userStatus) || void 0 === R ? void 0 : R.enrolledAt) != null, F = (null == M ? void 0 : null === (O = M.userStatus) || void 0 === O ? void 0 : O.completedAt) != null;
        if (null == M || U || D && !N(k)) return null;
        let G = () => {
                (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("970143").then(n.bind(n, "970143"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        questContent: E.QuestContent.MEMBERS_LIST,
                        questConfig: M.config
                    })
                })
            },
            H = () => {
                u.default.open(C.UserSettingsSections.INVENTORY)
            };
        return (0, i.jsx)("div", {
            style: "bottom" === b ? {
                paddingTop: "8px"
            } : {
                paddingBottom: "8px"
            },
            onMouseEnter: L,
            onMouseLeave: P,
            children: (0, i.jsxs)(s.Clickable, {
                className: T.container,
                onClick: () => {
                    if (P(), N(k)) {
                        let e = f.default.getChannel(k.channelId);
                        if (null != e && (0, c.canWatchStream)(e, h.default, p.default, m.default, d.default)[0]) {
                            r.default.selectVoiceChannel(e.id), (0, o.watchStreamAndTransitionToStream)(k);
                            return
                        }
                    }
                    if (F && !D) return j();
                    H()
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
                            children: N(k) ? _.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE : F && !D ? _.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD : w ? _.default.Messages.QUESTS_MEMBERS_LIST_FINISH : _.default.Messages.QUESTS_MEMBERS_LIST_AVAILBLE
                        })]
                    }), (0, i.jsxs)("div", {
                        className: T.middle,
                        children: [(0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: N(k) ? _.default.Messages.QUESTS_MEMBERS_LIST_STREAM_CTA : F && !D ? _.default.Messages.QUESTS_MEMBERS_LIST_CLAIM_REWARD_CTA : w ? _.default.Messages.QUESTS_MEMBERS_LIST_FINISH_CTA : _.default.Messages.QUESTS_MEMBERS_LIST_START_CTA
                        }), (0, i.jsx)(l.ArrowLargeRightIcon, {
                            width: v,
                            height: v
                        })]
                    }), (0, i.jsxs)(s.Clickable, {
                        className: T.bottom,
                        onClick: e => {
                            e.stopPropagation(), P(), G()
                        },
                        children: [(0, i.jsx)(s.Text, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            children: _.default.Messages.QUESTS_MEMBERS_LIST_PROMOTED_BY.format({
                                gamePublisher: M.config.messages.gamePublisher
                            })
                        }), (0, i.jsx)(a.CircleQuestionIcon, {
                            width: A,
                            height: A,
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
                                gameTitle: M.config.messages.gameTitle,
                                gamePublisher: M.config.messages.gamePublisher
                            }),
                            src: !w || D || N(k) ? (0, y.getGameTileAssetUrl)(M.id) : (0, y.getRewardAssetUrl)(M.id)
                        })]
                    })
                })]
            })
        })
    }
}