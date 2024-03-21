function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("26989"),
        s = n("501536"),
        r = n("25292"),
        o = n("158998"),
        u = n("200294"),
        d = n("851745"),
        c = n("406291"),
        f = n("782340");
    let p = {
        sentinel: c.MENTION_SENTINEL,
        stores: [a.default],
        matches: (e, t, n, i, l) => (l.mentions.user !== d.UserMentionMode.DENY || l.mentions.role !== d.RoleMentionMode.DENY || l.mentions.global !== d.GlobalMentionMode.DENY) && !0,
        queryResults(e, t, n, i, l) {
            let a = i.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE || i.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
                s = i.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
                o = i.mentions.user !== d.UserMentionMode.DENY,
                u = i.mentions.role !== d.RoleMentionMode.DENY,
                c = i.mentions.user === d.UserMentionMode.ALLOW_GUILD,
                f = i.mentions.role === d.RoleMentionMode.ALLOW_ALL,
                p = r.default.queryMentionResults({
                    query: n,
                    channel: e,
                    canMentionEveryone: a,
                    canMentionHere: s,
                    canMentionUsers: o,
                    canMentionRoles: u,
                    includeAllGuildUsers: c,
                    includeNonMentionableRoles: f,
                    request: l
                });
            return {
                results: p
            }
        },
        renderResults(e) {
            let t, n, {
                    results: {
                        users: a,
                        globals: r,
                        roles: o
                    },
                    selectedIndex: p,
                    channel: m,
                    query: h,
                    options: x,
                    onHover: E,
                    onClick: y
                } = e,
                g = a.map((e, t) => (0, i.jsx)(s.default.User, {
                    guildId: m.guild_id,
                    onClick: y,
                    onHover: E,
                    selected: p === t,
                    index: t,
                    user: e.user,
                    nick: e.nick,
                    status: e.status,
                    hidePersonalInformation: x.hidePersonalInformation
                }, e.user.id)),
                S = r.map((e, t) => (0, i.jsx)(s.default.Generic, {
                    onClick: y,
                    onHover: E,
                    selected: p === t + a.length,
                    index: a.length + t,
                    text: e.text,
                    description: x.hideMentionDescription ? null : e.description,
                    "aria-label": e.text
                }, e.text)),
                C = o.map((e, t) => (0, i.jsx)(s.default.Role, {
                    onClick: y,
                    onHover: E,
                    selected: p === t + a.length + r.length,
                    index: a.length + r.length + t,
                    role: e,
                    hideDescription: x.hideMentionDescription
                }, e.id)),
                T = x.mentions.user === d.UserMentionMode.DENY;
            return T ? (t = f.default.Messages.ROLES_MATCHING, n = f.default.Messages.ROLES) : (t = f.default.Messages.MEMBERS_MATCHING, n = f.default.Messages.MEMBERS), (0, i.jsxs)(l.Fragment, {
                children: [(0, u.renderHeader)({
                    titleWithQuery: t,
                    titleWithoutQuery: n,
                    query: h,
                    getQuery: e => "".concat(c.MENTION_SENTINEL).concat(e)
                }), g, a.length > 0 && r.length > 0 ? (0, i.jsx)(s.default.Divider, {}) : null, S, a.length > 0 && o.length > 0 || r.length > 0 && o.length > 0 ? (0, i.jsx)(s.default.Divider, {}) : null, C]
            }, "mentions")
        },
        onSelect(e) {
            let {
                results: {
                    users: t,
                    globals: n,
                    roles: i
                },
                index: l,
                options: a,
                channel: s
            } = e, u = t[l], f = n[l - t.length], p = i[l - t.length - n.length];
            return null != u ? a.insertText(function(e, t, n) {
                return r.default.hasSameRoleAsUsername(t, e) ? "".concat(c.MENTION_SENTINEL).concat(e.tag) : "".concat(c.MENTION_SENTINEL).concat(o.default.getUserTag(e, {
                    identifiable: n ? "never" : "always"
                }))
            }(u.user, s, a.hidePersonalInformation), function(e) {
                return "<@".concat(e.id, ">")
            }(u.user)) : null != f ? a.insertText(function(e) {
                return e.text
            }(f)) : null != p && a.insertText(function(e) {
                return "".concat(c.MENTION_SENTINEL).concat(e.name)
            }(p), function(e) {
                return "<@&".concat(e.id, ">")
            }(p)), {
                type: d.AutocompleteSelectionTypes.MENTION
            }
        }
    };
    var m = p
}