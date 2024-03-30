function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("957808"),
        i = n("587996"),
        a = n("378309"),
        u = n("830567"),
        s = n("233126"),
        l = n("209610"),
        c = n("407048"),
        f = n("941504"),
        d = {
            sentinel: c.MENTION_SENTINEL,
            stores: [o.default],
            matches: function(e, t, n, r, o) {
                return (o.mentions.user !== l.UserMentionMode.DENY || o.mentions.role !== l.RoleMentionMode.DENY || o.mentions.global !== l.GlobalMentionMode.DENY) && !0
            },
            queryResults: function(e, t, n, r, o) {
                var i = r.mentions.global === l.GlobalMentionMode.ALLOW_EVERYONE || r.mentions.global === l.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
                    u = r.mentions.global === l.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
                    s = r.mentions.user !== l.UserMentionMode.DENY,
                    c = r.mentions.role !== l.RoleMentionMode.DENY,
                    f = r.mentions.user === l.UserMentionMode.ALLOW_GUILD,
                    d = r.mentions.role === l.RoleMentionMode.ALLOW_ALL;
                return {
                    results: a.default.queryMentionResults({
                        query: n,
                        channel: e,
                        canMentionEveryone: i,
                        canMentionHere: u,
                        canMentionUsers: s,
                        canMentionRoles: c,
                        includeAllGuildUsers: f,
                        includeNonMentionableRoles: d,
                        request: o
                    })
                }
            },
            renderResults: function(e) {
                var t, n, o = e.results,
                    a = o.users,
                    u = o.globals,
                    d = o.roles,
                    _ = e.selectedIndex,
                    E = e.channel,
                    p = e.query,
                    m = e.options,
                    y = e.onHover,
                    I = e.onClick,
                    h = a.map(function(e, t) {
                        return r.createElement(i.default.User, {
                            guildId: E.guild_id,
                            onClick: I,
                            onHover: y,
                            selected: _ === t,
                            index: t,
                            user: e.user,
                            nick: e.nick,
                            status: e.status,
                            key: e.user.id,
                            hidePersonalInformation: m.hidePersonalInformation
                        })
                    }),
                    O = u.map(function(e, t) {
                        return r.createElement(i.default.Generic, {
                            onClick: I,
                            onHover: y,
                            selected: _ === t + a.length,
                            index: a.length + t,
                            text: e.text,
                            description: m.hideMentionDescription ? null : e.description,
                            key: e.text,
                            "aria-label": e.text
                        })
                    }),
                    T = d.map(function(e, t) {
                        return r.createElement(i.default.Role, {
                            onClick: I,
                            onHover: y,
                            selected: _ === t + a.length + u.length,
                            index: a.length + u.length + t,
                            role: e,
                            key: e.id,
                            hideDescription: m.hideMentionDescription
                        })
                    });
                return m.mentions.user === l.UserMentionMode.DENY ? (t = f.default.Messages.ROLES_MATCHING, n = f.default.Messages.ROLES) : (t = f.default.Messages.MEMBERS_MATCHING, n = f.default.Messages.MEMBERS), r.createElement(r.Fragment, {
                    key: "mentions"
                }, (0, s.renderHeader)({
                    titleWithQuery: t,
                    titleWithoutQuery: n,
                    query: p,
                    getQuery: function(e) {
                        return "".concat(c.MENTION_SENTINEL).concat(e)
                    }
                }), h, a.length > 0 && u.length > 0 ? r.createElement(i.default.Divider, null) : null, O, a.length > 0 && d.length > 0 || u.length > 0 && d.length > 0 ? r.createElement(i.default.Divider, null) : null, T)
            },
            onSelect: function(e) {
                var t = e.results,
                    n = t.users,
                    r = t.globals,
                    o = t.roles,
                    i = e.index,
                    s = e.options,
                    f = e.channel,
                    d = n[i],
                    _ = r[i - n.length],
                    E = o[i - n.length - r.length];
                return null != d ? s.insertText(function(e, t, n) {
                    return a.default.hasSameRoleAsUsername(t, e) ? "".concat(c.MENTION_SENTINEL).concat(e.tag) : "".concat(c.MENTION_SENTINEL).concat(u.default.getUserTag(e, {
                        identifiable: n ? "never" : "always"
                    }))
                }(d.user, f, s.hidePersonalInformation), function(e) {
                    return "<@".concat(e.id, ">")
                }(d.user)) : null != _ ? s.insertText(function(e) {
                    return e.text
                }(_)) : null != E && s.insertText(function(e) {
                    return "".concat(c.MENTION_SENTINEL).concat(e.name)
                }(E), function(e) {
                    return "<@&".concat(e.id, ">")
                }(E)), {
                    type: l.AutocompleteSelectionTypes.MENTION
                }
            }
        };
    t.default = d
}