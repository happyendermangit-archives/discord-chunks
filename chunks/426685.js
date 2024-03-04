function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NativePermissionBaseUtils: function() {
            return u
        }
    }), n("70102");
    var i = n("599110"),
        s = n("489269"),
        r = n("581892"),
        a = n("180524"),
        o = n("49111"),
        l = n("782340");
    class u {
        async requestAuthorization(e, t, n) {
            if ("function" != typeof t) throw Error("requestAuthorization: Was provided with not a function for ".concat(e, "."));
            i.default.track(o.AnalyticEvents.PERMISSIONS_REQUESTED, {
                type: e
            });
            let r = await t() === a.NativePermissionStatus.AUTHORIZED,
                l = r ? a.NativePermissionStates.ACCEPTED : a.NativePermissionStates.DENIED;
            return s.default.setPermission(e, l), !r && n.showAuthorizationError && this.showAlert(e), r
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
                    [a.NativePermissionTypes.CAMERA]: "".concat(l.default.Messages.NO_CAMERA_ACCESS, ". ").concat(l.default.Messages.ENABLE_PRIVACY_ACCESS),
                    [a.NativePermissionTypes.AUDIO]: "".concat(l.default.Messages.NO_MICRPHONE_ACCESS, ". ").concat(l.default.Messages.ENABLE_PRIVACY_ACCESS),
                    [a.NativePermissionTypes.PHOTOS]: "".concat(l.default.Messages.NO_PHOTOS_ACCESS, ". ").concat(l.default.Messages.ENABLE_PRIVACY_ACCESS),
                    [a.NativePermissionTypes.INPUT_MONITORING]: "".concat(l.default.Messages.NO_INPUT_MONITORING_ACCESS, ". ").concat(l.default.Messages.ENABLE_PRIVACY_ACCESS),
                    [a.NativePermissionTypes.CONTACTS]: "".concat(l.default.Messages.NO_CONTACTS_ACCESS, ". ").concat(l.default.Messages.ENABLE_PRIVACY_ACCESS)
                },
                n = t[e];
            null != n && this.openAlertModal({
                title: l.default.Messages.SYSTEM_PERMISSION_GRANT,
                body: n,
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
            this.storage = new r.default
        }
    }
}