function(e, s, a) {
    "use strict";
    a.r(s), a.d(s, {
        UsagePill: function() {
            return A
        },
        default: function() {
            return f
        }
    });
    var t = a("735250");
    a("470079");
    var l = a("803997"),
        n = a.n(l),
        E = a("481060"),
        r = a("797717"),
        _ = a("819570"),
        u = a("507957"),
        d = a("875307"),
        i = a("837748"),
        L = a("58346"),
        T = a("689938"),
        M = a("386789"),
        c = a("794711");

    function C() {
        return (0, t.jsx)(r.default, {
            className: M.verifiedIcon,
            children: (0, t.jsx)("div", {
                className: M.verifiedCheckContainer,
                children: (0, t.jsx)(u.default, {
                    className: M.verifiedCheck
                })
            })
        })
    }

    function o(e) {
        let {
            verified: s,
            text: a
        } = e;
        return s ? (0, t.jsxs)("div", {
            className: M.verifiedNameContainer,
            children: [(0, t.jsx)(C, {}), a]
        }) : (0, t.jsx)(t.Fragment, {
            children: a
        })
    }

    function A(e) {
        let {
            className: s,
            count: a,
            creator: l,
            verifiedName: E
        } = e;
        return (0, t.jsx)("div", {
            className: n()(M.usagePill, s, M.userText),
            children: null != l || null != E ? T.default.Messages.GUILD_TEMPLATE_USAGES_BY_CREATOR2.format({
                usageCount: a,
                creator: null != E ? E : l,
                creatorHook: (e, s) => (0, t.jsx)(o, {
                    text: e,
                    verified: null != E
                }, s)
            }) : T.default.Messages.GUILD_TEMPLATE_USAGES.format({
                usageCount: a
            })
        })
    }

    function f(e) {
        var s;
        let {
            guildTemplate: a,
            error: l,
            tall: r,
            pillClassName: u
        } = e;
        if (null != l && "" !== l) return (0, t.jsxs)("div", {
            className: M.container,
            children: [(0, t.jsx)(_.Title, {
                children: T.default.Messages.INVITE_MODAL_ERROR_TITLE
            }), (0, t.jsx)(_.SubTitle, {
                children: l
            })]
        });
        if (a.state === L.GuildTemplateStates.RESOLVING) return (0, t.jsx)("div", {
            className: M.container,
            children: (0, t.jsx)(E.Spinner, {})
        });
        let C = (0, i.default)(a.code).header;
        if (!r) return (0, t.jsxs)("div", {
            className: M.container,
            children: [(0, t.jsx)(_.Title, {
                className: M.title,
                children: C
            }), (0, t.jsx)(_.SubTitle, {
                className: n()(M.subtitle, M.userText),
                children: a.name
            })]
        });
        return (0, t.jsxs)("div", {
            className: M.container,
            children: [(0, t.jsx)(_.Title, {
                className: M.title,
                children: C
            }), (0, t.jsx)(_.SubTitle, {
                className: n()(M.subtitle, c.__invalid_marginTop2),
                children: T.default.Messages.GUILD_TEMPLATE_BASED_ON
            }), (0, t.jsx)(_.Title, {
                className: n()(M.title, M.userText),
                children: a.name
            }), null != a.description && "" !== a.description && (0, t.jsx)(_.SubTitle, {
                className: n()(M.subtitle, M.userText, c.marginTop8),
                children: a.description
            }), (0, t.jsx)(A, {
                className: u,
                count: null !== (s = a.usageCount) && void 0 !== s ? s : 0,
                creator: a.creator.username,
                verifiedName: (0, d.getVerifiedName)(a.code)
            })]
        })
    }
}