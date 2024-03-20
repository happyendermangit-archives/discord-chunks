function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    }), n("222007");
    var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        r = n.n(l),
        i = n("917351"),
        u = n.n(i),
        o = n("509043"),
        d = n("669491"),
        c = n("77078"),
        f = n("437822"),
        E = n("327037"),
        _ = n("68130"),
        I = n("697218"),
        h = n("461380"),
        p = n("593195"),
        m = n("368121"),
        T = n("767517"),
        N = n("5487"),
        g = n("932180"),
        A = n("473759"),
        S = n("49111"),
        C = n("782340"),
        v = n("828999");

    function O(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            [n, l] = a.useState(""),
            [r, i] = a.useState(null),
            [u, o] = a.useState(null),
            d = (0, N.default)(e.code);
        a.useEffect(() => {
            (async function e() {
                let e = I.default.getCurrentUser();
                if (null == e) try {
                    e = await (0, E.fetchCurrentUser)()
                } catch (e) {
                    f.default.verifySSOToken(null)
                }
                null != e && l(d.defaultName.format({
                    username: e.username
                }))
            })()
        }, [d.defaultName]);
        (0, g.default)(e);
        let h = (0, s.jsxs)(s.Fragment, {
                children: [t ? (0, s.jsx)(A.default, {
                    guildTemplate: e
                }) : null, (0, s.jsx)("div", {
                    className: v.icon,
                    children: (0, s.jsx)(_.default, {
                        icon: r,
                        onChange: i
                    })
                }), (0, s.jsx)(c.FormItem, {
                    title: d.nameLabel,
                    children: (0, s.jsx)(c.TextInput, {
                        type: "text",
                        value: n,
                        maxLength: 100,
                        onChange: l,
                        error: null == u ? void 0 : u.name
                    })
                }), (0, s.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: v.guidelines,
                    children: d.terms.format({
                        guidelinesURL: S.MarketingURLs.GUIDELINES
                    })
                })]
            }),
            p = e.serializedSourceGuild.roles.filter(e => "@everyone" !== e.name),
            m = (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)("div", {
                    className: v.divider
                }), (0, s.jsxs)(c.FormItem, {
                    className: v.previewSection,
                    title: C.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER,
                    children: [(0, s.jsx)(R, {
                        channels: e.serializedSourceGuild.channels
                    }), (0, s.jsxs)(c.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        className: v.protip,
                        children: [(0, s.jsxs)("span", {
                            className: v.protipText,
                            children: [C.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), " ", C.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP]
                    })]
                }), p.length > 0 ? (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(c.FormItem, {
                        className: v.previewSection,
                        title: C.default.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2,
                        children: (0, s.jsx)(L, {
                            roles: p
                        })
                    })
                }) : null]
            });
        return {
            form: h,
            preview: m,
            handleSubmit: () => T.default.acceptGuildTemplate(e.code, n, r).catch(e => o(e))
        }
    }

    function R(e) {
        let {
            channels: t
        } = e, n = u(t).sortBy(e => null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id).map(e => {
            let t = function(e) {
                let {
                    type: t
                } = e;
                return t === S.ChannelTypes.GUILD_VOICE ? m.default : t === S.ChannelTypes.GUILD_CATEGORY ? h.default : p.default
            }(e);
            return (0, s.jsxs)("div", {
                className: r(v.channel, {
                    [v.category]: e.type === S.ChannelTypes.GUILD_CATEGORY
                }),
                children: [(0, s.jsx)(t, {
                    className: v.channelIcon
                }), (0, s.jsx)(c.Text, {
                    className: v.channelText,
                    variant: "text-sm/normal",
                    children: e.name
                })]
            }, e.id)
        }).value();
        return (0, s.jsx)("div", {
            className: v.channelsWrapper,
            children: n
        })
    }
    n("721247");

    function L(e) {
        let {
            roles: t
        } = e, n = t.slice().reverse().map(e => (0, s.jsx)(x, {
            role: e
        }, e.id));
        return (0, s.jsx)("ul", {
            className: v.rolesWrapper,
            children: n
        })
    }

    function x(e) {
        var t;
        let {
            role: n
        } = e, a = null == n.color ? d.default.unsafe_rawColors.PRIMARY_300.css : (0, o.int2hex)(n.color);
        return (0, s.jsxs)("li", {
            className: v.role,
            style: {
                borderColor: null !== (t = (0, o.hex2rgb)(a, .6)) && void 0 !== t ? t : void 0
            },
            children: [(0, s.jsx)(c.RoleCircle, {
                className: v.roleCircle,
                color: a
            }), (0, s.jsx)("div", {
                className: v.roleName,
                children: n.name
            })]
        })
    }
}