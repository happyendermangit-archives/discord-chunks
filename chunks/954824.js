function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("525654"),
        r = n.n(i),
        s = n("444675");

    function a(e, t) {
        if (!e.startsWith("discord:")) return location.href = e, s.nextTick(() => t(!0));
        let {
            body: n
        } = document;
        if (null == n) return s.nextTick(() => t(!1));
        let i = document.createElement("iframe");
        n.appendChild(i);
        try {
            null != i.contentWindow && (i.contentWindow.location.href = e), s.nextTick(() => t(!0))
        } catch (e) {
            "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && s.nextTick(() => t(!1))
        }
        window.setTimeout(() => {
            var e;
            (null !== (e = null == i ? void 0 : i.parentElement) && void 0 !== e ? e : null) !== null && n.removeChild(i)
        }, 1e3)
    }

    function o(e, t) {
        let n = !1;

        function i() {
            n = !0
        }
        window.addEventListener("blur", i), location.href = e, setTimeout(() => {
            window.removeEventListener("blur", i), t(n)
        }, 1e3)
    }

    function l(e, t) {
        t(!1)
    }

    function u(e, t) {
        location.href = e, s.nextTick(() => t(!0))
    }
    t.default = {
        launch: function() {
            var e, t;
            if ((null === (e = r().os) || void 0 === e ? void 0 : e.family) === "Android" || (null === (t = r().os) || void 0 === t ? void 0 : t.family) === "iOS") return u;
            if ("Gecko" === r().layout) return a;
            if (null != r().ua && -1 !== r().ua.indexOf("Valve Steam GameOverlay")) return l;
            return o
        }()
    }
}