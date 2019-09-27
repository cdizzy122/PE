if(typeof window.items == "undefined"){
    window.items = {};
}

$.extend(true, window.items, {
    itemMasters:{
        //Bras
        bras:{
            itemType:"bra",
            clothingSlot:"bra",
            name:"Bras",
            itemMaster: "bras",
            daring:3,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                plain:true,
            }
        },
        sexyBras:{
            itemType:"bra",
            clothingSlot:"bra",
            name:"Lacy Bras",
            itemMaster: "sexyBras",
            daring:4,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                sexy:true,
            }
        },
        latexBras:{
            itemType:"bra",
            clothingSlot:"bra",
            name:"Latex Bras",
            itemMaster: "latexBras",
            daring:6,
            disabled:false,
            hasWorn:false,
            isMale:false,
            isFemale:true,
            tags:{
                sexy:true,
                slutty:true,
            }
        },
    },
    itemChildren:{
        //bras
        bras0:{
            masterItem:"bras",
            variant:"bra_00",
            name:"White Lacy Bra",
            price:10,
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
        bras1:{
            masterItem:"bras",
            variant:"bra_01",
            name:"White Frilly Bra",
            price:10,
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
        bras2:{
            masterItem:"bras",
            variant:"bra_02",
            name:"White Cotton Bra with Frilly Back",
            price:10,
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
        bras3:{
            masterItem:"bras",
            variant:"bra_03",
            name:"White Polkadot Bra with Grey Lace",
            price:10,
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
        bras4:{
            masterItem:"bras",
            variant:"bra_04",
            name:"Pink Satin Bra",
            price:10,
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
        bras5:{
            masterItem:"bras",
            variant:"bra_05",
            name:"Pink Cotton Bra with Blue Bow",
            price:10,
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
        bras6:{
            masterItem:"bras",
            variant:"bra_06",
            name:"Pink Cotton Bra with White Lace Trim",
            price:10,
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
        bras7:{
            masterItem:"bras",
            variant:"bra_07",
            name:"Black Strapless Bra",
            price:10,
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
        bras8:{
            masterItem:"bras",
            variant:"bra_08",
            name:"Blue Cotton Patterned Bra",
            price:10,
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
        bras9:{
            masterItem:"bras",
            variant:"bra_09",
            name:"Green Lacy Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                green:true,
                plain:true,
                school:true,
            }
        },
        bras10:{
            masterItem:"bras",
            variant:"bra_10",
            name:"Blue and Grey Sports Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                blue:true,
                grey:true,
                plain:true,
                school:true,
            }
        },
        bras11:{
            masterItem:"bras",
            variant:"bra_11",
            name:"Red and Grey Sports Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                grey:true,
                red:true,
                plain:true,
                school:true,
            }
        },
        bras12:{
            masterItem:"bras",
            variant:"bra_12",
            name:"White Sports Bra with Grey Straps",
            price:10,
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
        bras13:{
            masterItem:"bras",
            variant:"bra_13",
            name:"Baby Blue Bra",
            price:10,
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
        bras14:{
            masterItem:"bras",
            variant:"bra_14",
            name:"Blue Sports Bra with Pink Trim",
            price:10,
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
        bras15:{
            masterItem:"bras",
            variant:"bra_15",
            name:"Blue Lacy Bra",
            price:10,
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
        bras16:{
            masterItem:"bras",
            variant:"bra_16",
            name:"Grey Lacy Bra",
            price:10,
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
        bras17:{
            masterItem:"bras",
            variant:"bra_17",
            name:"Black Lacy Bra",
            price:10,
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
        bras18:{
            masterItem:"bras",
            variant:"bra_18",
            name:"Pink Long Bra with Pink Straps",
            price:10,
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
        bras19:{
            masterItem:"bras",
            variant:"bra_19",
            name:"Blue Sheer Bra with Black Straps",
            price:10,
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
        bras20:{
            masterItem:"bras",
            variant:"bra_20",
            name:"Cream Cotton Bra",
            price:10,
            daring:3,
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
        bras21:{
            masterItem:"bras",
            variant:"bra_21",
            name:"Green Frilly Bra",
            price:10,
            daring:3,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                green:true,
                plain:true,
                school:true,
            }
        },
        bras22:{
            masterItem:"bras",
            variant:"bra_22",
            name:"Black Bra",
            price:10,
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
        bras23:{
            masterItem:"bras",
            variant:"bra_40",
            name:"Black Polkadot Bra with Red Trim and Bow",
            price:10,
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

        //sexyBras
        sexyBras0:{
            masterItem:"sexyBras",
            variant:"bra_sexy_00",
            name:"Red Tartan Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                red:true,
                sexy:true,
                tartan:true,
            }
        },
        sexyBras1:{
            masterItem:"sexyBras",
            variant:"bra_sexy_01",
            name:"Red Sexy Bra with Black Straps and Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                red:true,
                sexy:true,
            }
        },
        sexyBras2:{
            masterItem:"sexyBras",
            variant:"bra_sexy_02",
            name:"Pink Sexy Bra with Black Straps and Bow",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras3:{
            masterItem:"sexyBras",
            variant:"bra_sexy_03",
            name:"Pink Polkadot Sexy Bra with Black Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras4:{
            masterItem:"sexyBras",
            variant:"bra_sexy_04",
            name:"Blue Lacy Sexy Bra with White Straps",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                blue:true,
                sexy:true,
            }
        },
        sexyBras5:{
            masterItem:"sexyBras",
            variant:"bra_sexy_05",
            name:"Bright Pink and Baby Pink Lacy Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras6:{
            masterItem:"sexyBras",
            variant:"bra_sexy_06",
            name:"Purple Lacy Sexy Bra with Pink Straps",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras7:{
            masterItem:"sexyBras",
            variant:"bra_sexy_07",
            name:"Pink Sexy Bra with Black Lace",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras8:{
            masterItem:"sexyBras",
            variant:"bra_sexy_08",
            name:"Yellow Satin Sexy Bra with Black Straps and Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                yellow:true,
                sexy:true,
            }
        },
        sexyBras9:{
            masterItem:"sexyBras",
            variant:"bra_sexy_09",
            name:"Purple Sexy Bra with Light Purple Straps and Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                purple:true,
                sexy:true,
            }
        },
        sexyBras10:{
            masterItem:"sexyBras",
            variant:"bra_sexy_10",
            name:"Purple Sexy Bra with Frilly Trim and Bow",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                purple:true,
                sexy:true,
            }
        },
        sexyBras11:{
            masterItem:"sexyBras",
            variant:"bra_sexy_11",
            name:"Pink Sexy Low Cut Bra with Black Straps and Bows",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras12:{
            masterItem:"sexyBras",
            variant:"bra_sexy_12",
            name:"Blue Sexy Satin Bra with Black Straps and Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                blue:true,
                sexy:true,
            }
        },
        sexyBras13:{
            masterItem:"sexyBras",
            variant:"bra_sexy_13",
            name:"Blue Sexy Coton Bra with White Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                blue:true,
                sexy:true,
            }
        },
        sexyBras14:{
            masterItem:"sexyBras",
            variant:"bra_sexy_14",
            name:"Black Lacy Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras15:{
            masterItem:"sexyBras",
            variant:"bra_sexy_15",
            name:"Black Sexy Bra with Black Lacing and Bow",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras16:{
            masterItem:"sexyBras",
            variant:"bra_sexy_16",
            name:"Black Sheer Sexy Bra with Black Straps",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras17:{
            masterItem:"sexyBras",
            variant:"bra_sexy_17",
            name:"Pink Sexy Full Cup Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras18:{
            masterItem:"sexyBras",
            variant:"bra_sexy_18",
            name:"Red Lacy Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                red:true,
                sexy:true,
            }
        },
        sexyBras19:{
            masterItem:"sexyBras",
            variant:"bra_sexy_19",
            name:"White Leopard Pink Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                sexy:true,
            }
        },
        sexyBras20:{
            masterItem:"sexyBras",
            variant:"bra_sexy_20",
            name:"Black Lacy Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras21:{
            masterItem:"sexyBras",
            variant:"bra_sexy_21",
            name:"Black Sheer Lacy Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras22:{
            masterItem:"sexyBras",
            variant:"bra_sexy_22",
            name:"White Lacy Sexy Bra with Pink Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                white:true,
                sexy:true,
            }
        },
        sexyBras23:{
            masterItem:"sexyBras",
            variant:"bra_sexy_23",
            name:"Pink Frilly Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras24:{
            masterItem:"sexyBras",
            variant:"bra_sexy_24",
            name:"Black Sheer Sexy Bra with Black Straps",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras25:{
            masterItem:"sexyBras",
            variant:"bra_sexy_25",
            name:"Black Sexy Bra with Black Lacy Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras26:{
            masterItem:"sexyBras",
            variant:"bra_sexy_26",
            name:"Pink Sexy Bra with Black Straps and Trim",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras27:{
            masterItem:"sexyBras",
            variant:"bra_sexy_27",
            name:"Pink and Grey Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                grey:true,
                sexy:true,
            }
        },
        sexyBras28:{
            masterItem:"sexyBras",
            variant:"bra_sexy_40",
            name:"Black Sexy Bra with Pink Bow and Ribbon",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                black:true,
                sexy:true,
            }
        },
        sexyBras29:{
            masterItem:"sexyBras",
            variant:"bra_sexy_41",
            name:"Red Lacy Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                red:true,
                sexy:true,
            }
        },
        sexyBras30:{
            masterItem:"sexyBras",
            variant:"bra_sexy_60",
            name:"Pink Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                sexy:true,
            }
        },
        sexyBras31:{
            masterItem:"sexyBras",
            variant:"bra_sexy_61",
            name:"Pink Sexy Bra",
            price:40,
            daring:4,
            disabled:false,
            isMale:false,
            isFemale:true,
            isItemSet:false,
            setName:"",
            tags:{
                pink:true,
                sexy:true,
            }
        },

        //latexBras
        latexBras0:{
            masterItem:"latexBras",
            variant:"bra_latex_00",
            name:"Black Low Cut Latex Bra",
            price:150,
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
        latexBras1:{
            masterItem:"latexBras",
            variant:"bra_latex_01",
            name:"Black Full Cup Latex Bra",
            price:150,
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
        latexBras2:{
            masterItem:"latexBras",
            variant:"bra_latex_02",
            name:"Black Cutout Latex Bra",
            price:150,
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