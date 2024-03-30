function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SELECT_NAMES: function() {
            return a
        }
    });
    var r = n("941504"),
        a = {
            get webauthn() {
                return r.default.Messages.MFA_V2_WEBAUTHN_NAME
            },
            get totp() {
                return r.default.Messages.MFA_V2_TOTP_NAME
            },
            get sms() {
                return r.default.Messages.MFA_V2_SMS_NAME
            },
            get password() {
                return r.default.Messages.MFA_V2_PASSWORD_NAME
            },
            get backup() {
                return r.default.Messages.MFA_V2_BACKUP_NAME
            }
        }
}