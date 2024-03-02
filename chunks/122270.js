function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("26989"),
        s = n("501536"),
        r = n("25292"),
        o = n("158998"),
        u = n("200294"),
        d = n("851745"),
        c = n("406291"),
        f = n("782340");
    let m = {
        sentinel: c.MENTION_SENTINEL,
        stores: [a.default],
        matches: (e, t, n, l, i) => (i.mentions.user !== d.UserMentionMode.DENY || i.mentions.role !== d.RoleMentionMode.DENY || i.mentions.global !== d.GlobalMentionMode.DENY) && !0,
        queryResults(e, t, n, l, i) {
            let a = l.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE || l.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
                s = l.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
                o = l.mentions.user !== d.UserMentionMode.DENY,
                u = l.mentions.role !== d.RoleMentionMode.DENY,
                c = l.mentions.user === d.UserMentionMode.ALLOW_GUILD,
                f = l.mentions.role === d.RoleMentionMode.ALLOW_ALL,
                m = r.default.queryMentionResults({
                    query: n,
                    channel: e,
                    canMentionEveryone: a,
                    canMentionHere: s,
                    canMentionUsers: o,
                    canMentionRoles: u,
                    includeAllGuildUsers: c,
                    includeNonMentionableRoles: f,
                    request: i
                });
            return {
                results: m
            }
        },
        renderResults(e) {
            let t, n, {
                    results: {
                        users: a,
                        globals: r,
                        roles: o
                    },
                    selectedIndex: m,
                    channel: p,
                    query: h,
                    options: E,
                    onHover: g,
                    onClick: C
                } = e,
                S = a.map((e, t) => (0, l.jsx)(s.default.User, {
                    guildId: p.guild_id,
                    onClick: C,
                    onHover: g,
                    selected: m === t,
                    index: t,
                    user: e.user,
                    nick: e.nick,
                    status: e.status,
                    hidePersonalInformation: E.hidePersonalInformation
                }, e.user.id)),
                T = r.map((e, t) => (0, l.jsx)(s.default.Generic, {
                    onClick: C,
                    onHover: g,
                    selected: m === t + a.length,
                    index: a.length + t,
                    text: e.text,
                    description: E.hideMentionDescription ? null : e.description,
                    "aria-label": e.text
                }, e.text)),
                I = o.map((e, t) => (0, l.jsx)(s.default.Role, {
                    onClick: C,
                    onHover: g,
                    selected: m === t + a.length + r.length,
                    index: a.length + r.length + t,
                    role: e,
                    hideDescription: E.hideMentionDescription
                }, e.id)),
                v = E.mentions.user === d.UserMentionMode.DENY;
            return v ? (t = f.default.Messages.ROLES_MATCHING, n = f.default.Messages.ROLES) : (t = f.default.Messages.MEMBERS_MATCHING, n = f.default.Messages.MEMBERS), (0, l.jsxs)(i.Fragment, {
                children: [(0, u.renderHeader)({
                    titleWithQuery: t,
                    titleWithoutQuery: n,
                    query: h,
                    getQuery: e => "".concat(c.MENTION_SENTINEL).concat(e)
                }), S, a.length > 0 && r.length > 0 ? (0, l.jsx)(s.default.Divider, {}) : null, T, a.length > 0 && o.length > 0 || r.length > 0 && o.length > 0 ? (0, l.jsx)(s.default.Divider, {}) : null, I]
            }, "mentions")
        },
        onSelect(e) {
            let {
                results: {
                    users: t,
                    globals: n,
                    roles: l
                },
                index: i,
                options: a,
                channel: s
            } = e, u = t[i], f = n[i - t.length], m = l[i - t.length - n.length];
            return null != u ? a.insertText(function(e, t, n) {
                return r.default.hasSameRoleAsUsername(t, e) ? "".concat(c.MENTION_SENTINEL).concat(e.tag) : "".concat(c.MENTION_SENTINEL).concat(o.default.getUserTag(e, {
                    identifiable: n ? "never" : "always"
                }))
            }(u.user, s, a.hidePersonalInformation), function(e) {
                return "<@".concat(e.id, ">")
            }(u.user)) : null != f ? a.insertText(function(e) {
                return e.text
            }(f)) : null != m && a.insertText(function(e) {
                return "".concat(c.MENTION_SENTINEL).concat(e.name)
            }(m), function(e) {
                return "<@&".concat(e.id, ">")
            }(m)), {
                type: d.AutocompleteSelectionTypes.MENTION
            }
        }
    };
    var p = m
}