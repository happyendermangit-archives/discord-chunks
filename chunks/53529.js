function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HistoryUtils: function() {
            return a
        }
    }), n("47120"), n("653041");
    var i = n("887490");
    let r = new WeakMap,
        s = new WeakMap,
        a = {
            isMerging(e) {
                var t;
                return null === (t = s.get(e)) || void 0 === t || t
            },
            isSaving(e) {
                var t;
                return null === (t = r.get(e)) || void 0 === t || t
            },
            withoutMerging(e, t) {
                let n = this.isMerging(e);
                s.set(e, !1);
                try {
                    t()
                } finally {
                    s.set(e, n)
                }
            },
            withoutSaving(e, t) {
                let n = this.isSaving(e);
                r.set(e, !1);
                try {
                    t()
                } finally {
                    r.set(e, n)
                }
            },
            withSingleEntry: (e, t) => o(e, "other", !1, t),
            withMergedEntry: (e, t) => o(e, "other", !0, t),
            currentEntry: e => e.history.stack.length > 0 ? e.history.stack[e.history.index] : null,
            insertOrMergeEntry(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = a.currentEntry(e);
                a.isMerging(e) && (null == i ? void 0 : i.mergeable) ? this.mergeEntry(e, n) : this.insertEntry(e, t, n)
            },
            insertEntry(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    s = arguments.length > 4 ? arguments[4] : void 0;
                s = null != s ? s : e.selection, r = null != r ? r : i.EditorUtils.richValue(e);
                let {
                    history: o
                } = e, l = a.currentEntry(e);
                for (null != l && (l.mergeable = !1), o.stack.length > 0 && (o.stack.length = o.index + 1); o.stack.length >= 250;) o.stack.shift();
                o.stack.push({
                    type: t,
                    mergeable: n,
                    createdAt: Date.now(),
                    value: r,
                    selection: s
                }), o.index = o.stack.length - 1
            },
            mergeEntry(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        selection: n
                    } = e,
                    r = i.EditorUtils.richValue(e),
                    s = a.currentEntry(e);
                null != s && (s.value = r, s.selection = n, !t && (s.mergeable = !1))
            }
        };

    function o(e, t, n, s) {
        let o = e.children,
            l = e.selection,
            u = a.isSaving(e);
        r.set(e, !1);
        try {
            let r = s();
            return u && (n ? a.mergeEntry(e) : e.children !== o ? a.insertEntry(e, t, !1) : a.isMerging(e) && null != e.selection && (null == l || !i.RangeUtils.equals(e.selection, l)) && a.mergeEntry(e)), r
        } finally {
            r.set(e, u)
        }
    }
}