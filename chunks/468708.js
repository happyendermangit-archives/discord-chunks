function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RESTRICTIONS: function() {
            return a
        }
    });
    var r = n("845908"),
        o = n("281767"),
        i = n("941504"),
        a = [{
            check: function(e, t, n) {
                if (!n || null == t.getGuildId()) return !1;
                var o = r.default.extractEveryoneRole(e, t);
                if (null == o || !r.default.shouldShowEveryoneGuard(o, t)) return !1;
                var a = r.default.everyoneMemberCount(o, t),
                    u = Math.pow(10, Math.floor(Math.log10(a))),
                    s = i.default.Messages.EVERYONE_POPOUT_BODY;
                return t.isForumPost() ? s = i.default.Messages.EVERYONE_POPOUT_BODY_FORUM_POST : t.isThread() && (s = i.default.Messages.EVERYONE_POPOUT_BODY_THREAD), {
                    body: s.format({
                        role: o,
                        count: (Math.trunc(a / u) * u).toLocaleString()
                    }),
                    footer: i.default.Messages.EVERYONE_POPOUT_FOOTER
                }
            },
            analyticsType: "@Everyone Warning",
            animation: {
                dark: function() {
                    return n.e("83323").then(n.t.bind(n, "510465", 19))
                },
                light: function() {
                    return n.e("36052").then(n.t.bind(n, "570227", 19))
                }
            }
        }, {
            check: function(e) {
                return !!o.TOKEN_REGEX.test(e) && {
                    body: i.default.Messages.TOKEN_POPOUT_BODY
                }
            },
            analyticsType: "API Token Warning"
        }]
}