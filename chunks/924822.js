function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        getOpenAppFromEmailDestinations: function() {
            return i
        }
    }), t("511434"), t("313619"), t("654714"), t("287168"), t("956660"), t("222007");
    var s = t("730290"),
        d = t("253981");
    let n = e => {
            if (null == e || "" === e) return null;
            try {
                let a = new URL(e);
                return d.default.isDiscordHostname(a.hostname) || window.location.host === a.host ? a : null
            } catch (e) {
                return null
            }
        },
        i = e => {
            let a = (0, s.parse)(e);
            return {
                desktop: n(a.desktop_link),
                mobile: n(a.mobile_link)
            }
        }
}