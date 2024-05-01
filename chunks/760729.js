function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RESTRICTIONS: function() {
            return a
        }
    });
    var i = n("381129"),
        r = n("981631"),
        s = n("689938");
    let a = [{
        check(e, t, n) {
            if (!n || null == t.getGuildId()) return !1;
            let r = i.default.extractEveryoneRole(e, t);
            if (null == r || !i.default.shouldShowEveryoneGuard(r, t)) return !1;
            let a = i.default.everyoneMemberCount(r, t),
                o = Math.pow(10, Math.floor(Math.log10(a))),
                l = s.default.Messages.EVERYONE_POPOUT_BODY;
            return t.isForumPost() ? l = s.default.Messages.EVERYONE_POPOUT_BODY_FORUM_POST : t.isThread() && (l = s.default.Messages.EVERYONE_POPOUT_BODY_THREAD), {
                body: l.format({
                    role: r,
                    count: (Math.trunc(a / o) * o).toLocaleString()
                }),
                footer: s.default.Messages.EVERYONE_POPOUT_FOOTER
            }
        },
        analyticsType: "@Everyone Warning",
        animation: {
            dark: () => n.e("83323").then(n.t.bind(n, "510465", 19)),
            light: () => n.e("36052").then(n.t.bind(n, "570227", 19))
        }
    }, {
        check: e => !!r.TOKEN_REGEX.test(e) && {
            body: s.default.Messages.TOKEN_POPOUT_BODY
        },
        analyticsType: "API Token Warning"
    }]
}