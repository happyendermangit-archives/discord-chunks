function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("75247"),
        s = n("913144"),
        r = n("474643");
    let a = {},
        o = {};
    class l extends i.Store {
        getStickerPreview(e, t) {
            let n = t === r.DraftType.FirstThreadMessage ? o : a;
            return n[e]
        }
    }
    l.displayName = "StickerMessagePreviewStore";
    let u = new l(s.default, {
        ADD_STICKER_PREVIEW: function(e) {
            let {
                channelId: t,
                sticker: n,
                draftType: i
            } = e, s = i === r.DraftType.FirstThreadMessage ? o : a;
            s[t] = [n]
        },
        CLEAR_STICKER_PREVIEW: function(e) {
            let {
                channelId: t,
                draftType: n
            } = e, i = n === r.DraftType.FirstThreadMessage ? o : a;
            null != i[t] && delete i[t]
        },
        LOGOUT: function() {
            a = {}, o = {}
        }
    });
    var d = u
}