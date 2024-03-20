function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UsagePill: function() {
            return T
        },
        default: function() {
            return p
        }
    });
    var s = n("37983");
    n("884691");
    var a = n("414456"),
        l = n.n(a),
        r = n("77078"),
        i = n("931138"),
        o = n("124969"),
        u = n("486952"),
        d = n("819220"),
        c = n("5487"),
        E = n("579033"),
        f = n("782340"),
        _ = n("118243"),
        h = n("890957");

    function g() {
        return (0, s.jsx)(i.default, {
            className: _.verifiedIcon,
            children: (0, s.jsx)("div", {
                className: _.verifiedCheckContainer,
                children: (0, s.jsx)(u.default, {
                    className: _.verifiedCheck
                })
            })
        })
    }

    function m(e) {
        let {
            verified: t,
            text: n
        } = e;
        return t ? (0, s.jsxs)("div", {
            className: _.verifiedNameContainer,
            children: [(0, s.jsx)(g, {}), n]
        }) : (0, s.jsx)(s.Fragment, {
            children: n
        })
    }

    function T(e) {
        let {
            className: t,
            count: n,
            creator: a,
            verifiedName: r
        } = e;
        return (0, s.jsx)("div", {
            className: l(_.usagePill, t, _.userText),
            children: null != a || null != r ? f.default.Messages.GUILD_TEMPLATE_USAGES_BY_CREATOR2.format({
                usageCount: n,
                creator: null != r ? r : a,
                creatorHook: (e, t) => (0, s.jsx)(m, {
                    text: e,
                    verified: null != r
                }, t)
            }) : f.default.Messages.GUILD_TEMPLATE_USAGES.format({
                usageCount: n
            })
        })
    }

    function p(e) {
        var t;
        let {
            guildTemplate: n,
            error: a,
            tall: i,
            pillClassName: u
        } = e;
        if (null != a && "" !== a) return (0, s.jsxs)("div", {
            className: _.container,
            children: [(0, s.jsx)(o.Title, {
                children: f.default.Messages.INVITE_MODAL_ERROR_TITLE
            }), (0, s.jsx)(o.SubTitle, {
                children: a
            })]
        });
        if (n.state === E.GuildTemplateStates.RESOLVING) return (0, s.jsx)("div", {
            className: _.container,
            children: (0, s.jsx)(r.Spinner, {})
        });
        let g = (0, c.default)(n.code).header;
        if (!i) return (0, s.jsxs)("div", {
            className: _.container,
            children: [(0, s.jsx)(o.Title, {
                className: _.title,
                children: g
            }), (0, s.jsx)(o.SubTitle, {
                className: l(_.subtitle, _.userText),
                children: n.name
            })]
        });
        return (0, s.jsxs)("div", {
            className: _.container,
            children: [(0, s.jsx)(o.Title, {
                className: _.title,
                children: g
            }), (0, s.jsx)(o.SubTitle, {
                className: l(_.subtitle, h.marginTop2),
                children: f.default.Messages.GUILD_TEMPLATE_BASED_ON
            }), (0, s.jsx)(o.Title, {
                className: l(_.title, _.userText),
                children: n.name
            }), null != n.description && "" !== n.description && (0, s.jsx)(o.SubTitle, {
                className: l(_.subtitle, _.userText, h.marginTop8),
                children: n.description
            }), (0, s.jsx)(T, {
                className: u,
                count: null !== (t = n.usageCount) && void 0 !== t ? t : 0,
                creator: n.creator.username,
                verifiedName: (0, d.getVerifiedName)(n.code)
            })]
        })
    }
}