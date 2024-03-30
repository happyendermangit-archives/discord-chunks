function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getCountryCodeByAlpha2: function() {
            return u
        },
        getDefaultCountryCode: function() {
            return s
        },
        getI18NCountryName: function() {
            return c
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("126271"),
        a = n("941504");

    function u(e) {
        var t = i.default.find(function(t) {
            return t.alpha2 === e
        });
        if (null != t) return {
            name: t.name,
            code: t.phoneCountryCode,
            alpha2: t.alpha2
        }
    }

    function s() {
        var e = function(e) {
            var t = i.default.find(function(t) {
                return t.name === e
            });
            if (null != t) return {
                name: t.name,
                code: t.phoneCountryCode,
                alpha2: t.alpha2
            }
        }("United States");
        return o()(e, "Default country code cannot be missing."), e
    }
    var l = {
        AF: function() {
            return a.default.Messages.COUNTRY_NAME_AF
        },
        AX: function() {
            return a.default.Messages.COUNTRY_NAME_AX
        },
        AL: function() {
            return a.default.Messages.COUNTRY_NAME_AL
        },
        DZ: function() {
            return a.default.Messages.COUNTRY_NAME_DZ
        },
        AS: function() {
            return a.default.Messages.COUNTRY_NAME_AS
        },
        AD: function() {
            return a.default.Messages.COUNTRY_NAME_AD
        },
        AO: function() {
            return a.default.Messages.COUNTRY_NAME_AO
        },
        AI: function() {
            return a.default.Messages.COUNTRY_NAME_AI
        },
        AQ: function() {
            return a.default.Messages.COUNTRY_NAME_AQ
        },
        AG: function() {
            return a.default.Messages.COUNTRY_NAME_AG
        },
        AR: function() {
            return a.default.Messages.COUNTRY_NAME_AR
        },
        AM: function() {
            return a.default.Messages.COUNTRY_NAME_AM
        },
        AW: function() {
            return a.default.Messages.COUNTRY_NAME_AW
        },
        AC: function() {
            return a.default.Messages.COUNTRY_NAME_AC
        },
        AU: function() {
            return a.default.Messages.COUNTRY_NAME_AU
        },
        AT: function() {
            return a.default.Messages.COUNTRY_NAME_AT
        },
        AZ: function() {
            return a.default.Messages.COUNTRY_NAME_AZ
        },
        BS: function() {
            return a.default.Messages.COUNTRY_NAME_BS
        },
        BH: function() {
            return a.default.Messages.COUNTRY_NAME_BH
        },
        BD: function() {
            return a.default.Messages.COUNTRY_NAME_BD
        },
        BB: function() {
            return a.default.Messages.COUNTRY_NAME_BB
        },
        BY: function() {
            return a.default.Messages.COUNTRY_NAME_BY
        },
        BE: function() {
            return a.default.Messages.COUNTRY_NAME_BE
        },
        BZ: function() {
            return a.default.Messages.COUNTRY_NAME_BZ
        },
        BJ: function() {
            return a.default.Messages.COUNTRY_NAME_BJ
        },
        BM: function() {
            return a.default.Messages.COUNTRY_NAME_BM
        },
        BT: function() {
            return a.default.Messages.COUNTRY_NAME_BT
        },
        BO: function() {
            return a.default.Messages.COUNTRY_NAME_BO
        },
        BQ: function() {
            return a.default.Messages.COUNTRY_NAME_BQ
        },
        BA: function() {
            return a.default.Messages.COUNTRY_NAME_BA
        },
        BW: function() {
            return a.default.Messages.COUNTRY_NAME_BW
        },
        BV: function() {
            return a.default.Messages.COUNTRY_NAME_BV
        },
        BR: function() {
            return a.default.Messages.COUNTRY_NAME_BR
        },
        IO: function() {
            return a.default.Messages.COUNTRY_NAME_IO
        },
        BN: function() {
            return a.default.Messages.COUNTRY_NAME_BN
        },
        BG: function() {
            return a.default.Messages.COUNTRY_NAME_BG
        },
        BF: function() {
            return a.default.Messages.COUNTRY_NAME_BF
        },
        BI: function() {
            return a.default.Messages.COUNTRY_NAME_BI
        },
        KH: function() {
            return a.default.Messages.COUNTRY_NAME_KH
        },
        CM: function() {
            return a.default.Messages.COUNTRY_NAME_CM
        },
        CA: function() {
            return a.default.Messages.COUNTRY_NAME_CA
        },
        CV: function() {
            return a.default.Messages.COUNTRY_NAME_CV
        },
        KY: function() {
            return a.default.Messages.COUNTRY_NAME_KY
        },
        CF: function() {
            return a.default.Messages.COUNTRY_NAME_CF
        },
        TD: function() {
            return a.default.Messages.COUNTRY_NAME_TD
        },
        CL: function() {
            return a.default.Messages.COUNTRY_NAME_CL
        },
        CN: function() {
            return a.default.Messages.COUNTRY_NAME_CN
        },
        CX: function() {
            return a.default.Messages.COUNTRY_NAME_CX
        },
        CC: function() {
            return a.default.Messages.COUNTRY_NAME_CC
        },
        CO: function() {
            return a.default.Messages.COUNTRY_NAME_CO
        },
        KM: function() {
            return a.default.Messages.COUNTRY_NAME_KM
        },
        CG: function() {
            return a.default.Messages.COUNTRY_NAME_CG
        },
        CD: function() {
            return a.default.Messages.COUNTRY_NAME_CD
        },
        CK: function() {
            return a.default.Messages.COUNTRY_NAME_CK
        },
        CR: function() {
            return a.default.Messages.COUNTRY_NAME_CR
        },
        CI: function() {
            return a.default.Messages.COUNTRY_NAME_CI
        },
        HR: function() {
            return a.default.Messages.COUNTRY_NAME_HR
        },
        CU: function() {
            return a.default.Messages.COUNTRY_NAME_CU
        },
        CW: function() {
            return a.default.Messages.COUNTRY_NAME_CW
        },
        CY: function() {
            return a.default.Messages.COUNTRY_NAME_CY
        },
        CZ: function() {
            return a.default.Messages.COUNTRY_NAME_CZ
        },
        DK: function() {
            return a.default.Messages.COUNTRY_NAME_DK
        },
        DG: function() {
            return a.default.Messages.COUNTRY_NAME_DG
        },
        DJ: function() {
            return a.default.Messages.COUNTRY_NAME_DJ
        },
        DM: function() {
            return a.default.Messages.COUNTRY_NAME_DM
        },
        DO: function() {
            return a.default.Messages.COUNTRY_NAME_DO
        },
        TP: function() {
            return a.default.Messages.COUNTRY_NAME_TP
        },
        EC: function() {
            return a.default.Messages.COUNTRY_NAME_EC
        },
        EG: function() {
            return a.default.Messages.COUNTRY_NAME_EG
        },
        SV: function() {
            return a.default.Messages.COUNTRY_NAME_SV
        },
        GQ: function() {
            return a.default.Messages.COUNTRY_NAME_GQ
        },
        ER: function() {
            return a.default.Messages.COUNTRY_NAME_ER
        },
        EE: function() {
            return a.default.Messages.COUNTRY_NAME_EE
        },
        ET: function() {
            return a.default.Messages.COUNTRY_NAME_ET
        },
        FK: function() {
            return a.default.Messages.COUNTRY_NAME_FK
        },
        FO: function() {
            return a.default.Messages.COUNTRY_NAME_FO
        },
        FJ: function() {
            return a.default.Messages.COUNTRY_NAME_FJ
        },
        FI: function() {
            return a.default.Messages.COUNTRY_NAME_FI
        },
        FR: function() {
            return a.default.Messages.COUNTRY_NAME_FR
        },
        GF: function() {
            return a.default.Messages.COUNTRY_NAME_GF
        },
        PF: function() {
            return a.default.Messages.COUNTRY_NAME_PF
        },
        TF: function() {
            return a.default.Messages.COUNTRY_NAME_TF
        },
        GA: function() {
            return a.default.Messages.COUNTRY_NAME_GA
        },
        GM: function() {
            return a.default.Messages.COUNTRY_NAME_GM
        },
        GE: function() {
            return a.default.Messages.COUNTRY_NAME_GE
        },
        DE: function() {
            return a.default.Messages.COUNTRY_NAME_DE
        },
        GH: function() {
            return a.default.Messages.COUNTRY_NAME_GH
        },
        GI: function() {
            return a.default.Messages.COUNTRY_NAME_GI
        },
        GR: function() {
            return a.default.Messages.COUNTRY_NAME_GR
        },
        GL: function() {
            return a.default.Messages.COUNTRY_NAME_GL
        },
        GD: function() {
            return a.default.Messages.COUNTRY_NAME_GD
        },
        GP: function() {
            return a.default.Messages.COUNTRY_NAME_GP
        },
        GU: function() {
            return a.default.Messages.COUNTRY_NAME_GU
        },
        GT: function() {
            return a.default.Messages.COUNTRY_NAME_GT
        },
        GG: function() {
            return a.default.Messages.COUNTRY_NAME_GG
        },
        GN: function() {
            return a.default.Messages.COUNTRY_NAME_GN
        },
        GW: function() {
            return a.default.Messages.COUNTRY_NAME_GW
        },
        GY: function() {
            return a.default.Messages.COUNTRY_NAME_GY
        },
        HT: function() {
            return a.default.Messages.COUNTRY_NAME_HT
        },
        HM: function() {
            return a.default.Messages.COUNTRY_NAME_HM
        },
        VA: function() {
            return a.default.Messages.COUNTRY_NAME_VA
        },
        HN: function() {
            return a.default.Messages.COUNTRY_NAME_HN
        },
        HK: function() {
            return a.default.Messages.COUNTRY_NAME_HK
        },
        HU: function() {
            return a.default.Messages.COUNTRY_NAME_HU
        },
        IS: function() {
            return a.default.Messages.COUNTRY_NAME_IS
        },
        IN: function() {
            return a.default.Messages.COUNTRY_NAME_IN
        },
        ID: function() {
            return a.default.Messages.COUNTRY_NAME_ID
        },
        IR: function() {
            return a.default.Messages.COUNTRY_NAME_IR
        },
        IQ: function() {
            return a.default.Messages.COUNTRY_NAME_IQ
        },
        IE: function() {
            return a.default.Messages.COUNTRY_NAME_IE
        },
        IM: function() {
            return a.default.Messages.COUNTRY_NAME_IM
        },
        IL: function() {
            return a.default.Messages.COUNTRY_NAME_IL
        },
        IT: function() {
            return a.default.Messages.COUNTRY_NAME_IT
        },
        JM: function() {
            return a.default.Messages.COUNTRY_NAME_JM
        },
        JP: function() {
            return a.default.Messages.COUNTRY_NAME_JP
        },
        JE: function() {
            return a.default.Messages.COUNTRY_NAME_JE
        },
        JO: function() {
            return a.default.Messages.COUNTRY_NAME_JO
        },
        KZ: function() {
            return a.default.Messages.COUNTRY_NAME_KZ
        },
        KE: function() {
            return a.default.Messages.COUNTRY_NAME_KE
        },
        KI: function() {
            return a.default.Messages.COUNTRY_NAME_KI
        },
        XK: function() {
            return a.default.Messages.COUNTRY_NAME_XK
        },
        KP: function() {
            return a.default.Messages.COUNTRY_NAME_KP
        },
        KR: function() {
            return a.default.Messages.COUNTRY_NAME_KR
        },
        KW: function() {
            return a.default.Messages.COUNTRY_NAME_KW
        },
        KG: function() {
            return a.default.Messages.COUNTRY_NAME_KG
        },
        LA: function() {
            return a.default.Messages.COUNTRY_NAME_LA
        },
        LV: function() {
            return a.default.Messages.COUNTRY_NAME_LV
        },
        LB: function() {
            return a.default.Messages.COUNTRY_NAME_LB
        },
        LS: function() {
            return a.default.Messages.COUNTRY_NAME_LS
        },
        LR: function() {
            return a.default.Messages.COUNTRY_NAME_LR
        },
        LY: function() {
            return a.default.Messages.COUNTRY_NAME_LY
        },
        LI: function() {
            return a.default.Messages.COUNTRY_NAME_LI
        },
        LT: function() {
            return a.default.Messages.COUNTRY_NAME_LT
        },
        LU: function() {
            return a.default.Messages.COUNTRY_NAME_LU
        },
        MO: function() {
            return a.default.Messages.COUNTRY_NAME_MO
        },
        MK: function() {
            return a.default.Messages.COUNTRY_NAME_MK
        },
        MG: function() {
            return a.default.Messages.COUNTRY_NAME_MG
        },
        MW: function() {
            return a.default.Messages.COUNTRY_NAME_MW
        },
        MY: function() {
            return a.default.Messages.COUNTRY_NAME_MY
        },
        MV: function() {
            return a.default.Messages.COUNTRY_NAME_MV
        },
        ML: function() {
            return a.default.Messages.COUNTRY_NAME_ML
        },
        MT: function() {
            return a.default.Messages.COUNTRY_NAME_MT
        },
        MH: function() {
            return a.default.Messages.COUNTRY_NAME_MH
        },
        MQ: function() {
            return a.default.Messages.COUNTRY_NAME_MQ
        },
        MR: function() {
            return a.default.Messages.COUNTRY_NAME_MR
        },
        MU: function() {
            return a.default.Messages.COUNTRY_NAME_MU
        },
        YT: function() {
            return a.default.Messages.COUNTRY_NAME_YT
        },
        MX: function() {
            return a.default.Messages.COUNTRY_NAME_MX
        },
        FM: function() {
            return a.default.Messages.COUNTRY_NAME_FM
        },
        MI: function() {
            return a.default.Messages.COUNTRY_NAME_MI
        },
        MD: function() {
            return a.default.Messages.COUNTRY_NAME_MD
        },
        MC: function() {
            return a.default.Messages.COUNTRY_NAME_MC
        },
        MN: function() {
            return a.default.Messages.COUNTRY_NAME_MN
        },
        ME: function() {
            return a.default.Messages.COUNTRY_NAME_ME
        },
        MS: function() {
            return a.default.Messages.COUNTRY_NAME_MS
        },
        MA: function() {
            return a.default.Messages.COUNTRY_NAME_MA
        },
        MZ: function() {
            return a.default.Messages.COUNTRY_NAME_MZ
        },
        MM: function() {
            return a.default.Messages.COUNTRY_NAME_MM
        },
        NA: function() {
            return a.default.Messages.COUNTRY_NAME_NA
        },
        NR: function() {
            return a.default.Messages.COUNTRY_NAME_NR
        },
        NP: function() {
            return a.default.Messages.COUNTRY_NAME_NP
        },
        NL: function() {
            return a.default.Messages.COUNTRY_NAME_NL
        },
        AN: function() {
            return a.default.Messages.COUNTRY_NAME_AN
        },
        NC: function() {
            return a.default.Messages.COUNTRY_NAME_NC
        },
        NZ: function() {
            return a.default.Messages.COUNTRY_NAME_NZ
        },
        NI: function() {
            return a.default.Messages.COUNTRY_NAME_NI
        },
        NE: function() {
            return a.default.Messages.COUNTRY_NAME_NE
        },
        NG: function() {
            return a.default.Messages.COUNTRY_NAME_NG
        },
        NU: function() {
            return a.default.Messages.COUNTRY_NAME_NU
        },
        NF: function() {
            return a.default.Messages.COUNTRY_NAME_NF
        },
        MP: function() {
            return a.default.Messages.COUNTRY_NAME_MP
        },
        NO: function() {
            return a.default.Messages.COUNTRY_NAME_NO
        },
        OM: function() {
            return a.default.Messages.COUNTRY_NAME_OM
        },
        PK: function() {
            return a.default.Messages.COUNTRY_NAME_PK
        },
        PW: function() {
            return a.default.Messages.COUNTRY_NAME_PW
        },
        PS: function() {
            return a.default.Messages.COUNTRY_NAME_PS
        },
        PA: function() {
            return a.default.Messages.COUNTRY_NAME_PA
        },
        PG: function() {
            return a.default.Messages.COUNTRY_NAME_PG
        },
        PY: function() {
            return a.default.Messages.COUNTRY_NAME_PY
        },
        PE: function() {
            return a.default.Messages.COUNTRY_NAME_PE
        },
        PH: function() {
            return a.default.Messages.COUNTRY_NAME_PH
        },
        PN: function() {
            return a.default.Messages.COUNTRY_NAME_PN
        },
        PL: function() {
            return a.default.Messages.COUNTRY_NAME_PL
        },
        PT: function() {
            return a.default.Messages.COUNTRY_NAME_PT
        },
        PR: function() {
            return a.default.Messages.COUNTRY_NAME_PR
        },
        QA: function() {
            return a.default.Messages.COUNTRY_NAME_QA
        },
        RE: function() {
            return a.default.Messages.COUNTRY_NAME_RE
        },
        RO: function() {
            return a.default.Messages.COUNTRY_NAME_RO
        },
        RU: function() {
            return a.default.Messages.COUNTRY_NAME_RU
        },
        RW: function() {
            return a.default.Messages.COUNTRY_NAME_RW
        },
        BL: function() {
            return a.default.Messages.COUNTRY_NAME_BL
        },
        SH: function() {
            return a.default.Messages.COUNTRY_NAME_SH
        },
        KN: function() {
            return a.default.Messages.COUNTRY_NAME_KN
        },
        LC: function() {
            return a.default.Messages.COUNTRY_NAME_LC
        },
        MF: function() {
            return a.default.Messages.COUNTRY_NAME_MF
        },
        PM: function() {
            return a.default.Messages.COUNTRY_NAME_PM
        },
        VC: function() {
            return a.default.Messages.COUNTRY_NAME_VC
        },
        WS: function() {
            return a.default.Messages.COUNTRY_NAME_WS
        },
        SM: function() {
            return a.default.Messages.COUNTRY_NAME_SM
        },
        ST: function() {
            return a.default.Messages.COUNTRY_NAME_ST
        },
        SA: function() {
            return a.default.Messages.COUNTRY_NAME_SA
        },
        SN: function() {
            return a.default.Messages.COUNTRY_NAME_SN
        },
        RS: function() {
            return a.default.Messages.COUNTRY_NAME_RS
        },
        SC: function() {
            return a.default.Messages.COUNTRY_NAME_SC
        },
        SL: function() {
            return a.default.Messages.COUNTRY_NAME_SL
        },
        SG: function() {
            return a.default.Messages.COUNTRY_NAME_SG
        },
        SX: function() {
            return a.default.Messages.COUNTRY_NAME_SX
        },
        SK: function() {
            return a.default.Messages.COUNTRY_NAME_SK
        },
        SI: function() {
            return a.default.Messages.COUNTRY_NAME_SI
        },
        SB: function() {
            return a.default.Messages.COUNTRY_NAME_SB
        },
        SO: function() {
            return a.default.Messages.COUNTRY_NAME_SO
        },
        ZA: function() {
            return a.default.Messages.COUNTRY_NAME_ZA
        },
        GS: function() {
            return a.default.Messages.COUNTRY_NAME_GS
        },
        SS: function() {
            return a.default.Messages.COUNTRY_NAME_SS
        },
        ES: function() {
            return a.default.Messages.COUNTRY_NAME_ES
        },
        LK: function() {
            return a.default.Messages.COUNTRY_NAME_LK
        },
        SD: function() {
            return a.default.Messages.COUNTRY_NAME_SD
        },
        SR: function() {
            return a.default.Messages.COUNTRY_NAME_SR
        },
        SJ: function() {
            return a.default.Messages.COUNTRY_NAME_SJ
        },
        SZ: function() {
            return a.default.Messages.COUNTRY_NAME_SZ
        },
        SE: function() {
            return a.default.Messages.COUNTRY_NAME_SE
        },
        CH: function() {
            return a.default.Messages.COUNTRY_NAME_CH
        },
        SY: function() {
            return a.default.Messages.COUNTRY_NAME_SY
        },
        TW: function() {
            return a.default.Messages.COUNTRY_NAME_TW
        },
        TJ: function() {
            return a.default.Messages.COUNTRY_NAME_TJ
        },
        TZ: function() {
            return a.default.Messages.COUNTRY_NAME_TZ
        },
        TH: function() {
            return a.default.Messages.COUNTRY_NAME_TH
        },
        TL: function() {
            return a.default.Messages.COUNTRY_NAME_TL
        },
        TG: function() {
            return a.default.Messages.COUNTRY_NAME_TG
        },
        TK: function() {
            return a.default.Messages.COUNTRY_NAME_TK
        },
        TO: function() {
            return a.default.Messages.COUNTRY_NAME_TO
        },
        TT: function() {
            return a.default.Messages.COUNTRY_NAME_TT
        },
        TN: function() {
            return a.default.Messages.COUNTRY_NAME_TN
        },
        TR: function() {
            return a.default.Messages.COUNTRY_NAME_TR
        },
        TM: function() {
            return a.default.Messages.COUNTRY_NAME_TM
        },
        TC: function() {
            return a.default.Messages.COUNTRY_NAME_TC
        },
        TV: function() {
            return a.default.Messages.COUNTRY_NAME_TV
        },
        UG: function() {
            return a.default.Messages.COUNTRY_NAME_UG
        },
        UA: function() {
            return a.default.Messages.COUNTRY_NAME_UA
        },
        AE: function() {
            return a.default.Messages.COUNTRY_NAME_AE
        },
        GB: function() {
            return a.default.Messages.COUNTRY_NAME_GB
        },
        US: function() {
            return a.default.Messages.COUNTRY_NAME_US
        },
        UM: function() {
            return a.default.Messages.COUNTRY_NAME_UM
        },
        UY: function() {
            return a.default.Messages.COUNTRY_NAME_UY
        },
        UZ: function() {
            return a.default.Messages.COUNTRY_NAME_UZ
        },
        VU: function() {
            return a.default.Messages.COUNTRY_NAME_VU
        },
        VE: function() {
            return a.default.Messages.COUNTRY_NAME_VE
        },
        VN: function() {
            return a.default.Messages.COUNTRY_NAME_VN
        },
        VG: function() {
            return a.default.Messages.COUNTRY_NAME_VG
        },
        VI: function() {
            return a.default.Messages.COUNTRY_NAME_VI
        },
        WF: function() {
            return a.default.Messages.COUNTRY_NAME_WF
        },
        EH: function() {
            return a.default.Messages.COUNTRY_NAME_EH
        },
        YE: function() {
            return a.default.Messages.COUNTRY_NAME_YE
        },
        ZM: function() {
            return a.default.Messages.COUNTRY_NAME_ZM
        },
        ZW: function() {
            return a.default.Messages.COUNTRY_NAME_ZW
        }
    };

    function c(e) {
        return l[e]()
    }
}