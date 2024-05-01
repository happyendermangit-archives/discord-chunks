function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeGetEmojiCaptionsForUser: function() {
            return o
        }
    });
    var i = n("594174"),
        r = n("130402"),
        a = n("174065"),
        s = n("353842");
    async function o() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
        if (null == i.default.getCurrentUser()) return;
        let {
            isEmojiTextMatchSuggestionsEnabled: t
        } = s.default.getCurrentConfig({
            location: e
        });
        if (!t) {
            a.default.hasPersistedState() && a.default.clear();
            return
        }
        if (a.default.getIsFetching()) return;
        let n = a.default.getEmojiCaptionsTTL();
        !(null != n && Date.now() < n) && await (0, r.getEmojiCaptionsForUser)()
    }
}