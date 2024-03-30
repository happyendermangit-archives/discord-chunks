function(e, t, n) {
    "use strict";
    n.r(t);
    var r = new(n("259161")).default(function(e) {
        var t = n("603137").emojiTermsImporter[e];
        return void 0 !== t ? t().then(function(e) {
            return e.default
        }) : Promise.resolve({})
    });
    t.default = {
        setEmojiLocale: function(e) {
            r.setParams(e)
        },
        getTermsForEmoji: function(e) {
            var t = r.get();
            return void 0 !== t ? t[e] : []
        }
    }
}