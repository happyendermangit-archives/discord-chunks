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
        i = n("773336"),
        r = n("49111");
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