function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isInputLikeElement: function() {
            return s
        },
        eventOwnerDocument: function() {
            return a
        }
    });
    let i = /input/i,
        r = /textarea/i;

    function s(e) {
        if (null == e) return !1;
        if ("true" === e.getAttribute("contenteditable") || r.test(e.tagName)) return !0;
        if (i.test(e.tagName)) {
            var t;
            let n = null !== (t = e.getAttribute("type")) && void 0 !== t ? t : "text";
            if ("text" === n || "password" === n) return !0
        }
        return !1
    }

    function a(e) {
        let {
            target: t
        } = e;
        return null == t ? null : "ownerDocument" in t ? t.ownerDocument : "document" in t ? t.document : (console.warn("Unable to get owner document from event", e.type), null)
    }
}