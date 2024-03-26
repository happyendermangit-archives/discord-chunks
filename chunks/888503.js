function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AVATAR_DECORATION_PADDING: function() {
            return R
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
        p = n("879311"),
        m = n("106435"),
        h = n("697218"),
        x = n("79798"),
        E = n("982475"),
        y = n("928201"),
        g = n("118503"),
        S = n("11056"),
        C = n("159885"),
        _ = n("158998"),
        T = n("943722"),
        I = n("49111"),
        v = n("988268"),
        N = n("39141"),
        A = n("782340"),
        O = n("591665");
    let R = (0, C.cssValueToNumber)(r.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
    var M = function(e) {
        var t;
        let {
            selected: n = !1,
            colorString: a,
            colorRoleName: r,
            isOwner: C,
            ownerTooltipText: R,
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
            onClickPremiumGuildIcon: Z,
            onFocus: J,
            "aria-controls": Q,
            "aria-expanded": q,
            "aria-posinset": X,
            "aria-setsize": $,
            id: ee,
            tabIndex: et,
            itemProps: en
        } = e, ei = _.default.useName(P), el = (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === (null == P ? void 0 : P.id), [ea, es] = l.useState(!1), [er, eo] = l.useState(!1), [eu, ed] = l.useState(null), {
            avatarDecorationSrc: ec,
            avatarSrc: ef,
            eventHandlers: ep
        } = (0, m.default)({
            user: P,
            size: o.AvatarSizes.SIZE_32,
            animateOnHover: !(n || ea),
            guildId: B
        }), em = (0, f.useQuestFromActivities)(j), eh = null != em && !el && !n && (ea || er), ex = () => {
            es(!0)
        }, eE = () => {
            es(!1)
        }, ey = e => {
            ed(e)
        }, eg = () => {
            let e = null != j ? j.find(e => e.type === I.ActivityTypes.CUSTOM_STATUS) : null,
                t = null != e && null != P && (0, d.default)(e, P, H);
            return (0, i.jsx)(T.default, {
                className: O.activity,
                textClassName: O.activityText,
                emojiClassName: O.activityEmoji,
                activities: j,
                applicationStream: U,
                animate: ea,
                hideEmoji: !t,
                hideTooltip: !0,
                user: P,
                hasQuest: null != em
            })
        }, eS = () => null != C && C && null == M ? (0, i.jsx)(o.Tooltip, {
            text: null != R ? R : A.default.Messages.GUILD_OWNER,
            children: e => (0, i.jsx)(y.default, {
                ...e,
                className: O.ownerIcon
            })
        }) : null, eC = () => null == G ? null : (0, i.jsx)(o.Tooltip, {
            text: A.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
                date: G
            }),
            children: e => (0, i.jsx)(o.Clickable, {
                onClick: Z,
                tabIndex: -1,
                children: (0, i.jsx)(g.default, {
                    ...e,
                    className: O.premiumIcon
                })
            })
        }), e_ = () => {
            let e = (null == P ? void 0 : P.isClyde()) ? v.BotTagTypes.AI : v.BotTagTypes.BOT;
            return null != P && P.bot ? (0, i.jsx)(x.default, {
                className: O.botTag,
                type: e,
                verified: P.isVerifiedBot()
            }) : null
        }, eT = () => (0, i.jsxs)(i.Fragment, {
            children: [e_(), eS(), eC()]
        }), eI = (e, t) => {
            let n = w ? o.AnimatedAvatar : o.Avatar,
                l = (0, u.default)(j) ? I.StatusTypes.STREAMING : D;
            return l = t ? void 0 : l, (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(n, {
                    ...ep,
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
                    confettiLocation: N.ConfettiLocation.MEMBER_USER
                })]
            })
        }, ev = () => (0, i.jsx)(o.NameWithRole, {
            roleName: r,
            color: null != a ? a : void 0,
            name: null != L ? L : ei
        }), eN = D === I.StatusTypes.OFFLINE;
        return null == P ? (0, i.jsx)(E.default, {
            avatarSize: o.AvatarSizes.SIZE_32,
            className: O.placeholder
        }) : (0, i.jsx)(o.Popout, {
            renderPopout: e => (0, i.jsx)(p.default, {
                quest: em,
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
                className: s(O.member, V, {
                    [O.offline]: eN && !n
                }),
                innerClassName: O.memberInner,
                onClick: Y,
                onKeyDown: W,
                onMouseDown: K,
                onContextMenu: z,
                onMouseEnter: ex,
                onMouseLeave: eE,
                name: null == M ? (0, i.jsx)("span", {
                    className: O.username,
                    children: ev()
                }) : (0, i.jsx)(o.Tooltip, {
                    text: M,
                    children: e => (0, i.jsx)("span", {
                        ...e,
                        className: s(O.username, O.lostPermission),
                        children: ev()
                    })
                }),
                avatar: eI(P, eN),
                subText: eg(),
                decorators: eT(),
                "aria-controls": Q,
                "aria-expanded": q,
                "aria-setsize": $,
                "aria-posinset": X,
                id: ee,
                tabIndex: et,
                onFocus: J,
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