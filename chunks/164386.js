function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertOAuth2Authorization: function() {
            return s
        }
    });
    var i = n("316693");

    function s(e) {
        if (null == e.guilds) return e;
        return {
            ...e,
            guilds: e.guilds.map(e => ({
                ...e,
                permissions: i.default.deserialize(e.permissions)
            }))
        }
    }
}