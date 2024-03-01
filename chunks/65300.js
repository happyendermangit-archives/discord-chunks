function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var s = n("597755"),
        i = n.n(s),
        r = n("390493");

    function a(e, t) {
        if (!e.startsWith("discord:")) return location.href = e, r.nextTick(() => t(!0));
        let {
            body: n
        } = document;
        if (null == n) return r.nextTick(() => t(!1));
        let s = document.createElement("iframe");
        n.appendChild(s);
        try {
            null != s.contentWindow && (s.contentWindow.location.href = e), r.nextTick(() => t(!0))
        } catch (e) {
            "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && r.nextTick(() => t(!1))
        }
        window.setTimeout(() => {
            var e;
            (null !== (e = null == s ? void 0 : s.parentElement) && void 0 !== e ? e : null) !== null && n.removeChild(s)
        }, 1e3)
    }

    function o(e, t) {
        let n = !1;

        function s() {
            n = !0
        }
        window.addEventListener("blur", s), location.href = e, setTimeout(() => {
            window.removeEventListener("blur", s), t(n)
        }, 1e3)
    }

    function d(e, t) {
        t(!1)
    }

    function u(e, t) {
        location.href = e, r.nextTick(() => t(!0))
    }
    var l = {
        launch: function() {
            var e, t;
            if ((null === (e = i.os) || void 0 === e ? void 0 : e.family) === "Android" || (null === (t = i.os) || void 0 === t ? void 0 : t.family) === "iOS") return u;
            if ("Gecko" === i.layout) return a;
            if (null != i.ua && -1 !== i.ua.indexOf("Valve Steam GameOverlay")) return d;
            return o
        }()
    }
}