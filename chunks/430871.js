function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeGetEmojiCaptionsForUser: function() {
            return o
        }
    });
    var i = n("594174"),
        r = n("130402"),
        s = n("174065"),
        a = n("353842");
    async function o() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
        if (null == i.default.getCurrentUser()) return;
        let {
            isEmojiCaptionsEnabled: t
        } = a.default.getCurrentConfig({
            location: e
        });
        if (!t) {
            s.default.hasPersistedState() && s.default.clear();
            return
        }
        if (s.default.getIsFetching()) return;
        let n = s.default.getEmojiCaptionsTTL();
        !(null != n && Date.now() < n) && await (0, r.getEmojiCaptionsForUser)()
    }
}