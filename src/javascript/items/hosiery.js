if(typeof window.items == "undefined"){
    window.items = {};
}

$.extend(true, window.items, {
    itemMasters:{
        //Hosiery
        socks:{
            itemType:"hosiery",
            clothingSlot:"hosiery",
            name:"Socks",
            itemMaster: "socks",
            daring:0,
            disabled:false,
            hasWorn:false,
            isMale:true,
            isFemale:true,
            tags:{
                plain:true,
            }
        },
        stockings:{
            itemType:"hosiery",
            clothingSlot:"hosiery",
            name:"Stockings",
            itemMaster: "stockings",
            daring:4,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                plain:true,
            }
        },
        latexStockings:{
            itemType:"hosiery",
            clothingSlot:"hosiery",
            name:"Latex Stockings",
            itemMaster: "latexStockings",
            daring:6,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                sexy:true,
            }
        },
    },
    itemChildren:{
        //socks
        socks0:{
            masterItem:"socks",
            variant:"socks_00",
            name:"Black Knee High Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        socks1:{
            masterItem:"socks",
            variant:"socks_01",
            name:"Black Over Knee Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        socks2:{
            masterItem:"socks",
            variant:"socks_02",
            name:"White Over Knee Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        socks3:{
            masterItem:"socks",
            variant:"socks_03",
            name:"White Scrunch Cotton Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        socks4:{
            masterItem:"socks",
            variant:"socks_04",
            name:"Black Over Knee Socks with White Strips",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        socks5:{
            masterItem:"socks",
            variant:"socks_05",
            name:"White Over Knee Socks with Red Stripes",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        socks6:{
            masterItem:"socks",
            variant:"socks_06",
            name:"Grey Over Knee Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                grey:true,
                plain:true,
                school:true,
            }
        },
        socks7:{
            masterItem:"socks",
            variant:"socks_07",
            name:"Grey Knee High Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                grey:true,
                plain:true,
                school:true,
            }
        },
        socks8:{
            masterItem:"socks",
            variant:"socks_08",
            name:"Grey Knee High Socks with Grey Lace",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                grey:true,
                plain:true,
                school:true,
            }
        },
        socks9:{
            masterItem:"socks",
            variant:"socks_09",
            name:"Grey Woolen Knee High Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                grey:true,
                plain:true,
                school:true,
            }
        },
        socks10:{
            masterItem:"socks",
            variant:"socks_10",
            name:"Grey Over Knee Socks with White Lace and Bows",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                grey:true,
                plain:true,
                school:true,
            }
        },
        socks11:{
            masterItem:"socks",
            variant:"socks_11",
            name:"White Knee High Socks with White Lace",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        socks12:{
            masterItem:"socks",
            variant:"socks_12",
            name:"White Knee High Socks with Cream Frills",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        socks13:{
            masterItem:"socks",
            variant:"socks_13",
            name:"White Over Knee Socks with Red Bows",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        socks14:{
            masterItem:"socks",
            variant:"socks_14",
            name:"Yellow Over Knee Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                yellow:true,
                plain:true,
                school:true,
            }
        },
        socks15:{
            masterItem:"socks",
            variant:"socks_15",
            name:"Dark Red Over Knee Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                red:true,
                plain:true,
                school:true,
            }
        },
        socks16:{
            masterItem:"socks",
            variant:"socks_16",
            name:"White Knee High Socks with Pink Stipes and Love Hearts",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        socks17:{
            masterItem:"socks",
            variant:"socks_17",
            name:"White Knee High Socks with White Lace",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        socks18:{
            masterItem:"socks",
            variant:"socks_18",
            name:"Pink and Purple Knee High Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                purple:true,
                plain:true,
                school:true,
            }
        },
        socks19:{
            masterItem:"socks",
            variant:"socks_19",
            name:"Purple Knee High Socks with Dogs",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                purple:true,
                plain:true,
                school:true,
            }
        },
        socks20:{
            masterItem:"socks",
            variant:"socks_20",
            name:"Blue Diamond Pattern Knee High Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                blue:true,
                plain:true,
                school:true,
            }
        },
        socks21:{
            masterItem:"socks",
            variant:"socks_21",
            name:"Pink and Purple Over Knee Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                purple:true,
                plain:true,
                school:true,
            }
        },
        socks22:{
            masterItem:"socks",
            variant:"socks_22",
            name:"Grey Over Knee Socks with Cream Hearts",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                grey:true,
                plain:true,
                school:true,
            }
        },
        socks23:{
            masterItem:"socks",
            variant:"socks_06",
            name:"Pink Over Knee Socks with White Stripes",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                grey:true,
                plain:true,
                school:true,
            }
        },
        socks24:{
            masterItem:"socks",
            variant:"socks_24",
            name:"Red Knee High Socks with Pink Stripes",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                plain:true,
                school:true,
            }
        },
        socks25:{
            masterItem:"socks",
            variant:"socks_25",
            name:"Pink Knee High Socks with Green Diamonds",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                plain:true,
                school:true,
            }
        },
        socks26:{
            masterItem:"socks",
            variant:"socks_26",
            name:"Grey, Red and Black Diamond Knee High Socks",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                grey:true,
                red:true,
                black:true,
                plain:true,
                school:true,
            }
        },
        socks27:{
            masterItem:"socks",
            variant:"socks_43",
            name:"White Ankle Socks with Red Writing",
            price:20,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },

        //stockings
        stockings0:{
            masterItem:"stockings",
            variant:"stockings_00",
            name:"Black Thigh High Stockings",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings1:{
            masterItem:"stockings",
            variant:"stockings_01",
            name:"Black Knee High Stockings",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings2:{
            masterItem:"stockings",
            variant:"stockings_02",
            name:"Black Thigh High Stockings with Black Bands",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings3:{
            masterItem:"stockings",
            variant:"stockings_03",
            name:"Black Sheer Knee High Stockings",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings4:{
            masterItem:"stockings",
            variant:"stockings_04",
            name:"Black Sheer Thigh High Stockings with Black Lace",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings5:{
            masterItem:"stockings",
            variant:"stockings_00",
            name:"Black Sheer Thigh High Stockings with Black Lace and Suspenders",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings6:{
            masterItem:"stockings",
            variant:"stockings_06",
            name:"White Sheer Thigh High Stockings",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        stockings7:{
            masterItem:"stockings",
            variant:"stockings_07",
            name:"Natural Thigh High Stockings",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                cream:true,
                plain:true,
                school:true,
            }
        },
        stockings8:{
            masterItem:"stockings",
            variant:"stockings_08",
            name:"Natural Thigh High Stockings with Lace and White Suspenders",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                cream:true,
                plain:true,
                school:true,
            }
        },
        stockings9:{
            masterItem:"stockings",
            variant:"stockings_09",
            name:"White Thigh High Stockings with Lace",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        stockings10:{
            masterItem:"stockings",
            variant:"stockings_10",
            name:"Natural Thigh High Stockings with White Lace",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                cream:true,
                plain:true,
                school:true,
            }
        },
        stockings11:{
            masterItem:"stockings",
            variant:"stockings_11",
            name:"White Thigh High Stockings with White Lace and Suspenders",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        stockings12:{
            masterItem:"stockings",
            variant:"stockings_12",
            name:"White Thigh High Stockings with White Lace and Bow",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        stockings13:{
            masterItem:"stockings",
            variant:"stockings_13",
            name:"Black Sheer Thigh High Stockings with Black Dots and Band",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings14:{
            masterItem:"stockings",
            variant:"stockings_14",
            name:"Sheer Thigh High Stockings with Black Feet and Bow Decoration",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings15:{
            masterItem:"stockings",
            variant:"stockings_15",
            name:"Black Sheer Thigh High Stockings with Red Bows",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings16:{
            masterItem:"stockings",
            variant:"stockings_00",
            name:"Red Knee High Fishnet Stockings",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                red:true,
                plain:true,
                school:true,
            }
        },
        stockings17:{
            masterItem:"stockings",
            variant:"stockings_17",
            name:"Red Thigh High Stockings with Red Bows",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                red:true,
                plain:true,
                school:true,
            }
        },
        stockings18:{
            masterItem:"stockings",
            variant:"stockings_18",
            name:"Black Knee High Stockings with Black Fishnet Pattern",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings19:{
            masterItem:"stockings",
            variant:"stockings_19",
            name:"White Knee High Stockings with White Laces",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        stockings20:{
            masterItem:"stockings",
            variant:"stockings_20",
            name:"Black Thigh High Stockings with Black Peepholes",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings21:{
            masterItem:"stockings",
            variant:"stockings_21",
            name:"Black Thigh High Stockings with Black Laces",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings22:{
            masterItem:"stockings",
            variant:"stockings_22",
            name:"White Thigh High Stockings with White Ribbons and Red Lovehearts",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                plain:true,
                school:true,
            }
        },
        stockings23:{
            masterItem:"stockings",
            variant:"stockings_23",
            name:"Pink Thigh High Fishnet Stockings",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                plain:true,
                school:true,
            }
        },
        stockings24:{
            masterItem:"stockings",
            variant:"stockings_24",
            name:"Black Over Knee Stockings",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings25:{
            masterItem:"stockings",
            variant:"stockings_25",
            name:"Black Thigh High Stockings with White Bows and Bone Decoration",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings26:{
            masterItem:"stockings",
            variant:"stockings_26",
            name:"Pink Fishnet Tights",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                plain:true,
                school:true,
            }
        },
        stockings27:{
            masterItem:"stockings",
            variant:"stockings_27",
            name:"Black Fishnet Stockings",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },
        stockings28:{
            masterItem:"stockings",
            variant:"stockings_28",
            name:"Red Fishnet Stockings",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                red:true,
                plain:true,
                school:true,
            }
        },
        stockings29:{
            masterItem:"stockings",
            variant:"stockings_39",
            name:"Black Thigh High Stockings with Red Bows",
            price:50,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                plain:true,
                school:true,
            }
        },

        //latexStockings
        latexStockings0:{
            masterItem:"latexStockings",
            variant:"stockings_latex_00",
            name:"Black Toeless Thigh High Latex Stockings",
            price:200,
            daring:6,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                sexy:true,
                slutty:true,
            }
        },
        latexStockings1:{
            masterItem:"latexStockings",
            variant:"stockings_latex_01",
            name:"Black Knee High Latex Stockings with Pink Frills",
            price:200,
            daring:6,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                sexy:true,
                slutty:true,
            }
        },
        latexStockings2:{
            masterItem:"latexStockings",
            variant:"stockings_latex_02",
            name:"Black Knee High Latex Stockings",
            price:200,
            daring:6,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                sexy:true,
                slutty:true,
            }
        },
        latexStockings3:{
            masterItem:"latexStockings",
            variant:"stockings_latex_03",
            name:"Pink Thigh High Latex Stockings with Black Bands",
            price:200,
            daring:6,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                sexy:true,
                slutty:true,
            }
        },
        latexStockings4:{
            masterItem:"latexStockings",
            variant:"stockings_latex_39",
            name:"Black Thigh High Latex Stockings",
            price:200,
            daring:6,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                sexy:true,
                slutty:true,
            }
        },     
    }
});