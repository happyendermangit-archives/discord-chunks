function(e, t, n) {
    "use strict";

    function i(e) {
        let t = document.body;
        if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
        let n = document.createRange(),
            i = window.getSelection(),
            r = document.createElement("textarea");
        r.value = e, r.contentEditable = "true", r.style.visibility = "none", t.appendChild(r), n.selectNodeContents(r), null == i || i.removeAllRanges(), null == i || i.addRange(n), r.focus(), r.setSelectionRange(0, e.length);
        let s = document.execCommand("copy");
        return t.removeChild(r), s
    }
    n.r(t), n.d(t, {
        copy: function() {
            return i
        }
    }), n("411104")
}