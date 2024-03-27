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
    var s = n("43982"),
        a = n("393414"),
        l = n("271938"),
        r = n("773336"),
        i = n("49111");
    let u = r.isPlatformEmbedded ? i.NOOP : (e, t) => {
            if (!(0, a.hasNavigated)()) return s.default.request(i.RPCCommands.DEEP_LINK, {
                type: e,
                params: t
            })
        },
        o = r.isPlatformEmbedded ? i.NOOP : (e, t) => {
            if (!l.default.isAuthenticated()) return u(e, {
                ...t || {},
                fingerprint: l.default.getFingerprint()
            })
        }
}