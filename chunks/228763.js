function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertOAuth2Authorization: function() {
            return r
        }
    });
    var i = n("149765");

    function r(e) {
        if (null == e.guilds) return e;
        return {
            ...e,
            guilds: e.guilds.map(e => ({
                ...e,
                permissions: i.deserialize(e.permissions)
            }))
        }
    }
}