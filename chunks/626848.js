function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("913527"),
        u = n.n(a),
        s = n("898511"),
        l = n("784184"),
        c = n("550168"),
        f = n("703803"),
        d = n("208454"),
        _ = n("433073"),
        E = n("162677"),
        p = n("941504"),
        m = n("100387");
    t.default = function(e) {
        var t = e.createdAt,
            n = e.participantIds,
            o = e.applicationId,
            a = e.title,
            y = e.guildId,
            I = e.className,
            h = (0, c.useGetOrFetchApplication)(o),
            O = (0, s.useStateFromStoresArray)([d.default], function() {
                var e;
                return null !== (e = n.map(function(e) {
                    return d.default.getUser(e)
                }).filter(E.isNotNullish)) && void 0 !== e ? e : []
            }),
            T = null == h ? void 0 : h.name,
            S = u()(t).fromNow();
        return null == t ? null : r.createElement("div", {
            className: i()(I, m.container)
        }, r.createElement(_.default, {
            game: h
        }), r.createElement("div", {
            className: m.textSection
        }, null != a && "" !== a ? r.createElement(l.Text, {
            variant: "text-md/semibold",
            color: "interactive-active"
        }, a) : r.createElement(l.Text, {
            variant: "text-md/semibold",
            color: "text-muted"
        }, p.default.Messages.CLIPS_UNTITLED), r.createElement(l.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: m.__invalid_subtitle
        }, null != T ? "".concat(T, " • ") : null, S), r.createElement(l.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: m.__invalid_subtitle
        })), null != O && O.length > 0 && r.createElement(f.default, {
            maxUsers: 4,
            users: O,
            className: m.__invalid_facePile,
            guildId: y
        }))
    }
}