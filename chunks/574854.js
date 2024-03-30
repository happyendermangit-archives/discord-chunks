function(e, t, n) {
    "use strict";

    function r(e) {
        var t = document.body;
        if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
        var n = document.createRange(),
            r = window.getSelection(),
            o = document.createElement("textarea");
        o.value = e, o.contentEditable = "true", o.style.visibility = "none", t.appendChild(o), n.selectNodeContents(o), null == r || r.removeAllRanges(), null == r || r.addRange(n), o.focus(), o.setSelectionRange(0, e.length);
        var i = document.execCommand("copy");
        return t.removeChild(o), i
    }
    n.r(t), n.d(t, {
        copy: function() {
            return r
        }
    })
}