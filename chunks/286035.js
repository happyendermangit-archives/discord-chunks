function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        failMigration: function() {
            return i
        },
        finishMigration: function() {
            return c
        },
        migrate: function() {
            return n
        }
    });
    var d = a("570140");

    function n() {
        d.default.wait(() => d.default.dispatch({
            type: "DOMAIN_MIGRATION_START"
        }))
    }

    function i() {
        d.default.dispatch({
            type: "DOMAIN_MIGRATION_FAILURE"
        })
    }

    function c() {
        window.location.reload()
    }
}