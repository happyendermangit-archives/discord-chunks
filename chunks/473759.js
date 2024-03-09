function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        UsagePill: function() {
            return C
        },
        default: function() {
            return A
        }
    });
    var a = s("37983");
    s("884691");
    var l = s("414456"),
        n = s.n(l),
        r = s("77078"),
        u = s("931138"),
        E = s("124969"),
        d = s("486952"),
        i = s("819220"),
        _ = s("5487"),
        L = s("579033"),
        c = s("782340"),
        o = s("118243"),
        M = s("890957");

    function T() {
        return (0, a.jsx)(u.default, {
            className: o.verifiedIcon,
            children: (0, a.jsx)("div", {
                className: o.verifiedCheckContainer,
                children: (0, a.jsx)(d.default, {
                    className: o.verifiedCheck
                })
            })
        })
    }

    function f(e) {
        let {
            verified: t,
            text: s
        } = e;
        return t ? (0, a.jsxs)("div", {
            className: o.verifiedNameContainer,
            children: [(0, a.jsx)(T, {}), s]
        }) : (0, a.jsx)(a.Fragment, {
            children: s
        })
    }

    function C(e) {
        let {
            className: t,
            count: s,
            creator: l,
            verifiedName: r
        } = e;
        return (0, a.jsx)("div", {
            className: n(o.usagePill, t, o.userText),
            children: null != l || null != r ? c.default.Messages.GUILD_TEMPLATE_USAGES_BY_CREATOR2.format({
                usageCount: s,
                creator: null != r ? r : l,
                creatorHook: (e, t) => (0, a.jsx)(f, {
                    text: e,
                    verified: null != r
                }, t)
            }) : c.default.Messages.GUILD_TEMPLATE_USAGES.format({
                usageCount: s
            })
        })
    }

    function A(e) {
        var t;
        let {
            guildTemplate: s,
            error: l,
            tall: u,
            pillClassName: d
        } = e;
        if (null != l && "" !== l) return (0, a.jsxs)("div", {
            className: o.container,
            children: [(0, a.jsx)(E.Title, {
                children: c.default.Messages.INVITE_MODAL_ERROR_TITLE
            }), (0, a.jsx)(E.SubTitle, {
                children: l
            })]
        });
        if (s.state === L.GuildTemplateStates.RESOLVING) return (0, a.jsx)("div", {
            className: o.container,
            children: (0, a.jsx)(r.Spinner, {})
        });
        let T = (0, _.default)(s.code).header;
        if (!u) return (0, a.jsxs)("div", {
            className: o.container,
            children: [(0, a.jsx)(E.Title, {
                className: o.title,
                children: T
            }), (0, a.jsx)(E.SubTitle, {
                className: n(o.subtitle, o.userText),
                children: s.name
            })]
        });
        return (0, a.jsxs)("div", {
            className: o.container,
            children: [(0, a.jsx)(E.Title, {
                className: o.title,
                children: T
            }), (0, a.jsx)(E.SubTitle, {
                className: n(o.subtitle, M.marginTop2),
                children: c.default.Messages.GUILD_TEMPLATE_BASED_ON
            }), (0, a.jsx)(E.Title, {
                className: n(o.title, o.userText),
                children: s.name
            }), null != s.description && "" !== s.description && (0, a.jsx)(E.SubTitle, {
                className: n(o.subtitle, o.userText, M.marginTop8),
                children: s.description
            }), (0, a.jsx)(C, {
                className: d,
                count: null !== (t = s.usageCount) && void 0 !== t ? t : 0,
                creator: s.creator.username,
                verifiedName: (0, i.getVerifiedName)(s.code)
            })]
        })
    }
}