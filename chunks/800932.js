function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return g
        }
    }), s("222007");
    var a = s("37983"),
        l = s("884691"),
        n = s("414456"),
        r = s.n(n),
        u = s("917351"),
        E = s.n(u),
        d = s("509043"),
        i = s("669491"),
        _ = s("77078"),
        L = s("437822"),
        c = s("327037"),
        o = s("68130"),
        M = s("697218"),
        T = s("461380"),
        f = s("593195"),
        C = s("368121"),
        A = s("767517"),
        I = s("5487"),
        R = s("932180"),
        S = s("473759"),
        m = s("49111"),
        D = s("782340"),
        O = s("828999");

    function g(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            [s, n] = l.useState(""),
            [r, u] = l.useState(null),
            [E, d] = l.useState(null),
            i = (0, I.default)(e.code);
        l.useEffect(() => {
            (async function e() {
                let e = M.default.getCurrentUser();
                if (null == e) try {
                    e = await (0, c.fetchCurrentUser)()
                } catch (e) {
                    L.default.verifySSOToken(null)
                }
                null != e && n(i.defaultName.format({
                    username: e.username
                }))
            })()
        }, [i.defaultName]);
        (0, R.default)(e);
        let T = (0, a.jsxs)(a.Fragment, {
                children: [t ? (0, a.jsx)(S.default, {
                    guildTemplate: e
                }) : null, (0, a.jsx)("div", {
                    className: O.icon,
                    children: (0, a.jsx)(o.default, {
                        icon: r,
                        onChange: u
                    })
                }), (0, a.jsx)(_.FormItem, {
                    title: i.nameLabel,
                    children: (0, a.jsx)(_.TextInput, {
                        type: "text",
                        value: s,
                        maxLength: 100,
                        onChange: n,
                        error: null == E ? void 0 : E.name
                    })
                }), (0, a.jsx)(_.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: O.guidelines,
                    children: i.terms.format({
                        guidelinesURL: m.MarketingURLs.GUIDELINES
                    })
                })]
            }),
            f = e.serializedSourceGuild.roles.filter(e => "@everyone" !== e.name),
            C = (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                    className: O.divider
                }), (0, a.jsxs)(_.FormItem, {
                    className: O.previewSection,
                    title: D.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER,
                    children: [(0, a.jsx)(N, {
                        channels: e.serializedSourceGuild.channels
                    }), (0, a.jsxs)(_.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        className: O.protip,
                        children: [(0, a.jsxs)("span", {
                            className: O.protipText,
                            children: [D.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), " ", D.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP]
                    })]
                }), f.length > 0 ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(_.FormItem, {
                        className: O.previewSection,
                        title: D.default.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2,
                        children: (0, a.jsx)(p, {
                            roles: f
                        })
                    })
                }) : null]
            });
        return {
            form: T,
            preview: C,
            handleSubmit: () => A.default.acceptGuildTemplate(e.code, s, r).catch(e => d(e))
        }
    }

    function N(e) {
        let {
            channels: t
        } = e, s = E(t).sortBy(e => null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id).map(e => {
            let t = function(e) {
                let {
                    type: t
                } = e;
                return t === m.ChannelTypes.GUILD_VOICE ? C.default : t === m.ChannelTypes.GUILD_CATEGORY ? T.default : f.default
            }(e);
            return (0, a.jsxs)("div", {
                className: r(O.channel, {
                    [O.category]: e.type === m.ChannelTypes.GUILD_CATEGORY
                }),
                children: [(0, a.jsx)(t, {
                    className: O.channelIcon
                }), (0, a.jsx)(_.Text, {
                    className: O.channelText,
                    variant: "text-sm/normal",
                    children: e.name
                })]
            }, e.id)
        }).value();
        return (0, a.jsx)("div", {
            className: O.channelsWrapper,
            children: s
        })
    }
    s("721247");

    function p(e) {
        let {
            roles: t
        } = e, s = t.slice().reverse().map(e => (0, a.jsx)(U, {
            role: e
        }, e.id));
        return (0, a.jsx)("ul", {
            className: O.rolesWrapper,
            children: s
        })
    }

    function U(e) {
        var t;
        let {
            role: s
        } = e, l = null == s.color ? i.default.unsafe_rawColors.PRIMARY_300.css : (0, d.int2hex)(s.color);
        return (0, a.jsxs)("li", {
            className: O.role,
            style: {
                borderColor: null !== (t = (0, d.hex2rgb)(l, .6)) && void 0 !== t ? t : void 0
            },
            children: [(0, a.jsx)(_.RoleCircle, {
                className: O.roleCircle,
                color: l
            }), (0, a.jsx)("div", {
                className: O.roleName,
                children: s.name
            })]
        })
    }
}