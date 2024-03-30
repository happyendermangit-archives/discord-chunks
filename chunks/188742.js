function(e, t, n) {
    "use strict";
    n.r(t);
    let i = new(n("113638")).default(function(e) {
        {
            let t = n("160170").emojiTermsImporter[e];
            return void 0 !== t ? t().then(e => e.default) : Promise.resolve({})
        }
    });
    t.default = {
        setEmojiLocale: function(e) {
            i.setParams(e)
        },
        getTermsForEmoji: function(e) {
            let t = i.get();
            return void 0 !== t ? t[e] : []
        }
    }
}