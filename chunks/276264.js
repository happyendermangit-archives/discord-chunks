function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AVATAR_DECORATION_PADDING: function() {
            return M
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("477690"),
        l = n("481060"),
        u = n("420660"),
        d = n("979264"),
        _ = n("33934"),
        c = n("736144"),
        E = n("113434"),
        I = n("553393"),
        T = n("204197"),
        f = n("594174"),
        S = n("467679"),
        A = n("681426"),
        h = n("551388"),
        m = n("709586"),
        N = n("360048"),
        O = n("624138"),
        p = n("51144"),
        R = n("788307"),
        C = n("981631"),
        g = n("674563"),
        L = n("524484"),
        D = n("689938"),
        v = n("581477");
    let M = (0, O.cssValueToNumber)(o.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
    t.default = function(e) {
        var t;
        let {
            selected: n = !1,
            colorString: s,
            colorRoleName: o,
            isOwner: O,
            ownerTooltipText: M,
            lostPermissionTooltipText: y,
            isTyping: P = !1,
            nick: U,
            user: b,
            currentUser: G,
            activities: w,
            applicationStream: B,
            status: k,
            shouldAnimateStatus: V = !1,
            isMobile: F,
            premiumSince: x,
            channel: H,
            guildId: Y,
            className: j,
            onClosePopout: W,
            onMouseDown: K,
            onKeyDown: z,
            onClick: X,
            onContextMenu: Q,
            onClickPremiumGuildIcon: q,
            onFocus: Z,
            "aria-controls": J,
            "aria-expanded": $,
            "aria-posinset": ee,
            "aria-setsize": et,
            id: en,
            tabIndex: ei,
            itemProps: er
        } = e, es = p.default.useName(b), ea = (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === (null == b ? void 0 : b.id), [eo, el] = r.useState(!1), [eu, ed] = r.useState(null), {
            avatarDecorationSrc: e_,
            avatarSrc: ec,
            eventHandlers: eE
        } = (0, T.default)({
            user: b,
            size: l.AvatarSizes.SIZE_32,
            animateOnHover: !(n || eo),
            guildId: Y
        }), eI = (0, E.useQuestFromActivities)(w), eT = null != eI && !ea && n, ef = () => {
            el(!0)
        }, eS = () => {
            el(!1)
        }, eA = e => {
            ed(e)
        }, eh = () => {
            let e = null != w ? w.find(e => e.type === C.ActivityTypes.CUSTOM_STATUS) : null,
                t = null != e && null != b && (0, _.default)(e, b, H);
            return (0, i.jsx)(R.default, {
                className: v.activity,
                textClassName: v.activityText,
                emojiClassName: v.activityEmoji,
                activities: w,
                applicationStream: B,
                animate: eo,
                hideEmoji: !t,
                hideTooltip: !0,
                user: b,
                hasQuest: null != eI
            })
        }, em = () => null != O && O && null == y ? (0, i.jsx)(l.Tooltip, {
            text: null != M ? M : D.default.Messages.GUILD_OWNER,
            children: e => (0, i.jsx)(h.default, {
                ...e,
                className: v.ownerIcon
            })
        }) : null, eN = () => null == x ? null : (0, i.jsx)(l.Tooltip, {
            text: D.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
                date: x
            }),
            children: e => (0, i.jsx)(l.Clickable, {
                onClick: q,
                tabIndex: -1,
                children: (0, i.jsx)(m.default, {
                    ...e,
                    className: v.premiumIcon
                })
            })
        }), eO = () => {
            let e = (null == b ? void 0 : b.isClyde()) ? g.BotTagTypes.AI : g.BotTagTypes.BOT;
            return null != b && b.bot ? (0, i.jsx)(S.default, {
                className: v.botTag,
                type: e,
                verified: b.isVerifiedBot()
            }) : null
        }, ep = () => (0, i.jsxs)(i.Fragment, {
            children: [eO(), em(), eN()]
        }), eR = (e, t) => {
            let n = V ? l.AnimatedAvatar : l.Avatar,
                r = (0, u.default)(w) ? C.StatusTypes.STREAMING : k;
            return r = t ? void 0 : r, (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(n, {
                    ...eE,
                    size: l.AvatarSizes.SIZE_32,
                    src: ec,
                    isMobile: F,
                    isTyping: P,
                    status: r,
                    "aria-label": e.username,
                    statusTooltip: !0,
                    avatarDecoration: e_,
                    typingIndicatorRef: eA
                }), (0, i.jsx)(c.default, {
                    confettiSpawnRef: eu,
                    shouldFire: P && null != G && e.id !== G.id,
                    confettiLocation: L.ConfettiLocation.MEMBER_USER
                })]
            })
        }, eC = () => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.NameWithRole, {
                roleName: o,
                color: null != s ? s : void 0,
                name: null != U ? U : es,
                className: v.name
            }), (0, i.jsx)(d.default, {
                clan: null == b ? void 0 : b.clan,
                userId: null == b ? void 0 : b.id,
                disableTooltip: !0,
                className: v.clanTag
            })]
        }), eg = k === C.StatusTypes.OFFLINE;
        return null == b ? (0, i.jsx)(A.default, {
            avatarSize: l.AvatarSizes.SIZE_32,
            className: v.placeholder
        }) : (0, i.jsx)(l.Popout, {
            renderPopout: e => (0, i.jsx)(I.default, {
                quest: eI,
                applicationStream: B,
                onClosePopout: W,
                ...e
            }),
            position: "bottom",
            shouldShow: eT,
            nudgeAlignIntoViewport: !1,
            animation: l.Popout.Animation.FADE,
            spacing: 0,
            children: () => (0, i.jsx)(N.default, {
                selected: n,
                className: a()(v.member, j, {
                    [v.offline]: eg && !n
                }),
                innerClassName: v.memberInner,
                onClick: X,
                onKeyDown: z,
                onMouseDown: K,
                onContextMenu: Q,
                onMouseEnter: ef,
                onMouseLeave: eS,
                name: null == y ? (0, i.jsx)("span", {
                    className: v.username,
                    children: eC()
                }) : (0, i.jsx)(l.Tooltip, {
                    text: y,
                    children: e => (0, i.jsx)("span", {
                        ...e,
                        className: a()(v.username, v.lostPermission),
                        children: eC()
                    })
                }),
                avatar: eR(b, eg),
                subText: eh(),
                decorators: ep(),
                "aria-controls": J,
                "aria-expanded": $,
                "aria-setsize": et,
                "aria-posinset": ee,
                id: en,
                tabIndex: ei,
                onFocus: Z,
                focusProps: {
                    offset: {
                        top: 4,
                        bottom: 4,
                        left: 4,
                        right: 4
                    }
                },
                ...er
            })
        })
    }
}