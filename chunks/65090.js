function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("271383"),
        s = n("156361"),
        o = n("483360"),
        l = n("51144"),
        u = n("877565"),
        d = n("590921"),
        _ = n("665692"),
        c = n("689938");
    let E = {
        sentinel: _.MENTION_SENTINEL,
        stores: [a.default],
        matches: (e, t, n, i, r) => (r.mentions.user !== d.UserMentionMode.DENY || r.mentions.role !== d.RoleMentionMode.DENY || r.mentions.global !== d.GlobalMentionMode.DENY) && !0,
        queryResults(e, t, n, i, r) {
            let a = i.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE || i.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
                s = i.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
                l = i.mentions.user !== d.UserMentionMode.DENY,
                u = i.mentions.role !== d.RoleMentionMode.DENY,
                _ = i.mentions.user === d.UserMentionMode.ALLOW_GUILD,
                c = i.mentions.role === d.RoleMentionMode.ALLOW_ALL;
            return {
                results: o.default.queryMentionResults({
                    query: n,
                    channel: e,
                    canMentionEveryone: a,
                    canMentionHere: s,
                    canMentionUsers: l,
                    canMentionRoles: u,
                    includeAllGuildUsers: _,
                    includeNonMentionableRoles: c,
                    request: r
                })
            }
        },
        renderResults(e) {
            let t, n, {
                    results: {
                        users: a,
                        globals: o,
                        roles: l
                    },
                    selectedIndex: E,
                    channel: I,
                    query: T,
                    options: f,
                    onHover: S,
                    onClick: h
                } = e,
                A = a.map((e, t) => (0, i.jsx)(s.default.User, {
                    guildId: I.guild_id,
                    onClick: h,
                    onHover: S,
                    selected: E === t,
                    index: t,
                    user: e.user,
                    nick: e.nick,
                    status: e.status,
                    hidePersonalInformation: f.hidePersonalInformation
                }, e.user.id)),
                m = o.map((e, t) => (0, i.jsx)(s.default.Generic, {
                    onClick: h,
                    onHover: S,
                    selected: E === t + a.length,
                    index: a.length + t,
                    text: e.text,
                    description: f.hideMentionDescription ? null : e.description,
                    "aria-label": e.text
                }, e.text)),
                N = l.map((e, t) => (0, i.jsx)(s.default.Role, {
                    onClick: h,
                    onHover: S,
                    selected: E === t + a.length + o.length,
                    index: a.length + o.length + t,
                    role: e,
                    hideDescription: f.hideMentionDescription
                }, e.id));
            return f.mentions.user === d.UserMentionMode.DENY ? (t = c.default.Messages.ROLES_MATCHING, n = c.default.Messages.ROLES) : (t = c.default.Messages.MEMBERS_MATCHING, n = c.default.Messages.MEMBERS), (0, i.jsxs)(r.Fragment, {
                children: [(0, u.renderHeader)({
                    titleWithQuery: t,
                    titleWithoutQuery: n,
                    query: T,
                    getQuery: e => "".concat(_.MENTION_SENTINEL).concat(e)
                }), A, a.length > 0 && o.length > 0 ? (0, i.jsx)(s.default.Divider, {}) : null, m, a.length > 0 && l.length > 0 || o.length > 0 && l.length > 0 ? (0, i.jsx)(s.default.Divider, {}) : null, N]
            }, "mentions")
        },
        onSelect(e) {
            let {
                results: {
                    users: t,
                    globals: n,
                    roles: i
                },
                index: r,
                options: a,
                channel: s
            } = e, u = t[r], c = n[r - t.length], E = i[r - t.length - n.length];
            return null != u ? a.insertText(function(e, t, n) {
                return o.default.hasSameRoleAsUsername(t, e) ? "".concat(_.MENTION_SENTINEL).concat(e.tag) : "".concat(_.MENTION_SENTINEL).concat(l.default.getUserTag(e, {
                    identifiable: n ? "never" : "always"
                }))
            }(u.user, s, a.hidePersonalInformation), function(e) {
                return "<@".concat(e.id, ">")
            }(u.user)) : null != c ? a.insertText(function(e) {
                return e.text
            }(c)) : null != E && a.insertText(function(e) {
                return "".concat(_.MENTION_SENTINEL).concat(e.name)
            }(E), function(e) {
                return "<@&".concat(e.id, ">")
            }(E)), {
                type: d.AutocompleteSelectionTypes.MENTION
            }
        }
    };
    t.default = E
}