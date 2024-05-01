function(e, t, n) {
    "use strict";
    n.r(t), n("653041");
    var i = n("981631");
    let r = [],
        a = !1;

    function s() {
        let e = window.navigator.connection;
        return null == e ? {
            type: i.NetworkConnectionTypes.UNKNOWN,
            effectiveSpeed: i.NetworkConnectionSpeeds.UNKNOWN
        } : {
            type: null != e.type ? e.type : i.NetworkConnectionTypes.UNKNOWN,
            effectiveSpeed: e.effectiveType
        }
    }

    function o() {
        let e = s();
        r.forEach(t => t(e))
    }
    t.default = {
        addOnlineCallback(e) {
            window.addEventListener("online", e)
        },
        removeOnlineCallback(e) {
            window.removeEventListener("online", e)
        },
        addOfflineCallback(e) {
            window.addEventListener("offline", e)
        },
        removeOfflineCallback(e) {
            window.removeEventListener("offline", e)
        },
        addChangeCallback(e) {
            var t;
            t = e, r.push(t),
                function() {
                    if (!0 === a) return;
                    let e = window.navigator.connection;
                    null != e && (a = !0, e.addEventListener("change", o))
                }()
        },
        removeChangeCallback(e) {
            ! function(e) {
                let t = r.indexOf(e); - 1 !== t && (r.splice(t, 1), ! function() {
                    if (!1 === a) return;
                    let e = window.navigator.connection;
                    null != e && 0 === r.length && null != e && (e.removeEventListener("change", o), a = !1)
                }())
            }(e)
        },
        getNetworkInformation: () => Promise.resolve(s()),
        isOnline() {
            let e = navigator.onLine;
            return void 0 === e || e
        }
    }
}