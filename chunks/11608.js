function(e, t, n) {
    "use strict";
    n.r(t);
    var r = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
    };
    t.default = function(e, t, n, i) {
        return r[e]
    }
}