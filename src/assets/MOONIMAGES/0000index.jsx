// index of MOONIMAGES array corresponds with the day of year.
// ie. October 11 is the 284th day of the year out of 365 days.
// MOONIMAGE[284] === image of that night's moon.
// jpg file name in MONTH/DATE format === "MMDD.jpg" ; October 11 === "1011.jpg" 

// little code to produce all the key/value pairs...
// for(let i = 1 ; i <= 31 ; i++ ){
//    console.log(`{"imgRef": require("./01${String(i).padStart(2, "0")}.jpg"), "position": "" },`)
// };

const MOONIMAGES = [
    {'imgRef': require('./0000.jpg'), 'position': 'Place Holder' },
    {'imgRef': require('./0101.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0102.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0103.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0104.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0105.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0106.jpg'), 'position': 'Full Moon' },
    {'imgRef': require('./0107.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0108.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0109.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0110.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0111.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0112.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0113.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0114.jpg'), 'position': 'Third Quarter' },
    {'imgRef': require('./0115.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0116.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0117.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0118.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0119.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0120.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0121.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./0122.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0123.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0124.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0125.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0126.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0127.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0128.jpg'), 'position': 'First Quarter' },
    {'imgRef': require('./0129.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0130.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0131.jpg'), 'position': 'Waxing Gibbous' }, //31


    {'imgRef': require('./0201.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0202.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0203.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0204.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0205.jpg'), 'position': 'Full Moon' },
    {'imgRef': require('./0206.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0207.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0208.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0209.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0210.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0211.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0212.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0213.jpg'), 'position': 'Third Quarter' },
    {'imgRef': require('./0214.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0215.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0216.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0217.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0218.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0219.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./0220.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0221.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0222.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0223.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0224.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0225.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0226.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0227.jpg'), 'position': 'First Quarter' },
    {'imgRef': require('./0228.jpg'), 'position': 'Waxing Gibbous' }, //28
    

    {'imgRef': require('./0301.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0302.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0303.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0304.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0305.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0306.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0307.jpg'), 'position': 'Full Moon' },
    {'imgRef': require('./0308.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0309.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0310.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0311.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0312.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0313.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0314.jpg'), 'position': 'Third Quarter' },
    {'imgRef': require('./0315.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0316.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0317.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0318.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0319.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0320.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0321.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./0322.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0323.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0324.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0325.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0326.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0327.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0328.jpg'), 'position': 'First Quarter' },
    {'imgRef': require('./0329.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0330.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0331.jpg'), 'position': 'Waxing Gibbous' }, //31


    {'imgRef': require('./0401.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0402.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0403.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0404.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0405.jpg'), 'position': 'Full Moon' },
    {'imgRef': require('./0406.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0407.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0408.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0409.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0410.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0411.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0412.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0413.jpg'), 'position': 'Third Quarter' },
    {'imgRef': require('./0414.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0415.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0416.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0417.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0418.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0419.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./0420.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0421.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0422.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0423.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0424.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0425.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0426.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0427.jpg'), 'position': 'First Quarter' },
    {'imgRef': require('./0428.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0429.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0430.jpg'), 'position': 'Waxing Gibbous' }, //30


    {'imgRef': require('./0501.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0502.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0503.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0504.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0505.jpg'), 'position': 'Full Moon' },
    {'imgRef': require('./0506.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0507.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0508.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0509.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0510.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0511.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0512.jpg'), 'position': 'Third Quarter' },
    {'imgRef': require('./0513.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0514.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0515.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0516.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0517.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0518.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0519.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./0520.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0521.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0522.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0523.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0524.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0525.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0526.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0527.jpg'), 'position': 'First Quarter' },
    {'imgRef': require('./0528.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0529.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0530.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0531.jpg'), 'position': 'Waxing Gibbous' }, //31

    {'imgRef': require('./0601.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0602.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0603.jpg'), 'position': 'Full Moon' },
    {'imgRef': require('./0604.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0605.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0606.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0607.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0608.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0609.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0610.jpg'), 'position': 'Third Quarter' },
    {'imgRef': require('./0611.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0612.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0613.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0614.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0615.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0616.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0617.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./0618.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0619.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0620.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0621.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0622.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0623.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0624.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0625.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0626.jpg'), 'position': 'First Quarter' },
    {'imgRef': require('./0627.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0628.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0629.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0630.jpg'), 'position': 'Waxing Gibbous' }, //30


    {'imgRef': require('./0701.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0702.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0703.jpg'), 'position': 'Full Moon' },
    {'imgRef': require('./0704.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0705.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0706.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0707.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0708.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0709.jpg'), 'position': 'Third Quarter' },
    {'imgRef': require('./0710.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0711.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0712.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0713.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0714.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0715.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0716.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0717.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./0718.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0719.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0720.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0721.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0722.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0723.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0724.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0725.jpg'), 'position': 'First Quarter' },
    {'imgRef': require('./0726.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0727.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0728.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0729.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0730.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0731.jpg'), 'position': 'Waxing Gibbous' }, //31

    {'imgRef': require('./0801.jpg'), 'position': 'Full Moon' },
    {'imgRef': require('./0802.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0803.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0804.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0805.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0806.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0807.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0808.jpg'), 'position': 'Third Quarter' },
    {'imgRef': require('./0809.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0810.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0811.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0812.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0813.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0814.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0815.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0816.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./0817.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0818.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0819.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0820.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0821.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0822.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0823.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0824.jpg'), 'position': 'First Quarter' },
    {'imgRef': require('./0825.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0826.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0827.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0828.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0829.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0830.jpg'), 'position': 'Full Moon' },
    {'imgRef': require('./0831.jpg'), 'position': 'Waning Gibbous' }, //31


    {'imgRef': require('./0901.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0902.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0903.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0904.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0905.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./0906.jpg'), 'position': 'Third Quarter' },
    {'imgRef': require('./0907.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0908.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0909.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0910.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0911.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0912.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0913.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./0914.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./0915.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0916.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0917.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0918.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0919.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0920.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0921.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./0922.jpg'), 'position': 'First Quarter' },
    {'imgRef': require('./0923.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0924.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0925.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0926.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0927.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0928.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./0929.jpg'), 'position': 'Full Moon' },
    {'imgRef': require('./0930.jpg'), 'position': 'Waning Gibbous' }, //30


    {'imgRef': require('./1001.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./1002.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./1003.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./1004.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./1005.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./1006.jpg'), 'position': 'Third Quarter' },
    {'imgRef': require('./1007.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./1008.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./1009.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./1010.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./1011.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./1012.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./1013.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./1014.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./1015.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./1016.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./1017.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./1018.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./1019.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./1020.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./1021.jpg'), 'position': 'First Quarter' }, 

    {'imgRef': require('./c1022.jpg'), 'position': 'Waning Crescent' }, // 2022
    {'imgRef': require('./c1023.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1024.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1025.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./c1026.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1027.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1028.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1029.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1030.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1031.jpg'), 'position': 'First Quarter' }, //31


    {'imgRef': require('./c1101.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1102.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1103.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1104.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1105.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1106.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1107.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1108.jpg'), 'position': 'Full Moon' },
    {'imgRef': require('./c1109.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1110.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1111.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1112.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1113.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1114.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1115.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1116.jpg'), 'position': 'Third Quarter' },
    {'imgRef': require('./c1117.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1118.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1119.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1120.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1121.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1122.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1123.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./c1124.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1125.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1126.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1127.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1128.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1129.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1130.jpg'), 'position': 'First Quarter' }, //30


    {'imgRef': require('./c1201.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1202.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1203.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1204.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1205.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1206.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1207.jpg'), 'position': 'Full Moon' },
    {'imgRef': require('./c1208.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1209.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1210.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1211.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1212.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1213.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1214.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1215.jpg'), 'position': 'Waning Gibbous' },
    {'imgRef': require('./c1216.jpg'), 'position': 'Third Quarter' },
    {'imgRef': require('./c1217.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1218.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1219.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1220.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1221.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1222.jpg'), 'position': 'Waning Crescent' },
    {'imgRef': require('./c1223.jpg'), 'position': 'New Moon' },
    {'imgRef': require('./c1224.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1225.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1226.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1227.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1228.jpg'), 'position': 'Waxing Crescent' },
    {'imgRef': require('./c1229.jpg'), 'position': 'First Quarter' },
    {'imgRef': require('./c1230.jpg'), 'position': 'Waxing Gibbous' },
    {'imgRef': require('./c1231.jpg'), 'position': 'Waxing Gibbous' }, //31
]

export default MOONIMAGES;