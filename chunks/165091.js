function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("525654"),
        o = n.n(r),
        i = n("444675");

    function a(e, t) {
        if (!e.startsWith("discord:")) return location.href = e, i.nextTick(function() {
            return t(!0)
        });
        var n = document.body;
        if (null == n) return i.nextTick(function() {
            return t(!1)
        });
        var r = document.createElement("iframe");
        n.appendChild(r);
        try {
            null != r.contentWindow && (r.contentWindow.location.href = e), i.nextTick(function() {
                return t(!0)
            })
        } catch (e) {
            "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && i.nextTick(function() {
                return t(!1)
            })
        }
        window.setTimeout(function() {
            var e;
            (null !== (e = null == r ? void 0 : r.parentElement) && void 0 !== e ? e : null) !== null && n.removeChild(r)
        }, 1e3)
    }

    function u(e, t) {
        var n = !1;

        function r() {
            n = !0
        }
        window.addEventListener("blur", r), location.href = e, setTimeout(function() {
            window.removeEventListener("blur", r), t(n)
        }, 1e3)
    }

    function s(e, t) {
        t(!1)
    }

    function l(e, t) {
        location.href = e, i.nextTick(function() {
            return t(!0)
        })
    }
    t.default = {
        launch: function() {
            var e, t;
            if ((null === (e = o().os) || void 0 === e ? void 0 : e.family) === "Android" || (null === (t = o().os) || void 0 === t ? void 0 : t.family) === "iOS") return l;
            if ("Gecko" === o().layout) return a;
            if (null != o().ua && -1 !== o().ua.indexOf("Valve Steam GameOverlay")) return s;
            return u
        }()
    }
}