function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("62957"),
        i = n("792388"),
        a = n("573594"),
        u = n("638954"),
        s = n("500727"),
        l = n("525834"),
        c = n("791254"),
        f = n("797849");

    function d(e) {
        var t = e.user,
            n = e.displayProfile,
            d = e.guild,
            _ = e.channelId,
            E = (0, i.useSimplifiedProfileExperiment)({
                location: "BiteSizeProfileBody"
            }).moreUserDetailsEnabled,
            p = o.default.getName(null == d ? void 0 : d.id, _, t),
            m = (0, a.default)(t.id, null == d ? void 0 : d.id);
        return t.isSystemUser() ? null : t.isNonUserBot() ? r.createElement("div", {
            className: f.paddingBottom
        }, r.createElement(c.default, {
            user: t,
            nickname: null,
            pronouns: null
        }), ";") : r.createElement("div", {
            className: f.paddingBottom
        }, r.createElement(c.default, {
            user: t,
            nickname: p,
            pronouns: null == n ? void 0 : n.pronouns,
            usernameIcon: t.hasAvatarForGuild(null == d ? void 0 : d.id) && r.createElement(u.default, {
                user: t,
                nickname: p
            })
        }), E && r.createElement(l.default, {
            user: t
        }), m && r.createElement(s.default, {
            user: t
        }))
    }
}