const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/bananarchy"
);

const itemSeed = [
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Small",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b752073d.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Medium",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b752073d.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Large",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b752073d.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "XL",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b752073d.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "2XL",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b752073d.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "3XL",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b752073d.jpg",
        cost: 22,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "4XL",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b752073d.jpg",
        cost: 24.5,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Small",
        color: "Silver",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-de2f9e6b.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Medium",
        color: "Silver",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-de2f9e6b.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Large",
        color: "Silver",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-de2f9e6b.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "XL",
        color: "Silver",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-de2f9e6b.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "2XL",
        color: "Silver",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-de2f9e6b.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "3XL",
        color: "Silver",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-de2f9e6b.jpg",
        cost: 22,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "4XL",
        color: "Silver",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-de2f9e6b.jpg",
        cost: 24.5,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Small",
        color: "Ash",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-5b8a879c.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Medium",
        color: "Ash",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-5b8a879c.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Large",
        color: "Ash",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-5b8a879c.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "XL",
        color: "Ash",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-5b8a879c.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "2XL",
        color: "Ash",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-5b8a879c.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "3XL",
        color: "Ash",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-5b8a879c.jpg",
        cost: 22,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "4XL",
        color: "Ash",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-5b8a879c.jpg",
        cost: 24.5,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Small",
        color: "Ocean Blue",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-3cd5f896.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Medium",
        color: "Ocean Blue",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-3cd5f896.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Large",
        color: "Ocean Blue",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-3cd5f896.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "XL",
        color: "Ocean Blue",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-3cd5f896.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "2XL",
        color: "Ocean Blue",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-3cd5f896.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "3XL",
        color: "Ocean Blue",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-3cd5f896.jpg",
        cost: 22,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "4XL",
        color: "Ocean Blue",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-3cd5f896.jpg",
        cost: 24.5,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Small",
        color: "Yellow",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-56628efa.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Medium",
        color: "Yellow",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-56628efa.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "Large",
        color: "Yellow",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-56628efa.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "XL",
        color: "Yellow",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-56628efa.jpg",
        cost: 18,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "2XL",
        color: "Yellow",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-56628efa.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "3XL",
        color: "Yellow",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-56628efa.jpg",
        cost: 22,
        inCart: false
    },
    {
        name: "Bananarchy Original Logo Unisex T-Shirt",
        size: "4XL",
        color: "Yellow",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-56628efa.jpg",
        cost: 24.5,
        inCart: false
    },
    {
        name: "Unisex Bananarchy Logo Short Sleeve V-Neck T-Shirt",
        size: "XS",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b834eb39.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Unisex Bananarchy Logo Short Sleeve V-Neck T-Shirt",
        size: "Small",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b834eb39.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Unisex Bananarchy Logo Short Sleeve V-Neck T-Shirt",
        size: "Medium",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b834eb39.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Unisex Bananarchy Logo Short Sleeve V-Neck T-Shirt",
        size: "Large",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b834eb39.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Unisex Bananarchy Logo Short Sleeve V-Neck T-Shirt",
        size: "XL",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b834eb39.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Unisex Bananarchy Logo Short Sleeve V-Neck T-Shirt",
        size: "2XL",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-b834eb39.jpg",
        cost: 22,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "Small",
        color: "Army",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-201f9bb8.jpg",
        cost: 18.5,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "Medium",
        color: "Army",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-201f9bb8.jpg",
        cost: 18.5,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "Large",
        color: "Army",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-201f9bb8.jpg",
        cost: 18.5,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "XL",
        color: "Army",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-201f9bb8.jpg",
        cost: 18.5,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "2XL",
        color: "Army",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-201f9bb8.jpg",
        cost: 21,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "3XL",
        color: "Army",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-201f9bb8.jpg",
        cost: 23,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "4XL",
        color: "Army",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-201f9bb8.jpg",
        cost: 25,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "Small",
        color: "Heather True Royal",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-d9cc2ec4.jpg",
        cost: 18.5,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "Medium",
        color: "Heather True Royal",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-d9cc2ec4.jpg",
        cost: 18.5,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "Large",
        color: "Heather True Royal",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-d9cc2ec4.jpg",
        cost: 18.5,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "XL",
        color: "Heather True Royal",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-d9cc2ec4.jpg",
        cost: 18.5,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "2XL",
        color: "Heather True Royal",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-d9cc2ec4.jpg",
        cost: 21,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "3XL",
        color: "Heather True Royal",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-d9cc2ec4.jpg",
        cost: 23,
        inCart: false
    },
    {
        name: "Colorful Frozen Bananas Short-Sleeve Unisex T-Shirt",
        size: "4XL",
        color: "Heather True Royal",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-d9cc2ec4.jpg",
        cost: 25,
        inCart: false
    },
    {
        name: "Bananasaurus Infant Bodysuit",
        size: "6M",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-a9afd0a6.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananasaurus Infant Bodysuit",
        size: "12M",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-a9afd0a6.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananasaurus Infant Bodysuit",
        size: "18M",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-a9afd0a6.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananasaurus Infant Bodysuit",
        size: "24M",
        color: "White",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-a9afd0a6.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananasaurus Infant Bodysuit",
        size: "6M",
        color: "Pink",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-8c4f9266.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananasaurus Infant Bodysuit",
        size: "12M",
        color: "Pink",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-8c4f9266.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananasaurus Infant Bodysuit",
        size: "18M",
        color: "Pink",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-8c4f9266.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananasaurus Infant Bodysuit",
        size: "24M",
        color: "Pink",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-8c4f9266.jpg",
        cost: 20,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "XS",
        color: "Vintage Black",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-c4651a29.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Small",
        color: "Vintage Black",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-c4651a29.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Medium",
        color: "Vintage Black",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-c4651a29.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Large",
        color: "Vintage Black",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-c4651a29.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "XL",
        color: "Vintage Black",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-c4651a29.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "XS",
        color: "Vintage Navy",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-962d6fdb.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Small",
        color: "Vintage Navy",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-962d6fdb.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Medium",
        color: "Vintage Navy",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-962d6fdb.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Large",
        color: "Vintage Navy",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-962d6fdb.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "XL",
        color: "Vintage Navy",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-962d6fdb.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "XS",
        color: "Purple Rush",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-0d40342d.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Small",
        color: "Purple Rush",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-0d40342d.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Medium",
        color: "Purple Rush",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-0d40342d.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Large",
        color: "Purple Rush",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-0d40342d.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "XL",
        color: "Purple Rush",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-0d40342d.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "XS",
        color: "Vintage Royal",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-f111277d.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Small",
        color: "Vintage Royal",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-f111277d.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Medium",
        color: "Vintage Royal",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-f111277d.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Large",
        color: "Vintage Royal",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-f111277d.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "XL",
        color: "Vintage Royal",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-f111277d.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "XS",
        color: "Vintage Red",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-bd1e568a.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Small",
        color: "Vintage Red",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-bd1e568a.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Medium",
        color: "Vintage Red",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-bd1e568a.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Large",
        color: "Vintage Red",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-bd1e568a.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "XL",
        color: "Vintage Red",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-bd1e568a.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "XS",
        color: "Vintage Shocking Pink",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-57695635.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Small",
        color: "Vintage Shocking Pink",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-57695635.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Medium",
        color: "Vintage Shocking Pink",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-57695635.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "Large",
        color: "Vintage Shocking Pink",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-57695635.jpg",
        cost: 22.5,
        inCart: false
    },
    {
        name: "Bananasaurus Racerback Tank",
        size: "XL",
        color: "Vintage Shocking Pink",
        img: "http://bananarchy.net/blog/wp-content/uploads/mockup-57695635.jpg",
        cost: 22.5,
        inCart: false
    }
]

db.Items
    .remove({})
    .then(() => db.Items.collection.insertMany(itemSeed))
    .then(data => {
        console.log(data.result.n + " items added to database");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });