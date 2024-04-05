function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return n
        }
    });
    var d = a("987170");

    function n(e) {
        let t = (0, d.default)({
            ...e,
            id: "".concat(e.id, "_existing_users"),
            label: "".concat(e.label, " - Existing Users")
        });
        return {
            existingUsers: t,
            newUsers: (0, d.default)({
                ...e,
                id: "".concat(e.id, "_new_users"),
                label: "".concat(e.label, " - New Users")
            })
        }
    }
}