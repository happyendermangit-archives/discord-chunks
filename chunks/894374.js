function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileBadgesTag: function() {
            return d
        },
        UserProfilePronounsTag: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("981729"),
        s = n("481060"),
        a = n("184325"),
        o = n("689938"),
        l = n("736379");

    function u(e) {
        let {
            pronouns: t,
            variant: n = "text-xs/medium"
        } = e;
        return null == t || 0 === t.length ? null : (0, i.jsx)(r.TooltipContainer, {
            text: o.default.Messages.USER_PROFILE_PRONOUNS,
            children: (0, i.jsx)(s.Text, {
                className: l.pronouns,
                variant: n,
                children: t
            })
        })
    }

    function d(e) {
        let {
            user: t,
            guildId: n
        } = e;
        return (0, i.jsx)(a.default, {
            className: l.badges,
            user: t,
            guildId: n,
            size: a.BadgeSizes.SIZE_20
        })
    }
}