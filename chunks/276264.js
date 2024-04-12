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
            isMobile: F,
            premiumSince: V,
            channel: x,
            guildId: H,
            className: Y,
            onClosePopout: j,
            onMouseDown: W,
            onKeyDown: K,
            onClick: z,
            onContextMenu: X,
            onClickPremiumGuildIcon: Q,
            onFocus: q,
            "aria-controls": J,
            "aria-expanded": Z,
            "aria-posinset": $,
            "aria-setsize": ee,
            id: et,
            tabIndex: en,
            itemProps: ei
        } = e, er = O.default.useName(U), es = (null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === (null == U ? void 0 : U.id), [ea, eo] = r.useState(!1), [el, eu] = r.useState(null), {
            avatarDecorationSrc: ed,
            avatarSrc: e_,
            eventHandlers: ec
        } = (0, I.default)({
            user: U,
            size: l.AvatarSizes.SIZE_32,
            animateOnHover: !(n || ea),
            guildId: H
        }), eE = (0, c.useQuestFromActivities)(G), eI = null != eE && !es && n, eT = () => {
            eo(!0)
        }, ef = () => {
            eo(!1)
        }, eS = e => {
            eu(e)
        }, eA = () => {
            let e = null != G ? G.find(e => e.type === R.ActivityTypes.CUSTOM_STATUS) : null,
                t = null != e && null != U && (0, d.default)(e, U, x);
            return (0, i.jsx)(p.default, {
                className: D.activity,
                textClassName: D.activityText,
                emojiClassName: D.activityEmoji,
                activities: G,
                applicationStream: w,
                animate: ea,
                hideEmoji: !t,
                hideTooltip: !0,
                user: U,
                hasQuest: null != eE
            })
        }, eh = () => null != N && N && null == M ? (0, i.jsx)(l.Tooltip, {
            text: null != v ? v : L.default.Messages.GUILD_OWNER,
            children: e => (0, i.jsx)(A.default, {
                ...e,
                className: D.ownerIcon
            })
        }) : null, em = () => null == V ? null : (0, i.jsx)(l.Tooltip, {
            text: L.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
                date: V
            }),
            children: e => (0, i.jsx)(l.Clickable, {
                onClick: Q,
                tabIndex: -1,
                children: (0, i.jsx)(h.default, {
                    ...e,
                    className: D.premiumIcon
                })
            })
        }), eN = () => {
            let e = (null == U ? void 0 : U.isClyde()) ? C.BotTagTypes.AI : C.BotTagTypes.BOT;
            return null != U && U.bot ? (0, i.jsx)(f.default, {
                className: D.botTag,
                type: e,
                verified: U.isVerifiedBot()
            }) : null
        }, eO = () => (0, i.jsxs)(i.Fragment, {
            children: [eN(), eh(), em()]
        }), ep = (e, t) => {
            let n = B ? l.AnimatedAvatar : l.Avatar,
                r = (0, u.default)(G) ? R.StatusTypes.STREAMING : k;
            return r = t ? void 0 : r, (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(n, {
                    ...ec,
                    size: l.AvatarSizes.SIZE_32,
                    src: e_,
                    isMobile: F,
                    isTyping: y,
                    status: r,
                    "aria-label": e.username,
                    statusTooltip: !0,
                    avatarDecoration: ed,
                    typingIndicatorRef: eS
                }), (0, i.jsx)(_.default, {
                    confettiSpawnRef: el,
                    shouldFire: y && null != b && e.id !== b.id,
                    confettiLocation: g.ConfettiLocation.MEMBER_USER
                })]
            })
        }, eR = () => (0, i.jsx)(l.NameWithRole, {
            roleName: o,
            color: null != s ? s : void 0,
            name: null != P ? P : er
        }), eC = k === R.StatusTypes.OFFLINE;
        return null == U ? (0, i.jsx)(S.default, {
            avatarSize: l.AvatarSizes.SIZE_32,
            className: D.placeholder
        }) : (0, i.jsx)(l.Popout, {
            renderPopout: e => (0, i.jsx)(E.default, {
                quest: eE,
                applicationStream: w,
                onClosePopout: j,
                ...e
            }),
            position: "bottom",
            shouldShow: eI,
            nudgeAlignIntoViewport: !1,
            animation: l.Popout.Animation.FADE,
            spacing: 0,
            children: () => (0, i.jsx)(m.default, {
                selected: n,
                className: a()(D.member, Y, {
                    [D.offline]: eC && !n
                }),
                innerClassName: D.memberInner,
                onClick: z,
                onKeyDown: K,
                onMouseDown: W,
                onContextMenu: X,
                onMouseEnter: eT,
                onMouseLeave: ef,
                name: null == M ? (0, i.jsx)("span", {
                    className: D.username,
                    children: eR()
                }) : (0, i.jsx)(l.Tooltip, {
                    text: M,
                    children: e => (0, i.jsx)("span", {
                        ...e,
                        className: a()(D.username, D.lostPermission),
                        children: eR()
                    })
                }),
                avatar: ep(U, eC),
                subText: eA(),
                decorators: eO(),
                "aria-controls": J,
                "aria-expanded": Z,
                "aria-setsize": ee,
                "aria-posinset": $,
                id: et,
                tabIndex: en,
                onFocus: q,
                focusProps: {
                    offset: {
                        top: 4,
                        bottom: 4,
                        left: 4,
                        right: 4
                    }
                },
                ...ei
            })
        })
    }
}