function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        migrate: function() {
            return s
        },
        failMigration: function() {
            return n
        },
        finishMigration: function() {
            return c
        }
    });
    var d = t("913144");

    function s() {
        d.default.wait(() => d.default.dispatch({
            type: "DOMAIN_MIGRATION_START"
        }))
    }

    function n() {
        d.default.dispatch({
            type: "DOMAIN_MIGRATION_FAILURE"
        })
    }

    function c() {
        window.location.reload()
    }
}