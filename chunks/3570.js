function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        deepLinkRouteIfLanded: function() {
            return s
        },
        deepLinkRouteIfLandedAndNotAuthed: function() {
            return o
        }
    });
    var l = n("536285"),
        a = n("703656"),
        u = n("314897"),
        r = n("358085"),
        i = n("981631");
    let s = r.isPlatformEmbedded ? i.NOOP : (e, t) => {
            if (!(0, a.hasNavigated)()) return l.default.request(i.RPCCommands.DEEP_LINK, {
                type: e,
                params: t
            })
        },
        o = r.isPlatformEmbedded ? i.NOOP : (e, t) => {
            if (!u.default.isAuthenticated()) return s(e, {
                ...t || {},
                fingerprint: u.default.getFingerprint()
            })
        }
}