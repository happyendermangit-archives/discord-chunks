function(e, _, E) {
    "use strict";

    function t(e) {
        let _ = document.body;
        if (null == _) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
        let E = document.createRange(),
            t = window.getSelection(),
            o = document.createElement("textarea");
        o.value = e, o.contentEditable = "true", o.style.visibility = "none", _.appendChild(o), E.selectNodeContents(o), null == t || t.removeAllRanges(), null == t || t.addRange(E), o.focus(), o.setSelectionRange(0, e.length);
        let n = document.execCommand("copy");
        return _.removeChild(o), n
    }
    E.r(_), E.d(_, {
        copy: function() {
            return t
        }
    }), E("70102")
}