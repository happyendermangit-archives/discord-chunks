function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("470079"),
        r = n("784184"),
        c = n("291098"),
        o = n("335626");
    t.default = {
        App: function() {
            return a.createElement(r.DnDProvider, null, a.createElement(o.default, null))
        },
        Overlay: function() {
            return a.createElement(r.DnDProvider, null, a.createElement(o.Overlay, null))
        },
        OutdatedClient: c.default
    }
}