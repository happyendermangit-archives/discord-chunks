function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var s = n("35092"),
        i = n("913144"),
        r = n("474643");
    let a = {},
        o = {};
    class d extends s.default.Store {
        getStickerPreview(e, t) {
            let n = t === r.DraftType.FirstThreadMessage ? o : a;
            return n[e]
        }
    }
    d.displayName = "StickerMessagePreviewStore";
    let u = new d(i.default, {
        ADD_STICKER_PREVIEW: function(e) {
            let {
                channelId: t,
                sticker: n,
                draftType: s
            } = e, i = s === r.DraftType.FirstThreadMessage ? o : a;
            i[t] = [n]
        },
        CLEAR_STICKER_PREVIEW: function(e) {
            let {
                channelId: t,
                draftType: n
            } = e, s = n === r.DraftType.FirstThreadMessage ? o : a;
            null != s[t] && delete s[t]
        },
        LOGOUT: function() {
            a = {}, o = {}
        }
    });
    var l = u
}