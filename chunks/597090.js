function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return I
        }
    }), E("222007");
    var t = E("823411"),
        o = E("568131"),
        n = E("689988"),
        r = E("686470"),
        a = E("773336");
    class i extends n.default {
        handlePostConnectionOpen() {
            (0, a.isDesktop)() && (!r.default.fetched && (0, o.fetchLibrary)(), t.default.getDetectableGames())
        }
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen
            }
        }
    }
    var I = new i
}