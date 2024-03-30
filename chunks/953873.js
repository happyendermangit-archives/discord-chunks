function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("610045"),
        o = n("714196");

    function i(e, t) {
        var n = e.apply,
            i = e.deleteBackward,
            u = e.deleteForward,
            s = e.deleteFragment,
            l = e.insertData,
            c = e.insertText,
            f = e.onChange;

        function d(n) {
            var o = r.HistoryUtils.currentEntry(e);
            if (null != o && (o.mergeable = !1), !(n >= e.history.stack.length)) {
                e.history.index = n;
                var i = r.HistoryUtils.currentEntry(e);
                t({
                    newValue: i.value,
                    newSelection: i.selection
                })
            }
        }
        e.history = {
            index: 0,
            stack: []
        }, e.onChange = function() {
            var t = e.history;
            0 === t.stack.length && (t.stack = [a(e)], t.index = 0), null != e.selection && (r.HistoryUtils.currentEntry(e).selection = e.selection), E = null, f()
        }, e.undo = function() {
            e.history.index > 0 && d(e.history.index - 1)
        }, e.redo = function() {
            e.history.index < e.history.stack.length - 1 && d(e.history.index + 1)
        };
        var _ = null,
            E = null,
            p = null;
        return e.apply = function(t) {
            var i = e.history;
            n(t);
            var u = o.EditorUtils.richValue(e);
            u !== p && (0 === i.stack.length && (i.stack = [a(e)], i.index = 0), r.HistoryUtils.isSaving(e) && (function(e, t, n) {
                var o, i = e.selection,
                    a = r.HistoryUtils.currentEntry(e),
                    u = !0,
                    s = !0;
                if ("insert_text" === t.type && 1 === t.text.length ? (o = "insert", s = !(("" === t.text || t.text.endsWith(" ")) && (null == n ? void 0 : n.type) === "insert_text" && !("" === n.text && n.text.endsWith(" ")))) : "split_node" === t.type ? o = "insert" : "remove_text" === t.type && 1 === t.text.length ? o = "delete" : (o = "other", u = !1, s = !1), "set_selection" === t.type && null != a) {
                    a.selection = i;
                    return
                }
                u && function(e, t) {
                    return !((null == e ? void 0 : e.type) !== t || Date.now() - e.createdAt >= 4e3) && !0
                }(a, o) ? r.HistoryUtils.insertOrMergeEntry(e, o, s) : r.HistoryUtils.insertEntry(e, o, s)
            }(e, t, _), _ = t), E = t, p = u)
        }, e.deleteBackward = function(t) {
            r.HistoryUtils.withSingleEntry(e, function() {
                return i(t)
            })
        }, e.deleteForward = function(t) {
            r.HistoryUtils.withSingleEntry(e, function() {
                return u(t)
            })
        }, e.deleteFragment = function(t) {
            r.HistoryUtils.withSingleEntry(e, function() {
                return s(t)
            })
        }, e.insertText = function(t) {
            1 === t.length && (null == E ? void 0 : E.type) === "remove_text" ? r.HistoryUtils.withMergedEntry(e, function() {
                return c(t)
            }) : null != e.selection && o.RangeUtils.isExpanded(e.selection) ? r.HistoryUtils.withSingleEntry(e, function() {
                return c(t)
            }) : c(t)
        }, e.insertData = function(t) {
            (null == E ? void 0 : E.type) === "remove_text" ? r.HistoryUtils.withMergedEntry(e, function() {
                return l(t)
            }): r.HistoryUtils.withSingleEntry(e, function() {
                return l(t)
            })
        }, e
    }

    function a(e) {
        return {
            type: "other",
            mergeable: !1,
            createdAt: Date.now(),
            value: o.EditorUtils.richValue(e),
            selection: e.selection
        }
    }
}