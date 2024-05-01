function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NativePermissionBaseUtils: function() {
            return u
        }
    }), n("411104");
    var i = n("626135"),
        r = n("823967"),
        a = n("281058"),
        s = n("761274"),
        o = n("981631"),
        l = n("689938");
    class u {
        async requestAuthorization(e, t, n) {
            if ("function" != typeof t) throw Error("requestAuthorization: Was provided with not a function for ".concat(e, "."));
            i.default.track(o.AnalyticEvents.PERMISSIONS_REQUESTED, {
                type: e
            });
            let a = await t() === s.NativePermissionStatus.AUTHORIZED,
                l = a ? s.NativePermissionStates.ACCEPTED : s.NativePermissionStates.DENIED;
            return r.default.setPermission(e, l), !a && n.showAuthorizationError && this.showAlert(e), a
        }
        requestPermission(e, t) {
            let n = u.defaultNativePermissionsRequestOptions(t);
            return this.requestPermissionCore(e, n)
        }
        hasPermission(e, t) {
            let n = u.defaultNativePermissionsRequestOptions(t);
            return this.hasPermissionCore(e, n)
        }
        showAlert(e) {
            let t = {
                [s.NativePermissionTypes.CAMERA]: "".concat(l.default.Messages.NO_CAMERA_ACCESS, ". ").concat(l.default.Messages.ENABLE_PRIVACY_ACCESS),
                [s.NativePermissionTypes.AUDIO]: "".concat(l.default.Messages.NO_MICRPHONE_ACCESS, ". ").concat(l.default.Messages.ENABLE_PRIVACY_ACCESS),
                [s.NativePermissionTypes.PHOTOS]: "".concat(l.default.Messages.NO_PHOTOS_ACCESS, ". ").concat(l.default.Messages.ENABLE_PRIVACY_ACCESS),
                [s.NativePermissionTypes.INPUT_MONITORING]: "".concat(l.default.Messages.NO_INPUT_MONITORING_ACCESS, ". ").concat(l.default.Messages.ENABLE_PRIVACY_ACCESS),
                [s.NativePermissionTypes.CONTACTS]: "".concat(l.default.Messages.NO_CONTACTS_ACCESS, ". ").concat(l.default.Messages.ENABLE_PRIVACY_ACCESS)
            } [e];
            null != t && this.openAlertModal({
                title: l.default.Messages.SYSTEM_PERMISSION_GRANT,
                body: t,
                onConfirm: () => this.openSettings(e),
                cancelText: l.default.Messages.CANCEL,
                confirmText: l.default.Messages.DEVICE_SETTINGS
            })
        }
        static defaultNativePermissionsRequestOptions(e) {
            let t = {
                showAuthorizationError: !0
            };
            return null == e ? t : {
                ...t,
                ...e
            }
        }
        constructor() {
            var e, t, n;
            e = this, t = "storage", n = new a.default, t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
}