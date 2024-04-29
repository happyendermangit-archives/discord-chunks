function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        deepLinkRouteIfLanded: function() {
            return u
        },
        deepLinkRouteIfLandedAndNotAuthed: function() {
            return o
        }
    });
    var s = n("536285"),
        a = n("703656"),
        l = n("314897"),
        i = n("358085"),
        r = n("981631");
    let u = i.isPlatformEmbedded ? r.NOOP : (e, t) => {
            if (!(0, a.hasNavigated)()) return s.default.request(r.RPCCommands.DEEP_LINK, {
                type: e,
                params: t
            })
        },
        o = i.isPlatformEmbedded ? r.NOOP : (e, t) => {
            if (!l.default.isAuthenticated()) return u(e, {
                ...t || {},
                fingerprint: l.default.getFingerprint()
            })
        }
}