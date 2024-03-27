function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculateProgressPercentage: function() {
            return d
        },
        convertComboId: function() {
            return l
        },
        convertToTransitionState: function() {
            return c
        },
        getCombinedProgress: function() {
            return E
        },
        getComboId: function() {
            return o
        },
        isUserEntitledToLibraryApplication: function() {
            return I
        },
        shouldShareApplicationActivity: function() {
            return u
        },
        shouldShowGameInLibrary: function() {
            return _
        }
    }), n("47120"), n("724458");
    var i = n("695346"),
        r = n("594174"),
        s = n("55563"),
        a = n("981631");

    function o(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function l(e) {
        let [t, n] = e.split(":");
        return {
            applicationId: t,
            branchId: n
        }
    }

    function u(e, t) {
        if (!i.ShowCurrentGame.getSetting() || i.StatusSetting.getSetting() === a.StatusTypes.INVISIBLE) return !1;
        let n = t.getActiveLibraryApplication(e);
        return null == n || !n.hasFlag(a.LibraryApplicationFlags.PRIVATE)
    }

    function d(e, t) {
        return 0 === t ? 100 : e / t * 100
    }

    function _(e, t, n) {
        return !(null == t || n.enabled && t.hasFlag(a.LibraryApplicationFlags.PRIVATE)) && !t.isHidden()
    }

    function c(e) {
        return null == e ? null : e.type === a.LocalDispatchApplicationStates.INSTALLING || e.type === a.LocalDispatchApplicationStates.UPDATING || e.type === a.LocalDispatchApplicationStates.UNINSTALLING ? e : null
    }

    function E(e) {
        return e.reduce((e, t) => {
            let n = c(t);
            return null == n || t.type === a.LocalDispatchApplicationStates.UP_TO_DATE ? e : {
                total: e.total + Number(n.total),
                progress: e.progress + Number(n.progress)
            }
        }, {
            total: 0,
            progress: 0
        })
    }

    function I(e) {
        return !!e.isDiscordApplication() && e.isEntitled(r.default.getCurrentUser(), s.default)
    }
}