function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AVATAR_DECORATION_PADDING: function() {
            return x
        },
        default: function() {
            return y
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("769846"),
        o = n("77078"),
        u = n("502651"),
        d = n("390886"),
        c = n("357021"),
        f = n("106435"),
        m = n("79798"),
        p = n("982475"),
        h = n("928201"),
        E = n("118503"),
        g = n("11056"),
        C = n("159885"),
        S = n("158998"),
        T = n("943722"),
        v = n("49111"),
        I = n("988268"),
        _ = n("39141"),
        N = n("782340"),
        A = n("591665");
    let x = (0, C.cssValueToNumber)(r.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
    var y = function(e) {
        let {
            selected: t = !1,
            colorString: n,
            colorRoleName: a,
            isOwner: r,
            ownerTooltipText: C,
            lostPermissionTooltipText: x,
            isTyping: y = !1,
            nick: O,
            user: R,
            currentUser: M,
            activities: L,
            applicationStream: P,
            status: b,
            shouldAnimateStatus: j = !1,
            isMobile: U,
            premiumSince: D,
            channel: k,
            guildId: w,
            className: F,
            onMouseDown: G,
            onKeyDown: B,
            onClick: H,
            onContextMenu: V,
            onClickPremiumGuildIcon: K,
            onFocus: W,
            "aria-controls": Y,
            "aria-expanded": z,
            "aria-posinset": Z,
            "aria-setsize": J,
            id: q,
            tabIndex: X,
            itemProps: Q
        } = e, $ = S.default.useName(R), [ee, et] = i.useState(!1), [en, el] = i.useState(null), {
            avatarDecorationSrc: ei,
            avatarSrc: ea,
            eventHandlers: es
        } = (0, f.default)({
            user: R,
            size: o.AvatarSizes.SIZE_32,
            animateOnHover: !(t || ee),
            guildId: w
        }), er = e => {
            el(e)
        }, eo = () => null != r && r && null == x ? (0, l.jsx)(o.Tooltip, {
            text: null != C ? C : N.default.Messages.GUILD_OWNER,
            children: e => (0, l.jsx)(h.default, {
                ...e,
                className: A.ownerIcon
            })
        }) : null, eu = () => null == D ? null : (0, l.jsx)(o.Tooltip, {
            text: N.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
                date: D
            }),
            children: e => (0, l.jsx)(o.Clickable, {
                onClick: K,
                tabIndex: -1,
                children: (0, l.jsx)(E.default, {
                    ...e,
                    className: A.premiumIcon
                })
            })
        }), ed = () => {
            let e = (null == R ? void 0 : R.isClyde()) ? I.BotTagTypes.AI : I.BotTagTypes.BOT;
            return null != R && R.bot ? (0, l.jsx)(m.default, {
                className: A.botTag,
                type: e,
                verified: R.isVerifiedBot()
            }) : null
        }, ec = () => (0, l.jsx)(o.NameWithRole, {
            roleName: a,
            color: null != n ? n : void 0,
            name: null != O ? O : $
        }), ef = b === v.StatusTypes.OFFLINE;
        return null == R ? (0, l.jsx)(p.default, {
            avatarSize: o.AvatarSizes.SIZE_32,
            className: A.placeholder
        }) : (0, l.jsx)(g.default, {
            selected: t,
            className: s(A.member, F, {
                [A.offline]: ef && !t
            }),
            innerClassName: A.memberInner,
            onClick: H,
            onKeyDown: B,
            onMouseDown: G,
            onContextMenu: V,
            onMouseEnter: () => {
                et(!0)
            },
            onMouseLeave: () => {
                et(!1)
            },
            name: null == x ? (0, l.jsx)("span", {
                className: A.username,
                children: ec()
            }) : (0, l.jsx)(o.Tooltip, {
                text: x,
                children: e => (0, l.jsx)("span", {
                    ...e,
                    className: s(A.username, A.lostPermission),
                    children: ec()
                })
            }),
            avatar: ((e, t) => {
                let n = j ? o.AnimatedAvatar : o.Avatar,
                    i = (0, u.default)(L) ? v.StatusTypes.STREAMING : b;
                return i = t ? void 0 : i, (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(n, {
                        ...es,
                        size: o.AvatarSizes.SIZE_32,
                        src: ea,
                        isMobile: U,
                        isTyping: y,
                        status: i,
                        "aria-label": e.username,
                        statusTooltip: !0,
                        avatarDecoration: ei,
                        typingIndicatorRef: er
                    }), (0, l.jsx)(c.default, {
                        confettiSpawnRef: en,
                        shouldFire: y && null != M && e.id !== M.id,
                        confettiLocation: _.ConfettiLocation.MEMBER_USER
                    })]
                })
            })(R, ef),
            subText: (() => {
                let e = null != L ? L.find(e => e.type === v.ActivityTypes.CUSTOM_STATUS) : null,
                    t = null != e && null != R && (0, d.default)(e, R, k);
                return (0, l.jsx)(T.default, {
                    className: A.activity,
                    textClassName: A.activityText,
                    emojiClassName: A.activityEmoji,
                    activities: L,
                    applicationStream: P,
                    animate: ee,
                    hideEmoji: !t,
                    hideTooltip: !0,
                    user: R
                })
            })(),
            decorators: (0, l.jsxs)(l.Fragment, {
                children: [ed(), eo(), eu()]
            }),
            "aria-controls": Y,
            "aria-expanded": z,
            "aria-setsize": J,
            "aria-posinset": Z,
            id: q,
            tabIndex: X,
            onFocus: W,
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: 4,
                    right: 4
                }
            },
            ...Q
        })
    }
}