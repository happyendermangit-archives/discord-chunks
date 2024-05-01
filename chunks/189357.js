function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canAccessGuildMemberModViewWithExperiment: function() {
            return _
        },
        useCanAccessGuildMemberModView: function() {
            return c
        }
    }), n("47120");
    var i = n("149765"),
        r = n("442837"),
        a = n("430824"),
        s = n("594174"),
        o = n("700785"),
        l = n("686692"),
        u = n("478743");
    let d = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.default, s.default];
            if (null == e) return !1;
            let [n, r] = t, l = n.getGuild(e);
            if (null == l) return !1;
            let d = r.getCurrentUser();
            return i.hasAny(o.computePermissions({
                user: d,
                context: l,
                checkElevated: !1
            }), u.MemberSafetyPagePermissions)
        },
        _ = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0;
            if (null == e) return !1;
            let i = d(e),
                r = (0, l.isInGuildMemberModViewExperiment)(e, {
                    autoTrackExposure: t,
                    disable: !i,
                    location: n
                });
            return i && r
        };

    function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = (0, r.useStateFromStores)([a.default, s.default], () => d(e, [a.default, s.default]), [e]),
            o = (0, l.useGuildMemberModViewExperiment)(e, {
                autoTrackExposure: t,
                disable: !i,
                location: n
            });
        return i && o
    }
}