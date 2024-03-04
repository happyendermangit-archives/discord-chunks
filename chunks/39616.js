function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("484026");
    let s = new i.default(function(e) {
        {
            let t = n("952110").emojiTermsImporter[e];
            return void 0 !== t ? t().then(e => e.default) : Promise.resolve({})
        }
    });
    var r = {
        setEmojiLocale: function(e) {
            s.setParams(e)
        },
        getTermsForEmoji: function(e) {
            let t = s.get();
            return void 0 !== t ? t[e] : []
        }
    }
}