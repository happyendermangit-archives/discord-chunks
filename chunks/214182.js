function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815");
    t.default = {
        setSection: function(e) {
            r.default.dispatch({
                type: "FRIENDS_SET_SECTION",
                section: e
            })
        },
        setInitialSection: function(e) {
            r.default.dispatch({
                type: "FRIENDS_SET_INITIAL_SECTION",
                section: e
            })
        }
    }
}