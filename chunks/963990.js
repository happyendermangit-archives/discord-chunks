function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        removeExecutablePathPrefix: function() {
            return t
        }
    });

    function t(e) {
        var _;
        let E = ((_ = (_ = e).toLowerCase()).endsWith("/") && (_ = _.slice(0, -1)), _);
        return E.split("/").slice(-2).join("/")
    }
}