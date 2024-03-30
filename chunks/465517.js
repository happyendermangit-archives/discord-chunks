function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        UsagePill: function() {
            return C
        },
        default: function() {
            return m
        }
    });
    var n = a("470079"),
        r = a("803997"),
        l = a.n(r),
        s = a("784184"),
        u = a("516617"),
        E = a("283895"),
        i = a("728664"),
        c = a("253078"),
        _ = a("334162"),
        o = a("243547"),
        d = a("941504"),
        L = a("386789"),
        f = a("794711");

    function T() {
        return n.createElement(u.default, {
            className: L.verifiedIcon
        }, n.createElement("div", {
            className: L.verifiedCheckContainer
        }, n.createElement(i.default, {
            className: L.verifiedCheck
        })))
    }

    function M(e) {
        var t = e.verified,
            a = e.text;
        return t ? n.createElement("div", {
            className: L.verifiedNameContainer
        }, n.createElement(T, null), a) : n.createElement(n.Fragment, null, a)
    }

    function C(e) {
        var t = e.className,
            a = e.count,
            r = e.creator,
            s = e.verifiedName;
        return n.createElement("div", {
            className: l()(L.usagePill, t, L.userText)
        }, null != r || null != s ? d.default.Messages.GUILD_TEMPLATE_USAGES_BY_CREATOR2.format({
            usageCount: a,
            creator: null != s ? s : r,
            creatorHook: function(e, t) {
                return n.createElement(M, {
                    key: t,
                    text: e,
                    verified: null != s
                })
            }
        }) : d.default.Messages.GUILD_TEMPLATE_USAGES.format({
            usageCount: a
        }))
    }

    function m(e) {
        var t, a = e.guildTemplate,
            r = e.error,
            u = e.tall,
            i = e.pillClassName;
        if (null != r && "" !== r) return n.createElement("div", {
            className: L.container
        }, n.createElement(E.Title, null, d.default.Messages.INVITE_MODAL_ERROR_TITLE), n.createElement(E.SubTitle, null, r));
        if (a.state === o.GuildTemplateStates.RESOLVING) return n.createElement("div", {
            className: L.container
        }, n.createElement(s.Spinner, null));
        var T = (0, _.default)(a.code).header;
        return u ? n.createElement("div", {
            className: L.container
        }, n.createElement(E.Title, {
            className: L.title
        }, T), n.createElement(E.SubTitle, {
            className: l()(L.subtitle, f.__invalid_marginTop2)
        }, d.default.Messages.GUILD_TEMPLATE_BASED_ON), n.createElement(E.Title, {
            className: l()(L.title, L.userText)
        }, a.name), null != a.description && "" !== a.description && n.createElement(E.SubTitle, {
            className: l()(L.subtitle, L.userText, f.marginTop8)
        }, a.description), n.createElement(C, {
            className: i,
            count: null !== (t = a.usageCount) && void 0 !== t ? t : 0,
            creator: a.creator.username,
            verifiedName: (0, c.getVerifiedName)(a.code)
        })) : n.createElement("div", {
            className: L.container
        }, n.createElement(E.Title, {
            className: L.title
        }, T), n.createElement(E.SubTitle, {
            className: l()(L.subtitle, L.userText)
        }, a.name))
    }
}