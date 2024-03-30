function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("610045"),
        o = n("453197"),
        i = n("714196"),
        a = ["applicationCommand"];

    function u(e) {
        var t = e.insertBreak,
            n = e.insertText;
        return e.insertBreak = function() {
            s(e) && t()
        }, e.insertSoftBreak = function() {
            e.insertBreak()
        }, e.insertText = function(t) {
            if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) {
                n(t);
                return
            }
            var i = t.split(/\r\n|\r|\n/);
            if (!s(e)) {
                n(i.join(" "));
                return
            }
            r.HistoryUtils.withSingleEntry(e, function() {
                var t = !1,
                    r = !0,
                    a = !1,
                    u = void 0;
                try {
                    for (var s, l = i[Symbol.iterator](); !(r = (s = l.next()).done); r = !0) {
                        var c = s.value;
                        t && o.SlateTransforms.splitNodes(e, {
                            always: !0
                        }), n(c), t = !0
                    }
                } catch (e) {
                    a = !0, u = e
                } finally {
                    try {
                        !r && null != l.return && l.return()
                    } finally {
                        if (a) throw u
                    }
                }
            })
        }, e
    }

    function s(e) {
        var t = i.EditorUtils.getCurrentBlock(e);
        return null != t && !a.includes(t[0].type)
    }
}