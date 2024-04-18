function(e, t, s) {
    "use strict";
    s.r(t);
    var n = s("735250");
    s("470079");
    var a = s("3570"),
        l = s("685311"),
        i = s("186901");
    t.default = function(e) {
        let {
            match: t,
            location: s
        } = e, r = async (e, t) => {
            await (0, a.deepLinkRouteIfLandedAndNotAuthed)(i.RPCDeepLinks.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search
            })
        };
        return (0, n.jsx)(l.default, {
            match: t,
            location: s,
            attemptDeepLink: r
        })
    }
}