function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AVATAR_DECORATION_PADDING: function() {
            return v
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("477690"),
        l = n("481060"),
        u = n("420660"),
        d = n("33934"),
        _ = n("736144"),
        c = n("113434"),
        E = n("553393"),
        I = n("204197"),
        T = n("594174"),
        f = n("467679"),
        S = n("681426"),
        A = n("551388"),
        h = n("709586"),
        m = n("360048"),
        N = n("624138"),
        O = n("51144"),
        p = n("788307"),
        R = n("981631"),
        C = n("674563"),
        g = n("524484"),
        L = n("689938"),
        D = n("581477");
    let v = (0, N.cssValueToNumber)(o.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
    t.default = function(e) {
        var t;
        let {
            selected: n = !1,
            colorString: s,
            colorRoleName: o,
            isOwner: N,
            ownerTooltipText: v,
            lostPermissionTooltipText: M,
            isTyping: y = !1,
            nick: P,
            user: U,
            currentUser: b,
            activities: G,
            applicationStream: w,
            status: k,
            shouldAnimateStatus: B = !1,
            isMobile: V,
            premiumSince: F,
            channel: x,
            guildId: H,
            className: Y,
            onMouseDown: j,
            onKeyDown: W,
            onClick: K,
            onContextMenu: z,
            onClickPremiumGuildIcon: X,
            onFocus: Q,
            "aria-controls": q,
            "aria-expanded": J,
            "aria-posinset": Z,
            "aria-setsize": $,
            id: ee,
            tabIndex: et,
            itemProps: en
        } = e, ei = O.default.useName(U), er = (null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === (null == U ? void 0 : U.id), [es, ea] = r.useState(!1), [eo, el] = r.useState(!1), [eu, ed] = r.useState(null), {
            avatarDecorationSrc: e_,
            avatarSrc: ec,
            eventHandlers: eE
        } = (0, I.default)({
            user: U,
            size: l.AvatarSizes.SIZE_32,
            animateOnHover: !(n || es),
            guildId: H
        }), eI = (0, c.useQuestFromActivities)(G), eT = null != eI && !er && !n && (es || eo), ef = () => {
            ea(!0)
        }, eS = () => {
            ea(!1)
        }, eA = e => {
            ed(e)
        }, eh = () => {
            let e = null != G ? G.find(e => e.type === R.ActivityTypes.CUSTOM_STATUS) : null,
                t = null != e && null != U && (0, d.default)(e, U, x);
            return (0, i.jsx)(p.default, {
                className: D.activity,
                textClassName: D.activityText,
                emojiClassName: D.activityEmoji,
                activities: G,
                applicationStream: w,
                animate: es,
                hideEmoji: !t,
                hideTooltip: !0,
                user: U,
                hasQuest: null != eI
            })
        }, em = () => null != N && N && null == M ? (0, i.jsx)(l.Tooltip, {
            text: null != v ? v : L.default.Messages.GUILD_OWNER,
            children: e => (0, i.jsx)(A.default, {
                ...e,
                className: D.ownerIcon
            })
        }) : null, eN = () => null == F ? null : (0, i.jsx)(l.Tooltip, {
            text: L.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
                date: F
            }),
            children: e => (0, i.jsx)(l.Clickable, {
                onClick: X,
                tabIndex: -1,
                children: (0, i.jsx)(h.default, {
                    ...e,
                    className: D.premiumIcon
                })
            })
        }), eO = () => {
            let e = (null == U ? void 0 : U.isClyde()) ? C.BotTagTypes.AI : C.BotTagTypes.BOT;
            return null != U && U.bot ? (0, i.jsx)(f.default, {
                className: D.botTag,
                type: e,
                verified: U.isVerifiedBot()
            }) : null
        }, ep = () => (0, i.jsxs)(i.Fragment, {
            children: [eO(), em(), eN()]
        }), eR = (e, t) => {
            let n = B ? l.AnimatedAvatar : l.Avatar,
                r = (0, u.default)(G) ? R.StatusTypes.STREAMING : k;
            return r = t ? void 0 : r, (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(n, {
                    ...eE,
                    size: l.AvatarSizes.SIZE_32,
                    src: ec,
                    isMobile: V,
                    isTyping: y,
                    status: r,
                    "aria-label": e.username,
                    statusTooltip: !0,
                    avatarDecoration: e_,
                    typingIndicatorRef: eA
                }), (0, i.jsx)(_.default, {
                    confettiSpawnRef: eu,
                    shouldFire: y && null != b && e.id !== b.id,
                    confettiLocation: g.ConfettiLocation.MEMBER_USER
                })]
            })
        }, eC = () => (0, i.jsx)(l.NameWithRole, {
            roleName: o,
            color: null != s ? s : void 0,
            name: null != P ? P : ei
        }), eg = k === R.StatusTypes.OFFLINE;
        return null == U ? (0, i.jsx)(S.default, {
            avatarSize: l.AvatarSizes.SIZE_32,
            className: D.placeholder
        }) : (0, i.jsx)(l.Popout, {
            renderPopout: e => (0, i.jsx)(E.default, {
                quest: eI,
                applicationStream: w,
                onMouseEnter: () => el(!0),
                onMouseLeave: () => el(!1),
                ...e
            }),
            position: "top",
            shouldShow: eT,
            spacing: 0,
            children: () => (0, i.jsx)(m.default, {
                selected: n,
                className: a()(D.member, Y, {
                    [D.offline]: eg && !n
                }),
                innerClassName: D.memberInner,
                onClick: K,
                onKeyDown: W,
                onMouseDown: j,
                onContextMenu: z,
                onMouseEnter: ef,
                onMouseLeave: eS,
                name: null == M ? (0, i.jsx)("span", {
                    className: D.username,
                    children: eC()
                }) : (0, i.jsx)(l.Tooltip, {
                    text: M,
                    children: e => (0, i.jsx)("span", {
                        ...e,
                        className: a()(D.username, D.lostPermission),
                        children: eC()
                    })
                }),
                avatar: eR(U, eg),
                subText: eh(),
                decorators: ep(),
                "aria-controls": q,
                "aria-expanded": J,
                "aria-setsize": $,
                "aria-posinset": Z,
                id: ee,
                tabIndex: et,
                onFocus: Q,
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