function(e, t, n) {
    "use strict";
    n.r(t);
    var s = n("735250");
    n("470079");
    var a = n("3570"),
        i = n("685311"),
        l = n("186901");
    t.default = function(e) {
        let {
            match: t,
            location: n
        } = e, r = async (e, t) => {
            await (0, a.deepLinkRouteIfLandedAndNotAuthed)(l.RPCDeepLinks.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search
            })
        };
        return (0, s.jsx)(i.default, {
            match: t,
            location: n,
            attemptDeepLink: r
        })
    }
}