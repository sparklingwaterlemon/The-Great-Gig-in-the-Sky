const MOONIMAGES = {
    "1": require("./moon.0101.jpg"),
    "2": require("./moon.0102.jpg"),
    "3": require("./moon.0103.jpg"),
    "4": require("./moon.0104.jpg"),
    "5": require("./moon.0105.jpg"),
    "6": require("./moon.0106.jpg"),
    "7": require("./moon.0107.jpg"),
    "8": require("./moon.0108.jpg"),
    "9": require("./moon.0109.jpg"),
    "10": require("./moon.0110.jpg"),
    "11": require("./moon.0111.jpg"),
    "12": require("./moon.0112.jpg"),
    "13": require("./moon.0113.jpg"),
    "14": require("./moon.0114.jpg"),
    "15": require("./moon.0115.jpg"),
    "16": require("./moon.0116.jpg"),
    "17": require("./moon.0117.jpg"),
    "18": require("./moon.0118.jpg"),
    "19": require("./moon.0119.jpg"),
    "20": require("./moon.0120-phase-100.jpg"),
    "21": require("./moon.0121.jpg"),
    "22": require("./moon.0122.jpg"),
    "23": require("./moon.0123.jpg"),
    "24": require("./moon.0124.jpg"),
    "25": require("./moon.0125.jpg"),
    "26": require("./moon.0126.jpg"),
    "27": require("./moon.0127.jpg"),
    "28": require("./moon.0128.jpg"),
    "29": require("./moon.0129.jpg"),
    "30": require("./moon.0130.jpg"),
    "31": require("./moon.0131.jpg"),

    "32": require("./moon.0201.jpg"),
    "33": require("./moon.0202.jpg"),
    "34": require("./moon.0203-phase-0.jpg"),
    "35": require("./moon.0204.jpg"),
    "36": require("./moon.0205.jpg"),
    "37": require("./moon.0206.jpg"),
    "38": require("./moon.0207.jpg"),
    "39": require("./moon.0208.jpg"),
    "40": require("./moon.0209.jpg"),
    "41": require("./moon.0210.jpg"),
    "42": require("./moon.0211.jpg"),
    "43": require("./moon.0212.jpg"),
    "44": require("./moon.0213.jpg"),
    "45": require("./moon.0214.jpg"),
    "46": require("./moon.0215.jpg"),
    "47": require("./moon.0216.jpg"),
    "48": require("./moon.0217.jpg"),
    "49": require("./moon.0218-phase-100.jpg"),
    "50": require("./moon.0219.jpg"),
    "51": require("./moon.0220.jpg"),
    "52": require("./moon.0221.jpg"),
    "53": require("./moon.0222.jpg"),
    "54": require("./moon.0223.jpg"),
    "55": require("./moon.0224.jpg"),
    "56": require("./moon.0225.jpg"),
    "57": require("./moon.0226.jpg"),
    "58": require("./moon.0227.jpg"),
    "59": require("./moon.0228.jpg"),

    "60": require("./moon.0301.jpg"),
    "61": require("./moon.0302.jpg"),
    "62": require("./moon.0303.jpg"),
    "63": require("./moon.0304.jpg"),
    "64": require("./moon.0305-phase-0.jpg"),
    "65": require("./moon.0306.jpg"),
    "66": require("./moon.0307.jpg"),
    "67": require("./moon.0308.jpg"),
    "68": require("./moon.0309.jpg"),
    "69": require("./moon.0310.jpg"),
    "70": require("./moon.0311.jpg"),
    "71": require("./moon.0312.jpg"),
    "72": require("./moon.0313.jpg"),
    "73": require("./moon.0314.jpg"),
    "74": require("./moon.0315.jpg"),
    "75": require("./moon.0316.jpg"),
    "76": require("./moon.0317.jpg"),
    "77": require("./moon.0318.jpg"),
    "78": require("./moon.0319.jpg"),
    "79": require("./moon.0320-phase-100.jpg"),
    "80": require("./moon.0321.jpg"),
    "81": require("./moon.0322.jpg"),
    "82": require("./moon.0323.jpg"),
    "83": require("./moon.0324.jpg"),
    "84": require("./moon.0325.jpg"),
    "85": require("./moon.0326.jpg"),
    "86": require("./moon.0327.jpg"),
    "87": require("./moon.0328.jpg"),
    "88": require("./moon.0329.jpg"),
    "89": require("./moon.0330.jpg"),
    "90": require("./moon.0331.jpg"),

    "91": require("./moon.0401.jpg"),
    "92": require("./moon.0402.jpg"),
    "93": require("./moon.0403.jpg"),
    "94": require("./moon.0404-phase-0.jpg"),
    "95": require("./moon.0405.jpg"),
    "96": require("./moon.0406.jpg"),
    "97": require("./moon.0407.jpg"),
    "98": require("./moon.0408.jpg"),
    "99": require("./moon.0409.jpg"),
    "100": require("./moon.0410.jpg"),
    "101": require("./moon.0411.jpg"),
    "102": require("./moon.0412.jpg"),
    "103": require("./moon.0413.jpg"),
    "104": require("./moon.0414.jpg"),
    "105": require("./moon.0415.jpg"),
    "106": require("./moon.0416.jpg"),
    "107": require("./moon.0417.jpg"),
    "108": require("./moon.0418-phase-100.jpg"),
    "109": require("./moon.0419.jpg"),
    "110": require("./moon.0420.jpg"),
    "111": require("./moon.0421.jpg"),
    "112": require("./moon.0422.jpg"),
    "113": require("./moon.0423.jpg"),
    "114": require("./moon.0424.jpg"),
    "115": require("./moon.0425.jpg"),
    "116": require("./moon.0426.jpg"),
    "117": require("./moon.0427.jpg"),
    "118": require("./moon.0428.jpg"),
    "119": require("./moon.0429.jpg"),
    "120": require("./moon.0430.jpg"),

    "121": require("./moon.0501.jpg"),
    "122": require("./moon.0502.jpg"),
    "123": require("./moon.0503-phase-0.jpg"),
    "124": require("./moon.0504.jpg"),
    "125": require("./moon.0505.jpg"),
    "126": require("./moon.0506.jpg"),
    "127": require("./moon.0507.jpg"),
    "128": require("./moon.0508.jpg"),
    "129": require("./moon.0509.jpg"),
    "130": require("./moon.0510.jpg"),
    "131": require("./moon.0511.jpg"),
    "132": require("./moon.0512.jpg"),
    "133": require("./moon.0513.jpg"),
    "134": require("./moon.0514.jpg"),
    "135": require("./moon.0515.jpg"),
    "136": require("./moon.0516.jpg"),
    "137": require("./moon.0517-phase-100.jpg"),
    "138": require("./moon.0518-phase-100.jpg"),
    "139": require("./moon.0519.jpg"),
    "140": require("./moon.0520.jpg"),
    "141": require("./moon.0521.jpg"),
    "142": require("./moon.0522.jpg"),
    "143": require("./moon.0523.jpg"),
    "144": require("./moon.0524.jpg"),
    "145": require("./moon.0525.jpg"),
    "146": require("./moon.0526.jpg"),
    "147": require("./moon.0527.jpg"),
    "148": require("./moon.0528.jpg"),
    "149": require("./moon.0529.jpg"),
    "150": require("./moon.0530.jpg"),
    "151": require("./moon.0531.jpg"),

    "152": require("./moon.0601.jpg"),
    "153": require("./moon.0602-phase-0.jpg"),
    "154": require("./moon.0603.jpg"),
    "155": require("./moon.0604.jpg"),
    "156": require("./moon.0605.jpg"),
    "157": require("./moon.0606.jpg"),
    "158": require("./moon.0607.jpg"),
    "159": require("./moon.0608.jpg"),
    "160": require("./moon.0609.jpg"),
    "161": require("./moon.0610.jpg"),
    "162": require("./moon.0611.jpg"),
    "163": require("./moon.0612.jpg"),
    "164": require("./moon.0613.jpg"),
    "165": require("./moon.0614.jpg"),
    "166": require("./moon.0615.jpg"),
    "167": require("./moon.0616-phase-100.jpg"),
    "168": require("./moon.0617.jpg"),
    "169": require("./moon.0618.jpg"),
    "170": require("./moon.0619.jpg"),
    "171": require("./moon.0620.jpg"),
    "172": require("./moon.0621.jpg"),
    "173": require("./moon.0622.jpg"),
    "174": require("./moon.0623.jpg"),
    "175": require("./moon.0624.jpg"),
    "176": require("./moon.0625.jpg"),
    "177": require("./moon.0626.jpg"),
    "178": require("./moon.0627.jpg"),
    "179": require("./moon.0628.jpg"),
    "180": require("./moon.0629.jpg"),
    "181": require("./moon.0630.jpg"),

    "182": require("./moon.0701-phase-0.jpg"),
    "183": require("./moon.0702.jpg"),
    "184": require("./moon.0703.jpg"),
    "185": require("./moon.0704.jpg"),
    "186": require("./moon.0705.jpg"),
    "187": require("./moon.0706.jpg"),
    "188": require("./moon.0707.jpg"),
    "189": require("./moon.0708.jpg"),
    "190": require("./moon.0709.jpg"),
    "191": require("./moon.0710.jpg"),
    "192": require("./moon.0711.jpg"),
    "193": require("./moon.0712.jpg"),
    "194": require("./moon.0713.jpg"),
    "195": require("./moon.0714.jpg"),
    "196": require("./moon.0715-phase-100.jpg"),
    "197": require("./moon.0716.jpg"),
    "198": require("./moon.0717.jpg"),
    "199": require("./moon.0718.jpg"),
    "200": require("./moon.0719.jpg"),
    "201": require("./moon.0720.jpg"),
    "202": require("./moon.0721.jpg"),
    "203": require("./moon.0722.jpg"),
    "204": require("./moon.0723.jpg"),
    "205": require("./moon.0724.jpg"),
    "206": require("./moon.0725.jpg"),
    "207": require("./moon.0726.jpg"),
    "208": require("./moon.0727.jpg"),
    "209": require("./moon.0728.jpg"),
    "210": require("./moon.0729.jpg"),
    "211": require("./moon.0730.jpg"),
    "212": require("./moon.0731-phase-0.jpg"),

    "213": require("./moon.0801.jpg"),
    "214": require("./moon.0802.jpg"),
    "215": require("./moon.0803.jpg"),
    "216": require("./moon.0804.jpg"),
    "217": require("./moon.0805.jpg"),
    "218": require("./moon.0806.jpg"),
    "219": require("./moon.0807.jpg"),
    "220": require("./moon.0808.jpg"),
    "221": require("./moon.0809.jpg"),
    "222": require("./moon.0810.jpg"),
    "223": require("./moon.0811.jpg"),
    "224": require("./moon.0812.jpg"),
    "225": require("./moon.0813.jpg"),
    "226": require("./moon.0814-phase-100.jpg"),
    "227": require("./moon.0815.jpg"),
    "228": require("./moon.0816.jpg"),
    "229": require("./moon.0817.jpg"),
    "230": require("./moon.0818.jpg"),
    "231": require("./moon.0819.jpg"),
    "232": require("./moon.0820.jpg"),
    "233": require("./moon.0821.jpg"),
    "234": require("./moon.0822.jpg"),
    "235": require("./moon.0823.jpg"),
    "236": require("./moon.0824.jpg"),
    "237": require("./moon.0825.jpg"),
    "238": require("./moon.0826.jpg"),
    "239": require("./moon.0827.jpg"),
    "240": require("./moon.0828.jpg"),
    "241": require("./moon.0829-phase-0.jpg"),
    "242": require("./moon.0830.jpg"),
    "243": require("./moon.0831.jpg"),

    "244": require("./moon.0901.jpg"),
    "245": require("./moon.0902.jpg"),
    "246": require("./moon.0903.jpg"),
    "247": require("./moon.0904.jpg"),
    "248": require("./moon.0905.jpg"),
    "249": require("./moon.0906.jpg"),
    "250": require("./moon.0907.jpg"),
    "251": require("./moon.0908.jpg"),
    "252": require("./moon.0909.jpg"),
    "253": require("./moon.0910.jpg"),
    "254": require("./moon.0911.jpg"),
    "255": require("./moon.0912-phase-100.jpg"),
    "256": require("./moon.0913.jpg"),
    "257": require("./moon.0914.jpg"),
    "258": require("./moon.0915.jpg"),
    "259": require("./moon.0916.jpg"),
    "260": require("./moon.0917.jpg"),
    "261": require("./moon.0918.jpg"),
    "262": require("./moon.0919.jpg"),
    "263": require("./moon.0920.jpg"),
    "264": require("./moon.0921.jpg"),
    "265": require("./moon.0922.jpg"),
    "266": require("./moon.0923.jpg"),
    "267": require("./moon.0924.jpg"),
    "268": require("./moon.0925.jpg"),
    "269": require("./moon.0926.jpg"),
    "270": require("./moon.0927-phase-0.jpg"),
    "271": require("./moon.0928.jpg"),
    "272": require("./moon.0929.jpg"),
    "273": require("./moon.0930.jpg"),

    "274": require("./moon.1001.jpg"),
    "275": require("./moon.1002.jpg"),
    "276": require("./moon.1003.jpg"),
    "277": require("./moon.1004.jpg"),
    "278": require("./moon.1005.jpg"),
    "279": require("./moon.1006.jpg"),
    "280": require("./moon.1007.jpg"),
    "281": require("./moon.1008.jpg"),
    "282": require("./moon.1009.jpg"),
    "283": require("./moon.1010.jpg"),
    "284": require("./moon.1011.jpg"),
    "285": require("./moon.1012-phase-100.jpg"),
    "286": require("./moon.1013.jpg"),
    "287": require("./moon.1014.jpg"),
    "288": require("./moon.1015.jpg"),
    "289": require("./moon.1016.jpg"),
    "290": require("./moon.1017.jpg"),
    "291": require("./moon.1018.jpg"),
    "292": require("./moon.1019.jpg"),
    "293": require("./moon.1020.jpg"),
    "294": require("./moon.1021.jpg"),
    "295": require("./moon.1022.jpg"),
    "296": require("./moon.1023.jpg"),
    "297": require("./moon.1024.jpg"),
    "298": require("./moon.1025.jpg"),
    "299": require("./moon.1026.jpg"),
    "300": require("./moon.1027-phase-0.jpg"),
    "301": require("./moon.1028.jpg"),
    "302": require("./moon.1029.jpg"),
    "303": require("./moon.1030.jpg"),
    "304": require("./moon.1031.jpg"),

    "305": require("./moon.1101.jpg"),
    "306": require("./moon.1102.jpg"),
    "307": require("./moon.1103.jpg"),
    "308": require("./moon.1104.jpg"),
    "309": require("./moon.1105.jpg"),
    "310": require("./moon.1106.jpg"),
    "311": require("./moon.1107.jpg"),
    "312": require("./moon.1108.jpg"),
    "313": require("./moon.1109.jpg"),
    "314": require("./moon.1110.jpg"),
    "315": require("./moon.1111-phase-100.jpg"),
    "316": require("./moon.1112.jpg"),
    "317": require("./moon.1113.jpg"),
    "318": require("./moon.1114.jpg"),
    "319": require("./moon.1115.jpg"),
    "320": require("./moon.1116.jpg"),
    "321": require("./moon.1117.jpg"),
    "322": require("./moon.1118.jpg"),
    "323": require("./moon.1119.jpg"),
    "324": require("./moon.1120.jpg"),
    "325": require("./moon.1121.jpg"),
    "326": require("./moon.1122.jpg"),
    "327": require("./moon.1123.jpg"),
    "328": require("./moon.1124.jpg"),
    "329": require("./moon.1125-phase-0.jpg"),
    "330": require("./moon.1126.jpg"),
    "331": require("./moon.1127.jpg"),
    "332": require("./moon.1128.jpg"),
    "333": require("./moon.1129.jpg"),
    "334": require("./moon.1130.jpg"),
    

    "335": require("./moon.1201.jpg"),
    "336": require("./moon.1202.jpg"),
    "337": require("./moon.1203.jpg"),
    "338": require("./moon.1204.jpg"),
    "339": require("./moon.1205.jpg"),
    "340": require("./moon.1206.jpg"),
    "341": require("./moon.1207.jpg"),
    "342": require("./moon.1208.jpg"),
    "343": require("./moon.1209.jpg"),
    "344": require("./moon.1210.jpg"),
    "345": require("./moon.1211-phase-100.jpg"),
    "346": require("./moon.1212.jpg"),
    "347": require("./moon.1213.jpg"),
    "348": require("./moon.1214.jpg"),
    "349": require("./moon.1215.jpg"),
    "350": require("./moon.1216.jpg"),
    "351": require("./moon.1217.jpg"),
    "352": require("./moon.1218.jpg"),
    "353": require("./moon.1219.jpg"),
    "354": require("./moon.1220.jpg"),
    "355": require("./moon.1221.jpg"),
    "356": require("./moon.1222.jpg"),
    "357": require("./moon.1223.jpg"),
    "358": require("./moon.1224.jpg"),
    "359": require("./moon.1225-phase-0.jpg"),
    "360": require("./moon.1226.jpg"),
    "361": require("./moon.1227.jpg"),
    "362": require("./moon.1228.jpg"),
    "363": require("./moon.1229.jpg"),
    "364": require("./moon.1230.jpg"),
    "365": require("./moon.1231.jpg"), 
    
}

export default MOONIMAGES;