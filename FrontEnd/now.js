let a = [
    {
        _id: "6735ec8d62b7e1e64dcba4b4",
        image: "hw",
        title: "now here",
        address: "new home",
        number: 250790417504,
        workingHours: "always",
        avairableServices: [],
        studentReviews: [
            {
                _id: "6735ebb926f603fa5f3e0ecd",
                name: "patrick",
                email: "rumpatr048@gmail.com",
                picture: "hdhhdh",
                favourite: [],
                reviews: [
                    {
                        id: "6735ec8d62b7e1e64dcba4b4",
                        review: "i like this one",
                        _id: "6735ecc2d897326175a86e64"
                    },
                    {
                        id: "6735ec8d62b7e1e64dcba4b4",
                        review: "i do it",
                        _id: "6735ed3dd897326175a86e6a"
                    },
                    {
                        id: "6735ec8d62b7e1e64dcba4b4",
                        review: "i do it",
                        _id: "6735ee97dad10f2c8c6c8202"
                    },
                    {
                        id: "6735ec8d62b7e1e64dcba4b4",
                        review: "thanks good!",
                        _id: "6735f3fe675b21a5d8b8005d"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f43f675b21a5d8b80065"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f462675b21a5d8b80074"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f4e7065aaff9c17563ea"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f50291379543518b4552"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f57ed0fbe3abcc7ebec9"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f5cc975ac352d58bac54"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f5f2975ac352d58bac63"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nicellly!",
                        _id: "6735f615975ac352d58bac72"
                    }
                ],

                id: "6735ebb926f603fa5f3e0ecd"
            }
        ],
        inventory: [],
        id: "6735ec8d62b7e1e64dcba4b4"
    },
    {
        _id: "6735f3b11fd5049b07e55b7f",
        image: "hw",
        title: "pharma kgl",
        address: "new home",
        number: 250790417509,
        workingHours: "always",
        avairableServices: [],
        studentReviews: [
            {
                _id: "6735ebb926f603fa5f3e0ecd",
                name: "patrick",
                email: "rumpatr048@gmail.com",
                picture: "hdhhdh",
                favourite: [],
                reviews: [
                    {
                        id: "6735ec8d62b7e1e64dcba4b4",
                        review: "i like this one",
                        _id: "6735ecc2d897326175a86e64"
                    },
                    {
                        id: "6735ec8d62b7e1e64dcba4b4",
                        review: "i do it",
                        _id: "6735ed3dd897326175a86e6a"
                    },
                    {
                        id: "6735ec8d62b7e1e64dcba4b4",
                        review: "i do it",
                        _id: "6735ee97dad10f2c8c6c8202"
                    },
                    {
                        id: "6735ec8d62b7e1e64dcba4b4",
                        review: "thanks good!",
                        _id: "6735f3fe675b21a5d8b8005d"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f43f675b21a5d8b80065"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f462675b21a5d8b80074"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f4e7065aaff9c17563ea"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f50291379543518b4552"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f57ed0fbe3abcc7ebec9"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f5cc975ac352d58bac54"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nice!",
                        _id: "6735f5f2975ac352d58bac63"
                    },
                    {
                        id: "6735f3b11fd5049b07e55b7f",
                        review: "new nicellly!",
                        _id: "6735f615975ac352d58bac72"
                    }
                ],

                id: "6735ebb926f603fa5f3e0ecd"
            }
        ],
        inventory: [],

        id: "6735f3b11fd5049b07e55b7f"
    }
]

// let  c = JSON.parse(a);


let b = a.map(pharma => {
    return {
        ...pharma,
        studentReviews: pharma.studentReviews.map(usr => {
            return {
                ...usr,
                reviews: usr.reviews.filter(rev => {
                    return rev._id === pharma._id
                })
            }
        })
    }
})

console.log(b);