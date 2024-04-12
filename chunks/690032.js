function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        getOpenAppFromEmailDestinations: function() {
            return c
        }
    }), a("315314"), a("610138"), a("216116"), a("78328"), a("815648"), a("47120");
    var d = a("593473"),
        n = a("591759");
    let i = e => {
            if (null == e || "" === e) return null;
            try {
                let t = new URL(e);
                return n.default.isDiscordHostname(t.hostname) || window.location.host === t.host ? t : null
            } catch (e) {
                return null
            }
        },
        c = e => {
            let t = (0, d.parse)(e);
            return {
                desktop: i(t.desktop_link),
                mobile: i(t.mobile_link)
            }
        }
}