function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        contextMenuCallbackNative: function() {
            return a
        },
        contextMenuCallbackWeb: function() {
            return o
        },
        getSelectionText: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("239091");

    function s() {
        let e;
        if (null != window.getSelection) {
            var t;
            e = null === (t = window.getSelection()) || void 0 === t ? void 0 : t.toString()
        } else null != document.selection && "Control" !== document.selection.type && (e = document.selection.createRange().text);
        return null != e ? e : ""
    }

    function a(e) {
        let t = s(),
            a = e.target;
        if ((null == a ? void 0 : a.tagName) === "TEXTAREA" || (null == a ? void 0 : a.tagName) === "INPUT") {
            if ((null == a ? void 0 : a.type) !== "checkbox") return (0, r.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.e("99989").then(n.bind(n, "889662"));
                return n => (0, i.jsx)(e, {
                    ...n,
                    text: t
                })
            }, {
                enableSpellCheck: !0
            })
        } else if ("none" === window.getComputedStyle(a).getPropertyValue("-webkit-user-select")) {
            e.preventDefault();
            return
        } else {
            let s, a, o, l = e.target;
            for (; null != l;) "src" in l && null != l.src && (a = l.src), "href" in l && null != l.href && (s = l.href, o = l.textContent), l = null == l ? void 0 : l.parentNode;
            if (null != a) return (0, r.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.e("12241").then(n.bind(n, "115512"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    src: null != a ? a : ""
                })
            });
            if (null != s) return (0, r.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.e("96473").then(n.bind(n, "805362"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    href: s,
                    textContent: o
                })
            });
            else if (null != t && "" !== t) return (0, r.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.e("3865").then(n.bind(n, "745763"));
                return n => (0, i.jsx)(e, {
                    ...n,
                    text: t
                })
            })
        }
        return e.preventDefault(), null
    }

    function o(e) {
        let t = !1,
            n = e.target;
        if ((null == n ? void 0 : n.tagName) === "INPUT" || (null == n ? void 0 : n.tagName) === "TEXTAREA") t = !0;
        else if ((null == n ? void 0 : n.closest) != null && (null == n ? void 0 : n.closest("[contenteditable=true]")) != null) t = !0;
        else if (null != s() && "" !== s()) t = !0;
        else {
            let n, i, r = e.target;
            for (; null != r;) "src" in r && null != r.src && (i = r.src), "href" in r && null != r.href && (n = r.href), r = null == r ? void 0 : r.parentNode;
            (null != n || null != i) && (t = !0)
        }!t && e.preventDefault()
    }
}