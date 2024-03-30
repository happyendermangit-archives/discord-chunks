function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140");
    t.default = {
        setSection(e) {
            i.default.dispatch({
                type: "FRIENDS_SET_SECTION",
                section: e
            })
        },
        setInitialSection(e) {
            i.default.dispatch({
                type: "FRIENDS_SET_INITIAL_SECTION",
                section: e
            })
        }
    }
}