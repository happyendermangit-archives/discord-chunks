function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Card: function() {
            return f
        },
        CardInfoSection: function() {
            return S
        },
        CardParticipants: function() {
            return A
        },
        CardTitle: function() {
            return m
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("271383"),
        d = n("430824"),
        _ = n("594174"),
        c = n("806519"),
        E = n("823379"),
        I = n("5192"),
        T = n("571425");

    function f(e) {
        let {
            children: t,
            selected: n
        } = e;
        return (0, i.jsx)("div", {
            className: a()(T.container, {
                [T.selected]: n
            }),
            children: t
        })
    }

    function S(e) {
        let {
            children: t
        } = e;
        return (0, i.jsx)("div", {
            className: T.infoSection,
            children: t
        })
    }

    function h(e) {
        let {
            users: t,
            guildId: n
        } = e;
        return (0, i.jsx)("div", {
            className: T.facePile,
            children: t.map((e, r) => {
                let s = (0, i.jsx)(l.Avatar, {
                    src: e.getAvatarURL(n, 80),
                    size: l.AvatarSizes.SIZE_16,
                    "aria-label": "avatar"
                });
                return r === t.length - 1 ? (0, i.jsx)("div", {
                    className: T.facePileItem,
                    children: s
                }, e.id) : (0, i.jsx)(c.default, {
                    width: 16,
                    height: 16,
                    className: T.facePileItem,
                    mask: c.default.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                    children: s
                }, e.id)
            })
        })
    }

    function A(e) {
        let {
            guildId: t,
            channelId: n,
            entry: s,
            maxAvatars: a = 3
        } = e, c = s.author_id, f = (0, o.useStateFromStores)([_.default], () => _.default.getUser(c)), S = (0, o.useStateFromStoresArray)([_.default], () => s.participants.map(e => _.default.getUser(e)).filter(E.isNotNullish), [s.participants]), A = r.useMemo(() => null == f ? [] : [...S.filter(e => e.id !== f.id), f].slice(-a), [a, S, f]), m = S.length - 1, N = (0, o.useStateFromStores)([u.default], () => u.default.getMember(t, c)), p = (0, o.useStateFromStores)([d.default], () => {
            var e;
            return (null == N ? void 0 : N.colorRoleId) != null ? null === (e = d.default.getRole(t, N.colorRoleId)) || void 0 === e ? void 0 : e.name : void 0
        }, [t, N]);
        if (null == f) return null;
        let O = null == N ? void 0 : N.colorString,
            R = I.default.getName(t, n, f);
        return (0, i.jsxs)("div", {
            className: T.userSection,
            children: [(0, i.jsx)(h, {
                users: A,
                guildId: t
            }), (0, i.jsx)(l.NameWithRole, {
                color: null != O ? O : void 0,
                roleName: p,
                name: R,
                className: T.userName
            }), m > 0 ? (0, i.jsx)("div", {
                className: T.additionalParticipantBadge,
                children: (0, i.jsxs)(l.Text, {
                    variant: "text-xxs/medium",
                    color: "text-normal",
                    className: T.additionalParticipantBadgeText,
                    children: ["+", m]
                })
            }) : null]
        })
    }

    function m(e) {
        let {
            children: t
        } = e;
        return (0, i.jsx)(l.Heading, {
            variant: "heading-sm/normal",
            className: T.contentDescription,
            lineClamp: 1,
            children: t
        })
    }
}