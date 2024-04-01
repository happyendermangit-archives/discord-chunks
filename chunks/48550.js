function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        SELECT_NAMES: function() {
            return a
        }
    });
    var n = s("689938");
    let a = {
        get webauthn() {
            return n.default.Messages.MFA_V2_WEBAUTHN_NAME
        },
        get totp() {
            return n.default.Messages.MFA_V2_TOTP_NAME
        },
        get sms() {
            return n.default.Messages.MFA_V2_SMS_NAME
        },
        get password() {
            return n.default.Messages.MFA_V2_PASSWORD_NAME
        },
        get backup() {
            return n.default.Messages.MFA_V2_BACKUP_NAME
        }
    }
}