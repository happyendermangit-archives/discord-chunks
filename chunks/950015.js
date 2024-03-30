function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getOpenAppFromEmailDestinations: function() {
            return o
        }
    });
    var a = n("593473"),
        r = n("822853"),
        c = function(e) {
            if (null == e || "" === e) return null;
            try {
                var t = new URL(e);
                return r.default.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null
            } catch (e) {
                return null
            }
        },
        o = function(e) {
            var t = (0, a.parse)(e);
            return {
                desktop: c(t.desktop_link),
                mobile: c(t.mobile_link)
            }
        }
}