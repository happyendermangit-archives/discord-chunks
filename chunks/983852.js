function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        failMigration: function() {
            return c
        },
        finishMigration: function() {
            return o
        },
        migrate: function() {
            return r
        }
    });
    var a = n("629815");

    function r() {
        a.default.wait(function() {
            return a.default.dispatch({
                type: "DOMAIN_MIGRATION_START"
            })
        })
    }

    function c() {
        a.default.dispatch({
            type: "DOMAIN_MIGRATION_FAILURE"
        })
    }

    function o() {
        window.location.reload()
    }
}