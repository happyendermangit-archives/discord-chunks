function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AVATAR_DECORATION_PADDING: function() {
            return O
        },
        default: function() {
            return M
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("769846"),
        o = n("77078"),
        u = n("502651"),
        d = n("390886"),
        c = n("357021"),
        f = n("879364"),
        m = n("879311"),
        p = n("106435"),
        h = n("697218"),
        x = n("79798"),
        E = n("982475"),
        y = n("928201"),
        g = n("118503"),
        S = n("11056"),
        C = n("159885"),
        T = n("158998"),
        _ = n("943722"),
        I = n("49111"),
        v = n("988268"),
        A = n("39141"),
        N = n("782340"),
        R = n("591665");
    let O = (0, C.cssValueToNumber)(r.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
    var M = function(e) {
        var t;
        let {
            selected: n = !1,
            colorString: a,
            colorRoleName: r,
            isOwner: C,
            ownerTooltipText: O,
            lostPermissionTooltipText: M,
            isTyping: k = !1,
            nick: L,
            user: P,
            currentUser: b,
            activities: j,
            applicationStream: U,
            status: D,
            shouldAnimateStatus: w = !1,
            isMobile: F,
            premiumSince: G,
            channel: H,
            guildId: B,
            className: V,
            onMouseDown: K,
            onKeyDown: W,
            onClick: Y,
            onContextMenu: z,
            onClickPremiumGuildIcon: Q,
            onFocus: Z,
            "aria-controls": q,
            "aria-expanded": J,
            "aria-posinset": X,
            "aria-setsize": $,
            id: ee,
            tabIndex: et,
            itemProps: en
        } = e, ei = T.default.useName(P), el = (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === (null == P ? void 0 : P.id), [ea, es] = l.useState(!1), [er, eo] = l.useState(!1), [eu, ed] = l.useState(null), {
            avatarDecorationSrc: ec,
            avatarSrc: ef,
            eventHandlers: em
        } = (0, p.default)({
            user: P,
            size: o.AvatarSizes.SIZE_32,
            animateOnHover: !(n || ea),
            guildId: B
        }), ep = (0, f.useQuestFromActivities)(j), eh = null != ep && !el && !n && (ea || er), ex = () => {
            es(!0)
        }, eE = () => {
            es(!1)
        }, ey = e => {
            ed(e)
        }, eg = () => {
            let e = null != j ? j.find(e => e.type === I.ActivityTypes.CUSTOM_STATUS) : null,
                t = null != e && null != P && (0, d.default)(e, P, H);
            return (0, i.jsx)(_.default, {
                className: R.activity,
                textClassName: R.activityText,
                emojiClassName: R.activityEmoji,
                activities: j,
                applicationStream: U,
                animate: ea,
                hideEmoji: !t,
                hideTooltip: !0,
                user: P,
                hasQuest: null != ep
            })
        }, eS = () => null != C && C && null == M ? (0, i.jsx)(o.Tooltip, {
            text: null != O ? O : N.default.Messages.GUILD_OWNER,
            children: e => (0, i.jsx)(y.default, {
                ...e,
                className: R.ownerIcon
            })
        }) : null, eC = () => null == G ? null : (0, i.jsx)(o.Tooltip, {
            text: N.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
                date: G
            }),
            children: e => (0, i.jsx)(o.Clickable, {
                onClick: Q,
                tabIndex: -1,
                children: (0, i.jsx)(g.default, {
                    ...e,
                    className: R.premiumIcon
                })
            })
        }), eT = () => {
            let e = (null == P ? void 0 : P.isClyde()) ? v.BotTagTypes.AI : v.BotTagTypes.BOT;
            return null != P && P.bot ? (0, i.jsx)(x.default, {
                className: R.botTag,
                type: e,
                verified: P.isVerifiedBot()
            }) : null
        }, e_ = () => (0, i.jsxs)(i.Fragment, {
            children: [eT(), eS(), eC()]
        }), eI = (e, t) => {
            let n = w ? o.AnimatedAvatar : o.Avatar,
                l = (0, u.default)(j) ? I.StatusTypes.STREAMING : D;
            return l = t ? void 0 : l, (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(n, {
                    ...em,
                    size: o.AvatarSizes.SIZE_32,
                    src: ef,
                    isMobile: F,
                    isTyping: k,
                    status: l,
                    "aria-label": e.username,
                    statusTooltip: !0,
                    avatarDecoration: ec,
                    typingIndicatorRef: ey
                }), (0, i.jsx)(c.default, {
                    confettiSpawnRef: eu,
                    shouldFire: k && null != b && e.id !== b.id,
                    confettiLocation: A.ConfettiLocation.MEMBER_USER
                })]
            })
        }, ev = () => (0, i.jsx)(o.NameWithRole, {
            roleName: r,
            color: null != a ? a : void 0,
            name: null != L ? L : ei
        }), eA = D === I.StatusTypes.OFFLINE;
        return null == P ? (0, i.jsx)(E.default, {
            avatarSize: o.AvatarSizes.SIZE_32,
            className: R.placeholder
        }) : (0, i.jsx)(o.Popout, {
            renderPopout: e => (0, i.jsx)(m.default, {
                quest: ep,
                applicationStream: U,
                onMouseEnter: () => eo(!0),
                onMouseLeave: () => eo(!1),
                ...e
            }),
            position: "top",
            shouldShow: eh,
            spacing: 0,
            children: () => (0, i.jsx)(S.default, {
                selected: n,
                className: s(R.member, V, {
                    [R.offline]: eA && !n
                }),
                innerClassName: R.memberInner,
                onClick: Y,
                onKeyDown: W,
                onMouseDown: K,
                onContextMenu: z,
                onMouseEnter: ex,
                onMouseLeave: eE,
                name: null == M ? (0, i.jsx)("span", {
                    className: R.username,
                    children: ev()
                }) : (0, i.jsx)(o.Tooltip, {
                    text: M,
                    children: e => (0, i.jsx)("span", {
                        ...e,
                        className: s(R.username, R.lostPermission),
                        children: ev()
                    })
                }),
                avatar: eI(P, eA),
                subText: eg(),
                decorators: e_(),
                "aria-controls": q,
                "aria-expanded": J,
                "aria-setsize": $,
                "aria-posinset": X,
                id: ee,
                tabIndex: et,
                onFocus: Z,
                focusProps: {
                    offset: {
                        top: 4,
                        bottom: 4,
                        left: 4,
                        right: 4
                    }
                },
                ...en
            })
        })
    }
}