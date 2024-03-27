function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("668781"),
        r = n("998502"),
        s = n("58406"),
        a = n("761274");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class l extends s.NativePermissionBaseUtils {
        requestPermissionCore(e, t) {
            var n;
            return this.asyncify(null === (n = this.nativeUtils) || void 0 === n ? void 0 : n.nativePermssionRequestAuthorization, e, t)
        }
        hasPermissionCore(e, t) {
            var n;
            return this.asyncify(null === (n = this.nativeUtils) || void 0 === n ? void 0 : n.nativePermssionHasAuthorization, e, t)
        }
        asyncify(e, t, n) {
            let i = l.requestTypeLookup[t];
            return void 0 === i ? Promise.resolve(!0) : this.requestAuthorization(t, () => null == e ? Promise.resolve(a.NativePermissionStatus.AUTHORIZED) : new Promise((t, n) => e(t, i)), n)
        }
        openSettings(e) {
            var t;
            if ((null === (t = this.nativeUtils) || void 0 === t ? void 0 : t.nativePermissionOpenSettings) == null) return;
            let n = l.requestTypeLookup[e];
            void 0 !== n && this.nativeUtils.nativePermissionOpenSettings(n)
        }
        didHavePermission(e) {
            return this.storage.hasPermission(e)
        }
        openAlertModal(e) {
            let {
                title: t,
                body: n,
                onConfirm: r,
                cancelText: s,
                confirmText: a
            } = e;
            i.default.show({
                title: t,
                body: n,
                onConfirm: r,
                cancelText: s,
                confirmText: a
            })
        }
        constructor(...e) {
            super(...e), o(this, "nativeUtils", r.default.getDiscordUtils())
        }
    }
    o(l, "requestTypeLookup", {
        [a.NativePermissionTypes.CAMERA]: r.NativePermissionRequestType.Camera,
        [a.NativePermissionTypes.AUDIO]: r.NativePermissionRequestType.Microphone,
        [a.NativePermissionTypes.PHOTOS]: r.NativePermissionRequestType.Photo,
        [a.NativePermissionTypes.INPUT_MONITORING]: r.NativePermissionRequestType.InputMonitoring,
        [a.NativePermissionTypes.SCREEN_RECORDING]: r.NativePermissionRequestType.ScreenRecording
    }), t.default = new l
}