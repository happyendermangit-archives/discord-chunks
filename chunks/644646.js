function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("230711"),
        d = n("607070"),
        _ = n("507893"),
        c = n("810090"),
        E = n("617136"),
        I = n("918701"),
        T = n("78826"),
        f = n("981631"),
        S = n("689938"),
        h = n("527002");
    t.default = function(e) {
        let {
            className: t,
            quest: n,
            autoplay: s = !0,
            learnMoreStyle: A = null
        } = e, m = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), N = r.useMemo(() => (0, I.isAssetAnimated)(n.config.assets.rewardTile), [n]), p = r.useCallback(t => {
            var i;
            (0, E.trackQuestContentClicked)({
                questId: n.id,
                questContent: e.questContent,
                questContentCTA: E.QuestContentCTA.REWARD_LEARN_MORE
            }), u.default.open(f.UserSettingsSections.INVENTORY), null === (i = e.onClick) || void 0 === i || i.call(e, t)
        }, [n.id, e]), O = r.useRef(null), R = r.useRef(s);
        r.useEffect(() => {
            var e, t;
            N && !m && null != O.current && (s && !R.current ? null === (e = O.current) || void 0 === e || e.play() : !s && R.current && (null === (t = O.current) || void 0 === t || t.pause()), R.current = s)
        }, [s, N, m]);
        let C = (0, I.getRewardAssetUrl)(n),
            g = N ? (0, i.jsx)(T.QuestsAsset, {
                id: "QuestRewardTile_rewardTileAnimated",
                children: e => (0, i.jsx)(c.default, {
                    ref: t => {
                        e.current = t, O.current = t
                    },
                    autoPlay: !m && s,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    className: h.questRewardTileAsset,
                    controls: !1,
                    children: (0, i.jsx)("source", {
                        src: C,
                        type: (0, I.getVideoAssetMimeType)(C)
                    })
                })
            }) : (0, i.jsx)(T.QuestsAsset, {
                id: "QuestRewardTile_rewardTileStatic",
                children: e => (0, i.jsx)("img", {
                    ref: e,
                    alt: n.config.messages.rewardName,
                    className: a()(h.questRewardTileAsset, h.questRewardTileAssetStatic),
                    src: C
                })
            });
        return null == A ? (0, i.jsx)("div", {
            className: a()(t, h.questRewardTile),
            children: g
        }) : (0, i.jsxs)(l.Clickable, {
            className: a()(h.questRewardTile, h.questRewardTileInteractive, t),
            onClick: p,
            children: ["text" === A && (0, i.jsx)(l.Text, {
                color: "always-white",
                variant: "text-xs/normal",
                className: h.questRewardTileDetailsLearnMore,
                children: S.default.Messages.QUESTS_LEARN_MORE_STACKED.format()
            }), "icon" === A && (0, i.jsx)("div", {
                className: h.questRewardTileDetailsLearnMore,
                children: (0, i.jsx)(_.default, {
                    color: l.tokens.colors.WHITE.css,
                    width: 12,
                    height: 12
                })
            }), g]
        })
    }
}