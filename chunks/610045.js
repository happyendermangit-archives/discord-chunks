function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HistoryUtils: function() {
            return a
        }
    });
    var r = n("714196"),
        o = new WeakMap,
        i = new WeakMap,
        a = {
            isMerging: function(e) {
                var t;
                return null === (t = i.get(e)) || void 0 === t || t
            },
            isSaving: function(e) {
                var t;
                return null === (t = o.get(e)) || void 0 === t || t
            },
            withoutMerging: function(e, t) {
                var n = this.isMerging(e);
                i.set(e, !1);
                try {
                    t()
                } finally {
                    i.set(e, n)
                }
            },
            withoutSaving: function(e, t) {
                var n = this.isSaving(e);
                o.set(e, !1);
                try {
                    t()
                } finally {
                    o.set(e, n)
                }
            },
            withSingleEntry: function(e, t) {
                return u(e, "other", !1, t)
            },
            withMergedEntry: function(e, t) {
                return u(e, "other", !0, t)
            },
            currentEntry: function(e) {
                return e.history.stack.length > 0 ? e.history.stack[e.history.index] : null
            },
            insertOrMergeEntry: function(e, t) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = a.currentEntry(e);
                a.isMerging(e) && (null == r ? void 0 : r.mergeable) ? this.mergeEntry(e, n) : this.insertEntry(e, t, n)
            },
            insertEntry: function(e, t) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    o = arguments.length > 3 ? arguments[3] : void 0,
                    i = arguments.length > 4 ? arguments[4] : void 0;
                i = null != i ? i : e.selection, o = null != o ? o : r.EditorUtils.richValue(e);
                var u = e.history,
                    s = a.currentEntry(e);
                for (null != s && (s.mergeable = !1), u.stack.length > 0 && (u.stack.length = u.index + 1); u.stack.length >= 250;) u.stack.shift();
                u.stack.push({
                    type: t,
                    mergeable: n,
                    createdAt: Date.now(),
                    value: o,
                    selection: i
                }), u.index = u.stack.length - 1
            },
            mergeEntry: function(e) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = e.selection,
                    o = r.EditorUtils.richValue(e),
                    i = a.currentEntry(e);
                null != i && (i.value = o, i.selection = n, !t && (i.mergeable = !1))
            }
        };

    function u(e, t, n, i) {
        var u = e.children,
            s = e.selection,
            l = a.isSaving(e);
        o.set(e, !1);
        try {
            var c = i();
            return l && (n ? a.mergeEntry(e) : e.children !== u ? a.insertEntry(e, t, !1) : a.isMerging(e) && null != e.selection && (null == s || !r.RangeUtils.equals(e.selection, s)) && a.mergeEntry(e)), c
        } finally {
            o.set(e, l)
        }
    }
}