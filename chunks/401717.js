function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    var i = n("404118"),
        s = n("50885"),
        r = n("426685"),
        a = n("180524");
    class o extends r.NativePermissionBaseUtils {
        requestPermissionCore(e, t) {
            var n;
            return this.asyncify(null === (n = this.nativeUtils) || void 0 === n ? void 0 : n.nativePermssionRequestAuthorization, e, t)
        }
        hasPermissionCore(e, t) {
            var n;
            return this.asyncify(null === (n = this.nativeUtils) || void 0 === n ? void 0 : n.nativePermssionHasAuthorization, e, t)
        }
        asyncify(e, t, n) {
            let i = o.requestTypeLookup[t];
            return void 0 === i ? Promise.resolve(!0) : this.requestAuthorization(t, () => null == e ? Promise.resolve(a.NativePermissionStatus.AUTHORIZED) : new Promise((t, n) => e(t, i)), n)
        }
        openSettings(e) {
            var t;
            if ((null === (t = this.nativeUtils) || void 0 === t ? void 0 : t.nativePermissionOpenSettings) == null) return;
            let n = o.requestTypeLookup[e];
            void 0 !== n && this.nativeUtils.nativePermissionOpenSettings(n)
        }
        didHavePermission(e) {
            return this.storage.hasPermission(e)
        }
        openAlertModal(e) {
            let {
                title: t,
                body: n,
                onConfirm: s,
                cancelText: r,
                confirmText: a
            } = e;
            i.default.show({
                title: t,
                body: n,
                onConfirm: s,
                cancelText: r,
                confirmText: a
            })
        }
        constructor(...e) {
            super(...e), this.nativeUtils = s.default.getDiscordUtils()
        }
    }
    o.requestTypeLookup = {
        [a.NativePermissionTypes.CAMERA]: s.NativePermissionRequestType.Camera,
        [a.NativePermissionTypes.AUDIO]: s.NativePermissionRequestType.Microphone,
        [a.NativePermissionTypes.PHOTOS]: s.NativePermissionRequestType.Photo,
        [a.NativePermissionTypes.INPUT_MONITORING]: s.NativePermissionRequestType.InputMonitoring,
        [a.NativePermissionTypes.SCREEN_RECORDING]: s.NativePermissionRequestType.ScreenRecording
    };
    var l = new o
}