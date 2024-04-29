function(e, s, a) {
    "use strict";
    a.r(s), a.d(s, {
        default: function() {
            return O
        }
    }), a("47120");
    var t = a("735250"),
        l = a("470079"),
        n = a("120356"),
        E = a.n(n),
        r = a("392711"),
        _ = a.n(r),
        u = a("866442"),
        d = a("692547"),
        i = a("481060"),
        L = a("893776"),
        T = a("232567"),
        M = a("820160"),
        c = a("594174"),
        C = a("259580"),
        o = a("93879"),
        A = a("632184"),
        f = a("350566"),
        I = a("837748"),
        R = a("971401"),
        S = a("306453"),
        m = a("981631"),
        D = a("689938"),
        N = a("273459");

    function O(e) {
        let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            [a, n] = l.useState(""),
            [E, r] = l.useState(null),
            [_, u] = l.useState(null),
            d = (0, I.default)(e.code);
        l.useEffect(() => {
            (async function e() {
                let e = c.default.getCurrentUser();
                if (null == e) try {
                    e = await (0, T.fetchCurrentUser)()
                } catch (e) {
                    L.default.verifySSOToken(null)
                }
                null != e && n(d.defaultName.format({
                    username: e.username
                }))
            })()
        }, [d.defaultName]);
        (0, R.default)(e);
        let C = (0, t.jsxs)(t.Fragment, {
                children: [s ? (0, t.jsx)(S.default, {
                    guildTemplate: e
                }) : null, (0, t.jsx)("div", {
                    className: N.icon,
                    children: (0, t.jsx)(M.default, {
                        icon: E,
                        onChange: r
                    })
                }), (0, t.jsx)(i.FormItem, {
                    title: d.nameLabel,
                    children: (0, t.jsx)(i.TextInput, {
                        type: "text",
                        value: a,
                        maxLength: 100,
                        onChange: n,
                        error: null == _ ? void 0 : _.name
                    })
                }), (0, t.jsx)(i.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: N.guidelines,
                    children: d.terms.format({
                        guidelinesURL: m.MarketingURLs.GUIDELINES
                    })
                })]
            }),
            o = e.serializedSourceGuild.roles.filter(e => "@everyone" !== e.name);
        return {
            form: C,
            preview: (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: N.divider
                }), (0, t.jsxs)(i.FormItem, {
                    className: N.previewSection,
                    title: D.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER,
                    children: [(0, t.jsx)(U, {
                        channels: e.serializedSourceGuild.channels
                    }), (0, t.jsxs)(i.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        className: N.protip,
                        children: [(0, t.jsxs)("span", {
                            className: N.protipText,
                            children: [D.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), " ", D.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP]
                    })]
                }), o.length > 0 ? (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)(i.FormItem, {
                        className: N.previewSection,
                        title: D.default.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2,
                        children: (0, t.jsx)(g, {
                            roles: o
                        })
                    })
                }) : null]
            }),
            handleSubmit: () => f.default.acceptGuildTemplate(e.code, a, E).catch(e => u(e))
        }
    }

    function U(e) {
        let {
            channels: s
        } = e, a = _()(s).sortBy(e => null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id).map(e => {
            let s = function(e) {
                let {
                    type: s
                } = e;
                return s === m.ChannelTypes.GUILD_VOICE ? A.default : s === m.ChannelTypes.GUILD_CATEGORY ? C.default : o.default
            }(e);
            return (0, t.jsxs)("div", {
                className: E()(N.channel, {
                    [N.category]: e.type === m.ChannelTypes.GUILD_CATEGORY
                }),
                children: [(0, t.jsx)(s, {
                    className: N.channelIcon
                }), (0, t.jsx)(i.Text, {
                    className: N.channelText,
                    variant: "text-sm/normal",
                    children: e.name
                })]
            }, e.id)
        }).value();
        return (0, t.jsx)("div", {
            className: N.channelsWrapper,
            children: a
        })
    }
    a("418757");

    function g(e) {
        let {
            roles: s
        } = e, a = s.slice().reverse().map(e => (0, t.jsx)(p, {
            role: e
        }, e.id));
        return (0, t.jsx)("ul", {
            className: N.rolesWrapper,
            children: a
        })
    }

    function p(e) {
        var s;
        let {
            role: a
        } = e, l = null == a.color ? d.default.unsafe_rawColors.PRIMARY_300.css : (0, u.int2hex)(a.color);
        return (0, t.jsxs)("li", {
            className: N.role,
            style: {
                borderColor: null !== (s = (0, u.hex2rgb)(l, .6)) && void 0 !== s ? s : void 0
            },
            children: [(0, t.jsx)(i.RoleCircle, {
                className: N.roleCircle,
                color: l
            }), (0, t.jsx)("div", {
                className: N.roleName,
                children: a.name
            })]
        })
    }
}